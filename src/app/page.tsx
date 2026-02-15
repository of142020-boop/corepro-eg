import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Target,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Wrench,
  Ruler,
  Building2,
  Fan,
  Wind,
  Hammer,
  BadgeCheck,
  Layers,
  Gauge,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/`;
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "القاهرة الكبرى";

const IMG_HERO = "/images/home/hero.webp"; // optional
const IMG_CORE = "/images/home/core.webp"; // optional
const IMG_SAW = "/images/home/saw.webp"; // optional
const IMG_HOODS = "/images/home/hoods.webp"; // optional

export const metadata: Metadata = {
  title: "كور برو مصر: قص وتخريم الخرسانة | تركيب شفاطات مطابخ - 01055550195",
  description:
    "شركة Core Pro Egypt الأولى في قص الخرسانة بالمنشار (ليزر) وتخريم الكور لعمل الفتحات. فني تركيب شفاط المطبخ وتركيب مداخن وشفاطات حمام. دقة، أمان، وأفضل سعر.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "كور برو مصر: قص وتخريم الخرسانة | تركيب شفاطات مطابخ - 01055550195",
    description:
      "شركة Core Pro Egypt الأولى في قص الخرسانة بالمنشار (ليزر) وتخريم الكور لعمل الفتحات. فني تركيب شفاط المطبخ وتركيب مداخن وشفاطات حمام. دقة، أمان، وأفضل سعر.",
    siteName: BRAND,
    locale: "ar_EG",
  },
  robots: { index: true, follow: true },
};

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm">
      {icon}
      <span className="text-slate-700">{text}</span>
    </div>
  );
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
  image: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-sm overflow-hidden">
      <div className="relative h-40 bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5">
            {icon}
          </div>
          <div className="font-extrabold text-lg text-slate-900">{title}</div>
        </div>
        <p className="mt-3 text-slate-600 leading-7">{desc}</p>

        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
              <span className="text-slate-600 leading-7">{b}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-900 hover:bg-slate-50 transition"
        >
          تفاصيل الخدمة
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

export default function HomePage() {
  const faq = [
    {
      q: 'ما الفرق بين "الكور" و "قص الخرسانة"؟',
      a: "تخريم الكور يستخدم لعمل فتحات دائرية (للسباكة، الغاز، الشفاطات). أما قص الخرسانة بالمنشار فيستخدم لعمل قطوع مستقيمة وطويلة (لفتح باب، إزالة سقف، قص جدار).",
    },
    {
      q: "هل تقومون بتركيب شفاط توشيبا وتأسيس الفتحة له؟",
      a: "نعم، نقوم بعمل فتحة الكور بالمقاس المناسب (مثل 30×30 سم) ثم يقوم الفني بتركيب الشفاط وتفنيشه بالكامل.",
    },
    {
      q: "هل العمل يسبب غباراً في الشقة المفروشة؟",
      a: "في قص الخرسانة بالمنشار وتخريم الكور نستخدم التبريد بالمياه وسحب الغبار، مما يقلل الأتربة بشكل كبير مقارنة بالتكسير اليدوي، وهو مناسب للشقق المسكونة.",
    },
    {
      q: "كيف يتم تحديد السعر؟",
      a: "السعر يتحدد حسب نوع الخدمة (قص/كور/تركيب)، سمك الخرسانة، وعدد الفتحات أو الأمتار. اتصل بنا للحصول على معاينة وعرض سعر فوري.",
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
      "مصر الجديدة",
      "6 أكتوبر",
      "الشيخ زايد",
      "المعادي",
      "الشروق",
      "مدينتي",
      "العاصمة الإدارية",
    ],
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [DOMAIN, WHATSAPP],
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
    itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: DOMAIN }],
  };

  const jsonLdServices = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "قص الخرسانة بالمنشار (قص ليزر)",
      provider: { "@type": "LocalBusiness", name: BRAND, url: DOMAIN, telephone: PHONE_INT },
      url: `${DOMAIN}/saw`,
      areaServed: ["القاهرة الكبرى", "الجيزة"],
      description:
        "قص خرسانة بالمنشار لفتح أبواب وشبابيك، قص السقف، وفواصل التمدد بدقة واستقامة عالية وبدون تكسير.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "تخريم الخرسانة بالكور (Core Drilling)",
      provider: { "@type": "LocalBusiness", name: BRAND, url: DOMAIN, telephone: PHONE_INT },
      url: `${DOMAIN}/core`,
      areaServed: ["القاهرة الكبرى", "الجيزة"],
      description:
        "تخريم كور لعمل فتحات التكييف والغاز والسباكة ومدخنة السخان، وفتح كور في الكمر والأعمدة وفق معايير الأمان.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "تركيب الشفاطات والتهوية",
      provider: { "@type": "LocalBusiness", name: BRAND, url: DOMAIN, telephone: PHONE_INT },
      url: `${DOMAIN}/hoods`,
      areaServed: ["القاهرة الكبرى", "الجيزة"],
      description:
        "تركيب شفاطات مطابخ وحمامات (بلت ان/هرمي/مسطح/شباك/سقفي) + تأسيس دكت + فلتر كربوني + صيانة وتنظيف.",
    },
  ];

  return (
    <main className="bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLdLocalBusiness, jsonLdFaq, jsonLdBreadcrumbs, ...jsonLdServices]),
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
                <span>قص خرسانة · تخريم كور · تركيب شفاطات</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
                الحل المتكامل للتعديلات الخرسانية والتهوية في مصر
              </h1>

              <p className="mt-3 text-lg md:text-xl font-bold text-slate-700">
                قص خرسانة ليزر | تخريم كور | تركيب شفاطات
              </p>

              <p className="mt-5 text-slate-700 leading-8">
                مرحباً بكم في <strong>{BRAND}</strong>، شريكك الموثوق للمهمات الصعبة.
                نجمع بين الدقة الهندسية في قص وتخريم الخرسانة المسلحة وبين الاحترافية الفنية
                في تركيب أنظمة التهوية والشفاطات.
              </p>

              <p className="mt-3 text-slate-700 leading-8">
                سواء كنت مقاولاً تبحث عن شركة قص خرسانة لمشروع كبير، أو صاحب منزل يحتاج صنايعي
                كور لعمل فتحة غاز، أو تبحث عن فني تركيب شفاط لضبط تهوية مطبخك — نحن هنا لخدمتك
                بمعدات حديثة وفريق محترف يغطي القاهرة والجيزة.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <Pill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="أمان إنشائي" />
                <Pill icon={<Target className="h-4 w-4 text-sky-600" />} text="دقة عالية" />
                <Pill icon={<Gauge className="h-4 w-4 text-amber-600" />} text="سرعة إنجاز" />
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white shadow-sm hover:bg-emerald-700 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  واتساب مباشر
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-900 shadow-sm hover:bg-slate-50 transition"
                >
                  <Phone className="h-5 w-5" />
                  اتصال: {PHONE}
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>نخدم: {ADDRESS_TEXT} والجيزة والمدن الجديدة</span>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="relative h-72 md:h-[420px] bg-slate-100">
                <Image
                  src={IMG_HERO}
                  alt={`${BRAND} - قص وتخريم الخرسانة وتركيب الشفاطات`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Hammer className="h-5 w-5 text-amber-600" />
                    قص بالمنشار
                  </div>
                  <p className="mt-2 text-slate-600 leading-7">
                    فتح أبواب/شبابيك وخطوط مستقيمة.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-sky-600" />
                    تخريم كور
                  </div>
                  <p className="mt-2 text-slate-600 leading-7">
                    فتحات دائرية نظيفة بدون تكسير.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <Fan className="h-5 w-5 text-emerald-600" />
                    شفاطات
                  </div>
                  <p className="mt-2 text-slate-600 leading-7">
                    تركيب/تأسيس دكت/صيانة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* quick links */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <ServiceCard
              title="قص الخرسانة بالمنشار (تقنية الليزر)"
              desc="قص مستقيم ونظيف لفتح أبواب وشبابيك وقص السقف وفواصل التمدد — بدون تكسير عشوائي."
              bullets={[
                "قص جدار بالمنشار لفتح وتوسيع الفتحات.",
                "قص خرسانة السقف لفتحات السلالم والمصاعد.",
                "قص بالصاروخ للأماكن الضيقة والتشطيب.",
              ]}
              href="/saw"
              icon={<Hammer className="h-5 w-5 text-amber-600" />}
              image={IMG_SAW}
            />
            <ServiceCard
              title="تخريم الخرسانة بالكور (Core Drilling)"
              desc="فتح كور بمقاسات دقيقة بدون اهتزاز — لتأسيس المرافق والفتحات الهندسية."
              bullets={[
                "فتحات التكييف والتهوية بميل مضبوط.",
                "فتحات الغاز وفق الاشتراطات.",
                "فتحات السباكة والصرف 4 و6 بوصة.",
              ]}
              href="/core"
              icon={<Ruler className="h-5 w-5 text-sky-600" />}
              image={IMG_CORE}
            />
            <ServiceCard
              title="تركيب الشفاطات والتهوية"
              desc="بعد تجهيز الفتحة بالكور، نقوم بتركيب الشفاطات وتأسيس الدكت والصيانة."
              bullets={[
                "تركيب بلت ان/هرمي/مسطح/شباك.",
                "حلول بمدخنة أو فلتر كربوني بدون مدخنة.",
                "تركيب شفاطات حمام وسقفي داخل الجبس.",
              ]}
              href="/hoods"
              icon={<Fan className="h-5 w-5 text-emerald-600" />}
              image={IMG_HOODS}
            />
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <div className="mx-auto max-w-6xl px-4 pb-14 space-y-6">
        <Section
          id="why"
          title="لماذا تختار Core Pro Egypt؟"
          subtitle="التميز في كل تفصيلة"
          icon={<BadgeCheck className="h-5 w-5 text-sky-700" />}
        >
          <div className="grid gap-3 md:grid-cols-2">
            {[
              {
                t: "معدات حديثة",
                d: "نمتلك أحدث ماكينة قص الخرسانة وكور تخريم مستوردة لضمان السرعة والدقة.",
                ic: <Layers className="h-5 w-5 text-emerald-600" />,
              },
              {
                t: "أمان تام",
                d: "لا نقوم بقص الخرسانة المسلحة إلا بعد دراسة الموقع لضمان عدم تأثير العمل على الهيكل الإنشائي.",
                ic: <ShieldCheck className="h-5 w-5 text-sky-600" />,
              },
              {
                t: "أسعار تنافسية",
                d: "أفضل اسعار قص الخرسانة وسعر فتحة الكور في مصر مع باقات خاصة للمقاولين والمشاريع.",
                ic: <Target className="h-5 w-5 text-amber-600" />,
              },
              {
                t: "خدمة شاملة",
                d: "بدلاً من التعامل مع أكثر من فني: نفتح الكور + نركب الشفاط + نفنيش التشطيب.",
                ic: <Wrench className="h-5 w-5 text-slate-700" />,
              },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border border-black/10 bg-white p-6">
                <div className="flex items-center gap-2 font-extrabold text-slate-900">
                  {x.ic}
                  <span>{x.t}</span>
                </div>
                <p className="mt-2 text-slate-600 leading-7">{x.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="areas"
          title="مناطق الخدمة"
          subtitle="فريقنا يغطي القاهرة الكبرى والجيزة بالكامل"
          icon={<MapPin className="h-5 w-5 text-sky-700" />}
        >
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "التجمع الخامس والقاهرة الجديدة",
              "مدينة نصر ومصر الجديدة",
              "6 أكتوبر والشيخ زايد",
              "المعادي والشروق ومدينتي",
              "العاصمة الإدارية الجديدة",
              "الجيزة بالكامل",
            ].map((x) => (
              <div key={x} className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="text-slate-700">{x}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="faq"
          title="الأسئلة الشائعة (FAQ)"
          subtitle="إجابات مختصرة قبل طلب الخدمة"
          icon={<Sparkles className="h-5 w-5 text-sky-700" />}
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
          id="cta"
          title="لا تضيع وقتك في البحث عن فنيين متعددين"
          subtitle="وجهتك الأولى لكل ما يخص الخرسانة والتهوية"
          icon={<Building2 className="h-5 w-5 text-sky-700" />}
        >
          <div className="grid gap-4 md:grid-cols-2 md:items-center">
            <div className="text-slate-700 leading-8">
              <p>
                <strong>{BRAND}</strong> هي الحل الكامل: اطلب معلم قص جدار، أو صنايعي كور،
                أو فني تركيب شفاطات — وكل ذلك من خلال فريق واحد ومعدات احترافية.
              </p>
              <p className="mt-3">
                اتصل الآن لطلب معاينة وعرض سعر فوري حسب طبيعة العمل.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6">
              <div className="font-extrabold text-slate-900">تواصل الآن</div>
              <div className="mt-1 text-2xl font-extrabold text-sky-700">{PHONE}</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-700 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  واتساب مباشر
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 font-bold text-slate-900 hover:bg-slate-50 transition"
                >
                  <Phone className="h-5 w-5" />
                  اتصال
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>{ADDRESS_TEXT} والجيزة</span>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
