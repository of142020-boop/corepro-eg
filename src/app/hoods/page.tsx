import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Target,
  Wrench,
  Ruler,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Phone,
  MessageCircle,
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
  Maximize2,
  Plug,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/hoods`;
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "القاهرة الكبرى";

const SERVICE_NAME = "تركيب شفاطات المطبخ والحمام";
const IMG_HERO = "/images/hoods/hero.webp"; // optional
const IMG_1 = "/images/hoods/work-1.webp"; // optional
const IMG_2 = "/images/hoods/work-2.webp"; // optional
const IMG_3 = "/images/hoods/work-3.webp"; // optional

export const metadata: Metadata = {
  title: "تركيب شفاط المطبخ - فني شفاطات - 01055550195",
  description:
    "أفضل فني تركيب شفاط المطبخ وتركيب شفاطات الحمام. صيانة وتركيب شفاط توشيبا، فريش، تورنيدو، وشفاط بلت ان (بمدخنة/بدون). تأسيس دكت وتركيب فلتر كربوني.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "تركيب شفاط المطبخ - فني شفاطات - 01055550195",
    description:
      "أفضل فني تركيب شفاط المطبخ وتركيب شفاطات الحمام. صيانة وتركيب شفاط توشيبا، فريش، تورنيدو، وشفاط بلت ان (بمدخنة/بدون). تأسيس دكت وتركيب فلتر كربوني.",
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

export default function HoodsPage() {
  const faq = [
    {
      q: "ما الفرق بين الشفاط الهرمي والمسطح؟",
      a: "الشفاط الهرمي له مدخنة ستانلس ويحتاج مساحة رأسية أكبر وهو ممتاز للمطابخ الكبيرة. الشفاط المسطح رفيع ويمكن تركيب دولاب فوقه ومناسب للمساحات المحدودة.",
    },
    {
      q: "أيهما أفضل: شفاط توشيبا أم فريش؟",
      a: "كلاهما ممتاز. توشيبا يتميز بالعمر الطويل وتوفر قطع الغيار وسهولة التنظيف، وفريش يقدم موديلات متنوعة وأسعار اقتصادية وتصميمات بلت ان جيدة. الاختيار حسب ميزانيتك ومقاس الفتحة.",
    },
    {
      q: "هل يمكن تركيب شفاط بدون فتحة في الحائط؟",
      a: "نعم، نركب شفاط بدون مدخنة باستخدام الفلاتر الكربونية (Recirculation) لتنقية الهواء وإعادته للمطبخ، وهو حل مثالي عندما يصعب عمل فتحة خارجية.",
    },
    {
      q: "كيف أعرف مقاس الشفاط المناسب؟",
      a: "للشفاطات التقليدية يتم قياس الفتحة (مثل 25×25 أو 30×30). ولشفاطات البوتاجاز يجب أن يكون عرض الشفاط 60 أو 90 سم مساويًا أو أكبر من عرض البوتاجاز.",
    },
    {
      q: "هل تقومون بإصلاح مفتاح/حبل الشفاط؟",
      a: "نعم، مشكلة مفتاح/حبل شفاط توشيبا وفريش شائعة ونقوم بتغيير مجموعة المفتاح بالكامل ليعود للعمل بكفاءة.",
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
      "الشيخ زايد",
      "6 أكتوبر",
      "العاصمة الإدارية",
    ],
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [DOMAIN, WHATSAPP],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${SERVICE_NAME} | فني شفاطات`,
    serviceType: "Kitchen & bathroom ventilation installation and maintenance",
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
      "الشيخ زايد",
      "6 أكتوبر",
      "العاصمة الإدارية",
    ],
    url: CANONICAL,
    description:
      "تركيب شفاط المطبخ والحمام (هرمي/مسطح/بلت ان/شفاط شباك/سقفي/مركزي) + تأسيس دكت + تركيب فلتر كربوني + صيانة وتنظيف وتغيير فلاتر وإصلاح أعطال.",
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
      { "@type": "ListItem", position: 2, name: "تركيب الشفاطات", item: CANONICAL },
    ],
  };

  return (
    <main className="bg-slate-50">
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
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>تركيب · تأسيس دكت · صيانة · فلتر كربوني</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
                تركيب شفاط المطبخ والحمام: دليلك الشامل لخدمات فني الشفاطات (تركيب،
                صيانة، تأسيس)
              </h1>

              <p className="mt-5 text-slate-700 leading-8">
                هل تعاني من روائح الطبخ العالقة في الأثاث؟ أو تراكم الدهون على دواليب
                المطبخ؟ الحل يبدأ من <strong>تركيب شفاط المطبخ</strong> بشكل صحيح. التهوية
                ليست مجرد “مروحة”، بل نظام متكامل يحمي صحة الأسرة ونظافة المنزل.
              </p>

              <p className="mt-3 text-slate-700 leading-8">
                نحن في <strong>{BRAND}</strong> نقدم خدمات تهوية متكاملة:{" "}
                <strong>تركيب شفاط جديد</strong>، <strong>تأسيس شفاط أثناء التشطيب</strong>،
                و<strong>صيانة وإصلاح</strong>. نتعامل مع جميع الماركات (توشيبا، فريش،
                تورنيدو، باناسونيك…)، ونوفر حلولاً للمطابخ بدون مدخنة عبر{" "}
                <strong>الفلاتر الكربونية</strong>.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <StatPill icon={<Fan className="h-4 w-4 text-emerald-600" />} text="شفط أقوى" />
                <StatPill icon={<Filter className="h-4 w-4 text-sky-600" />} text="فلتر كربوني" />
                <StatPill icon={<Clock className="h-4 w-4 text-amber-600" />} text="خدمة سريعة" />
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white shadow-sm hover:bg-emerald-700 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  واتساب
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-900 shadow-sm hover:bg-slate-50 transition"
                >
                  <Phone className="h-5 w-5" />
                  اتصال: {PHONE}
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition"
                >
                  <Home className="h-5 w-5" />
                  الرئيسية
                </Link>
              </div>
            </div>

            {/* right card */}
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="p-4 border-b border-black/10 bg-white/70">
                <div className="flex items-center justify-between">
                  <div className="font-extrabold text-slate-900">صور أعمال (اختياري)</div>
                  <div className="text-sm text-slate-600">
                    <span className="font-mono">public/images/hoods</span>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-80 bg-slate-100">
                <Image
                  src={IMG_HERO}
                  alt="تركيب شفاطات المطبخ والحمام - Core Pro Egypt"
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
                      <Wind className="h-5 w-5 text-sky-600" />
                      بمدخنة/بدون
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      اختيار أفضل نظام حسب المكان.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Filter className="h-5 w-5 text-emerald-600" />
                      فلتر كربوني
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      للمطابخ بدون فتحة خارجية.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Wrench className="h-5 w-5 text-amber-600" />
                      صيانة شاملة
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      تنظيف + تغيير فلاتر + إصلاح أعطال.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {[IMG_1, IMG_2, IMG_3].map((src, i) => (
                    <div
                      key={i}
                      className="relative h-28 rounded-2xl overflow-hidden bg-slate-100 border border-black/10"
                    >
                      <Image
                        src={src}
                        alt={`أعمال شفاطات - ${BRAND} ${i + 1}`}
                        fill
                        className="object-cover"
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
            <Section
              id="types"
              title="أنواع الشفاطات التي نقوم بتركيبها"
              subtitle="من الشفاط الهرمي إلى البلت ان.. نركب كل الأنواع"
              icon={<Fan className="h-5 w-5 text-emerald-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  يختلف نوع الشفاط حسب تصميم المطبخ واحتياجاتك، ونحن نتعامل مع جميع الأنواع:
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Wind className="h-5 w-5 text-sky-600" />
                      1) الشفاط الهرمي والمسطح (Chimney & Flat Hoods)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      النوع الأكثر شيوعاً فوق البوتاجاز. نركب شفاط بمدخنة لطرد الهواء للخارج
                      (أقوى في الشفط). متوفر بمقاسات 60 سم و90 سم.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Maximize2 className="h-5 w-5 text-emerald-600" />
                      2) الشفاط البلت ان (Built-in Hoods)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      خيار ديكوري مخفي داخل دولاب المطبخ، لا يظهر إلا لوحة التحكم. متخصصون في
                      تركيب بلت ان 60 و90 سم مع ضبط مسار الدكت داخل الخشب.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Fan className="h-5 w-5 text-amber-600" />
                      3) شفاط الشباك والحائط (Standard Fans)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      الشفاطات التقليدية فعالة جداً. نركب على الشباك (خشب/ألوميتال) أو على
                      الحائط بعد عمل فتحة مناسبة (بالكور عند الحاجة).
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Building2 className="h-5 w-5 text-slate-700" />
                      4) الشفاطات المركزية والسقفية
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      للمطابخ الكبيرة أو الحمامات الحديثة: شفاط سقفي/مركزي متصل بدكت يمر فوق
                      السقف المستعار (جبس بورد).
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            <Section
              id="methods"
              title="طرق التركيب (بمدخنة vs بدون مدخنة)"
              subtitle="كيف نختار طريقة التركيب الأنسب لك؟"
              icon={<Target className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-5 text-slate-700 leading-8">
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="font-extrabold text-slate-900 flex items-center gap-2">
                    <Wind className="h-5 w-5 text-emerald-600" />
                    أولاً: تركيب شفاط المطبخ بمدخنة (External Exhaust)
                  </div>
                  <p className="mt-2 text-slate-600 leading-7">
                    الأفضل في الأداء. نقوم بتركيب دكت الشفاط وتوصيله من الشفاط إلى الفتحة
                    الخارجية، مع مراعاة استقامة المسار لتقليل رجوع الهواء.
                  </p>
                  <ul className="mt-3 space-y-2">
                    {[
                      "ضبط استقامة خرطوم الشفاط لتقليل فقد الشفط.",
                      "استخدام جرجور/غطاء خارجي لمنع دخول الحشرات والطيور.",
                      "تثبيت محكم وتقليل الاهتزاز والصوت.",
                    ].map((x) => (
                      <li key={x} className="flex gap-2 text-slate-700">
                        <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                        <span className="text-slate-600 leading-7">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="font-extrabold text-slate-900 flex items-center gap-2">
                    <Filter className="h-5 w-5 text-sky-600" />
                    ثانياً: تركيب شفاط بدون مدخنة (Recirculating)
                  </div>
                  <p className="mt-2 text-slate-600 leading-7">
                    عند عدم وجود فتحة خارجية، نركب <strong>فلتر كربوني</strong> (فلتر الفحم)
                    لامتصاص الروائح وإعادة ضخ الهواء بعد تنقيته.
                  </p>
                  <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <div className="font-bold text-amber-900">تنبيه</div>
                    <p className="mt-1 text-amber-800 leading-7">
                      يحتاج الفلتر الكربوني إلى تغيير دوري للحفاظ على كفاءة الشفط وتقليل الروائح.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            <Section
              id="brands"
              title="الماركات والمقاسات"
              subtitle="توشيبا، فريش، تورنيدو.. والمزيد"
              icon={<BadgeCheck className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  لدينا خبرة في صيانة وتركيب معظم الموديلات في السوق المصري:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="font-extrabold text-slate-900 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-emerald-600" />
                      1) شفاطات توشيبا (Toshiba)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      الأكثر طلباً وتحملاً. نتعامل مع مقاسات 20/25/30 (بالشبكة وبدون شبكة).
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="font-extrabold text-slate-900 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-sky-600" />
                      2) شفاطات فريش (Fresh)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      خيارات اقتصادية قوية: 90 سم للبوتاجازات الكبيرة + موديلات بلت ان وقطع غيار.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="font-extrabold text-slate-900 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-amber-600" />
                      3) شفاطات تورنيدو (Tornado)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      تصميمات عصرية: تورنيدو 25 + بلت ان تورنيدو.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="font-extrabold text-slate-900 flex items-center gap-2">
                      <BadgeCheck className="h-5 w-5 text-slate-700" />
                      4) ماركات أخرى
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      أريستون، بيكو، KDK، باناسونيك، إيكوماتيك، البا، هانز… حسب المتاح بالمقاسات.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                  <div className="font-bold text-sky-900">مقاسات شائعة</div>
                  <p className="mt-1 text-sky-800 leading-7">
                    شفاطات الشباك: 25×25 و30×30. شفاطات البوتاجاز: 60 سم و90 سم.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="bathrooms"
              title="خدمات الحمامات"
              subtitle="تخلص من رطوبة الحمام للأبد"
              icon={<Droplets className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  تهوية الحمام ضرورية لمنع العفن وتآكل المرايا. نقدم:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      t: "تركيب شفاط حمام",
                      d: "على الشباك أو الحائط حسب المكان المتاح.",
                      ic: <Fan className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      t: "شفاط سقفي للحمام",
                      d: "يتم تركيبه في سقف الجبس ويكون أنيقاً ومخفياً.",
                      ic: <Wind className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "شفاط حمام مخفي",
                      d: "جريل صغير بالسقف والموتور بعيد لتقليل الضوضاء.",
                      ic: <ShieldCheck className="h-5 w-5 text-amber-600" />,
                    },
                    {
                      t: "شفاط زجاج",
                      d: "فتحة دائرية في الزجاج مباشرة بتركيب احترافي.",
                      ic: <Ruler className="h-5 w-5 text-slate-700" />,
                    },
                  ].map((x) => (
                    <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5">
                      <div className="flex items-center gap-2 font-extrabold text-slate-900">
                        {x.ic}
                        <span>{x.t}</span>
                      </div>
                      <p className="mt-2 text-slate-600 leading-7">{x.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section
              id="maintenance"
              title="الصيانة والأعطال وقطع الغيار"
              subtitle="صيانة شفاط المطبخ وإصلاح الأعطال"
              icon={<Wrench className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  لو الشفاط لا يعمل أو صوته عالي — نوفر صيانة شاملة:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      t: "تنظيف الشفاط",
                      d: "فك الشبكة والمروحة وإزالة الدهون بمواد مخصصة لتحسين كفاءة الموتور.",
                      ic: <Sparkles className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      t: "تغيير الفلاتر",
                      d: "استبدال فلتر الألومنيوم أو فلتر كربوني حسب نظام التشغيل.",
                      ic: <Filter className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "أعطال الكهرباء",
                      d: "فحص الموتور والمفتاح/الحبل وإصلاح أو تغيير الأجزاء التالفة.",
                      ic: <Plug className="h-5 w-5 text-amber-600" />,
                    },
                    {
                      t: "حل مشاكل الصوت",
                      d: "علاج عدم اتزان المروحة أو تآكل الجلب وتقليل الاهتزاز.",
                      ic: <ShieldCheck className="h-5 w-5 text-slate-700" />,
                    },
                    {
                      t: "فك ونقل وتركيب جديد",
                      d: "فك شفاط قديم وتركيب الجديد في نفس الزيارة حسب الحالة.",
                      ic: <Hammer className="h-5 w-5 text-slate-700" />,
                    },
                  ].map((x) => (
                    <div key={x.t} className="flex gap-3 rounded-2xl border border-black/10 bg-white p-4">
                      <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5">
                        {x.ic}
                      </div>
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
              id="pricing"
              title="الأسعار (دليل التكلفة)"
              subtitle="اسعار الشفاطات وتكلفة التركيب"
              icon={<Ruler className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  التكلفة تنقسم لجزئين:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="font-extrabold text-slate-900">1) سعر الجهاز</div>
                    <p className="mt-2 text-slate-600 leading-7">
                      يختلف حسب الماركة والمقاس (مثلاً توشيبا 25 غير بلت ان فريش).
                      نساعدك في اختيار الأنسب وشراءه من موزعين معتمدين.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="font-extrabold text-slate-900">2) سعر التركيب</div>
                    <p className="mt-2 text-slate-600 leading-7">
                      يعتمد على: هل يحتاج تخريم (كور)؟ هل يحتاج تمديد دكت؟ هل تركيب شباك
                      أم سقفي داخل جبس؟
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="font-bold text-emerald-900">عرض سعر سريع</div>
                  <p className="mt-1 text-emerald-800 leading-7">
                    اتصل بنا على <strong>{PHONE}</strong> وقل لنا نوع الشفاط وطريقة التركيب، وسنخبرك بتكلفة دقيقة فوراً.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="faq"
              title="الأسئلة الشائعة (FAQ)"
              subtitle="إجابات مختصرة قبل طلب الخدمة"
              icon={<HelpCircle className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-3">
                {faq.map((item, i) => (
                  <details key={i} className="group rounded-2xl border border-black/10 bg-white p-4">
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-slate-500 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-3 text-slate-600 leading-7">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

            <Section
              id="areas"
              title="الخاتمة ومناطق الخدمة"
              subtitle="نخدم القاهرة الكبرى والمدن الجديدة"
              icon={<MapPin className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  نحن نغطي جميع احتياجات التهوية في منزلك. لا تترك مطبخك فريسة للدهون والروائح.
                  تواصل مع أفضل <strong>فني تركيب شفاطات</strong> في مصر لخدمات التركيب والتأسيس والصيانة.
                </p>

                <p>
                  نخدم: <strong>القاهرة الكبرى، التجمع، الشيخ زايد، 6 أكتوبر، والعاصمة الإدارية</strong>.
                </p>

                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="font-extrabold text-slate-900">تواصل الآن</div>
                  <div className="mt-1 text-2xl font-extrabold text-sky-700">{PHONE}</div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP}
                      className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700 transition"
                    >
                      <MessageCircle className="h-5 w-5" />
                      واتساب
                    </a>
                    <a
                      href={`tel:${PHONE}`}
                      className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-900 hover:bg-slate-50 transition"
                    >
                      <Phone className="h-5 w-5" />
                      اتصال
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
              </div>
            </Section>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5">
                  <Fan className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <div className="font-extrabold text-lg text-slate-900">مميزات الخدمة</div>
                  <div className="text-slate-600 text-sm">تركيب مضبوط + هواء أنظف</div>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-slate-700">
                {[
                  "معاينة وتحديد أفضل نظام (بمدخنة/بدون)",
                  "تأسيس دكت بشكل مستقيم لتقليل رجوع الهواء",
                  "فلتر كربوني للمطابخ بدون فتحة خارجية",
                  "صيانة وتنظيف وتغيير فلاتر وأعطال كهرباء",
                ].map((x) => (
                  <li key={x} className="flex gap-2 rounded-2xl border border-black/10 bg-white p-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <MiniCard
              icon={<Filter className="h-5 w-5 text-sky-600" />}
              title="حل بدون مدخنة"
              desc="نظام فلتر كربوني لتنقية الروائح وإعادة الهواء للمطبخ عند صعوبة عمل فتحة خارجية."
            />

            <MiniCard
              icon={<Droplets className="h-5 w-5 text-emerald-600" />}
              title="شفاطات الحمامات"
              desc="شفاط سقفي/مخفي/زجاج لتقليل الرطوبة والعفن وتحسين التهوية."
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
                  href="/saw"
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-900">قص الخرسانة بالمنشار</span>
                  <span className="text-slate-500">←</span>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold">
                <MoveRight className="h-5 w-5 text-sky-700" />
                طلب سريع
              </div>
              <p className="mt-3 text-slate-600 leading-7">
                ابعت على واتساب نوع الشفاط (هرمي/بلت ان/25×25/30×30) وهل فيه فتحة خارجية،
                ونرد عليك بعرض سعر مناسب.
              </p>
              <a
                href={WHATSAPP}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700 transition"
              >
                <MessageCircle className="h-5 w-5" />
                واتساب الآن
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
