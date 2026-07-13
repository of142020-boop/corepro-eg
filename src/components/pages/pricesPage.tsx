import React from 'react';
import { CheckCircle2, ShieldCheck, MapPin, Calculator, AlertCircle, Phone, Sparkles, Building2 } from "lucide-react";

const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;

const BRAND = "كور برو - Core Pro";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/prices`;
const PHONE = "01021507462";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201021507462";

function Section({ title, icon, children, id }: { title: string; icon?: React.ReactNode; children: React.ReactNode; id?: string }) {
 return (
 <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)] mb-10">
 <div className="mb-6">
 {icon && (
 <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5">
 {icon}
 </div>
 )}
 <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
 {title}
 </h2>
 </div>
 <div className="prose prose-slate max-w-none text-slate-700 leading-9">
 {children}
 </div>
 </section>
 );
}

export default function PricesPage() {
 const faq = [
 {
 q: "هل الأسعار المعروضة نهائية؟",
 a: "الأسعار المعروضة هي أسعار استرشادية، وقد تختلف قليلاً حسب طبيعة الجدار (طوب أم خرسانة، كثافة الحديد)، وموقع العمل. نؤكد لك السعر النهائي بعد المعاينة."
 },
 {
 q: "ما هو سعر فتحة الشفاط للمطبخ أو الحمام؟",
 a: "تخريم فتحة الشفاط بالكور يختلف حسب القطر المطلوب، لكننا نقدم باقات مجمعة (تخريم + تركيب الشفاط) تبدأ من أسعار تنافسية جداً لتوفير وقتك وتكلفتك."
 },
 {
 q: "كيف يتم حساب أسعار قص الخرسانة بالمنشار؟",
 a: "يتم حساب قص الخرسانة بناءً على (المتر الطولي) المضروب في (سمك الخرسانة). على سبيل المثال، قص سقف بسمك 15 سم يختلف عن قص جدار بسمك 25 سم."
 },
 {
 q: "هل تقدمون خصومات للمقاولين وأصحاب المشاريع الكبيرة؟",
 a: "بالتأكيد. يوجد خصم خاص للكميات (عدد الفتحات الكبيرة أو الأمتار الطولية العالية) وتسعير خاص للمقاولين والمكاتب الهندسية."
 },
 {
 q: "هل المعاينة مدفوعة أم مجانية؟",
 a: "المعاينة مجانية داخل القاهرة الكبرى، ويمكننا إعطائك عرض سعر تقريبي فوري من خلال إرسال صور وفيديو للموقع عبر الواتساب."
 }
 ];

 const jsonLdLocalBusiness = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 name: BRAND,
 url: DOMAIN,
 telephone: PHONE_INT,
 priceRange: "$$",
 description: "أفضل أسعار تخريم الخرسانة بالكور وأسعار قص الخرسانة في مصر.",
 address: { "@type": "PostalAddress", addressCountry: "EG", addressLocality: "Cairo", streetAddress: "مدينة نصر" },
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
 { "@type": "ListItem", position: 2, name: "أسعار قص الخرسانة والكور", item: CANONICAL },
 ],
 };

 return (
 <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdLocalBusiness, jsonLdFaq, jsonLdBreadcrumb]) }} />

 {/* HERO */}
 <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 border-b border-black/5">
 <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_50%_-20%,rgba(16,185,129,0.1),transparent)]" />
 <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center relative z-10">
 <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 mb-6 font-bold shadow-sm">
 
 تعرف على طريقة التسعير والعروض
 </div>
 <h1 className="text-2xl md:text-5xl font-black leading-tight text-slate-900 pr-4 break-words">
 أسعار قص الخرسانة وتخريم الكور في مصر
 </h1>
 <p className="mt-6 text-slate-700 leading-9 text-lg">
 نحن في <strong>{BRAND}</strong> نؤمن بالشفافية التامة. يعتمد التسعير لدينا على عوامل هندسية واضحة لضمان حصولك على أعلى جودة قص وتخريم بدون تكاليف خفية، وأفضل باقات تركيب الشفاطات.
 </p>
 </div>
 </section>

 <div className="mx-auto max-w-5xl px-4 pb-24">

 {/* Core Pricing */}
 <Section id="core-prices" title="أسعار فتحة الكور وتخريم الخرسانة" >
 <p className="mb-4">
 تختلف <strong>أسعار الفتحة الكور</strong> بناءً على عوامل أساسية: القطر المطلوب، وسُمك الحائط، ونوعه (خرسانة مسلحة أم مباني طوب).
 </p>
 <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-md mb-6">
 <table className="w-full text-sm border-collapse bg-white" style={{minWidth: "560px"}}>
 <thead>
 <tr className="bg-slate-900 text-white">
 <th className="p-4 text-right font-bold text-base w-1/4" style={{borderRadius: "0 12px 0 0"}}>نوع الفتحة / القطر</th>
 <th className="p-4 text-right font-bold text-base w-2/5">أبرز الاستخدامات</th>
 <th className="p-4 text-right font-bold text-base w-2/5" style={{borderRadius: "0 0 0 12px"}}>ملاحظات التسعير</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-slate-100 hover:bg-emerald-50 transition-colors">
 <td className="p-4 font-black text-slate-900 whitespace-nowrap">
 <span className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-bold mb-1">صغير</span>
 <div>1 – 2 بوصة</div>
 </td>
 <td className="p-4 text-slate-600 leading-7">لشنيشة الغاز، تأسيس السباكة الرفيعة.</td>
 <td className="p-4 text-slate-600 leading-7">تسعير اقتصادي للكميات للمقاولين والمجمعات.</td>
 </tr>
 <tr className="border-b border-slate-100 bg-slate-50 hover:bg-emerald-50 transition-colors">
 <td className="p-4 font-black text-slate-900 whitespace-nowrap">
 <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold mb-1">متوسط</span>
 <div>3 – 4 بوصة</div>
 </td>
 <td className="p-4 text-slate-600 leading-7">تهوية بسيطة، تصريف تكييف، مواسير صرف صحي.</td>
 <td className="p-4 text-slate-600 leading-7">سعر متوسط يختلف لـ (جدار طوب vs تسليح كثيف).</td>
 </tr>
 <tr className="hover:bg-emerald-50 transition-colors">
 <td className="p-4 font-black text-slate-900 whitespace-nowrap">
 <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold mb-1">كبير</span>
 <div>5 – 8 بوصة</div>
 </td>
 <td className="p-4 text-slate-600 leading-7"><strong>تخريم فتحة الشفاط</strong>، مداخن السخانات، والمصانع.</td>
 <td className="p-4 text-slate-600 leading-7">متوفر عرض (تخريم الكور + تركيب الشفاط) لتوفير التكلفة.</td>
 </tr>
 </tbody>
 </table>
 </div>
 <div className="flex gap-2 text-sm text-sky-800 bg-sky-50 p-4 rounded-xl border border-sky-100">
 
 <p><strong>تنويه:</strong> طلبات الفتحات الفردية (فتحة واحدة أو اثنتين لمطابخ المنازل) لها تكلفة زيارة مخصصة، بينما أسعار الكميات للمقاولين والمشروعات الكبرى تنخفض التكلفة للفتحة الواحدة بشكل ملحوظ.</p>
 </div>
 </Section>

 {/* Saw Pricing */}
 <Section id="saw-prices" title="أسعار قص الخرسانة بالمنشار وفتح الأبواب" >
 <p className="mb-4">
 لحساب <strong>تكلفة قص الخرسانة</strong> لفتح الأبواب والشبابيك، نعتمد على نظام محدد يحمي ميزانيتك ويضمن تنفيذاً آمناً باستخدام نظام التبريد المائي المانع للغبار. يتم الحساب كالتالي:
 </p>
 <ul className="space-y-3 mb-6 list-none p-0">
 <li className="flex gap-2 items-start"><span><strong>قياس المتر الطولي (Linear Meter):</strong> نقيس إجمالي أطوال خطوط القطع المطلوبة.</span></li>
 <li className="flex gap-2 items-start"><span><strong>سُمك القطاع (Thickness):</strong> سعر المنشار لجدار 15 سم أقل من سعر جدار خرساني 25 سم أو سقف سميك.</span></li>
 <li className="flex gap-2 items-start"><span><strong>نوع الماكينة (Equipment):</strong> قص صاروخ للأماكن الصغيرة، والقص بالمنشار الحائطي الكبير، أوقص الأرضيات (Slab Saw).</span></li>
 </ul>
 <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
 <h4 className="font-bold text-slate-900 mb-2"> عرض سعر لفتح باب:</h4>
 <p className="text-slate-700 text-sm leading-7">
 لفتح باب بمقاس قياسي مجاور (مثلاً 1 متر × 2.2 متر) في جدار من الطوب أو الخرسانة، يرجى تصوير الجدار والمكان من بعيد وتحديد أبعاد القطع المطلوبة وإرسالها لنا على الواتساب، وسنرسل لك التكلفة النهائية فوراً متضمنة تأمين الخرسانة وإجراء عملية القص دون تكسير.
 </p>
 </div>
 </Section>

 {/* Hoods Install Pricing */}
 <Section id="hood-packages" title="باقات تركيب شفاط المطبخ والحمام" >
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-white border-2 border-emerald-500 rounded-3xl p-6 shadow-md relative overflow-hidden">
 <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">الأكثر طلباً</div>
 <h3 className="font-extrabold text-xl text-slate-900 mb-2">الباقة الشاملة (تخريم وتركيب)</h3>
 <p className="text-slate-600 text-sm mb-4 border-b pb-4">تصلح لشفاطات المداخن والشفاطات العادية.</p>
 <ul className="space-y-2 text-sm text-slate-700 mb-6">
 <li className="flex items-center gap-2"> معاينة وتحديد المسار</li>
 <li className="flex items-center gap-2 font-bold"> تخريم الفتحة بالكور دون تكسير</li>
 <li className="flex items-center gap-2"> تركيب الشفاط الأساسي</li>
 <li className="flex items-center gap-2"> عزل الروائح وسد الفراغات بالكبرتون</li>
 </ul>
 </div>

 <div className="bg-white border border-slate-200 hover:border-emerald-300 transition rounded-3xl p-6 shadow-sm">
 <h3 className="font-extrabold text-xl text-slate-900 mb-2">باقة الفلتر الكربوني</h3>
 <p className="text-slate-600 text-sm mb-4 border-b pb-4">للشفاطات المخفية بلت إن والشفاطات المسطحة.</p>
 <ul className="space-y-2 text-sm text-slate-700 mb-6">
 <li className="flex items-center gap-2"> معاينة خزانة المطبخ</li>
 <li className="flex items-center gap-2"> تركيب الشفاط مسطح/بلت إن وتثبيته</li>
 <li className="flex items-center gap-2"> تركيب وإعداد الفلتر الكربوني</li>
 <li className="flex items-center gap-2 font-bold text-orange-600"> بدون الحاجة لأي تكسير أو تخريم كور</li>
 </ul>
 </div>
 </div>
 </Section>

 {/* FAQ */}
 <Section id="faq" title="الأسئلة المتكررة حول التكلفة">
 <div className="space-y-4">
 {faq.map((item, i) => (
 <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-emerald-300 transition">
 <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between text-lg">
 <span>{item.q}</span>
 <span className="text-emerald-500 group-open:rotate-180 transition p-1 bg-emerald-50 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
 </summary>
 <p className="mt-6 text-slate-700 leading-9 text-sm bg-slate-50 p-5 md:p-8 rounded-[32px] border-r-8 border-emerald-500 shadow-inner">
 {item.a}
 </p>
 </details>
 ))}
 </div>
 </Section>

 {/* Call to Action WhatsApp */}
 <div className="rounded-[40px] bg-slate-900 text-white shadow-xl overflow-hidden relative mt-4">
 <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_20%_20%,rgba(16,185,129,0.3),transparent)]" />
 <div className="p-10 text-center relative z-10 max-w-2xl mx-auto">
 <h2 className="text-3xl font-black mb-4">احصل على سعر فوري الآن!</h2>
 <p className="text-slate-300 mb-8 leading-8">
 لا تنتظر طويلاً.. صور مكان العمل وأرسله لنا في رسالة واتساب بسيطة مبيناً المطلوب،
 وسيقوم فريقنا الهندسي بالرد عليك بعرض السعر الإجمالي الفوري.
 </p>
 <div className="flex justify-center gap-4 flex-wrap">
 <Link href={WHATSAPP} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 md:px-10 md:py-5 font-black text-white shadow-lg hover:bg-emerald-700 transition transform hover:-translate-y-1 text-lg md:text-xl">
 <Phone className="w-5 h-5" /> واتساب للأسعار
 </Link>
 <Link href={`tel:${PHONE}`} className="inline-flex gap-2 items-center bg-white/10 hover:bg-white/20 border border-white/20 transition px-8 py-4 rounded-2xl font-bold text-xl">
 اتصال للإستفسار
 </Link>
 </div>
 <div className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
 <MapPin className="w-4 h-4" /> المعاينة مجانية بالمناطق المجاورة في القاهرة.
 </div>
 </div>
 </div>

 </div>
 </div>
 );
}
