/**
 * GitHub OAuth Proxy for Decap CMS
 * Vercel Serverless Function - handles OAuth flow
 *
 * Required environment variables on Vercel:
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 */

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const ALLOWED_ORIGIN = "https://corepro-eg.com";

// HTML template to post message back to opener window
function postMessageHTML(status, content) {
  return `<!DOCTYPE html>
<html>
<head><title>Authenticating...</title></head>
<body>
<script>
(function() {
  function receiveMessage(e) {
    console.log("receiveMessage %o", e);
    if (e.data === "authorizing:github") {
      e.source.postMessage(
        'authorization:github:${status}:${JSON.stringify(content)}',
        e.origin
      );
    }
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
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

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { searchParams } = new URL(req.url, `https://${req.headers.host}`);
  const action = searchParams.get("action") || "";
  const code = searchParams.get("code") || "";
  const provider = searchParams.get("provider") || "github";

  // Step 1: Redirect to GitHub OAuth
  if (action === "auth" || (!code && !action)) {
    if (!GITHUB_CLIENT_ID) {
      res.status(500).send("Missing GITHUB_CLIENT_ID environment variable");
      return;
    }
    const params = new URLSearchParams({
      client_id: GITHUB_CLIENT_ID,
      scope: "repo,user",
      redirect_uri: `https://${req.headers.host}/api/auth?action=callback`,
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
        res.setHeader("Content-Type", "text/html");
        res.send(postMessageHTML("error", errContent));
        return;
      }

      const content = { token: tokenData.access_token, provider: "github" };
      res.setHeader("Content-Type", "text/html");
      res.send(postMessageHTML("success", content));
    } catch (err) {
      const errContent = { error: "server_error", error_description: String(err.message) };
      res.setHeader("Content-Type", "text/html");
      res.send(postMessageHTML("error", errContent));
    }
    return;
  }

  // Default
  res.status(400).send("Bad request. Use ?action=auth to start OAuth flow.");
}
