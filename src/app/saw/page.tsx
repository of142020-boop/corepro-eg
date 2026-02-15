import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  Phone,
  MessageCircle,
  Layers,
  Hammer,
  Maximize2,
  MoveRight,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/saw`;
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "القاهرة الكبرى";

const SERVICE_NAME = "قص الخرسانة بالمنشار";
const FOCUS_KEYWORD = "قص خرسانة ليزر";

const IMG_HERO = "/images/saw/hero.webp"; // optional
const IMG_1 = "/images/saw/work-1.webp"; // optional
const IMG_2 = "/images/saw/work-2.webp"; // optional
const IMG_3 = "/images/saw/work-3.webp"; // optional

export const metadata: Metadata = {
  title: "قص الخرسانة بالمنشار في مصر 01055550195 (قص ليزر)",
  description:
    "أفضل شركة قص خرسانة لتقطيع الخرسانة المسلحة باستخدام منشار قص الخرسانة وماكينة قص الجدار. مقاول قص خرسانة متخصص في قص خرسانة السقف، فتح أبواب وشبابيك بدقة ليزر وبدون اهتزاز.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "قص الخرسانة بالمنشار في مصر 01055550195 (قص ليزر)",
    description:
      "أفضل شركة قص خرسانة لتقطيع الخرسانة المسلحة باستخدام منشار قص الخرسانة وماكينة قص الجدار. مقاول قص خرسانة متخصص في قص خرسانة السقف، فتح أبواب وشبابيك بدقة ليزر وبدون اهتزاز.",
    siteName: BRAND,
    locale: "ar_EG",
  },
  robots: { index: true, follow: true },
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

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
      a: "منشار قص الخرسانة ماكينة تثبت على الحائط لقص مسافات طويلة وسميكة بدقة عالية وبدون تدخل يدوي كبير. أما صاروخ قص الخرسانة فهو معدة يدوية للمسافات القصيرة أو الأركان، ودقتها تعتمد على مهارة الفني، وكلاهما ضمن خدمات قص الخرسانة.",
    },
    {
      q: "هل المعدات تقطع الحديد داخل الخرسانة؟",
      a: "نعم. ماكينة قص الخرسانة المسلحة مزودة بأقراص مرصعة بالماس الصناعي ومصممة لقطع الخرسانة والحديد معًا كأنهما قطعة واحدة.",
    },
    {
      q: "هل تسببون إزعاجاً للجيران أو غباراً كثيفاً؟",
      a: "قص الخرسانة بالمنشار أقل إزعاجاً من التكسير ولا يوجد طرق أو دقدقة. كما نستخدم المياه للتبريد مما يمنع تصاعد الغبار بشكل كبير.",
    },
    {
      q: "هل لديكم قص خرسانة ليزر؟",
      a: "قص خرسانة ليزر وصف لنتيجة الدقة والاستقامة. نستخدم مسارات وتوجيه يحقق استقامة تضاهي الليزر مما يقلل تكاليف اللياسة والترميم.",
    },
    {
      q: "هل يوجد لديكم معلم قص جدار للمنازل البسيطة؟",
      a: "نعم. نخدم الأفراد والمقاولين: من فتحة باب واحدة إلى مشاريع ضخمة تتطلب شركات تقطيع خرسانة متخصصة.",
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
    ],
    url: CANONICAL,
    description:
      "قص الخرسانة المسلحة بالمنشار لفتح أبواب وشبابيك، قص خرسانة السقف، قص الجدار، وقص الكمرات تحت إشراف هندسي عند الحاجة، بدقة عالية وبدون اهتزاز.",
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
                قص الخرسانة بالمنشار في مصر: خدمات تقطيع الخرسانة المسلحة بدقة الليزر
                (بدون تكسير)
              </h1>

              <p className="mt-5 text-slate-700 leading-8">
                في عالم البناء والتشييد الحديث، لم يعد التكسير العشوائي هو الحل المقبول
                للتعديلات المعمارية. نحن في <strong>{BRAND}</strong> نقدم مفهوماً جديداً
                لخدمات <strong>قص الخرسانة</strong> في مصر، حيث نعتمد على الدقة المتناهية
                والأمان الإنشائي.
              </p>

              <p className="mt-3 text-slate-700 leading-8">
                سواء كنت تحتاج إلى تعديل في تصميم منزلك، أو فتح باب جديد في جدار خرساني،
                أو إزالة جزء من سقف لعمل سلم داخلي — فإن <strong>قص الخرسانة المسلحة</strong>{" "}
                بالمعدات الحديثة هو الخيار الذي يضمن سلامة المبنى. نستخدم أحدث{" "}
                <strong>منشار قص الخرسانة</strong> و<strong>ماكينة قص الخرسانة</strong>{" "}
                لقطع بخطوط مستقيمة دون شروخ شعرية ودون اهتزازات عنيفة.
              </p>

              <p className="mt-3 text-slate-700 leading-8">
                بصفتنا <strong>شركة قص خرسانة</strong> رائدة، نعرف أن العميل يريد:{" "}
                <strong>الدقة</strong> (قص خرسانة ليزر)، <strong>السرعة</strong>، و
                <strong>النظافة</strong>. وهذا ما نوفره بفريق محترف ومعدات مناسبة لمشاريع
                كبرى ومنازل خاصة.
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
                  الرئيسية
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="p-4 border-b border-black/10 bg-white/70">
                <div className="flex items-center justify-between">
                  <div className="font-extrabold text-slate-900">صور أعمال (اختياري)</div>
                  <div className="text-sm text-slate-600">
                    ضعها في <span className="font-mono">public/images/saw</span>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-80 bg-slate-100">
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
                      مقاسات مضبوطة وحواف جاهزة للتشطيب.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      أمان إنشائي
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      بدون دقدقة أو اهتزازات تؤثر على العناصر المجاورة.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Sparkles className="h-5 w-5 text-amber-600" />
                      تشطيب أنظف
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      تبريد مائي يقلل الغبار ويحافظ على الدقة.
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
                        alt={`قص خرسانة بالمنشار - ${BRAND} ${i + 1}`}
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
              id="what"
              title="ما هو قص الخرسانة بالمنشار (وتقنية القص بالليزر)؟"
              subtitle="لماذا نستخدم منشار تقطيع الخرسانة بدلاً من التكسير؟"
              icon={<Target className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  قد تسمع مصطلح <strong>قص الخرسانة بالليزر</strong> أو <strong>قص خرسانة ليزر</strong>.
                  في الحقيقة لا يُستخدم ضوء الليزر للقطع نفسه، لكنه وصف لدقة الاستقامة.
                  نحن نستخدم <strong>منشار قص خرسانة</strong> على مسارات (Tracks) يتم ضبطها
                  بميزان الليزر، فتخرج النتيجة مستقيمة للغاية.
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      t: "حماية الحديد والخرسانة",
                      d: "قطع الحديد والخرسانة معاً بخط واحد ناعم دون انفصال الحديد عن الخرسانة.",
                      ic: <Layers className="h-5 w-5 text-slate-700" />,
                    },
                    {
                      t: "بدون اهتزاز",
                      d: "نظام دوران سريع + تبريد مائي… لا طرق ولا دقدقة مزعجة.",
                      ic: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      t: "جاهزية التشطيب",
                      d: "حواف ملساء لا تحتاج محارة أو ترميم مكلف في أغلب الحالات.",
                      ic: <Sparkles className="h-5 w-5 text-amber-600" />,
                    },
                    {
                      t: "دقة القياس",
                      d: "تخطيط واستقامة تجعل القص كأنه “مقصوص ليزر”.",
                      ic: <Ruler className="h-5 w-5 text-sky-600" />,
                    },
                  ].map((x) => (
                    <div key={x.t} className="flex gap-3 rounded-2xl border border-black/10 bg-white p-4">
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
              id="services"
              title="خدماتنا وتطبيقات قص الخرسانة"
              subtitle="حلول شاملة من مقاول قص خرسانة معتمد"
              icon={<Wrench className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  نحن لا نقدم خدمة واحدة. نحن <strong>شركات تقطيع خرسانة</strong> متكاملة
                  تغطي الجدار والسقف والكمرات والتشطيبات:
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Building2 className="h-5 w-5 text-sky-600" />
                      1) قص جدار بالمنشار (Wall Sawing)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      فتح أبواب وشبابيك جديدة، دمج غرفتين، فتح مطبخ أمريكان… يتم تثبيت
                      المنشار على الحائط وقص الفتحة بالمقاس المطلوب ثم إزالة الكتلة بأمان.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Layers className="h-5 w-5 text-emerald-600" />
                      2) قص خرسانة السقف (Slab Sawing)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      لعمل سلم داخلي (دوبلكس)، تركيب مصعد، منور سماوي… نستخدم ماكينة قص أرضية
                      بعمق كبير مع تدعيم وتأمين لضمان الأمان أثناء القص.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <ShieldCheck className="h-5 w-5 text-amber-600" />
                      3) قص الخرسانة المسلحة (الجسور والكمرات)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      قص أجزاء من الكمر أو الأعمدة لتمرير دكتات التكييف أو تعديل تصميم (عند الحاجة)
                      مع الالتزام بالاشتراطات وتحت إشراف هندسي صارم.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Hammer className="h-5 w-5 text-slate-700" />
                      4) قص الخرسانة بالصاروخ (للتشطيبات)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      للأماكن الضيقة أو الأعمال البسيطة: صاروخ قص الخرسانة (Hand/Ring Saw)
                      بعمق يصل ~15 سم مناسب للتعديلات الصغيرة والزوايا.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            <Section
              id="equipment"
              title="أسطول المعدات (التكنولوجيا التي نستخدمها)"
              subtitle="الفرق بين ماكينة قص الخرسانة والمنشار اليدوي"
              icon={<Settings className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  بصفتنا <strong>شركة قص خرسانة</strong> محترفة، نمتلك معدات متنوعة تناسب كل موقع:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      t: "منشار قص الخرسانة (Wall Saw)",
                      d: "يثبت على الحوائط والأسقف المائلة ويقص سماكات كبيرة بدقة عالية.",
                      ic: <BadgeCheck className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      t: "ماكينة تقطيع الخرسانة (Floor Saw)",
                      d: "قص الأرضيات والأسقف والأسفلت وفواصل التمدد… بعمق قوي.",
                      ic: <Layers className="h-5 w-5 text-slate-700" />,
                    },
                    {
                      t: "منشار سلك (Wire Saw)",
                      d: "للكتل الخرسانية الضخمة والأعمدة السميكة التي تتطلب عمقاً كبيراً جداً.",
                      ic: <Target className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "منشار يدوي (Cut-off Saw)",
                      d: "معدة خفيفة للحركة السريعة والقصات السطحية والأماكن الضيقة.",
                      ic: <Hammer className="h-5 w-5 text-amber-600" />,
                    },
                  ].map((x) => (
                    <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-4">
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

            <Section
              id="pricing"
              title="الأسعار والتكلفة"
              subtitle="اسعار قص الخرسانة وكيف يتم حسابها؟"
              icon={<Building2 className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  سؤال “بكام المتر؟” طبيعي، لكن <strong>اسعار قص الخرسانة</strong> ليست رقمًا ثابتاً.
                  يتم التقييم فنيًا لضمان أفضل نتيجة:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "سمك الخرسانة: قص سقف 15 سم يختلف عن فلات سلاب 25 سم.",
                    "نوع التسليح: الحديد الكثيف يستهلك الأقراص الماسية أسرع.",
                    "طول القطع: غالبًا يتم الحساب بالمتر الطولي مع أسعار خاصة للمشاريع الكبيرة.",
                    "صعوبة الموقع: أدوار عليا، سقالات، ضيق مكان… وتحديد هل نستخدم المنشار الكبير أم الصاروخ.",
                  ].map((x) => (
                    <div key={x} className="flex gap-2 rounded-2xl border border-black/10 bg-white p-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                      <span className="text-slate-600 leading-7">{x}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                  <div className="font-bold text-sky-900">مهم</div>
                  <p className="mt-1 text-sky-800 leading-7">
                    نضمن أفضل قيمة مقابل سعر مع الالتزام بجودة أقراص الماس وسرعة التنفيذ وأمان الموقع.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="process"
              title="خطوات العمل (Process)"
              subtitle="كيف يقوم معلم قص جدار بتنفيذ المهمة؟"
              icon={<MoveRight className="h-5 w-5 text-sky-700" />}
            >
              <ol className="space-y-3">
                {[
                  {
                    t: "المعاينة والقياس",
                    d: "تحديد أماكن القص بدقة والتأكد من عدم وجود كابلات أو مواسير في المسار.",
                  },
                  {
                    t: "تخطيط الليزر",
                    d: "رسم خطوط القص على الحائط/السقف باستخدام ميزان الليزر لضمان الاستقامة.",
                  },
                  {
                    t: "تثبيت الماكينة",
                    d: "تثبيت المسار (السكة) بمسامير فيشر قوية لضمان ثبات المنشار.",
                  },
                  {
                    t: "عملية القص",
                    d: "قص تدريجي مع تبريد مائي لمنع الغبار والحفاظ على جودة القطع.",
                  },
                  {
                    t: "التأمين والإزالة",
                    d: "تأمين البلوك الخرساني بدعامات/ونش قبل الفصل النهائي ثم إنزاله بأمان ونقل المخلفات.",
                  },
                ].map((s, idx) => (
                  <li key={idx} className="flex gap-3 rounded-2xl border border-black/10 bg-white p-4">
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
              subtitle="نغطي القاهرة الكبرى والجيزة ومناطق عديدة"
              icon={<MapPin className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  نحن في {BRAND} نفخر بكوننا الخيار الأول للمهندسين والاستشاريين وأصحاب المنازل
                  عند البحث عن <strong>ماكينة تقطيع الخرسانة</strong> المتطورة وفنيين محترفين.
                </p>

                <p>
                  نغطي: <strong>القاهرة الكبرى، الجيزة، التجمع الخامس، العاصمة الإدارية، 6 أكتوبر، الشيخ زايد</strong>.
                  لا تغامر بسلامة منشأتك — تواصل مع <strong>مقاول قص خرسانة</strong> متخصص.
                </p>

                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="font-extrabold text-slate-900">احجز معاينتك الآن</div>
                  <div className="mt-1 text-2xl font-extrabold text-sky-700">{PHONE}</div>
                  <p className="mt-2 text-slate-600 leading-7">
                    خدمة العملاء متاحة 24/7 للرد على استفساراتكم حول اسعار قص الخرسانة وتفاصيل التنفيذ.
                  </p>

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
                  "قص مستقيم بموازين ليزر (نتيجة قص خرسانة ليزر)",
                  "بدون اهتزازات عنيفة مقارنة بالتكسير",
                  "حواف ملساء تقلل مصاريف المحارة والترميم",
                  "تأمين البلوك الخرساني قبل الإنزال لضمان السلامة",
                ].map((x) => (
                  <li key={x} className="flex gap-2 rounded-2xl border border-black/10 bg-white p-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <MiniCard
              icon={<MapPin className="h-5 w-5 text-emerald-600" />}
              title="مناطق الخدمة"
              desc="القاهرة الكبرى والجيزة: التجمع الخامس، العاصمة الإدارية، 6 أكتوبر، الشيخ زايد…"
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
                لو بتقارن بين <strong>شركة قص خرسانة</strong> و<strong>مقاول قص خرسانة</strong>:
                ركّز على الدقة، الأمان، التأمين قبل الإنزال، وجودة التشطيب.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
