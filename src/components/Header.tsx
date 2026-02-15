"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  MapPin,
  Menu,
  X,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const BRAND = "Core Pro Egypt";
const PHONE = "01055550195";
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS = "القاهرة الكبرى";

const nav = [
  { href: "/", label: "الرئيسية" },
  { href: "/core", label: "تخريم الكور" },
  { href: "/saw", label: "قص الخرسانة" },
  { href: "/wire", label: "واير تقطيع خرسانة" },
  { href: "/hoods", label: "الشفاطات" },
];

const extraPages = [
  { href: "/about", label: "من نحن" },
  { href: "/privacy", label: "سياسة الخصوصية" },
  { href: "/terms", label: "شروط الاستخدام" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-900 text-white text-sm">
        <div className="mx-auto max-w-6xl px-4 flex justify-between items-center h-10">
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              className="flex items-center gap-2 text-emerald-400"
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
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Core Pro Egypt - قص وتخريم الخرسانة"
                width={160}
                height={50}
                priority
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
                <button className="px-4 py-2 rounded-xl font-bold flex items-center gap-1 hover:bg-slate-100">
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
              className="lg:hidden p-2 rounded-xl border"
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
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/logo.png"
                alt="Core Pro Egypt"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button onClick={() => setOpen(false)}>
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
          </div>

        </div>
      )}
    </>
  );
}
