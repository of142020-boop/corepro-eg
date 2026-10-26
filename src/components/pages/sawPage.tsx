import React from 'react';
import ServiceContents from '../ServiceContents';

const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
 const actualSrc = typeof src === "object" ? src.src : src;
 const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
 const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
 const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
 return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} fetchPriority={fetchpriority} />;
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
 X,
 Plus,
 Maximize,
} from "lucide-react";

const BRAND = "كور برو - Core Pro";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/saw`;
const PHONE = "01021507462";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201021507462";
const ADDRESS_TEXT = "الحي العاشر مدينة نصـر";

const SERVICE_NAME = "قص وتقطيع الخرسانة بالمنشار";

const IMG_HERO = { src: "/images/saw/mokawel-kas-kharsana.webp", width: 800, height: 800 };
const IMG_1 = { src: "/images/saw/kas-kharsana-menshar-1.webp", width: 800, height: 800 };
const IMG_2 = { src: "/images/saw/kas-kharsana-menshar-2.webp", width: 800, height: 800 };
const IMG_3 = { src: "/images/saw/kas-kharsana-menshar-3.webp", width: 800, height: 800 };

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
 <div className="mb-6">
 
 <div>
 <HeadingTag className={`font-black tracking-tight text-slate-900 ${level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
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

function StatPill({ icon, text }: { icon?: React.ReactNode; text: string }) {
 return (
 <div className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm text-center">
 {icon}
 <span className="text-slate-700 font-extrabold">{text}</span>
 </div>
 );
}

export default function SawPage() {
 const faq = [
 {
  q: "هل يمكن قص الجدار في منزل مأهول؟",
  a: "قد يكون ذلك ممكناً بعد تقييم ظروف الموقع. يصدر عن القص صوت وينتج ماء تبريد ومخلفات؛ لذلك تُراجع مواعيد العمل وحماية الأثاث والتشطيبات واحتواء المياه، ويُحدد مدى ملاءمة التنفيذ بعد المعاينة.",
 },
 {
 q: "ما هو أقصى سمك يمكن لـ ماكينة قص الخرسانة التعامل معه؟",
  a: "يتوقف السمك الممكن على نوع المنشار والشفرة واتجاه القطع والتسليح وإمكانية تثبيت المعدة. أرسل سماكة العنصر وصورة الموقع لنراجع إمكانية التنفيذ ونحدد إن كان المنشار أو أسلوب آخر أنسب.",
 },
 {
  q: "هل قص الخرسانة بالمنشار يضمن عدم تضرر المبنى؟",
  a: "لا توجد طريقة تضمن انعدام المخاطر في كل موقع. قبل قص الخرسانة المسلحة، يجب مراجعة المخططات وتقييم العنصر وأخذ موافقة المهندس الإنشائي عند الحاجة، ثم تحديد تسلسل القطع والتدعيم ورفع الجزء المفصول. لا يُقطع عنصر إنشائي أو حديد تسليح دون توجيه هندسي.",
 },
 {
 q: "متى أستخدم صاروخ قص الجدران بدلاً من منشار السكة؟",
  a: "يُختار المنشار اليدوي للأعمال التي تلائم حجمه وإمكانية التحكم به، بينما يفيد منشار السكة في القطع المستقيم وفتحات الأبواب والنوافذ عندما تسمح مساحة العمل بالتثبيت. يختلف العمق الممكن بحسب المعدة والشفرة والمادة؛ نحدد الخيار بعد معرفة المقاسات والموقع.",
 },
 {
  q: "ما المعلومات اللازمة لتقدير تكلفة قص الخرسانة؟",
  a: "أرسل موقع المشروع وصورة أو مخططاً، ونوع العنصر (جدار أو سقف أو أرضية) وسماكته وأبعاد الجزء المراد فصله. اذكر أيضاً إمكانية الوصول وموعد العمل؛ تُراجع التفاصيل لتحديد الحاجة إلى معاينة وتقدير نطاق التكلفة.",
 },
  {
  q: "كم يستغرق قص فتحة في جدار أو سقف؟",
  a: "تعتمد المدة على أبعاد الفتحة وسماكة الخرسانة والتسليح وإمكانية تثبيت المنشار ومناولة الجزء المفصول. نوضح الزمن المتوقع بعد مراجعة الصور والمخططات أو معاينة الموقع.",
  },
 {
  q: "هل يمكن تنفيذ عدة فتحات أو أعمال لمشروع مقاولات؟",
  a: "يمكن مراجعة طلبات المشاريع متعددة الفتحات أو مراحل القطع. أرسل المخططات والكميات والسماكات وموقع العمل والجدول المطلوب لتقييم نطاق التنفيذ والمعدات والتنسيق اللازم.",
 },
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
 sameAs: [DOMAIN, WHATSAPP],
 };

 const jsonLdService = {
 "@context": "https://schema.org",
 "@type": "Service",
 name: "قص الخرسانة بالمنشار في مصر | تقطيع الخرسانة المسلحة بدقة",
 serviceType: "Concrete Sawing and Cutting",
 provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_INT, url: DOMAIN },
 areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "الشيخ زايد", "6 أكتوبر", "العاصمة الإدارية", "القليوبية"],
 url: CANONICAL,
 description: "خدمة قص الجدران والأسقف والأرضيات الخرسانية بالمنشار الماسي لفتح الأبواب والنوافذ وتنفيذ التعديلات بعد مراجعة المقاسات وظروف الموقع.",
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

 const jsonLdBreadcrumb = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "الرئيسية", item: DOMAIN },
 { "@type": "ListItem", position: 2, name: "قص الخرسانة بالمنشار", item: CANONICAL },
 ],
 };

 const jsonLdSpeakable = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 url: CANONICAL,
 speakable: {
 "@type": "SpeakableSpecification",
  cssSelector: ["#faq", "h1"],
 },
 };

  const jsonLdImageObjects = [
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": `${DOMAIN}/images/saw/hero.webp`,
      "name": "قص الخرسانة بالمنشار الماسي - كور برو",
      "description": "منشار ماسي مثبت على سكة لقص الخرسانة وفق المقاسات وظروف الموقع",
      "author": { "@type": "Organization", "name": BRAND, "url": DOMAIN },
      "copyrightHolder": { "@type": "Organization", "name": BRAND },
      "creditText": "كور برو - Core Pro",
      "acquireLicensePage": CANONICAL,
      "creator": { "@type": "Organization", "name": BRAND },
      "license": `${DOMAIN}/terms`,
      "copyrightNotice": `© 2026 ${BRAND}`,
      "representativeOfPage": true,
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": `${DOMAIN}/images/saw/kas-kharsana-menshar-1.webp`,
      "name": "منشار قص الخرسانة - عمل ميداني",
      "description": "منشار ماسي ضخم أثناء قص جدار خرساني مع التبريد المائي",
      "author": { "@type": "Organization", "name": BRAND, "url": DOMAIN },
      "copyrightHolder": { "@type": "Organization", "name": BRAND },
      "creditText": "كور برو - Core Pro",
      "acquireLicensePage": CANONICAL,
      "creator": { "@type": "Organization", "name": BRAND },
      "license": `${DOMAIN}/terms`,
      "copyrightNotice": `© 2026 ${BRAND}`,
      "representativeOfPage": false,
    }
  ];

 return (
 <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify([
 jsonLdLocalBusiness,
 jsonLdService,
 jsonLdFaq,
 jsonLdBreadcrumb,
 jsonLdSpeakable,
 ...jsonLdImageObjects,
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
 
  <span>قص بالمنشار الماسي · فتحات جدران وأسقف · معاينة حسب الموقع</span>
 </div>

 <h1 className="mt-4 text-2xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-sky-600 pr-4 break-words">
 قص الخرسانة بالمنشار الماسي وفتح الجدران والأسقف - 01021507462
 </h1>

 <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
 <p>
  ننفذ <strong>قص الخرسانة بالمنشار الماسي</strong> لفتح الأبواب والنوافذ وإجراء تعديلات محددة في الجدران والأسقف والأرضيات. يبدأ العمل بمراجعة الأبعاد والمادة ومكان القص وطريقة التعامل مع الجزء المفصول، مع إحالة التعديلات الإنشائية للمهندس المسؤول.
 </p>
 <p>
  يساعد المنشار الماسي على تنفيذ خط قطع محدد في الخرسانة، لكن جودة الحافة والوقت والتجهيزات تعتمد على سماكة العنصر والتسليح وإمكانية تثبيت المعدة. لفتح باب أو شباك أو فتحة في سقف، أرسل المقاس وصورة الموقع لمعرفة متطلبات التنفيذ قبل الحجز.
 </p>
 </div>

 <div className="mt-8 flex flex-wrap gap-4">
 <Link
 href={WHATSAPP}
 className="inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-600 px-6 py-4 md:px-10 md:py-5 font-black text-white shadow-[0_20px_40px_rgba(59,130,246,0.3)] hover:bg-sky-700 transition transform hover:-translate-y-1 text-lg md:text-xl"
 >
 <Phone className="h-6 w-6" />
 اطلب المعاينة الآن
 </Link>
 </div>
 </div>

 <div className="rounded-none border-4 border-white bg-white shadow-2xl overflow-hidden p-4 relative">
 <div
 data-lightbox-src={IMG_HERO.src}
 className="relative aspect-square rounded-none overflow-hidden bg-slate-100 shadow-inner group w-full cursor-pointer"
 >
 <Image src={IMG_HERO} alt="مقاول قص خرسانة مسلحة بالمنشار - كور برو" fill priority className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
 <Maximize className="h-10 w-10" />
 </div>
 </div>
 <div className="p-4 grid grid-cols-3 gap-3">
 {[IMG_1, IMG_2, IMG_3].map((img, i) => (
 <div
 key={i}
 data-lightbox-src={img.src}
 className="relative aspect-[4/3] rounded-none overflow-hidden border-2 border-slate-100 shadow-sm group cursor-pointer"
 >
 <Image src={img} alt={`تنفيذ أعمال قص خرسانة وتقطيع جدران بالمنشار بواسطة مقاول متخصص ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-none" />
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

 {/* COMPREHENSIVE CONTENT */}
 <div className="mx-auto max-w-6xl px-4 pb-24">
 <div className="grid gap-10 lg:grid-cols-3">
 <div className="lg:col-span-2 space-y-10 min-w-0">
 <ServiceContents items={[{ id: 'services-list', label: 'قص الجدران والأسقف وفتح الأبواب' }, { id: 'laser-tech', label: 'ما هو منشار السكة؟' }, { id: 'water-saw', label: 'المنشار اليدوي أم السكة؟' }, { id: 'pricing', label: 'تكلفة قص الخرسانة' }, { id: 'steps', label: 'خطوات العمل' }, { id: 'faq', label: 'الأسئلة الشائعة' }]} />

 <Section
 id="why-sawing"
  title="متى يكون قص الخرسانة بالمنشار مناسباً؟"
 >
 <p>
  ينتج عن منشار الخرسانة خط قطع محدد، بينما يناسب التكسير أعمالاً مختلفة؛ ويختلف مستوى الاهتزاز والضوضاء والمخلفات بحسب المعدة والمادة وطريقة العمل.
 </p>
 <p className="mt-4">
  يلائم <strong>قص الخرسانة بالمنشار</strong> فتحات الأبواب والنوافذ والقص المستقيم عندما تسمح أبعاد الموقع بتثبيت المعدة. يساعد التبريد المائي على خفض حرارة الشفرة والغبار، لكنه ينتج مياه ومخلفات تحتاج إلى احتواء وتنظيف، كما يبقى الصوت قائماً أثناء العمل. تُراجع حساسية المبنى والتشطيبات قبل اختيار الطريقة.
 </p>
 </Section>

 <Section
 id="laser-tech"
  title="منشار السكة لقص الجدران الخرسانية"
 >
 <p>
  يثبت <strong>منشار السكة</strong> (Track Saw) على مسار مستقيم بمحاذاة خط القطع، ثم تتحرك عليه شفرة ماسية لقص الجدار أو العنصر الخرساني. قد يستخدم بعض العملاء تعبير «قص بالليزر» لوصف استقامة الخط، لكن القطع يتم بمنشار ماسي وليس بشعاع ليزر.
 </p>

 <div className="mt-8 bg-sky-50 p-8 rounded-3xl border border-sky-100">
  <h3 className="text-xl font-black text-slate-900 mb-4">كيف يعمل منشار السكة؟</h3>
 <p className="text-sm">
  تثبت السكة بعد تحديد الأبعاد ومراجعة موضع الخدمات، وتتحرك عليها ماكينة القص للتحكم في اتجاه القطع. تساعد السكة على اتباع مسار محدد، لكن استواء الحافة ومقاس الفتحة النهائيين يتأثران بالتجهيز والمادة، وقد تحتاج الحواف إلى معالجة أو تشطيب قبل تركيب الباب أو الشباك.
 </p>
 </div>
 </Section>

 <Section
 id="services-list"
  title="خدمات قص الخرسانة: الجدران والأسقف وفتحات الأبواب"
  subtitle="تُحدد طريقة القص ونطاق العمل بحسب نوع العنصر وأبعاده وإمكانية تثبيت المعدات والوصول إلى الموقع."
 >
 <div className="space-y-10">
 <div>
 <h3 className="text-xl font-black text-slate-900 mb-4">1. قص الجدران لفتح أبواب وشبابيك</h3>
 <p>
  يمكن استخدام المنشار لعمل فتحة باب أو شباك أو تعديل أبعاد فتحة قائمة بعد التأكد من نوع الجدار وما خلفه. إزالة جدار أو جزء كبير منه تتطلب التحقق من دوره الإنشائي وتصميم طريقة رفع وتجزئة الجزء المفصول؛ لا يبدأ أي تعديل إنشائي قبل موافقة المهندس المسؤول.
 </p>
 <div className="mt-4 grid grid-cols-2 gap-3 not-prose">
   {[
      { t: 'فتح باب جديد في الجدار', d: 'تحديد الأبعاد والتأكد من نوع الجدار' },
      { t: 'فتح شباك أو توسعته', d: 'اختيار طريقة القص بحسب الموقع' },
      { t: 'إزالة جزء من جدار', d: 'تقييم إنشائي وخطة لمناولة الجزء' },
      { t: 'قص الجدار أو الخرسانة', d: 'اختيار الشفرة والمعدة الملائمتين' },
   ].map(x => (
     <div key={x.t} className="rounded-xl border border-sky-100 bg-sky-50 p-3">
       <div className="font-black text-slate-900 text-xs mb-1">{x.t}</div>
       <p className="text-slate-500 text-xs">{x.d}</p>
     </div>
   ))}
 </div>
 </div>

 <div>
 <h3 className="text-xl font-black text-slate-900 mb-4">2. قص خرسانة السقف (دوبلكس، سلالم، مصاعد)</h3>
 <p>
  فتحات السلالم أو المصاعد في البلاطات تتطلب مراجعة المخططات وموافقة المهندس الإنشائي وخطة لتدعيم الجزء المقطوع ورفعه. بعد ذلك يُختار منشار البلاطات أو أسلوب آخر وفق سماكة العنصر والتسليح وإمكانية الوصول. تُحدد التجزئة ومعدات الرفع قبل بدء القطع.
 </p>
 <p className="mt-2">
    ينتج عن قص البلاطة صوت ومياه تبريد ومخلفات، وقد يلزم تدعيم أو رفع القطع على مراحل. تتحدد مدة التنفيذ وتجهيزات حماية الطابق السفلي بعد مراجعة المخططات والموقع.
 </p>
 </div>

 <div>
 <h3 className="text-xl font-black text-slate-900 mb-4">3. قص الخرسانة المسلحة والمشاريع الكبرى</h3>
 <p>
  قص العناصر الإنشائية مثل الكمرات والجسور أو قواعد المعدات لا يُحدد بالمعدة وحدها؛ يحتاج إلى تصميم واعتماد من المهندس الإنشائي وخطة للتدعيم والرفع وإدارة المخاطر. تُراجع المخططات وظروف الموقع أولاً للتأكد من ملاءمة التنفيذ ونطاقه.
 </p>
 </div>
 </div>
 </Section>


 <Section
 id="water-saw"
 title="القص اليدوي للأماكن التي لا تلائم منشار السكة"
 subtitle="يُختار المنشار اليدوي أو منشار السكة وفق مساحة العمل وعمق القطع ومادة السطح."
 >
 <div className="mb-8">
             <h3 className="text-xl font-black text-slate-900 mb-4">متى يناسب المنشار اليدوي؟</h3>
            <div className="mb-6 text-slate-700 leading-8">
               قد يلائم المنشار اليدوي القص في مواضع ضيقة أو قرب زوايا لا تسمح بتثبيت سكة، وفق عمق القطع ومواصفات المعدة. أما الفتحات الدائرية لتمرير المواسير فقد تناسبها خدمة <Link href="/core" className="text-sky-700 underline hover:text-sky-800">تخريم الكور</Link>. نختار الطريقة بعد مراجعة المقاس والموقع.
            </div>
            
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-right text-slate-800 min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 font-black text-slate-900 w-1/4">وجه المقارنة</th>
                     <th className="p-4 font-black text-emerald-700 border-r border-slate-200 bg-emerald-50/50">المنشار اليدوي</th>
                     <th className="p-4 font-black text-sky-700 border-r border-slate-200 bg-sky-50/50">منشار السكة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition">
                     <td className="p-4 font-bold">موضع الاستخدام</td>
                     <td className="p-4 border-r border-slate-200">الزوايا والمساحات التي تحد من تركيب المسار</td>
                     <td className="p-4 border-r border-slate-200">القص المستقيم على جدار أو سطح يسمح بتثبيت السكة</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                     <td className="p-4 font-bold">تحديد الطريقة</td>
                     <td className="p-4 border-r border-slate-200">يتحدد العمق بحسب الشفرة والمعدة والمادة</td>
                     <td className="p-4 border-r border-slate-200">يتطلب تخطيط المسار وتثبيت السكة قبل القص</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                     <td className="p-4 font-bold">التجهيز</td>
                     <td className="p-4 border-r border-slate-200">حماية المنطقة واحتواء مياه التبريد عند استخدامها</td>
                     <td className="p-4 border-r border-slate-200">تحديد نقاط التثبيت ومسار القطع وحماية ما حوله</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-slate-700 leading-8">
               يمكننا مراجعة صور الموقع والمقاسات لتحديد نوع المنشار الملائم، وما إذا كانت هناك حاجة إلى معاينة قبل تقديم عرض العمل.
            </div>
          </div>
 </Section>

  <Section
  id="cut-method"
  title="اختيار طريقة قص الخرسانة"
  subtitle="تتحدد الطريقة حسب شكل الفتحة ونوع العنصر وإمكانية تركيب المعدة ومتطلبات الموقع."
  >
  <p>
  يناسب منشار السكة خطوط القطع المستقيمة عندما تتوفر مساحة للتثبيت، وقد يكون المنشار اليدوي أنسب لمواضع أخرى بعد فحص العمق المطلوب. أما الفتحات الدائرية لتمرير المواسير فتُنفذ عادةً بتخريم الكور. إذا كان الجزء المراد فصله كبيراً أو كان العنصر إنشائياً، فيلزم اعتماد المخططات وخطة التدعيم والرفع من المهندس قبل اختيار المعدة أو بدء العمل.
  </p>
  </Section>

 <Section
 id="pricing"
  title="العوامل التي تحدد تكلفة قص الخرسانة"
  subtitle="يُعد عرض التكلفة بعد معرفة أبعاد القص وظروف الموقع ونطاق الأعمال المطلوبة."
 >
 <div className="space-y-8">
 <div>
 <h3 className="text-xl font-black text-slate-900 mb-4">كيف يتم حساب التكلفة؟</h3>
  <p className="mb-4">يتأثر سعر قص الجدار أو البلاطة بعدة عوامل، لذلك نحتاج إلى تفاصيل الموقع قبل إعطاء تقدير:</p>
  <ul className="list-disc pr-6 space-y-3 text-sm">
  <li><strong>أبعاد القطع وسماكة العنصر:</strong> طول خط القطع وعمقه ونوع الخرسانة.</li>
  <li><strong>التسليح ومكان العمل:</strong> نتائج مراجعة المخططات، وإمكانية الوصول وتثبيت المعدة.</li>
  <li><strong>فصل الجزء ورفعه:</strong> حجم الجزء المقطوع والحاجة إلى تجزئته أو تدعيمه ومعدات مناولته.</li>
  <li><strong>التجهيزات المحيطة:</strong> حماية التشطيبات واحتواء مياه التبريد والتخلص من المخلفات.</li>
 </ul>
 <p className="mt-6 font-bold text-sky-700">
  أرسل صورة أو مخططاً، ومقاسات منطقة القص وسماكة العنصر وموقع العمل، لنراجع نطاق التنفيذ والتكلفة المتوقعة. اقرأ <a href="/prices#saw-pricing" className="text-emerald-800 underline">عوامل سعر متر قص الخرسانة</a> قبل طلب عرض العمل.
 </p>
  <p className="mt-4">عند مقارنة المقاولين، استخدم <a href="/blog/best-concrete-cutting-contractor" className="text-emerald-800 underline">دليل مراجعة عروض قص الخرسانة</a> لتوضيح ما يشمله كل عرض من تجهيز ورفع ونقل مخلفات.</p>
 </div>
 </div>
 </Section>

 <Section
 id="steps"
  title="مراحل العمل لقص الخرسانة بالمنشار"
 >
 <div className="space-y-6">
 {[
  { t: "مراجعة الموقع", d: "تحديد أبعاد القطع ونوع العنصر والخدمات القريبة، ومراجعة المخططات وموافقة المهندس عند الحاجة." },
  { t: "التجهيز والتثبيت", d: "اختيار المنشار وتحديد مسار القطع ونقاط التثبيت وحماية المنطقة المحيطة." },
  { t: "احتواء المياه والمخلفات", d: "تجهيز وسيلة مناسبة لاحتواء مياه التبريد والعينة والمخلفات قبل التشغيل." },
  { t: "القص على مراحل", d: "تنفيذ القطع وفق التسلسل المتفق عليه، مع مراعاة تثبيت الجزء الذي سيُفصل." },
  { t: "مناولة الجزء المفصول", d: "تجزئة الجزء أو رفعه وفق حجمه وخطة المناولة المتفق عليها، ثم مراجعة الموقع بعد انتهاء العمل." }
 ].map((step, i) => (
 <div key={i} className="flex gap-4">
 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-600 font-bold text-white text-sm">{i + 1}</div>
 <p><strong>{step.t}:</strong> {step.d}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section
 id="faq"
 title="الأسئلة الشائعة (FAQ)"
 >
 <div className="space-y-4">
 {faq.map((item, i) => (
 <details key={i} className="group rounded-[32px] border border-black/10 bg-white p-7 shadow-sm hover:border-sky-300 transition">
 <summary className="cursor-pointer list-none font-black text-slate-900 flex items-center justify-between text-lg">
 <span>{item.q}</span>
 <span className="text-sky-600 group-open:rotate-180 transition p-1 bg-sky-50 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
 </summary>
 <p className="mt-6 text-slate-700 leading-9 text-sm bg-slate-50 p-5 md:p-8 rounded-[32px] border-r-8 border-sky-500 shadow-inner">
 {item.a}
 </p>
 </details>
 ))}
 </div>
 </Section>

  {/* ── قسم جديد: التغطية الجغرافية ── */}
  <Section
    id="coverage"
    title="قص الخرسانة بالمنشار — مناطق خدمتنا"
    subtitle="تواصل معنا بعنوان المشروع لتأكيد نطاق التغطية وإمكانية التنفيذ."
  >
    <p>
      تختلف إمكانية الوصول وموعد التنفيذ حسب عنوان المشروع ونطاق العمل. تواصل معنا لتأكيد توفر الخدمة في منطقتك قبل ترتيب المعاينة أو الحجز.
    </p>
    <div className="not-prose mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
      {[
        { city: 'القاهرة الكبرى', areas: 'مدينة نصر · التجمع · المعادي · عين شمس' },
        { city: 'الجيزة', areas: 'الدقي · المهندسين · 6 أكتوبر · الشيخ زايد' },
        { city: 'الإسكندرية', areas: 'سيدي بشر · المنتزه · سموحة · العجمي' },
        { city: 'العاصمة الإدارية', areas: 'والمدن الجديدة المحيطة' },
        { city: 'المنصورة والدلتا', areas: 'طنطا · الزقازيق · بنها' },
        { city: 'مناطق أخرى', areas: 'تواصل معنا لتأكيد التغطية' },
      ].map(x => (
        <div key={x.city} className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
          <div className="font-black text-slate-900 text-sm mb-1">{x.city}</div>
          <p className="text-slate-500 text-xs leading-5">{x.areas}</p>
        </div>
      ))}
    </div>
    <div className="not-prose mt-5 rounded-2xl bg-slate-900 text-white p-5 flex items-center gap-4">
      <div>
        <div className="font-black text-sky-400 text-lg">01021507462</div>
        <div className="text-slate-400 text-xs mt-1">تواصل معنا لتأكيد الوصول لمنطقتك</div>
      </div>
    </div>
  </Section>

  </div>

 {/* SIDEBAR */}
 <aside className="space-y-6 min-w-0">
 <div className="p-8 rounded-[48px] bg-white border border-black/10 shadow-lg">
  <h3 className="font-extrabold text-2xl text-slate-900 mb-4">تجهيز يبدأ بمراجعة الموقع</h3>
 <p className="text-slate-600 text-sm leading-7 mb-6">
  نراجع المقاسات ونوع العنصر وطريقة فصل الجزء قبل تحديد معدات القص والتجهيزات المطلوبة.
 </p>
 <div className="space-y-4">
  <StatPill  text="مراجعة خط القطع والمقاسات" />
  <StatPill  text="تجهيز احتواء مياه التبريد" />
  <StatPill  text="التأكد من نطاق التغطية" />
 </div>
 </div>

 <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
 <h3 className="font-extrabold text-lg text-slate-900 mb-3">خدمات أخرى</h3>
 <div className="space-y-2">
 {[
 { href: "/core", label: "تخريم الخرسانة بالكور" },
 { href: "/hoods", label: "تركيب شفاطات المطبخ" },
 { href: "/wire", label: "قص بالواير الماسي" },
 { href: "/concrete-cutting-alexandria", label: "خدماتنا في الإسكندرية" },
 ].map((s) => (
 <a key={s.href} href={s.href} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-sky-700 hover:underline py-1">
 <span className="text-sky-600">›</span>
 {s.label}
 </a>
 ))}
 </div>
 </div>

 <div className="p-8 rounded-[48px] bg-sky-600 text-white shadow-xl relative overflow-hidden group">
 <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
 <h3 className="font-black text-2xl mb-4">اطلب مقاول القص</h3>
  <p className="text-sky-100 text-sm mb-6 leading-7">أرسل تفاصيل المشروع لتحديد إمكانية التنفيذ ومتطلبات المعاينة.</p>
 <Link
 href={WHATSAPP}
 className="block w-full text-center py-5 rounded-3xl bg-white text-sky-900 font-black text-xl hover:scale-[1.02] transition shadow-lg"
 >
 تواصل واتسـاب
 </Link>
 </div>


 </aside>
 </div>
 
 {/* CTA Banner */}
 <section className="mt-10 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.8),transparent_70%)]" />
   <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
     <div>
       <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 text-sky-300 font-bold mb-5 text-sm border border-sky-500/30">
         <BadgeCheck className="w-4 h-4" />
          أرسل تفاصيل المشروع
       </div>
       <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
         هل تحتاج إلى قص خرسانة بالمنشار بأسرع وقت؟
       </h2>
       <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
          أرسل المقاسات وصورة الموقع، وسنراجع تفاصيل القص ونوضح الخطوات اللازمة لتقدير التكلفة.
       </p>
       <div className="mt-4 text-2xl font-black text-sky-400">{PHONE}</div>
     </div>
     <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto min-w-[220px]">
       <Link href={WHATSAPP} className="inline-flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-500 transition text-white px-8 py-4 rounded-2xl font-black text-xl">
         <Phone className="w-5 h-5" /> تواصل واتساب
       </Link>
       <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 transition px-8 py-4 rounded-2xl font-black text-xl">
         <Phone className="w-5 h-5" /> اتصل الآن
       </a>
     </div>
   </div>
 </section>

 </div>
 </div>
 );
}
