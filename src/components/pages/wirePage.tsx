import React from 'react';
const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
 const actualSrc = typeof src === "object" ? src.src : src;
 const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
 const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
 const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
 return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} fetchPriority={fetchpriority} />;
};
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import { ShieldCheck, Target, Sparkles, Wrench, Ruler, BadgeCheck, MapPin, CheckCircle2, Building2, Cable, Construction, Phone, Maximize, Plus, Zap } from "lucide-react";
const BRAND = "كور برو - Core Pro";
const DOMAIN = "https://corepro-eg.com";
const PHONE_NUM = "01055550195";
const PHONE_INT = "+20" + PHONE_NUM.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "الحي العاشر مدينة نصر";
const CANONICAL = `${DOMAIN}/wire`;
const IMG_HERO = { src: "/images/wire/hero.webp", width: 800, height: 800 };
const IMG_1 = { src: "/images/wire/work-1.webp", width: 800, height: 800 };
const IMG_2 = { src: "/images/wire/work-2.webp", width: 800, height: 800 };
const IMG_3 = { src: "/images/wire/work-3.webp", width: 800, height: 800 };
function Section({ title, subtitle, icon, children, id, level = 2 }: { title: string; subtitle?: string; icon?: React.ReactNode; children: React.ReactNode; id?: string; level?: 2 | 3; }) {
 const HeadingTag = level === 2 ? 'h2' : 'h3';
 return (<section id={id} className={`rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)] ${level === 3 ? 'mx-4 md:mx-8' : ''}`}><div className="mb-6"><div><HeadingTag className={`font-black tracking-tight text-slate-900 ${level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>{title}</HeadingTag>{subtitle ? (<p className="mt-2 text-slate-600 leading-7 font-semibold">{subtitle}</p>) : null}</div></div><div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div></section>);
}
function StatPill({ icon, text }: { icon: React.ReactNode; text: string }) {
 return (<div className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm whitespace-nowrap">{icon}<span className="text-slate-700 font-extrabold">{text}</span></div>);
}
export default function WirePage() {
 const faq = [
 { q: "ما هو الحد الأقصى لسمك الخرسانة الذي يمكن قصه بالواير", a: "نظريا لا يوجد حد أقصى. يمكن قص سماكات مترية طالما يمكن تطويق الجسم الخرساني بالواير وتجهيز مسار التوجيه في المواقع الإنشائية الكبرى." },
 { q: "هل القص بالواير يقطع حديد التسليح داخل الخرسانة", a: "نعم تماما. الواير الماسي مصمم لاختراق أصلب أنواع الخرسانة والحديد الكثيف دفعة واحدة وبسطح قص أملس جدا." },
 { q: "هل تسبب عملية القص بالواير اهتزازات للمبنى", a: "إطلاقا. ميزة الواير الأساسية هي القص الصامت والسلس بدون أي اهتزازات مما يحمي أساسات الكباري والمباني المجاورة." },
 { q: "ما الفرق بين القص بالواير والقص بالمنشار", a: "منشار السكة (Track Saw) مناسب للسماكات حتى 70 سم وفتح الأبواب والشبابيك. أما الواير فيستخدم للسماكات المترية والكتل الضخمة كالأساسات والكباري والأعمدة الكبيرة التي لا يمكن للمنشار الوصول إليها." },
 { q: "ما تكلفة خدمة القص بالواير", a: "يتحدد السعر بناء على: سمك الخرسانة طول خط القطع كثافة التسليح وموقع العمل. اتصل بنا للحصول على عرض سعر فني بعد معاينة الموقع." },
 ];
 const jsonLdLocalBusiness = { "@context": "https://schema.org", "@type": "LocalBusiness", name: BRAND, url: DOMAIN, telephone: PHONE_INT, address: { "@type": "PostalAddress", addressCountry: "EG", addressLocality: "Cairo", streetAddress: ADDRESS_TEXT }, areaServed: ["مصر", "القاهرة", "الجيزة", "العاصمة الإدارية"], priceRange: "$$", openingHours: "Mo-Su 00:00-23:59", sameAs: [DOMAIN, WHATSAPP] };
 const jsonLdService = { "@context": "https://schema.org", "@type": "Service", name: "قص الخرسانة بالواير الماسي في مصر - Wire Sawing", serviceType: "Diamond Wire Sawing", provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_INT, url: DOMAIN }, areaServed: ["القاهرة الكبرى", "الجيزة", "مصر"], url: CANONICAL, description: "أفضل شركة قص خرسانة بالواير الماسي (Diamond Wire Sawing) للكباري والقواعد الخرسانية الضخمة في مصر. قص صامت بدون اهتزازات وبسماكات غير محدودة." };
 const jsonLdFaq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })) };

 const jsonLdBreadcrumb = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "الرئيسية", item: DOMAIN },
 { "@type": "ListItem", position: 2, name: "قص الخرسانة بالواير الماسي", item: CANONICAL },
 ],
 };

 return (
 <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdLocalBusiness, jsonLdService, jsonLdFaq, jsonLdBreadcrumb]) }} />
 <section className="relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(59,130,246,0.14),transparent_55%)]" />
 <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
 <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
 <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
 <div>
 <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm"><span>Wire Sawing · القص الماسي الصامت · سماكات غير محدودة</span></div>
 <h1 className="mt-4 text-2xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4 break-words">
 واير تقطيع خرسانة | قص الخرسانة المسلحة بالواير الماسي - 01055550195
 </h1>
 <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
 <p>نقدم في <strong>{BRAND}</strong> خدمة <strong>قص الخرسانة بالواير</strong> (Diamond Wire Sawing) للمشاريع الإنشائية العملاقة. هذه التقنية تتيح لنا <strong>تقطيع الخرسانة</strong> بسماكات ضخمة تتجاوز المترين مما يجعلها الخيار الأول في <strong>قص الكباري</strong> وقص القواعد الخرسانية العميقة دون التأثير على سلامة الهيكل المحيط.</p>
 <p>بفضل استخدام <strong>واير تقطيع خرسانة</strong> مرصع بالألماس نضمن لك قصا جراحيا دقيقا وهادئا تماما وبدون أي غبار أو اهتزازات. نحن من أفضل <strong>شركات تقطيع خرسانة</strong> المتخصصة في الحلول الهندسية الصعبة في مصر.</p>
 </div>
 <div className="mt-8 flex flex-wrap gap-4"><Link href={WHATSAPP} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-10 py-5 font-black text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition transform hover:-translate-y-1 text-xl"><Phone className="h-6 w-6" />اتصل بنا الآن</Link></div>
 </div>
 <div className="rounded-none border-4 border-white bg-white shadow-2xl overflow-hidden p-4 relative">
 <div data-lightbox-src={IMG_HERO.src} className="relative aspect-square rounded-none overflow-hidden bg-slate-100 shadow-inner group w-full cursor-pointer"><Image src={IMG_HERO} alt="واير تقطيع خرسانة - كور برو - Core Pro" fill priority className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" /><div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Maximize className="text-white h-10 w-10" /></div></div>
 <div className="p-4 grid grid-cols-3 gap-3">{[IMG_1, IMG_2, IMG_3].map((img, i) => (<div key={i} data-lightbox-src={img.src} className="relative aspect-[4/3] rounded-none overflow-hidden border-2 border-slate-100 shadow-sm group cursor-pointer"><Image src={img} alt={`قص خرسانة بالواير الماسي ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-none" /><div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Plus className="h-6 w-6" /></div></div>))}</div>
 </div>
 </div>
 </div>
 </section>
 <div className="mx-auto max-w-6xl px-4 pb-24">
 <div className="grid gap-10 lg:grid-cols-3">
 <div className="lg:col-span-2 space-y-10">
 <Section id="wire-sawing" title="ما هو نظام قص الخرسانة بالواير الماسي">
 <p>نظام <strong>القص بالواير</strong> (Diamond Wire Sawing) هو الحل النهائي لمشاكل السماكات الكبيرة التي يعجز عنها <Link href="/saw" className="text-emerald-700 underline hover:text-emerald-800">المنشار</Link> أو <Link href="/core" className="text-emerald-700 underline hover:text-emerald-800">الكور</Link>. يعتمد على حبل فولاذي مرن مرصع بحبيبات الألماس الصناعي يتم تمريره حول الكتلة المراد إزالتها ثم تسحبه ماكينة محركات هيدروليكية بسرعة مضبوطة لقطع الخرسانة والحديد في آن واحد وبهدوء تام.</p>
 <p className="mt-4">هذا النظام يتميز بالقدرة على <strong>تقطيع الكتل الخرسانية</strong> في أصعب الظروف والمساحات الضيقة — حيث لا يمكن توجيه منشار أو ماكينة كور تقليدية.</p>
 </Section>
 <Section id="features" title="مميزات تقنية Wire Sawing من Core Pro" subtitle="لماذا يختار المهندسون والمقاولون القص بالواير على بدائله">
 <div className="grid gap-4 md:grid-cols-2">
 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm"><h3 className="font-black text-slate-900 mb-2">سماكات غير محدودة</h3><p className="text-slate-600 text-sm">إمكانية قص كتل خرسانية يتجاوز سمكها 2 متر — مستحيلة مع المعدات التقليدية.</p></div>
 <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-3xl shadow-sm"><h3 className="font-black text-slate-900 mb-2">هدوء وصمت تام</h3><p className="text-slate-600 text-sm">بدون مطارق دقيقة أو اهتزازات مما يحمي الأساسات والمباني المجاورة.</p></div>
 <div className="p-6 bg-sky-50 border border-sky-100 rounded-3xl shadow-sm"><h3 className="font-black text-slate-900 mb-2">دقة قطع عالية</h3><p className="text-slate-600 text-sm">سطح قطع أملس ومستو بدون تشققات — جاهز للعمل مباشرة دون محارة.</p></div>
 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm"><h3 className="font-black text-slate-900 mb-2">بدون غبار</h3><p className="text-slate-600 text-sm">التبريد المائي يحول الأتربة إلى معجون سائل يسحب فورا — عملية نظيفة تماما.</p></div>
 </div>
 </Section>
 <Section id="applications" title="أبرز استخدامات قص الخرسانة بالواير في مصر" subtitle="التقنية المفضلة للمهندسين في المشاريع الكبرى والحالات الإنشائية الصعبة">
 <div className="space-y-6">
 {[
 { t: "قص الكباري والجسور الخرسانية", d: "إزالة أجزاء من الكباري المراد إعادة تأهيلها أو المصابة بالتدهور الإنشائي — وهو العملية الأصعب في مجال هدم المنشآت الإنشائية الخاصة." },
 { t: "قص أساسات المباني والقصور", d: "عند الحاجة لتعديل الأساسات أو إضافة طوابق جديدة يستخدم الواير لقص الأساسات الخرسانية العميقة بسلامة تامة." },
 { t: "إزالة قواعد الماكينات الثقيلة", d: "قص القواعد الخرسانية الضخمة للماكينات الصناعية في المصانع والورش بدون تدمير المبنى المحيط." },
 { t: "قص الملاجئ والأبنية المحصنة", d: "في المشاريع الحكومية والعسكرية التي تتطلب قص خرسانة كثيفة التسليح بسماكات تصل لأمتار." },
 ].map((app, i) => (<div key={i} className="flex gap-4"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white text-sm">{i + 1}</div><div><p className="font-bold text-slate-900">{app.t}</p><p className="text-slate-600 text-sm">{app.d}</p></div></div>))}
 </div>
 </Section>
 <Section id="comparison" title="متى تختار الواير مقارنة بالبدائل">
 <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-md">
 <table className="w-full text-sm border-collapse bg-white" style={{minWidth: "520px"}}>
 <thead>
 <tr className="bg-slate-900 text-white">
 <th className="p-4 text-right font-bold text-base" style={{borderRadius: "0 12px 0 0", width: "30%"}}>المعيار</th>
 <th className="p-4 text-center font-bold text-base" style={{width: "23%"}}>
 <span className="inline-flex flex-col items-center gap-1">
 <span className="text-emerald-400">واير ماسي</span>
 <span className="text-xs text-slate-400 font-normal">الأقوى</span>
 </span>
 </th>
 <th className="p-4 text-center font-bold text-base" style={{width: "23%"}}>
 <span className="inline-flex flex-col items-center gap-1">
 <span className="text-sky-400">منشار سكة</span>
 <span className="text-xs text-slate-400 font-normal">الأشهر</span>
 </span>
 </th>
 <th className="p-4 text-center font-bold text-base" style={{borderRadius: "0 0 0 12px", width: "23%"}}>
 <span className="inline-flex flex-col items-center gap-1">
 <span className="text-amber-400">كور دريل</span>
 <span className="text-xs text-slate-400 font-normal">للفتحات</span>
 </span>
 </th>
 </tr>
 </thead>
 <tbody>
 {[
 { c: "السماكة القصوى", w: "غير محدودة", s: "حتى 70 سم", k: "حتى 60 سم" },
 { c: "الاهتزازات", w: "صفر", s: "منخفضة جداً", k: "صفر" },
 { c: "الفتحات الدائرية", w: "غير متاح", s: "غير متاح", k: "متاح" },
 { c: "القطع المستقيم", w: "متاح", s: "متاح", k: "غير متاح" },
 { c: "تكلفة الخدمة", w: "قد تكون أعلى", s: "متوسطة", k: "منخفضة" },
 ].map((row, i) => (
 <tr key={i} className={`border-b border-slate-100 hover:bg-emerald-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
 <td className="p-4 font-bold text-slate-800 border-l border-slate-100">{row.c}</td>
 <td className="p-4 text-center font-bold text-emerald-700 border-l border-slate-100">{row.w}</td>
 <td className="p-4 text-center font-semibold text-sky-700 border-l border-slate-100">{row.s}</td>
 <td className="p-4 text-center text-slate-600">{row.k}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </Section>
 <Section id="process" title="مراحل تنفيذ عملية القص بالواير">
 <div className="space-y-5">{[{ n: "1", t: "المعاينة والدراسة الهندسية", d: "نزور الموقع لدراسة أبعاد الكتلة الخرسانية كثافة التسليح والمساحة المتاحة لتحديد طريقة التنفيذ الأمثل." },{ n: "2", t: "تثبيت الحكرات وتمرير الواير الماسي", d: "يتم تثبيت بكرات التوجيه حول الكتلة وتمرير الواير الماسي في مسار مضبوط بالليزر." },{ n: "3", t: "تشغيل الماكينة الهيدروليكية والتبريد", d: "تبدأ الماكينة في سحب الواير ببطء مع ضخ مستمر للمياه لضمان التبريد والقضاء على الغبار." },{ n: "4", t: "استخراج الكتلة بأمان", d: "بعد اكتمال القطع تستخرج الكتلة الخرسانية بالروافع الآلية (الكرين) بأمان تام دون ارتجاج." },].map((s) => (<div key={s.n} className="flex gap-4"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white text-sm">{s.n}</div><p><strong>{s.t}:</strong> {s.d}</p></div>))}</div>
 </Section>
 <Section id="faq" title="الأسئلة الشائعة حول القص بالواير">
 <div className="space-y-4">{faq.map((item, i) => (<details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-emerald-300 transition"><summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between"><span>{item.q}</span><span className="text-emerald-600 group-open:rotate-180 transition p-1 bg-emerald-50 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span></summary><p className="mt-4 text-slate-600 leading-8 text-sm bg-slate-50 p-6 rounded-2xl border-r-4 border-emerald-500 shadow-inner">{item.a}</p></details>))}</div>
 </Section>
 </div>
 <aside className="space-y-6">
 <div className="p-8 rounded-[40px] bg-white border border-black/10 shadow-lg"><h3 className="font-extrabold text-2xl text-slate-900 mb-4">نحـن خيـارك الأول</h3><p className="text-slate-600 text-sm leading-7 mb-6">نوفر خدمات <strong>قص الخرسانة بالواير</strong> للمشروعات القومية والخاصة بأعلى دقة إنشائية ومعدات حديثة.</p><div className="space-y-4"><StatPill  text="تأمين كامل للموقع" /><StatPill  text="سرعة في التنفيذ" /><StatPill icon={<MapPin className="h-4 w-4 text-emerald-600" />} text="نغطي كافة المحافظات" /></div></div>
 <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm"><h3 className="font-extrabold text-lg text-slate-900 mb-3">خدمات أخرى</h3><div className="space-y-2">{[{ href: "/saw", label: "قص الخرسانة بالمنشار" },{ href: "/core", label: "تخريم الخرسانة بالكور" },{ href: "/hoods", label: "تركيب شفاطات المطبخ" }].map((s) => (<a key={s.href} href={s.href} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700 hover:underline py-1"><span className="text-emerald-600">›</span>{s.label}</a>))}</div></div>
 <div className="p-8 rounded-[40px] bg-emerald-600 text-white shadow-xl relative overflow-hidden group"><div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" /><h3 className="font-black text-2xl mb-4">اطلب متخصص واير</h3><p className="text-emerald-100 text-sm mb-6 leading-7">سيقوم فريقنا بمعاينة الموقع وتقديم عرض سعر فني متكامل للبدء فورا.</p><Link href={WHATSAPP} className="block w-full text-center py-5 rounded-3xl bg-white text-emerald-900 font-black text-xl hover:scale-[1.02] transition shadow-lg">تواصل واتسـاب</Link></div>
 </aside>
 </div>
 </div>
 </div>
 );
}
