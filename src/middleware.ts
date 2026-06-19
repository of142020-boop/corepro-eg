import { defineMiddleware } from 'astro:middleware';

function unauthorized() {
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Core Pro Studio", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

// مقارنة آمنة ضد timing attacks
function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  // حماية أي شيء تحت /studio فقط
  if (!pathname.startsWith("/studio")) {
    return next();
  }

  const USER = import.meta.env.STUDIO_BASIC_USER || "";
  const PASS = import.meta.env.STUDIO_BASIC_PASS || "";

  // لو المتغيرات مش موجودة، امنع الوصول
  if (!USER || !PASS) return unauthorized();

  const auth = context.request.headers.get("authorization") || "";
  if (!auth.startsWith("Basic ")) return unauthorized();

  const b64 = auth.slice("Basic ".length).trim();

  let decoded = "";
  try {
    decoded = atob(b64);
  } catch {
    return unauthorized();
  }

  const sep = decoded.indexOf(":");
  if (sep === -1) return unauthorized();

  const user = decoded.slice(0, sep);
  const pass = decoded.slice(sep + 1);

  if (!safeEqual(user, USER) || !safeEqual(pass, PASS)) return unauthorized();

  // إضافة noindex زيادة أمان
  const response = await next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
});
