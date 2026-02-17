// src/app/not-found.tsx
import Link from "next/link";
import { ArrowRight, Home, PhoneCall, MessageCircle, Search, BookOpen, Wrench } from "lucide-react";

const BRAND = "Core Pro Egypt";
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-0px)] bg-slate-50" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Card */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-amber-800 border border-amber-100">
              <span className="font-black">404</span>
              <span className="text-sm font-bold">الصفحة غير موجودة</span>
            </div>

            <h1 className="mt-6 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              يبدو أنك وصلت لرابط غير صحيح
            </h1>

            <p className="mt-4 text-slate-600 leading-8">
              الرابط الذي فتحته غير موجود أو تم تغييره. يمكنك الرجوع للصفحات الرئيسية أو
              استخدام البحث للوصول للمقال المناسب.
            </p>

            {/* Quick actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-black text-white hover:bg-emerald-700 transition"
              >
                <Home className="h-5 w-5" />
                الرجوع للرئيسية
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 font-black text-white hover:bg-slate-800 transition"
              >
                <BookOpen className="h-5 w-5" />
                الذهاب للمدونة
              </Link>
            </div>

            {/* Search (simple GET form) */}
            <form action="/blog" method="get" className="mt-6">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                ابحث في المدونة
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    name="q"
                    placeholder="مثال: قص الخرسانة بالمنشار..."
                    className="w-full rounded-2xl border border-slate-200 bg-white pr-11 pl-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-2xl border border-slate-200 bg-white px-5 font-black text-slate-900 hover:bg-slate-50 transition"
                >
                  بحث
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                * سيعمل إذا كانت صفحة المدونة لديك تدعم قراءة query: <span className="font-bold">q</span>
              </p>
            </form>

            {/* Helpful links */}
            <div className="mt-8">
              <div className="text-sm font-black text-slate-900 mb-3">روابط سريعة</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: "/core", label: "تخريم الكور" },
                  { href: "/saw", label: "قص الخرسانة" },
                  { href: "/wire", label: "واير تقطيع خرسانة" },
                  { href: "/hoods", label: "فتحات هود" },
                ].map((x) => (
                  <Link
                    key={x.href}
                    href={x.href}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-200 transition"
                  >
                    <Wrench className="h-4 w-4" />
                    {x.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 rounded-3xl bg-slate-50 border border-slate-100 p-5">
              <div className="font-black text-slate-900">تحتاج مساعدة بسرعة؟</div>
              <p className="mt-1 text-slate-600 text-sm leading-7">
                تواصل معنا مباشرة وسنرشدك للصفحة المناسبة أو نساعدك في الخدمة المطلوبة.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-black text-white hover:bg-emerald-700 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  واتساب مباشر
                </a>

                <a
                  href={`tel:${PHONE_INT}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 px-6 py-3 font-black text-slate-900 hover:bg-slate-50 transition"
                >
                  <PhoneCall className="h-5 w-5" />
                  اتصال: {PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-sm">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-500 blur-3xl" />
            </div>

            <div className="relative">
              <div className="text-sm font-bold text-white/80">{BRAND}</div>

              <div className="mt-6 text-6xl md:text-7xl font-black tracking-tight">
                404
              </div>
              <div className="mt-2 text-xl md:text-2xl font-black">
                لا تقلق… نرجّعك للطريق الصحيح
              </div>

              <p className="mt-4 text-white/80 leading-8">
                استخدم الأزرار بالأسفل للرجوع للرئيسية أو للمدونة. وإذا كنت تبحث عن خدمة
                محددة، اختر من الروابط السريعة.
              </p>

              <div className="mt-10 grid gap-3">
                <Link
                  href="/"
                  className="group inline-flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 hover:bg-white/15 transition"
                >
                  <span className="font-black">العودة للرئيسية</span>
                  <ArrowRight className="h-5 w-5 transition group-hover:-translate-x-1" />
                </Link>

                <Link
                  href="/blog"
                  className="group inline-flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 hover:bg-white/15 transition"
                >
                  <span className="font-black">تصفح المقالات</span>
                  <ArrowRight className="h-5 w-5 transition group-hover:-translate-x-1" />
                </Link>
              </div>

              <div className="mt-10 text-xs text-white/60">
                إن استمرت المشكلة، ربما الرابط قديم. جرّب تحديثه أو تواصل معنا.
              </div>
            </div>
          </div>
        </div>

        {/* Footer hint */}
        <div className="mt-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {BRAND}
        </div>
      </div>
    </main>
  );
}
