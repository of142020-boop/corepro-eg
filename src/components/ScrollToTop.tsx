"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="العودة للأعلى"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-50 hidden md:inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_16px_60px_rgba(0,0,0,0.18)] hover:bg-slate-50 transition"
      title="العودة للأعلى"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
