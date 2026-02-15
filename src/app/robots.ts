// src/app/robots.ts
import type { MetadataRoute } from "next";

const DOMAIN = "https://corepro-eg.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
    ],
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
