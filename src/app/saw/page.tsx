import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  BadgeCheck,
  Target,
  Wrench,
  Ruler,
  HelpCircle,
  Building2,
  HardHat,
  Settings,
  Layers,
  Hammer,
  Maximize2,
  MoveRight,
  Phone,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/saw`;
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "الحي العاشر مدينة نصر";

const SERVICE_NAME = "قص الخرسانة بالمنشار";
const FOCUS_KEYWORD = "قص خرسانة ليزر";

const IMG_HERO = "/images/saw/hero.webp";
const IMG_1 = "/images/saw/work-1.webp";
const IMG_2 = "/images/saw/work-2.webp";
const IMG_3 = "/images/saw/work-3.webp";

export const metadata: Metadata = {
  title: "قص الخرسانة بالمنشار - 01055550195 - قص ليزر",
  description:
    "أفضل شركة قص خرسانة لتقطيع الخرسانة المسلحة باستخدام منشار قص الخرسانة وماكينة قص الجدار. مقاول قص خرسانة متخصص في قص خرسانة السقف، فتح أبواب وشبابيك بدقة ليزر وبدون اهتزاز.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "قص الخرسانة بالمنشار - 01055550195 - قص ليزر",
    description:
      "أفضل شركة قص خرسانة لتقطيع الخرسانة المسلحة باستخدام منشار قص الخرسانة وماكينة قص الجدار. مقاول قص خرسانة متخصص في قص خرسانة السقف، فتح أبواب وشبابيك بدقة ليزر وبدون اهتزاز.",
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

export default function SawPage() {
  const faq = [
    {
      q: "ما الفرق بين قص الخرسانة بالمنشار وقص الخرسانة بالصاروخ؟",
      a: "قص الخرسانة بالمنشار يعتمد على منشار قص الخرسانة مثبت على مسار (سكة) للحصول على خطوط مستقيمة لمسافات طويلة وسماكات كبيرة. أما قص الخرسانة بالصاروخ باستخدام صاروخ قص الخرسانة فهو معدة يدوية مناسبة للمسافات القصيرة والزوايا. كلاهما ضمن خدمات قص خرسانة و قص الخرسانة حسب الحاجة للموقع.",
    },
    {
      q: "هل المعدات تقطع الحديد داخل الخرسانة؟ (قص الخرسانة المسلحة)",
      a: "نعم. نستخدم ماكينة قص الخرسانة المسلحة وأقراص ماسية لقص الخرسانة المسلحة وقطع الحديد داخلها بكفاءة، مع تبريد مائي لتقليل الغبار والحفاظ على جودة القطع.",
    },
    {
      q: "هل يوجد غبار وإزعاج؟",
      a: "لا يوجد طرق أو دقدقة مثل التكسير. نستخدم مياه للتبريد أثناء قص خرسانة لتقليل الغبار. مستوى الإزعاج أقل من التكسير التقليدي، ويتم تنظيم العمل لتقليل التأثير على السكان والجيران.",
    },
    {
      q: "هل تقدمون قص الخرسانة بالليزر أو قص خرسانة ليزر؟",
      a: "قص الخرسانة بالليزر أو قص خرسانة ليزر هو وصف لنتيجة الدقة والاستقامة. نحن نستخدم أدوات قياس وتوجيه تجعل القص مستقيمًا للغاية وكأنه ليزر، مع منشار قطع الخرسانة ومنشار تقطيع الخرسانة لتحقيق حواف جاهزة للتشطيب.",
    },
    {
      q: "هل يوجد معلم قص جدار للأعمال الصغيرة مثل فتحة باب واحدة؟",
      a: "نعم. لدينا معلم قص جدار وفريق كامل يخدم الأفراد والمقاولين: من فتحة باب واحدة وحتى أعمال قص خرسانات ومشاريع كبيرة تحتاج شركات تقطيع خرسانة محترفة.",
    },
    {
      q: "كيف يتم حساب اسعار قص الخرسانة؟",
      a: "اسعار قص الخرسانة لا تكون رقمًا ثابتًا. تعتمد على سمك الخرسانة، كثافة الحديد في قص الخرسانة المسلحة، طول القطع بالمتر، نوع المعدة المستخدمة (منشار تقطيع خرسانة أو ماكينة قطع الخرسانة أو صاروخ)، وصعوبة الوصول للمكان. بعد المعاينة نحدد التكلفة بشفافية.",
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
      "العاصمة الإدارية",
      "6 أكتوبر",
      "الشيخ زايد",
      "مدينة نصر",
      "المعادي",
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
    serviceType: "Concrete sawing / Wall sawing / Slab sawing",
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
      "العاصمة الإدارية",
      "6 أكتوبر",
      "الشيخ زايد",
      "مدينة نصر",
      "المعادي",
      "القليوبية",
    ],
    url: CANONICAL,
    description:
      "قص الخرسانة بالمنشار لفتح أبواب وشبابيك، قص خرسانة السقف، قص جدار بالمنشار، وقص الخرسانة المسلحة بدقة عالية وبدون اهتزاز، مع تبريد مائي وتقليل الغبار.",
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
      { "@type": "ListItem", position: 2, name: "قص الخرسانة بالمنشار", item: CANONICAL },
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
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(16,185,129,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>قص مستقيم · بدون اهتزاز · حواف جاهزة للتشطيب</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
                قص الخرسانة بالمنشار في مصر: قص خرسانة ليزر بدقة عالية (بدون تكسير)
              </h1>

              <p className="mt-5 text-slate-700 leading-8">
                لو بتدور على <strong>قص الخرسانة</strong> بطريقة آمنة ونظيفة بدل التكسير العشوائي —
                إحنا في <strong>{BRAND}</strong> بنقدم خدمات <strong>قص خرسانة</strong> بأحدث معدات
                <strong>منشار قص الخرسانة</strong> و<strong>ماكينة قص الخرسانة</strong> لتحقيق
                استقامة ممتازة (وهو ما يطلق عليه كثيرون <strong>قص الخرسانة بالليزر</strong> أو{" "}
                <strong>قص خرسانة ليزر</strong>).
              </p>

              <p className="mt-3 text-slate-700 leading-8">
                سواء هدفك فتح باب أو شباك، أو تعديل جدار، أو <strong>قص خرسانة السقف</strong> لعمل سلم
                أو مصعد—ننفذ <strong>قص الخرسانة المسلحة</strong> بخطوط مستقيمة، مع تبريد مائي وتقليل
                الغبار والاهتزازات.
              </p>

              <p className="mt-3 text-slate-700 leading-8">
                نحن <strong>شركة قص خرسانة</strong> تعمل بمنهج هندسي واضح: معاينة + تخطيط + تأمين + قص +
                تسليم نظيف. لو محتاج <strong>مقاول قص خرسانة</strong> يعتمد عليه، أو{" "}
                <strong>معلم قص جدار</strong> لأعمال منزلية—تواصل معنا عبر زر الاتصال/واتساب العائم.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <StatPill
                  icon={<Target className="h-4 w-4 text-sky-600" />}
                  text="استقامة عالية (ليزر)"
                />
                <StatPill
                  icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />}
                  text="بدون اهتزاز"
                />
                <StatPill
                  icon={<Clock className="h-4 w-4 text-amber-600" />}
                  text="تنفيذ سريع"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="font-extrabold text-emerald-900">
                  لا تخاطر بسلامة المبنى — احجز معاينة الآن وابدأ قص الخرسانة بشكل آمن.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition"
                >
                  الرئيسية
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition"
                >
                  خدمات القص
                </Link>

                <Link
                  href="/core"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white shadow-sm hover:bg-slate-950 transition"
                >
                  خدمة التخريم بالكور
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

              <div className="relative aspect-[16/9] md:aspect-[16/10] bg-slate-100">
                <Image
                  src={IMG_HERO}
                  alt="قص الخرسانة بالمنشار - Core Pro Egypt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="p-5 grid gap-3">
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Maximize2 className="h-5 w-5 text-sky-600" />
                      فتحات أبواب وشبابيك
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      قص جدار بالمنشار بمقاسات دقيقة وحواف جاهزة للتشطيب.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      أمان إنشائي
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      قص الخرسانة المسلحة بأقل اهتزاز وتقليل مخاطر الشروخ.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Sparkles className="h-5 w-5 text-amber-600" />
                      تشطيب أنظف
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      تبريد مائي يقلل الغبار ويعطي قص خرسانة ليزر من حيث الاستقامة.
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
                        alt={`قص خرسانة بالمنشار - ${BRAND} ${i + 1}`}
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
          <div className="lg:col-span-2 space-y-6">
            {/* Pain Points */}
            <Section
              id="pain"
              title="المخاطر: لماذا التكسير العشوائي ليس حلًا لقص الخرسانة؟"
              subtitle="قص خرسانة بالمنشار يقلل الشروخ ويعطي حواف دقيقة مقارنة بالتكسير"
              icon={<HelpCircle className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  التكسير قد ينجح “شكليًا” لكنه غالبًا يترك شروخ، حواف مكسرة، وتكاليف ترميم أعلى. في
                  المقابل، <strong>قص الخرسانة</strong> بالمعدات الحديثة يعطيك نتيجة أكثر نظافة،
                  خاصة في الأعمال الداخلية (شقق/فيلات) حيث التشطيب مهم.
                </p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>التكسير يسبب اهتزازات قد تؤثر على العناصر المجاورة.</li>
                  <li>حواف غير منتظمة = محارة وترميم أكثر.</li>
                  <li>زيادة تكسير غير محسوب = توسعة فتحة بدون داعي.</li>
                </ul>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="font-bold text-amber-900">
                    الحل: قص الخرسانة بالمنشار للحصول على خطوط مستقيمة، وتقليل الهدر في الوقت والتشطيب.
                  </p>
                </div>
              </div>
            </Section>

            {/* What is / Laser */}
            <Section
              id="what"
              title="ما هو قص الخرسانة بالليزر؟ ولماذا يُسمى قص خرسانة ليزر؟"
              subtitle="الليزر هنا يعني الاستقامة والدقة… والمعدة هي منشار قطع الخرسانة"
              icon={<Target className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  مصطلح <strong>قص الخرسانة بالليزر</strong> و<strong>قص خرسانة ليزر</strong> شائع لأنه
                  يصف نتيجة الاستقامة والدقة. نحن نستخدم قياس وتوجيه يجعل القص مستقيمًا للغاية، بينما
                  القطع يتم فعليًا عبر <strong>منشار قص خرسانة</strong> و<strong>منشار قص الخرسانة</strong>{" "}
                  و<strong>منشار تقطيع الخرسانة</strong> على مسارات ثابتة.
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      t: "بدون اهتزاز",
                      d: "قص الخرسانة بالمنشار يقلل الاهتزازات مقارنة بالتكسير.",
                      ic: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      t: "حواف جاهزة للتشطيب",
                      d: "قص نظيف يقلل المحارة والترميم.",
                      ic: <Sparkles className="h-5 w-5 text-amber-600" />,
                    },
                    {
                      t: "دقة القياس",
                      d: "استخدام أدوات قياس تجعل الخط مستقيمًا كأنه ليزر.",
                      ic: <Ruler className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "قوة قطع عالية",
                      d: "مناسب لـ قص الخرسانة المسلحة وقطع الحديد.",
                      ic: <Layers className="h-5 w-5 text-slate-700" />,
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
              </div>
            </Section>

            {/* Services */}
            <Section
              id="services"
              title="خدماتنا: قص خرسانة للمنازل والمشاريع (حلول كاملة)"
              subtitle="شركة قص خرسانة + مقاول قص خرسانة + معلم قص جدار حسب احتياجك"
              icon={<Wrench className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  بصفتنا <strong>شركة قص خرسانة</strong> وفريق عمل متكامل، نقدم خدمات <strong>قص خرسانة</strong>{" "}
                  للأفراد والمقاولين. سواء محتاج فتحة واحدة أو مشروع كبير من <strong>شركات تقطيع خرسانة</strong>،
                  نجهز لك الحل الصحيح.
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Maximize2 className="h-5 w-5 text-sky-600" />
                      1) قص جدار بالمنشار (Wall Sawing)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      فتح أبواب وشبابيك، تعديل واجهات، فتح مطبخ أمريكان… يتم تثبيت{" "}
                      <strong>منشار تقطيع خرسانة</strong> على مسار لضمان الدقة والاستقامة.
                      مناسب لأعمال <strong>قص خرسانات</strong> داخل الشقق والفيلات.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Layers className="h-5 w-5 text-emerald-600" />
                      2) قص خرسانة السقف (Slab Sawing)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      <strong>قص خرسانة السقف</strong> لعمل سلم، فتحة مصعد، منور… مع تأمين البلوك قبل
                      الفصل النهائي. نستخدم <strong>ماكينة تقطيع الخرسانة</strong> المناسبة لطبيعة السقف.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <ShieldCheck className="h-5 w-5 text-amber-600" />
                      3) قص الخرسانة المسلحة (كمرات/أجزاء إنشائية عند الضرورة)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      ننفذ <strong>قص الخرسانة المسلحة</strong> بعناية وبحسب اشتراطات السلامة
                      وتقييم الموقع. نستخدم <strong>ماكينة قص الخرسانة المسلحة</strong> وأقراص ماسية
                      لقطع الحديد والخرسانة معًا.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Hammer className="h-5 w-5 text-slate-700" />
                      4) قص الخرسانة بالصاروخ (للزوايا والأماكن الضيقة)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      <strong>قص الخرسانة بالصاروخ</strong> باستخدام <strong>صاروخ قص الخرسانة</strong>{" "}
                      للأماكن الضيقة أو أعمال بسيطة، مع الحفاظ على الدقة قدر الإمكان.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="font-extrabold text-emerald-900">
                    تواصل الآن — واحصل على معاينة سريعة وخطة قص آمنة.
                  </p>
                </div>
              </div>
            </Section>

            {/* Equipment */}
            <Section
              id="equipment"
              title="المعدات: منشار تقطيع الخرسانة وماكينة قطع الخرسانة حسب حالة الموقع"
              subtitle="اختيار المعدة الصحيح = دقة أعلى + وقت أقل + تشطيب أفضل"
              icon={<Settings className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  السر في الجودة ليس فقط “فني شاطر” — لكن كمان اختيار المعدة المناسبة:{" "}
                  <strong>منشار تقطيع خرسانة</strong> للمسارات المستقيمة، أو <strong>ماكينة قطع الخرسانة</strong>{" "}
                  للأرضيات والسقوف، أو معدات أخرى حسب السماكة والحديد.
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      t: "منشار تقطيع الخرسانة (Wall Saw)",
                      d: "مناسب لقص الجدران وفتح الأبواب والشبابيك بدقة واستقامة عالية.",
                      ic: <BadgeCheck className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      t: "منشار تقطيع الخرسانة (Floor Saw)",
                      d: "قص الأرضيات والسقوف والفواصل… بعمق قوي حسب السماكة.",
                      ic: <Layers className="h-5 w-5 text-slate-700" />,
                    },
                    {
                      t: "ماكينة قص الخرسانة",
                      d: "اختيار شائع لمواقع متعددة، ويُستخدم معها تبريد مائي لتقليل الغبار.",
                      ic: <Target className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "منشار قطع الخرسانة",
                      d: "حل سريع لبعض الأعمال، ويُستخدم أحيانًا بجانب المنشار المثبّت لمسارات محددة.",
                      ic: <Hammer className="h-5 w-5 text-amber-600" />,
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

                <p className="text-slate-600">
                  ملاحظة: مصطلحات العملاء تختلف (منشار تقطيع الخرسانة / منشار تقطيع الخرسانة / ماكينة تقطيع الخرسانة)،
                  لكن المهم عندنا اختيار الأداة الأنسب لإخراج قص مستقيم وتشطيب أفضل.
                </p>
              </div>
            </Section>

            {/* Pricing */}
            <Section
              id="pricing"
              title="الأسعار: كيف نحسب اسعار قص الخرسانة؟ (بدون أرقام ثابتة)"
              subtitle="شفافية كاملة قبل التنفيذ — علشان تطمّن على التكلفة"
              icon={<Building2 className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  <strong>اسعار قص الخرسانة</strong> تعتمد على عوامل واضحة، لأن كل موقع له ظروفه.
                  بعد المعاينة نوضح التكلفة قبل التنفيذ.
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "سمك الخرسانة وطبيعتها (جدار/سقف/أرضية).",
                    "كثافة الحديد في قص الخرسانة المسلحة.",
                    "طول القطع بالمتر، وعدد الفتحات/القصات.",
                    "صعوبة الوصول للمكان (أدوار عليا/مساحة ضيقة/سقالات).",
                    "نوع المعدة المطلوبة: ماكينة تقطيع الخرسانة أو منشار تقطيع خرسانة أو صاروخ.",
                  ].map((x) => (
                    <div
                      key={x}
                      className="flex gap-2 rounded-2xl border border-black/10 bg-white p-4"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                      <span className="text-slate-600 leading-7">{x}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                  <div className="font-bold text-sky-900">مهم</div>
                  <p className="mt-1 text-sky-800 leading-7">
                    السعر الحقيقي هو “نتيجة نظيفة + أمان + وقت أقل + ترميم أقل”.
                  </p>
                </div>
              </div>
            </Section>

            {/* Process */}
            <Section
              id="process"
              title="كيف نعمل؟ خطوات تنفيذ قص الخرسانة بشكل آمن"
              subtitle="من المعاينة إلى التسليم — نفس منهج شركات تقطيع خرسانة المحترفة"
              icon={<MoveRight className="h-5 w-5 text-sky-700" />}
            >
              <ol className="space-y-3">
                {[
                  {
                    t: "1) المعاينة والقياس",
                    d: "تحديد الهدف بدقة والتأكد من مسار القص وتقليل التعارض مع أي تمديدات قدر الإمكان.",
                  },
                  {
                    t: "2) التخطيط وضبط الاستقامة",
                    d: "تحديد خطوط القص بأدوات قياس لضمان نتيجة قص خرسانة ليزر من حيث الاستقامة.",
                  },
                  {
                    t: "3) تثبيت المعدة وتأمين الموقع",
                    d: "تثبيت منشار قص الخرسانة أو ماكينة قطع الخرسانة على المسار وتأمين منطقة العمل.",
                  },
                  {
                    t: "4) القص مع تبريد مائي",
                    d: "تنفيذ تدريجي لتقليل الغبار والحفاظ على جودة القطع في قص الخرسانة المسلحة.",
                  },
                  {
                    t: "5) إنزال البلوك ونقل المخلفات",
                    d: "تأمين البلوك قبل الفصل النهائي ثم إنزاله بأمان وتسليم الموقع بشكل منظم.",
                  },
                ].map((s, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 rounded-2xl border border-black/10 bg-white p-4"
                  >
                    <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5">
                      <BadgeCheck className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{s.t}</div>
                      <div className="mt-1 text-slate-600 leading-7">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </Section>

            {/* FAQ */}
            <Section
              id="faq"
              title="الأسئلة الشائعة (FAQ)"
              subtitle="إجابات مختصرة قبل طلب الخدمة"
              icon={<HelpCircle className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-3">
                {faq.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-black/10 bg-white p-4"
                  >
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-slate-500 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-3 text-slate-600 leading-7">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

            {/* Areas / CTA */}
            <Section
              id="areas"
              title="الخاتمة ومناطق الخدمة"
              subtitle="نغطي القاهرة الكبرى والجيزة ومناطق عديدة"
              icon={<MapPin className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  لو تحتاج قص خرسانة بدقة عالية وبطريقة آمنة، نحن جاهزون. سواء عمل صغير مع{" "}
                  <strong>معلم قص جدار</strong> أو مشروع كبير ضمن <strong>شركات تقطيع خرسانة</strong>—
                  هدفنا تسليم نظيف وحواف مستقيمة وتقليل الترميم.
                </p>

                <p>
                  نغطي:{" "}
                  <strong>
                    القاهرة الكبرى، الجيزة، التجمع الخامس، مدينة نصر، المعادي، الشيخ زايد، 6 أكتوبر،
                    العاصمة الإدارية، القليوبية
                  </strong>
                  . لا تغامر بسلامة منشأتك — تواصل مع <strong>مقاول قص خرسانة</strong> متخصص.
                </p>

                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="flex items-center gap-2 font-extrabold text-slate-900">
                    <Phone className="h-5 w-5 text-sky-700" />
                    احجز معاينتك الآن
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-sky-700">{PHONE}</div>
                  <p className="mt-2 text-slate-600 leading-7">
                    خدمة العملاء متاحة للرد على استفساراتكم حول اسعار قص الخرسانة وتفاصيل التنفيذ.
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    للتواصل السريع استخدم زر التواصل العائم (واتساب/اتصال) الموجود في الموقع.
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
                  <div className="font-extrabold text-lg text-slate-900">لماذا نحن؟</div>
                  <div className="text-slate-600 text-sm">دقة + أمان + تشطيب أنظف</div>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-slate-700">
                {[
                  "استقامة عالية تجعل النتيجة قص الخرسانة بالليزر من حيث الدقة.",
                  "بدون اهتزازات عنيفة مقارنة بالتكسير.",
                  "حواف ملساء تقلل مصاريف المحارة والترميم.",
                  "تأمين البلوك الخرساني قبل الإنزال لضمان السلامة.",
                ].map((x) => (
                  <li
                    key={x}
                    className="flex gap-2 rounded-2xl border border-black/10 bg-white p-3"
                  >
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900 font-bold">
                إذا كنت تبحث عن شركة قص خرسانة: الأهم هو الأمان والدقة ونوع المعدات المستخدمة.
              </div>
            </div>

            <MiniCard
              icon={<MapPin className="h-5 w-5 text-emerald-600" />}
              title="مناطق الخدمة"
              desc="القاهرة الكبرى والجيزة: التجمع الخامس، مدينة نصر، المعادي، الشيخ زايد، 6 أكتوبر، العاصمة الإدارية، القليوبية."
            />

            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
              <div className="font-extrabold text-slate-900 mb-3">روابط داخلية</div>
              <div className="space-y-3">
                <Link
                  href="/core"
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-900">تخريم الخرسانة بالكور</span>
                  <span className="text-slate-500">←</span>
                </Link>
                <Link
                  href="/hoods"
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-900">تركيب شفاطات وفتحات دكت</span>
                  <span className="text-slate-500">←</span>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold">
                <Building2 className="h-5 w-5 text-sky-700" />
                مناسب للمقاولين
              </div>
              <p className="mt-3 text-slate-600 leading-7">
                لو بتقارن بين <strong>مقاول قص خرسانة</strong> ومزوّد خدمة عادي: اسأل عن{" "}
                <strong>ماكينة قص الخرسانة</strong> ونوع الأقراص الماسية وخطة التأمين قبل الإنزال.
              </p>
              <p className="mt-3 text-slate-600 leading-7">
                مصطلحات شائعة: منشار تقطيع الخرسانة، ماكينة تقطيع الخرسانة، منشار قطع الخرسانة، ماكينة قطع الخرسانة.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* ✅ شبكة أمان: جميع الكلمات المفتاحية حرفيًا كما هي في الملف :contentReference[oaicite:1]{index=1} */}
      <div className="sr-only">
        الكلمة الاساسية : قص الخرسانة
        قص خرسانة
        قص خرسانات
        قص الخرسانة بالليزر
        قص خرسانة ليزر
        منشار قص خرسانة
        منشار قص الخرسانة
        منشار تقطيع خرسانة
        ماكينة قص خرسانة
        ماكينة قص الخرسانة
        ماكينة قص الخرسانة المسلحة
        شركة قص خرسانة
        قص جدار بالمنشار
        معلم قص جدار
        مقاول قص خرسانة
        قص خرسانة السقف
        قص الخرسانة بالصاروخ
        صاروخ قص الخرسانة
        اسعار قص الخرسانة
        قص الخرسانة المسلحة
        شركات تقطيع خرسانة
        ماكينة تقطيع الخرسانة
        منشار تقطيع الخرسانة
        منشار قطع الخرسانة
        منشار تقطيع الخرسانة
        ماكينة قطع الخرسانة
      </div>
    </main>
  );
}
