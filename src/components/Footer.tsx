import Link from "next/link";
import {
  MapPin,
  Phone,
  ShieldCheck,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const BRAND = "Core Pro Egypt";
const PHONE = "01055550195";
const WHATSAPP = "https://wa.me/201055550195";
const EMAIL = "info@corepro-eg.com";
const ADDRESS = "القاهرة الكبرى - مصر";
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-black/10 bg-slate-950 text-white pb-40 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 py-14">

        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-900 font-extrabold">
                CP
              </div>
              <div className="text-lg font-extrabold">{BRAND}</div>
            </div>

            <p className="mt-4 text-slate-400 leading-7">
              شركة متخصصة في قص الخرسانة بالمنشار، تخريم الكور،
              واير تقطيع خرسانة، وتركيب الشفاطات داخل القاهرة والجيزة.
              دقة هندسية وأمان كامل في التنفيذ.
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {ADDRESS}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {PHONE}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {EMAIL}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-lg font-extrabold mb-4">الخدمات</div>
            <div className="space-y-2 text-slate-400 text-sm">
              <Link href="/core" className="block hover:text-white transition">
                تخريم الخرسانة بالكور
              </Link>
              <Link href="/saw" className="block hover:text-white transition">
                قص الخرسانة بالمنشار
              </Link>
              <Link href="/wire" className="block hover:text-white transition">
                واير تقطيع خرسانة
              </Link>
              <Link href="/hoods" className="block hover:text-white transition">
                تركيب الشفاطات
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-lg font-extrabold mb-4">الشركة</div>
            <div className="space-y-2 text-slate-400 text-sm">
              <Link href="/about" className="block hover:text-white transition">
                من نحن
              </Link>
              <Link href="/privacy" className="block hover:text-white transition">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="block hover:text-white transition">
                شروط الاستخدام
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div className="text-lg font-extrabold mb-4">
              احجز معاينة الآن
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 py-3 font-extrabold hover:bg-slate-200 transition"
              >
                <Phone className="h-4 w-4" />
                اتصال مباشر
              </a>

              <a
                href={WHATSAPP}
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 font-extrabold hover:bg-emerald-700 transition"
              >
                <FaWhatsapp className="h-4 w-4" />
                واتساب
              </a>
            </div>

            <div className="mt-6 flex items-start gap-2 text-slate-400 text-sm">
              <ShieldCheck className="h-4 w-4 mt-1 text-emerald-500" />
              تنفيذ آمن بدون اهتزاز أو تكسير عشوائي.
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-slate-500 text-sm">
          <div>
            © {YEAR} {BRAND}. جميع الحقوق محفوظة.
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:text-white transition">
              الرئيسية
            </Link>
            <Link href="/core" className="hover:text-white transition">
              الكور
            </Link>
            <Link href="/saw" className="hover:text-white transition">
              القص
            </Link>
            <Link href="/wire" className="hover:text-white transition">
              الواير
            </Link>
            <Link href="/hoods" className="hover:text-white transition">
              الشفاطات
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
