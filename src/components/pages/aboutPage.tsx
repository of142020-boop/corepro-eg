import React from 'react';

const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/about`;
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    url: DOMAIN,
    telephone: PHONE_INT,
    logo: `${DOMAIN}/logo-header-116x154.webp`,
    image: `${DOMAIN}/og-image.webp`,
    description: "Core Pro Egypt شركة مصرية متخصصة في قص الخرسانة بالمنشار وتخريم الكور وتركيب الشفاطات بالقاهرة الكبرى والجيزة.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressLocality: "Cairo",
      addressRegion: "Cairo Governorate",
      streetAddress: "الحي العاشر، مدينة نصر",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0693,
      longitude: 31.3289,
    },
    areaServed: [
      "القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر",
      "المعادي", "6 أكتوبر", "الشيخ زايد", "العاصمة الإدارية", "القليوبية"
    ],
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [DOMAIN, WHATSAPP],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات قص وتخريم الخرسانة وتركيب الشفاطات",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "قص الخرسانة بالمنشار", url: `${DOMAIN}/saw` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "تخريم الخرسانة بالكور", url: `${DOMAIN}/core` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "تركيب شفاط المطبخ والحمام", url: `${DOMAIN}/hoods` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "قص الخرسانة بالواير الماسي", url: `${DOMAIN}/wire` } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "من نحن", item: CANONICAL },
    ],
  },
];

const services = [
  { href: "/saw",   title: "قص الخرسانة بالمنشار",    desc: "فتح أبواب وشبابيك وقص الجدران والأسقف بدقة الليزر بدون اهتزاز.", color: "border-sky-200 bg-sky-50"     },
  { href: "/core",  title: "تخريم الخرسانة بالكور",   desc: "فتحات دائرية دقيقة للغاز والتكييف والسباكة والمداخن بدون تكسير.", color: "border-emerald-200 bg-emerald-50" },
  { href: "/hoods", title: "تركيب الشفاطات",           desc: "تركيب شفاطات المطبخ والحمام بجميع الماركات مع تأسيس الفتحة بالكور.", color: "border-orange-200 bg-orange-50" },
  { href: "/wire",  title: "قص بالواير الماسي",        desc: "للكتل الضخمة والكباري والقواعد الخرسانية بسماكات غير محدودة.", color: "border-amber-200 bg-amber-50"  },
];

const values = [
  { title: "الأمان الإنشائي أولاً",    desc: "لا نبدأ أي عمل قبل دراسة الهيكل الإنشائي للمبنى لضمان سلامة الأساسات وعدم التأثير على الأعمدة والكمرات." },
  { title: "معدات حديثة ومستوردة",     desc: "نمتلك أحدث ماكينات قص الخرسانة وتخريم الكور المستوردة المزودة بأسطوانات ماسية صناعية عالية الجودة." },
  { title: "نظافة تامة في الموقع",      desc: "جميع عملياتنا تعتمد على التبريد المائي الذي يحوّل الأتربة لمعجون سائل — لا غبار، لا فوضى، مناسب للشقق المسكونة." },
  { title: "أسعار شفافة وعادلة",       desc: "نقدم عروض أسعار واضحة بعد المعاينة بدون مفاجآت. خصومات خاصة للمقاولين والمشاريع الكبرى." },
];

const stats = [
  { num: "+500",  label: "مشروع منجز" },
  { num: "24/7",  label: "خدمة على مدار الساعة" },
  { num: "9",     label: "محافظة نخدمها" },
  { num: "100%",  label: "ضمان السلامة الإنشائية" },
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
            <span>🏗️ خبرة ميدانية واسعة · معدات حديثة · ضمان الجودة</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4 text-right">
            من نحن | Core Pro Egypt - متخصصون في قص وتخريم الخرسانة بمصر
          </h1>
          <p className="mt-6 text-slate-700 leading-9 text-lg text-right">
            نحن في <strong>Core Pro Egypt</strong> شركة مصرية متخصصة تجمع بين أربع خدمات أساسية في فريق واحد:{" "}
            <strong>قص الخرسانة بالمنشار</strong>، <strong>تخريم الكور</strong>، <strong>تركيب الشفاطات</strong>،{" "}
            و<strong>قص بالواير الماسي</strong> — داخل القاهرة الكبرى والجيزة وكافة المدن الجديدة.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-14 space-y-14">

        {/* STATS — E-E-A-T TRUST SIGNALS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-3xl border border-black/10 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-black text-emerald-600">{s.num}</div>
              <div className="mt-1 text-sm font-bold text-slate-600">{s.label}</div>
            </div>
          ))}
        </section>

        {/* STORY — E-E-A-T Experience Signal */}
        <section className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-r-4 border-emerald-600 pr-3 mb-6">
            قصتنا: لماذا أسسنا Core Pro Egypt؟
          </h2>
          <div className="space-y-5 text-slate-700 leading-9">
            <p>
              بدأنا عملنا لأننا لاحظنا مشكلة متكررة في السوق المصري: أصحاب المنازل والمقاولون كانوا يضطرون للتعامل مع
              فنيين متعددين لإنجاز مهمة واحدة — شخص يكسّر الجدار، وآخر يركب الكور، وثالث يركب الشفاط.
              هذا يعني وقتاً مضاعفاً وتكلفة أعلى وتنسيقاً معقداً.
            </p>
            <p>
              أنشأنا <strong>Core Pro Egypt</strong> لنكون الحل الكامل: فريق واحد يمتلك المعدات والخبرة الميدانية لإنجاز
              كل هذه الخدمات بأعلى مستوى من <strong>الدقة الهندسية</strong> والأمان الإنشائي.
              نعتمد على أحدث تقنيات <strong>قص الخرسانة المسلحة</strong> بدلاً من التكسير التقليدي المؤذي،
              ونلتزم دائماً بنظافة الموقع وسلامة السكان حتى أثناء التنفيذ.
            </p>
            <p>
              خلال سنوات العمل، نفذنا أكثر من <strong>500 مشروع</strong> بنجاح في القاهرة الكبرى والجيزة والمدن الجديدة،
              من تعديلات بسيطة في شقق مسكونة حتى مشاريع ضخمة في الكمبوندات والمباني التجارية.
            </p>
          </div>
        </section>

        {/* WHY US — E-E-A-T Expertise + Authoritativeness */}
        <section className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-r-4 border-emerald-600 pr-3 mb-4">
            ما الذي يميز Core Pro Egypt؟
          </h2>
          <p className="text-slate-600 leading-8 mb-8">
            نحن لسنا مجرد فنيين — فريقنا يضم مهندسين ومتخصصين تدربوا على أحدث أساليب قص وتخريم الخرسانة.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: "🔬",
                title: "دراسة هندسية قبل التنفيذ",
                desc: "نستخدم أجهزة كشف الحديد (Rebar Detector) قبل أي تخريم لضمان عدم قطع أسياخ التسليح الرئيسية.",
              },
              {
                icon: "💧",
                title: "نظام التبريد المائي (Wet Cutting)",
                desc: "تبريد المياه أثناء القص يمنع الغبار تماماً ويطيل عمر الشفرات الماسية — نتيجة نظيفة في بيئة نظيفة.",
              },
              {
                icon: "📐",
                title: "دقة ليزر في القياس",
                desc: "نستخدم ميزان الليزر المائي لرسم خطوط القطع قبل التشغيل — استقامة 100% مضمونة.",
              },
              {
                icon: "🛡️",
                title: "ضمان الأمان الإنشائي",
                desc: "كل عمل نقوم به يتم بعد تأمين الشُّلَّة الخرسانية المقطوعة ضد السقوط — فريقنا يحمل معدات سلامة متكاملة.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-black text-slate-900 text-lg">{item.title}</h3>
                </div>
                <p className="text-slate-600 leading-7 text-sm">{item.desc}</p>
              </div>
            ))}
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

        {/* AREAS — Local SEO Signal */}
        <section className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-r-4 border-emerald-600 pr-3 mb-6">
            مناطق خدمتنا — مقاول قص خرسانة في كل مكان
          </h2>
          <p className="text-slate-700 leading-8 mb-6">
            فريقنا المتنقل يغطي جميع مناطق القاهرة الكبرى والجيزة والمدن الجديدة.
            سواء كنت في <strong>التجمع الخامس</strong> أو <strong>مدينة نصر</strong> أو <strong>العاصمة الإدارية</strong> أو <strong>6 أكتوبر</strong> —
            نصل إليك في أسرع وقت مع كامل المعدات:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "التجمع الخامس", "مدينة نصر", "مصر الجديدة", "المعادي", "الشروق",
              "مدينتي", "العاصمة الإدارية الجديدة", "6 أكتوبر", "الشيخ زايد",
              "الجيزة", "القليوبية", "الإسكندرية (بالتنسيق)"
            ].map((area) => (
              <span key={area} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                📍 {area}
              </span>
            ))}
          </div>
        </section>

        {/* TRUST SIGNALS — E-E-A-T Trustworthiness */}
        <section className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 border-r-4 border-emerald-600 pr-3 mb-6">
            لماذا يثق بنا عملاؤنا؟
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: "📞", title: "خدمة 24/7",       desc: "نرد على استفساراتك في أي وقت ونحدد موعداً للمعاينة في نفس اليوم." },
              { icon: "✅", title: "ضمان مكتوب",      desc: "نلتزم بتنفيذ العمل وفق المواصفات المتفق عليها ونقدم ضماناً على التثبيت والنظافة." },
              { icon: "💰", title: "سعر بعد المعاينة", desc: "لا مفاجآت في الفاتورة. السعر يُحدد بعد المعاينة بناءً على حجم وطبيعة العمل فعلياً." },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl bg-white border border-black/10 p-6 text-center shadow-sm">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-black text-slate-900 mb-2">{t.title}</h3>
                <p className="text-slate-600 text-sm leading-6">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
            هل لديك مشروع إنشائي؟ تواصل مع مقاول قص خرسانة متخصص
          </h2>
          <p className="text-slate-300 leading-8 mb-8 relative z-10">
            تواصل معنا الآن للحصول على معاينة فنية مجانية وعرض سعر مخصص لمشروعك.
            نصل إليك في أسرع وقت.
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
