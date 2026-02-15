import type { Metadata } from "next";
import "./globals.css";

import { Cairo } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import ScrollToTop from "@/components/ScrollToTop";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "كور برو مصر: قص وتخريم الخرسانة | تركيب شفاطات مطابخ - 01055550195",
    template: `%s | ${BRAND}`,
  },
  description:
    "شركة Core Pro Egypt الأولى في قص الخرسانة بالمنشار (ليزر) وتخريم الكور لعمل الفتحات. فني تركيب شفاط المطبخ وتركيب مداخن وشفاطات حمام. دقة، أمان، وأفضل سعر.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: DOMAIN,
    siteName: BRAND,
    locale: "ar_EG",
    title: "كور برو مصر: قص وتخريم الخرسانة | تركيب شفاطات مطابخ - 01055550195",
    description:
      "قص خرسانة ليزر + تخريم كور بدون تكسير + تركيب وصيانة شفاطات مطابخ وحمامات داخل القاهرة والجيزة.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[9999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
        >
          تخطي إلى المحتوى
        </a>

        <Header />

        <main id="content" className="mx-auto w-full max-w-6xl px-4 py-8">
          {children}
        </main>

        <Footer />

        {/* Client components */}
        <StickyActions />
        <ScrollToTop />
      </body>
    </html>
  );
}
