import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, urlFor } from "../../../lib/sanity";

export const revalidate = 60;

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";

type Category = { title: string; slug: string };

type Post = {
  title: string;
  mainImage?: SanityImageSource;
  body: unknown;
  publishedAt?: string;
  readingTime?: number;
  excerpt?: string;
  categories: Category[]; // ✅ غير اختيارية
  plain?: string;
};

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    publishedAt,
    "categories": categories[]->{
      title,
      "slug": slug.current
    },
    "plain": pt::text(body),
    "excerpt": array::join(string::split(pt::text(body), " ")[0..40], " ") + "...",
    "readingTime": round(length(string::split(pt::text(body), " ")) / 200.0 * 10) / 10
  }`;

  const data = await client.fetch(query, { slug });
  if (!data) return null;

  const plain = typeof data.plain === "string" ? data.plain : "";
  const excerpt =
    typeof data.excerpt === "string" && data.excerpt.length
      ? data.excerpt
      : plain.slice(0, 180)
      ? plain.slice(0, 180) + "..."
      : "";

  return {
    title: data.title ?? "بدون عنوان",
    mainImage: data.mainImage,
    body: data.body,
    publishedAt: data.publishedAt,
    categories: Array.isArray(data.categories) ? data.categories : [], // ✅ دائمًا Array
    readingTime: typeof data.readingTime === "number" ? data.readingTime : undefined,
    excerpt,
    plain,
  };
}

function formatDate(date?: string) {
  if (!date) return "";
  try {
    return new Intl.DateTimeFormat("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  } catch {
    return "";
  }
}

/** SEO لكل مقال */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: `المقال غير موجود | ${BRAND}`,
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${DOMAIN}/blog/${slug}`;
  const img = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).quality(80).url()
    : undefined;

  return {
    title: `${post.title} | ${BRAND}`,
    description: post.excerpt || `اقرأ مقال ${post.title} من مدونة ${BRAND}.`,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      url: canonical,
      siteName: BRAND,
      type: "article",
      locale: "ar_EG",
      images: img ? [{ url: img, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "",
      images: img ? [img] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

/** PortableText Styling */
const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 text-2xl md:text-3xl font-black text-slate-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 text-xl md:text-2xl font-extrabold text-slate-900">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-base md:text-lg leading-8 text-slate-700">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-2xl border-r-4 border-emerald-600 bg-emerald-50 px-5 py-4 text-slate-800">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc pr-6 text-slate-700 leading-8">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 list-decimal pr-6 text-slate-700 leading-8">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as any)?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className="font-bold text-emerald-700 underline underline-offset-4 hover:text-emerald-800"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value) return null;
      const src = urlFor(value as any).width(1400).quality(85).url();
      return (
        <figure className="my-10">
          <div className="relative h-[260px] md:h-[520px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <Image src={src} alt="" fill className="object-cover" sizes="100vw" />
          </div>
        </figure>
      );
    },
  },
};

/* ========= Social Icons ========= */
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50">
      <span className="h-5 w-5">{children}</span>
    </span>
  );
}

function SvgWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.35.16 11.92c0 2.1.55 4.16 1.6 5.98L0 24l6.3-1.74a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.19-3.44-8.32ZM12.04 21.7h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.22-3.74 1.03 1-3.65-.24-.37a9.9 9.9 0 0 1-1.5-5.19C2.16 6.45 6.6 2 12.06 2a9.86 9.86 0 0 1 6.98 2.9 9.83 9.83 0 0 1 2.94 7c0 5.46-4.44 9.8-9.94 9.8Zm5.73-7.38c-.31-.16-1.85-.91-2.14-1.01-.29-.11-.5-.16-.71.16-.2.31-.82 1.01-1 1.22-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.52-.92-.81-1.54-1.8-1.72-2.1-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.71-1.72-.98-2.36-.26-.62-.53-.54-.71-.55h-.61c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56 0 1.5 1.1 2.95 1.25 3.15.16.2 2.16 3.3 5.23 4.63.73.31 1.3.5 1.74.64.73.23 1.39.2 1.91.12.58-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}
function SvgFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12a12 12 0 1 0-13.88 11.85v-8.4H7.08V12h3.04V9.36c0-3 1.79-4.66 4.53-4.66 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.45h-2.79v8.4A12 12 0 0 0 24 12Z" />
    </svg>
  );
}
function SvgX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.7l-5.25-6.85L5.8 22H2.7l7.26-8.3L1.2 2h6.9l4.75 6.2L18.9 2Zm-1.18 18h1.72L7.23 3.9H5.4L17.72 20Z" />
    </svg>
  );
}
function SvgTelegram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.8 15.6 9.6 19c.3 0 .5-.1.7-.3l1.7-1.6 3.5 2.6c.6.3 1 .1 1.2-.6l2.2-10.3c.2-.8-.3-1.1-.9-.9L4.1 10.6c-.8.3-.8.8-.1 1l4.2 1.3 9.7-6.1c.5-.3 1-.1.6.2L9.8 15.6Z" />
    </svg>
  );
}
function SvgLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.39-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function ShareBar({ title, url }: { title: string; url: string }) {
  const t = encodeURIComponent(title);
  const u = encodeURIComponent(url);

  const items = [
    { label: "واتساب", href: `https://wa.me/?text=${t}%20-%20${u}`, icon: <SvgWhatsapp /> },
    { label: "فيسبوك", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, icon: <SvgFacebook /> },
    { label: "X", href: `https://twitter.com/intent/tweet?text=${t}&url=${u}`, icon: <SvgX /> },
    { label: "تيليجرام", href: `https://t.me/share/url?url=${u}&text=${t}`, icon: <SvgTelegram /> },
    { label: "لينكدإن", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, icon: <SvgLinkedIn /> },
  ];

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`مشاركة على ${s.label}`}
          title={`مشاركة على ${s.label}`}
        >
          <Icon>{s.icon}</Icon>
        </a>
      ))}
    </div>
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-28 text-center" dir="rtl">
        <div className="mx-auto max-w-xl px-4">
          <h1 className="text-3xl font-black text-slate-900">المقال غير موجود</h1>
          <p className="mt-3 text-slate-600">قد يكون تم حذف المقال أو تغيير رابطه.</p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
          >
            الرجوع للمدونة ←
          </Link>
        </div>
      </div>
    );
  }

  const canonical = `${DOMAIN}/blog/${slug}`;
  const heroImg = post.mainImage
    ? urlFor(post.mainImage).width(1600).height(900).quality(85).url()
    : null;

  const categories = post.categories; // ✅ دايمًا Array

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.publishedAt || undefined,
    dateModified: post.publishedAt || undefined,
    image: heroImg ? [heroImg] : undefined,
    author: { "@type": "Organization", name: BRAND },
    publisher: { "@type": "Organization", name: BRAND },
    mainEntityOfPage: canonical,
    description: post.excerpt || undefined,
  };

  return (
    <article className="min-h-screen bg-white pb-16" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-white">
        <div className="mx-auto max-w-5xl px-4 pt-8">
          <div className="relative h-[240px] md:h-[420px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            {heroImg ? (
              <>
                <Image
                  src={heroImg}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              </>
            ) : null}
          </div>

          <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
            <nav className="mb-4 flex flex-wrap items-center justify-end gap-2 text-xs md:text-sm text-slate-600">
              <Link href="/" className="font-bold hover:text-slate-900">
                الرئيسية
              </Link>
              <span className="opacity-70">/</span>
              <Link href="/blog" className="font-bold hover:text-slate-900">
                المدونة
              </Link>
              <span className="opacity-70">/</span>
              <span className="text-slate-900 line-clamp-1 max-w-[75vw] font-bold">
                {post.title}
              </span>
            </nav>

            {/* ✅ Categories (مفيش undefined) */}
            {categories.length > 0 ? (
              <div className="mb-4 flex flex-wrap justify-end gap-2">
                {categories.slice(0, 4).map((c) => (
                  <span
                    key={c.slug}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800"
                  >
                    {c.title}
                  </span>
                ))}
              </div>
            ) : null}

            <h1 className="text-right text-3xl md:text-5xl font-black leading-tight text-slate-900">
              {post.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center justify-end gap-2 text-xs md:text-sm text-slate-600">
              {post.publishedAt ? <span>{formatDate(post.publishedAt)}</span> : null}
              {typeof post.readingTime === "number" && post.readingTime > 0 ? (
                <span>• {post.readingTime} دقيقة قراءة</span>
              ) : null}
              <span>• {BRAND}</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row-reverse sm:items-center justify-end gap-3">
              <Link
                href="/blog"
                className="w-full sm:w-auto text-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-bold text-slate-900 hover:bg-slate-50"
              >
                ← الرجوع للمدونة
              </Link>

              <Link
                href="/"
                className="w-full sm:w-auto text-center rounded-2xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
              >
                خدماتنا
              </Link>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="text-slate-700 text-sm font-bold">مشاركة</span>
              <ShareBar title={post.title} url={canonical} />
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 pt-10">
        {post.excerpt ? (
          <div className="mb-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-right">
            <p className="text-slate-700 leading-8">{post.excerpt}</p>
          </div>
        ) : null}

        <div className="text-right">
          <PortableText value={post.body as any} components={ptComponents} />
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-7 text-white shadow-sm">
          <h3 className="text-xl font-black text-right">شارك المقال</h3>
          <p className="mt-2 text-white/80 leading-8 text-right">
            المشاركة تساعد على وصول المقال لمن يحتاج حلول قص وتخريم الخرسانة بشكل آمن واحترافي.
          </p>

          <div className="mt-5 flex items-center justify-end gap-3">
            <ShareBar title={post.title} url={canonical} />
          </div>

          <div className="mt-7 flex flex-wrap justify-end gap-3">
            <Link
              href="/"
              className="rounded-2xl bg-white/15 px-6 py-3 font-bold text-white hover:bg-white/20"
            >
              مشاهدة الخدمات
            </Link>
            <a
              href="https://wa.me/201055550195"
              className="rounded-2xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              واتساب مباشر
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
