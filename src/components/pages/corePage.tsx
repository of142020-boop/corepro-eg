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
  Hammer,
  Zap,
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
            <p className="mt-2 text-slate-600 leading-7 font-semibold">{subtitle}</p>
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
      <span className="text-slate-700 font-extrabold">{text}</span>
    </div>
  );
}

export default function CorePage() {
  const faq = [
    {
      q: "ما هو سعر فتحة الكور وكيف تجدون أفضل اسعار فتحات الكور في مصر؟",
      a: "يعتمد سعر فتحة الكور على القطر المطلوب (من 1 بوصة حتى 12 بوصة وأكثر) وسمك الحائط ونوع الخرسانة إذا كانت مسلحة بحديد كثيف أو خرسانة عادية. نحن في Core Pro نوفر أفضل اسعار فتحات الكور مع ضمان الجودة الهندسية، حيث نوفر باقات خصم للمشاريع الكبيرة والكميات.",
    },
    {
      q: "هل تخريم الخرسانة بالكور آمن على أساسات المنزل؟",
      a: "بكل تأكيد، تخريم الخرسانة بالكور هو البديل الهندسي الآمن للتكسير التقليدي. ماكينة كور تخريم الخرسانة تعمل بنظام الحفر الدوار وليس الهبد، مما يعني صفر اهتزازات جانبية، وبالتالي لا تتأثر الحوائط المجاورة أو الأساسات بالشروخ.",
    },
    {
      q: "هل يمكن عمل فتحات الغاز ومواسير السباكة في وقت واحد؟",
      a: "نعم، عمل فتحات الغاز يتطلب دقة عالية لتوافق شروط استلام شركة الغاز، ونحن كـ مقاول فتحات كور محترف نوفر الميل الصحيح والقطر الدقيق. كما ننفذ فتحات مواسير السباكة وتصريف التكييف في الفيلات والمباني الإدارية.",
    },
    {
      q: "كيف اتواصل مع صنايعي كور محترف في القاهرة أو الجيزة؟",
      a: "يمكنكم التواصل مع فريق العمل لدينا مباشرة، حيث نوفر خبراء (صنايعي كور) مدربين على التعامل مع كافة أنواع الخرسانة. نغطي القاهرة الكبرى، التجمع، مدينة نصر، الشيخ زايد و6 أكتوبر ونصل للموقع في أسرع وقت ممكن.",
    },
    {
      q: "ما هي استخدامات دريل كور أو كور دريل في التشطيبات؟",
      a: "دريل كور يُستخدم لعمل فتحة مدخنة السخان، فتحات شفاطات المطابخ، تمرير كابلات الكهرباء، وتجهيز فتحات الدكت (Duct) للمكيفات المركزية. كما يُستخدم في تخريم الرخام والسيراميك بدقة دون كسره.",
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
    areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "العاصمة الإدارية", "6 أكتوبر", "الشيخ زايد", "مدينة نصر", "المعادي", "القليوبية"],
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
    description: "أقوى محتوى هندسي لتخريم الخرسانة بالكور وفتح فتحات كور خرسانة للأسقف والحوائط والكمر، لتمرير الغاز والتكييف والسباكة والدكت والمدخنة بدقة عالية وبدون تكسير.",
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
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(34,197,94,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>دقة هندسية 100% · أسرع تنفيذ · التزام بالمواعيد</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4">
                صنايعي كور وتخريم خرسانة: حلول فتح كور هندسية وبدقة الليزر في مصر
              </h1>

              <p className="mt-5 text-slate-800 leading-9 text-lg font-medium">
                هل تعبت من التكسير العشوائي الذي يسبب شروخاً في جدران منزلك؟ نحن في <strong>{BRAND}</strong> نقدم لك الحل النهائي من خلال <strong>تخريم الخرسانة بالكور</strong>. نحن لسنا مجرد <strong>صنايعي كور</strong> تقليدي، بل نحن فريق متخصص يمتلك أحدث <strong>ماكينة كور تخريم الخرسانة</strong> لعمل <strong>فتحات كور</strong> منتظمة ومثالية لتمرير كافة المرافق والخدمات.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <StatPill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="أمان إنشائي تام" />
                <StatPill icon={<Zap className="h-4 w-4 text-amber-600" />} text="بدون غبار أو فوضى" />
                <StatPill icon={<MapPin className="h-4 w-4 text-sky-600" />} text="خدمة فورية بكافة المحافظات" />
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={WHATSAPP}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-10 py-5 font-black text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition transform hover:-translate-y-1 text-xl"
                >
                  <Phone className="h-6 w-6" />
                  اتصل بصنايعي الكور
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border-2 border-slate-200 px-10 py-5 font-black text-slate-900 shadow-sm hover:bg-slate-50 transition text-xl"
                >
                  استكشف خدماتنا
                </Link>
              </div>
            </div>

            <div className="group rounded-[48px] border-4 border-white bg-white shadow-2xl overflow-hidden p-3 relative">
               <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative aspect-square rounded-[40px] overflow-hidden bg-slate-100 shadow-inner">
                <Image src={IMG_HERO} alt="تخريم الخرسانة بالكور - Core Pro Egypt Professional" fill priority className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-4 grid grid-cols-3 gap-3">
                {[IMG_1, IMG_2, IMG_3].map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm">
                    <Image src={img} alt={`نتائج تخريم كور احترافية ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE CONTENT SECTIONS */}
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* MAIN CONTENT COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview Section */}
            <Section
              id="overview"
              title="لماذا يُعد تخريم الخرسانة بالكور الخيار الأفضل؟"
              subtitle="مقارنة بين التخريم بالكور والتكسير التقليدي بالهيلتي"
              icon={<ShieldCheck className="h-6 w-6 text-emerald-700" />}
            >
              <div className="prose prose-slate max-w-none text-slate-700 leading-9">
                <p className="text-lg">
                  في عالم الإنشاءات الحديث، أصبح <strong>تخريم الخرسانة</strong> باستخدام التكنولوجيا الماسية (Diamond Core Drilling) ضرورة وليس رفاهية. عندما تقوم بـ <strong>عمل فتحات في الخرسانة</strong> يدوياً، فإنك تعرض الهيكل الإنشائي لاهتزازات عنيفة تؤدي لشروخ مجهرية قد تضعف المبنى مستقبلاً.
                </p>
                <p>
                  بينما تقنية <strong>فتحات كور</strong> تعتمد على الدوران السريع للتيجان الماسية، مما يقطع الحديد والخرسانة معاً بسلاسة متناهية. نحن في <strong>شركات تخريم الخرسانة بالكور</strong> المحترفة، نضمن لك فتحة دائرية منتظمة بنسبة 100%، مما يقلل بشكل كبير من تكاليف المحارة والترميم التي تتبع عمليات التكسير العادية.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 shadow-sm flex gap-4">
                     <BadgeCheck className="h-8 w-8 text-emerald-600 shrink-0" />
                     <div>
                        <h4 className="font-black text-slate-900 mb-2">مميزات تخريم كور</h4>
                        <ul className="text-sm space-y-2">
                           <li>• دقة متناهية في القطر والمكان</li>
                           <li>• صفر اهتزازات جانبية (أمان إنشائي)</li>
                           <li>• قدرة عالية على <strong>تخريم الخرسانة المسلحة</strong></li>
                        </ul>
                     </div>
                  </div>
                  <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100 shadow-sm flex gap-4">
                     <Hammer className="h-8 w-8 text-rose-600 shrink-0" />
                     <div>
                        <h4 className="font-black text-slate-900 mb-2">عيوب التكسير اليدوي</h4>
                        <ul className="text-sm space-y-2">
                           <li>• إضعاف الهيكل الإنشائي بالشروخ</li>
                           <li>• ضوضاء وغبار مكثف جداً</li>
                           <li>• تكاليف ترميم وتشطيب إضافية باهظة</li>
                        </ul>
                     </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Detailed Applications */}
            <Section
              id="applications"
              title="تطبيقات فتحات الكور المتخصصة"
              subtitle="من فتحات الغاز البسيطة إلى فتحات الدكت الضخمة للمصانع"
              icon={<Layers className="h-6 w-6 text-sky-700" />}
            >
              <div className="space-y-8 text-slate-700 leading-9">
                <p>
                  تتنوع الحاجة إلى <strong>صنايعي كور</strong> حسب طبيعة المشروع، ونحن نغطي كافة الجوانب من خلال <strong>جهاز تخريم الخرسانه</strong> المتطور الخاص بنا:
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-emerald-200 transition">
                    <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
                       <Flame className="h-5 w-5 text-orange-600" />
                       عمل فتحات الغاز ومداخن السخانات
                    </h3>
                    <p className="text-sm">
                      تعتبر شروط شركة الغاز صارمة جداً بخصوص قطر وميل الفتحة. نحن نقوم بـ <strong>عمل فتحات الغاز</strong> و<strong>عمل فتحة مدخنة السخان</strong> بمقاسات تبدأ من 1 بوصة حتى 5 بوصة بدقة ليزر، لضمان استلام الوصلات بدون أي عيوب فنية.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-sky-200 transition">
                    <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
                       <Fan className="h-5 w-5 text-sky-600" />
                       فتحات التكييف والدكت (HVAC)
                    </h3>
                    <p className="text-sm">
                       في المشاريع الإدارية والمولات، نقوم بـ <strong>تخريم السقف</strong> و<strong>تخريم الجدار</strong> لتمرير مواسير الفريون ومجاري الهواء (Duct). نستخدم <strong>ماكينة كور ثقب الخرسانة</strong> لعمل فتحات تصل لأقطار 10 بوصة وأكثر في كمرات المبنى.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-amber-200 transition">
                    <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
                       <Droplets className="h-5 w-5 text-blue-600" />
                       تمديدات السباكة والصرف الصحي
                    </h3>
                    <p className="text-sm">
                       سواء كنت بحاجة لـ <strong>عمل فتحة في السقف لعمل سلم</strong> أو تمرير مواسير صرف 4 بوصة، نحن نوفر <strong>تخريم كور</strong> نظيف من الجهتين، مما يمنع تسرب المياه لاحقاً ويضمن ثبات المواسير داخل <strong>فتحة كور</strong> منتظمة.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-emerald-200 transition">
                    <h3 className="text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
                       <Target className="h-5 w-5 text-emerald-600" />
                       تخريم الرخام والسيراميك والجرانيت
                    </h3>
                    <p className="text-sm">
                       التشطيبات الراقية تتطلب حذراً شديداً. استخدام **بنط تخريم السيراميك** و**طريقة تخريم الرخام** الصحيحة هو سر نجاحنا. نقوم بـ **تخريم الرخام** في الأحواض والمطابخ دون أي كسر أو خدوش، مما يوفر عليك الخسائر المادية الكبيرة.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Technical Specs & Equipment */}
            <Section
              id="tech"
              title="المعدات والقدرات التقنية"
              subtitle="ماكينة الكور الماسية: قوة جبارة في عمق الخرسانة"
              icon={<Settings className="h-6 w-6 text-slate-800" />}
            >
              <div className="space-y-6 text-slate-700 leading-9">
                <p>
                  جودة <strong>فتحات خرسانة كور</strong> تعتمد بشكل أساسي على المعدة والمشغل. نحن نمتلك فئات متنوعة من <strong>ماكينة الكور ماشين</strong> الإسبانية التي تحقق عزم دوران عالي جداً لقطع أصلد أنواع الحديد داخل <strong>تخريم الخرسانة المسلحة</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 border border-slate-200 rounded-3xl bg-slate-50">
                     <h4 className="font-black text-slate-900 flex items-center gap-2 uppercase text-xs tracking-widest mb-2">
                        <BadgeCheck className="h-4 w-4 text-emerald-600" />
                        القدرة على الاختراق
                     </h4>
                     <p className="text-xs">
                        يمكن لـ <strong>ماكينة كور دريل</strong> الخاصة بنا اختراق أعماق تصل لـ 50 سم وأكثر في <strong>حفر كور</strong> السدود والكمرات الضخمة بكفاءة تامة.
                     </p>
                  </div>
                  <div className="p-5 border border-slate-200 rounded-3xl bg-slate-50">
                     <h4 className="font-black text-slate-900 flex items-center gap-2 uppercase text-xs tracking-widest mb-2">
                        <BadgeCheck className="h-4 w-4 text-emerald-600" />
                        نظام التبريد المائي
                     </h4>
                     <p className="text-xs">
                        نستخدم تبريداً مستمراً أثناء **تخريم كور** لتقليل احتكاك التاج ومنع خروج الغبار الضار، مما يحافظ على نظافة الموقع وسلامة العاملين.
                     </p>
                  </div>
                </div>
                <p className="text-sm font-medium italic border-l-4 border-amber-400 pl-4 bg-amber-50 py-3 rounded-r-lg">
                  ملاحظة هامة: إذا كنت تتساءل عن <strong>سعر فتحات الكور</strong>، تذكر أن الدقة في التنفيذ توفر عليك آلاف الجنيهات في مرحلة التشطيب والمعالجة الكيميائية للخرسانة.
                </p>
              </div>
            </Section>

             {/* Service Areas & Confidence */}
            <Section
              id="trust"
              title="لماذا يختارنا المقاولون المتميزون؟"
              subtitle="التزام بشروط الاستلام الهندسي لأصعب المشاريع"
              icon={<Target className="h-6 w-6 text-emerald-700" />}
            >
              <div className="space-y-5 text-slate-700 leading-9">
                <p>
                  نحن كـ <strong>مقاول فتحات كور</strong>، اكتسبنا ثقة كبرى شركات التطوير العقاري في مصر. قمنا بتنفيذ مئات العمليات من <strong>تفتيح الخرسانة</strong> و<strong>تفتيح كور</strong> في العاصمة الإدارية والتجمع الخامس بنجاح منقطع النظير.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                   {[
                      "دقة مكان الفتحة بنسبة خطأ 0%",
                      "استقامة تامة لـ فتحة الكور من الداخل",
                      "القدرة على العمل في الأماكن الضيقة والأدوار المرتفعة",
                      "توفير باقات خصم لـ اسعار ماكينة كور تخريم الخرسانة",
                   ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start text-sm font-bold bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                         <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                         <span>{item}</span>
                      </div>
                   ))}
                </div>
              </div>
            </Section>

            {/* FAQ */}
            <Section
              id="faq"
              title="الأسئلة الشائعة حول الكور دريل"
              subtitle="إجابات احترافية وشاملة لمخاوفكم"
              icon={<HelpCircle className="h-6 w-6 text-emerald-700" />}
            >
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-3xl border-2 border-black/5 bg-white p-6 shadow-sm hover:border-emerald-300 transition-all duration-300"
                  >
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between text-lg">
                      <span className="pr-2">{item.q}</span>
                      <span className="text-emerald-600 group-open:rotate-180 transition p-2 bg-emerald-50 rounded-full">⌄</span>
                    </summary>
                    <div className="mt-5 text-slate-700 leading-8 text-sm bg-slate-50 p-6 rounded-2xl border-r-8 border-emerald-500 shadow-inner">
                       {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </Section>
          </div>

          {/* SIDEBAR - HIGH AUTHORITY COLUMN */}
          <aside className="space-y-8">
            <div className="p-8 rounded-[40px] bg-white border border-black/10 shadow-lg relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full -mr-16 -mt-16 blur-3xl transition group-hover:bg-emerald-600/20" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-2xl">
                   <HardHat className="h-7 w-7 text-emerald-800" />
                </div>
                <h3 className="font-black text-2xl text-slate-900">نحن في خدمتك</h3>
              </div>
              <p className="text-slate-700 mb-6 text-sm leading-7">
                نغطي كافة أنحاء مصر بأسرع استجابة. نحن خيارك الأول عند البحث عن <strong>ماكينة كور ماشين</strong> أو <strong>صنايعي كور</strong> لتنفيذ <strong>فتحات خرسانة</strong> صعبة.
              </p>
              <ul className="space-y-4">
                {[
                  { t: "التجمع والقاهرة الجديدة", sub: "خدمة فورية خلال ساعتين" },
                  { t: "الشيخ زايد و6 أكتوبر", sub: "فريق كامل للمشاريع الإنشائية" },
                  { t: "العاصمة الإدارية", sub: "خبرة في الأبراج والمنشآت العملاقة" },
                  { t: "المحافظات (ساحل، سوهاج...)", sub: "تنسيق مسبق للمشاريع الكبري" }
                ].map((area, i) => (
                  <li key={i} className="flex gap-3 items-center p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                    <div>
                       <div className="font-black text-slate-900 text-sm">{area.t}</div>
                       <div className="text-[10px] text-slate-500 font-bold">{area.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-[40px] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl" />
              <h3 className="font-black text-2xl mb-4 text-emerald-400">تواصل مباشر</h3>
              <p className="text-slate-400 text-sm mb-6 leading-7">اسأل عن <strong>اسعار فتحات الكور</strong> والعروض المتاحة حالياً للمساحات الكبيرة.</p>
              <Link
                href={WHATSAPP}
                className="block w-full text-center py-5 rounded-2xl bg-emerald-600 text-white font-black text-xl hover:bg-emerald-700 transition shadow-[0_10px_30px_rgba(16,185,129,0.4)] transform hover:scale-[1.02]"
              >
                واتسـاب (رد فوري)
              </Link>
              <div className="mt-6 flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="h-4 w-4" />
                    متاحون على مدار الساعة
                 </div>
                 <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="h-4 w-4" />
                    ضمان جادة العمل 100%
                 </div>
              </div>
            </div>

            <Section
              title="دليل خدمات الخرسانة"
              icon={<Search className="h-5 w-5 text-emerald-700" />}
              children={
                <div className="flex flex-wrap gap-2 mt-2">
                  {keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center rounded-lg border border-black/5 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-600 hover:text-emerald-700 hover:border-emerald-200 transition"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              }
            />
          </aside>
        </div>
      </div>
    </main>
  );
}
