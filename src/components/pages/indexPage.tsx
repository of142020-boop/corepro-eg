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
 Sparkles,
 ShieldCheck,
 Target,
 CheckCircle2,
 ArrowRight,
 MapPin,
 Wrench,
 Ruler,
 Building2,
 Fan,
 Hammer,
 BadgeCheck,
 Layers,
 Gauge,
 Phone,
 Maximize,
 Plus,
 Zap,
} from "lucide-react";

const BRAND = "كور برو - Core Pro";
const DOMAIN = "https://corepro-eg.com";
const PHONE_NUM = "01055550195";
const PHONE_INT = "+20" + PHONE_NUM.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "الحي العاشر مدينة نصر";

const IMG_HERO = { src: "/images/home/hero.webp", width: 800, height: 800 };
const IMG_CORE = { src: "/images/home/core.webp", width: 800, height: 800 };
const IMG_SAW = { src: "/images/home/saw.webp", width: 800, height: 800 };
const IMG_HOODS = { src: "/images/home/hoods.webp", width: 800, height: 800 };

function ServiceCard({
 title,
 desc,
 bullets,
 href,
 icon,
 image,
}: {
 title: string;
 desc: string;
 bullets: string[];
 href: string;
 icon: React.ReactNode;
 image: any;
}) {
 return (
 <div className="rounded-none border border-black/10 bg-white shadow-sm overflow-hidden flex flex-col">
 <div
 data-lightbox-src={image.src}
 className="relative aspect-square bg-slate-50 overflow-hidden cursor-pointer group rounded-none"
 >
 <Image
 src={image}
 alt={title}
 fill
 className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
 />
 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
 <Maximize className="h-10 w-10" />
 </div>
 </div>
 <div className="p-8 flex-1 flex flex-col">
 <div className="flex items-center gap-3">
 <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5">
 {icon}
 </div>
 <h3 className="font-black text-xl text-slate-900">{title}</h3>
 </div>
 <p className="mt-4 text-slate-600 leading-8 flex-1">{desc}</p>

 <ul className="mt-6 space-y-3">
 {bullets.map((b) => (
 <li key={b} className="flex gap-2 text-sm font-bold text-slate-700">
 
 <span>{b}</span>
 </li>
 ))}
 </ul>

 <Link
 href={href}
 className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-4 font-black text-white hover:bg-emerald-600 transition shadow-lg"
 >
 تفاصيل الخدمة
 <ArrowRight className="h-5 w-5" />
 </Link>
 </div>
 </div>
 );
}

