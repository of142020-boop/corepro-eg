import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyActions from "../components/StickyActions";
import ScrollToTop from "../components/ScrollToTop";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://corepro-eg.com"),
  title: {
    default: "كور برو مصر: قص وتخريم الخرسانة | تركيب شفاطات مطابخ - 01055550195",
    template: "%s | Core Pro Egypt",
  },
  description:
    "شركة Core Pro Egypt الأولى في قص الخرسانة بالمنشار (ليزر) وتخريم الكور لعمل الفتحات. فني تركيب شفاط المطبخ وتركيب مداخن وشفاطات حمام.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}>
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

        <StickyActions />
        <ScrollToTop />
      </body>
    </html>
  );
}
