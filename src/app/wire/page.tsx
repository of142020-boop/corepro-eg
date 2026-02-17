// src/app/wire/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";

const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "القاهرة الكبرى";
const CANONICAL = `${DOMAIN}/wire`;

const SERVICE_NAME = "واير تقطيع خرسانة (Wire Sawing)";

const IMG_HERO = "/images/wire/hero.webp"; // optional
const IMG_1 = "/images/wire/work-1.webp"; // optional
const IMG_2 = "/images/wire/work-2.webp"; // optional
const IMG_3 = "/images/wire/work-3.webp"; // optional

export const metadata: Metadata = {
  title: "واير تقطيع خرسانة - 01055550195 | قص الكباري والخرسانة المسلحة",
  description:
    "أفضل مقاول قص خرسانة بالواير (Wire Sawing) لتقطيع الكباري والقواعد الضخمة. نمتلك أحدث ماكينة واير لقص أي سمك خرسانة بدقة وبدون اهتزاز. اتصل للمعاينة.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    siteName: BRAND,
    locale: "ar_EG",
    title: "واير تقطيع خرسانة - 01055550195 | قص الكباري والخرسانة المسلحة",
    description:
      "قص الخرسانة بالواير (Diamond Wire Sawing) للكباري والقواعد الضخمة والسماكات الكبيرة بدقة عالية وبدون اهتزاز.",
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

export default function WirePage() {
  const faq = [
    {
      q: "ما هو الحد الأقصى لسمك الخرسانة الذي يمكن قصه بالواير؟",
      a: "نظرياً لا يوجد حد أقصى. يمكن قص سماكات مترية طالما يمكن تطويق الجسم الخرساني بالواير وتجهيز مسار التوجيه.",
    },
    {
      q: "هل القص بالواير يقطع الحديد داخل الخرسانة؟",
      a: "نعم. الواير الماسي مصمم لقطع الخرسانة وحديد التسليح الكثيف وحتى مقاطع معدنية مدفونة بسلاسة عالية.",
    },
    {
      q: "هل تحتاجون مصدر مياه وكهرباء؟",
      a: "نعم. غالباً تحتاج كهرباء (3 فاز) وتبريد ماء مستمر. في المواقع النائية نوفر مولدات وخزانات مياه عند الحاجة.",
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

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${SERVICE_NAME} | قص الكباري والكتل الضخمة`,
    serviceType: "Diamond Wire Sawing / Concrete Cutting",
    provider: {
      "@type": "LocalBusiness",
      name: BRAND,
      telephone: PHONE_INT,
      url: DOMAIN,
    },
    areaServed: ["مصر", "القاهرة", "الجيزة", "العاصمة الإدارية"],
    url: CANONICAL,
    description:
      "قص الخرسانة المسلحة بالواير (Diamond Wire Sawing) للكباري والقواعد والكتل الضخمة والسماكات الكبيرة بدقة عالية وبدون اهتزاز مع تأمين كامل للموقع.",
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
      { "@type": "ListItem", position: 2, name: "قص الخرسانة بالواير", item: CANONICAL },
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
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(16,185,129,0.16),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(59,130,246,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* LEFT TEXT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
                <Cable className="h-4 w-4 text-emerald-600" />
                <span>Wire Sawing · سماكات كبيرة · بدون اهتزاز</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
                واير تقطيع خرسانة: قص الكباري والكتل الضخمة بدقة عالية (بدون تكسير)
              </h1>

              <p className="mt-5 text-slate-700 leading-8">
                عندما يكون المطلوب <strong>قص خرسانة مسلحة</strong> بسماكات مترية أو كتل
                ضخمة لا يستطيع المنشار القرصي التعامل معها، تكون تقنية{" "}
                <strong>الواير الماسي (Diamond Wire Sawing)</strong> هي الحل الهندسي
                الأكثر أماناً.
              </p>

              <p className="mt-3 text-slate-700 leading-8">
                نحن في <strong>{BRAND}</strong> نقدم خدمة <strong>قص بالواير</strong>{" "}
                للمشاريع الكبرى مع <strong>تأمين كامل للموقع</strong> وتنظيم الرفع
                والإزالة.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <StatPill
                  icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />}
                  text="بدون اهتزاز"
                />
                <StatPill
                  icon={<Target className="h-4 w-4 text-sky-600" />}
                  text="عمق قص كبير"
                />
                <StatPill
                  icon={<Sparkles className="h-4 w-4 text-amber-600" />}
                  text="سطح أملس"
                />
              </div>

              {/* ✅ Removed WhatsApp/Phone buttons (use floating button instead) */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white shadow-sm hover:bg-slate-950 transition"
                >
                  الأسعار والتكلفة
                </Link>

                <Link
                  href="#faq"
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition"
                >
                  الأسئلة الشائعة
                </Link>

                <Link
                  href="/saw"
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition"
                >
                  خدمات قص الخرسانة بالمنشار
                </Link>
              </div>
            </div>

            {/* RIGHT: صور الأعمال */}
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="p-4 border-b border-black/10 bg-white/70">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-extrabold text-slate-900">صور أعمال</div>
                  <div className="text-sm text-slate-600">
                    <span className="font-mono">CORE PRO</span>
                  </div>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="relative aspect-[16/9] md:aspect-[16/10] bg-slate-100">
                <Image
                  src={IMG_HERO}
                  alt="واير تقطيع خرسانة - Core Pro Egypt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="p-5 grid gap-3">
                {/* 3 cards */}
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Target className="h-5 w-5 text-sky-600" />
                      سماكات كبيرة
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      مناسب للكتل الضخمة والقص العميق.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      أمان إنشائي
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      بدون اهتزاز يقلل الشروخ الشعرية.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Sparkles className="h-5 w-5 text-amber-600" />
                      سطح أملس
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      يقلل مصاريف التشطيب والمعالجة.
                    </p>
                  </div>
                </div>

                {/* THUMBNAILS */}
                <div className="grid gap-3 md:grid-cols-3">
                  {[IMG_1, IMG_2, IMG_3].map((src, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-black/10"
                    >
                      <Image
                        src={src}
                        alt={`صور واير تقطيع خرسانة - ${BRAND} ${i + 1}`}
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

          {/* شريط صغير تحت الهيرو */}
          <div className="mt-6 rounded-3xl border border-black/10 bg-white/70 p-4 text-slate-700 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-bold">
                <MapPin className="h-4 w-4 text-slate-600" />
                نخدم جميع أنحاء مصر (مشاريع كبرى)
              </div>
              <div className="text-sm text-slate-600">معاينة فنية + عرض سعر سريع</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 pb-14">
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Section
              id="what"
              title="ما هو قص الخرسانة بالواير؟ ولماذا نستخدمه؟"
              subtitle="Diamond Wire Sawing للكباري والقواعد والكتل الضخمة"
              icon={<Cable className="h-5 w-5 text-emerald-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  تعتمد تقنية القص بالواير على <strong>حبل فولاذي مرن</strong> مرصع بحبيبات{" "}
                  <strong>الماس الصناعي (Diamond Beads)</strong> ويتم تمريره حول الجسم الخرساني
                  ثم تدويره بسرعة عالية بواسطة ماكينة قوية، ليقوم بـ{" "}
                  <strong>قص الخرسانة والحديد</strong> في خط واحد ناعم.
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      t: "عمق قص كبير",
                      d: "مناسب للسماكات المترية مقارنة بالمناشير القرصية.",
                      ic: <Target className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "بدون اهتزاز",
                      d: "حماية الجزء المتبقي وتقليل Micro-cracks.",
                      ic: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      t: "قص الخرسانة والحديد",
                      d: "يقطع التسليح الكثيف بسلاسة.",
                      ic: <Wrench className="h-5 w-5 text-amber-600" />,
                    },
                    {
                      t: "سطح قص أملس",
                      d: "ناتج منتظم يقلل أعمال المعالجة.",
                      ic: <Sparkles className="h-5 w-5 text-amber-600" />,
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

            <Section
              id="uses"
              title="استخدامات وتطبيقات القص بالواير"
              subtitle="قص الكباري والقواعد والكتل الضخمة بأمان"
              icon={<Construction className="h-5 w-5 text-sky-700" />}
            >
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  {
                    title: "قص وإزالة الكباري (Bridge Demolition)",
                    icon: <Construction className="h-5 w-5 text-emerald-600" />,
                    text: "نقسم الكتل إلى بلوكات يمكن رفعها بالونش بأمان بدل التكسير الخطِر والركام.",
                  },
                  {
                    title: "قص القواعد والأساسات (Mass Concrete)",
                    icon: <Building2 className="h-5 w-5 text-sky-600" />,
                    text: "قص اللبشات والقواعد الشريطية ذات السماكات الكبيرة لفتح مصاعد أو تعديلات إنشائية.",
                  },
                  {
                    title: "قص الأعمدة والتيجان",
                    icon: <Ruler className="h-5 w-5 text-amber-600" />,
                    text: "قص أعمدة كبيرة القطر وفصل تيجان خرسانية بدقة لا يمكن تحقيقها بالتكسير.",
                  },
                  {
                    title: "العمل في البيئات الحساسة",
                    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
                    text: "مناسب للمستشفيات والمحطات والمصانع لأن الضوضاء والاهتزاز أقل بكثير.",
                  },
                ].map((u) => (
                  <div key={u.title} className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      {u.icon}
                      <span>{u.title}</span>
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">{u.text}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="pricing"
              title="الأسعار وكيف يتم حساب التكلفة"
              subtitle="غالباً بالحساب بالمتر المسطح (طول × عمق)"
              icon={<Ruler className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  تسعير <strong>واير تقطيع خرسانة</strong> يختلف عن القص العادي. غالباً يتم الحساب بـ{" "}
                  <strong>المتر المسطح للقطع</strong> (المتر المسطح = طول القطع × عمق الخرسانة).
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "مساحة المقطع والعمق المطلوب.",
                    "ظروف الموقع (ارتفاع/سقالات/صعوبة وصول).",
                    "كثافة التسليح والحديد.",
                    "تنظيم الرفع والإزالة وتأمين الموقع.",
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

                {/* ✅ Removed WhatsApp/Phone buttons (use floating button instead) */}
                <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4 text-slate-700">
                  للتواصل السريع استخدم زر التواصل العائم (واتساب/اتصال) الموجود في الموقع.
                </div>
              </div>
            </Section>

            <Section
              id="faq"
              title="الأسئلة الشائعة (FAQ)"
              subtitle="إجابات سريعة قبل طلب الخدمة"
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
                      <span className="text-slate-500 group-open:rotate-180 transition">
                        ⌄
                      </span>
                    </summary>
                    <p className="mt-3 text-slate-600 leading-7">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5">
                  <BadgeCheck className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-extrabold text-lg text-slate-900">
                    لماذا {BRAND}؟
                  </div>
                  <div className="text-slate-600 text-sm">
                    معدات قوية + تأمين + دقة
                  </div>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-slate-700">
                {[
                  "بدون اهتزاز لحماية الجزء المتبقي",
                  "قص سماكات كبيرة جداً (مترية)",
                  "تنظيم الرفع والإزالة بأمان",
                  "سطح قص أملس يقلل التشطيب",
                ].map((x) => (
                  <li
                    key={x}
                    className="flex gap-2 rounded-2xl border border-black/10 bg-white p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
              <div className="font-extrabold text-slate-900 mb-3">روابط داخلية</div>
              <div className="space-y-3">
                <Link
                  href="/saw"
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-900">
                    قص الخرسانة بالمنشار
                  </span>
                  <span className="text-slate-500">←</span>
                </Link>
                <Link
                  href="/core"
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-900">
                    تخريم الخرسانة بالكور
                  </span>
                  <span className="text-slate-500">←</span>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold">
                <MapPin className="h-5 w-5 text-sky-700" />
                نطاق الخدمة
              </div>
              <p className="mt-3 text-slate-600 leading-7">
                نخدم المشاريع الكبرى في جميع أنحاء مصر: القاهرة، الجيزة، العاصمة الإدارية،
                المحاور والكباري، المناطق الصناعية.
              </p>

              {/* ✅ Removed WhatsApp button (use floating button instead) */}
              <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4 text-slate-700">
                للتواصل السريع استخدم زر التواصل العائم (واتساب/اتصال) الموجود في الموقع.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
