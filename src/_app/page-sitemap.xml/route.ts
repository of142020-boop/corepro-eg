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

  const PRIORITIES: Record<string, { freq: string; pri: string }> = {
    "/":       { freq: "weekly",  pri: "1.0" },
    "/core":   { freq: "weekly",  pri: "0.9" },
    "/saw":    { freq: "weekly",  pri: "0.9" },
    "/prices": { freq: "weekly",  pri: "0.9" },
    "/hoods":  { freq: "monthly", pri: "0.8" },
    "/wire":   { freq: "monthly", pri: "0.8" },
    "/blog":   { freq: "daily",   pri: "0.9" },
  };

  const routes = Object.keys(PRIORITIES);

  const body = routes
    .map((p) => {
      const { freq, pri } = PRIORITIES[p] ?? { freq: "monthly", pri: "0.7" };
      return urlTag(`${DOMAIN}${p}`, now, freq, pri);
    })
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
