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
import { MapPin, Maximize, Plus, Phone } from "lucide-react";

const BRAND = "كور برو - Core Pro";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/hoods`;
const PHONE_NUM = "01015218216";
const PHONE_INT = "+20" + PHONE_NUM.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201015218216";
const ADDRESS_TEXT = "الحي العاشر مدينة نصر";
const IMG_HERO = { src: "/images/hoods/fani-tarkib-shafat-matbakh.webp", width: 800, height: 800 };
const IMG_1 = { src: "/images/hoods/tarkib-shafat-hamam-1.webp", width: 800, height: 800 };
const IMG_2 = { src: "/images/hoods/tarkib-shafat-hamam-2.webp", width: 800, height: 800 };
const IMG_3 = { src: "/images/hoods/tarkib-shafat-hamam-3.webp", width: 800, height: 800 };

function Section({ title, subtitle, icon, children, id, level = 2 }: { title: string; subtitle?: string; icon?: React.ReactNode; children: React.ReactNode; id?: string; level?: 2 | 3; }) {
 const HeadingTag = level === 2 ? 'h2' : 'h3';
 return (
 <section id={id} className={`rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)] ${level === 3 ? 'mx-4 md:mx-8' : ''}`}>
 <div className="mb-6">
 
 <div>
 <HeadingTag className={`font-black tracking-tight text-slate-900 ${level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>{title}</HeadingTag>
 {subtitle ? (<p className="mt-2 text-slate-600 leading-7 font-semibold">{subtitle}</p>) : null}
 </div>
 </div>
 <div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div>
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

export default function HoodsPage() {
 const faq = [
 {
  q: "هل يمكن تأسيس فتحة لشفاط يطرد الهواء إلى الخارج؟",
  a: "بعد التأكد من أن موديل الشفاط يسمح بالطرد الخارجي، نراجع مسار الدكت وسماكة الجدار وموضع الخدمات قبل تحديد طريقة الفتحة ومقاسها. يساعد تخريم الكور على حصر العمل في موضع الفتحة، لكن حالة التشطيب والخرسانة وظروف الموقع تؤثر في النتيجة؛ لذلك نحتاج إلى صورة أو معاينة قبل تأكيد التنفيذ.",
 },
 {
  q: "كم يستغرق تركيب الشفاط؟",
  a: "تعتمد المدة على نوع الجهاز وما إذا كان هناك دكت أو فتحة جديدة، وطول المسار وحالة الجدار وإمكانية الوصول. نحدد الوقت المتوقع بعد معرفة الموديل وصور الموقع ونطاق الأعمال المطلوب.",
 },
 {
  q: "ما الفرق بين الشفاط ذي الطرد الخارجي والشفاط المعاد تدويره؟",
  a: "الشفاط ذو الطرد الخارجي يخرج الهواء عبر دكت، بينما يعيد النوع المعاد تدويره الهواء إلى الغرفة بعد مروره بمرشحات إذا كان الجهاز يدعم ذلك. راجع كتيب الموديل لمعرفة نوع التركيب والمرشحات المطلوبة؛ لا يعتمد قطر الفتحة أو الدكت على مقاس ثابت لجميع الأجهزة.",
 },
 {
  q: "هل يمكن تركيب شفاط حمام سقفي أو حائطي؟",
  a: "تُراجع أبعاد الجهاز ومكان التركيب ومسار الطرد ونقطة الكهرباء قبل تأكيد إمكانية التركيب. أما الشفاط المركزي المتصل بدكت فيحتاج إلى مراجعة مسار الشبكة وطولها والوصول إليها، وتُحدد الأعمال المطلوبة بحسب الموقع.",
 },
 {
  q: "هل تركبون شفاطات توشيبا وفريش وتورنيدو والشفاطات المدمجة؟",
  a: "أرسل اسم الماركة ورقم الموديل وصورة الجهاز ومكان التركيب لنتأكد من توافق المقاسات والملحقات ونطاق الخدمة قبل تحديد الموعد. تختلف طريقة التثبيت ومتطلبات الدكت والمرشحات بين الموديلات.",
 },
 {
  q: "كيف أختار بين الشفاط الهرمي والمسطح أو المدمج؟",
  a: "قارن مقاس الجهاز ومعدل تدفق الهواء ومستوى الصوت وطريقة الطرد وأبعاد الخزانة أو مكان التثبيت وفق مواصفات الشركة المصنّعة. لا يكفي شكل الشفاط أو مساحة المطبخ وحدهما للحكم على الملاءمة؛ أرسل الموديل ومقاسات المكان لمراجعتها.",
  },
  {
  q: "هل يمكن تركيب شفاط المطبخ في السقف المعلق؟",
  a: "يلزم أن يكون الموديل مناسباً للتركيب السقفي وأن تُراجع الحوامل وهيكل التحميل وفق دليل الجهاز وحالة السقف. لا تكفي فتحة في لوح الجبس لتحديد طريقة التثبيت؛ أرسل رقم الموديل وصورة السقف ومسار الدكت لمراجعتها.",
  },
  {
  q: "ما المعلومات المطلوبة لمعرفة تكلفة التركيب؟",
  a: "أرسل موديل الشفاط وصورة لمكان تركيبه ومقاس الفتحة إن وجدت، وطول مسار الدكت ونوع الجدار وموقع المشروع. تتأثر التكلفة بوجود فتحة جديدة أو دكت وملحقات إضافية وبإمكانية الوصول إلى الموقع.",
 },
 ];

 const jsonLdLocalBusiness = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 name: BRAND,
 url: DOMAIN,
 telephone: PHONE_INT,
 address: { "@type": "PostalAddress", addressCountry: "EG", addressLocality: "Cairo", streetAddress: ADDRESS_TEXT },
 areaServed: ["القاهرة", "الجيزة", "العاصمة الإدارية", "مدينة نصر", "التجمع الخامس", "6 أكتوبر", "الشيخ زايد", "المعادي", "القليوبية", "الإسكندرية"],
 sameAs: [DOMAIN, WHATSAPP],
 };

 const jsonLdService = {
 "@context": "https://schema.org",
 "@type": "Service",
  name: "تركيب شفاطات المطبخ والحمام وتأسيس الدكت",
 serviceType: "Kitchen Hood & Bathroom Exhaust Fan Installation",
 provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_INT, url: DOMAIN },
 areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "6 أكتوبر", "العاصمة الإدارية", "القليوبية", "الإسكندرية"],
 url: CANONICAL,
  description: "تركيب شفاطات المطبخ والحمام وتأسيس الدكت والفتحات وفق موديل الجهاز ومقاسات الموقع. تُراجع إمكانية الصيانة وقطع الغيار بحسب نوع العطل والموديل.",
 };

 const jsonLdFaq = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
 };

 const jsonLdBreadcrumb = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "الرئيسية", item: DOMAIN },
 { "@type": "ListItem", position: 2, name: "تركيب شفاط المطبخ", item: CANONICAL },
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
      "contentUrl": `${DOMAIN}/images/hoods/hero.webp`,
      "name": "تركيب شفاطات المطابخ - كور برو",
       "description": "صورة توضيحية لخدمة تركيب شفاطات المطابخ",
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
      contentUrl: `${DOMAIN}/images/hoods/tarkib-shafat-hamam-1.webp`,
      "name": "شفاطات مطابخ مركبة على السطح",
      "description": "شفاطات مطابخ بمنافذ خارجية محكمة مركبة على سطح المبنى",
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
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdLocalBusiness, jsonLdService, jsonLdFaq, jsonLdBreadcrumb, jsonLdSpeakable, ...jsonLdImageObjects]) }} />

 {/* HERO */}
 <section className="relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(249,115,22,0.15),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(234,179,8,0.12),transparent_55%)]" />
 <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
 <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
 <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
 <div>
 <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm text-orange-800 shadow-sm">
 
  <span>تركيب شفاطات · تأسيس دكت · تخريم حسب الموقع</span>
 </div>

 <h1 className="mt-4 text-2xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-orange-500 pr-4 break-words">
   تأسيس وتركيب شفاط المطبخ - 01015218216
 </h1>

 <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
 <p>
  نقدم خدمة تركيب شفاطات المطبخ والحمام، وتجهيز فتحة التهوية والدكت عند الحاجة. نراجع موديل الجهاز ومكانه وطريقة الطرد قبل تحديد الأعمال المطلوبة؛ أرسل صورة الملصق التعريفي للجهاز وصورة للموقع لتأكيد ملاءمة التركيب.
 </p>
 <p>
  يمكن تنسيق تخريم الكور وتركيب الشفاط والدكت ضمن نطاق عمل واحد إذا سمحت حالة الجدار ومواصفات الجهاز بذلك. يساعد الكور على حصر العمل حول فتحة دائرية، وقد تتأثر التشطيبات المجاورة بحالة السطح وطريقة الوصول؛ لذلك تُراجع الحماية واحتواء مياه التبريد قبل التنفيذ.
 </p>
 </div>

 <div className="mt-8 flex flex-wrap gap-4">
 <Link
 href={WHATSAPP}
 className="inline-flex items-center justify-center gap-3 rounded-2xl bg-orange-600 px-6 py-4 md:px-10 md:py-5 font-black text-white shadow-[0_20px_40px_rgba(249,115,22,0.3)] hover:bg-orange-700 transition transform hover:-translate-y-1 text-lg md:text-xl"
 >
 <Phone className="h-6 w-6" />
 احجز موعد التركيب
 </Link>
 </div>
 </div>

 <div className="rounded-none border-4 border-white bg-white shadow-2xl overflow-hidden p-4 relative">
 <div data-lightbox-src={IMG_HERO.src} className="relative aspect-square rounded-none overflow-hidden bg-slate-100 shadow-inner group w-full cursor-pointer">
 <Image src={IMG_HERO} alt="فني تركيب شفاط مطبخ محترف وتأسيس هوايات الشفاطات - كور برو" fill priority className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Maximize className="h-10 w-10" /></div>
 </div>
 <div className="p-4 grid grid-cols-3 gap-3">
 {[IMG_1, IMG_2, IMG_3].map((img, i) => (
 <div key={i} data-lightbox-src={img.src} className="relative aspect-[4/3] rounded-none overflow-hidden border-2 border-slate-100 shadow-sm group cursor-pointer">
 <Image src={img} alt={`أعمال فتح وتخريم وتركيب شفاطات مطبخ وحمام احترافية ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-none" />
 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Plus className="h-6 w-6" /></div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CONTENT */}
 <div className="mx-auto max-w-6xl px-4 pb-24">
 <div className="grid gap-10 lg:grid-cols-3">
 <div className="lg:col-span-2 space-y-10 min-w-0">
 <ServiceContents items={[{ id: 'hood-installation', label: 'خطوات تركيب شفاط المطبخ' }, { id: 'ceiling-hood', label: 'تركيب شفاط المطبخ في السقف' }, { id: 'hood-types-comparison', label: 'بمدخنة أم بدون مدخنة؟' }, { id: 'duct-installation', label: 'تركيب مدخنة ودكت الشفاط' }, { id: 'pricing', label: 'تكلفة التركيب' }, { id: 'faq', label: 'الأسئلة الشائعة' }]} />

  <Section id="why-us" title="ما الذي نراجعه قبل تركيب الشفاط؟" >
 <p>
  يعتمد أداء الشفاط على ملاءمة الجهاز للمكان، وطريقة طرد الهواء، ومسار الدكت ومقاساته، وجودة التوصيلات. وقد تتأثر النتيجة أيضاً بطول المسار والانحناءات أو انسداد المخرج.
 </p>
 <p className="mt-4">
  قبل عرض العمل نراجع موديل الشفاط وتعليمات تركيبه، ونقيس مكان التثبيت ومسار الطرد، ونتحقق من نوع الجدار وإمكانية تثبيت الجهاز وتمرير الدكت. تُحدد مقاسات الفتحات والملحقات من مواصفات الجهاز وظروف الموقع، لا من مقاس موحد لجميع الموديلات.
 </p>
 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
 {[
  { icon: null, title: "تحديد نطاق الخدمة", desc: "تأكيد تركيب الجهاز والملحقات المطلوبة قبل الموعد" },
  { icon: null, title: "مراجعة مسار الدكت", desc: "تحديد اتجاه الطرد وطول المسار وإمكانية تنفيذه" },
  { icon: null, title: "تجهيز الموقع", desc: "مناقشة حماية التشطيبات واحتواء مياه الحفر عند الحاجة" },
 ].map((f, i) => (
 <div key={i} className="p-5 bg-orange-50 border border-orange-100 rounded-3xl">
 <div className="flex items-center gap-2 mb-2">{f.icon}<h3 className="font-black text-slate-900 text-sm">{f.title}</h3></div>
 <p className="text-slate-600 text-xs leading-6">{f.desc}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section
 id="hood-installation"
  title="خطوات تركيب شفاط المطبخ والحمام"
  subtitle="يتحدد تسلسل العمل بعد مراجعة الجهاز ومكان التركيب وما إذا كانت هناك حاجة إلى فتحة أو دكت جديد."
 
 >
 <div className="space-y-6">
 {[
  { n: "1", t: "مراجعة الجهاز والموقع", d: "نطابق الموديل ومقاساته مع مكان التثبيت ونراجع تعليمات الشركة المصنّعة ومسار الطرد المقترح." },
  { n: "2", t: "تحديد الفتحة والتجهيزات", d: "إذا احتاج العمل فتحة جديدة، نراجع نوع الجدار والخدمات القريبة والمقاس المطلوب، ونحدد حماية التشطيبات واحتواء مياه التبريد." },
  { n: "3", t: "التثبيت وتوصيل الدكت", d: "يُركب الشفاط والدكت والملحقات المتفق عليها وفق تصميم الجهاز والموقع، مع إحكام الوصلات المتاحة." },
  { n: "4", t: "فحص التشغيل", d: "بعد التركيب، يُراجع ثبات الجهاز وعمل التشغيل والوصلات الظاهرة. يعتمد الأداء النهائي على مواصفات الجهاز ومسار الدكت وظروف الموقع." },
 ].map((s) => (
 <div key={s.n} className="flex gap-4">
 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white text-sm">{s.n}</div>
 <p><strong>{s.t}:</strong> {s.d}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section
 id="types"
 title="تركيب شفاط المطبخ الهرمي والمسطح والمدمج"
 subtitle="تختلف متطلبات التثبيت والتهوية بحسب تصميم الجهاز ومواصفاته ومكان تركيبه."
 
 >
 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تركيب شفاط هرمي بمدخنة</h3>
 <p className="text-slate-600 text-sm leading-7">
  قد يحتاج الشفاط الهرمي ذي الطرد الخارجي إلى مسار دكت وفتحة خروج. يُحدد موضع الخروج واتجاه الدكت بعد مراجعة دليل الجهاز والجدار وموقع الخدمات.
 </p>
 </div>
 <div className="p-6 bg-orange-50 border border-orange-100 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تركيب شفاط مطبخ مسطح</h3>
 <p className="text-slate-600 text-sm leading-7">
  يتطلب الشفاط المدمج مطابقة أبعاد الجهاز مع الخزانة ومساحة التهوية والخلوصات التي تحددها الشركة المصنّعة. أرسل رقم الموديل ومقاسات الوحدة قبل الحجز.
 </p>
 </div>
 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تركيب الشفاط في الشباك والزجاج</h3>
 <p className="text-slate-600 text-sm leading-7">
  قص الزجاج يحتاج إلى أداة وطريقة مخصصتين لنوع اللوح، ولا تُستخدم ماكينة تخريم الخرسانة لهذا الغرض. أرسل صورة النافذة لتحديد ما إذا كان العمل يتطلب فني زجاج منفصلاً.
 </p>
 </div>
 <div className="p-6 bg-sky-50 border border-sky-100 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تركيب شفاط حمام</h3>
 <p className="text-slate-600 text-sm leading-7">
  يتحدد تركيب الشفاط الحائطي أو السقفي بحسب أبعاد الجهاز ومسار الطرد ونقطة الكهرباء. أما الأنظمة المركزية فتحتاج إلى مراجعة شبكة الدكت وإمكانية الوصول إليها قبل تحديد نطاق العمل.
 </p>
 </div>
 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm">
  <h3 className="font-black text-slate-900 mb-2">تهوية المطابخ التجارية والمطاعم</h3>
 <p className="text-slate-600 text-sm leading-7">
  تتطلب أعمال المطاعم مراجعة المخطط ومسار الطرد وأبعاد الدكت ومكان المعدات قبل تقدير التنفيذ. يُحدد نطاق الخدمة بعد الاطلاع على المخططات والموقع، ولا يُعتمد قطر أو مسار موحد لكل مطبخ.
 </p>
 </div>
 <div className="p-6 bg-slate-800 text-white rounded-3xl shadow-lg border border-slate-700">
 <h3 className="font-black text-orange-400 mb-2">شفاطات مصانع وبلاورات صناعية</h3>
 <p className="text-slate-300 text-sm leading-7">
  تحتاج تهوية المصانع إلى تحديد معدل الهواء المطلوب وظروف التشغيل ومواصفات المعدات بواسطة المختص بالمشروع. أرسل وصف الاستخدام والمخطط ليتحدد ما إذا كان الطلب ضمن نطاق الخدمة.
 </p>
 </div>
 <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm">
  <h3 className="font-black text-slate-900 mb-2">فتحات مسار العادم للأجهزة</h3>
 <p className="text-slate-600 text-sm leading-7">
  يحدد فني مؤهل ومطلع على تعليمات الجهاز موضع العادم ومقاس الفتحة قبل أي حفر. حفر الفتحة لا يشمل توصيل جهاز الغاز أو تركيب المدخنة أو اعتماد سلامتها.
 </p>
 </div>
 </div>
 </Section>

  <Section
  id="preparation"
  title="تأسيس شفاط المطبخ وتركيب المداخن الخارجية"
  subtitle="يفيد تحديد مكان الجهاز ومسار الدكت قبل التشطيب عندما تسمح مرحلة المشروع بذلك."
  >
  <div className="space-y-6">
  <p>
   يشمل تأسيس الشفاط تحديد مكان الجهاز ومسار الطرد ومقاسات الدكت قبل التشطيب متى أمكن. وإذا كان المكان مشطباً بالفعل، نراجع الجدار والخدمات القريبة والتشطيبات وطريقة احتواء مياه الحفر قبل تقرير ملاءمة تخريم الكور.
  </p>
  <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100 mt-4">
   <h3 className="text-lg font-black text-slate-900 mb-2">ما نراجعه قبل تنفيذ الفتحة:</h3>
  <ul className="list-disc pr-5 space-y-2 text-sm text-slate-700 leading-7">
   <li>موديل الشفاط ومقاس فتحة الطرد والملحقات المطلوبة وفق دليل الجهاز.</li>
   <li>سماكة الجدار ومادته وموقع الخدمات والتشطيبات المحيطة به.</li>
   <li>مسار الدكت وطوله وعدد الانحناءات ومكان المخرج الخارجي.</li>
   <li>الحاجة إلى غطاء خارجي أو صمام، ومدى توافقه مع النظام والموقع.</li>
   <li>وسيلة حماية المكان واحتواء مياه التبريد والمخلفات عند التخريم.</li>
  </ul>
  </div>
  </div>
  </Section>

  <Section
  id="pricing"
  title="ما الذي يحدد تكلفة تركيب الشفاط؟"
  subtitle="تُقدّر التكلفة بعد معرفة موديل الجهاز ونطاق التجهيز المطلوب."
  >
  <p>تختلف تكلفة التركيب بحسب وجود فتحة أو دكت قائم، ومقاس الجهاز ومكانه وطول مسار الطرد، ونوع الجدار وسماكته وإمكانية الوصول إليه. وقد تضاف تكلفة الدكت أو الملحقات أو الإصلاحات إذا شملها الاتفاق.</p>
  <p className="mt-4">للحصول على تقدير، أرسل اسم الموديل أو صورة الملصق، وصورة مكان التركيب والجدار الخارجي إن وجد، وموقع المشروع، واذكر ما إذا كان لديك دكت أو فتحة جاهزة.</p>
  </Section>

  {/* Compare airflow modes */}
  <Section
    id="hood-types-comparison"
    title="تركيب شفاط المطبخ بمدخنة أم بدون مدخنة؟"
    subtitle="اختيار طريقة التشغيل يعتمد على موديل الشفاط وإمكانية تنفيذ مسار طرد مناسب."
  >
    <p>
      بعض الشفاطات تطرد الهواء إلى الخارج عبر دكت، بينما تدعم موديلات أخرى إعادة تدوير الهواء باستخدام مرشحات. راجع مواصفات الجهاز قبل الشراء، لأن توفر نمط التشغيل والمرشحات ومقاس المخرج يختلف بين الموديلات.
    </p>
    <div className="not-prose mt-6 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-right text-slate-800 min-w-[520px]">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="p-4 font-black text-slate-900 w-1/3">وجه المقارنة</th>
            <th className="p-4 font-black text-emerald-700 border-r border-slate-200 bg-emerald-50/50">شفاط بمدخنة خارجية</th>
            <th className="p-4 font-black text-orange-700 border-r border-slate-200 bg-orange-50/50">شفاط بدون مدخنة (فلتر كربوني)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            { aspect: 'طريقة العمل', with: 'يخرج الهواء إلى الخارج عبر دكت', without: 'يعيد الهواء إلى الغرفة بعد مروره بمرشحات إذا كان الجهاز يدعم ذلك' },
            { aspect: 'متطلبات التركيب', with: 'مسار دكت ومخرج مناسب وفق مواصفات الجهاز', without: 'مرشحات متوافقة ومراجعة تعليمات الموديل' },
            { aspect: 'الفتحة الخارجية', with: 'قد تتطلب فتحة؛ يحدد المقاس وفق المخرج والدكت والموقع', without: 'لا يحتاج إلى مخرج خارجي إذا كان الموديل مصمماً لإعادة التدوير' },
            { aspect: 'الصيانة', with: 'تنظيف الدكت ومراجعة المخرج حسب الاستخدام وتعليمات الجهاز', without: 'تنظيف أو استبدال المرشحات وفق تعليمات الشركة المصنّعة' },
            { aspect: 'ما يجب التحقق منه', with: 'إمكانية الوصول للمخرج ومسار الدكت', without: 'توافق الجهاز مع نوع المرشح المتاح' },
          ].map(row => (
            <tr key={row.aspect} className="hover:bg-slate-50 transition">
              <td className="p-4 font-bold text-slate-900 text-sm">{row.aspect}</td>
              <td className="p-4 border-r border-slate-200 text-emerald-700 text-sm">{row.with}</td>
              <td className="p-4 border-r border-slate-200 text-orange-700 text-sm">{row.without}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="not-prose mt-6 rounded-2xl bg-orange-50 border border-orange-200 p-5 text-sm text-slate-700 leading-7">
      <strong className="text-slate-900">قبل الاختيار:</strong> تأكد من نمط التشغيل الذي يدعمه الموديل، ومقاس المخرج، وإمكانية تمرير الدكت إلى الخارج. شارك رقم الموديل وصورة المكان لنراجع متطلبات التركيب، واتبع تعليمات الشركة المصنّعة للمرشحات والتنظيف. اقرأ أيضاً <a href="/blog/chimney-vs-carbon-filter-hood" className="text-orange-800 underline">مقارنة المدخنة والفلتر الكربوني قبل التركيب</a>.
    </div>
  </Section>

  {/* ── قسم جديد: تركيب دكت الشفاط ── */}
  <Section
    id="duct-installation"
    title="تركيب مدخنة شفاط مطبخ وتجهيز مسار الدكت"
    subtitle="مسار الدكت وطوله وملاءمته لمخرج الجهاز عوامل تؤثر في تدفق الهواء."
  >
    <p>
      يؤثر مسار الدكت وطوله وانحناءاته وتوافقه مع مخرج الجهاز في تدفق الهواء. تُراجع أبعاد <strong>ماسورة شفاط المطبخ</strong> والمخرج والملحقات وفق مواصفات الموديل ومكان التركيب قبل تحديد ما يلزم تنفيذه.
    </p>
    <div className="not-prose mt-6 grid gap-4 md:grid-cols-2">
      {[
        { t: 'دكت صلب', d: 'يُختار قطره ومادته بحسب مخرج الشفاط ومسار التركيب وتعليمات الشركة المصنّعة.' },
        { t: 'دكت مرن', d: 'قد يلائم بعض المسارات القصيرة أو الملتوية إذا سمحت مواصفات الجهاز؛ تُراجع الانحناءات والطول قبل التركيب.' },
        { t: 'الوصلات والتحويلات', d: 'يجب أن تتوافق مع مخرج الجهاز وأبعاد الدكت، مع مراجعة تأثير التحويلات على مسار الهواء.' },
        { t: 'المخرج الخارجي', d: 'يُختار غطاء المخرج وموضعه وفق ظروف الواجهة ومتطلبات الموقع وطريقة منع دخول العوامل الخارجية.' },
      ].map(x => (
        <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="font-black text-slate-900 mb-2 text-sm">{x.t}</div>
          <p className="text-slate-600 text-xs leading-6">{x.d}</p>
        </div>
      ))}
    </div>
    <p className="mt-6 text-sm text-slate-700 leading-7">
      أرسل موديل الشفاط وصورة مسار الدكت المقترح لمراجعة المقاس والملحقات ونطاق التركيب قبل تحديد الموعد.
    </p>
  </Section>

 <Section id="ceiling-hood" title="تركيب شفاط المطبخ في السقف أو فوق جزيرة" >
 <p>الشفاط السقفي أو المعلق فوق جزيرة يحتاج إلى موديل مصمم لهذا الاستخدام. تختلف طريقة تثبيته عن الشفاط الحائطي أو شفاط الحمام؛ تُراجع قدرة موضع التثبيت على حمل وزن الجهاز، والخلوص فوق سطح الطهي، ومسار الدكت والوصول للصيانة، وفق دليل الموديل.</p>
 <p className="mt-4">إذا كان هناك سقف معلق، يجب مراجعة هيكل التحميل والتثبيت مع المختص قبل تركيب الجهاز. أرسل صورة السقف ومقاساته ورقم الموديل ومكان الموقد؛ لا تعتمد ارتفاعاً أو حوامل موحدة لجميع الأجهزة.</p>
 <p className="mt-4 text-sm">توضح <a href="https://media3.bosch-home.com/Documents/9001482616_N.pdf" className="text-orange-800 underline">تعليمات Bosch لأحد موديلات الشفاط السقفي</a> أهمية مراجعة قدرة السقف والحوامل؛ تُطبق متطلبات كتيب جهازك المحدد عند التنفيذ.</p>
 </Section>

 <Section id="brands" title="تأكيد توافق الشفاط مع موقع التركيب" >
 <p className="mb-6">
  تختلف متطلبات التثبيت والفتحات والمرشحات حسب الموديل. أرسل اسم الماركة ورقم الموديل للتأكد من إمكانية تنفيذ الخدمة والملحقات المطلوبة قبل الحجز. تشمل الاستفسارات التي نستقبلها أجهزة من الماركات التالية:
 </p>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
 {[
 "شفاط توشيبا", "شفاط فريش", "شفاط تورنيدو",
 "شفاط أريستون", "شفاط بيكو", "شفاط KDK",
 "شفاط باناسونيك", "شفاط البا", "شفاط إليكا",
 "شفاط هانز", "شفاط بوش", "شفاط روبام",
 ].map((b) => (
 <div key={b} className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white p-3 text-sm font-bold text-slate-700">
 {b}
 </div>
 ))}
 </div>
 <div className="mt-6 bg-orange-50 border border-orange-100 rounded-2xl p-4 text-sm text-slate-700">
  <strong>ملاحظة:</strong> لا تعتمد مقاس فتحة موحداً؛ راجع قطر مخرج الجهاز والدكت المطلوب في دليل الموديل قبل التخريم. {' '}
 <a href="/core" className="font-bold text-orange-600 underline">تعرف على خدمة تخريم الكور</a>
 </div>
 </Section>

 <Section
 id="maintenance"
 title="صيانة شفاط المطبخ وإصلاح الأعطال"
  subtitle="تبدأ الصيانة بتحديد العطل والموديل وتوفر القطع المطلوبة."
 
 >
 <p>
  إلى جانب التركيب، يمكن مراجعة طلبات صيانة الشفاط بحسب نوع العطل والموديل. أرسل وصف المشكلة وصورة بيانات الجهاز لتأكيد إمكانية الفحص وتوفر قطع الغيار قبل تحديد موعد.
 </p>
 <div className="mt-6 grid gap-4 md:grid-cols-2">
 {[
  { problem: "الشفاط لا يعمل", solution: "يُراجع مصدر الكهرباء ومفتاح التشغيل، ثم يُقيّم العطل والموديل قبل تحديد الصيانة." },
  { problem: "صوت أو اهتزاز غير معتاد", solution: "يُفحص التثبيت والمروحة وما يمكن الوصول إليه؛ افصل الكهرباء قبل التنظيف واتبع دليل الجهاز." },
  { problem: "ضعف سحب الهواء", solution: "تُراجع المرشحات ومجرى الهواء والدكت والمخرج الخارجي بحسب تصميم الشفاط." },
  { problem: "رجوع الهواء أو الروائح", solution: "يُراجع نمط التشغيل ومسار الطرد والوصلات والملحقات المتوافقة مع الموديل." },
 ].map((item, i) => (
 <div key={i} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
 <p className="font-black text-slate-900 text-sm mb-1"> {item.problem}</p>
 <p className="text-slate-600 text-xs leading-6"> {item.solution}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section id="faq" title="الأسئلة الشائعة حول تركيب الشفاطات" >
 <div className="space-y-4">
 {faq.map((item, i) => (
 <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-orange-300 transition">
 <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between text-lg">
 <span>{item.q}</span>
 <span className="text-orange-500 group-open:rotate-180 transition p-1 bg-orange-50 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
 </summary>
 <p className="mt-6 text-slate-700 leading-9 text-sm bg-slate-50 p-5 md:p-8 rounded-[32px] border-r-8 border-orange-500 shadow-inner">{item.a}</p>
 </details>
 ))}
 </div>
 </Section>

 </div>

 {/* SIDEBAR */}
 <aside className="space-y-6 min-w-0">
 <div className="p-8 rounded-[40px] bg-white border border-black/10 shadow-lg">
  <h3 className="font-extrabold text-2xl text-slate-900 mb-4">قبل تحديد موعد التركيب</h3>
 <p className="text-slate-600 text-sm leading-7 mb-6">
  أرسل موديل الشفاط وصورة مكان التركيب وموقع المشروع لنراجع المتطلبات ونؤكد نطاق الخدمة والتغطية.
 </p>
 <div className="space-y-4">
  <StatPill  text="مراجعة موديل الجهاز" />
  <StatPill  text="مطابقة الدكت والفتحة" />
  <StatPill icon={<MapPin className="h-4 w-4 text-orange-500" />} text="تأكيد التغطية حسب العنوان" />
 </div>
 </div>

 <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
 <h3 className="font-extrabold text-lg text-slate-900 mb-3">خدمات مكملة</h3>
 <div className="space-y-2">
 {[
 { href: "/core", label: "تخريم الخرسانة بالكور" },
 { href: "/saw", label: "قص الخرسانة بالمنشار" },
 { href: "/wire", label: "قص بالواير الماسي" },
 { href: "/concrete-cutting-alexandria", label: "خدماتنا في الإسكندرية" },
 ].map((s) => (
 <a key={s.href} href={s.href} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-orange-600 hover:underline py-1">
 <span className="text-orange-500">›</span>{s.label}
 </a>
 ))}
 </div>
 </div>

 <div className="p-8 rounded-[40px] bg-orange-500 text-white shadow-xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
 <h3 className="font-black text-2xl mb-4">احجز فني التركيب</h3>
  <p className="text-orange-100 text-sm mb-6 leading-7">أرسل رقم الموديل وصورة الموقع لتحديد إمكانية التركيب والتجهيزات المطلوبة.</p>
 <Link href={WHATSAPP} className="block w-full text-center py-5 rounded-3xl bg-white text-orange-900 font-black text-xl hover:scale-[1.02] transition shadow-lg">
 تواصل واتسـاب
 </Link>
 </div>

 <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
  <h3 className="font-bold text-slate-900 mb-3 text-sm">مناطق الخدمة</h3>
  <p className="mb-3 text-xs leading-6 text-slate-600">تختلف إمكانية الوصول حسب عنوان المشروع والموعد؛ تواصل معنا لتأكيد التغطية.</p>
 <div className="flex flex-wrap gap-2">
 {["مدينة نصر", "التجمع الخامس", "المعادي", "الشيخ زايد", "6 أكتوبر", "العاصمة الإدارية", "الجيزة", "القليوبية", "الإسكندرية"].map((area) => (
 <span key={area} className="text-xs bg-slate-100 text-slate-700 rounded-full px-3 py-1 font-semibold">{area}</span>
 ))}
 </div>
 </div>
 </aside>
 </div>
 </div>
 </div>
 );
}
