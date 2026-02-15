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
  Phone,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  Building2,
  Cable,
  Waves,
  Construction,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";

const PHONE = "01055550195";
const WHATSAPP = "https://wa.me/201055550195";
const CANONICAL = "/wire";

export const metadata: Metadata = {
  title: "واير تقطيع خرسانة - 01055550195 | قص الكباري والخرسانة المسلحة",
  description:
    "أفضل مقاول قص خرسانة بالواير (Wire Sawing) لتقطيع الكباري والقواعد الضخمة. نمتلك أحدث ماكينة واير لقص أي سمك خرسانة بدقة وبدون اهتزاز. اتصل للمعاينة.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: `${DOMAIN}${CANONICAL}`,
    siteName: BRAND,
    locale: "ar_EG",
    title: "واير تقطيع خرسانة - 01055550195 | قص الكباري والخرسانة المسلحة",
    description:
      "قص الخرسانة بالواير (Diamond Wire Sawing) للكباري والقواعد الضخمة والسماكات الكبيرة بدقة عالية وبدون اهتزاز.",
  },
  robots: { index: true, follow: true },
};

const heroBullets = [
  { icon: <ShieldCheck className="h-5 w-5" />, text: "بدون اهتزاز (Vibration Free) لحماية الهيكل الإنشائي" },
  { icon: <Target className="h-5 w-5" />, text: "عمق قص غير محدود حتى سماكات مترية" },
  { icon: <Sparkles className="h-5 w-5" />, text: "سطح قص أملس يقلل مصاريف التشطيب" },
  { icon: <BadgeCheck className="h-5 w-5" />, text: "فريق مُدرّب لمهام القص المعقدة وتأمين الموقع" },
];

const uses = [
  {
    title: "قص وإزالة الكباري (Bridge Demolition)",
    icon: <Construction className="h-5 w-5" />,
    text: "نقسم الكمرات والكتل الضخمة إلى بلوكات يمكن رفعها بالونش بأمان بدل التكسير الخطِر والركام.",
  },
  {
    title: "قص القواعد والأساسات (Mass Concrete)",
    icon: <Building2 className="h-5 w-5" />,
    text: "قص اللبشات والقواعد الشريطية ذات السماكات الكبيرة لفتح مصاعد أو تعديلات إنشائية.",
  },
  {
    title: "قص الأعمدة والتيجان",
    icon: <Ruler className="h-5 w-5" />,
    text: "قص أعمدة كبيرة القطر وفصل تيجان خرسانية بدقة لا يمكن تحقيقها بالتكسير.",
  },
  {
    title: "العمل في البيئات الحساسة",
    icon: <ShieldCheck className="h-5 w-5" />,
    text: "مناسب للمستشفيات والمحطات والمصانع لأن الضوضاء والاهتزاز أقل بكثير من الطرق التقليدية.",
  },
];

const steps = [
  {
    title: "عمل ثقوب التوجيه (Core Drilling)",
    icon: <Wrench className="h-5 w-5" />,
    text: "نقوم أولاً بعمل ثقوب بالكور في نقاط محسوبة لتمرير الواير داخل الكتلة الخرسانية.",
  },
  {
    title: "تركيب الواير وبكرات التوجيه",
    icon: <Cable className="h-5 w-5" />,
    text: "تمرير الواير الماسي وربطه بالماكينة وبكرات (Pulleys) لضبط زاوية ومسار القطع بدقة.",
  },
  {
    title: "بدء القص والتبريد بالماء",
    icon: <Waves className="h-5 w-5" />,
    text: "تشغيل الماكينة وشد الواير تدريجياً مع تبريد مستمر للمحافظة على الفصوص وتقليل الغبار.",
  },
  {
    title: "الرفع والإزالة بأمان",
    icon: <Construction className="h-5 w-5" />,
    text: "بعد اكتمال القص، يتم رفع البلوك بالونش (Crane) ونقله مع تأمين محيط العمل بالكامل.",
  },
];

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

