import React from 'react';

const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BRAND,
  url: DOMAIN,
  telephone: PHONE_INT,
  logo: `${DOMAIN}/logo-header-116x154.webp`,
  image: `${DOMAIN}/og-image.webp`,
  description: "Core Pro Egypt شركة متخصصة في قص الخرسانة بالمنشار، تخريم الكور، وتركيب الشفاطات بالقاهرة الكبرى والجيزة.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "EG",
    addressLocality: "Cairo",
    streetAddress: "الحي العاشر، مدينة نصر",
  },
  areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "6 أكتوبر", "الشيخ زايد", "العاصمة الإدارية"],
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [DOMAIN, WHATSAPP],
};

const services = [
  {
    href: "/saw",
    title: "قص الخرسانة بالمنشار",
    desc: "فتح أبواب وشبابيك وقص الجدران والأسقف بدقة الليزر بدون اهتزاز.",
    color: "border-sky-200 bg-sky-50",
    badge: "sky",
  },
  {
    href: "/core",
    title: "تخريم الخرسانة بالكور",
    desc: "فتحات دائرية دقيقة للغاز والتكييف والسباكة والمداخن بدون تكسير.",
    color: "border-emerald-200 bg-emerald-50",
    badge: "emerald",
  },
  {
    href: "/hoods",
    title: "تركيب الشفاطات",
    desc: "تركيب شفاطات المطبخ والحمام بجميع الماركات مع تأسيس الفتحة.",
    color: "border-slate-200 bg-slate-50",
    badge: "slate",
  },
  {
    href: "/wire",
    title: "قص بالواير الماسي",
    desc: "للكتل الضخمة والكباري والقواعد الخرسانية بسماكات غير محدودة.",
    color: "border-amber-200 bg-amber-50",
    badge: "amber",
  },
];

const values = [
  { title: "الأمان الإنشائي أولاً", desc: "لا نبدأ أي عمل قبل دراسة الهيكل الإنشائي للمبنى لضمان سلامة الأساسات وعدم التأثير على الأعمدة والكمرات." },
  { title: "معدات حديثة ومستوردة", desc: "نمتلك أحدث ماكينات قص الخرسانة وتخريم الكور المستوردة المزودة بأسطوانات ماسية صناعية عالية الجودة." },
  { title: "نظافة تامة في الموقع", desc: "جميع عملياتنا تعتمد على التبريد المائي الذي يحوّل الأتربة لمعجون سائل — لا غبار، لا فوضى." },
  { title: "أسعار شفافة وعادلة", desc: "نقدم عروض أسعار واضحة بعد المعاينة بدون مفاجآت. خصومات خاصة للمقاولين والمشاريع الكبرى." },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border-b border-black/5">
        <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 mb-6">
            <span>🏗️ خبرة ميدانية ← معدات حديثة ← ضمان الجودة</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4 text-right">
            Core Pro Egypt — الشريك الموثوق لقص وتخريم الخرسانة وتركيب الشفاطات في مصر
          </h1>
          <p className="mt-6 text-slate-700 leading-9 text-lg text-right">
            نحن في <strong>Core Pro Egypt</strong> شركة متخصصة تجمع بين ثلاث خدمات أساسية في خطوة واحدة:{" "}
            <strong>قص الخرسانة بالمنشار</strong>، <strong>تخريم الكور</strong>، و<strong>تركيب الشفاطات</strong>{" "}
            — داخل القاهرة الكبرى والجيزة وكافة المدن الجديدة.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-14 space-y-14">

        {/* STORY */}
        <section className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-r-4 border-emerald-600 pr-3 mb-6">
            قصتنا: لماذا أسسنا Core Pro Egypt؟
          </h2>
          <div className="space-y-4 text-slate-700 leading-9">
            <p>
              بدأنا عملنا لأننا لاحظنا مشكلة متكررة في السوق المصري: أصحاب المنازل والمقاولون كانوا يضطرون للتعامل مع 
              فنيين متعددين لإنجاز مهمة واحدة — شخص يكسّر الجدار، وشخص آخر يركّب الكور، وثالث يركّب الشفاط. 
              هذا يعني وقتاً مضاعفاً، تنسيقاً معقداً، وتكلفة أعلى.
            </p>
            <p>
              أنشأنا <strong>Core Pro Egypt</strong> لنكون الحل الكامل: فريق واحد يمتلك المعدات والخبرة اللازمة لإنجاز 
              كل هذه الخدمات بأعلى مستوى من الدقة الهندسية والأمان الإنشائي.
            </p>
            <p>
              نعتمد على أحدث تقنيات <strong>قص الخرسانة المسلحة</strong> بدلاً من التكسير التقليدي المؤذي — 
              ونلتزم دائماً بنظافة الموقع وسلامة السكان حتى أثناء التنفيذ.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-r-4 border-emerald-600 pr-3 mb-8">
            قيمنا ومبادئنا في العمل
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="font-black text-slate-900 text-lg mb-2 flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">{i + 1}</span>
                  {v.title}
                </h3>
                <p className="text-slate-600 leading-7 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES LINKS */}
        <section className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-r-4 border-emerald-600 pr-3 mb-8">
            خدماتنا المتخصصة
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`block rounded-2xl border p-6 hover:shadow-md transition-shadow ${s.color}`}
              >
                <h3 className="font-black text-slate-900 text-lg mb-1">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-7">{s.desc}</p>
                <span className="mt-3 inline-block text-sm font-bold text-emerald-700 hover:underline">
                  تعرّف على الخدمة ←
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* AREAS */}
        <section className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-r-4 border-emerald-600 pr-3 mb-6">
            مناطق خدمتنا
          </h2>
          <p className="text-slate-700 leading-8 mb-6">
            نغطي بفريقنا المتنقل جميع مناطق القاهرة الكبرى والجيزة والمدن الجديدة:
          </p>
          <div className="flex flex-wrap gap-3">
            {["التجمع الخامس", "مدينة نصر", "مصر الجديدة", "المعادي", "الشروق", "مدينتي",
              "العاصمة الإدارية", "6 أكتوبر", "الشيخ زايد", "الجيزة", "القليوبية", "الإسكندرية (بالتنسيق)"].map((area) => (
              <span key={area} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                📍 {area}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
            هل لديك مشروع إنشائي؟
          </h2>
          <p className="text-slate-300 leading-8 mb-8 relative z-10">
            تواصل معنا الآن للحصول على معاينة فنية مجانية وعرض سعر مخصص لمشروعك.
          </p>
          <div className="flex flex-wrap gap-4 relative z-10">
            <Link
              href={WHATSAPP}
              className="flex-1 min-w-[200px] bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 rounded-2xl text-center text-lg shadow-lg transition"
            >
              تواصل عبر واتساب
            </Link>
            <Link
              href={`tel:${PHONE}`}
              className="flex-1 min-w-[200px] bg-white text-slate-900 font-black py-5 rounded-2xl text-center text-lg shadow-lg transition hover:bg-slate-100"
            >
              اتصل: {PHONE}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
