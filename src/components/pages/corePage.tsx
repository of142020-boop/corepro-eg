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
  X,
  Plus,
  Maximize,
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
  level = 2,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  level?: 2 | 3;
}) {
  const HeadingTag = level === 2 ? 'h2' : 'h3';
  return (
    <section
      id={id}
      className={`rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)] ${level === 3 ? 'mx-4 md:mx-8' : ''}`}
    >
      <div className="mb-6 flex items-start gap-3">
        {icon ? (
          <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5">
            {icon}
          </div>
        ) : null}
        <div>
          <HeadingTag className={`font-black tracking-tight text-slate-900 border-r-4 border-emerald-600 pr-3 ${level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
            {title}
          </HeadingTag>
          {subtitle ? (
            <p className="mt-2 text-slate-600 leading-7 font-semibold">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">
        {children}
      </div>
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
      q: "هل تخريم الخرسانة بالكور آمن على أساسات المبنى؟",
      a: "نعم، بكل تأكيد. تقنية الكور صُممت خصيصاً لتكون البديل الآمن للتكسير اليدوي. حركتها الدائرية تقص الخرسانة والحديد دون إحداث أي اهتزازات، مما يضمن سلامة الهيكل الإنشائي بالكامل.",
    },
    {
      q: "كم تستغرق عملية تخريم السقف لعمل فتحة؟",
      a: "بواسطة الماكينات الحديثة التي نعتمد عليها، عملية التخريم الفعلية لفتحة قياسية لا تستغرق سوى 15 إلى 30 دقيقة تقريباً، بخلاف وقت القياس والتجهيز والتنظيف السريع.",
    },
    {
      q: "هل تسبب عملية الكور فوضى وتلوث للمكان بالتراب؟",
      a: "إطلاقاً. نحن نعتمد على نظام \"التبريد المائي\" (Wet Core Drilling)، والذي يحول الأتربة الناتجة إلى معجون سائل يتم سحبه فوراً، مما يجعلها عملية نظيفة وصديقة للبيئة المحيطة (بدون غبار).",
    },
    {
      q: "ما هي أكبر وأصغر أقطار فتحات الكور التي تنفذونها؟",
      a: "نمتلك أسطوانات وبنط ماسية تبدأ من أقطار صغيرة جداً تناسب تمديدات المياه البسيطة (بوصة واحدة)، وتصل إلى أقطار ضخمة تتجاوز 14 بوصة لتمرير دكتات التكييف والمداخن الصناعية الكبيرة.",
    },
    {
      q: "كيف يمكنني حجز موعد لتنفيذ العمل؟",
      a: "يمكنك التواصل معنا فوراً عبر زر الاتصال المباشر أو عبر الواتساب أسفل الصفحة. سيقوم فريقنا بالرد عليك، تحديد التكلفة المبدئية، وإرسال فني متخصص لمعاينة الموقع والبدء في التنفيذ في أسرع وقت.",
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
    name: "صنايعي كور في مصر لعمل فتحات الخرسانة بدقة",
    serviceType: "Concrete core drilling",
    provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_INT, url: DOMAIN },
    areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "الشيخ زايد", "6 أكتوبر", "العاصمة الإدارية", "القليوبية"],
    url: CANONICAL,
    description: "أفضل مقاول لتنفيذ فتحات كور في الخرسانة وتخريم السقف والكمر. نستخدم أحدث ماكينة كور تخريم الخرسانة لتمرير الغاز والسباكة بأفضل اسعار فتحات الكور في مصر بدون تكسير.",
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

  return (
    <main className="bg-slate-50" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jsonLdLocalBusiness,
            jsonLdService,
            jsonLdFaq,
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
                مقاول فتحات كور في مصر: دليلك الشامل لقص وتخريم الخرسانة بأحدث التقنيات
              </h1>

              <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
                <p>
                  إذا كنت تبحث عن الأمان المعماري والسرعة القصوى في تجهيز منزلك أو مشروعك التجاري، فإن الاعتماد على أدوات التكسير التقليدية أصبح من الماضي. نحن نقدم لك خدمات <strong>عمل فتحات كور</strong> احترافية باستخدام أحدث التقنيات لضمان سلامة الهيكل الإنشائي تماماً. بفضل وجود <strong>صنايعي كور</strong> محترف وذو خبرة طويلة في التعامل مع أصعب المشاريع، نضمن لك تنفيذ كافة المهام المطلوبة دون أي اهتزازات قد تضر بأساسات المبنى.
                </p>
                <p>
                  سواء كنت تحتاج إلى <strong>عمل فتحات في الخرسانة</strong> لتمرير مواسير السباكة، أو تجهيز مسارات التكييف المركزي، أو حتى <strong>تخريم الخرسانة المسلحة</strong> لعمل تعديلات معمارية كبرى، فإننا نعتبر من رواد <strong>شركات تخريم الخرسانة بالكور</strong> في مصر. كأفضل <strong>مقاول فتحات كور</strong>، نضع بين يديك خبرتنا ومعداتنا لتنفيذ <strong>فتحات كور خرسانة</strong> بأعلى دقة، أسرع وقت، وبأقل نسبة هدر.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={WHATSAPP}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-10 py-5 font-black text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition transform hover:-translate-y-1 text-xl"
                >
                  <Phone className="h-6 w-6" />
                  اتصل بنا الآن
                </Link>
              </div>
            </div>

            <div className="rounded-[48px] border-4 border-white bg-white shadow-2xl overflow-hidden p-3 relative">
              <div 
                data-lightbox-src={IMG_HERO.src}
                className="relative aspect-square rounded-[40px] overflow-hidden bg-slate-100 shadow-inner group w-full cursor-pointer"
              >
                <Image src={IMG_HERO} alt="تخريم الخرسانة بالكور - Core Pro Egypt" fill priority className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                   <Maximize className="h-10 w-10" />
                </div>
              </div>
              <div className="p-4 grid grid-cols-3 gap-3">
                {[IMG_1, IMG_2, IMG_3].map((img, i) => (
                  <div 
                    key={i} 
                    data-lightbox-src={img.src}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm group cursor-pointer"
                  >
                    <Image src={img} alt={`أعمال تخريم خرسانة بالكور ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                       <Plus className="h-6 w-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CONTENT */}
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            
            <Section
              id="what-is-core"
              title="ما هي تقنية عمل فتحات كور في الخرسانة؟ (Core Drilling)"
            >
              <p>
                تقنية الكور هي الحل الهندسي الأمثل لعمل فجوات أسطوانية منتظمة في مختلف الأسطح الإنشائية. نعتمد في عملنا على <strong>جهاز تخريم الخرسانه</strong> المتطور، والذي يضمن الحصول على <strong>فتحات الكور</strong> بمقاسات دقيقة بالملليمتر، مطابقة تماماً لمخططات المهندسين.
              </p>
            </Section>

            <Section
              id="importance"
              title="أهمية استخدام ماكينة كور تخريم الخرسانة"
            >
              <p>
                السر الحقيقي وراء جودة التنفيذ ونظافة الفتحة يكمن في استخدام <strong>ماكينة كور تخريم الخرسانة</strong> الحديثة. هذه الماكينات، والمعروفة مهنياً باسم <strong>ماكينة الكور</strong>، مزودة برؤوس أسطوانية مطلية بحبيبات الألماس الصناعي القادرة على اختراق أصلب أنواع الخرسانات كثيفة التسليح. تضمن لك أي <strong>ماكينة تخريم خرسانة</strong> نستخدمها الحصول على <strong>فتحة الكور</strong> ناعمة تماماً من الداخل، مما يمنع احتكاك الكابلات أو المواسير عند تمريرها لاحقاً.
              </p>
            </Section>

            <Section
              id="comparison"
              title="الفرق بين عمل فتحات بالكور والتكسير التقليدي (الهيلتي)"
            >
              <p>
                التكسير باستخدام آلات الدق الميكانيكية يولد اهتزازات عنيفة تؤدي إلى شروخ مجهرية (Micro-cracks) تضعف المبنى بمرور الوقت وتسبب تساقط المحارة. في المقابل، <strong>عمل فتحات بالكور</strong> يعتمد على القطع الدائري السلس. إن استخدام <strong>ماكينة كور ثقب الخرسانة</strong> يقوم بقص الحديد والأسمنت بحركة دائرية هادئة. نحن نضمن لك <strong>ثقب كور</strong> نظيفاً تماماً، وتقنيات <strong>تفتيح كور</strong> لدينا تجعل عملية <strong>تفتيح الخرسانة</strong> آمنة كلياً، لأن <strong>كور تفتيح الخرسانه</strong> يعزل منطقة القطع جراحياً ولا يؤثر على الجدران المحيطة.
              </p>
            </Section>

            <Section
              id="services-list"
              title="خدماتنا الشاملة في تخريم الخرسانة وتأسيس المرافق"
              subtitle="تأسيس المرافق يتطلب دقة متناهية لتجنب أي أخطاء مكلفة. نحن نوفر قائمة شاملة من خدمات تخريم الخرسانة التي تغطي كافة احتياجات المقاولات."
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">1. عمل فتحات الغاز والسباكة الدقيقة</h3>
                  <p>
                    من أكثر الطلبات التي ننفذها يومياً هي تجهيز المطابخ والحمامات. نحن متخصصون في <strong>عمل فتحات الغاز</strong> المطابقة لاشتراطات الأمن والسلامة وشركات الغاز الطبيعي، حيث تتطلب هذه المواسير أقطاراً محددة ومسارات مستقيمة تماماً. تنفيذ <strong>عمل فتحات كور</strong> هنا يعطي شكل الدائرة المثالي ويسهل على فنيين التركيب إتمام عملهم بسرعة فائقة.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">2. عمل فتحة مدخنة السخان وتمديدات التكييف والتهوية</h3>
                  <p>
                    سلامة عائلتك هي الأهم، ولذلك نقوم بـ <strong>عمل فتحة مدخنة السخان</strong> بقطر وميل مضبوطين لضمان طرد العادم للخارج بكفاءة وتجنب أي تسريب للاختناق. كما نقوم بتجهيز <strong>فتحات خرسانة</strong> لتمديدات التكييف الاسبليت والمركزي (HVAC)، ومسارات الشفاطات المركزية بأناقة واحترافية لا تشوه الواجهة الخارجية.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">3. فتح كور في الكمر وتخريم السقف بأمان</h3>
                  <p>
                    التعديلات الإنشائية المتأخرة تتطلب حذراً شديداً من فريق التنفيذ. عند الحاجة إلى <strong>تخريم السقف</strong> لتمرير الصرف الصحي أو صرف التكييف، نمتلك الحل السحري؛ حيث يمكننا <strong>فتح كور في الكمر</strong> الخرساني بقطر محسوب بدقة دون إحداث ضرر بأسياخ حديد التسليح الرئيسي المكون للكمرة.
                  </p>
                  <p className="mt-2">
                    ومن ضمن الخدمات المعقدة التي ننفذها باحتراف هي <strong>عمل فتحة في سقف خرساني قائم</strong>، سواء لتمرير مصعد صغير، أو <strong>عمل فتحة في السقف لعمل سلم</strong> داخلي (دوبلكس)، وكل ذلك يتم بنظافة تامة وهدوء يضمن راحة السكان المجاورة.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="walls-materials"
              title="تخريم الجدار والمواد الحساسة (بدون هدر للتشطيبات)"
              subtitle="لا يقتصر عملنا على مرحلة العظم، بل يمتد ليشمل الأماكن المشطبة والفيلات المسكونة."
            >
              <div className="space-y-8">
                <div id="marble-ceramic" className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                  <h4 className="text-xl font-black text-slate-900 mb-2">تخريم السيراميك والرخام (تخريم جراحي بدون شروخ)</h4>
                  <p>
                    التحدي الأكبر هو التعامل مع الأسطح الهشة والزجاجية. إذا كنت تبحث عن <strong>طريقة تخريم الرخام</strong> الصحيحة، فنحن نعتمد على التبريد المائي والسرعات البطيئة التدريجية لعمل <strong>تخريم الرخام</strong> و <strong>عمل فتحة في الرخام</strong> لأحواض المطابخ أو تمرير الفلاتر بمنتهى الانسيابية.
                  </p>
                  <p className="mt-2">
                    أما للحمامات، فنستخدم <strong>بنط تخريم السيراميك</strong> و البورسلين الماسية التي تضمن <strong>تخريم السيراميك</strong> دون إحداث أي شرخ أو تنقير في البلاطة المحيطة.
                  </p>
                </div>

                <div id="gypsum">
                  <h4 className="text-xl font-black text-slate-900 mb-2">عمل فتحات في الجبس والجدران الجاهزة</h4>
                  <p>
                    عند الرغبة في إضافة إضاءة مخفية (سبوت لايت) أو فتحات تهوية، يبرز دورنا في <strong>عمل فتحات في الجدار</strong> دون إتلاف الدهانات أو ورق الحائط. كما نتعامل بحذر شديد عند <strong>عمل فتحات في الجبس</strong> بورد لضمان عدم تشقق الألواح، لنعطيك <strong>عمل فتحة في الجدار</strong> جاهزة مباشرة للتركيب النهائي. نحن نغطي كافة احتياجاتك من <strong>عمل فتحات</strong> هندسية سريعة.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="process"
              title="مراحل وخطوات التنفيذ: من المعاينة إلى التسليم النظيف"
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white text-sm">1</div>
                  <p><strong>المعاينة وتحديد المسار:</strong> يبدأ العمل بمعاينة الموقع وتحديد أماكن حديد التسليح (إن لزم الأمر) لتجنب الأعصاب الرئيسية. يتم تعليم محيط <strong>فتحة كور</strong> بدقة ليزرية.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white text-sm">2</div>
                  <p><strong>التثبيت المحكم للماكينة:</strong> يتم تثبيت قاعدة <strong>دريل كور</strong> في الجدار باستخدام أنظمة تفريغ هوائي أو مسامير تثبيت (Anchors) لمنع أي ارتجاج لـ <strong>كور دريل</strong> أثناء العمل.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white text-sm">3</div>
                  <p><strong>القص الدائري والتبريد المائي:</strong> تبدأ <strong>ماكينة الكور ماشين</strong> بالدوران مع ضخ مستمر للمياه. هذا التبريد يمنع احتراق الأسنان ويقضي تماماً على الغبار. بفضل الـ <strong>كور ماشين</strong>، نحصل على <strong>فتحات خرسانة كور</strong> خالية من العيوب، وتُعتبر <strong>فتحات كور ماشين</strong> الخاصة بنا الأفضل جودة.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white text-sm">4</div>
                  <p><strong>استخراج العينة الخرسانية:</strong> نستخدم <strong>ماكينة حفر كور</strong> قوية قادرة على استخراج الأسطوانة الخرسانية بقطعة واحدة نظيفة. عمليات <strong>كور حفر</strong> المتتالية لدينا مبرمجة، ونستطيع إنجاز مئات الـ <strong>حفر كور</strong> في المشروعات الكبرى يومياً. وفي النهاية، نسحب المياه المتخلفة لنسلمك الموقع جافاً ونظيفاً.</p>
                </div>
              </div>
            </Section>

            <Section
              id="pricing"
              title="دليلك الشامل لـ اسعار فتحات الكور في مصر"
              subtitle="نحن نؤمن بالشفافية التامة في تسعير خدمات المقاولات. اسعار فتحات الكور تتفاوت بناءً على عوامل هندسية ولوجستية."
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">كيف يتم حساب سعر فتحة الكور؟</h3>
                  <p className="mb-4">يتم تحديد <strong>سعر فتحات الكور</strong> أو <strong>سعر فتحة الكور</strong> الواحد بناءً على:</p>
                  <ul className="list-disc pr-6 space-y-2 text-sm italic">
                    <li><strong>قطر الفتحة:</strong> تختلف تكلفة <strong>فتحات خرسانة</strong> صغيرة الحجم عن أقطار الـ 10 و 14 بوصة المخصصة للتهوية والمصاعد.</li>
                    <li><strong>طبيعة الخرسانة:</strong> التخريم في الطوب وال بلوك يختلف عن <strong>تخريم كور</strong> في الخرسانة المسلحة ذات الإجهاد العالي.</li>
                    <li><strong>حجم المشروع:</strong> ينخفض السعر بشكل ملحوظ عند التعاقد على عدد كبير من العمليات في المشروعات التجارية والكمبوندات.</li>
                  </ul>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl">
                  <h3 className="text-xl font-black text-emerald-400 mb-4">أسعار ماكينة كور تخريم الخرسانة (الخدمة مقابل الشراء)</h3>
                  <p className="text-slate-300">
                    يتساءل بعض المقاولين عن <strong>أسعار ماكينة كور تخريم الخرسانة</strong> بغرض شرائها. الحقيقة أن <strong>اسعار ماكينة كور تخريم الخرسانة</strong> الاحترافية تعتبر استثماراً مكلفاً يحتاج لصيانة دورية.
                  </p>
                  <p className="mt-4 text-slate-300">
                    يختلف <strong>سعر ماكينة كور دريل</strong> (أو <strong>سعر جهاز كور دريل</strong>) حسب قوة الموتور وبلد المنشأ. تبدأ <strong>أسعار ماكينة كور دريل</strong> من أرقام متوسطة للأنواع الصينية وتصل لمبالغ ضخمة للماركات الأوروبية الثقيلة.
                  </p>
                  <p className="mt-4 font-bold text-emerald-300">
                    لذلك، طلب الخدمة منا كجهة مختصة تمتلك <strong>ماكينة الكور</strong>، يوفر عليك آلاف الجنيهات وتكاليف الصيانة ورواتب الفنيين.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="faq"
              title="الأسئلة الشائعة (FAQ) حول قص الخرسانة بالكور"
            >
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-emerald-300 transition">
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-emerald-600 group-open:rotate-180 transition p-1 bg-emerald-50 rounded-full">⌄</span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-8 text-sm bg-slate-50 p-6 rounded-2xl border-r-4 border-emerald-500 shadow-inner">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="p-8 rounded-[40px] bg-white border border-black/10 shadow-lg">
               <h3 className="font-extrabold text-2xl text-slate-900 mb-4">نحـن خيـارك الأول</h3>
               <p className="text-slate-600 text-sm leading-7 mb-6">
                  نوفر لك <strong>أفضل اسعار فتحات الكور</strong> وأسرع <strong>صنايعي كور</strong> في مصر مع التزام تام بالمواعيد والجودة الهندسية.
               </p>
               <div className="space-y-4">
                  <StatPill icon={<CheckCircle2 className="h-4 w-4 text-emerald-600" />} text="أمان إنشائي تام" />
                  <StatPill icon={<Zap className="h-4 w-4 text-emerald-600" />} text="بدون غبار أو تراب" />
                  <StatPill icon={<MapPin className="h-4 w-4 text-emerald-600" />} text="تغطية كافة المحافظات" />
               </div>
            </div>

            <div className="p-8 rounded-[40px] bg-emerald-600 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
               <h3 className="font-black text-2xl mb-4">اطلب صنايعي كور</h3>
               <p className="text-emerald-100 text-sm mb-6 leading-7">سيقوم فريقنا بالرد عليك فوراً وتحديد التكلفة المبدئية وإرسال فني متخصص.</p>
               <Link
                href={WHATSAPP}
                className="block w-full text-center py-5 rounded-3xl bg-white text-emerald-900 font-black text-xl hover:scale-[1.02] transition shadow-lg"
              >
                تواصل واتسـاب
              </Link>
            </div>


          </aside>
        </div>
      </div>
    </main>
  );
}
