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
  Drill,
  Wrench,
  Ruler,
  Sparkles,
  Building2,
  HardHat,
  HelpCircle,
  Settings,
  BadgeCheck,
  Target,
  Wind,
  Flame,
  Droplets,
  Fan,
  Layers,
  Phone,
  Search,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/core`;
const PHONE_NUM = "01055550195";
const PHONE_INT = "+20" + PHONE_NUM.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = " الحي العاشر مدينة نصر";

const SERVICE_NAME = "تخريم الخرسانة بالكور";
const FOCUS_KEYWORD = "صنايعي كور";

const IMG_HERO = { src: "/images/core/hero.webp", width: 800, height: 800 };
const IMG_1 = { src: "/images/core/work-1.webp", width: 800, height: 800 };
const IMG_2 = { src: "/images/core/work-2.webp", width: 800, height: 800 };
const IMG_3 = { src: "/images/core/work-3.webp", width: 800, height: 800 };

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
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 border-r-4 border-emerald-600 pr-3">
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

export default function CorePage() {
  const faq = [
    {
      q: "هل تخريم الخرسانة بالكور آمن؟ وهل يصلح لـ تخريم الخرسانة المسلحة؟",
      a: "نعم. تخريم الخرسانة بالكور هو الحل الهندسي الأكثر أمانًا خاصة في تخريم الخرسانة المسلحة لأنه يقلّل الاهتزازات مقارنة بالتكسير. نستخدم ماكينة كور تخريم الخرسانة مع تبريد مائي وتثبيت دقيق للحصول على فتحة الكور منتظمة دون شروخ.",
    },
    {
      q: "ما الفرق بين دريل كور وكور دريل وبين التكسير بالهيلتي؟",
      a: "دريل كور أو كور دريل (Core Drill) يعطي فتحة كور دائرية بالمقاس المطلوب بدون تكسير. التكسير بالهيلتي قد يسبب شروخ ومحارة ساقطة وفتحات غير منتظمة. جهاز تخريم الخرسانه أو ماكينة الكور يضمن دقة أعلى ونظافة أفضل وسرعة تنفيذ.",
    },
    {
      q: "هل يمكن عمل فتحات الغاز؟ وهل الفتحة تكون مطابقة للمقاسات؟",
      a: "نعم، عمل فتحات الغاز من أكثر طلباتنا. ننفذ عمل فتحات كور لتمرير مواسير الغاز بمقاس مضبوط وشكل منتظم (فتحة كور جاهزة للتركيب) لتقليل أي ملاحظات أثناء الاستلام.",
    },
    {
      q: "هل تقدمون عمل فتحة مدخنة السخان والشفاطات والدكت؟",
      a: "بكل تأكيد. ننفذ عمل فتحة مدخنة السخان وفتحات شفاطات ودكت تهوية بقطر مناسب وميل مضبوط، مع تسليم نظيف للموقع.",
    },
    {
      q: "هل يمكن فتح كور في الكمر أو تخريم السقف؟ وهل يؤثر على الحديد؟",
      a: "نعم يمكن فتح كور في الكمر وكذلك تخريم السقف عند الحاجة، لكن يتم ذلك بمعاينة وتحديد المسار لتقليل التعارض مع حديد التسليح قدر الإمكان. تخريم كور يتم بدقة وباستخدام كور تخريم الخرسانة برؤوس ماسية.",
    },
    {
      q: "كيف يتم تحديد اسعار فتحات الكور؟ وهل يوجد سعر فتحة الكور ثابت؟",
      a: "لا نضع رقم ثابت لأن اسعار فتحات الكور تعتمد على قطر الفتحة، سمك الخرسانة، نوع العنصر (حائط/سقف/كمر)، عدد الفتحات، وسهولة الوصول للمكان. وبعد المعاينة نوضح لك سعر فتحة الكور بشفافية قبل التنفيذ.",
    },
    {
      q: "هل أنتم مقاول فتحات كور؟ وما الذي يميزكم عن شركات تخريم الخرسانة بالكور؟",
      a: "نعم نحن مقاول فتحات كور بخبرة ميدانية، ونلتزم بنفس منهج شركات تخريم الخرسانة بالكور: معاينة + تجهيز + تخريم الخرسانة بالكور + سحب المخلفات + تسليم نظيف. هدفنا فتحات الكور تطلع منتظمة وتقلل التكسير والترميم.",
    },
    {
      q: "أسعار ماكينة كور تخريم الخرسانة / اسعار ماكينة كور تخريم الخرسانة: هل أشتري ماكينة؟",
      a: "غالبًا لا. أسعار ماكينة كور تخريم الخرسانة وكذلك اسعار ماكينة كور تخريم الخرسانة للمعدات الاحترافية تكون مرتفعة، وشراء ماكينة تخريم خرسانة مناسب لمن ينفذ بشكل يومي. لمعظم العملاء أوفر طلب خدمة تنفيذ بماكينة كور تخريم الخرسانة بدل الشراء.",
    },
  ];

  const keywords = [
    "فتحات كور", "عمل فتحات في الخرسانة", "عمل فتحة مدخنة السخان", "عمل فتحات بالكور", "عمل فتحات كور",
    "ماكينة كور تخريم الخرسانة", "شركات تخريم الخرسانة بالكور", "اسعار فتحات الكور", "عمل فتحات الغاز",
    "صنايعي كور", "فتح كور في الكمر", "تخريم الخرسانة", "جهاز تخريم الخرسانه", "مقاول فتحات كور",
    "فتحات كور خرسانة", "فتحات الكور", "فتحة الكور", "كور تخريم الخرسانة", "أسعار ماكينة كور تخريم الخرسانة",
    "تخريم الخرسانة المسلحة", "كور تخريم", "اسعار ماكينة كور تخريم الخرسانة", "ماكينة تخريم خرسانة",
    "تخريم كور", "تخريم السقف", "فتحة كور", "سعر فتحة الكور", "دريل كور", "كور دريل", "ماكينة الكور",
    "فتحات خرسانة كور", "فتحات كور ماشين", "سعر فتحات الكور", "فتحات خرسانة", "ماكينة حفر كور",
    "كور حفر", "حفر كور", "تخريم الجدار", "بنط تخريم السيراميك", "تخريم السيراميك", "عمل فتحة في سقف خرساني قائم",
    "عمل فتحة في السقف لعمل سلم", "عمل فتحة في الرخام", "عمل فتحات في الجدار", "عمل فتحات في الجبس",
    "طريقة تخريم الرخام", "تخريم الرخام", "كور تفتيح الخرسانه", "تفتيح الخرسانة", "تفتيح كور",
    "ماكينة كور ثقب الخرسانة", "ثقب كور", "ماكينة كور دريل", "سعر ماكينة كور دريل", "سعر جهاز كور دريل",
    "أسعار ماكينة كور دريل", "ماكينة الكور ماشين", "كور ماشين"
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
    areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "الشيخ زايد", "6 أكتوبر", "العاصمة الإدارية", "القليوبية"],
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [DOMAIN, WHATSAPP],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${SERVICE_NAME} | ${FOCUS_KEYWORD}`,
    serviceType: "Concrete core drilling",
    provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_INT, url: DOMAIN },
    areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "الشيخ زايد", "6 أكتوبر", "العاصمة الإدارية", "القليوبية"],
    url: CANONICAL,
    description: "تخريم الخرسانة بالكور وفتح فتحات كور خرسانة للأسقف والحوائط والكمر، لتمرير الغاز والتكييف والسباكة والدكت والمدخنة بدقة عالية وبدون تكسير.",
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
      { "@type": "ListItem", position: 2, name: "تخريم كور", item: CANONICAL },
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
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(14,165,233,0.14),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(34,197,94,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>دقة عالية · بدون تكسير · تسليم نظيف</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4">
                صنايعي كور في مصر: تخريم الخرسانة بالكور وعمل فتحات كور بدقة ليزر (بدون تكسير)
              </h1>

              <p className="mt-5 text-slate-700 leading-8 text-lg">
                هل تحتاج <strong>عمل فتحات في الخرسانة</strong> بسرعة ونظافة ودقة؟ في <strong>{BRAND}</strong> نوفر <strong>صنايعي كور</strong> محترف لتنفيذ <strong>عمل فتحات كور</strong> و<strong>عمل فتحات بالكور</strong> داخل الحوائط والأسقف والكمر. نستخدم <strong>ماكينة كور تخريم الخرسانة</strong> أو <strong>ماكينة الكور</strong> لإخراج <strong>فتحة كور</strong> دائرية منتظمة.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <StatPill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="أمان بدون اهتزاز" />
                <StatPill icon={<Clock className="h-4 w-4 text-emerald-600" />} text="تنفيذ سريع" />
                <StatPill icon={<MapPin className="h-4 w-4 text-emerald-600" />} text="القاهرة والجيزة" />
              </div>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href={WHATSAPP}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-emerald-700 transition transform hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5" />
                  اطلب الخدمة الآن
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border border-slate-200 px-8 py-4 font-bold text-slate-900 shadow-sm hover:bg-slate-50 transition"
                >
                  الأسعار والتفاصيل
                </Link>
              </div>
            </div>

            <div className="rounded-[40px] border border-black/10 bg-white shadow-2xl overflow-hidden p-2">
              <div className="relative aspect-square rounded-[32px] overflow-hidden bg-slate-100">
                <Image src={IMG_HERO} alt="تخريم الخرسانة بالكور - Core Pro Egypt" fill priority className="object-cover" />
              </div>
              <div className="p-4 grid grid-cols-3 gap-2">
                {[IMG_1, IMG_2, IMG_3].map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-black/5">
                    <Image src={img} alt={`أعمال تخريم كور ${i + 1}`} fill className="object-cover" />
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
              title="خدمات تخريم الخرسانة المتكاملة"
              subtitle="نحن نوفر عمل فتحات الغاز والتكييف والسباكة بدقة عالية"
              icon={<Drill className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  نحن كأفضل <strong>مقاول فتحات كور</strong> نقدم لكم خدمة <strong>تخريم الخرسانة</strong> المسلحة وغير المسلحة. نوفر <strong>عمل فتحة مدخنة السخان</strong> و<strong>عمل فتحات الغاز</strong> و<strong>تخريم السقف</strong> بكل سهولة. باستخدام <strong>جهاز تخريم الخرسانه</strong> المتطور، نضمن لك <strong>فتحات خرسانة</strong> نظيفة تماماً دون تكسير.
                </p>
                <p>
                  خدماتنا تشمل <strong>فتح كور في الكمر</strong> وتجهيز <strong>فتحات كور</strong> للتكييف والتهوية. نستخدم <strong>ماكينة تخريم خرسانة</strong> قوية قادرة على التعامل مع أصعب الظروف الإنشائية، مما يوفر عليك الوقت والجهد في <strong>تخريم كور</strong> بشكل احترافي.
                </p>
                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200">
                    <h3 className="font-extrabold text-xl mb-2 text-slate-900 border-b pb-2">تخريم الجدار والأسقف</h3>
                    <p className="text-sm">نحن خبراء في <strong>تخريم الجدار</strong> و<strong>تخريم السقف</strong>، ونوفر <strong>عمل فتحات في الجدار</strong> و<strong>عمل فتحات في الجبس</strong> بدقة متناهية وبدون اهتزازات.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200">
                    <h3 className="font-extrabold text-xl mb-2 text-slate-900 border-b pb-2">تخريم الرخام والسيراميك</h3>
                    <p className="text-sm">نوفر <strong>تخريم الرخام</strong> و<strong>تخريم السيراميك</strong> باستخدام <strong>بنط تخريم السيراميك</strong> المخصصة و<strong>طريقة تخريم الرخام</strong> الصحيحة لتجنب الكسر.</p>
                  </div>
                </div>
              </div>
            </Section>

            <Section
              id="tech"
              title="تكنولوجيا حفر الكور والمعدات"
              subtitle="استخدام ماكينة حفر كور وماكينة كور دريل وماكينة الكور"
              icon={<Settings className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  نعتمد في عملنا على <strong>ماكينة حفر كور</strong> حديثة للقيام بمهام <strong>كور حفر</strong> و<strong>حفر كور</strong>. تقنياتنا تشمل <strong>تفتيح الخرسانة</strong> و<strong>تفتيح كور</strong> و<strong>كور تفتيح الخرسانه</strong> لضمان سلامة الهيكل الإنشائي تماماً.
                </p>
                <p>
                  سواء كنت تبحث عن <strong>ثقب كور</strong> أو استخدام <strong>ماكينة كور ثقب الخرسانة</strong>، فنحن نوفر لك أحدث الأجهزة الإسبانية والألمانية. كما يمكنك الاستفسار عن <strong>سعر ماكينة كور دريل</strong> و<strong>سعر جهاز كور دريل</strong> و<strong>أسعار ماكينة كور دريل</strong> من خلالنا.
                </p>
                <p>
                  إن <strong>ماكينة الكور ماشين</strong> و<strong>كور ماشين</strong> و<strong>فتحات كور ماشين</strong> الخاصة بنا هي الأفضل في مصر حالياً، ونوفر <strong>سعر فتحات الكور</strong> و<strong>سعر فتحة الكور</strong> التنافسي للجميع مع جودة لا تقارن.
                </p>
              </div>
            </Section>

            <Section
              id="glossary"
              title="دليل تفتيح وتخريم الخرسانة"
              subtitle="تفاصيل الخدمات والحلول الهندسية التي نقدمها"
              icon={<Search className="h-5 w-5 text-emerald-700" />}
            >
              <p className="text-sm text-slate-600 mb-6 leading-7 border-r-4 border-emerald-400 pr-4">
                فيما يلي قائمة شاملة بالتطبيقات والخدمات التي نوفرها لعملائنا في مصر، مع ضمان الالتزام بالمعايير الفنية:
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
              subtitle="إجابات سريعة حول تخريم الخرسانة بالكور"
              icon={<HelpCircle className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-3">
                {faq.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm hover:border-sky-200 transition"
                  >
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-3 text-slate-600 leading-7 text-sm">{item.a}</p>
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
                <h3 className="font-extrabold text-xl text-slate-900 uppercase">فتحات كور</h3>
              </div>
              <p className="text-slate-600 mb-4 text-sm leading-6">
                نحن في <strong>{BRAND}</strong> نوفر <strong>فتحات الكور</strong> و<strong>فتحات كور خرسانة</strong> و<strong>فتحة الكور</strong> بأعلى دقة وأقل الأسعار في السوق المصري.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2 font-bold text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span><strong>اسعار فتحات الكور</strong> منافسة جداً</span>
                </li>
                <li className="flex gap-2 font-bold text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span><strong>فتحات خرسانة</strong> دقيقة بالمللي</span>
                </li>
                <li className="flex gap-2 font-bold text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span><strong>شركات تخريم الخرسانة بالكور</strong> معتمدة</span>
                </li>
              </ul>
            </div>

            <MiniCard
              icon={<MapPin className="h-5 w-5 text-emerald-600" />}
              title="مناطق الخدمة"
              desc="القاهرة الكبرى، الجيزة، التجمع، مدينة نصر، المعادي، الشيخ زايد، 6 أكتوبر، العاصمة الإدارية."
            />

            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600/20 rounded-full -mr-12 -mt-12 blur-3xl" />
              <h3 className="font-extrabold text-xl mb-2 text-emerald-400">تواصل فوري</h3>
              <p className="text-slate-400 text-sm mb-4 leading-6">هل تبحث عن صنايعي كور أو تفتيح كور؟ نحن نصل إليك أينما كنت في أسرع وقت.</p>
              <Link
                href={WHATSAPP}
                className="block w-full text-center py-4 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/40"
              >
                واتسـاب 24 ساعة
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
