import React from 'react';

const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} fetchpriority={fetchpriority} />;
};

const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;

import {
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  BadgeCheck,
  Target,
  Wrench,
  Ruler,
  HelpCircle,
  Building2,
  HardHat,
  Settings,
  Layers,
  Hammer,
  Maximize2,
  MoveRight,
  Phone,
  Scissors,
  Search,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/saw`;
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "الحي العاشر مدينة نصر";

const SERVICE_NAME = "قص وتحضيع الخرسانة بالمنشار";
const FOCUS_KEYWORD = "قص خرسانة ليزر";

const IMG_HERO = { src: "/images/saw/hero.webp", width: 800, height: 800 };
const IMG_1 = { src: "/images/saw/work-1.webp", width: 800, height: 800 };
const IMG_2 = { src: "/images/saw/work-2.webp", width: 800, height: 800 };
const IMG_3 = { src: "/images/saw/work-3.webp", width: 800, height: 800 };

function Section({
  title,
  subtitle,
  icon,
  children,
  id,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]"
    >
      <div className="mb-6 flex items-start gap-3">
        {icon ? (
          <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5">
            {icon}
          </div>
        ) : null}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 border-r-4 border-sky-600 pr-3">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-slate-600 leading-7 font-medium">{subtitle}</p>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}

function StatPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm whitespace-nowrap">
      {icon}
      <span className="text-slate-700 font-bold">{text}</span>
    </div>
  );
}

function MiniCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5">
          {icon}
        </div>
        <div className="font-extrabold text-slate-900">{title}</div>
      </div>
      <p className="mt-3 text-slate-600 leading-7 text-sm">{desc}</p>
    </div>
  );
}

export default function SawPage() {
  const faq = [
    {
      q: "ما هو سعر منشار تقطيع الخرسانة؟ وكيف يتم حساب اسعار قص الخرسانة؟",
      a: "سعر منشار تقطيع الخرسانة يختلف حسب نوع المعدة، أما اسعار قص الخرسانة للعميل فتُحسب بالمتر الطولي وحسب سمك الخرسانة وكثافة الحديد. نحن نوفر أفضل اسعار قص الخرسانة في مصر مع ضمان الجودة والأمان.",
    },
    {
      q: "هل توفرون خدمة قص جدار بالمنشار أو قص جدران؟",
      a: "نعم، قص جدار بالمنشار هو تخصصنا الأساسي لفتح الأبواب والشبابيك. نوفر معلم قص جدار محترف يقوم بـ قص جدران بدقة متناهية وبدون تكسير عشوائي.",
    },
    {
      q: "ما الفرق بين قص الخرسانة بالليزر وقص الخرسانة بالصاروخ؟",
      a: "قص الخرسانة بالليزر هو وصف للدقة الناتجة عن منشار قص الخرسانة المثبت بسكة، بينما قص الخرسانة بالصاروخ يستخدم للفتحات الصغيرة والزوايا. استخدام صاروخ قص الجدران أو صاروخ قص الخرسانة يعطي مرونة في الأماكن الضيقة.",
    },
    {
      q: "هل تقومون بـ قص خرسانة السقف لعمل سلم؟",
      a: "بكل تأكيد. تنفيذ قص خرسانة السقف يتطلب خبرة مقاول قص خرسانة لتأمين السقف قبل القطع. نستخدم ماكينة تقطيع الخرسانة المسلحة لضمان فتحة مصعد أو سلم آمنة 100%.",
    },
    {
      q: "لماذا يفضل قص الجدار بالليزر على التكسير التقليدي؟",
      a: "قص الجدار بالليزر أو قص جدار باستقامة الليزر يحافظ على سلامة المبنى، ويمنع الشروخ الناتجة عن تكسير الجدار بالصاروخ اليدوي أو الهيلتي، كما يوفر في تكاليف المحارة والترميم لاحقاً.",
    },
    {
      q: "هل أنتم شركة قص خرسانة معتمدة؟",
      a: "نحن في Core Pro نعتبر أفضل شركة قص خرسانة في مصر، نجمع بين احترافية شركات تقطيع الخرسانة وسعر مقاول قص خرسانة المنافس، مع استخدام أحدث ماكينة قص الخرسانة المسلحة مصر.",
    },
  ];

  const keywords = [
    "قص خرسانة", "تقطيع الخرسانة", "تقطيع خرسانة", "قص الخرسانة", "قص خرسانات",
    "قص الخرسانة بالليزر", "قص خرسانة ليزر", "منشار قص خرسانة", "منشار قص الخرسانة", "منشار تقطيع خرسانة",
    "ماكينة قص خرسانة", "ماكينة قص الخرسانة", "ماكينة قص الخرسانة المسلحة", "شركة قص خرسانة",
    "قص جدار بالمنشار", "معلم قص جدار", "مقاول قص خرسانة", "قص خرسانة السقف", "قص الخرسانة بالصاروخ",
    "صاروخ قص الخرسانة", "اسعار قص الخرسانة", "قص الخرسانة المسلحة", "شركات تقطيع خرسانة",
    "ماكينة تقطيع الخرسانة", "منشار تقطيع الخرسانة", "منشار قطع الخرسانة", "ماكينة قطع الخرسانة",
    "قص الجدار بالليزر", "قص جدران", "ماكينة قص الخرسانة المسلحة مصر", "قص جدار", "صاروخ قص الجدران",
    "قص جدار بالصاروخ", "قص الجدران بالصاروخ", "صاروخ لقص الجدران", "صاروخ قص جدران", "تكسير الجدار بالصاروخ",
    "تقطيع الخرسانة بالمنشار", "ماكينة تقطيع الخرسانة المسلحة", "صاروخ تقطيع الخرسانة", "شركات تقطيع الخرسانة",
    "سعر منشار تقطيع الخرسانة"
  ];

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    url: DOMAIN,
    telephone: PHONE_INT,
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressLocality: "Cairo",
      streetAddress: ADDRESS_TEXT,
    },
    areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "العاصمة الإدارية", "6 أكتوبر", "الشيخ زايد", "مدينة نصر", "المعادي", "القليوبية"],
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [DOMAIN, WHATSAPP],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${SERVICE_NAME} | ${FOCUS_KEYWORD}`,
    serviceType: "Concrete Sawing and Cutting",
    provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_INT, url: DOMAIN },
    areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "العاصمة الإدارية", "6 أكتوبر", "الشيخ زايد", "مدينة نصر", "المعادي", "القليوبية"],
    url: CANONICAL,
    description: "قص الخرسانة بالمنشار وتقطيع خرسانة ليزر لفتح أبواب وشبابيك، قص خرسانة السقف، قص جدار بالمنشار، وقص الخرسانة المسلحة بدقة عالية وبدون اهتزاز.",
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "قص خرسانة ليزر", item: CANONICAL },
    ],
  };

  return (
    <main className="bg-slate-50" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jsonLdLocalBusiness,
            jsonLdService,
            jsonLdFaq,
            jsonLdBreadcrumbs,
          ]),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(16,185,129,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>قص مستقيم · بدون اهتزاز · حواف جاهزة للتشطيب</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 border-r-8 border-sky-600 pr-4">
                قص الخرسانة بالمنشار: تقطيع خرسانة وقص جدران بدقة الليزر في مصر
              </h1>

              <p className="mt-5 text-slate-700 leading-8 text-lg">
                هل تبحث عن خدمات <strong>قص خرسانة</strong> احترافية؟ نحن في <strong>{BRAND}</strong> نوفر <strong>قص الخرسانة بالليزر</strong> و<strong>تقطيع الخرسانة</strong> باستخدام أحدث <strong>ماكينة قص خرسانة</strong>. سواء كنت بحاجة لـ <strong>قص جدار بالمنشار</strong> أو <strong>تقطيع خرسانة ليزر</strong>، فريقنا جاهز للتنفيذ الفوري.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <StatPill icon={<Scissors className="h-4 w-4 text-sky-600" />} text="قص خرسانة ليزر" />
                <StatPill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="أمان إنشائي تام" />
                <StatPill icon={<MapPin className="h-4 w-4 text-amber-600" />} text="القاهرة والجيزة" />
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href={WHATSAPP}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-sky-700 transition transform hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5" />
                  اطلب مقاول قص خرسانة
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 px-8 py-4 font-bold text-slate-900 shadow-sm hover:bg-slate-50 transition"
                >
                  خدمات تقطيع الخرسانة
                </Link>
              </div>
            </div>

            <div className="rounded-[40px] border border-black/10 bg-white shadow-2xl overflow-hidden p-2">
              <div className="relative aspect-square rounded-[32px] overflow-hidden bg-slate-100">
                <Image src={IMG_HERO} alt="قص خرسانة ليزر - منشار قص الخرسانة" fill priority className="object-cover" />
              </div>
              <div className="p-4 grid grid-cols-3 gap-2">
                {[IMG_1, IMG_2, IMG_3].map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-black/5">
                    <Image src={img} alt={`أعمال قص خرسانة بالمنشار ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* MAIN COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            <Section
              id="services"
              title="خدمات تقطيع وقص الخرسانة"
              subtitle="قص جدار بالمنشار وفتح أبواب وشبابيك بدقة عالية"
              icon={<Wrench className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  نحن نوفر خدمة <strong>قص وتحضيع الخرسانة</strong> و<strong>قص خرسانات</strong> للمشاريع السكنية والتجارية. نستخدم <strong>منشار قص خرسانة</strong> و<strong>منشار قص الخرسانة</strong> لتنفيذ <strong>قص جدار</strong> و<strong>قص جدران</strong> بدقة متناهية.
                </p>
                <p>
                  خدماتنا تشمل <strong>قص خرسانة السقف</strong> وتعديل الفتحات الإنشائية. سواء كنت تبحث عن <strong>معلم قص جدار</strong> أو <strong>شركة قص خرسانة</strong> متخصصة في <strong>ماكينة قص الخرسانة المسلحة</strong>، فنحن هنا لخدمتكم.
                </p>
                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200">
                    <h3 className="font-extrabold text-xl mb-2 text-slate-900 border-b-2 border-sky-400 pb-2">قص الجدار بالمنشار</h3>
                    <p className="text-sm">نحن خبراء في <strong>قص جدار بالمنشار</strong> و<strong>قص الجدار بالليزر</strong> و<strong>قص الجدران بالصاروخ</strong>، لضمان فتحات نظيفة تماماً دون أي اهتزازات جانبية.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200">
                    <h3 className="font-extrabold text-xl mb-2 text-slate-900 border-b-2 border-emerald-400 pb-2">قص الخرسانة بالصاروخ</h3>
                    <p className="text-sm">نستخدم <strong>صاروخ قص الخرسانة</strong> و<strong>صاروخ قص الجدران</strong> للأماكن الضيقة، مع توفير <strong>صاروخ لقص الجدران</strong> احترافي للأعمال الدقيقة.</p>
                  </div>
                </div>
              </div>
            </Section>

            <Section
              id="tech"
              title="معدات تقطيع الخرسانة الحديثة"
              subtitle="استخدام منشار تقطيع خرسانة وماكينة قطع الخرسانة المتقدمة"
              icon={<Settings className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  تعتمد جودة العمل على نوع <strong>ماكينة تقطيع الخرسانة</strong> و<strong>منشار تقطيع الخرسانة</strong> المستخدم. نحن نستخدم <strong>منشار قطع الخرسانة</strong> و<strong>ماكينة قطع الخرسانة</strong> لتحقيق نتائج <strong>تقطيع الخرسانة بالمنشار</strong> المثالية.
                </p>
                <p>
                  للمواقع الإنشائية الكبيرة، نوفر <strong>ماكينة تقطيع الخرسانة المسلحة</strong> و<strong>صاروخ تقطيع الخرسانة</strong> لسرعة الإنجاز مع الحفاظ على الأمان. نلتزم بمعايير <strong>شركات تقطيع الخرسانة</strong> العالمية.
                </p>
                <div className="p-6 rounded-3xl bg-sky-900 text-white shadow-lg">
                  <p className="text-slate-200">
                     إن <strong>ماكينة قص الخرسانة</strong> الخاصة بنا قادرة على تفادي <strong>تكسير الجدار بالصاروخ</strong> العشوائي، مما يجعلنا أفضل <strong>مقاول قص خرسانة</strong> يمكنكم الاعتماد عليه في مصر.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="glossary"
              title="دليل خدمات قص وتقطيع الخرسانة"
              subtitle="تفاصيل شاملة حول تخصصاتنا ومعداتنا"
              icon={<Search className="h-5 w-5 text-sky-700" />}
            >
              <p className="text-sm text-slate-600 mb-6 leading-7 border-r-4 border-sky-400 pr-4">
                كأفضل شركة قص خرسانة، نوفر لك قائمة شاملة بكل ما يخص تقطيع وقص الخرسانة والأسطح الصلبة في مصر:
              </p>
              <div className="flex flex-wrap gap-2">
                {keywords.map((kw) => (
                  <span
                    key={kw}
                    className="inline-flex items-center rounded-lg border border-black/5 bg-slate-50 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-sm hover:bg-white transition"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </Section>

            <Section
              id="faq"
              title="الأسئلة الشائعة (FAQ)"
              subtitle="كل ما تريد معرفته عن خدمات تقطيع الخرسانة"
              icon={<HelpCircle className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-3">
                {faq.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:border-sky-300 transition-all"
                  >
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-sky-500 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-7 text-sm bg-slate-50 p-4 rounded-xl border-r-4 border-sky-400">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <HardHat className="h-6 w-6 text-slate-800" />
                <h3 className="font-extrabold text-xl text-slate-900">تميزنا</h3>
              </div>
              <p className="text-slate-600 mb-4 text-sm leading-6">
                نحن في <strong>{BRAND}</strong> نقوم بـ <strong>قص خرسانة ليزر</strong> و<strong>تقطيع خرسانة</strong> و<strong>قص الخرسانة المسلحة</strong> بأحدث تكنولوجيا المنشار والسكك.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2 font-bold text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0" />
                  <span><strong>قص جدار بالمنشار</strong> دقيق بالمللي</span>
                </li>
                <li className="flex gap-2 font-bold text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0" />
                  <span><strong>تقطيع الخرسانة</strong> بدون اهتزاز مدمر</span>
                </li>
                <li className="flex gap-2 font-bold text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0" />
                  <span><strong>منشار قطع الخرسانة</strong> صناعة ألمانية</span>
                </li>
              </ul>
            </div>

            <MiniCard
              icon={<MapPin className="h-5 w-5 text-sky-600" />}
              title="نغطي كافة المناطق"
              desc="القاهرة، الجيزة، أكتوبر، العاصمة الإدارية، وكافة محافظات مصر بسيارات مجهزة."
            />

            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-sky-600/20 rounded-full -mr-12 -mt-12 blur-3xl" />
              <h3 className="font-extrabold text-xl mb-2 text-sky-400">تواصل مع المقاول</h3>
              <p className="text-slate-400 text-sm mb-4 leading-6">احصل على أفضل اسعار قص الخرسانة وأسرع تنفيذ في مصر.</p>
              <Link
                href={WHATSAPP}
                className="block w-full text-center py-4 rounded-2xl bg-sky-600 text-white font-bold hover:bg-sky-700 transition shadow-lg shadow-sky-900/40"
              >
                واتسـاب فوري
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
