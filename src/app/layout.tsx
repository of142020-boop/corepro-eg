// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Extras from "../components/Extras";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://corepro-eg.com"),

  // ✅ عنوان افتراضي للموقع فقط (للصفحات اللي ما حطّتش title)
  // ✅ بدون template نهائيًا، عشان ما يضيفش "Core Pro Egypt" على أي صفحة
  title: "كور برو مصر: قص وتخريم الخرسانة | تركيب شفاطات مطابخ - 01055550195",

  description:
    "شركة Core Pro Egypt الأولى في قص الخرسانة بالمنشار (ليزر) وتخريم الكور لعمل الفتحات. فني تركيب شفاط المطبخ وتركيب مداخن وشفاطات حمام.",

  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-header-116x154.webp",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        {/* Skip link for accessibility */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          تخطي إلى المحتوى
        </a>

        <Header />

        <main id="content" className="min-h-[60vh]">
          {children}
        </main>

        <Footer />
        <Extras />
      </body>
    </html>
  );
}
