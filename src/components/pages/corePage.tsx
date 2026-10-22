import React from 'react';

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

const BRAND = "كور برو - Core Pro";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/core`;
const PHONE_NUM = "01021507462";
const PHONE_INT = "+20" + PHONE_NUM.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201021507462";
const ADDRESS_TEXT = " الحي العاشر مدينة نصر";

const SERVICE_NAME = "تخريم الخرسانة بالكور";
const FOCUS_KEYWORD = "صنايعي كور";

const IMG_HERO = { src: "/images/core/sanayeh-core-egypt.webp", width: 800, height: 800 };
const IMG_1 = { src: "/images/core/fatahat-core-beton-1.webp", width: 800, height: 800 };
const IMG_2 = { src: "/images/core/fatahat-core-beton-2.webp", width: 800, height: 800 };
const IMG_3 = { src: "/images/core/fatahat-core-beton-3.webp", width: 800, height: 800 };

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

export default function CorePage() {
 const faq = [
 {
 q: "هل يمكن تخريم الكمرات أو العناصر الإنشائية؟",
 a: "لا يبدأ العمل في كمرة أو عنصر إنشائي قبل مراجعة موقع الفتحة ومخططات المبنى وأخذ موافقة المهندس الإنشائي المسؤول. لا يجوز قطع حديد التسليح من دون توجيه هندسي.",
 },
 {
 q: "كم تستغرق عملية تخريم السقف لعمل فتحة؟",
  a: "تختلف المدة حسب قطر الفتحة وسماكة الخرسانة والتسليح وإمكانية تثبيت الماكينة والوصول إلى الموقع. نحدد الزمن المتوقع بعد معرفة تفاصيل الفتحة أو معاينة الموقع.",
 },
 {
  q: "هل ينتج عن التخريم غبار أو مياه؟",
  a: "يُستخدم التبريد بالماء في كثير من أعمال الكور، لذلك نحدد طريقة احتواء مياه التبريد والمخلفات قبل التنفيذ. تختلف كمية المياه والغبار حسب نوع الخرسانة والمعدة ومكان العمل.",
 },
 {
 q: "ما هي أكبر وأصغر أقطار فتحات الكور التي تنفذونها؟",
  a: "يتحدد القطر المتاح حسب نوع الماكينة والأسطوانة وسماكة العنصر وموقع التنفيذ. أرسل قطر الفتحة المطلوب أو مقاس الماسورة لنؤكد الإمكانية قبل الحجز.",
 },
 {
 q: "كيف يمكنني حجز موعد لتنفيذ العمل؟",
  a: "أرسل موقع العمل وصورة للمكان ونوع الاستخدام وقطر الفتحة وسماكة الجدار أو السقف إن عُرفت. نراجع التفاصيل ونحدد نطاق الخدمة والتكلفة وطريقة التنفيذ.",
 },
 {
 q: "ما هي تكلفة عمل فتحة كور في مصر؟",
  a: "يتأثر السعر بقطر الفتحة وسماكة الخرسانة ونوعها وعدد الفتحات وموقع العمل وإمكانية تثبيت المعدة واحتواء مياه التبريد. أرسل هذه التفاصيل للحصول على تقدير مناسب قبل التنفيذ.",
 },
 {
 q: "هل تتعاقدون مع شركات تخريم الخرسانة للمشاريع الكبيرة؟",
  a: "يمكننا مراجعة طلبات المقاولات والمشاريع متعددة الفتحات. أرسل المخططات والكميات والموقع والجدول المطلوب لتقييم نطاق العمل والمعدات اللازمة.",
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
 openingHours: "Mo-Su 00:00-23:59",
 sameAs: [DOMAIN, WHATSAPP],
 };

 const jsonLdService = {
 "@context": "https://schema.org",
 "@type": "Service",
 name: "فتحات كور في الخرسانة المسلحة | صنايعي كور في مصر",
 serviceType: "Concrete core drilling",
 provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_INT, url: DOMAIN },
 areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "الشيخ زايد", "6 أكتوبر", "العاصمة الإدارية", "القليوبية"],
 url: CANONICAL,
 description: "خدمة تخريم كور في الخرسانة لتمرير مواسير الغاز والسباكة والتكييف والتهوية. يتحدد قطر الفتحة وطريقة التنفيذ والتكلفة بحسب سماكة الخرسانة وموقع العمل وظروف الموقع.",
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
 { "@type": "ListItem", position: 2, name: "فتحات كور في الخرسانة", item: CANONICAL },
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
      "contentUrl": `${DOMAIN}/images/core/sanayeh-core-egypt.webp`,
      "name": "تخريم الخرسانة بالكور الماسي - كور برو",
      "description": "تخريم الخرسانة بماكينة الكور الماسي مع التبريد المائي",
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
      contentUrl: `${DOMAIN}/images/core/fatahat-core-beton-1.webp`,
      "name": "ماكينة كور دريل هيدروليكية",
      "description": "ماكينة كور دريل هيدروليكية أثناء تخريم السقف الخرساني",
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
 <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(34,197,94,0.18),transparent_55%)]" />
 <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

 <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
 <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
 <div>
 <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm">
 
 <span>تخريم كور للغاز والسباكة والتكييف · معاينة حسب الموقع</span>
 </div>

 <h1 className="mt-4 text-2xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4 break-words">
 أفضل صنايعي كور لعمل أي فتحة كور وتخريم جدار خرساني - 01021507462
 </h1>

 <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
 <p>
 ننفذ تخريم الكور في الخرسانة لتمرير مواسير الغاز والسباكة والتكييف والتهوية، باستخدام ماكينة تثبت في موضع العمل وبنطة ماسية بالقطر المناسب. أرسل مقاس الفتحة وصورة الموقع وسماكة الجدار أو السقف إن توفرت، لنراجع إمكانية التنفيذ ونحدد متطلبات المعاينة والتكلفة.
 </p>
 <p>
 تُستخدم فتحات الكور لتمرير مواسير وخطوط الخدمات أو لتجهيز فتحات التهوية. يتحدد أسلوب التنفيذ حسب قطر الفتحة وسماكة العنصر وموقعه وإمكانية تثبيت الماكينة واحتواء مياه التبريد. للمشاريع التي تتضمن عدة فتحات، أرسل المخططات والكميات وموقع العمل ليتسنى تقييم نطاق التنفيذ.
 </p>
 </div>

 <div className="mt-8 flex flex-wrap gap-4">
 <Link
 href={WHATSAPP}
 className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 md:px-10 md:py-5 font-black text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition transform hover:-translate-y-1 text-lg md:text-xl"
 >
 <Phone className="h-6 w-6" />
 اتصل بنا الآن
 </Link>
 </div>
 </div>

 <div className="rounded-none border-4 border-white bg-white shadow-2xl overflow-hidden p-4 relative">
 <div
 data-lightbox-src={IMG_HERO.src}
 className="relative aspect-square rounded-none overflow-hidden bg-slate-100 shadow-inner group w-full cursor-pointer"
 >
 <Image src={IMG_HERO} alt="صنايعي كور محترف لعمل فتحات كور في الخرسانة - كور برو" fill priority className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
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
 <Image src={img} alt={`أعمال فتحات كور وتخريم خرسانة بواسطة صنايعي كور ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-none" />
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
 <div className="lg:col-span-2 space-y-10 min-w-0">

 <Section
 id="what-is-core"
 title="ما هي تقنية عمل فتحات كور في الخرسانة؟ (Core Drilling)"
 >
 <p>
 تخريم الكور عملية حفر دائري في الخرسانة باستخدام ماكينة وبنطة ماسية مجوفة. يُختار قطر البنطة ومكان الفتحة وفق الغرض من التمديد وظروف الموقع، مع مراجعة المخططات والعناصر الإنشائية قبل التنفيذ.
 </p>
 </Section>

 <Section
 id="importance"
 title="أهمية استخدام ماكينة كور تخريم الخرسانة"
 >
 <p>
 تتكون المعدة عادةً من محرك وقاعدة تثبيت وبنطة ماسية مجوفة. ويُختار نوع البنطة وسرعة التشغيل والتبريد وفق مادة السطح وقطر الفتحة. تساعد هذه الطريقة على إنتاج فتحة دائرية منتظمة؛ أما النتيجة النهائية فتتأثر بحالة الخرسانة والتسليح وطريقة التثبيت.
 </p>
 </Section>

 <Section
 id="comparison"
 title="متى نستخدم تخريم الكور؟"
 >
 <p>
 يُنتج التخريم بالكور فتحة دائرية، بينما قد يلائم التكسير بعض الأعمال الأخرى. يختلف مستوى الضوضاء والاهتزاز بحسب المعدة والمادة وطريقة التنفيذ؛ لذلك لا تُعد أي طريقة مناسبة لكل المواقع. عند العمل قرب عناصر إنشائية أو تشطيبات حساسة، يجب مراجعة ظروف الموقع واختيار الأسلوب الملائم قبل البدء.
 </p>
 <p className="mt-4">
 يساعد التخريم بالكور على حصر العمل حول موضع الفتحة، لكنه لا يضمن منع كل ضرر أو اهتزاز. تُفحص المنطقة المحيطة وتُتخذ إجراءات الحماية المناسبة بحسب حالة الموقع.
 </p>
 </Section>

 <Section
 id="services-list"
 title="خدماتنا الشاملة في تخريم الخرسانة وتأسيس المرافق"
  subtitle="تختلف متطلبات كل فتحة بحسب الغرض وموضع التنفيذ وسماكة الخرسانة؛ تُراجع التفاصيل قبل تحديد طريقة العمل."
 >
 <div className="space-y-8">
 <div>
 <h3 className="text-xl font-black text-slate-900 mb-2">1. عمل فتحات الغاز والسباكة الدقيقة</h3>
 <p>
  تُجهز فتحات لمرور مواسير الغاز والسباكة وفق المقاس والمسار اللذين يحددهما المختص. قبل الحفر يُراجع موضع الفتحة وموقع الخدمات والتسليح، ويتولى فني الغاز المرخص توصيل المواسير واختبارها؛ تخريم الخرسانة وحده لا يُعد توصيلاً أو اعتماداً لشبكة الغاز.
 </p>
 </div>
 <div>
 <h3 className="text-xl font-black text-slate-900 mb-2">2. عمل فتحة مدخنة السخان وتمديدات التكييف والتهوية</h3>
 <p>
  نجهز <strong>فتحات مدخنة السخان</strong> وتمديدات التكييف والتهوية بحسب المقاس والمسار المحددين للمعدة والموقع. يجب أن يراجع فني مختص مواصفات المدخنة وتصريف العادم، وأن يحدد فني التكييف مسارات المواسير قبل الحفر. ونوفر أيضاً خدمة <Link href="/hoods" className="text-emerald-700 underline hover:text-emerald-800">تركيب شفاطات المطبخ</Link> بشكل متكامل.
 </p>
 <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-slate-700 leading-7">
    ⚠️ <strong>تنبيه السلامة:</strong> لا يكفي حفر الفتحة لضمان سلامة السخان؛ يجب تركيب المدخنة واختبارها وفق تعليمات الشركة المصنّعة وعلى يد فني مؤهل.
 </div>
 </div>
 <div>
 <h3 className="text-xl font-black text-slate-900 mb-2">3. فتح كور في الكمر وتخريم السقف بأمان</h3>
 <p>
 تخريم السقف أو الجدار يحتاج مراجعة موضع الفتحة والخدمات والتسليح قبل التنفيذ. لا يُنفذ تخريم في كمرة أو عمود أو عنصر إنشائي لمجرد تحديد القطر؛ يلزم الرجوع إلى المخططات وموافقة المهندس الإنشائي المسؤول، ولا يُقطع حديد التسليح دون توجيه هندسي.
 </p>
 <p className="mt-2">
  قد تتطلب فتحات السلالم أو المصاعد تعديلاً إنشائياً يتجاوز التخريم؛ لا يبدأ العمل فيها إلا بعد مراجعة المخططات وموافقة المهندس الإنشائي وتحديد طريقة التدعيم عند الحاجة. يصدر عن التخريم صوت ومياه تبريد، لذا تُحدد إجراءات حماية الموقع واحتواء المياه مسبقاً.
 </p>
 </div>
 <div>
 <h3 className="text-xl font-black text-slate-900 mb-2">4. تخريم بلاطة الأرضيات والأسقف (قبل وبعد التشطيب)</h3>
 <p>
 يشيع تخريم البلاطات لتمرير مواسير الصرف والتكييف والخدمات. قبل التنفيذ تُراجع مواقع الخدمات والتسليح ويُحدد اتجاه العمل وإجراءات حماية التشطيبات واحتواء مياه التبريد. تعتمد إمكانية التنفيذ على سماكة البلاطة وظروف المبنى وموافقة المهندس عند الحاجة.
 </p>
 </div>
 </div>
 </Section>


 <Section
 id="walls-materials"
  title="تخريم الجدار والمواد الحساسة"
  subtitle="تحتاج الأسطح المشطبة إلى اختيار البنطة وتثبيت المعدة وحماية المنطقة المحيطة وفق حالة الموقع."
 >
 <div className="space-y-8">
 <div id="marble-ceramic" className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
  <h3 className="text-xl font-black text-slate-900 mb-2">تخريم السيراميك والرخام بعناية</h3>
 <p>
  يتطلب <strong>تخريم الرخام</strong> تحديد موضع الفتحة ومقاسها، واختيار بنطة مناسبة وتثبيت السطح قبل الحفر، مثل فتحات الأحواض أو الفلاتر. يعتمد الأسلوب على نوع الحجر وسماكته ومكان التركيب؛ أرسل صورة السطح ومقاس الفتحة لتقييم الحالة.
 </p>
 <p className="mt-2">
  أما للحمامات، فتُختار بنطة مناسبة للسيراميك أو البورسلين مع تثبيت السطح والتدرج في الحفر. تساعد هذه الاحتياطات على تقليل احتمال الشرخ أو التنقير، لكن النتيجة تتأثر بحالة البلاطة وطريقة تركيبها.
 </p>
 </div>
