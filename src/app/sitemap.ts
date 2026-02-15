import type { MetadataRoute } from "next";

const DOMAIN = "https://corepro-eg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/core", "/saw", "/wire", "/hoods"];

  return routes.map((path) => ({
    url: `${DOMAIN}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
