"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "01055550195";
const WHATSAPP = "https://wa.me/201055550195";

export default function StickyActions() {
  if (typeof document !== "undefined") {
  if (document.documentElement.dataset.mobileMenu === "open") return null;
}
  return (
    <>
      {/* Desktop: small floating card */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="rounded-3xl border border-black/10 bg-white/90 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.18)] p-3 w-[280px]">
          <div className="text-sm font-extrabold text-slate-900">تواصل سريع</div>

          <div className="mt-2 grid gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 font-extrabold text-white hover:bg-emerald-700 transition"
            >
              <FaWhatsapp className="h-5 w-5" />
              واتساب مباشر
            </a>

            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-3 font-extrabold text-slate-900 hover:bg-slate-50 transition"
            >
              <Phone className="h-5 w-5" />
              اتصال: {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: compact bar */}
      <div className="md:hidden fixed bottom-3 left-1/2 z-50 -translate-x-1/2 w-[92%] max-w-md">
        <div className="rounded-3xl border border-black/10 bg-white/90 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.18)] p-2">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-3 font-extrabold text-slate-900"
            >
              <Phone className="h-5 w-5" />
              اتصال
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-3 py-3 font-extrabold text-white"
            >
              <FaWhatsapp className="h-5 w-5" />
              واتساب
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