</div>
 </Section>

 <Section
 id="process"
 title="مراحل تنفيذ فتحة الكور"
 subtitle="تبدأ العملية بتحديد متطلبات الفتحة وظروفها، ثم اختيار المعدة وطريقة تثبيتها واحتواء نواتج العمل."
 >
 <ol className="space-y-5">
 <li><strong>1. جمع التفاصيل:</strong> تحديد استخدام الفتحة وقطرها وسماكة الجدار أو البلاطة وموقع المشروع، مع إرسال صورة أو مخطط إن توفر.</li>
 <li><strong>2. مراجعة موضع الحفر:</strong> التحقق من مسار الخدمات والتسليح ومكان خروج العينة، ومراجعة المخططات وموافقة المهندس عند ارتباط الفتحة بعنصر إنشائي.</li>
 <li><strong>3. التجهيز والتثبيت:</strong> اختيار البنطة وطريقة تثبيت الماكينة حسب اتجاه الحفر وإمكانية الوصول، وحماية التشطيبات وتحديد طريقة احتواء مياه التبريد.</li>
 <li><strong>4. التخريم ومراجعة الموقع:</strong> تنفيذ الفتحة بالمقاس المتفق عليه والتعامل مع العينة والمخلفات حسب الاتفاق، ثم مراجعة موضع العمل قبل التسليم.</li>
 </ol>
 </Section>

 <Section
 id="core-hole-sizes"
 title="كيف تحدد قطر فتحة الكور؟"
 subtitle="لا يوجد قطر واحد مناسب لكل تمديد؛ اعتمد مقاس المعدة أو الماسورة ومتطلبات التركيب قبل تحديد الفتحة."
 >
 <p>
 أرسل القطر الخارجي للماسورة أو مقاس الدكت، واذكر إن كان هناك عزل أو جلبة أو ميل مطلوب. في حال عدم توفر المقاس، شارك اسم المعدة أو صورة مواصفاتها، ويُراجع القطر مع فني التمديدات قبل الحفر. لا يُنصح بتكبير الفتحة أو تغيير موضعها ميدانياً من دون مراجعة أثر ذلك على العنصر الإنشائي.
 </p>
 <p className="mt-4">
 يتوقف قطر البنطة المتاح على المعدة المستخدمة وسماكة الخرسانة ومكان التثبيت. لذلك نؤكد الإمكانية بعد مراجعة المقاس والموقع، ولا نعتمد جدولاً ثابتاً قد لا يناسب جميع أنواع المواسير أو ظروف المبنى.
 </p>
 </Section>

 <Section
 id="pricing"
 title="ما العوامل التي تحدد تكلفة تخريم الكور؟"
 subtitle="يُحدد السعر بعد معرفة تفاصيل الفتحة ونطاق العمل؛ لا يمكن إعطاء تكلفة دقيقة من القطر وحده."
 >
 <ul className="list-disc pr-6 space-y-2">
 <li>قطر الفتحة وسماكة العنصر ونوع الخرسانة.</li>
 <li>عدد الفتحات وتكرار المقاسات في المشروع.</li>
 <li>اتجاه الحفر وإمكانية الوصول إلى الموقع وتثبيت الماكينة.</li>
 <li>متطلبات حماية التشطيبات واحتواء مياه التبريد والتعامل مع العينة الخرسانية.</li>
 <li>موقع المشروع وموعد التنفيذ وأي تجهيزات خاصة يفرضها المكان.</li>
 </ul>
 <p className="mt-4">
 للحصول على تقدير، أرسل عدد الفتحات وأقطارها وسماكات الجدران أو البلاطات وموقع المشروع وصورة للمكان. تُراجع التفاصيل قبل تثبيت نطاق العمل والتكلفة.
 </p>
 </Section>

 <Section
 id="faq"
  title="أسئلة شائعة عن تخريم الكور في الخرسانة"
 >
 <div className="space-y-4">
 {faq.map((item, i) => (
 <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-emerald-300 transition">
 <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
 <span>{item.q}</span>
 <span className="text-emerald-600 group-open:rotate-180 transition p-1 bg-emerald-50 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
 </summary>
 <p className="mt-6 text-slate-700 leading-9 text-sm bg-slate-50 p-5 md:p-8 rounded-[32px] border-r-8 border-emerald-500 shadow-inner">{item.a}</p>
 </details>
 ))}
 </div>
 </Section>

 </div>

 {/* SIDEBAR */}
 <aside className="space-y-6 min-w-0">
 <div className="p-8 rounded-[40px] bg-white border border-black/10 shadow-lg">
 <h3 className="font-extrabold text-2xl text-slate-900 mb-4">تنفيذ يبدأ بمراجعة الموقع</h3>
 <p className="text-slate-600 text-sm leading-7 mb-6">
 ننفذ فتحات الكور بعد مراجعة الاستخدام ومقاس الفتحة وظروف الموقع، ونوضح نطاق العمل والتكلفة قبل تحديد موعد التنفيذ.
 </p>
 <div className="space-y-4">
 <StatPill  text="مراجعة ظروف الموقع قبل التنفيذ" />
 <StatPill  text="تحديد طريقة احتواء مياه التبريد" />
 <StatPill icon={<MapPin className="h-4 w-4 text-emerald-600" />} text="تأكيد نطاق الخدمة حسب الموقع" />
 </div>
 </div>

 <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
 <h3 className="font-extrabold text-lg text-slate-900 mb-3">خدمات أخرى</h3>
 <div className="space-y-2">
 {[
 { href: "/saw", label: "قص الخرسانة بالمنشار" },
 { href: "/hoods", label: "تركيب شفاطات المطبخ" },
 { href: "/wire", label: "قص بالواير الماسي" },
 ].map((s) => (
 <a key={s.href} href={s.href} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700 hover:underline py-1">
 <span className="text-emerald-600">›</span>
 {s.label}
 </a>
 ))}
 </div>
 </div>

 <div className="p-8 rounded-[40px] bg-emerald-600 text-white shadow-xl relative overflow-hidden group">
 <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
 <h3 className="font-black text-2xl mb-4">اطلب معاينة لتخريم الكور</h3>
 <p className="text-emerald-100 text-sm mb-6 leading-7">سيقوم فريقنا بالرد عليك فوراً وتحديد التكلفة المبدئية وإرسال <strong>فني كور</strong> متخصص لموقعك.</p>
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
 </div>
 );
}
