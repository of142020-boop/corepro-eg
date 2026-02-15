import Link from "next/link";
import { MapPin, Phone, MessageCircle, ShieldCheck } from "lucide-react";

const BRAND = "Core Pro Egypt";
const PHONE = "01055550195";
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "القاهرة الكبرى";
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-black/10 bg-slate-950 text-white">
      {/* padding bottom كبير على الموبايل عشان شريط الواتس/الاتصال */}
      <div className="mx-auto max-w-6xl px-4 py-12 pb-36 md:pb-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950 font-extrabold">
                CP
              </div>
              <div>
                <div className="font-extrabold">{BRAND}</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-white/75 leading-7">
              شركة متخصصة في قص الخرسانة بالمنشار، تخريم الكور، واير تقطيع خرسانة،
              وتركيب شفاطات مطابخ وحمامات. تنفيذ نظيف وسريع داخل القاهرة والجيزة.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-white/15 transition"
                aria-label={`اتصال على ${PHONE}`}
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-emerald-800 transition"
                aria-label="واتساب"
              >
                <MessageCircle className="h-4 w-4" />
                واتساب
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="font-extrabold">روابط سريعة</div>
            <div className="mt-4 grid gap-2">
              {[
                { href: "/core", label: "تخريم الخرسانة بالكور" },
                { href: "/saw", label: "قص الخرسانة بالمنشار" },
                { href: "/wire", label: "واير تقطيع خرسانة" },
                { href: "/hoods", label: "تركيب الشفاطات" },
              ].map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-bold text-white hover:bg-white/15 transition"
                >
                  {x.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 font-extrabold">صفحات مهمة</div>
            <div className="mt-4 grid gap-2">
              {[
                { href: "/about", label: "من نحن" },
                { href: "/privacy-policy", label: "سياسة الخصوصية" },
                { href: "/terms", label: "شروط الاستخدام" },
              ].map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-bold text-white hover:bg-white/15 transition"
                >
                  {x.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="font-extrabold">لماذا نحن؟</div>
            <ul className="mt-4 space-y-3">
              {[
                "دقة عالية وتشطيب نظيف بدون تكسير",
                "تقليل الغبار باستخدام التبريد بالمياه",
                "التزام بالسلامة ومعاينة قبل التنفيذ",
                "خدمة سريعة ودعم عبر الهاتف والواتساب",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-2 rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-300" />
                  <span className="text-white/80 leading-7">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div>© {YEAR} {BRAND}. جميع الحقوق محفوظة.</div>
          <div className="flex flex-wrap gap-3">
            <Link className="hover:text-white transition" href="/">الرئيسية</Link>
            <Link className="hover:text-white transition" href="/core">الكور</Link>
            <Link className="hover:text-white transition" href="/saw">القص</Link>
            <Link className="hover:text-white transition" href="/wire">الواير</Link>
            <Link className="hover:text-white transition" href="/hoods">الشفاطات</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
