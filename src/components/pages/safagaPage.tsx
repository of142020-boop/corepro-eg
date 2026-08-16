import React from 'react';

const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
  const actualSrc = typeof src === 'object' ? src.src : src;
  const actualW = width || (typeof src === 'object' ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === 'object' ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? 'absolute inset-0 w-full h-full object-cover' : '';
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(' ')} {...rest} loading={priority ? 'eager' : 'lazy'} fetchPriority={fetchpriority} />;
};

import {
  MapPin, Phone, ShieldCheck, CheckCircle2, Ruler, Hammer, Cable,
  Clock, BadgeCheck, Layers, Wrench, Target, Droplets, Wind, Flame,
} from 'lucide-react';

const BRAND     = 'كور برو - Core Pro';
const DOMAIN    = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/concrete-cutting-safaga`;
const PHONE     = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP  = 'https://wa.me/201021507462';

const SAFAGA_AREAS = [
  'ميناء سفاجا ومحيطه',
  'قرى سوما باي',
  'طريق القصير',
  'مركز المدينة',
  'المنطقة الصناعية بسفاجا',
  'منتجعات سفاجا السياحية'
];

const FAQ = [
  {
    q: 'هل تعملون في تخريم الكور وقص الخرسانة في سفاجا؟',
    a: 'نعم، نغطي مدينة سفاجا والمنطقة الصناعية وسوما باي بفضل معداتنا الحديثة. تخريم الكور لفتحات التكييف والغاز والسباكة والصرف، وقص الخرسانة بالمنشار لفتح الأبواب والشبابيك وقص الأسقف. فريقنا يصل لأي موقع في محافظة سفاجا.',
  },
  {
    q: 'ما الفرق بين تخريم الكور وقص الخرسانة بالمنشار؟',
    a: 'الكور يُنتج فتحات دائرية دقيقة مناسبة لمواسير التكييف والغاز والسباكة والصرف. المنشار يُنتج فتحات مستطيلة مستقيمة مناسبة لفتح الأبواب والشبابيك وقص الأسقف للسلالم. كلتا الخدمتين تعملان بالتبريد المائي بدون غبار أو اهتزاز.',
  },
  {
    q: 'ما هي أقطار فتحات الكور المتاحة في سفاجا؟',
    a: 'نُنفذ فتحات الكور من البوصة الواحدة لكابلات الكهرباء حتى 14 بوصة لدكتات التكييف المركزي ومواسير الصرف الرئيسية. الفريق يحدد القطر المناسب لك أثناء المعاينة المجانية.',
  },
  {
    q: 'هل تعملون في تأسيس فتحات الغاز وفق الاشتراطات في سفاجا؟',
    a: 'نعم، ننفذ فتحات مواسير الغاز الطبيعي بالأقطار والمواصفات المطلوبة من شركة الغاز في سفاجا. الفتحة دائرية منتظمة تماماً تسهل على فني الغاز تمرير الماسورة وتثبيتها بأمان.',
  },
  {
    q: 'هل يمكنكم قص جدار لفتح باب في منزلي بسفاجا؟',
    a: 'بالطبع. نأتي لموقعك ونعاين الجدار بالكاشف الإلكتروني لتحديد حديد التسليح، ثم ننفذ القص بمنشار السكة الماسي مع تبريد مائي كامل. الفتحة تخرج نظيفة وجاهزة لتركيب البوابة مباشرة.',
  },
  {
    q: 'هل يتسبب العمل في غبار أو اهتزاز في منزلي بسفاجا؟',
    a: 'لا إطلاقاً. كلتا التقنيتين تعتمدان على التبريد المائي الذي يُحوِّل الغبار إلى معجون سائل يُسحب فوراً. لا يتصاعد غبار في الهواء ولا تحدث اهتزازات تُضر بالهيكل الإنشائي.',
  },
  {
    q: 'هل تعملون في المباني القديمة في مراكز سفاجا؟',
    a: 'نعم. خبرتنا تشمل التعامل مع مباني مراكز سفاجا القديمة ذات الخرسانة المتقادمة. نُقيّم طبيعة الخرسانة أولاً ونختار السرعة المناسبة لضمان فتحة نظيفة دون تفتت المواد المحيطة.',
  },
  {
    q: 'هل يمكنكم قص سقف لعمل سلم داخلي (دوبلكس) في سفاجا؟',
    a: 'نعم. قص السقف الخرساني لعمل فتحة السلم الداخلي من خدماتنا في سفاجا. ننفذه بمنشار السكة الهيدروليكي مع تأمين البلوك قبل الفصل النهائي لمنع السقوط.',
  },
  {
    q: 'كيف أحجز موعداً لخدمة في سفاجا؟',
    a: `تواصل معنا على ${PHONE} أو واتساب وأخبرنا بنوع العمل وموقعك في سفاجا. نُرتِّب المعاينة المجانية وعرض السعر بسرعة. يمكن تنفيذ القص والتخريم في نفس الزيارة إذا كنت تحتاج الخدمتين.`,
  },
];

function Section({ title, subtitle, children, id, level = 2 }: {
  title: string; subtitle?: string; children: React.ReactNode; id?: string; level?: 2 | 3;
}) {
  const HeadingTag = level === 2 ? 'h2' : 'h3';
  return (
    <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <div className="mb-6">
        <HeadingTag className={`font-black tracking-tight text-slate-900 ${level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
          {title}
        </HeadingTag>
        {subtitle && <p className="mt-2 text-slate-600 leading-7 font-semibold">{subtitle}</p>}
      </div>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">
        {children}
      </div>
    </section>
  );
}

