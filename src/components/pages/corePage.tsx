import React from 'react';
import ServiceContents from '../ServiceContents';
import { coreService, corePhotos } from '../../lib/core-service';

const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
 const actualSrc = typeof src === "object" ? src.src : src;
 const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
 const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
 const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
 return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} fetchPriority={fetchpriority} />;
};

const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;

import { MapPin, Phone, Maximize } from "lucide-react";

const BRAND = "كور برو - Core Pro";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = coreService.canonical;
const PHONE_NUM = "01021507462";
const PHONE_INT = "+20" + PHONE_NUM.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201021507462";
const REQUEST_MESSAGE = 'طلب تخريم كور\nالمنطقة: \nالاستخدام: \nعدد الفتحات: \nالقطر المطلوب: \nسماكة الجدار أو السقف إن عُرفت: \nسأرسل صور موضع العمل من الجانبين. أرجو مراجعة إمكانية التنفيذ والتكلفة والموعد.';
const REQUEST_WHATSAPP = `${WHATSAPP}?text=${encodeURIComponent(REQUEST_MESSAGE)}`;
const IMG_HERO = corePhotos[0];

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
 q: "هل توفرون صنايعي كور في القاهرة والجيزة والمدن الجديدة؟",
 a: "نراجع طلبات القاهرة والجيزة، ومنها مدينة نصر والمعادي والتجمع الخامس و6 أكتوبر والشيخ زايد والعاصمة الإدارية، وكذلك القليوبية. أرسل المنطقة والعنوان لتأكيد التغطية وتكلفة الانتقال والموعد؛ ذكر المنطقة لا يعني وجود فرع فيها.",
 },
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

 const jsonLdOrganization = {
 "@context": "https://schema.org",
 "@type": "Organization",
 "@id": `${DOMAIN}/#core-provider`,
 name: BRAND,
 url: DOMAIN,
 telephone: PHONE_INT,

 };

 const jsonLdService = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${CANONICAL}#service`,
 name: coreService.heading,
 serviceType: "Concrete core drilling",
 provider: { "@id": `${DOMAIN}/#core-provider` },
 areaServed: coreService.areas.map(name => ({ "@type": "Place", name })),
 url: CANONICAL,
 description: coreService.description,
 image: corePhotos.map(photo => `${DOMAIN}${photo.src}`),
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
 { "@type": "ListItem", position: 2, name: "صنايعي كور وتخريم الخرسانة", item: CANONICAL },
 ],
 };

 const jsonLdWebPage = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "@id": `${CANONICAL}#webpage`,
 url: CANONICAL,
 name: coreService.title,
 description: coreService.description,
 inLanguage: "ar-EG",
 mainEntity: { "@id": `${CANONICAL}#service` },
 primaryImageOfPage: { "@id": `${CANONICAL}#image-1` },
 };
 const jsonLdImageObjects = corePhotos.map((photo, i) => ({
 "@context": "https://schema.org",
 "@type": "ImageObject",
 "@id": `${CANONICAL}#image-${i + 1}`,
 contentUrl: `${DOMAIN}${photo.src}`,
 name: photo.caption,
 description: photo.alt,
 width: photo.width,
 height: photo.height,
 }));

 return (
 <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify([
 jsonLdOrganization,
 jsonLdService,
 jsonLdFaq,
  jsonLdBreadcrumb,
 jsonLdWebPage,
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
 
 <span>القاهرة والجيزة · فتحات كور للجدران والأسقف</span>
 </div>

 <h1 className="mt-4 text-2xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4 break-words">
 {coreService.heading}
 </h1>

 <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
 <p>
 تحتاج صنايعي كور لفتحة ماسورة أو تكييف أو تهوية؟ تقدم كور برو خدمة تخريم الخرسانة للجدران والأسقف والبلاطات في القاهرة والجيزة. نراجع استخدام الفتحة وقطرها وسماكة العنصر ومكان التثبيت قبل اختيار البنطة الماسية وتحديد طريقة العمل والتكلفة.
 </p>
 <p>
 لشقة جاهزة أو فيلا تحت التشطيب أو مشروع متعدد الفتحات: أرسل صور المكان والمقاسات والعنوان، وسنوضح ما يحتاج معاينة وما يشمله عرض العمل. يُراجع موضع الفتحة مع مختص التمديدات، وتحتاج العناصر الإنشائية اعتماد المهندس المسؤول قبل التنفيذ.
 </p>
 </div>

 <div className="mt-8 flex flex-wrap gap-4">
 <Link
 href={REQUEST_WHATSAPP}
 className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 md:px-10 md:py-5 font-black text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition transform hover:-translate-y-1 text-lg md:text-xl"
 >
 <Phone className="h-6 w-6" />
 أرسل المقاسات على واتساب
 </Link>
 <a href={`tel:${PHONE_INT}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-900">
 <Phone className="h-5 w-5" aria-hidden="true" /> اتصل <bdi>{PHONE_NUM}</bdi>
 </a>
 </div>
 <p className="mt-4 text-sm leading-7 text-slate-600">المنطقة + صورة موضع الفتحة + العدد والقطر والسماكة إن عُرفا. الموعد والتكلفة بعد مراجعة التفاصيل.</p>
 </div>

 <div className="rounded-none border-4 border-white bg-white shadow-2xl overflow-hidden p-4 relative">
 <a href={IMG_HERO.src}
 data-lightbox-src={IMG_HERO.src}
 aria-label="تكبير صورة تخريم الأرضية بالكور"
 className="block relative aspect-[4/3] rounded-none overflow-hidden bg-slate-100 shadow-inner group w-full cursor-pointer"
 >
 <Image src={IMG_HERO} alt={IMG_HERO.alt} fill priority fetchpriority="high" className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
 <Maximize className="h-10 w-10" />
 </div>
 </a>
 <p className="p-4 text-sm leading-7 text-slate-600">{IMG_HERO.caption}: مراجعة التثبيت ومخرج العينة وتجميع المياه جزء من تجهيز الموقع.</p>
 </div>
 </div>
 </div>
 </section>

 {/* CORE CONTENT */}
 <div className="mx-auto max-w-6xl px-4 pb-24">
 <div className="grid gap-10 lg:grid-cols-3">
 <div className="lg:col-span-2 space-y-10 min-w-0">
 <ServiceContents items={[{ id: 'services-list', label: 'خدمات صنايعي كور وفتحات الخرسانة' }, { id: 'core-hole-sizes', label: 'اختيار قطر فتحة الكور' }, { id: 'process', label: 'خطوات تخريم الكور' }, { id: 'pricing', label: 'سعر فتحة الكور' }, { id: 'work-photos', label: 'صور التخريم واتجاهاته' }, { id: 'service-areas', label: 'مناطق الخدمة' }, { id: 'request', label: 'طلب فني كور' }, { id: 'faq', label: 'أسئلة قبل الحجز' }]} />

 <Section
 id="what-is-core"
 title="ما هي تقنية عمل فتحات كور في الخرسانة؟ (Core Drilling)"
 >
 <p>
 تخريم الكور عملية حفر دائري في الخرسانة باستخدام ماكينة وبنطة ماسية مجوفة. يُختار قطر البنطة ومكان الفتحة وفق الغرض من التمديد وظروف الموقع، مع مراجعة المخططات والعناصر الإنشائية قبل التنفيذ.
 </p>
 </Section>

 <Section id="comparison" title="فتحة دائرية أم فتحة باب أو سلم؟">
 <p>الكور مناسب لفتحات دائرية لتمرير الخدمات. أما فتحة الباب أو الشباك أو السلم فتحتاج مراجعة أبعاد القطع والعنصر الإنشائي وخطة فصل الجزء الخرساني. تعرف على <a href="/saw" className="text-emerald-800 underline">قص الخرسانة بالمنشار</a> أو <a href="/wire" className="text-emerald-800 underline">القص بالواير الماسي</a> بحسب طبيعة العمل؛ لا يكفي تكبير البنطة أو تجميع فتحات دون اعتماد مناسب.</p>
 </Section>

 <Section
 id="services-list"
 title="فتحات كور خرسانة للسباكة والتكييف والغاز"
  subtitle="تختلف متطلبات كل فتحة بحسب الغرض وموضع التنفيذ وسماكة الخرسانة؛ تُراجع التفاصيل قبل تحديد طريقة العمل."
 >
 <div className="space-y-8">
 <div>
 <h3 className="text-xl font-black text-slate-900 mb-2">1. عمل فتحات الغاز والسباكة الدقيقة</h3>
 <p>
  تُجهز <a href="/gas-holes" className="text-emerald-800 underline">فتحات مواسير الغاز</a> والسباكة وفق المقاس والمسار اللذين يحددهما المختص. قبل الحفر يُراجع موضع الفتحة وموقع الخدمات والتسليح، ويتولى فني الغاز المرخص توصيل المواسير واختبارها؛ تخريم الخرسانة وحده لا يُعد توصيلاً أو اعتماداً لشبكة الغاز.
 </p>
 </div>
 <div>
 <h3 className="text-xl font-black text-slate-900 mb-2">2. عمل فتحة مدخنة السخان وتمديدات التكييف والتهوية</h3>
 <p>
  نجهز <strong>فتحات مدخنة السخان</strong> وتمديدات التكييف والتهوية بحسب المقاس والمسار المحددين للمعدة والموقع. يجب أن يراجع فني مختص مواصفات المدخنة وتصريف العادم، وأن يحدد فني التكييف مسارات المواسير قبل الحفر. للفتحات المرتبطة بجهاز شفط، راجع <Link href="/hoods" className="text-emerald-700 underline hover:text-emerald-800">تأسيس وتركيب شفاط المطبخ بالقاهرة والجيزة</Link> لتحديد نطاق التركيب والدكت، وليس التخريم وحده.
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
 <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
 <table className="w-full min-w-[32rem] text-right text-base">
 <caption className="p-4 text-right font-bold text-slate-900">المعلومات اللازمة لتحديد المقاس حسب الاستخدام</caption>
 <thead className="bg-slate-100"><tr><th scope="col" className="p-4">الاستخدام</th><th scope="col" className="p-4">ما الذي ترسله؟</th><th scope="col" className="p-4">ما الذي يُراجع؟</th></tr></thead>
 <tbody>
 <tr className="border-t border-slate-200"><th scope="row" className="p-4">ماسورة غاز أو سباكة</th><td className="p-4">القطر الخارجي ومسار الماسورة</td><td className="p-4">الجلبة والخلوص والميل بحسب توجيه فني التمديدات</td></tr>
 <tr className="border-t border-slate-200"><th scope="row" className="p-4">تمديدات تكييف</th><td className="p-4">مقاسات المواسير والعزل والصرف</td><td className="p-4">حيز مرور المجموعة والميل وموضع الخروج</td></tr>
 <tr className="border-t border-slate-200"><th scope="row" className="p-4">دكت شفاط أو تهوية</th><td className="p-4">موديل الجهاز ومقاس الدكت المعتمد</td><td className="p-4">مسار الطرد والوصلات وتعليمات التركيب</td></tr>
 <tr className="border-t border-slate-200"><th scope="row" className="p-4">عدة فتحات في مشروع</th><td className="p-4">مخطط بمواقع الفتحات وأقطارها وعددها</td><td className="p-4">تعارض الخدمات والتسليح وتسلسل التنفيذ والاعتمادات</td></tr>
 </tbody>
 </table>
 </div>
 </Section>

 <Section
 id="pricing"
 title="أسعار فتحات الكور: ما الذي يحدد تكلفة الفتحة؟"
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
  للحصول على تقدير، أرسل عدد الفتحات وأقطارها وسماكات الجدران أو البلاطات وموقع المشروع وصورة للمكان. تُراجع التفاصيل قبل تثبيت نطاق العمل والتكلفة. راجع <a href="/prices#core-pricing" className="text-emerald-800 underline">تفاصيل تسعير فتحة الكور</a> وما يشمله عرض العمل.
 </p>
  <p className="mt-4">قبل اختيار مقدم الخدمة، راجع <a href="/blog/best-core-hole-technician" className="text-emerald-800 underline">سبعة أسئلة تسألها لصنايعي الكور</a> حول المقاس والتثبيت والمياه ونطاق العمل.</p>
 <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
 <h3 className="text-lg font-bold">قبل اعتماد عرض السعر</h3>
 <p>اطلب توضيح الأجور والانتقال وتجهيز الموقع وتجميع المياه وإزالة المخلفات، وما إذا كانت المعاينة مدفوعة أو تخصم من التنفيذ. تغيير القطر أو العدد أو موضع الفتحة بعد الاتفاق قد يغير نطاق العمل والتكلفة.</p>
 </div>
 </Section>

 <Section id="work-photos" title="صور تخريم الكور: اتجاه الحفر يغيّر التجهيز">
 <p>توضح الصور المستخدمة في هذه الصفحة تخريمًا رأسيًا وأفقيًا وفتحات متجاورة. راجع المثال الأقرب لطلبك، ثم أرسل صور موقعك؛ فالمقاس والسماكة والاعتماد المطلوب لا يمكن تأكيدها من صورة مشابهة وحدها.</p>
 <div className="mt-6 grid gap-6 sm:grid-cols-2">
 {corePhotos.map(photo => <figure key={photo.src} className="m-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
 <a href={photo.src} data-lightbox-src={photo.src} aria-label={`تكبير الصورة: ${photo.caption}`} className="block relative aspect-[4/3] overflow-hidden">
 <Image src={photo} alt={photo.alt} fill className="object-cover" />
 </a>
 <figcaption className="p-5"><strong className="block font-bold text-slate-900">{photo.caption}</strong><span className="mt-2 block text-base leading-8">{photo.detail}</span></figcaption>
 </figure>)}
 </div>
 </Section>

 <Section id="service-areas" title="مناطق خدمة صنايعي كور بالقاهرة والجيزة">
 <p>نراجع طلبات تخريم الكور في المناطق التالية، ويُؤكد الوصول وتكلفة الانتقال والموعد بعد معرفة العنوان والطابق وتجهيزات الموقع. هذه مناطق خدمة وليست عناوين فروع.</p>
 <ul className="grid gap-2 sm:grid-cols-2 list-disc">
 {coreService.areas.map(area => <li key={area}>{area}</li>)}
 </ul>
 <p>للتفاصيل المحلية، راجع <a href="/concrete-cutting-tagamoa" className="text-emerald-800 underline">أعمال الكور والقص في التجمع الخامس</a>، أو <a href="/concrete-cutting-october" className="text-emerald-800 underline">خدمات 6 أكتوبر والشيخ زايد</a>. وإذا كان المشروع في الإسكندرية، استخدم <a href="/concrete-cutting-alexandria" className="text-emerald-800 underline">صفحة قص الخرسانة وفتحات الكور بالإسكندرية</a> للتواصل مع القسم المختص.</p>
 </Section>

 <Section id="request" title="اطلب فني كور: جهّز بيانات الفتحة">
 <p>تساعد البيانات التالية على مراجعة طلبك وتحديد الحاجة إلى معاينة، بدل تسعير فتحة لا تتضح ظروفها:</p>
 <ul className="list-disc space-y-2">
 <li>المنطقة والعنوان والطابق، وإمكانية الوصول لمكان الحفر من الجانبين.</li>
 <li>صورة عامة للمكان وصورة قريبة للموضع، ومخطط الخدمات إن توفر.</li>
 <li>عدد الفتحات واستخدام كل فتحة وقطرها، وسماكة الجدار أو السقف إن عُرفت.</li>
 <li>حالة التشطيب وقيود الصوت والمياه ومواعيد دخول المعدات.</li>
 <li>اعتماد المهندس عند ارتباط العمل بعنصر إنشائي.</li>
 </ul>
 <a href={REQUEST_WHATSAPP} className="mt-4 inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-6 py-4 font-bold text-white">جهّز طلب تخريم الكور على واتساب</a>
 <p className="mt-3 text-base">يفتح الرابط رسالة جاهزة لتكمل بياناتها وترفق الصور بنفسك؛ لا يؤكد حجزًا تلقائيًا. يمكنك أيضًا الاتصال على <a href={`tel:${PHONE_INT}`} className="text-emerald-800 underline"><bdi>{PHONE_NUM}</bdi></a>.</p>
 </Section>

 <Section
 id="faq"
  title="أسئلة قبل حجز صنايعي كور"
 >
 <div className="space-y-4">
 {faq.map((item, i) => (
 <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-emerald-300 transition">
 <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
 <span>{item.q}</span>
 <span className="text-emerald-600 group-open:rotate-180 transition p-1 bg-emerald-50 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
 </summary>
 <p className="mt-6 text-slate-700 leading-9 text-base bg-slate-50 p-5 md:p-8 rounded-[32px] border-r-8 border-emerald-500 shadow-inner">{item.a}</p>
 </details>
 ))}
 </div>
 </Section>

 </div>

 {/* SIDEBAR */}
 <aside className="space-y-6 min-w-0">
 <div className="p-8 rounded-[40px] bg-white border border-black/10 shadow-lg">
 <h3 className="font-extrabold text-2xl text-slate-900 mb-4">تنفيذ يبدأ بمراجعة الموقع</h3>
 <p className="text-slate-600 text-base leading-8 mb-6">
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
 <p className="text-emerald-100 text-base mb-6 leading-8">أرسل صور الموقع والمقاسات والعنوان لمراجعة الطلب وتحديد الحاجة إلى معاينة. نؤكد نطاق العمل والتكلفة والموعد قبل الحجز.</p>
 <Link
 href={REQUEST_WHATSAPP}
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
