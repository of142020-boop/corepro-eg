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
  Sparkles,
  ShieldCheck,
  Target,
  Wrench,
  Ruler,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Fan,
  Wind,
  Settings,
  BadgeCheck,
  Building2,
  Home,
  Droplets,
  Filter,
  Clock,
  Hammer,
  MoveRight,
  Maximize,
  Plug,
  Plus,
  Phone,
  Zap,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/hoods`;
const PHONE_NUM = "01055550195";
const PHONE_INT = "+20" + PHONE_NUM.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "الحي العاشر مدينة نصر";

const SERVICE_NAME = "تركيب شفاطات المطبخ والحمام";
const IMG_HERO = { src: "/images/hoods/hero.webp", width: 800, height: 800 };
const IMG_1 = { src: "/images/hoods/work-1.webp", width: 800, height: 800 };
const IMG_2 = { src: "/images/hoods/work-2.webp", width: 800, height: 800 };
const IMG_3 = { src: "/images/hoods/work-3.webp", width: 800, height: 800 };

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
      <div className="mb-6 flex items-start gap-3">
        {icon ? (
          <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5">
            {icon}
          </div>
        ) : null}
        <div>
          <HeadingTag className={`font-black tracking-tight text-slate-900 border-r-4 border-emerald-600 pr-3 ${level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
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

function StatPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm whitespace-nowrap">
      {icon}
      <span className="text-slate-700 font-extrabold">{text}</span>
    </div>
  );
}

