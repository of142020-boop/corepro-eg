"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="العودة للأعلى"
      title="العودة للأعلى"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "fixed z-50",
        "md:bottom-[220px] md:right-6", // فوق كارت التواصل
        "bottom-20 right-4", // موبايل فوق الشريط
        "h-12 w-12 rounded-3xl",
        "border border-black/10 bg-white/90 backdrop-blur-xl",
        "shadow-[0_16px_60px_rgba(0,0,0,0.18)]",
        "grid place-items-center",
        "hover:bg-white transition",
      ].join(" ")}
    >
      <ArrowUp className="h-5 w-5 text-slate-900" />
    </button>
  );
}
