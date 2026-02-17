"use client";

import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "01055550195";
const WHATSAPP = "https://wa.me/201055550195";

function CircleButton({
  href,
  label,
  children,
  className = "",
  external = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className={[
        "group relative grid h-12 w-12 place-items-center rounded-full",
        "border border-black/10 backdrop-blur-xl",
        "shadow-[0_14px_40px_rgba(0,0,0,0.18)]",
        "transition hover:scale-[1.04] active:scale-[0.98]",
        className,
      ].join(" ")}
    >
      {children}

      {/* Tooltip */}
      <span
        className={[
          "pointer-events-none absolute right-14 top-1/2 -translate-y-1/2",
          "hidden md:block whitespace-nowrap rounded-xl",
          "bg-slate-900 px-3 py-1.5 text-xs font-extrabold text-white",
          "opacity-0 translate-x-1 transition",
          "group-hover:opacity-100 group-hover:translate-x-0",
        ].join(" ")}
      >
        {label}
      </span>
    </a>
  );
}

export default function StickyActions() {
  return (
    <>
      {/* Desktop: icons only */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="flex flex-col gap-3">
          <CircleButton
            href={WHATSAPP}
            label="واتساب مباشر"
            external
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <FaWhatsapp size={20} />
          </CircleButton>

          <CircleButton
            href={`tel:${PHONE}`}
            label={`اتصال: ${PHONE}`}
            className="bg-white text-slate-900 hover:bg-slate-50"
          >
            <Phone size={20} />
          </CircleButton>
        </div>
      </div>

      {/* Mobile: bar */}
      <div className="md:hidden fixed bottom-3 left-1/2 z-50 -translate-x-1/2 w-[92%] max-w-md">
        <div className="rounded-3xl border border-black/10 bg-white/90 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.18)] p-2">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-3 font-extrabold text-slate-900"
              aria-label={`اتصال: ${PHONE}`}
              title={`اتصال: ${PHONE}`}
            >
              <Phone size={20} />
              اتصال
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-3 py-3 font-extrabold text-white"
              aria-label="واتساب مباشر"
              title="واتساب مباشر"
            >
              <FaWhatsapp size={20} />
              واتساب
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
