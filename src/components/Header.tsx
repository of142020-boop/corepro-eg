"use client";

import { useState } from "react";
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
const Image = ({ src, alt, className, width, height, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined);
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={className} {...rest} />;
};
import { Phone, MapPin, Menu, X, ChevronLeft, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const BRAND = "Core Pro Egypt";
const PHONE = "01055550195";
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS = "الحي العاشر مدينة نصر ";

const nav = [
  { href: "/", label: "الرئيسية" },
  { href: "/core", label: "تخريم الكور" },
  { href: "/saw", label: "قص الخرسانة" },
  { href: "/wire", label: "واير تقطيع خرسانة" },
  { href: "/hoods", label: "الشفاطات" },
  { href: "/blog", label: "المدونة" }, // ✅ تمت الإضافة هنا (واضحة وباينة)
];

const extraPages = [
  { href: "/about", label: "من نحن" },
  { href: "/privacy-policy", label: "سياسة الخصوصية" },
  { href: "/terms", label: "شروط الاستخدام" },
];

export default function Header({ currentPath = "" }: { currentPath?: string }) {
  const pathname = typeof window !== "undefined" ? window.location.pathname : currentPath;
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-900 text-white text-sm">
        <div className="mx-auto max-w-6xl px-4 flex justify-between items-center h-10">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 hover:opacity-80 transition"
              aria-label={`اتصال ${BRAND}`}
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 hover:opacity-80 transition"
              aria-label="واتساب"
            >
              <FaWhatsapp className="h-4 w-4" />
              واتساب
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="h-4 w-4" />
            {ADDRESS}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header dir="rtl" className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" aria-label={BRAND}>
              <Image
                src="/logo-header-116x154.webp"
                alt="Core Pro Egypt - قص وتخريم الخرسانة"
                width={90}
                height={77}
                priority
                quality={80}
                sizes="90px"
                className="h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 relative">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl font-bold transition ${
                    isActive(item.href)
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mega Menu */}
              <div
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                className="relative"
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                  className="px-4 py-2 rounded-xl font-bold flex items-center gap-1 hover:bg-slate-100 text-slate-700"
                >
                  صفحات مهمة
                  <ChevronDown className="h-4 w-4" />
                </button>

                {megaOpen && (
                  <div className="absolute top-12 right-0 w-64 bg-white border rounded-2xl shadow-xl p-4 space-y-2">
                    {extraPages.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 rounded-xl hover:bg-slate-100 font-bold text-slate-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="فتح القائمة"
              className="lg:hidden p-2 rounded-xl border border-black/10"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[999] bg-white">
          <div className="flex items-center justify-between border-b p-4">
            <Link href="/" onClick={() => setOpen(false)} aria-label={BRAND}>
              <Image
                src="/logo-header-116x154.webp"
                alt="Core Pro Egypt"
                width={80}
                height={70}
                quality={80}
                sizes="80px"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button onClick={() => setOpen(false)} aria-label="إغلاق القائمة">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-4 space-y-3 overflow-y-auto">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl border font-bold ${
                  isActive(item.href)
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-800 border-black/10"
                }`}
              >
                {item.label}
                <ChevronLeft className="h-4 w-4 opacity-60" />
              </Link>
            ))}

            {/* Extra pages (اختياري في الموبايل) */}
            <div className="pt-3">
              <div className="mb-2 px-2 text-sm font-bold text-slate-500">صفحات مهمة</div>
              {extraPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl border font-bold bg-white text-slate-800 border-black/10"
                >
                  {item.label}
                  <ChevronLeft className="h-4 w-4 opacity-60" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 grid gap-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 font-bold text-slate-900"
              >
                <Phone className="h-5 w-5" />
                اتصال
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 font-bold text-white"
              >
                <FaWhatsapp className="h-5 w-5" />
                واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