function StatPill({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm text-center">
      {icon}
      <span className="text-slate-700 font-extrabold">{text}</span>
    </div>
  );
}

export default function SafagaPage() {

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BRAND,
      url: DOMAIN,
      telephone: PHONE_INT,
      image: `${DOMAIN}/og-image.webp`,
      logo: `${DOMAIN}/logo-header-116x154.webp`,
      description: 'كور برو متخصصون في تخريم الخرسانة بالكور وقص الخرسانة بالمنشار في سفاجا — فتحات التكييف والغاز والسباكة وفتح الأبواب والشبابيك بدقة هندسية وبدون اهتزاز.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EG',
        addressLocality: 'Safaga',
        addressRegion: 'Safaga Governorate',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 26.7456, longitude: 33.9358 },
      areaServed: ['سفاجا', 'Safaga', ...SAFAGA_AREAS],
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      sameAs: [DOMAIN, WHATSAPP],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '38' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات تخريم وقص الخرسانة في سفاجا',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تخريم الخرسانة بالكور في سفاجا', url: `${DOMAIN}/core` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'قص الخرسانة بالمنشار في سفاجا', url: `${DOMAIN}/saw` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'فتحات الغاز والتكييف والسباكة بسفاجا', url: `${DOMAIN}/core` } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'تخريم الكور وقص الخرسانة في سفاجا',
      serviceType: 'Concrete Core Drilling and Saw Cutting Safaga',
      provider: { '@type': 'LocalBusiness', name: BRAND, telephone: PHONE_INT, url: DOMAIN },
      areaServed: ['Safaga', 'سفاجا', ...SAFAGA_AREAS],
      url: CANONICAL,
      description: 'تخريم الخرسانة بالكور وقص الخرسانة بالمنشار في سفاجا — فتحات التكييف والغاز والسباكة وفتح الأبواب والشبابيك. نخدم جميع مراكز سفاجا.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: DOMAIN },
        { '@type': 'ListItem', position: 2, name: 'تخريم الكور وقص الخرسانة في سفاجا', item: CANONICAL },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${DOMAIN}/images/core/fatahat-core-beton-1.webp`,
      name: 'تخريم الخرسانة بالكور في سفاجا',
      description: 'ماكينة كور دريل هيدروليكية أثناء تخريم سقف خرساني في سفاجا — كور برو',
      author: { '@type': 'Organization', name: BRAND, url: DOMAIN },
      copyrightHolder: { '@type': 'Organization', name: BRAND },
      creditText: 'كور برو - Core Pro',
      acquireLicensePage: CANONICAL,
      creator: { '@type': 'Organization', name: BRAND },
      license: `${DOMAIN}/terms`,
      copyrightNotice: `© 2026 ${BRAND}`,
      representativeOfPage: true,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url: CANONICAL,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#core-safaga', '#saw-safaga', '#faq', 'h1'] },
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(14,165,233,0.16),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(16,185,129,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-800 shadow-sm mb-6">
            <MapPin className="h-4 w-4 text-sky-600" />
            <span>يخدم جميع مراكز محافظة سفاجا · تخريم بالكور · قص بالمنشار</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-sky-600 pr-4">
                صنايعي كور وقص الخرسانة في سفاجا - 01021507462
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> هو متخصصك الأول في <strong>تخريم الخرسانة بالكور في سفاجا</strong>
                  و<strong>قص الخرسانة بالمنشار في سفاجا</strong>. نقدم الخدمتين بأعلى معايير الجودة —
                  بدون اهتزاز، وبدون غبار، وبضمان سلامة الهيكل الإنشائي.
                </p>
                <p>
                  سواء كنت تحتاج <strong>صنايعي كور في سفاجا</strong> لفتحات التكييف والغاز والسباكة،
                  أو <strong>فني قص خرسانة في سفاجا</strong> لفتح باب أو شباك أو قص سقف دوبلكس —
                  فريقنا يصل لأي موقع في سفاجا وينجز العمل باحترافية.
                </p>
              </div>

              {/* خدمتان واضحتان */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <a href="#core-safaga" className="flex flex-col items-center gap-2 rounded-2xl border-2 border-sky-400 bg-sky-50 px-4 py-4 text-sm text-slate-800 shadow-sm font-bold text-center hover:bg-sky-100 transition">
                  <Ruler className="h-6 w-6 text-sky-600" />
                  تخريم بالكور
                  <span className="text-xs text-slate-500 font-medium">تكييف · غاز · سباكة · صرف</span>
                </a>
                <a href="#saw-safaga" className="flex flex-col items-center gap-2 rounded-2xl border-2 border-amber-400 bg-amber-50 px-4 py-4 text-sm text-slate-800 shadow-sm font-bold text-center hover:bg-amber-100 transition">
                  <Hammer className="h-6 w-6 text-amber-600" />
                  قص بالمنشار
                  <span className="text-xs text-slate-500 font-medium">أبواب · شبابيك · أسقف</span>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 font-black text-white shadow-[0_16px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition hover:-translate-y-0.5 transform text-lg">
                  <Phone className="h-5 w-5" /> تواصل واتساب الآن
                </a>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 font-black text-slate-900 hover:bg-slate-50 transition text-lg">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <Clock className="h-4 w-4" />
                <span>معاينة مجانية · نصل لجميع مراكز سفاجا</span>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-sky-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-sky-600" />
                </div>
                <div>
                  <div className="font-black text-slate-900 text-lg">تغطية محافظة سفاجا</div>
                  <div className="text-sm text-slate-500">جميع المراكز والمدن</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SAFAGA_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-2 rounded-xl bg-sky-50 border border-sky-100 px-3 py-2 text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-slate-900 text-white p-5">
                <div className="text-sm text-slate-400 mb-1">للحجز والاستفسار</div>
                <div className="text-2xl font-black text-sky-400">{PHONE}</div>
                <div className="text-sm text-slate-400 mt-1">متاح 7 أيام في الأسبوع</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10 min-w-0">

            {/* 1. تخريم الكور - PRIMARY */}
            <Section id="core-safaga" title="تخريم الخرسانة بالكور في سفاجا (الخدمة الرئيسية)">
              <p>
                <strong>تخريم الخرسانة بالكور في سفاجا</strong> هو تخصصنا الأبرز ويُمثل الطلب الأكثر في المنطقة.
                نستخدم <strong>ماكينة الكور الهيدروليكية</strong> بالتبريد المائي لإحداث فتحات أسطوانية دقيقة بالمليمتر
                — مثالية لتمرير مواسير التكييف والغاز الطبيعي والسباكة والصرف الصحي.
              </p>
              <div className="not-prose space-y-4 mt-6">
                <h3 className="text-xl font-black text-slate-900">أنواع فتحات الكور في سفاجا:</h3>
                {[
                  { t: 'فتحة التكييف الاسبليت والمركزي', d: 'قطر 5-8 سم بميل مضبوط للخارج. الأكثر طلباً في سفاجا. ننفذها بدقة لضمان خروج مياه التكثيف بشكل صحيح.', icon: Wind },
                  { t: 'فتحة الغاز الطبيعي', d: 'بالمواصفات المطلوبة من شركة الغاز وبالقطر الصحيح. فتحة دائرية منتظمة تُسهل على فني الغاز تثبيت الماسورة بأمان.', icon: Flame },
                  { t: 'فتحة مدخنة السخان', d: 'بالقطر والميل الصحيح لضمان خروج الغاز المحروق للخارج وتجنب خطر الاختناق داخل المنزل.', icon: Flame },
                  { t: 'فتحات الصرف الصحي في الأسقف', d: 'من 4 إلى 8 بوصة لتمرير مواسير الصرف في الأسقف الخرسانية بالموقع الدقيق المُحدد.', icon: Droplets },
                  { t: 'تخريم السيراميك والرخام', d: 'بنط ألماسي مع تبريد مائي بطيء لعمل فتحات في السيراميك والبورسلين والرخام بلا كسر أو تشقق.', icon: Ruler },
                  { t: 'فتحات كور في الكمرات والجدران الثقيلة', d: 'أسطوانات ألماسية بأطوال تصل 80 سم للجدران السميكة والكمرات الخرسانية عالية التسليح.', icon: Ruler },
                ].map(item => (
                  <div key={item.t} className="flex gap-4 rounded-2xl border border-sky-100 bg-sky-50 p-5">
                    <item.icon className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-black text-slate-900">{item.t}</div>
                      <p className="mt-1 text-slate-600 text-sm leading-7">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* دليل الأقطار */}
              <div className="not-prose mt-6">
                <h3 className="text-lg font-black text-slate-900 mb-4">دليل الأقطار الشائعة في سفاجا:</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { size: '5 بوصة', use: 'فتحة التكييف الاسبليت — الأكثر طلباً', color: 'bg-sky-50 border-sky-100' },
                    { size: '6 بوصة', use: 'مدخنة السخان والتكييف المركزي', color: 'bg-emerald-50 border-emerald-100' },
                    { size: '3-6 بوصة', use: 'فتحات الغاز الطبيعي', color: 'bg-orange-50 border-orange-100' },
                    { size: '4-8 بوصة', use: 'صرف صحي ومواسير السباكة', color: 'bg-teal-50 border-teal-100' },
                  ].map(x => (
                    <div key={x.size} className={`rounded-2xl border ${x.color} p-4`}>
                      <div className="font-black text-slate-900 text-sm mb-1">{x.size}</div>
                      <p className="text-slate-600 text-xs leading-5">{x.use}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="not-prose mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image src="/images/core/fatahat-core-beton-1.webp" alt="تخريم الخرسانة بالكور في سفاجا" width={800} height={533} className="w-full object-cover" loading="lazy" />
                <div className="bg-white px-4 py-2 text-xs text-slate-500">ماكينة كور دريل هيدروليكية أثناء تخريم سقف خرساني — كور برو سفاجا</div>
              </div>
            </Section>

            {/* 2. قص المنشار - SECONDARY */}
            <Section id="saw-safaga" title="قص الخرسانة بالمنشار في سفاجا — فتح الأبواب والشبابيك والأسقف">
              <p>
                إلى جانب تخريم الكور، نقدم أيضاً <strong>قص الخرسانة بالمنشار في سفاجا</strong>
                لعمل الفتحات المستطيلة اللازمة لتعديل المباني. نستخدم <strong>منشار السكة (Track Saw)</strong>
                الذي يضمن قطعاً مستقيماً بدقة ليزر وبدون اهتزاز.
              </p>
              <div className="not-prose space-y-4 mt-6">
                {[
                  { t: 'قص جدار لفتح باب أو شباك', d: 'نفتح فتحات الأبواب والنوافذ في الجدران الخرسانية والطوبية بحواف ناعمة جاهزة للتركيب.' },
                  { t: 'قص السقف لعمل سلم داخلي (دوبلكس)', d: 'نقص الأسقف الخرسانية بأمان تام لعمل فتحة السلم الداخلي مع تأمين البلوك قبل الفصل.' },
                  { t: 'توسعة الفتحات القائمة', d: 'توسعة أبواب أو شبابيك موجودة لأغراض معمارية أو لمرور الأثاث.' },
                  { t: 'قص الأرضيات لمسارات الصرف', d: 'قص خرسانة الأرضيات بمنشار القرص الأرضي لمسارات الصرف أو البدروم.' },
                ].map(item => (
                  <div key={item.t} className="flex gap-4 rounded-2xl border border-amber-100 bg-amber-50 p-5">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-black text-slate-900">{item.t}</div>
                      <p className="mt-1 text-slate-600 text-sm leading-7">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="not-prose mt-4">
                <a href="/saw" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-6 py-3 font-black text-sm hover:bg-amber-600 transition">
                  تفاصيل خدمة قص الخرسانة بالمنشار ←
                </a>
              </div>
            </Section>

            {/* 3. مراحل التنفيذ */}
            <Section id="process" title="مراحل التنفيذ في سفاجا: من التواصل إلى التسليم">
              <div className="space-y-5 not-prose">
                {[
                  { n: '1', t: 'التواصل وتحديد نوع العمل', d: `تتصل بنا على ${PHONE} أو واتساب وتُخبرنا بالعمل المطلوب (تخريم أو قص أو كلاهما) وموقعك في سفاجا.` },
                  { n: '2', t: 'المعاينة الميدانية المجانية', d: 'يصل فريقنا للكشف بالأجهزة الإلكترونية وتحديد المسار الآمن وتقديم عرض سعر نهائي بدون رسوم مخفية.' },
                  { n: '3', t: 'التجهيز وحماية الموقع', d: 'نُغلِّف المفروشات والأرضيات بمواد الحماية ونجهز نظام شفط المياه والأتربة.' },
                  { n: '4', t: 'التنفيذ (تخريم أو قص أو كليهما)', d: 'ننفذ التخريم بالكور أو القص بالمنشار (أو كليهما في نفس الزيارة) مع التبريد المائي الكامل.' },
                  { n: '5', t: 'التسليم النظيف', d: 'ننظف الموقع بالكامل ونسلمك العمل بحواف ناعمة جاهزة للتشطيب.' },
                ].map(step => (
                  <div key={step.n} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 font-black text-white text-sm">{step.n}</div>
                    <div>
                      <div className="font-black text-slate-900 mb-1">{step.t}</div>
                      <p className="text-slate-600 text-sm leading-7">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 4. FAQ */}
            <Section id="faq" title="الأسئلة الشائعة عن تخريم الكور وقص الخرسانة في سفاجا">
              <div className="space-y-4 not-prose">
                {FAQ.map((item, i) => (
                  <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-sky-300 transition">
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-sky-600 group-open:rotate-180 transition p-1 bg-sky-50 rounded-full shrink-0 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-sky-500">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6 min-w-0">
            <div className="p-7 rounded-[40px] bg-sky-600 text-white shadow-xl relative overflow-hidden sticky top-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="font-black text-2xl mb-3">اطلب معاينة مجانية</h3>
              <p className="text-sky-100 text-sm mb-5 leading-7">فريقنا يصل للمنيا ويُقدم عرض سعر فوري لكلتا الخدمتين.</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-2xl bg-white text-sky-900 font-black text-lg hover:scale-[1.02] transition shadow-lg mb-3">
                واتساب مباشر
              </a>
              <a href={`tel:${PHONE}`} className="block w-full text-center py-4 rounded-2xl border-2 border-white/40 text-white font-black text-lg hover:bg-white/10 transition">
                {PHONE}
              </a>
            </div>

            <div className="p-7 rounded-[40px] bg-white border border-black/10 shadow-lg">
              <h3 className="font-black text-xl text-slate-900 mb-5">لماذا كور برو بسفاجا؟</h3>
              <div className="space-y-4">
                <StatPill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="أمان إنشائي مثبت" />
                <StatPill icon={<Ruler className="h-4 w-4 text-sky-600" />} text="كور دريل + منشار ماسي" />
                <StatPill icon={<Target className="h-4 w-4 text-amber-600" />} text="أسعار شفافة بدون مفاجآت" />
                <StatPill icon={<Wrench className="h-4 w-4 text-slate-700" />} text="الخدمتان في زيارة واحدة" />
                <StatPill icon={<MapPin className="h-4 w-4 text-rose-500" />} text="تغطية محافظة سفاجا كاملة" />
                <StatPill icon={<Clock className="h-4 w-4 text-violet-600" />} text="معاينة مجانية بدون التزام" />
              </div>
            </div>

            <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
              <h3 className="font-black text-lg text-slate-900 mb-4">خدمات أخرى</h3>
              <div className="space-y-2">
                {[
                  { href: '/core', label: 'تخريم الخرسانة بالكور', color: 'text-sky-600' },
                  { href: '/saw', label: 'قص الخرسانة بالمنشار', color: 'text-amber-600' },
                  { href: '/wire', label: 'قص بالواير الماسي', color: 'text-violet-600' },
                  { href: '/prices', label: 'دليل الأسعار', color: 'text-slate-600' },
                  { href: '/concrete-cutting-assiut', label: 'قص وتخريم في أسيوط', color: 'text-orange-600' },
                ].map(s => (
                  <a key={s.href} href={s.href} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:underline py-1.5">
                    <span className={s.color}>›</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-[40px] bg-slate-900 text-white shadow-lg">
              <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-400" />
                مراكز سفاجا التي نخدمها
              </h3>
              <div className="space-y-2">
                {SAFAGA_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 text-sky-300 font-bold mb-5 text-sm border border-sky-500/30">
                <BadgeCheck className="w-4 h-4" />
                تخريم الكور وقص الخرسانة في سفاجا
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">جاهز لبدء مشروعك في سفاجا؟</h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر فوري. فريقنا جاهز لخدمتك في سفاجا 7 أيام أسبوعياً.
              </p>
              <div className="mt-4 text-2xl font-black text-sky-400">{PHONE}</div>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto min-w-[220px]">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 transition text-white px-8 py-4 rounded-2xl font-black text-xl">
                <Phone className="w-5 h-5" /> واتساب مباشر
              </a>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 transition px-8 py-4 rounded-2xl font-black text-xl">
                <Phone className="w-5 h-5" /> اتصل الآن
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
