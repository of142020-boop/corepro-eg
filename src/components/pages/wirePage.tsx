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
  ShieldCheck,
  Target,
  Sparkles,
  Wrench,
  Ruler,
  BadgeCheck,
  MapPin,
  HelpCircle,
  CheckCircle2,
  Building2,
  Cable,
  Construction,
  Phone,
  Maximize,
  Plus,
  Zap,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const PHONE_NUM = "01055550195";
const PHONE_INT = "+20" + PHONE_NUM.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "الحي العاشر مدينة نصر";
const CANONICAL = `${DOMAIN}/wire`;

const SERVICE_NAME = "واير تقطيع خرسانة (Wire Sawing)";

const IMG_HERO = { src: "/images/wire/hero.webp", width: 800, height: 800 };
const IMG_1 = { src: "/images/wire/work-1.webp", width: 800, height: 800 };
const IMG_2 = { src: "/images/wire/work-2.webp", width: 800, height: 800 };
const IMG_3 = { src: "/images/wire/work-3.webp", width: 800, height: 800 };

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

export default function WirePage() {
  const faq = [
    {
      q: "ما هو الحد الأقصى لسمك الخرسانة الذي يمكن قصه بالواير؟",
      a: "نظرياً لا يوجد حد أقصى. يمكن قص سماكات مترية طالما يمكن تطويق الجسم الخرساني بالواير وتجهيز مسار التوجيه في المواقع الإنشائية الكبرى.",
    },
    {
      q: "هل القص بالواير يقطع حديد التسليح داخل الخرسانة؟",
      a: "نعم تماماً. الواير الماسي مصمم لاختراق أصلب أنواع الخرسانة والحديد الكثيف دفعة واحدة وبسطح قص أملس جداً.",
    },
    {
      q: "هل تسبب عملية القص بالواير اهتزازات للمبنى؟",
      a: "إطلاقاً. ميزة الواير الأساسية هي القص الصامت والسلس بدون أي مطارق دقيقة أو اهتزازات تذكر، مما يحمي أساسات الكباري والمباني المجاورة.",
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
    areaServed: ["مصر", "القاهرة", "الجيزة", "العاصمة الإدارية"],
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
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(59,130,246,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm">
                <Cable className="h-4 w-4 text-emerald-600" />
                <span>Wire Sawing · القص الماسي الصامت · سماكات غير محدودة</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4">
                قص الخرسانة بالواير في مصر: الحل المثالي للكتل الضخمة والكباري الخرسانية
              </h1>

              <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
                <p>
                  نقدم في <strong>{BRAND}</strong> خدمة <strong>قص الخرسانة بالواير</strong> (Diamond Wire Sawing) للمشاريع الإنشائية العملاقة. هذه التقنية تتيح لنا <strong>تقطيع الخرسانة</strong> بسماكات ضخمة تتجاوز المترين بوضوح، مما يجعلها الخيار الأول في <strong>قص الكباري</strong> وقص القواعد الخرسانية العميقة دون التأثير على سلامة الهيكل المحيط.
                </p>
                <p>
                  بفضل استخدام <strong>واير تقطيع خرسانة</strong> مرصع بالألماس، نضمن لك قصاً جراحياً دقيقاً وهادئاً تماماً وبدون أي غبار أو اهتزازات. نحن نعد من أفضل <strong>شركات تقطيع خرسانة</strong> المتخصصة في الحلول الهندسية الصعبة في مصر.
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
                <Image src={IMG_HERO} alt="واير تقطيع خرسانة - Core Pro Egypt" fill priority className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-[48px]" />
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
                    <Image src={img} alt={`أعمال تقطيع خرسانة بالواير ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
          <div className="lg:col-span-2 space-y-10">
            
            <Section
              id="wire-sawing"
              title="ما هو نظام قص الخرسانة بالواير الماسي؟"
            >
              <p>
                نظام <strong>القص بالواير</strong> هو الحل النهائي لمشاكل السماكات الكبيرة. يعتمد على حبل فولاذي مرن مرصع بحبيبات الألماس يتم تمريره حول الكتلة المراد إزالتها. يتميز هذا النظام بالقدرة على <strong>تقطيع الكتل الخرسانية</strong> في أصعب الظروف والمساحات الضيقة.
              </p>
            </Section>

            <Section
              id="features"
              title="مميزات تقنية Wire Sawing من Core Pro"
            >
              <div className="grid gap-4 md:grid-cols-2">
                 <div className="p-6 bg-white border border-black/5 rounded-3xl shadow-sm">
                    <h4 className="font-black text-slate-900 mb-2">1. سماكات مترية</h4>
                    <p className="text-slate-600 text-sm">إمكانية قص الكتل الخرسانية التي يتعدى سمكها 2 متر وسماكات غير محدودة للكباري.</p>
                 </div>
                 <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-3xl shadow-sm">
                    <h4 className="font-black text-slate-900 mb-2">2. هدوء تام</h4>
                    <p className="text-slate-600 text-sm">العملية تتم بسلاسة فائقة دون إزعاج الجيران أو التسبب في شروخ إنشائية مجهرية.</p>
                 </div>
              </div>
            </Section>

            <Section
              id="faq"
              title="الأسئلة الشائعة حول القص بالواير"
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

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="p-8 rounded-[40px] bg-white border border-black/10 shadow-lg">
               <h3 className="font-extrabold text-2xl text-slate-900 mb-4">نحـن خيـارك الأول</h3>
               <p className="text-slate-600 text-sm leading-7 mb-6">
                  نوفر خدمات <strong>قص خرسانة ليزر</strong> وتقطيع بالواير للمشروعات القومية والخاصة بأعلى دقة إنشائية.
               </p>
               <div className="space-y-4">
                  <StatPill icon={<CheckCircle2 className="h-4 w-4 text-emerald-600" />} text="تأمين كامل للموقع" />
                  <StatPill icon={<Zap className="h-4 w-4 text-emerald-600" />} text="سرعة في التنفيذ" />
                  <StatPill icon={<MapPin className="h-4 w-4 text-emerald-600" />} text="نغطي كافة المحافظات" />
               </div>
            </div>

            <div className="p-8 rounded-[40px] bg-emerald-600 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
               <h3 className="font-black text-2xl mb-4">اطلب متخصص واير</h3>
               <p className="text-emerald-100 text-sm mb-6 leading-7">سيقوم فريقنا بمعاينة الموقع وتقديم عرض سعر فني متكامل للبدء فوراً.</p>
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
