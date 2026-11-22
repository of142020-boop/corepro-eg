/**
 * GitHub OAuth Proxy for Decap CMS
 * Vercel Serverless Function - handles OAuth flow
 *
 * Required environment variables on Vercel:
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 */
import crypto from "node:crypto";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const ALLOWED_ORIGIN = "https://corepro-eg.com";
const STATE_COOKIE = "cms_oauth_state";

function parseCookies(header = "") {
  const cookies = {};
  for (const part of header.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) cookies[k] = decodeURIComponent(v);
  }
  return cookies;
}

// HTML template to post message back to opener window (origin-restricted & XSS-safe)
function postMessageHTML(status, content) {
  const safeStatus = status === "success" ? "success" : "error";
  const payload = JSON.stringify(`authorization:github:${safeStatus}:${JSON.stringify(content)}`)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
  const safeOrigin = JSON.stringify(ALLOWED_ORIGIN);

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Authenticating...</title></head>
<body>
<script>
(function() {
  var allowedOrigin = ${safeOrigin};
  var messagePayload = ${payload};
  function receiveMessage(e) {
    if (e.origin !== allowedOrigin) return;
    if (e.data === "authorizing:github" && e.source) {
      e.source.postMessage(messagePayload, allowedOrigin);
    }
  }
  window.addEventListener("message", receiveMessage, false);
  if (window.opener) {
    window.opener.postMessage("authorizing:github", allowedOrigin);
  }
})();
</script>
<p>Authenticating with GitHub... Please wait.</p>
</body>
</html>`;
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { searchParams } = new URL(req.url, `https://${req.headers.host}`);
  const action = searchParams.get("action") || "";
  const code = searchParams.get("code") || "";
  const returnedState = searchParams.get("state") || "";

  // Step 1: Redirect to GitHub OAuth with CSRF state token
  if (action === "auth" || (!code && !action)) {
    if (!GITHUB_CLIENT_ID) {
      res.status(500).send("Missing GITHUB_CLIENT_ID environment variable");
      return;
    }
    const state = crypto.randomBytes(16).toString("hex");
    res.setHeader(
      "Set-Cookie",
      `${STATE_COOKIE}=${state}; HttpOnly; Secure; SameSite=Lax; Path=/api/auth; Max-Age=600`
    );
    const params = new URLSearchParams({
      client_id: GITHUB_CLIENT_ID,
      scope: "repo,user",
      state,
      redirect_uri: `${ALLOWED_ORIGIN}/api/auth?action=callback`,
    });
    res.redirect(`https://github.com/login/oauth/authorize?${params}`);
    return;
  }

  // Step 2: Handle GitHub callback & exchange code for token
  if (action === "callback" && code) {
    if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
      res.status(500).send("Missing GitHub OAuth credentials in environment variables");
      return;
    }

    // Verify CSRF state cookie
    const cookies = parseCookies(req.headers.cookie || "");
    const expectedState = cookies[STATE_COOKIE] || "";
    res.setHeader(
      "Set-Cookie",
      `${STATE_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Path=/api/auth; Max-Age=0`
    );
    if (
      !expectedState ||
      !returnedState ||
      expectedState.length !== returnedState.length ||
      !crypto.timingSafeEqual(Buffer.from(expectedState), Buffer.from(returnedState))
    ) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.status(400).send(postMessageHTML("error", { error: "invalid_state", error_description: "OAuth state verification failed." }));
      return;
    }

    try {
      const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const tokenData = await tokenRes.json();

      if (tokenData.error || !tokenData.access_token) {
        const errContent = { error: tokenData.error || "no_access_token", error_description: tokenData.error_description || "" };
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.send(postMessageHTML("error", errContent));
        return;
      }

      const content = { token: tokenData.access_token, provider: "github" };
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.send(postMessageHTML("success", content));
    } catch (err) {
      const errContent = { error: "server_error", error_description: String(err.message) };
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.send(postMessageHTML("error", errContent));
    }
    return;
  }

  // Default
  res.status(400).send("Bad request. Use ?action=auth to start OAuth flow.");
}