export default function WirePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="card-soft overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Text */}
          <div className="p-6 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-extrabold text-slate-800">
              <Cable className="h-4 w-4" />
              Wire Sawing • Diamond Beads
            </div>

            <h1 className="mt-4 text-2xl font-extrabold leading-snug text-slate-900 md:text-4xl">
              واير تقطيع خرسانة: الحل الهندسي لقص الكباري والكتل الضخمة (Wire Sawing)
            </h1>

            <p className="mt-4 leading-8 text-slate-700">
              عندما يتعلق الأمر بـ <strong>قص الخرسانة المسلحة</strong> ذات السماكات الكبيرة التي تتجاوز
              قدرة المناشير التقليدية، فإن الحل الوحيد والآمن هو{" "}
              <strong>واير تقطيع خرسانة (Diamond Wire Sawing)</strong>.
              نحن في <strong>{BRAND}</strong> نقدم خدمة القص بالواير للمشاريع الكبرى والمعقدة بدقة عالية
              وبدون اهتزاز، مع فريق مُدرّب وتأمين كامل للموقع.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {heroBullets.map((b, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-3xl border border-black/10 bg-white p-4"
                >
                  <div className="mt-0.5 text-emerald-700">{b.icon}</div>
                  <div className="text-slate-700 leading-7">{b.text}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={WHATSAPP}
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                واتساب مباشر
              </a>
              <a
                href={`tel:${PHONE}`}
                className="btn btn-outline inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
              <Link href="/saw" className="btn btn-ghost">
                خدمات قص الخرسانة بالمنشار
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[260px] lg:min-h-[520px]">
            <Image
              src="/images/wire/hero.webp"
              alt="واير تقطيع خرسانة لقص الكباري والكتل الضخمة (Diamond Wire Sawing)"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-slate-900/15 to-transparent" />

            <div className="absolute bottom-4 right-4 left-4">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/15 bg-black/35 p-4 text-white backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  <MapPin className="h-4 w-4" />
                  نخدم جميع أنحاء مصر (مشاريع كبرى)
                </div>
                <div className="text-sm font-bold opacity-90">
                  معاينة فنية + عرض سعر سريع
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-extrabold text-slate-900">
            صور من أعمال القص بالواير
          </h2>
          <div className="text-sm text-slate-600">نماذج توضيحية (Bridge / Foundations / Beads)</div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              src: "/images/wire/work-1.webp",
              alt: "قص خرسانة بالواير لكمرات وكباري - Wire Sawing",
              cap: "قص كباري وكمرات ضخمة",
            },
            {
              src: "/images/wire/work-2.webp",
              alt: "قص قاعدة خرسانية لبشة مسلحة بالواير - Mass Concrete Cutting",
              cap: "قص قواعد ولِبشات مسلحة",
            },
            {
              src: "/images/wire/work-3.webp",
              alt: "فصوص الواير الماسي (Diamond Beads) أثناء قص الخرسانة",
              cap: "Diamond Beads (الواير الماسي)",
            },
          ].map((x) => (
            <figure key={x.src} className="card-soft overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={x.src}
                  alt={x.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="p-4 text-sm font-extrabold text-slate-800">
                {x.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* What is Wire Sawing */}
      <section className="card-soft p-6 md:p-10">
        <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
          ما هو قص الخرسانة بالواير؟ ولماذا نستخدمه؟
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          تعتمد تقنية القص بالواير على <strong>حبل فولاذي مرن</strong> مرصع بحبيبات{" "}
          <strong>الماس الصناعي (Diamond Beads)</strong>. يتم تمرير الواير حول الجسم الخرساني ثم
          تدويره بسرعة عالية بواسطة ماكينة قوية، ليقوم بـ{" "}
          <strong>قص الخرسانة والحديد</strong> في خط واحد ناعم.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "عمق قص غير محدود",
              icon: <Target className="h-5 w-5" />,
              text: "قص سماكات مترية بسهولة مقارنة بالمنشار القرصي المحدود.",
            },
            {
              title: "مرونة الوصول",
              icon: <Wrench className="h-5 w-5" />,
              text: "مناسب للأماكن الضيقة والزوايا الصعبة وحتى القص تحت الماء (حسب الحالة).",
            },
            {
              title: "قص الحديد والخرسانة",
              icon: <ShieldCheck className="h-5 w-5" />,
              text: "يقطع التسليح الكثيف والخرسانة عالية الإجهاد بسلاسة.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-black/10 bg-white p-5"
            >
              <div className="flex items-center gap-2 font-extrabold text-slate-900">
                <span className="text-emerald-700">{c.icon}</span>
                {c.title}
              </div>
              <p className="mt-2 leading-7 text-slate-700">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Uses */}
      <section className="card-soft p-6 md:p-10">
        <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
          استخدامات وتطبيقات القص بالواير
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {uses.map((u) => (
            <div
              key={u.title}
              className="rounded-3xl border border-black/10 bg-white p-5"
            >
              <div className="flex items-center gap-2 font-extrabold text-slate-900">
                <span className="text-emerald-700">{u.icon}</span>
                {u.title}
              </div>
              <p className="mt-2 leading-7 text-slate-700">{u.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="card-soft p-6 md:p-10">
        <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
          مميزات الخدمة لدينا
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {[
            "بدون اهتزاز: تقليل الشروخ الشعرية (Micro-cracks) في الجزء المتبقي.",
            "سرعة إنجاز: ماكينات قوية لقطع مساحات كبيرة في وقت قياسي.",
            "سطح أملس: ناتج القص مستوي ويقلل أعمال المعالجة.",
            "تأمين الموقع: عزل المنطقة، تنظيم الرفع، ونقل المخلفات بأمان.",
          ].map((t) => (
            <div
              key={t}
              className="flex gap-3 rounded-3xl border border-black/10 bg-white p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-700" />
              <div className="text-slate-700 leading-7">{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="card-soft p-6 md:p-10">
        <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
          الأسعار وكيف يتم حساب التكلفة
        </h2>
        <p className="mt-4 leading-8 text-slate-700">
          يختلف تسعير <strong>واير تقطيع خرسانة</strong> عن القص العادي. غالباً يتم الحساب بـ{" "}
          <strong>المتر المسطح للقطع</strong> (المتر المسطح = طول القطع × عمق الخرسانة).
          السعر النهائي يعتمد على مساحة المقطع، ظروف الموقع، وكثافة التسليح.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "مساحة المقطع", icon: <Ruler className="h-5 w-5" />, text: "كلما زادت مساحة القطع كانت الحسابات أدق." },
            { title: "ظروف الموقع", icon: <Building2 className="h-5 w-5" />, text: "سقالات/ارتفاع/مياه/صعوبة وصول." },
            { title: "كثافة التسليح", icon: <Wrench className="h-5 w-5" />, text: "الحديد الكثيف يستهلك الواير أسرع." },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-black/10 bg-white p-5"
            >
              <div className="flex items-center gap-2 font-extrabold text-slate-900">
                <span className="text-emerald-700">{x.icon}</span>
                {x.title}
              </div>
              <p className="mt-2 leading-7 text-slate-700">{x.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <a href={WHATSAPP} className="btn btn-primary inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            اطلب معاينة على واتساب
          </a>
          <a href={`tel:${PHONE}`} className="btn btn-outline inline-flex items-center gap-2">
            <Phone className="h-4 w-4" />
            اتصال: {PHONE}
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="card-soft p-6 md:p-10">
        <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
          خطوات التنفيذ (Method Statement)
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-black/10 bg-white p-5"
            >
              <div className="flex items-center gap-2 font-extrabold text-slate-900">
                <span className="text-emerald-700">{s.icon}</span>
                {s.title}
              </div>
              <p className="mt-2 leading-7 text-slate-700">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="card-soft p-6 md:p-10">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-emerald-700" />
          <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
            الأسئلة الشائعة (FAQ)
          </h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faq.map((f) => (
            <div
              key={f.q}
              className="rounded-3xl border border-black/10 bg-white p-5"
            >
              <div className="font-extrabold text-slate-900">{f.q}</div>
              <p className="mt-2 leading-7 text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card-soft p-6 md:p-10">
        <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
          للمعاينة والاستفسار
        </h2>
        <p className="mt-3 leading-8 text-slate-700">
          نخدم المشاريع القومية والكبرى في جميع أنحاء مصر: القاهرة، العاصمة الإدارية،
          المحاور والكباري الجديدة، الموانئ، والمناطق الصناعية.
          إذا كان لديك تحدٍ هندسي يتطلب <strong>واير تقطيع خرسانة</strong> فنحن جاهزون.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={`tel:${PHONE}`} className="btn btn-outline inline-flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <a href={WHATSAPP} className="btn btn-primary inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            واتساب
          </a>
          <Link href="/" className="btn btn-ghost">
            العودة للرئيسية
          </Link>
        </div>
      </section>
    </div>
  );
}
