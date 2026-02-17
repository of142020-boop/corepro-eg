const DOMAIN = "https://corepro-eg.com";
export const revalidate = 60;

function urlTag(loc: string, lastmod: string, changefreq: string, priority: string) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const now = new Date().toISOString();

  // ✅ صفحات الموقع فقط (عدّلها كما تريد)
  const routes = ["/", "/core", "/saw", "/wire", "/hoods", "/blog"];

  const body = routes
    .map((p) =>
      urlTag(
        `${DOMAIN}${p}`,
        now,
        p === "/blog" ? "daily" : p === "/" ? "weekly" : "monthly",
        p === "/" ? "1.0" : p === "/blog" ? "0.9" : "0.8"
      )
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-urlset.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=600",
    },
  });
}
