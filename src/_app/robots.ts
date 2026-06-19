// src/app/robots.ts
import type { MetadataRoute } from "next";

const DOMAIN = "https://corepro-eg.com";

export default function robots(): MetadataRoute.Robots {
 return {
 rules: [
 {
 userAgent: "*",
 allow: "/",
 disallow: [
 "/api/",
 "/_next/",
 "/admin/",
 "/studio/", // منع فهرسة الستوديو
 ],
 },
 ],
 sitemap: `${DOMAIN}/sitemap_index.xml`,
 };
}
