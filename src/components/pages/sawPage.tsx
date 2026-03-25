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
  Scissors,
  Search,
  Zap,
} from "lucide-react";

const BRAND = "Core Pro Egypt";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/saw`;
const PHONE = "01055550195";
const PHONE_INT = "+20" + PHONE.replace(/^0/, "");
const WHATSAPP = "https://wa.me/201055550195";
const ADDRESS_TEXT = "الحي العاشر مدينة نصـر";

const SERVICE_NAME = "قص وتحضيع الخرسانة بالمنشار";

const IMG_HERO = { src: "/images/saw/hero.webp", width: 800, height: 800 };
const IMG_1 = { src: "/images/saw/work-1.webp", width: 800, height: 800 };
const IMG_2 = { src: "/images/saw/work-2.webp", width: 800, height: 800 };
const IMG_3 = { src: "/images/saw/work-3.webp", width: 800, height: 800 };

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
          <HeadingTag className={`font-black tracking-tight text-slate-900 border-r-4 border-sky-600 pr-3 ${level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
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

export default function SawPage() {
  const faq = [
    {
      q: "هل يمكن قص جدار بالمنشار أثناء سكن العائلة في المنزل؟",
      a: "نعم، بكل تأكيد. تقنية القص التي نستخدمها تعتمد بالكامل على الماء، مما يمنع تصاعد الأتربة والغبار تماماً. كما أن مستوى الضوضاء أقل بكثير من التكسير العادي، مما يجعله آمناً وممناسباً للشقق والفيلات المسكونة.",
    },
    {
      q: "ما هو أقصى سمك يمكن لـ ماكينة قص الخرسانة التعامل معه؟",
      a: "معداتنا الحديثة قادرة على قطع جدران أو أسقف خرسانية تصل سماكتها إلى 70 سم وأكثر، وذلك باستخدام مناشير ذات أقطار ضخمة، وفي حال زيادة السمك عن ذلك نلجأ لتقنية \"واير القص الماسي\".",
    },
    {
      q: "هل توفرون ضماناً على عدم إضرار المبنى أثناء قص الخرسانة المسلحة؟",
      a: "بالطبع، هذه هي الميزة التنافسية الأكبر للقطع الآلي. القطع يتم بفصل الجزء المطلوب بسلاسة تامة دون إرسال أي موجات ارتدادية أو اهتزازية للأعمدة أو الأساسات، مما يضمن بقاء المبنى سليماً بنسبة 100%.",
    },
    {
      q: "متى أستخدم صاروخ قص الجدران بدلاً من منشار السكة؟",
      a: "نستخدم الصاروخ المائي للفتحات الجدارية الصغيرة جداً، أو لعمل مجاري (تفتيح مسارات) لأسلاك الكهرباء ومواسير المياه السطحية، بينما نستخدم منشار السكة لفتح الأبواب، النوافذ، أو إزالة جدران كاملة.",
    },
    {
      q: "كيف يمكنني طلب معاينة ومعرفة سعر منشار تقطيع الخرسانة لمشروعي؟",
      a: "الأمر بسيط جداً، يمكنك الضغط على زر \"الواتساب\" أو الاتصال بنا مباشرة على أرقامنا الموضحة في الموقع. سيقوم مهندس متخصص بالرد عليك وأخذ تفاصيل مشروعك لتقديم عرض سعر أولي وتحديد موعد لزيارة الموقع.",
    },
  ];

  const keywords = [
    "قص خرسانة", "تقطيع الخرسانة", "تقطيع خرسانة", "قص الخرسانة", "قص خرسانات",
    "قص الخرسانة بالليزر", "قص خرسانة ليزر", "منشار قص خرسانة", "منشار قص الخرسانة", "منشار تقطيع خرسانة",
    "ماكينة قص خرسانة", "ماكينة قص الخرسانة", "ماكينة قص الخرسانة المسلحة", "شركة قص خرسانة",
    "قص جدار بالمنشار", "معلم قص جدار", "مقاول قص خرسانة", "قص خرسانة السقف", "قص الخرسانة بالصاروخ",
    "صاروخ قص الخرسانة", "اسعار قص الخرسانة", "قص الخرسانة المسلحة", "شركات تقطيع خرسانة",
    "ماكينة تقطيع الخرسانة", "منشار تقطيع الخرسانة", "منشار قطع الخرسانة", "ماكينة قطع الخرسانة",
    "قص الجدار بالليزر", "قص جدران", "ماكينة قص الخرسانة المسلحة مصر", "قص جدار", "صاروخ قص الجدران",
    "قص جدار بالصاروخ", "قص الجدران بالصاروخ", "صاروخ لقص الجدران", "صاروخ قص جدران", "تكسير الجدار بالصاروخ",
    "تقطيع الخرسانة بالمنشار", "ماكينة تقطيع الخرسانة المسلحة", "صاروخ تقطيع الخرسانة", "شركات تقطيع الخرسانة",
    "سعر منشار تقطيع الخرسانة"
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
    areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "العاصمة الإدارية", "6 أكتوبر", "الشيخ زايد", "مدينة نصر", "المعادي", "القليوبية"],
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [DOMAIN, WHATSAPP],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "أفضل شركة قص خرسانة وتقطيع الخرسانة المسلحة بالمنشار في مصر",
    serviceType: "Concrete Sawing and Cutting",
    provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_INT, url: DOMAIN },
    areaServed: ["القاهرة الكبرى", "الجيزة", "التجمع الخامس", "مدينة نصر", "المعادي", "الشيخ زايد", "6 أكتوبر", "العاصمة الإدارية", "القليوبية"],
    url: CANONICAL,
    description: "أفضل شركة لقص الخرسانة بالمنشار وتقطيع الخرسانة المسلحة بدقة الليزر لفتح الأبواب والنوافذ وقص الأسقف بأحدث ماكينة قص خرسانة.",
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

  return (
    <main className="bg-slate-50" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jsonLdLocalBusiness,
            jsonLdService,
            jsonLdFaq,
          ]),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 md:pt-16 md:pb-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-800 shadow-sm">
                <Sparkles className="h-4 w-4 text-sky-600" />
                <span>قص مستقيم 100% · حواف ناعمة · بدون دقدقة</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-sky-600 pr-4">
                أفضل شركة قص خرسانة وتقطيع الخرسانة المسلحة بالمنشار في مصر
              </h1>

              <div className="mt-5 text-slate-800 leading-9 text-lg space-y-4">
                <p>
                  مرحباً بك في دليلك الشامل والنهائي لأعمال القص والتقطيع الإنشائي. إذا كنت تواجه تحديات في إجراء تعديلات معمارية على مبنى قائم، وتخشى من التصدعات أو الانهيارات الجزئية التي يسببها التكسير العشوائي، فأنت في المكان الصحيح. نحن نمثل <strong>أفضل شركة قص خرسانة</strong> في مصر، نقدم حلولاً هندسية متكاملة تعتمد على أحدث تكنولوجيا القطع الماسي.
                </p>
                <p>
                  بصفتنا <strong>مقاول قص خرسانة</strong> معتمد وذو خبرة ميدانية واسعة، نحن لا نستخدم أدوات بدائية، بل نعتمد على <strong>تقطيع الخرسانة بالمنشار</strong> لضمان أعلى درجات الأمان الإنشائي. سواء كنت تحتاج إلى <strong>قص خرسانة السقف</strong> لعمل سلم داخلي، أو تبحث عن <strong>معلم قص جدار</strong> لفتح أبواب وشبابيك، فإننا نضمن لك استقامة تامة وحواف ناعمة لا تحتاج إلى ترميم مكلف.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={WHATSAPP}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-600 px-10 py-5 font-black text-white shadow-[0_20px_40px_rgba(59,130,246,0.3)] hover:bg-sky-700 transition transform hover:-translate-y-1 text-xl"
                >
                  <Phone className="h-6 w-6" />
                  اطلب المعاينة الآن
                </Link>
              </div>
            </div>

            <div className="rounded-[48px] border-4 border-white bg-white shadow-2xl overflow-hidden p-3 relative">
              <div className="relative aspect-square rounded-[40px] overflow-hidden bg-slate-100 shadow-inner">
                <Image src={IMG_HERO} alt="قص خرسانة ليزر بالمنشار - Core Pro" fill priority className="object-cover" />
              </div>
              <div className="p-4 grid grid-cols-3 gap-3">
                {[IMG_1, IMG_2, IMG_3].map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm">
                    <Image src={img} alt={`أعمال تقطيع خرسانة ليزر ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE CONTENT */}
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            
            <Section
              id="why-sawing"
              title="ثورة تقطيع الخرسانة: لماذا تختار القطع الآلي على التكسير؟"
            >
              <p>
                في الماضي، كان <strong>تكسير الجدار بالصاروخ</strong> اليدوي أو آلات الدق الثقيلة (الهيلتي) هو الخيار الوحيد لتوسعة الغرف أو إزالة الجدران. ولكن هذه الطرق التقليدية تنتج عنها اهتزازات عنيفة تؤدي إلى شروخ عميقة في الهيكل الخرساني.
              </p>
              <p className="mt-4">
                اليوم، تغيرت قواعد اللعبة بفضل تقنيات <strong>قص الخرسانة</strong>. نحن نستخدم <strong>ماكينة تقطيع الخرسانة</strong> المتطورة التي تقطع بأسلوب الاحتكاك الدائري السلس. سواء كنا نقوم بـ <strong>تقطيع خرسانة</strong> عادية أو <strong>تقطيع الخرسانة المسلحة</strong> بكثافة، فإن النتيجة تكون <strong>قص خرسانات</strong> دقيق، سريع، وآمن تماماً على المبنى. لا مزيد من الضوضاء المزعجة، ولا مزيد من الغبار الكثيف، بفضل أنظمة التبريد المائي التي نستخدمها مع كل <strong>منشار قطع الخرسانة</strong>.
              </p>
            </Section>

            <Section
              id="laser-tech"
              title="التكنولوجيا الماسية: قص الخرسانة بالليزر (منشار السكة)"
            >
              <p>
                يُطلق العديد من المهندسين والعملاء مصطلح <strong>قص الخرسانة بالليزر</strong> أو <strong>قص خرسانة ليزر</strong> على هذه التقنية، نظراً للاستقامة الفائقة التي تنتج عنها والتي تشبه خط الليزر. في الواقع، هذه التقنية تعتمد على <strong>منشار قص خرسانة</strong> يسمى "منشار السكة" (Track Saw).
              </p>
              
              <div className="mt-8 bg-sky-50 p-8 rounded-3xl border border-sky-100">
                <h3 className="text-xl font-black text-slate-900 mb-4">كيف يعمل قص الجدار بالليزر؟</h3>
                <p className="text-sm">
                  يتم تثبيت مسار معدني (سكة) على الحائط المراد قصه، وتتحرك عليه <strong>ماكينة قص الخرسانة</strong> بشكل آلي ومحسوب. هذا يضمن أن يكون <strong>قص الجدار بالليزر</strong> مستقيماً تماماً بنسبة خطأ 0%. هذه الآلية تجعلنا من أفضل <strong>شركات تقطيع خرسانة</strong> قادرة على تسليم فتحات أبواب أو شبابيك جاهزة فوراً لتركيب الحلوق الخشبية أو الألومنيوم دون الحاجة لأي أعمال "محارة" لتسوية الأطراف.
                </p>
              </div>
            </Section>

            <Section
              id="services-list"
              title="خدماتنا المتكاملة في قص وتقطيع الخرسانة"
              subtitle="نحن نفخر بتغطية كافة احتياجات السوق المصري، من التعديلات المنزلية البسيطة إلى مشاريع البنية التحتية العملاقة."
            >
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">1. قص جدار بالمنشار (فتح أبواب وشبابيك)</h3>
                  <p>
                    عندما تقرر تغيير التصميم الداخلي لفيلاك أو شقتك، فإن <strong>قص جدار بالمنشار</strong> هو الحل الأمثل. يقوم <strong>معلم قص جدار</strong> متخصص من فريقنا بمعاينة الموقع، وتحديد الأبعاد بدقة، ثم تشغيل <strong>منشار تقطيع الخرسانة</strong> لفصل الجزء المراد إزالته ككتلة واحدة صلبة. نحن نتعامل مع <strong>قص جدران</strong> الطوب والخرسانة بنفس الكفاءة العالية، لنوفر لك <strong>قص جدار</strong> نظيف ومستقيم.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">2. قص خرسانة السقف (فتحات السلالم والمصاعد)</h3>
                  <p>
                    التعديلات الرأسية بين الطوابق تتطلب حذراً مضاعفاً. إذا كنت ترغب في دمج شقتين لعمل "دوبلكس"، أو تأسيس مسار لمصعد جديد، فإننا نقدم خدمة <strong>قص خرسانة السقف</strong>. نستخدم <strong>ماكينة قطع الخرسانة</strong> الأرضية (Slab Sawing) التي تخترق أسقفاً تصل سماكتها إلى 40 سم وأكثر، مع تأمين كامل للبلوك الخرساني قبل فصله لمنع سقوطه المفاجئ، وهذا ما يميزنا كـ <strong>أفضل شركة قص خرسانة</strong> في تأمين مواقع العمل.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">3. قص الخرسانة المسلحة والمشاريع الكبرى</h3>
                  <p>
                    التعامل مع الجسور، السدود، أو قواعد الماكينات الثقيلة يتطلب قدرات استثنائية. نمتلك <strong>ماكينة قص الخرسانة المسلحة</strong> المزودة بمحركات هيدروليكية عملاقة تخترق أصلب أنواع الحديد والخرسانة ذات الإجهاد العالي، لضمان <strong>قص الخرسانة المسلحة</strong> بنجاح وفي وقت قياسي.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="water-saw"
              title="الاستخدامات المتخصصة: قص الخرسانة بالصاروخ المائي"
              subtitle="في الأماكن الضيقة التي لا يمكن تركيب معدات ضخمة فيها، نلجأ إلى تقنية قص الخرسانة بالصاروخ المائي."
            >
              <div className="bg-slate-900 text-white p-8 rounded-3xl mb-8">
                <h3 className="text-xl font-black text-sky-400 mb-4">صاروخ قص الخرسانة مقابل التكسير العادي</h3>
                <p className="text-slate-300">
                  نحن نستخدم <strong>صاروخ قص الخرسانة</strong> الاحترافي المزود بمدخل للمياه. هذا الـ <strong>صاروخ تقطيع الخرسانة</strong> يقص بعمق يصل إلى 15 سم بفضل أسطوانات الألماس المتطورة.
                </p>
                <p className="mt-4 text-slate-300">
                  تنتشر في الأسواق مصطلحات مثل <strong>قص جدار بالصاروخ</strong> أو <strong>قص الجدران بالصاروخ</strong>، ولكن الفارق يكمن في المشغل والمعدة. فريقنا يستخدم <strong>صاروخ قص جدران</strong> متطور ومؤمن تماماً، ليكون البديل المثالي لمنع المخاطر الناتجة عن <strong>تكسير الجدار بالصاروخ</strong> العادي الذي يستخدمه العمال غير المتخصصين. إذا كنت تبحث عن <strong>صاروخ لقص الجدران</strong> في الزوايا المعقدة، فنحن نملك الأداة والخبرة لتنفيذ ذلك.
                </p>
              </div>
            </Section>

            <Section
              id="rent-vs-buy"
              title="ماكينات ومعدات قص الخرسانة: استئجار الخدمة أم الشراء؟"
            >
              <p>
                كثير من المقاولين المبتدئين أو أصحاب المشاريع الفردية يبحثون عن <strong>صاروخ قص الجدران للبيع</strong>، أو يسألون عن <strong>سعر منشار تقطيع الخرسانة</strong>. الحقيقة الهندسية التي يجب إدراكها هي أن امتلاك هذه المعدات يتطلب خبرة عميقة في الصيانة والتشغيل المستمر.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-black text-slate-900 mb-4">لماذا طلب الخدمة أفضل من شراء المعدة؟</h3>
                <p>
                  تتفاوت أسعار المعدات بشكل كبير، وخصوصاً <strong>ماكينة قص الخرسانة المسلحة مصر</strong> التي يتطلب استيرادها مبالغ ضخمة وتكاليف صيانة مستمرة لأسطوانات الألماس الباهظة. بدلاً من البحث عن <strong>صاروخ قص الجدران للبيع</strong> وتحمل عبء صيانته وإصلاحه، يمكنك ببساطة استدعاء <strong>مقاول قص خرسانة</strong> محترف.
                </p>
                <p className="mt-4">
                  الاعتماد على <strong>شركات تقطيع خرسانة</strong> متخصصة مثلنا يعني أنك تدفع فقط مقابل المتر المقطوع، وتحصل على نتيجة مضمونة باستخدام أحدث <strong>ماكينة قص خرسانة</strong> وأقوى <strong>منشار قص الخرسانة</strong> دون أن تتحمل تكلفة إهلاك المعدات.
                </p>
              </div>
            </Section>

            <Section
              id="pricing"
              title="دليلك الشامل لـ اسعار قص الخرسانة في مصر"
              subtitle="نحن نعتمد سياسة التسعير الشفاف والعادل. اسعار قص الخرسانة لا تُحدد جزافاً، بل تعتمد على معاينة هندسية دقيقة."
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">كيف يتم حساب التكلفة؟</h3>
                  <p className="mb-4">عندما تتواصل معنا لطلب <strong>منشار تقطيع خرسانة</strong>، نقوم بتحديد السعر بناءً على:</p>
                  <ul className="list-disc pr-6 space-y-3 text-sm italic">
                    <li><strong>سمك الخرسانة:</strong> كلما زاد سمك الجدار أو السقف المراد قصه، تطلب الأمر أسطوانات ماسية بقطر أكبر، مما يؤثر على السعر.</li>
                    <li><strong>كثافة التسليح:</strong> <strong>قص الخرسانة المسلحة</strong> بحديد كثيف (مثل أسوار البنوك أو كمرات الجسور) يستغلك وقتاً وجهداً أكبر من الخرسانة العادية أو مباني الطوب.</li>
                    <li><strong>موقع العمل:</strong> العمل في ارتفاعات شاهقة أو أماكن يصعب الوصول إليها يحتاج لتجهيزات سلامة وسقالات خاصة.</li>
                  </ul>
                  <p className="mt-6 font-bold text-sky-700">
                    نحن نقدم في <strong>شركة قص خرسانة</strong> عروضاً حصرية وتخفيضات كبرى على أسعار الأمتار الطولية للمشاريع الكبيرة والتعاقدات التجارية.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="steps"
              title="مراحل العمل: كيف نقوم بـ تقطيع الخرسانة بالمنشار؟"
            >
              <div className="space-y-6">
                {[
                  { t: "المعاينة والتخطيط", d: "نقوم برسم خطوط القطع على الجدار أو السقف باستخدام ميزان الليزر المائي لضمان الاستقامة." },
                  { t: "التثبيت الآمن", d: "يقوم الفنيون بتثبيت مسار ماكينة تقطيع الخرسانة المسلحة بجوايط صلبة في الجدار." },
                  { t: "توصيل التبريد", d: "يتم توصيل خراطيم المياه لضمان بقاء منشار قطع الخرسانة بارداً وللقضاء على الغبار." },
                  { t: "عملية القطع", d: "تتحرك ماكينة قطع الخرسانة ببطء واحترافية على السكة، وتقوم بعملية القطع تدريجياً لتجنب الإجهاد على السطح." },
                  { t: "رفع البلوك الخرساني", d: "بعد انتهاء القطع، نستخدم الروافع الآلية (الونش) أو البكرات لإنزال الكتلة الخرسانية المقطوعة بأمان تام دون التسبب في أي ارتجاج للمبنى." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-600 font-bold text-white text-sm">{i + 1}</div>
                    <p><strong>{step.t}:</strong> {step.d}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="faq"
              title="الأسئلة الشائعة (FAQ)"
            >
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <details key={i} className="group rounded-[32px] border border-black/10 bg-white p-7 shadow-sm hover:border-sky-300 transition">
                    <summary className="cursor-pointer list-none font-black text-slate-900 flex items-center justify-between text-lg">
                      <span>{item.q}</span>
                      <span className="text-sky-600 group-open:rotate-180 transition p-1 bg-sky-50 rounded-full">⌄</span>
                    </summary>
                    <p className="mt-6 text-slate-700 leading-9 text-sm bg-slate-50 p-8 rounded-[32px] border-r-8 border-sky-500 shadow-inner">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </Section>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="p-8 rounded-[48px] bg-white border border-black/10 shadow-lg">
               <h3 className="font-extrabold text-2xl text-slate-900 mb-4">خـبرة وتمـيز</h3>
               <p className="text-slate-600 text-sm leading-7 mb-6">
                  نحن <strong>أفضل شركة قص خرسانة</strong> في مصر، نقدم لك أعلى درجات الأمان الإنشائي بدقة الليزر.
               </p>
               <div className="space-y-4">
                  <StatPill icon={<CheckCircle2 className="h-4 w-4 text-sky-600" />} text="بدون اهتزاز أو شروخ" />
                  <StatPill icon={<Zap className="h-4 w-4 text-sky-600" />} text="تبريد مائي (بدون غبار)" />
                  <StatPill icon={<Target className="h-4 w-4 text-sky-600" />} text="دقة ليزر 100%" />
               </div>
            </div>

            <div className="p-8 rounded-[48px] bg-sky-600 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
               <h3 className="font-black text-2xl mb-4">اطلب مقاول القص</h3>
               <p className="text-sky-100 text-sm mb-6 leading-7">تواصل معنا الآن للحجز أو لطلب معاينة فنية فورية لمشروعك.</p>
               <Link
                href={WHATSAPP}
                className="block w-full text-center py-5 rounded-3xl bg-white text-sky-900 font-black text-xl hover:scale-[1.02] transition shadow-lg"
              >
                تواصل واتسـاب
              </Link>
            </div>

            <div className="p-8 rounded-[48px] bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                   <Search className="h-5 w-5" />
                   الخدمات الرئيسية
                </h3>
                <div className="flex flex-wrap gap-2">
                   {keywords.map(kw => (
                      <span key={kw} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 hover:text-sky-600 transition">
                         {kw}
                      </span>
                   ))}
                </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
