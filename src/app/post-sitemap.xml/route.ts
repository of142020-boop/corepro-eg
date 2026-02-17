import { client, urlFor } from "../../lib/sanity";

const DOMAIN = "https://corepro-eg.com";
export const revalidate = 60;

type PostRow = {
  slug: string;
  publishedAt?: string;
  _updatedAt?: string;
  mainImage?: any;
};

function escapeXml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const posts: PostRow[] = await client.fetch(
    `*[_type=="post" && defined(slug.current)]{
      "slug": slug.current,
      publishedAt,
      _updatedAt,
      mainImage
    }`
  );

  const body = posts
    .map((p) => {
      const last = p._updatedAt || p.publishedAt || new Date().toISOString();
      const loc = `${DOMAIN}/blog/${encodeURIComponent(p.slug)}`;

      // ✅ رابط الصورة الرئيسية (إن وجدت)
      let imageTag = "";
      if (p.mainImage) {
        const imgUrl = urlFor(p.mainImage)
          .width(1200)
          .height(630)
          .fit("crop")
          .auto("format")
          .url();

        imageTag = `
    <image:image>
      <image:loc>${escapeXml(imgUrl)}</image:loc>
    </image:image>`;
      }

      return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${new Date(last).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>${imageTag}
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-urlset.xsl"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>${body}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=600",
    },
  });
}
