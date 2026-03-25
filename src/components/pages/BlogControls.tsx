import React from 'react';
const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} fetchpriority={fetchpriority} />;
};
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;

"use client";

import {
  useMemo, useState } from "react";


type Post = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
  readingTime?: number;
  imageUrl?: string | null;
  categories?: { title: string; slug: string }[];
};

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

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative overflow-hidden rounded-none border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-square w-full bg-slate-100">
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-500">
            لا توجد صورة
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-90" />

        <div className="absolute bottom-3 right-3 left-3 flex flex-wrap gap-2">
          {(post.categories || []).slice(0, 2).map((c) => (
            <span
              key={c.slug}
              className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur"
            >
              {c.title}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 text-right">
        <h2 className="text-xl font-extrabold leading-snug text-slate-900 transition group-hover:text-emerald-700">
          {post.title}
        </h2>

        <div className="mt-2 flex flex-wrap items-center justify-end gap-3 text-xs text-slate-500">
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          {typeof post.readingTime === "number" && post.readingTime > 0 && (
            <span>• {post.readingTime} دقيقة قراءة</span>
          )}
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 font-bold text-emerald-700">
          اقرأ المقال
          <span className="transition group-hover:translate-x-[-2px]">←</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogControls({ posts }: { posts: Post[] }) {
  const [cat, setCat] = useState<string>("all");

  const allCats = useMemo(() => {
    const map = new Map<string, string>(); // slug -> title
    for (const p of posts) {
      for (const c of p.categories || []) {
        if (c?.slug && c?.title && !map.has(c.slug)) map.set(c.slug, c.title);
      }
    }
    return Array.from(map.entries()).map(([slug, title]) => ({ slug, title }));
  }, [posts]);

  const filtered = useMemo(() => {
    if (cat === "all") return posts;
    return posts.filter((p) => (p.categories || []).some((c) => c.slug === cat));
  }, [posts, cat]);

  const desktopSafePadding = "lg:pr-[360px]";

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className={`mx-auto max-w-6xl px-4 py-10 ${desktopSafePadding}`}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-right">
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                مدونة كور برو مصر
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                مقالات عملية عن قص وتخريم الخرسانة المسلحة: معدات، طرق تنفيذ، سلامة، وحلول للمشاريع.
              </p>

              <div className="mt-5 flex flex-wrap justify-end gap-2">
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
                  قص خرسانة
                </span>
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
                  تخريم بالكور
                </span>
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
                  واير و منشار
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-right md:w-[420px]">
              <div className="text-sm font-bold text-slate-700">تصفية بالتصنيف</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                اختر تصنيفًا لعرض مقالاته. (بدون بحث)
              </p>
              <div className="mt-4 text-sm text-slate-700">
                إجمالي المقالات: <b className="text-slate-900">{posts.length}</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`mx-auto max-w-6xl px-4 py-8 ${desktopSafePadding}`}>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="min-w-[260px]">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                التصنيف
              </label>
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-right outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              >
                <option value="all">كل التصنيفات</option>
                {allCats.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between text-sm text-slate-600 md:min-w-[240px]">
              <span>
                المعروض: <b className="text-slate-900">{filtered.length}</b>
              </span>

              <Link
                href="/"
                className="font-bold text-emerald-700 hover:text-emerald-800"
              >
                الرجوع للرئيسية ←
              </Link>
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600">
            لا توجد مقالات ضمن هذا التصنيف حالياً.
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
