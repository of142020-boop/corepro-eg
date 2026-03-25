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
  Zap,
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
      a: "يعتمد حساب اسعار قص الخرسانة على عدة عوامل هندسية مثل سمك الحائط الخرساني وكثافة حديد التسليح في قص الخرسانة المسلحة، بالإضافة لطول القطع بالمتر. نحن نوفر أفضل سعر منشار تقطيع الخرسانة في السوق المصري مع تقديم حلول اقتصادية للمساحات الكبيرة.",
    },
    {
      q: "هل توفرون خدمة قص جدار بالمنشار لفتح أبواب وشبابيك في الشقق المسكونة؟",
      a: "نعم وبكل تأكيد. قص جدار بالمنشار يعتمد على تبريد مائي يمنع خروج الغبار تماماً، مما يجعله الحل المثالي للشقق والفيلات المسكونة. يقوم معلم قص جدار بتحديد الفتحة بدقة واستخدام ماكينة قص الخرسانة لضمان تسليم نظيف وبدون أي إزعاج للجيران.",
    },
    {
      q: "ما هي مميزات قص الخرسانة بالليزر وما الفرق بينها وبين التكسير؟",
      a: "قص الخرسانة بالليزر (وهو الاسم الشائع لاستخدام منشار السكة الماسي) يتميز بحواف ناعمة جداً واستقامة تامة، على عكس تكسير الجدار بالصاروخ اليدوي أو الهيلتي الذي يترك حوافاً متكسرة وشروخاً قد تؤثر على سلامة السقف.",
    },
    {
      q: "هل يمكنكم تنفيذ قص خرسانة السقف لعمل فتحة أسانسير؟",
      a: "نعم، نحن مقاول قص خرسانة متخصص في فتحات المصاعد والسلالم. نقوم بـ قص خرسانة السقف باستخدام ماكينة تقطيع الخرسانة المسلحة وتأمين البلوك قبل الفصل النهائي لضمان السلامة الكاملة للموقع وللعاملين.",
    },
    {
      q: "هل الصاروخ كافٍ لقص الجدار؟ ومتى نحتاج صاروخ قص الجدران للبيع؟",
      a: "صاروخ قص الخرسانة اليدوي مناسب فقط للفتحات البسيطة والزوايا، أما للأعمال الثقيلة فـ قص الخرسانة بالمنشار هو الأفضل. كما نوفر معلومات حول صاروخ قص الجدران للبيع للشركات والمقاولين الراغبين في امتلاك معداتهم الخاصة.",
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
    areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "الشيخ زايد", "6 أكتوبر", "العاصمة الإدارية", "القليوبية"],
    url: CANONICAL,
    description: "أضخم محتوى تفصيلي حول قص الخرسانة بالمنشار وتقطيع خرسانة ليزر لفتح أبواب وشبابيك، قص خرسانة السقف، قص جدار بالمنشار، وقص الخرسانة المسلحة بدقة الليزر وبدون شروخ.",
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
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-800 shadow-sm">
                <Sparkles className="h-4 w-4 text-sky-600" />
                <span>قص مستقيم 100% · حواف ناعمة · بدون دقدقة</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-sky-600 pr-4">
                قص الخرسانة بالمنشار: تقنية تقطيع الخرسانة ليزر وبديهية الأمان الإنشائي
              </h1>

              <p className="mt-5 text-slate-800 leading-9 text-lg font-medium">
                وداعاً لمشاكل الشروخ والاهتزازات! نحن في <strong>{BRAND}</strong> نوفر لك أقوى خدمات <strong>قص خرسانة</strong> في مصر باستخدام تكنولوجيا <strong>منشار قص الخرسانة</strong> المثبت. سواء كنت تبحث عن <strong>قص خرسانة ليزر</strong> لفتح باب أو شق جدار، نحن نضمن لك نتيجة هندسية دقيقة تحافظ على قيمة منشأتك تماماً.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <StatPill icon={<Scissors className="h-4 w-4 text-sky-600" />} text="قص خرسانة ليزر" />
                <StatPill icon={<Zap className="h-4 w-4 text-amber-600" />} text="أسرع ماكينة قص خرسانة" />
                <StatPill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="مقاول قص خرسانة معتمد" />
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={WHATSAPP}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-600 px-10 py-5 font-black text-white shadow-[0_20px_40px_rgba(59,130,246,0.3)] hover:bg-sky-700 transition transform hover:-translate-y-1 text-xl"
                >
                  <Phone className="h-6 w-6" />
                  اطلب معلم قص جدار
                </Link>
                <Link
                  href="#tech"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white border-2 border-slate-200 px-10 py-5 font-black text-slate-900 shadow-sm hover:bg-slate-50 transition text-xl"
                >
                  التفاصيل الفنية
                </Link>
              </div>
            </div>

            <div className="group rounded-[48px] border-4 border-white bg-white shadow-2xl overflow-hidden p-3 relative">
              <div className="relative aspect-square rounded-[40px] overflow-hidden bg-slate-100 shadow-inner">
                <Image src={IMG_HERO} alt="قص خرسانة ليزر - منشار السكة الماسي Core Pro Professional" fill priority className="object-cover group-hover:scale-110 transition duration-1000" />
              </div>
              <div className="p-4 grid grid-cols-3 gap-3">
                {[IMG_1, IMG_2, IMG_3].map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm">
                    <Image src={img} alt={`أعمال قص وتقطيع خرسانة حديثة ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP CONTENT SECTIONS */}
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* MAIN CONTENT COLUMN */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Detailed Overview */}
            <Section
              id="sawing-tech"
              title="ثورة تقطيع الخرسانة بالمنشار في مصر"
              subtitle="قص الجدران والأسقف بدقة متناهية وبدون أضرار جانبية"
              icon={<Maximize2 className="h-6 w-6 text-sky-700" />}
            >
              <div className="prose prose-slate max-w-none text-slate-700 leading-9">
                <p className="text-lg">
                  في الماضي، كان <strong>تكسير الجدار بالصاروخ</strong> اليدوي يسبب فوضى عارمة وشروخاً قد تمتد لأمتار بعيدة عن مكان الفتحة. اليوم، نحن نستخدم <strong>ماكينة تقطيع الخرسانة</strong> المتطورة التي تعمل بنظام "السكة" (Track Saw)، حيث يتم تثبيت المسار على الحائط تماماً لضمان <strong>قص جدار بالمنشار</strong> بخط مستقيم تماماً كالليزر.
                </p>
                <p>
                  هذه التقنية، المعروفة تجارياً باسم <strong>قص الخرسانة بالليزر</strong>، تسمح لنا بتنفيذ <strong>تقطيع الخرسانة</strong> المسلحة والكمرات بدقة هائلة. بفضل رؤوس القطع الماسية، يمكننا <strong>قص خرسانات</strong> تصل سماكتها لأكثر من 50 سم في سحبة واحدة، مما يوفر الوقت ويمنع الحاجة لترميم الحواف لاحقاً.
                </p>
                <div className="bg-sky-50 p-8 rounded-[40px] border border-sky-100 shadow-inner mt-8">
                   <h4 className="font-black text-sky-900 text-xl mb-4">لماذا يفضل المقاولون قص جدران المحترفين؟</h4>
                   <ul className="grid gap-4 md:grid-cols-2">
                      <li className="flex items-start gap-2">
                         <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-1" />
                         <span className="text-sm font-bold">توفير 40% من تكاليف المحارة والدهانات</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-1" />
                         <span className="text-sm font-bold">سرعة التنفيذ (فتحة باب كاملة في ساعة واحدة)</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-1" />
                         <span className="text-sm font-bold">الحفاظ على العمر الافتراضي للمبنى</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-1" />
                         <span className="text-sm font-bold">عمليات <strong>قص خرسانة السقف</strong> الآمنة</span>
                      </li>
                   </ul>
                </div>
              </div>
            </Section>

            {/* Methods and Applications */}
            <Section
              id="applications"
              title="أنواع وتطبيقات معدات قص الخرسانة"
              subtitle="من الفتحات المنزلية إلى قص الجسور والمنشآت العملاقة"
              icon={<Wrench className="h-6 w-6 text-sky-700" />}
            >
              <div className="space-y-8 text-slate-700 leading-9">
                <p>
                  بصفتنا <strong>شركة قص خرسانة</strong> رائدة، نوفر حلولاً مخصصة لكل حالة موقع:
                </p>

                <div className="space-y-8">
                  {/* Wall Sawing */}
                  <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 border-b-2 border-sky-400 pb-2">1) قص جدار بالمنشار (Wall Sawing)</h3>
                    <p className="text-sm leading-8">
                       هذه الخدمة أساسية لفتح الأبواب والشبابيك الجديدة. يتم استدعاء <strong>معلم قص جدار</strong> ليقوم بتثبيت <strong>منشار تقطيع الخرسانة</strong> على الجدار باستخدام "جوايط" صلبة، ثم يتم القطع بالتبريد المائي. هذه الطريقة تمنع حدوث أي ميل في <strong>قص جدران</strong> وتجعل الفتحة جاهزة لتركيب الحلوق الخشبية أو الألومنيوم مباشرة.
                    </p>
                  </div>

                  {/* Slab/Floor Sawing */}
                  <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 border-b-2 border-emerald-400 pb-2">2) قص خرسانة السقف والأرضيات</h3>
                    <p className="text-sm leading-8">
                       تستخدم هذه التقنية في <strong>تقطيع الخرسانة بالمنشار</strong> لعمل فتحات المصاعد أو السلالم الداخلية. يتم تشغيل <strong>ماكينة تقطيع الخرسانة</strong> على الأرضية لعمل فواصل تمدد أو إزالة بلوكات خرسانية كاملة من السقف. نستخدم <strong>ماكينة قطع الخرسانة</strong> بمحركات ذات قدرة حصانية عالية لضمان السرعة والدقة.
                    </p>
                  </div>

                  {/* Handheld & Specialized */}
                  <div className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 border-b-2 border-amber-400 pb-2">3) قص الخرسانة بالصاروخ (Handheld Sawing)</h3>
                    <p className="text-sm leading-8">
                       في الزوايا المحصورة أو الفتحات الصغيرة، يتم استخدام <strong>صاروخ قص الخرسانة</strong> و<strong>صاروخ قص الجدران</strong>. نحن نوفر أفضل <strong>صاروخ لقص الجدران</strong> مزود بمدخل مياه لمنع الغبار. كما ننصح العملاء بعدم <strong>تكسير الجدار بالصاروخ</strong> اليدوي بدون تأمين إنشائي كافٍ.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Technical Excellence */}
            <Section
              id="tech-specs"
              title="المواصفات الفنية لـ ماكينة قص الخرسانة المسلحة مصر"
              subtitle="أقراص ماسية تخترق أصلب أنواع الحديد والخرسانة"
              icon={<Settings className="h-6 w-6 text-slate-800" />}
            >
              <div className="space-y-6 text-slate-700 leading-9">
                <p>
                  في <strong>شركات تقطيع خرسانة</strong> المحترفة، نهتم بنوعية الأقراص (Blades). <strong>ماكينة قص الخرسانة المسلحة</strong> لدينا قادرة على قطع حديد بقطر 22 ملم وأكثر دون أدنى صعوبة.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="p-6 bg-slate-100 rounded-3xl border border-slate-200">
                      <h5 className="font-black text-slate-900 mb-2">الدقة المتناهية</h5>
                      <p className="text-xs">توجيه السكة يضمن خطأً صفرياً في الاستقامة، مما يجعل النتيجة <strong>قص الجدار بالليزر</strong> حرفياً.</p>
                   </div>
                   <div className="p-6 bg-slate-100 rounded-3xl border border-slate-200">
                      <h5 className="font-black text-slate-900 mb-2">الأمان الهيدروليكي</h5>
                      <p className="text-xs">نستخدم رؤوس قص بمحركات عالية الجودة تمنع توقف <strong>منشار تقطيع خرسانة</strong> المفاجئ داخل العمق.</p>
                   </div>
                </div>
                <p className="text-sm border-r-4 border-sky-600 pr-4 italic bg-sky-50 py-4 rounded-l-2xl">
                   كثير من العملاء يبحثون عن <strong>صاروخ قص جدران</strong> بسيط، لكننا ننصح دائماً باستخدام <strong>منشار قص الخرسانة</strong> المثبت للحصول على أفضل جودة وأمان لأساسات المنزل.
                </p>
              </div>
            </Section>

            {/* Pricing and Strategy */}
            <Section
              id="pricing-strategy"
              title="دراسة اسعار قص الخرسانة للعام الجديد"
              subtitle="القيمة مقابل السعر في تنفيذ شركات تقطيع الخرسانة"
              icon={<Building2 className="h-6 w-6 text-sky-700" />}
            >
              <div className="space-y-6 text-slate-700 leading-9">
                <p>
                  قد تبدو <strong>اسعار قص الخرسانة</strong> بالمنشار أعلى قليلاً من التكسير العادي، ولكن عند حساب التكلفة النهائية ستكتشف العكس. التكسير يتطلب: عمال تكسير + نقل مخلفات ضخم + محارة مكثفة + معالجة شروخ. أما <strong>تقطيع الخرسانة</strong> بالمنشار فيوفر كل ذلك.
                </p>
                <p>
                   نحن كأفضل <strong>مقاول قص خرسانة</strong>، نوفر لكم تسعيرة شفافة تعتمد على المتر الطولي، مع توضيح <strong>سعر منشار تقطيع الخرسانة</strong> وتكلفة الاستهلاك بشكل كامل لمن يرغب في عقود المشاريع الطويلة.
                </p>
              </div>
            </Section>

            {/* FAQ Area */}
            <Section
              id="faq"
              title="الأسئلة المتكررة لعملاء Core Pro"
              subtitle="إجابات تفصيلية من واقع خبرتنا الميدانية في مصر"
              icon={<HelpCircle className="h-6 w-6 text-sky-700" />}
            >
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <details key={i} className="group rounded-[32px] border-2 border-black/5 bg-white p-7 shadow-sm hover:border-sky-300 transition-all duration-300">
                    <summary className="cursor-pointer list-none font-black text-slate-900 flex items-center justify-between text-lg">
                      <span>{item.q}</span>
                      <span className="text-sky-600 group-open:rotate-180 transition p-2 bg-sky-50 rounded-full">⌄</span>
                    </summary>
                    <div className="mt-6 text-slate-700 leading-9 text-sm bg-slate-50 p-8 rounded-[32px] border-r-8 border-sky-500 shadow-inner">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </Section>
          </div>

          {/* SIDEBAR - AUTHORITY & TRUST */}
          <aside className="space-y-8">
            <div className="p-8 rounded-[48px] bg-white border border-black/10 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-sky-600/20 transition" />
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-sky-100 rounded-2xl">
                   <HardHat className="h-8 w-8 text-sky-800" />
                </div>
                <h3 className="font-black text-2xl text-slate-900">خبرة ميدانية</h3>
              </div>
              <p className="text-slate-700 mb-6 text-sm leading-7">
                بصفتنا <strong>شركة قص خرسانة</strong> ذات باع طويل، نفذنا أكبر العمليات في:
              </p>
              <ul className="space-y-4">
                 {[
                   "العاصمة الإدارية الجديدة (أبراج)",
                   "التجمع الخامس والرحاب ومدينتي",
                   "الشيخ زايد و6 أكتوبر",
                   "مشاريع الطرق والجسور الكبرى"
                 ].map((loc, i) => (
                    <li key={i} className="flex gap-3 items-center p-4 rounded-2xl bg-sky-50 border border-sky-100 text-sm font-black text-slate-800">
                       <MapPin className="h-5 w-5 text-sky-600 shrink-0" />
                       {loc}
                    </li>
                 ))}
              </ul>
            </div>

            <div className="p-8 rounded-[48px] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
               <h3 className="font-black text-2xl mb-4 text-sky-400">احجز معاينتك</h3>
               <p className="text-slate-400 text-sm mb-6 leading-7">تواصل مع <strong>مقاول قص خرسانة</strong> متخصص لمعرفة أنسب الحلول واختيار <strong>ماكينة تقطيع الخرسانة</strong> المناسبة لموقعك.</p>
               <Link
                 href={WHATSAPP}
                 className="block w-full text-center py-5 rounded-2xl bg-sky-600 text-white font-black text-xl hover:bg-sky-700 transition shadow-[0_15px_35px_rgba(59,130,246,0.4)] transform hover:scale-[1.03]"
               >
                 واتسـاب (فوري)
               </Link>
            </div>

            <Section
              title="دليل خدمات القص والتقطيع"
              icon={<Search className="h-5 w-5 text-sky-700" />}
              children={
                <div className="flex flex-wrap gap-2 mt-2">
                  {keywords.map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center rounded-lg border border-black/5 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-600 hover:text-sky-700 hover:border-sky-200 transition"
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