export default function HomePage() {
 const services = [
 {
 title: "تخريم الخرسانة بالكور",
 desc: "عمل فتحات دائرية دقيقة لتمرير مواسير السباكة والغاز والتكيف بدون تكسير أو اهتزاز.",
 bullets: ["دقة هندسية 100%", "بدون غبار أو أتربة", "أحدث ماكينات الكور"],
 href: "/core",
 icon: null,
 image: IMG_CORE,
 },
 {
 title: "قص الخرسانة بالمنشار",
 desc: "تقطيع الجدران والأسقف لعمل فتحات الأبواب والشبابيك باستخدام المنشار الماسي الكهربائي.",
 bullets: ["سطح قص أملس", "قص ليزر دقيق", "أمان للأسقف والجدران"],
 href: "/saw",
 icon: null,
 image: IMG_SAW,
 },
 {
 title: "تركيب شفاطات المطبخ",
 desc: "تركيب احترافي لكافة أنواع الشفاطات مع تخريم الفتحات وعزل الروائح والزيوت.",
 bullets: ["تركيب شفاطات بمدخنة", "عزل تام للهواء", "نظافة قبل وبعد العمل"],
 href: "/hoods",
 icon: null,
 image: IMG_HOODS,
 }
 ];

 return (
 <main className="bg-slate-50" dir="rtl">
 {/* HERO */}
 <section className="relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(59,130,246,0.12),transparent_55%)]" />
 <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

 <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-24">
 <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
 <div>
 <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm">
 
 <span>الشركة الأولى في خدمات القص والتخريم الإنشائي</span>
 </div>

 <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.1] text-slate-900">
 كور برو مصر: احترافية <span className="text-emerald-600">قص وتخريم</span> الخرسانة
 </h1>

 <div className="mt-8 text-slate-800 leading-9 text-xl space-y-4 font-medium">
 <p>
 نحن شريكك الموثوق في كافة التعديلات المعمارية. نقدم حلولاً هندسية متطورة لـ <strong>فتحات الكور</strong> و <strong>تقطيع الخرسانة</strong> باستخدام أحدث التكنولوجيات العالمية لضمان سلامة المبنى ونظافة الموقع.
 </p>
 </div>

 <div className="mt-10 flex flex-wrap gap-4">
 <Link
 href={WHATSAPP}
 className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-10 py-5 font-black text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition transform hover:-translate-y-1 text-xl"
 >
 <Phone className="h-6 w-6" />
 اطلب الخدمة الآن
 </Link>
 <div className="flex -space-x-3 rtl:space-x-reverse items-center">
 {[1,2,3,4].map(i => (
 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm overflow-hidden">
 <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
 </div>
 ))}
 <div className="mr-4 text-sm font-bold text-slate-600">ثقة أكثر من 500 عميل</div>
 </div>
 </div>
 </div>

 <div className="rounded-none border-4 border-white bg-white shadow-2xl overflow-hidden p-5 relative">
 <div
 data-lightbox-src={IMG_HERO.src}
 className="relative aspect-square rounded-none overflow-hidden bg-slate-100 shadow-inner group cursor-pointer"
 >
 <Image src={IMG_HERO} alt="كور برو - Core Pro Hero" fill priority className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-none" />
 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
 <Maximize className="text-white h-12 w-12" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* SERVICES */}
 <section className="py-24 bg-white">
 <div className="mx-auto max-w-6xl px-4">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-5xl font-black text-slate-900 border-b-4 border-emerald-600 inline-block pb-4 mb-6">خدماتنا الرئيسية</h2>
 <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-8 font-semibold">نقدم مجموعة متكاملة من الخدمات التخصصية التي تلبي احتياجاتك في القص والتخريم الإنشائي وتأسيس المرافق.</p>
 </div>

 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
 {services.map((s) => (
 <ServiceCard key={s.title} {...s} />
 ))}
 </div>
 </div>
 </section>

 {/* WHY US */}
 <section className="py-24 bg-slate-50 relative overflow-hidden">
 <div className="mx-auto max-w-6xl px-4">
 <div className="grid gap-12 lg:grid-cols-2 items-center">
 <div>
 <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 pr-4 border-r-8 border-emerald-600">لماذا نعد الاختيار المفضل للمقاولين؟</h2>
 <div className="grid gap-4">
 {[
 { t: "الأمان الإنشائي", d: "نضمن سلامة الهيكل الخرساني 100% بدون أي تصدعات مجهرية.", ic:  },
 { t: "السرية والنظافة", d: "نعمل في المواقع المشطبة والمسكونة دون ترك أثر للغبار أو الماء.", ic:  },
 { t: "أحدث التقنيات", d: "نمتلك أسطولاً من ماكينات الكور والمنشار الماسي (هولتي) وكور ماشين.", ic:  }
 ].map(item => (
 <div key={item.t} className="p-6 bg-white rounded-3xl border border-black/5 shadow-sm flex gap-4">
 <div className="bg-slate-50 p-3 rounded-2xl h-fit">{item.ic}</div>
 <div>
 <h4 className="font-black text-lg text-slate-900">{item.t}</h4>
 <p className="text-slate-600 text-sm leading-7 mt-1">{item.d}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 <div className="relative">
 <div className="aspect-[4/5] rounded-[64px] overflow-hidden border-8 border-white shadow-2xl">
 <img src="/images/home/why-us.webp" alt="Why Core Pro" className="w-full h-full object-cover" />
 </div>
 <div className="absolute -bottom-6 -left-6 bg-emerald-600 p-8 rounded-[40px] text-white shadow-2xl">
 <div className="text-4xl font-black mb-1">+15</div>
 <div className="text-sm font-bold opacity-80 leading-tight">عاماً من الخبرة <br /> في السوق المصري</div>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>
 );
}
