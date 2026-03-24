import React from 'react';
const Image = ({ src, alt, fill, className, width, height, priority, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} />;
};
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;


import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
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

export async function getPosts(): Promise<Post[]> {
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

  const data: unknown = await client.fetch(query);
  if (!Array.isArray(data)) return [];

  return data.map((row) => {
    const p = row as Record<string, unknown>;
    const plain = typeof p.plain === "string" ? p.plain : "";
    const excerpt =
      typeof p.excerpt === "string" && p.excerpt.length
        ? p.excerpt
        : plain.slice(0, 180)
        ? plain.slice(0, 180) + "..."
        : "اقرأ المقال لمعرفة التفاصيل...";

    // ✅ تحميل صورة مربعة 1024×1024 للكروت
    const imageUrl = p.mainImage
      ? urlFor(p.mainImage as Parameters<typeof urlFor>[0])
          .width(1024)
          .height(1024)
          .fit("crop")
          .quality(85)
          .url()
      : null;

    return {
      title: typeof p.title === "string" ? p.title : "بدون عنوان",
      slug: typeof p.slug === "string" ? p.slug : "",
      excerpt,
      publishedAt: typeof p.publishedAt === "string" ? p.publishedAt : undefined,
      readingTime: typeof p.readingTime === "number" ? p.readingTime : undefined,
      categories: Array.isArray(p.categories) ? (p.categories as Post["categories"]) : [],
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