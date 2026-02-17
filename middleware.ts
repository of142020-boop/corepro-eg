// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function unauthorized() {
  const res = new NextResponse("Authentication required", { status: 401 });
  res.headers.set("WWW-Authenticate", 'Basic realm="CorePro Studio"');
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export function middleware(req: NextRequest) {
  const USER = process.env.STUDIO_BASIC_USER || "";
  const PASS = process.env.STUDIO_BASIC_PASS || "";

  // لو المتغيرات مش موجودة = امنع الدخول
  if (!USER || !PASS) return unauthorized();

  const auth = req.headers.get("authorization");
  if (!auth?.toLowerCase().startsWith("basic ")) return unauthorized();

  const base64 = auth.split(" ")[1] || "";

  // Edge Runtime: استخدم atob بدل Buffer
  let decoded = "";
  try {
    decoded = atob(base64);
  } catch {
    return unauthorized();
  }

  const sepIndex = decoded.indexOf(":");
  if (sepIndex === -1) return unauthorized();

  const user = decoded.slice(0, sepIndex);
  const pass = decoded.slice(sepIndex + 1);

  if (user !== USER || pass !== PASS) return unauthorized();

  return NextResponse.next();
}

// حماية /studio فقط
export const config = {
  matcher: ["/studio/:path*"],
};