export default function HoodsPage() {
  const faq = [
    {
      q: "هل تركيب الشفاط يتطلب تكسير في الجدار؟",
      a: "لا نستخدم التكسير اليدوي أبداً. نعتمد على ماكينة الكور لعمل فتحة دائرية منتظمة بقطر الشفاط تماماً، مما يحافظ على شكل الدهانات والسيراميك.",
    },
    {
      q: "كم يستغرق فني تركيب الشفاط لإنهاء المهمة؟",
      a: "عملية التركيب كاملة (تخريم + تثبيت + عزل) تستغرق حوالي ساعة واحدة إلى ساعتين حسب نوع الشفاط وطبيعة الجدار.",
    },
    {
      q: "هل توفرون ضمان على التركيب؟",
      a: "نعم، نضمن لك تثبيت محكم وعزل تام ضد تسريب الهواء أو الروائح لضمان أقصى كفاءة للشفاط.",
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
    areaServed: ["القاهرة", "الجيزة", "العاصمة الإدارية"],
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [DOMAIN, WHATSAPP],
  };

  return (
    <main className="bg-slate-50" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jsonLdLocalBusiness,
          ]),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(34,197,94,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm">
                <Fan className="h-4 w-4 text-emerald-600" />
                <span>تركيب احترافي · تخريم بالليزر · عزل تام للروائح</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4">
                فني تركيب شفاطات المطبخ والحمام في مصر: دقة في التنفيذ ونظافة في الموقع
              </h1>

              <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
                <p>
                  وداعاً لمشاكل الروائح الكريهة وتراكم الزيوت. نحن في <strong>{BRAND}</strong> نوفر لك خدمة <strong>تركيب شفاط مطبخ</strong> و <strong>تركيب شفاط حمام</strong> احترافية. نستخدم تقنية الكور لعمل فتحات دائرية دقيقة دون الحاجة لتكسير الجدران أو تشويه السيراميك.
                </p>
                <p>
                  فريقنا يضم أفضل <strong>فني تركيب شفاط</strong> متخصص في تركيب كافة الأنواع (شفاطات مسطحة، شفاطات بمدخنة، وشفاطات الحائط) مع ضمان العزل التام وتوجيه الهواء للخارج بكفاءة عالية.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={WHATSAPP}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-10 py-5 font-black text-white shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition transform hover:-translate-y-1 text-xl"
                >
                  <Phone className="h-6 w-6" />
                  اتصل بنا الآن
                </Link>
              </div>
            </div>

            <div className="rounded-[64px] border-4 border-white bg-white shadow-2xl overflow-hidden p-4 relative">
              <div 
                data-lightbox-src={IMG_HERO.src}
                className="relative aspect-square rounded-[48px] overflow-hidden bg-slate-100 shadow-inner group w-full cursor-pointer"
              >
                <Image src={IMG_HERO} alt="تركيب شفاط مطبخ - Core Pro Egypt" fill priority className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-[48px]" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                   <Maximize className="text-white h-10 w-10" />
                </div>
              </div>
              <div className="p-4 grid grid-cols-3 gap-3">
                {[IMG_1, IMG_2, IMG_3].map((img, i) => (
                  <div 
                    key={i} 
                    data-lightbox-src={img.src}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm group cursor-pointer"
                  >
                    <Image src={img} alt={`أعمال تركيب شفاطات ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                       <Plus className="text-white h-6 w-6" />
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
          <div className="lg:col-span-2 space-y-10">
            
            <Section
              id="hood-installation"
              title="خطوات تركيب شفاط المطبخ والحمام باحترافية"
            >
              <p>
                تبدأ خدمتنا بالمعاينة الدقيقة لتحديد أنسب مكان للشفاط. نستخدم <strong>ماكينة الكور</strong> لعمل الفتحة المطلوبة في الجدار بقطر يطابق ماسورة الشفاط تماماً. بعد ذلك نقوم بتركيب الشفاط وتجربة قوة الشفط والتأكد من عدم وجود أي رجوع للهواء أو الروائح.
              </p>
            </Section>

            <Section
              id="types"
              title="أنواع الشفاطات التي نقوم بتركيبها"
            >
              <div className="grid gap-4 md:grid-cols-2">
                 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm">
                    <h4 className="font-black text-slate-900 mb-2">شفاطات المداخن (Chimney Hoods)</h4>
                    <p className="text-slate-600 text-sm">نحن متخصصون في <strong>تركيب مداخن الشفاطات</strong> وفتح مساراتها في السقف أو الجدار بأعلى دقة.</p>
                 </div>
                 <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-3xl shadow-sm">
                    <h4 className="font-black text-slate-900 mb-2">شفاطات الحائط والحمام</h4>
                    <p className="text-slate-600 text-sm">تركيب سريع لشفاطات الحائط وتوربينات التهوية لضمان بيئة صحية خالية من الرطوبة.</p>
                 </div>
              </div>
            </Section>

            <Section
              id="faq"
              title="الأسئلة الشائعة حول خدمات التركيب"
            >
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-emerald-300 transition">
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-emerald-600 group-open:rotate-180 transition p-1 bg-emerald-50 rounded-full">⌄</span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-8 text-sm bg-slate-50 p-6 rounded-2xl border-r-4 border-emerald-500 shadow-inner">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>
          </div>

          <aside className="space-y-6">
            <div className="p-8 rounded-[40px] bg-white border border-black/10 shadow-lg">
               <h3 className="font-extrabold text-2xl text-slate-900 mb-4">لماذا تختار فنيينا؟</h3>
               <p className="text-slate-600 text-sm leading-7 mb-6">
                  نوفر لك <strong>أفضل فني تركيب شفاط</strong> في مصر مع التزام تام بالنظافة ودقة القياسات الهندسية.
               </p>
               <div className="space-y-4">
                  <StatPill icon={<CheckCircle2 className="h-4 w-4 text-emerald-600" />} text="تخريم بدون غبار" />
                  <StatPill icon={<Zap className="h-4 w-4 text-emerald-600" />} text="إنجاز في نفس اليوم" />
                  <StatPill icon={<MapPin className="h-4 w-4 text-emerald-600" />} text="نخدم جميع المناطق" />
               </div>
            </div>

            <div className="p-8 rounded-[40px] bg-emerald-600 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
               <h3 className="font-black text-2xl mb-4">احجز موعد تركيب</h3>
               <p className="text-emerald-100 text-sm mb-6 leading-7">تواصل معنا الآن عبر الواتس اب لتحديد الموعد المناسب لزيارة الفني ومعاينة المكان.</p>
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
    </main>
  );
}
