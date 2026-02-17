import type { Metadata } from "next";
import { client, urlFor } from "../../lib/sanity";
import BlogControls from "./BlogControls";

export const revalidate = 60;

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/blog`;

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
  readingTime?: number;
  imageUrl?: string | null;
  categories?: { title: string; slug: string }[];
};

export const metadata: Metadata = {
  title: `مدونة ${BRAND} | قص وتخريم الخرسانة`,
  description:
    "مقالات احترافية عن تقنيات قص وتخريم الخرسانة المسلحة، نصائح السلامة، أحدث المعدات، وأفضل الممارسات في مصر.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: `مدونة ${BRAND}`,
    description: "أحدث تقنيات قص وتخريم الخرسانة المسلحة، ونصائح تنفيذ المشاريع.",
    url: CANONICAL,
    siteName: BRAND,
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    title: `مدونة ${BRAND}`,
    description: "مقالات احترافية عن قص وتخريم الخرسانة المسلحة في مصر.",
  },
  robots: { index: true, follow: true },
};

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    "categories": categories[]->{
      title,
      "slug": slug.current
    },
    "plain": pt::text(body),
    "excerpt": array::join(string::split(pt::text(body), " ")[0..35], " ") + "...",
    "readingTime": round(length(string::split(pt::text(body), " ")) / 200.0 * 10) / 10
  }`;

  const data = await client.fetch(query);

  return (data as any[]).map((p) => {
    const plain = typeof p.plain === "string" ? p.plain : "";
    const excerpt =
      typeof p.excerpt === "string" && p.excerpt.length
        ? p.excerpt
        : (plain.slice(0, 180) ? plain.slice(0, 180) + "..." : "اقرأ المقال لمعرفة التفاصيل...");

    const imageUrl = p.mainImage
      ? urlFor(p.mainImage).width(1200).height(800).quality(80).url()
      : null;

    return {
      title: p.title ?? "بدون عنوان",
      slug: p.slug,
      excerpt,
      publishedAt: p.publishedAt,
      readingTime: typeof p.readingTime === "number" ? p.readingTime : undefined,
      categories: Array.isArray(p.categories) ? p.categories : [],
      imageUrl,
    } as Post;
  });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      <BlogControls posts={posts} />
    </div>
  );
}
