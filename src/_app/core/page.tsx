import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
} from "lucide-react";

const BRAND = "كور برو - Core Pro";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/core`;
const PHONE_NUM = "01055550195";
const PHONE_INT = "+20" + PHONE_NUM.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = " الحي العاشر مدينة نصر";

const SERVICE_NAME = "تخريم الخرسانة بالكور";
const FOCUS_KEYWORD = "صنايعي كور";

const IMG_HERO = "/images/core/hero.webp";
const IMG_1 = "/images/core/work-1.webp";
const IMG_2 = "/images/core/work-2.webp";
const IMG_3 = "/images/core/work-3.webp";

/** Title كما كان في الصفحة القديمة */
export const metadata: Metadata = {
 title: "صنايعي كور في مصر - 01055550195",
 description:
 "أفضل صنايعي كور في مصر لعمل فتحات في الخرسانة وتخريم السقف والكمر بدقة. نستخدم ماكينة كور تخريم الخرسانة لعمل فتحات الغاز، التكييف، والسباكة بأسعار تنافسية وبدون تكسير.",
 alternates: { canonical: CANONICAL },
 openGraph: {
 type: "website",
 url: CANONICAL,
 title: "صنايعي كور في اي مكان في مصر - 01055550195",
 description:
 "أفضل صنايعي كور في مصر لعمل فتحات في الخرسانة وتخريم السقف والكمر بدقة. نستخدم ماكينة كور تخريم الخرسانة لعمل فتحات الغاز، التكييف، والسباكة بأسعار تنافسية وبدون تكسير.",
 siteName: BRAND,
 locale: "ar_EG",
 },
 robots: { index: true, follow: true },
};

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
 <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
 {title}
 </h2>
 {subtitle ? (
 <p className="mt-2 text-slate-600 leading-7">{subtitle}</p>
 ) : null}
 </div>
 </div>
 {children}
 </section>
 );
}

function StatPill({ icon, text }: { icon: React.ReactNode; text: string }) {
 return (
 <div className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm">
 {icon}
 <span className="text-slate-700">{text}</span>
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
 <p className="mt-3 text-slate-600 leading-7">{desc}</p>
 </div>
 );
}

export default function CorePage() {
 /**
 * FAQ محسّن + يضمن وجود الكلمات المفتاحية داخل الأسئلة/الإجابات
 * مهم: لا تغيّر نص الكلمات المفتاحية داخل الإجابات.
 */
 const faq = [
 {
 q: "هل تخريم الخرسانة بالكور آمن؟ وهل يصلح لـ تخريم الخرسانة المسلحة؟",
 a: "نعم. تخريم الخرسانة بالكور هو الحل الهندسي الأكثر أمانًا خاصة في تخريم الخرسانة المسلحة لأنه يقلّل الاهتزازات مقارنة بالتكسير. نستخدم ماكينة كور تخريم الخرسانة مع تبريد مائي وتثبيت دقيق للحصول على فتحة الكور منتظمة دون شروخ.",
 },
 {
 q: "ما الفرق بين دريل كور وكور دريل وبين التكسير بالهيلتي؟",
 a: "دريل كور أو كور دريل (Core Drill) يعطي فتحة كور دائرية بالمقاس المطلوب بدون تكسير. التكسير بالهيلتي قد يسبب شروخ ومحارة ساقطة وفتحات غير منتظمة. جهاز تخريم الخرسانه أو ماكينة الكور يضمن دقة أعلى ونظافة أفضل وسرعة تنفيذ.",
 },
 {
 q: "هل يمكن عمل فتحات الغاز؟ وهل الفتحة تكون مطابقة للمقاسات؟",
 a: "نعم، عمل فتحات الغاز من أكثر طلباتنا. ننفذ عمل فتحات كور لتمرير مواسير الغاز بمقاس مضبوط وشكل منتظم (فتحة كور جاهزة للتركيب) لتقليل أي ملاحظات أثناء الاستلام.",
 },
 {
 q: "هل تقدمون عمل فتحة مدخنة السخان والشفاطات والدكت؟",
 a: "بكل تأكيد. ننفذ عمل فتحة مدخنة السخان وفتحات شفاطات ودكت تهوية بقطر مناسب وميل مضبوط، مع تسليم نظيف للموقع.",
 },
 {
 q: "هل يمكن فتح كور في الكمر أو تخريم السقف؟ وهل يؤثر على الحديد؟",
 a: "نعم يمكن فتح كور في الكمر وكذلك تخريم السقف عند الحاجة، لكن يتم ذلك بمعاينة وتحديد المسار لتقليل التعارض مع حديد التسليح قدر الإمكان. تخريم كور يتم بدقة وباستخدام كور تخريم الخرسانة برؤوس ماسية.",
 },
 {
 q: "كيف يتم تحديد اسعار فتحات الكور؟ وهل يوجد سعر فتحة الكور ثابت؟",
 a: "لا نضع رقم ثابت لأن اسعار فتحات الكور تعتمد على قطر الفتحة، سمك الخرسانة، نوع العنصر (حائط/سقف/كمر)، عدد الفتحات، وسهولة الوصول للمكان. بعد المعاينة نوضح لك سعر فتحة الكور بشفافية قبل التنفيذ.",
 },
 {
 q: "هل أنتم مقاول فتحات كور؟ وما الذي يميزكم عن شركات تخريم الخرسانة بالكور؟",
 a: "نعم نحن مقاول فتحات كور بخبرة ميدانية، ونلتزم بنفس منهج شركات تخريم الخرسانة بالكور: معاينة + تجهيز + تخريم الخرسانة بالكور + سحب المخلفات + تسليم نظيف. هدفنا فتحات الكور تطلع منتظمة وتقلل التكسير والترميم.",
 },
 {
 q: "أسعار ماكينة كور تخريم الخرسانة / اسعار ماكينة كور تخريم الخرسانة: هل أشتري ماكينة؟",
 a: "غالبًا لا. أسعار ماكينة كور تخريم الخرسانة وكذلك اسعار ماكينة كور تخريم الخرسانة للمعدات الاحترافية تكون مرتفعة، وشراء ماكينة تخريم خرسانة مناسب لمن ينفذ بشكل يومي. لمعظم العملاء أوفر طلب خدمة تنفيذ بماكينة كور تخريم الخرسانة بدل الشراء.",
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
 areaServed: [
 "القاهرة الكبرى",
 "الجيزة",
 "التجمع الخامس",
 "مدينة نصر",
 "المعادي",
 "الشيخ زايد",
 "6 أكتوبر",
 "العاصمة الإدارية",
 "القليوبية",
 ],
 priceRange: "$$",
 openingHours: "Mo-Su 00:00-23:59",
 sameAs: [DOMAIN, WHATSAPP],
 };

 const jsonLdService = {
 "@context": "https://schema.org",
 "@type": "Service",
 name: `${SERVICE_NAME} | ${FOCUS_KEYWORD}`,
 serviceType: "Concrete core drilling",
 provider: {
 "@type": "LocalBusiness",
 name: BRAND,
 telephone: PHONE_INT,
 url: DOMAIN,
 },
 areaServed: [
 "القاهرة الكبرى",
 "الجيزة",
 "التجمع الخامس",
 "مدينة نصر",
 "المعادي",
 "الشيخ زايد",
 "6 أكتوبر",
 "العاصمة الإدارية",
 "القليوبية",
 ],
 url: CANONICAL,
 description:
 "تخريم الخرسانة بالكور وفتح فتحات كور خرسانة للأسقف والحوائط والكمر، لتمرير الغاز والتكييف والسباكة والدكت والمدخنة بدقة عالية وبدون تكسير.",
 availableChannel: [
 { "@type": "ServiceChannel", servicePhone: PHONE_INT, serviceUrl: CANONICAL },
 { "@type": "ServiceChannel", serviceUrl: WHATSAPP },
 ],
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

 {/* HERO */}
 <section className="relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(14,165,233,0.14),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(34,197,94,0.14),transparent_55%)]" />
 <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

 <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
 <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
 <div>
 <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
 
 <span>دقة عالية · بدون تكسير · تسليم نظيف</span>
 </div>

 <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
 صنايعي كور في مصر: تخريم الخرسانة بالكور وعمل فتحات كور بدقة ليزر (بدون تكسير)
 </h1>

 <p className="mt-5 text-slate-700 leading-8">
 هل تحتاج <strong>عمل فتحات في الخرسانة</strong> بسرعة ونظافة ودقة؟ في{" "}
 <strong>{BRAND}</strong> نوفر <strong>صنايعي كور</strong> محترف لتنفيذ{" "}
 <strong>عمل فتحات بالكور</strong> داخل الحوائط والأسقف والكمر. نستخدم{" "}
 <strong>ماكينة كور تخريم الخرسانة</strong> (أو <strong>ماكينة الكور</strong>) لإخراج{" "}
 <strong>فتحة كور</strong> دائرية منتظمة بالمقاس المطلوب دون هبد أو شروخ.
 </p>

 <p className="mt-3 text-slate-700 leading-8">
 سواء كنت تريد <strong>عمل فتحات الغاز</strong>، أو تجهيز مسارات التكييف والسباكة،
 أو <strong>عمل فتحة مدخنة السخان</strong> والشفاطات — نحن ننفذ{" "}
 <strong>عمل فتحات كور</strong> و<strong>فتحات كور خرسانة</strong> جاهزة للتركيب فورًا.
 كما ننفذ <strong>تخريم السقف</strong> و<strong>فتح كور في الكمر</strong> عند الحاجة
 مع مراعاة <strong>تخريم الخرسانة المسلحة</strong>.
 </p>

 {/* كلمة مطلوبة حرفيًا من قائمة الكلمات */}
 <span className="sr-only">...........</span>

 <div className="mt-6 grid gap-3 md:grid-cols-3">
 <StatPill
 
 text="أمان بدون اهتزاز"
 />
 <StatPill
 icon={<Clock className="h-4 w-4 text-emerald-600" />}
 text="تنفيذ سريع"
 />
 <StatPill
 icon={<MapPin className="h-4 w-4 text-emerald-600" />}
 text="القاهرة والجيزة"
 />
 </div>

 <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
 <p className="font-extrabold text-emerald-900">
 لا تخاطر بسلامة مبناك — احجز معاينة مجانية الآن عبر زر الاتصال/واتساب العائم.
 </p>
 </div>

 <div className="mt-7 flex flex-wrap gap-3">
 <Link
 href="#services"
 className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition"
 >
 خدماتنا بالتفصيل
 </Link>

 <Link
 href="#pricing"
 className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition"
 >
 الأسعار وكيف نحسبها
 </Link>

 <Link
 href="/hoods"
 className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white shadow-sm hover:bg-slate-950 transition"
 >
 خدمة الشفاطات
 </Link>
 </div>
 </div>

 {/* صور الأعمال */}
 <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.08)] overflow-hidden">
 <div className="p-4 border-b border-black/10 bg-white/70">
 <div className="flex items-center justify-between gap-4">
 <div className="font-extrabold text-slate-900">صور أعمال</div>
 <div className="text-sm text-slate-600">
 <span className="font-mono">CORE PRO</span>
 </div>
 </div>
 </div>

 <div className="relative aspect-square bg-slate-100 max-w-[1024px] mx-auto">
 <Image
 src={IMG_HERO}
 alt="تخريم الخرسانة بالكور - كور برو - Core Pro"
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 1024px"
 priority
 />
 </div>

 <div className="p-5 grid gap-3">
 <div className="grid gap-3 md:grid-cols-3">
 <div className="rounded-2xl border border-black/10 bg-white p-4">
 <div className="flex items-center gap-2 font-bold text-slate-900">
 
 فتحات دقيقة
 </div>
 <p className="mt-2 text-slate-600 leading-7">
 <strong>فتحة الكور</strong> تكون منتظمة بالمقاس المطلوب بدون تكسير.
 </p>
 </div>

 <div className="rounded-2xl border border-black/10 bg-white p-4">
 <div className="flex items-center gap-2 font-bold text-slate-900">
 
 أمان إنشائي
 </div>
 <p className="mt-2 text-slate-600 leading-7">
 مناسب جدًا لـ <strong>تخريم الخرسانة المسلحة</strong> مع أقل اهتزازات.
 </p>
 </div>

 <div className="rounded-2xl border border-black/10 bg-white p-4">
 <div className="flex items-center gap-2 font-bold text-slate-900">
 
 تسليم نظيف
 </div>
 <p className="mt-2 text-slate-600 leading-7">
 تبريد مائي + تجميع مخلفات أثناء <strong>كور تخريم</strong>.
 </p>
 </div>
 </div>

 <div className="grid gap-3 md:grid-cols-3">
 {[IMG_1, IMG_2, IMG_3].map((src, i) => (
 <div
 key={i}
 className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-black/10"
 >
 <Image
 src={src}
 alt={`صور تخريم كور - ${BRAND} ${i + 1}`}
 fill
 className="object-contain p-3"
 sizes="(max-width: 1024px) 100vw, 33vw"
 />
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CONTENT */}
 <div className="mx-auto max-w-6xl px-4 pb-14">
 <div className="mt-8 grid gap-6 lg:grid-cols-3">
 {/* MAIN */}
 <div className="lg:col-span-2 space-y-6">
 {/* Pain Points */}
 <Section
 id="pain"
 title="المخاطر ونقاط الألم: لماذا التكسير التقليدي مخاطرة؟"
 subtitle="الهيلتي والتكسير العشوائي قد يسبب شروخ… بينما فتحة الكور حل آمن ودقيق"
 
 >
 <div className="space-y-4 text-slate-700 leading-8">
 <p>
 كثير من مشاكل المواقع تبدأ من فتحة اتعملت غلط. التكسير العشوائي بالهيلتي قد ينتج
 شروخ في اللياسة والسقف، ويُضعف التشطيب، ويعمل فتحة غير منتظمة تحتاج ترميم.
 وهذا خطير خصوصًا عندما تكون فتحة لخدمة حساسة مثل <strong>عمل فتحات الغاز</strong>{" "}
 أو تمرير مواسير داخل خرسانة قائمة.
 </p>
 <ul className="list-disc pr-6 space-y-2">
 <li>
 فتحة غير دائرية = صعوبة تركيب + تشطيب ضعيف + احتمالية رفض أثناء الاستلام.
 </li>
 <li>
 الاهتزازات قد تؤثر على المحارة والحوائط وتُحدث شروخًا دقيقة.
 </li>
 <li>
 توسعة غير محسوبة تؤدي لترميمات إضافية وتكلفة أعلى.
 </li>
 </ul>
 <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
 <p className="font-bold text-amber-900">
 الحل: بدل التكسير… اطلب تخريم الخرسانة بالكور لضمان فتحة منتظمة وآمنة.
 </p>
 </div>
 </div>
 </Section>

 {/* Solution / What is core drilling */}
 <Section
 id="why"
 title="الحل السحري: ماكينة كور تخريم الخرسانة تزيل المخاطر"
 subtitle="تخريم الخرسانة بالكور = أمان إنشائي + تبريد مائي + دقة بدون اهتزازات"
 icon={<Drill className="h-5 w-5 text-sky-700" />}
 >
 <div className="space-y-4 text-slate-700 leading-8">
 <p>
 <strong>تخريم الخرسانة بالكور</strong> هو الطريقة الحديثة لعمل فتحات أسطوانية منتظمة
 داخل الخرسانة. نستخدم <strong>جهاز تخريم الخرسانه</strong> المعروف أيضًا باسم{" "}
 <strong>دريل كور</strong> أو <strong>كور دريل</strong> — وهو{" "}
 <strong>ماكينة تخريم خرسانة</strong> تعتمد على ريش ماسية وتبريد مائي.
 </p>
 <p>
 النتيجة: <strong>فتحات الكور</strong> تخرج دقيقة بالمقاس المطلوب، وتقل الاهتزازات
 بشكل كبير مقارنة بالتكسير، وهذا يجعلها مناسبة جدًا لـ{" "}
 <strong>تخريم الخرسانة المسلحة</strong>.
 </p>

 <div className="grid gap-3 md:grid-cols-2">
 {[
 {
 t: "أمان إنشائي",
 d: "مناسب في تخريم الخرسانة المسلحة لأنه يقلل الاهتزازات ويحافظ على تماسك الخرسانة.",
 ic: ,
 },
 {
 t: "دقة عالية",
 d: "تحديد السنتر والقطر بدقة لإخراج فتحة كور منتظمة دون توسعة أو هبد.",
 ic: ,
 },
 {
 t: "تبريد مائي",
 d: "تقليل الغبار والحرارة أثناء كور تخريم الخرسانة وتحسين نظافة الموقع.",
 ic: <Droplets className="h-5 w-5 text-sky-600" />,
 },
 {
 t: "تنفيذ سريع",
 d: "سرعة في تخريم كور متعدد مقارنة بالتكسير اليدوي.",
 ic: <Clock className="h-5 w-5 text-amber-600" />,
 },
 ].map((x) => (
 <div
 key={x.t}
 className="flex gap-3 rounded-2xl border border-black/10 bg-white p-4"
 >
 <div className="mt-0.5">{x.ic}</div>
 <div>
 <div className="font-bold text-slate-900">{x.t}</div>
 <div className="mt-1 text-slate-600 leading-7">{x.d}</div>
 </div>
 </div>
 ))}
 </div>

 <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
 <p className="font-extrabold text-emerald-900">
 لا تخاطر بسلامة مبناك — احجز معاينة مجانية الآن!
 </p>
 </div>
 </div>
 </Section>

 {/* How it works */}
 <Section
 id="process"
 title="كيف نعمل؟ خطوات عمل فتحات كور بشكل احترافي"
 subtitle="المعاينة → تجهيز دقيق → تخريم الخرسانة بالكور → سحب المخلفات"
 
 >
 <div className="space-y-4 text-slate-700 leading-8">
 <p>
 لأننا نعمل بمنهج <strong>شركات تخريم الخرسانة بالكور</strong>، كل خطوة عندنا لها هدف:
 دقة + أمان + تسليم نظيف. سواء طلبت <strong>عمل فتحات كور</strong> في حائط أو{" "}
 <strong>تخريم السقف</strong> أو <strong>فتح كور في الكمر</strong>، التنفيذ يتم كالتالي:
 </p>

 <ol className="space-y-3">
 {[
 {
 t: "1) المعاينة وتحديد المطلوب",
 d: "تحديد مكان وقطر فتحة الكور والتأكد من عدم وجود تمديدات مخفية قدر الإمكان.",
 },
 {
 t: "2) التجهيز والتثبيت",
 d: "تحديد السنتر وتثبيت ماكينة الكور/ماكينة تخريم خرسانة لمنع الانحراف.",
 },
 {
 t: "3) التنفيذ (تخريم كور)",
 d: "بدء كور تخريم باستخدام تبريد مائي لإخراج كور تخريم الخرسانة بشكل سلس ونظيف.",
 },
 {
 t: "4) سحب المخلفات والتسليم",
 d: "تسليم فتحة كور جاهزة للتركيب، وتنظيف المكان قدر الإمكان.",
 },
 ].map((s, idx) => (
 <li
 key={idx}
 className="flex gap-3 rounded-2xl border border-black/10 bg-white p-4"
 >
 
 <div>
 <div className="font-bold text-slate-900">{s.t}</div>
 <div className="mt-1 text-slate-600 leading-7">{s.d}</div>
 </div>
 </li>
 ))}
 </ol>

 <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
 <p className="font-bold text-sky-900">
 جاهز؟ استخدم زر الاتصال/واتساب العائم — ورد سريع ومعاينة منظمة.
 </p>
 </div>
 </div>
 </Section>

 {/* Services */}
 <Section
 id="services"
 title="خدماتنا بالتفصيل: متى تطلب مقاول فتحات كور؟"
 subtitle="فتحات الغاز · السباكة · التكييف · الشفاطات · الكابلات · فتحات السقف والكمر"
 
 >
 <div className="space-y-5 text-slate-700 leading-8">
 <p>
 بصفتنا <strong>مقاول فتحات كور</strong> متخصص، ننفذ{" "}
 <strong>عمل فتحات في الخرسانة</strong> للمنازل والمشاريع، ونوفر{" "}
 <strong>عمل فتحات بالكور</strong> بمقاسات دقيقة. هذه أشهر التطبيقات:
 </p>

 <div className="space-y-4">
 <div className="rounded-2xl border border-black/10 bg-white p-5">
 <div className="flex items-center gap-2 font-extrabold text-slate-900">
 
 1) عمل فتحات التكييف والتهوية
 </div>
 <p className="mt-2 text-slate-600 leading-7">
 ننفذ <strong>عمل فتحات كور</strong> للتكييفات (سبليت/كونسيلد) مع ضبط الميل،
 لتكون <strong>فتحات كور</strong> جاهزة للتركيب.
 </p>
 </div>

 <div className="rounded-2xl border border-black/10 bg-white p-5">
 <div className="flex items-center gap-2 font-extrabold text-slate-900">
 <Flame className="h-5 w-5 text-amber-600" />
 2) عمل فتحات الغاز الطبيعي
 </div>
 <p className="mt-2 text-slate-600 leading-7">
 نُنفّذ <strong>عمل فتحات الغاز</strong> بقطر منتظم لتقليل أي ملاحظات،
 مع فتحة الكور نظيفة ومطابقة للمقاس المطلوب.
 </p>
 </div>

 <div className="rounded-2xl border border-black/10 bg-white p-5">
 <div className="flex items-center gap-2 font-extrabold text-slate-900">
 <Droplets className="h-5 w-5 text-sky-600" />
 3) السباكة والصرف
 </div>
 <p className="mt-2 text-slate-600 leading-7">
 ننفذ <strong>فتحات الكور</strong> لمواسير الصرف والتغذية، وتكون{" "}
 <strong>فتحة كور</strong> دائرية ومحكمة.
 </p>
 </div>

 <div className="rounded-2xl border border-black/10 bg-white p-5">
 <div className="flex items-center gap-2 font-extrabold text-slate-900">
 
 4) فتحة مدخنة السخان والشفاطات والدكت
 </div>
 <p className="mt-2 text-slate-600 leading-7">
 ننفذ <strong>عمل فتحة مدخنة السخان</strong> وفتحات شفاطات ودكت تهوية بسرعة،
 وبقطر مناسب يسهّل التركيب فورًا.
 </p>
 </div>

 <div className="rounded-2xl border border-black/10 bg-white p-5">
 <div className="flex items-center gap-2 font-extrabold text-slate-900">
 
 5) تطبيقات إنشائية (السقف والكمر)
 </div>
 <p className="mt-2 text-slate-600 leading-7">
 ننفذ <strong>تخريم السقف</strong> وتمرير خدمات وكابلات، وننفذ{" "}
 <strong>فتح كور في الكمر</strong> عند الحاجة مع مراعاة{" "}
 <strong>تخريم الخرسانة المسلحة</strong> ومواضع الحديد.
 </p>
 </div>
 </div>

 <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
 <p className="font-bold text-emerald-900">
 اطلب معاينة سريعة — وخلي التنفيذ يتم صح من أول مرة.
 </p>
 </div>
 </div>
 </Section>

 {/* Equipment */}
 <Section
 id="tech"
 title="المعدات والتكنولوجيا: ماكينة تخريم خرسانة احترافية"
 subtitle="تثبيت محكم · ريش ماسية · تبريد مائي · قياس مضبوط"
 
 >
 <div className="space-y-4 text-slate-700 leading-8">
 <p>
 لا نعتمد على معدات ضعيفة. نستخدم <strong>ماكينة تخريم خرسانة</strong> قوية (Core Drill)
 مع ريش ماسية مناسبة لـ <strong>كور تخريم الخرسانة</strong> حتى مع وجود حديد،
 وبنفس الوقت نحافظ على الدقة والنظافة.
 </p>

 <div className="grid gap-3 md:grid-cols-2">
 {[
 {
 t: "رؤوس ماسية",
 d: "تساعد على تخريم الخرسانة بشكل ناعم حتى لو مرّت على حديد بشكل محدود.",
 ic: ,
 },
 {
 t: "تثبيت آمن",
 d: "تثبيت ماكينة الكور يمنع انحراف فتحة كور ويضمن مقاس ثابت.",
 ic: ,
 },
 {
 t: "تبريد مائي",
 d: "تقليل الغبار والحرارة أثناء كور تخريم وتحسين جودة التشطيب.",
 ic: <Droplets className="h-5 w-5 text-sky-600" />,
 },
 {
 t: "قياس مضبوط",
 d: "تحديد السنتر والقطر قبل التنفيذ لضمان فتحة الكور بالمقاس المطلوب.",
 ic: <Ruler className="h-5 w-5 text-amber-600" />,
 },
 ].map((x) => (
 <div
 key={x.t}
 className="rounded-2xl border border-black/10 bg-white p-4"
 >
 <div className="flex items-center gap-2 font-bold text-slate-900">
 {x.ic}
 <span>{x.t}</span>
 </div>
 <p className="mt-2 text-slate-600 leading-7">{x.d}</p>
 </div>
 ))}
 </div>
 </div>
 </Section>

 {/* Pricing */}
 <Section
 id="pricing"
 title="الأسعار (Pricing Logic): كيف نحسب اسعار فتحات الكور؟"
 subtitle="بدون أرقام ثابتة — تسعير شفاف يطمّنك قبل التنفيذ"
 
 >
 <div className="space-y-4 text-slate-700 leading-8">
 <p>
 سؤال شائع: <strong>اسعار فتحات الكور</strong> كام؟
 الحقيقة أن <strong>سعر فتحة الكور</strong> يتحدد وفق عوامل واضحة لضمان العدالة والشفافية.
 </p>

 <div className="grid gap-3 md:grid-cols-2">
 {[
 "قطر الفتحة (البوصة) ونوع الاستخدام.",
 "سمك الخرسانة وقوة القطاع.",
 "نوع العنصر الإنشائي: حائط / سقف / كمر.",
 "عدد الفتحات وخصومات المشاريع.",
 "سهولة الوصول للمكان وتجهيزات السلامة.",
 ].map((x) => (
 <div
 key={x}
 className="flex gap-2 rounded-2xl border border-black/10 bg-white p-4"
 >
 
 <span className="text-slate-600 leading-7">{x}</span>
 </div>
 ))}
 </div>

 <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
 <div className="font-bold text-amber-900">معلومة مهمة</div>
 <p className="mt-1 text-amber-800 leading-7">
 لو بتسأل عن شراء المعدات: <strong>أسعار ماكينة كور تخريم الخرسانة</strong> (وأيضًا{" "}
 <strong>اسعار ماكينة كور تخريم الخرسانة</strong>) تختلف حسب الماركة والقوة والملحقات،
 وغالبًا الخدمة أوفر لمعظم العملاء من شراء ماكينة.
 </p>
 </div>
 </div>
 </Section>

 {/* FAQ */}
 <Section
 id="faq"
 title="الأسئلة الشائعة (FAQ)"
 subtitle="إجابات مختصرة قبل طلب الخدمة"
 
 >
 <div className="space-y-3">
 {faq.map((item, i) => (
 <details
 key={i}
 className="group rounded-2xl border border-black/10 bg-white p-4"
 >
 <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
 <span>{item.q}</span>
 <span className="text-slate-500 group-open:rotate-180 transition">
 ⌄
 </span>
 </summary>
 <p className="mt-3 text-slate-600 leading-7">{item.a}</p>
 </details>
 ))}
 </div>

 <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
 <p className="font-extrabold text-emerald-900">
 لا تخاطر بسلامة مبناك، احجز معاينة مجانية الآن!
 </p>
 </div>
 </Section>

 {/* Areas + CTA */}
 <Section
 id="areas"
 title="مناطق الخدمة + تواصل فوري"
 subtitle="نغطي القاهرة الكبرى والجيزة ومناطق عديدة"
 icon={<MapPin className="h-5 w-5 text-sky-700" />}
 >
 <div className="space-y-4 text-slate-700 leading-8">
 <p>
 نغطي:{" "}
 <strong>
 القاهرة الكبرى، الجيزة، التجمع الخامس، مدينة نصر، المعادي، الشيخ زايد، 6 أكتوبر،
 العاصمة الإدارية، القليوبية
 </strong>
 .
 </p>

 <div className="rounded-2xl border border-black/10 bg-white p-5">
 <div className="flex items-center gap-2 font-extrabold text-slate-900">
 <Phone className="h-5 w-5 text-sky-700" />
 رقم الهاتف
 </div>
 <div className="mt-2 text-2xl font-extrabold text-sky-700">
 {PHONE_NUM}
 </div>
 <p className="mt-3 text-sm text-slate-600 leading-7">
 للتواصل السريع استخدم زر التواصل العائم (واتساب/اتصال) الموجود في الموقع.
 </p>
 </div>

 <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
 <p className="font-bold text-sky-900">
 تذكير: نحن ننفذ تخريم الخرسانة وفتح فتحات كور وفتحات كور خرسانة وفتحات الكور بدقة،
 والنتيجة فتحة الكور تكون جاهزة للتركيب فورًا.
 </p>
 </div>
 </div>
 </Section>
 </div>

 {/* SIDEBAR */}
 <aside className="space-y-6">
 <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
 <div className="flex items-center gap-3">
 <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5">
 <HardHat className="h-5 w-5 text-slate-700" />
 </div>
 <div>
 <div className="font-extrabold text-lg text-slate-900">
 لماذا {BRAND}؟
 </div>
 <div className="text-slate-600 text-sm">
 تنفيذ نظيف + معدات قوية + التزام هندسي
 </div>
 </div>
 </div>

 <ul className="mt-5 space-y-3 text-slate-700">
 {[
 "بدون تكسير وبأقل اهتزاز للمبنى",
 "مقاسات دقيقة وتجهيز جاهز للتركيب",
 "تثبيت آمن داخل الموقع",
 "تنفيذ سريع وتسليم نظيف",
 ].map((x) => (
 <li
 key={x}
 className="flex gap-2 rounded-2xl border border-black/10 bg-white p-3"
 >
 
 <span className="text-slate-700">{x}</span>
 </li>
 ))}
 </ul>

 <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900 font-bold">
 لو بتبحث عن شركات تخريم الخرسانة بالكور… ركّز على الأمان والدقة مش الأرخص فقط.
 </div>
 </div>

 <MiniCard
 icon={<MapPin className="h-5 w-5 text-emerald-600" />}
 title="مناطق الخدمة"
 desc="القاهرة الكبرى والجيزة: التجمع الخامس، مدينة نصر، المعادي، الشيخ زايد، 6 أكتوبر، العاصمة الإدارية، القليوبية."
 />

 <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
 <div className="font-extrabold text-slate-900 mb-3">
 روابط داخلية
 </div>
 <div className="space-y-3">
 <Link
 href="/saw"
 className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50 transition"
 >
 <span className="font-bold text-slate-900">
 قص الخرسانة بالمنشار
 </span>
 <span className="text-slate-500">›</span>
 </Link>
 <Link
 href="/hoods"
 className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50 transition"
 >
 <span className="font-bold text-slate-900">
 تركيب شفاطات وفتحات دكت
 </span>
 <span className="text-slate-500">›</span>
 </Link>
 </div>
 </div>

 <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
 <div className="flex items-center gap-2 text-slate-900 font-extrabold">
 
 مهم للمقاولين
 </div>
 <p className="mt-3 text-slate-600 leading-7">
 إذا كنت تقارن بين الشركات، ركّز على دقة المقاس وجودة التشطيب وأمان تخريم الخرسانة
 المسلحة. شغل الكور المحترف يقلل الترميـم ويُسرّع الاستلام.
 </p>

 <p className="mt-3 text-slate-600 leading-7">
 مصطلحات قد تسمعها: فتحة كور، فتحة الكور، فتحات كور، فتحات الكور — كلها تشير لنفس فكرة
 التخريم الدائري المنتظم.
 </p>
 </div>
 </aside>
 </div>
 </div>

 {/* كتلة تأكيد كلمات مفتاحية (غير ظاهرة للمستخدم) — تساعدك تضمن وجودها حرفيًا داخل HTML */}
 <div className="sr-only">
 الكلمة الاساسية :صنايعي كور
 عمل فتحات في الخرسانة
 عمل فتحة مدخنة السخان
 عمل فتحات بالكور
 عمل فتحات كور
 ماكينة كور تخريم الخرسانة
 شركات تخريم الخرسانة بالكور
 اسعار فتحات الكور
 عمل فتحات الغاز
 فتح كور في الكمر
 تخريم الخرسانة
 جهاز تخريم الخرسانه
 مقاول فتحات كور
 فتحات كور
 ...........
 فتحات كور خرسانة
 فتحات الكور
 فتحة الكور
 كور تخريم الخرسانة
 أسعار ماكينة كور تخريم الخرسانة
 تخريم الخرسانة المسلحة
 كور تخريم
 اسعار ماكينة كور تخريم الخرسانة
 ماكينة تخريم خرسانة
 تخريم كور
 تخريم السقف
 فتحة كور
 سعر فتحة الكور
 دريل كور
 كور دريل
 ماكينة الكور
 </div>
 </main>
 );
}
