import React from 'react';
const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
 const actualSrc = typeof src === "object" ? src.src : src;
 const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
 const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
 const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
 return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} fetchPriority={fetchpriority} />;
};
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import { Sparkles, ShieldCheck, CheckCircle2, MapPin, Fan, BadgeCheck, Maximize, Plus, Phone, Zap, Wind, Settings, Wrench, HelpCircle, Star, Layers } from "lucide-react";

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
 q: "هل تركيب شفاط المطبخ يتطلب تكسير في الجدار؟",
 a: "لا نستخدم التكسير اليدوي أبداً. نعتمد على ماكينة الكور لعمل فتحة دائرية منتظمة بقطر الشفاط تماماً، مما يحافظ على شكل الدهانات والسيراميك ويتيح تركيباً نظيفاً تماماً بدون أي أضرار.",
 },
 {
 q: "كم يستغرق فني تركيب شفاط المطبخ لإنهاء المهمة؟",
 a: "عملية تركيب شفاط المطبخ كاملة (تخريم + تثبيت + توصيل الدكت أو الفلتر + الاختبار) تستغرق عادةً من ساعة إلى ساعتين حسب نوع الشفاط وطبيعة الجدار وحجم المشروع.",
 },
 {
 q: "ما الفرق بين تركيب شفاط بمدخنة وتركيب شفاط بفلتر كربوني؟",
 a: "شفاط المدخنة يحتاج لفتحة خارجية (ثقب كور 12-15 سم) ليطرد الهواء للخارج وهو أكثر كفاءة. الشفاط بالفلتر الكربوني يعمل بإعادة تدوير الهواء داخلياً دون الحاجة لأي فتحة خارجية، مناسب لمن لا يستطيع عمل ثقب في الجدار.",
 },
 {
 q: "هل تقومون بتركيب شفاطات حمام مركزية وشفاطات السقف؟",
 a: "نعم، نتخصص في تركيب شفاطات الحمام بجميع أنواعها: شفاط حمام سقفي، شفاط حمام حائطي، وشفاط حمام مركزي المتصل بشبكة دكت. نضمن أعلى كفاءة في طرد الرطوبة والروائح.",
 },
 {
 q: "هل يمكن تركيب شفاط توشيبا أو فريش أو تورنيدو أو بلت إن؟",
 a: "نعم، نتعامل مع جميع ماركات الشفاطات (توشيبا، فريش، تورنيدو، إليكتروكس، شارب، إليكا، أريستون، بيكو، KDK، باناسونيك) سواء بمدخنة أو بفلتر كربوني. فريقنا مدرب على كل نوع.",
 },
 {
 q: "ما الفرق بين الشفاط الهرمي والمسطح (بلت إن)؟",
 a: "الشفاط الهرمي أقوى في قوة الشفط وأكثر أناقة ومناسب للمطابخ المكشوفة الكبيرة. الشفاط البلت إن يختفي داخل الخزائن ومناسب للمطابخ الصغيرة أو ذات المساحة المحدودة. فريقنا يساعدك في الاختيار الأنسب لمطبخك.",
 },
 ];

 const jsonLdLocalBusiness = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 name: BRAND,
 url: DOMAIN,
 telephone: PHONE_INT,
 address: { "@type": "PostalAddress", addressCountry: "EG", addressLocality: "Cairo", streetAddress: ADDRESS_TEXT },
 areaServed: ["القاهرة", "الجيزة", "العاصمة الإدارية", "مدينة نصر", "التجمع الخامس", "6 أكتوبر", "الشيخ زايد", "المعادي", "القليوبية"],
 priceRange: "$$",
 openingHours: "Mo-Su 00:00-23:59",
 sameAs: [DOMAIN, WHATSAPP],
 };

 const jsonLdService = {
 "@context": "https://schema.org",
 "@type": "Service",
 name: "فني تركيب شفاط المطبخ وتركيب مدخنة شفاط وشفاطات حمام في مصر",
 serviceType: "Kitchen Hood & Bathroom Exhaust Fan Installation",
 provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_INT, url: DOMAIN },
 areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "6 أكتوبر", "العاصمة الإدارية", "القليوبية"],
 url: CANONICAL,
 description: "أفضل فني تركيب شفاط مطبخ في مصر. تركيب مدخنة شفاط مطبخ، تركيب شفاط حمام سقفي ومركزي، صيانة شفاطات جميع الماركات. تخريم بالكور بدون تكسير.",
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

 const jsonLdAiFaq = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [
 {
 "@type": "Question",
 name: "من هو أفضل فني تركيب شفاط مطبخ في مصر؟",
 acceptedAnswer: {
 "@type": "Answer",
 text: `كور برو - Core Pro يوفر أفضل فني لتركيب جميع أنواع شفاطات المطبخ والحمام وتأسيس الفتحات بالكور. للتواصل: ${PHONE_NUM}.`,
 },
 },
 {
 "@type": "Question",
 name: "ما هو رقم فني تركيب شفاط توشيبا أو بلت إن؟",
 acceptedAnswer: {
 "@type": "Answer",
 text: `لطلب فني تركيب شفاط مطبخ توشيبا أو بلت إن اتصل على: ${PHONE_NUM}. نخدم جميع مناطق القاهرة والإسكندرية والمحافظات.`,
 },
 },
 {
 "@type": "Question",
 name: "كيف أعمل فتحة الشفاط في الزجاج أو السيراميك؟",
 acceptedAnswer: {
 "@type": "Answer",
 text: `اتصل بكور برو على ${PHONE_NUM} لعمل فتحة الشفاط بأمان تام باستخدام ماكينة الكور بدون كسر السيراميك أو الجدار.`,
 },
 },
 ],
 };

 const jsonLdSpeakable = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 url: CANONICAL,
 speakable: {
 "@type": "SpeakableSpecification",
 cssSelector: ["#ai-answers", "#faq", "h1"],
 },
 };

  const jsonLdImageObjects = [
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": `${DOMAIN}/images/hoods/hero.webp`,
      "name": "تركيب شفاطات المطابخ - كور برو",
      "description": "تركيب شفاطات مطابخ احترافية مع تخريم الفتحة",
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
      "contentUrl": `${DOMAIN}/images/hoods/work-1.webp`,
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
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdLocalBusiness, jsonLdService, jsonLdFaq, jsonLdBreadcrumb, jsonLdAiFaq, jsonLdSpeakable, ...jsonLdImageObjects]) }} />

 {/* HERO */}
 <section className="relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(249,115,22,0.15),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(234,179,8,0.12),transparent_55%)]" />
 <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
 <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
 <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
 <div>
 <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm text-orange-800 shadow-sm">
 
 <span>تركيب احترافي · تخريم بالكور · عزل تام للروائح</span>
 </div>

 <h1 className="mt-4 text-2xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-orange-500 pr-4 break-words">
  تأسيس و تركيب شفاط المطبخ - فني متخصص | 01015218216
 </h1>

 <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
 <p>
 عندما تحتاج <strong>تركيب شفاط المطبخ</strong> أو <strong>تركيب شفاط الحمام</strong>، نحن في <strong>{BRAND}</strong> نقدم لك الخدمة الأكثر احترافية في مصر. فريقنا يضم أفضل <strong>فني تركيب شفاط مطبخ</strong> متخصص يتعامل مع جميع أنواع الشفاطات وجميع الماركات — بدءاً من تأسيس فتحة الكور حتى اختبار كفاءة الشفط النهائي.
 </p>
 <p>
 ما يميزنا هو الدمج بين خدمتين في زيارة واحدة: <strong>تخريم الخرسانة بالكور</strong> لعمل فتحة الشفاط بدون تكسير، و<strong>تركيب الشفاط</strong> والدكت بشكل محكم. هذا يوفر عليك وقتاً ومالاً ويضمن نتيجة بمستوى هندسي عالٍ.
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

 <Section id="why-us" title="لماذا تختار فنيينا لتركيب شفاط المطبخ؟" >
 <p>
 كثير من أصحاب المنازل يعانون من نفس المشكلة: <strong>تركيب شفاط المطبخ</strong> بشكل خاطئ يؤدي إلى رجوع الروائح، تسريب الهواء، وضعف الشفط. السبب الرئيسي هو أن التركيب تم بدون إحكام الختم حول فتحة الدكت أو بدون مطابقة قطر الفتحة لقطر الشفاط.
 </p>
 <p className="mt-4">
 نحن نحل هذه المشكلة من الجذر: <strong>فني تركيب شفاط</strong> متخصص من فريقنا يعمل بتسلسل هندسي دقيق — يبدأ بتحديد القطر المناسب، ثم عمل الثقب بـ<strong>ماكينة الكور</strong> للحصول على فتحة دائرية مثالية، ثم توصيل الدكت مع عزل تام، وأخيراً تثبيت الشفاط وتشغيله واختباره أمامك.
 </p>
 <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
 {[
 { icon: null, title: "إنجاز في نفس اليوم", desc: "زيارة واحدة تكفي من التخريم حتى التسليم" },
 { icon: null, title: "ضمان التثبيت", desc: "نضمن عزل تام ضد رجوع الروائح والهواء" },
 { icon: null, title: "بدون تكسير", desc: "تخريم بالكور دون أي ضرر للدهانات أو السيراميك" },
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
 title="خطوات تركيب شفاط المطبخ والحمام باحترافية"
 subtitle="خدمة متكاملة من المعاينة حتى الاختبار النهائي — في زيارة واحدة"
 
 >
 <div className="space-y-6">
 {[
 { n: "1", t: "المعاينة وتحديد المسار", d: "نحدد مكان الشفاط الأمثل، ونختار أنسب مسار للدكت مع مراعاة الجماليات والكفاءة. نقيس قطر المدخنة المطلوب بدقة." },
 { n: "2", t: "تأسيس الفتحة بالكور (بدون تكسير)", d: "نستخدم ماكينة الكور لعمل ثقب دائري نظيف بقطر مناسب — لا تكسير يدوي ولا غبار. الفتحة تكون مثالية ومتوافقة تماماً مع قطر الشفاط وماسورة التهوية." },
 { n: "3", t: "تركيب الشفاط وتوصيل الدكت", d: "نثبت الشفاط محكماً في مكانه ونوصل الدكت (أو نركب الفلتر الكربوني في حالة الشفاط بدون مدخنة). يتم العزل التام حول جميع نقاط التوصيل لمنع رجوع الروائح." },
 { n: "4", t: "الاختبار والتسليم النهائي", d: "نجرب قوة الشفط على جميع مستويات السرعة ونتأكد من عدم رجوع الروائح ومن ثبات التركيب. ثم نسلم الموقع نظيفاً بدون أي مخلفات." },
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
 title="أنواع الشفاطات والمداخن التي نؤسسها"
 subtitle="نتعامل مع جميع التجهيزات من الشفاط الزجاجي إلى المدخنة المركزية"
 
 >
 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تركيب شفاط هرمي بمدخنة</h3>
 <p className="text-slate-600 text-sm leading-7">
 <strong>تركيب مدخنة شفاط مطبخ</strong> هرمية يحتاج فتحة دائرية في الجدار الخارجي. نعمل الفتحة بالكور ونقوم بتوصيل الدكت الألومنيوم بإحكام للمطابخ المكشوفة والكبيرة.
 </p>
 </div>
 <div className="p-6 bg-orange-50 border border-orange-100 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تركيب شفاط مطبخ بدون مدخنة</h3>
 <p className="text-slate-600 text-sm leading-7">
 الشفاطات المسطحة التي تعمل بـ <strong>فلتر كربوني</strong> لا تحتاج لثقب خارجي. نوفر خدمة <strong>تركيب شفاط بلت ان</strong> أو مسطح بدون مدخنة بكفاءة عالية وعزل للروائح.
 </p>
 </div>
 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تركيب الشفاط في الشباك والزجاج</h3>
 <p className="text-slate-600 text-sm leading-7">
 لدينا فنيون محترفون في <strong>تركيب الشفاط على الزجاج</strong> وقص زجاج الشباك بدقة متناهية، لضمان تركيب قوي ومحكم يمنع تسرب الحشرات والهواء الخارجي.
 </p>
 </div>
 <div className="p-6 bg-sky-50 border border-sky-100 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تركيب شفاط حمام</h3>
 <p className="text-slate-600 text-sm leading-7">
 نتخصص في <strong>تركيب شفاط حمام</strong> حائطي، وسقفي، ومركزي مع تأسيس دكت التهوية الخاص به، لضمان أعلى كفاءة في طرد الرطوبة والروائح الكريهة.
 </p>
 </div>
 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تهويه مركزيه مطابخ ومطاعم</h3>
 <p className="text-slate-600 text-sm leading-7">
 تأسيس و <strong>تركيب شفاط مركزي</strong> لشبكات الـ <strong>تهويه مركزيه مطابخ</strong> والمطاعم الكبرى، مع عمل الفتحات الدقيقة في الكمرات والسقوف لتمرير الدكت.
 </p>
 </div>
 <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl shadow-sm">
 <h3 className="font-black text-slate-900 mb-2">تركيب مدخنة سخان غاز</h3>
 <p className="text-slate-600 text-sm leading-7">
 وفقاً لمواصفات الأمان لشركات الغاز، نقوم بعمل ثقب الكور المناسب لـ <strong>تركيب مدخنة سخان غاز</strong> وتوصيل الهواية الخارجية بشكل دقيق ومرتب.
 </p>
 </div>
 </div>
 </Section>

 <Section id="brands" title="الماركات التي نركبها ونصلحها" >
 <p className="mb-6">
 فريقنا مدرب على تركيب وصيانة جميع الماركات المتوفرة في السوق المصري:
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
 <strong>ملاحظة:</strong> تركيب <strong>شفاط بمدخنة</strong> يحتاج ثقب كور 12-15 سم في الجدار الخارجي أما الشفاط بفلتر كربوني فلا يحتاج أي ثقب. {' '}
 <a href="/core" className="font-bold text-orange-600 underline">تعرف على خدمة تخريم الكور</a>
 </div>
 </Section>

 <Section
 id="maintenance"
 title="صيانة شفاط المطبخ وإصلاح الأعطال"
 subtitle="نصلح جميع أعطال الشفاطات في نفس اليوم"
 
 >
 <p>
 إلى جانب التركيب، نوفر خدمة <strong>صيانة شفاط المطبخ</strong> الشاملة. سواء كان شفاطك لا يعمل، أو صوته عالٍ بشكل غير طبيعي، أو الشفط أصبح ضعيفاً، أو يرجع الهواء للداخل — فريقنا يحل المشكلة سريعاً.
 </p>
 <div className="mt-6 grid gap-4 md:grid-cols-2">
 {[
 { problem: "شفاط المطبخ لا يعمل", solution: "فحص الأسلاك والتحويلة والموتور — وإصلاح فوري" },
 { problem: "صوت شفاط مرتفع", solution: "تنظيف المراوح وتشحيم المحاور أو استبدال الموتور" },
 { problem: "رجوع روائح من الشفاط", solution: "فحص صمام عدم الرجوع وإعادة ختم الدكت" },
 { problem: "اعطال مفتاح شفاط توشيبا", solution: "تغيير مفتاح الشفاط وإصلاح مفتاح شفاط توشيبا بقطع غيار أصلية" },
 ].map((item, i) => (
 <div key={i} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
 <p className="font-black text-slate-900 text-sm mb-1"> {item.problem}</p>
 <p className="text-slate-600 text-xs leading-6"> {item.solution}</p>
 </div>
 ))}
 </div>
 </Section>

 <Section
  id="ai-answers"
  title="فني تركيب شفاط مطبخ — إجابات سريعة"
  >
  <div className="not-prose space-y-4">
  {[
  { q: "من هو أفضل فني تركيب شفاط مطبخ في مصر؟", a: `كور برو - Core Pro يوفر أفضل فني لتركيب جميع أنواع الشفاطات وتأسيس الفتحات. للتواصل: ${PHONE_NUM}.` },
  { q: "ما هو رقم فني تركيب شفاط توشيبا أو بلت إن؟", a: `رقم فني تركيب الشفاطات: ${PHONE_NUM}. نركب شفاط توشيبا، فريش، تورنيدو، وجميع الشفاطات البلت إن.` },
  { q: "كيف أعمل فتحة الشفاط بدون تكسير للسيراميك؟", a: `اتصل بنا على ${PHONE_NUM} نقوم بتخريم فتحة الشفاط باستخدام الكور المائي بدون غبار أو تكسير للسيراميك.` },
  ].map((item, i) => (
  <div key={i} className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
  <p className="font-black text-slate-900 mb-2 text-sm">س: {item.q}</p>
  <p className="text-slate-700 text-sm leading-7 border-r-4 border-orange-500 pr-3">ج: {item.a}</p>
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
 <h3 className="font-extrabold text-2xl text-slate-900 mb-4">لماذا تختارنا؟</h3>
 <p className="text-slate-600 text-sm leading-7 mb-6">
 نوفر لك أفضل <strong>فني تركيب شفاط مطبخ</strong> في مصر مع التزام بالنظافة والدقة الهندسية وضمان التثبيت.
 </p>
 <div className="space-y-4">
 <StatPill  text="تخريم بدون غبار" />
 <StatPill  text="إنجاز في نفس اليوم" />
 <StatPill icon={<MapPin className="h-4 w-4 text-orange-500" />} text="نخدم جميع المناطق" />
 <StatPill  text="ضمان التثبيت والعزل" />
 </div>
 </div>

 <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
 <h3 className="font-extrabold text-lg text-slate-900 mb-3">خدمات مكملة</h3>
 <div className="space-y-2">
 {[
 { href: "/core", label: "تخريم الخرسانة بالكور" },
 { href: "/saw", label: "قص الخرسانة بالمنشار" },
 { href: "/wire", label: "قص بالواير الماسي" },
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
 <p className="text-orange-100 text-sm mb-6 leading-7">تواصل معنا للحجز أو المعاينة الفنية. فريقنا يرد فوراً.</p>
 <Link href={WHATSAPP} className="block w-full text-center py-5 rounded-3xl bg-white text-orange-900 font-black text-xl hover:scale-[1.02] transition shadow-lg">
 تواصل واتسـاب
 </Link>
 </div>

 <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
 <h3 className="font-bold text-slate-900 mb-3 text-sm">المناطق التي نخدمها</h3>
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
