"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, MapPin, ChevronDown } from "lucide-react";

const BRAND = "Core Pro Egypt";
const ADDRESS_TEXT = "القاهرة الكبرى";

type NavItem = { href: string; label: string };

const primaryNav: NavItem[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/core", label: "تخريم الكور" },
  { href: "/saw", label: "قص الخرسانة" },
  { href: "/wire", label: "واير تقطيع خرسانة" },
  { href: "/hoods", label: "الشفاطات" },
];

const secondaryNav: NavItem[] = [
  { href: "/about", label: "من نحن" },
  { href: "/privacy-policy", label: "سياسة الخصوصية" },
  { href: "/terms", label: "شروط الاستخدام" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activePrimary = useMemo(
    () => primaryNav.find((x) => isActive(pathname, x.href))?.href ?? "",
    [pathname]
  );

  // اقفل القائمة عند تغيير الصفحة
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // منع سكرول الصفحة أثناء فتح القائمة
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white font-extrabold">
              CP
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-slate-900">{BRAND}</div>
              <div className="text-xs text-slate-600 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{ADDRESS_TEXT}</span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryNav.map((x) => {
              const active = isActive(pathname, x.href);
              return (
                <Link
                  key={x.href}
                  href={x.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-extrabold transition",
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                  ].join(" ")}
                >
                  {x.label}
                </Link>
              );
            })}

            {/* صفحات مهمة */}
            <div className="relative group">
              <button
                type="button"
                aria-label="فتح صفحات مهمة"
                className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-extrabold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
              >
                صفحات مهمة
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 top-full mt-2 w-56 rounded-2xl border border-black/10 bg-white shadow-xl p-2">
                {secondaryNav.map((x) => (
                  <Link
                    key={x.href}
                    href={x.href}
                    className="block rounded-xl px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-100 transition"
                  >
                    {x.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-white p-2 shadow-sm hover:bg-slate-50 transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="إغلاق القائمة"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Panel */}
          <div
            id="mobile-menu"
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl border-l border-black/10"
          >
            <div className="flex items-center justify-between p-4 border-b border-black/10">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white font-extrabold">
                  CP
                </div>
                <div className="leading-tight">
                  <div className="font-extrabold text-slate-900">{BRAND}</div>
                  <div className="text-xs text-slate-600">{ADDRESS_TEXT}</div>
                </div>
              </div>

              <button
                type="button"
                aria-label="إغلاق القائمة"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-black/10 bg-white p-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="text-xs font-extrabold text-slate-500 mb-2">
                القائمة
              </div>

              <div className="grid gap-2">
                {primaryNav.map((x) => {
                  const active = isActive(pathname, x.href);
                  return (
                    <Link
                      key={x.href}
                      href={x.href}
                      className={[
                        "rounded-2xl border border-black/10 px-4 py-3 font-extrabold transition",
                        active
                          ? "bg-slate-900 text-white"
                          : "bg-white text-slate-900 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {x.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 text-xs font-extrabold text-slate-500 mb-2">
                صفحات مهمة
              </div>

              <div className="grid gap-2">
                {secondaryNav.map((x) => (
                  <Link
                    key={x.href}
                    href={x.href}
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold text-slate-900 hover:bg-slate-50 transition"
                  >
                    {x.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active underline (optional small) */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-[2px] bg-transparent">
            <div
              className="h-[2px] bg-emerald-700 transition-all"
              style={{
                width: activePrimary ? "100%" : "0%",
                opacity: activePrimary ? 1 : 0,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
