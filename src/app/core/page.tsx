import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  MessageCircle,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/core`;
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "القاهرة الكبرى";

const SERVICE_NAME = "تخريم الخرسانة بالكور";
const FOCUS_KEYWORD = "صنايعي كور";

const IMG_HERO = "/images/core/hero.webp"; // optional
const IMG_1 = "/images/core/work-1.webp"; // optional
const IMG_2 = "/images/core/work-2.webp"; // optional
const IMG_3 = "/images/core/work-3.webp"; // optional

export const metadata: Metadata = {
  title: "صنايعي كور في مصر 01055550195",
  description:
    "أفضل صنايعي كور في مصر لعمل فتحات في الخرسانة وتخريم السقف والكمر بدقة. نستخدم ماكينة كور تخريم الخرسانة لعمل فتحات الغاز، التكييف، والسباكة بأسعار تنافسية وبدون تكسير.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "صنايعي كور في مصر 01055550195",
    description:
      "أفضل صنايعي كور في مصر لعمل فتحات في الخرسانة وتخريم السقف والكمر بدقة. نستخدم ماكينة كور تخريم الخرسانة لعمل فتحات الغاز، التكييف، والسباكة بأسعار تنافسية وبدون تكسير.",
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

function StatPill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
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

function SafeImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  // تمنع أخطاء لو الصورة مش موجودة (Next Image أحيانًا يزعّل لو 404)
  // الحل الأبسط: نخليها عادية ب fallback placeholder عبر div
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="h-full w-full object-cover"
        priority={false}
      />
    </div>
  );
}

export default function CorePage() {
  const faq = [
    {
      q: "هل تخريم الخرسانة بالكور يؤثر على سلامة المبنى؟",
      a: "على العكس، تخريم الخرسانة بالكور هو الطريقة الأكثر أماناً لأنه لا يولد اهتزازات مثل التكسير اليدوي، مما يحافظ على تماسك الخرسانة القديمة والجديدة.",
    },
    {
      q: 'ما الفرق بين "كور دريل" و "دريل كور"؟',
      a: "الاسمان (سواء كور دريل أو دريل كور) يشيران لنفس المعدة (Core Drill)، وهي ماكينة الكور المستخدمة في عمل فتحات كور أسطوانية.",
    },
    {
      q: "هل يمكنكم عمل فتحات الغاز في الكمرات؟",
      a: "نعم، نقوم بفتح كور في الكمر لفتحات الغاز، لكن نراعي الابتعاد عن مناطق الحديد الرئيسية لضمان السلامة الإنشائية، وهذا يتطلب صنايعي كور خبير.",
    },
    {
      q: "ما هي فتحات الكور؟",
      a: "فتحات الكور هي فتحات دائرية منتظمة يتم عملها في الخرسانة أو الطوب باستخدام كور تخريم لتمرير المرافق (سباكة، كهرباء، تكييف) بشكل نظيف.",
    },
    {
      q: 'أين أجد "أسعار ماكينة كور تخريم الخرسانة" للشراء؟',
      a: "الماكينات الاحترافية أسعارها مرتفعة جداً. إذا كان لديك مشروع لمرة واحدة، فالأفضل طلب خدمة تخريم الخرسانة منا بدلاً من الشراء.",
    },
  ];

  // ===== JSON-LD =====
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
        {/* خلفية لطيفة */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(14,165,233,0.14),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(34,197,94,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>دقة عالية · بدون تكسير · تسليم نظيف</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
                صنايعي كور في مصر: خدمات تخريم الخرسانة وعمل فتحات كور بدقة ليزر
                (بدون تكسير)
              </h1>

              <p className="mt-5 text-slate-700 leading-8">
                هل تبحث عن <strong>صنايعي كور</strong> محترف لتنفيذ{" "}
                <strong>عمل فتحات في الخرسانة</strong> بدقة متناهية ودون الإضرار
                بسلامة المبنى؟ نحن في <strong>{BRAND}</strong> نقدم لك الحل الأمثل.
                نعتمد على أحدث <strong>ماكينة كور تخريم الخرسانة</strong> لعمل فتحات
                دائرية منتظمة في الأسقف، الحوائط، والكمرات الخرسانية.
              </p>

              <p className="mt-3 text-slate-700 leading-8">
                سواء كنت تحتاج إلى <strong>عمل فتحات الغاز</strong>، أو تجهيز مسارات{" "}
                <strong>التكييف والسباكة</strong>، أو حتى{" "}
                <strong>عمل فتحة مدخنة السخان</strong> — فإننا نضمن لك{" "}
                <strong>فتحة الكور</strong> النظيفة الجاهزة للتركيب فورًا، مع الحفاظ
                على حديد التسليح والخرسانة من الاهتزازات التي تسببها طرق التكسير
                التقليدية. نحن من <strong>شركات تخريم الخرسانة بالكور</strong>{" "}
                المتخصصة في تنفيذ أصعب الفتحات الهندسية.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <StatPill
                  icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />}
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
                    ضع الصور داخل <span className="font-mono">public/images/core</span>
                  </div>
                </div>
              </div>

              {/* لو الصور مش موجودة هتطلع 404 في الكونسول فقط، الصفحة شغالة */}
              <div className="grid grid-cols-1">
                <div className="relative h-64 md:h-80 bg-slate-100">
                  <Image
                    src={IMG_HERO}
                    alt="تخريم الخرسانة بالكور - Core Pro Egypt"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              <div className="p-5 grid gap-3">
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Target className="h-5 w-5 text-sky-600" />
                      فتحات دقيقة
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      مقاسات منتظمة بالملليمتر بدون تكسير.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      أمان إنشائي
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      بدون اهتزازات تحمي الخرسانة واللياسة.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Sparkles className="h-5 w-5 text-amber-600" />
                      تسليم نظيف
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      سحب مخلفات وتبريد مائي لتقليل الأتربة.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {[IMG_1, IMG_2, IMG_3].map((src, i) => (
                    <div key={i} className="relative h-28 rounded-2xl overflow-hidden bg-slate-100 border border-black/10">
                      <Image
                        src={src}
                        alt={`صور تخريم كور - ${BRAND} ${i + 1}`}
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
              id="why"
              title="ما هو تخريم الخرسانة بالكور ولماذا هو الأفضل؟"
              subtitle="لماذا نستخدم ماكينة الكور (Core Drill) بدلاً من التكسير؟"
              icon={<Drill className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  تعد عملية <strong>تخريم الخرسانة بالكور</strong> هي التطور الهندسي الآمن
                  لعمل الممرات والفتحات في المباني القائمة. في الماضي، كان الاعتماد على
                  التكسير اليدوي (الهيلتي) يسبب مشاكل مثل الشروخ وتفكك اللياسة (المحارة).
                </p>

                <p>
                  أما الآن، باستخدام <strong>جهاز تخريم الخرسانه</strong> (المعروف بـ{" "}
                  <strong>كور دريل</strong> أو <strong>دريل كور</strong>)، نقدم المزايا التالية:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      t: "حماية المبنى",
                      d: "لا تسبب اهتزازات، آمنة عند تخريم الخرسانة المسلحة في الأعمدة والأسقف.",
                      ic: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      t: "الدقة المتناهية",
                      d: "مقاسات دقيقة بالملليمتر من 1 بوصة حتى 14 بوصة.",
                      ic: <Target className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "النظافة",
                      d: "سحب المياه والغبار أثناء العمل لتسليم الموقع نظيفاً.",
                      ic: <Droplets className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "السرعة",
                      d: "إنجاز فتحات متعددة في وقت قياسي مقارنة بالتكسير اليدوي.",
                      ic: <Clock className="h-5 w-5 text-amber-600" />,
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
              title="خدماتنا (الاستخدامات والتطبيقات)"
              subtitle="متى تطلب مقاول فتحات كور؟"
              icon={<Wrench className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-5 text-slate-700 leading-8">
                <p>
                  بصفتنا <strong>مقاول فتحات كور</strong> معتمد، نغطي كافة احتياجات المنازل
                  والمشاريع الهندسية. وتشمل خدماتنا:
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Wind className="h-5 w-5 text-sky-600" />
                      1) عمل فتحات التكييف والتهوية
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      متخصصون في <strong>عمل فتحات بالكور</strong> لتمرير مواسير النحاس للتكييفات
                      (السبليت والكونسيلد). نضبط زاوية الميل (Slope) لضمان صرف المياه وتجهيز
                      فتحات الجريلات ومخارج الهواء المركزية.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Flame className="h-5 w-5 text-amber-600" />
                      2) عمل فتحات الغاز الطبيعي
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      نقوم بـ <strong>عمل فتحات الغاز</strong> (الهوايات) في الحوائط والأسقف الخرسانية
                      بقطر مثالي يسمح بالتهوية الآمنة دون تشويه واجهة المبنى.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Droplets className="h-5 w-5 text-sky-600" />
                      3) السباكة والصرف (فتحات الكور للحمامات والمطابخ)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      ننفذ <strong>فتحات كور</strong> لأنابيب الصرف (4 و6 بوصة) ومواسير التغذية.
                      تقنية الكور تضمن عدم تسرب المياه مستقبلًا لأن <strong>فتحة كور</strong> تكون
                      دائرية ومحكمة.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Fan className="h-5 w-5 text-emerald-600" />
                      4) فتحة مدخنة السخان والشفاطات
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      نفتح المسارات المطلوبة للهـود والشفاطات والسخانات بسرعة وبقطر مناسب،
                      لتسهيل <strong>عمل فتحة مدخنة السخان</strong> وتركيب المدخنة فورًا.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex items-center gap-2 font-extrabold text-slate-900">
                      <Layers className="h-5 w-5 text-slate-700" />
                      5) التطبيقات الإنشائية المعقدة (الكمر والسقف)
                    </div>
                    <p className="mt-2 text-slate-600 leading-7">
                      نقوم بـ <strong>فتح كور في الكمر</strong> و<strong>تخريم السقف</strong> لتمرير الكابلات
                      الرئيسية أو فتحات خدمات خاصة، مع مراعاة أماكن حديد التسليح الرئيسي لتجنب قطعه إلا
                      للضرورة وبإشراف هندسي عند الحاجة.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            <Section
              id="tech"
              title="المعدات والتكنولوجيا"
              subtitle="أحدث ماكينة تخريم خرسانة في مصر"
              icon={<Settings className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  نحن لا نستخدم معدات متهالكة. أسطولنا يضم أحدث <strong>ماكينة تخريم خرسانة</strong> من
                  ماركات عالمية (مثل Hilti و Bosch).
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      t: "رؤوس ماسية",
                      d: "رؤوس Diamond Bits قادرة على قطع الخرسانة والحديد معًا بشكل ناعم جدًا.",
                      ic: <BadgeCheck className="h-5 w-5 text-emerald-600" />,
                    },
                    {
                      t: "تثبيت آمن",
                      d: "تثبيت ماكينة الكور بمسامير فيشر قوية لضمان عدم انحراف الفتحة.",
                      ic: <ShieldCheck className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "تبريد مائي",
                      d: "تقليل الغبار وحماية الحديد من الحرارة الزائدة أثناء القص.",
                      ic: <Droplets className="h-5 w-5 text-sky-600" />,
                    },
                    {
                      t: "قياس مضبوط",
                      d: "تحديد السنتر والمقاس بدقة بالملليمتر قبل التنفيذ.",
                      ic: <Ruler className="h-5 w-5 text-amber-600" />,
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
              title="الأسعار (تفاصيل التسعير)"
              subtitle="سعر فتحة الكور وكيف يتم تحديده؟"
              icon={<Building2 className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  الكثير يبحث عن <strong>اسعار فتحات الكور</strong> أو يسأل عن{" "}
                  <strong>أسعار ماكينة كور تخريم الخرسانة</strong> ظنًا أن الشراء أوفر.
                  الحقيقة أن الاستعانة بشركة متخصصة أوفر لأن المعدات باهظة وتحتاج صيانة.
                </p>

                <p className="font-bold text-slate-900">
                  نحن في {BRAND} نقدم نظام تسعير شفاف يعتمد على:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "قطر الفتحة (البوصة): كلما زاد القطر زاد الجهد واستهلاك الماكينة.",
                    "سمك الخرسانة: تخريم السقف بسمك 25 سم يختلف عن حائط 12 سم.",
                    "نوع العنصر الإنشائي: فتح كور في الكمر أصعب من الحائط العادي.",
                    "الكمية: خصومات للمشاريع الكبيرة وعدد الفتحات الكثير.",
                  ].map((x) => (
                    <div key={x} className="flex gap-2 rounded-2xl border border-black/10 bg-white p-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
                      <span className="text-slate-600 leading-7">{x}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="font-bold text-amber-900">نصيحة</div>
                  <p className="mt-1 text-amber-800 leading-7">
                    لا تبحث عن الأرخص فقط — ابحث عن من يضمن عدم تكسير الواجهة أو قطع كابلات الكهرباء
                    المدفونة أثناء تخريم الخرسانة.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="process"
              title="خطوات العمل (Process)"
              subtitle="من المعاينة حتى التسليم"
              icon={<Wrench className="h-5 w-5 text-sky-700" />}
            >
              <ol className="space-y-3">
                {[
                  {
                    t: "المعاينة",
                    d: "تحديد أماكن فتحات الكور والتأكد من خلوها من تمديدات الكهرباء المخفية.",
                  },
                  {
                    t: "التجهيز",
                    d: "تحديد السنتر وتثبيت قاعدة جهاز تخريم الخرسانه.",
                  },
                  {
                    t: "التنفيذ",
                    d: "بدء تخريم كور باستخدام التبريد المائي وسحب المخلفات أولاً بأول.",
                  },
                  {
                    t: "التسليم",
                    d: "إخراج قلب الخرسانة وتسليم فتحة الكور نظيفة وجاهزة.",
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

            <Section
              id="areas"
              title="مناطق الخدمة والخاتمة"
              subtitle="نغطي القاهرة الكبرى والجيزة ومناطق عديدة"
              icon={<MapPin className="h-5 w-5 text-sky-700" />}
            >
              <div className="space-y-4 text-slate-700 leading-8">
                <p>
                  نحن نغطي القاهرة الكبرى والجيزة، بما في ذلك:{" "}
                  <strong>
                    التجمع الخامس، مدينة نصر، المعادي، الشيخ زايد، 6 أكتوبر، العاصمة الإدارية، القليوبية
                  </strong>
                  . أينما كنت، يصلك أقرب <strong>صنايعي كور</strong> بمعداته الكاملة.
                </p>

                <p>
                  لا تغامر بسلامة منزلك بالتكسير العشوائي. تواصل الآن مع أفضل{" "}
                  <strong>شركات تخريم الخرسانة بالكور</strong> في مصر. احصل على معاينة سريعة
                  وتنفيذ فوري لـ <strong>عمل فتحات كور خرسانة</strong>، <strong>تخريم السقف</strong>،
                  وجميع أعمال <strong>تخريم الخرسانة المسلحة</strong>.
                </p>

                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="font-extrabold text-slate-900">رقم الهاتف</div>
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
                  <div className="text-slate-600 text-sm">تنفيذ نظيف + معدات قوية + التزام</div>
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
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{x}</span>
                  </li>
                ))}
              </ul>
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
                  href="/saw"
                  className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-900">قص الخرسانة بالمنشار</span>
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
                مهم للمقاولين
              </div>
              <p className="mt-3 text-slate-600 leading-7">
                إذا كنت تبحث عن <strong>مقاول فتحات كور</strong> أو تقارن بين{" "}
                <strong>شركات تخريم الخرسانة بالكور</strong>، ركّز على دقة المقاس وجودة التشطيب
                وأمان <strong>تخريم الخرسانة المسلحة</strong>.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
