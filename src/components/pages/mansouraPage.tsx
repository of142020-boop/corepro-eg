import React from 'react';

const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
  const actualSrc = typeof src === 'object' ? src.src : src;
  const actualW = width || (typeof src === 'object' ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === 'object' ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? 'absolute inset-0 w-full h-full object-cover' : '';
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(' ')} {...rest} loading={priority ? 'eager' : 'lazy'} fetchPriority={fetchpriority} />;
};

import {
  MapPin, Phone, ShieldCheck, CheckCircle2, Ruler, Hammer,
  Clock, BadgeCheck, Layers, Wrench, Target, Droplets, Wind, Flame, X,
} from 'lucide-react';

const BRAND     = 'كور برو - Core Pro';
const DOMAIN    = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/concrete-cutting-mansoura`;
const PHONE     = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP  = 'https://wa.me/201021507462';

const MANSOURA_AREAS = [
  'وسط المنصورة والميدان',
  'المنصورة الجديدة',
  'دقهلية الجديدة',
  'ميت غمر وأجا',
  'طلخا وشربين',
  'السنبلاوين وبلقاس',
  'المحلة الكبرى (قريبة)',
  'جمصة والدقهلية الساحلية',
];

const FAQ = [
  {
    q: 'هل تعملون في قص الخرسانة وتخريم الكور في المنصورة؟',
    a: 'نعم، نقدم الخدمتين في المنصورة وجميع مراكز محافظة الدقهلية. قص الخرسانة بالمنشار لفتح الأبواب والشبابيك وقص الأسقف، وتخريم الكور لفتحات التكييف والغاز والسباكة.',
  },
  {
    q: 'ما الفرق بين قص الخرسانة بالمنشار وتخريم الكور؟',
    a: 'قص الخرسانة بالمنشار يُنتج فتحات مستطيلة مستقيمة مناسبة لفتح الأبواب والشبابيك وقص الأسقف للسلالم. أما تخريم الكور فيُنتج فتحات دائرية دقيقة لتمرير مواسير التكييف والغاز والسباكة والصرف.',
  },
  {
    q: 'هل يمكنكم قص جدار لفتح باب جديد في منزلي بالمنصورة؟',
    a: 'بالطبع. نأتي لموقعك ونعاين الجدار بالكاشف الإلكتروني لتحديد حديد التسليح، ثم ننفذه بمنشار السكة الماسي مع تبريد مائي كامل. الفتحة تخرج نظيفة وجاهزة لتركيب البوابة مباشرة.',
  },
  {
    q: 'هل تعملون في قص سقف لعمل سلم داخلي (دوبلكس) في المنصورة؟',
    a: 'نعم. قص السقف الخرساني لعمل فتحة السلم الداخلي من تخصصاتنا. ننفذه بمنشار السكة الهيدروليكي مع تأمين البلوك قبل الفصل النهائي لمنع السقوط.',
  },
  {
    q: 'هل يتسبب العمل في غبار أو اهتزاز في المنصورة؟',
    a: 'لا إطلاقاً. كلتا التقنيتين (القص بالمنشار والتخريم بالكور) تعتمدان على التبريد المائي الذي يُحوِّل الغبار إلى معجون سائل يُسحب فوراً. لا يتصاعد أي غبار في الهواء ولا تحدث اهتزازات.',
  },
  {
    q: 'هل تعملون في أحياء المنصورة الجديدة والمشاريع العمرانية الحديثة؟',
    a: 'نعم، المنصورة الجديدة ودقهلية الجديدة تشهدان نمواً عمرانياً كبيراً. نخدم الوحدات السكنية الجديدة والكومباوندات والمنشآت التجارية بمعايير احترافية عالية.',
  },
  {
    q: 'ما أنواع الجدران التي يمكنكم قصها في المنصورة؟',
    a: 'نقص جميع أنواع الجدران: الخرسانة المسلحة بجميع درجات الإجهاد، الطوب الأحمر، البلوك بأنواعه. لكل نوع أسلوب وأداة مختلفة ونحن نملك الكل ونُقرر المناسب أثناء المعاينة المجانية.',
  },
  {
    q: 'هل تعملون في مراكز محافظة الدقهلية مثل طلخا وميت غمر والسنبلاوين؟',
    a: 'نعم، نصل لجميع مراكز محافظة الدقهلية. سواء كنت في طلخا أو شربين أو ميت غمر أو السنبلاوين أو أجا، فريقنا يصل لموقعك وينجز العمل.',
  },
  {
    q: 'كيف أحجز موعداً لخدمة في المنصورة؟',
    a: `تواصل معنا على ${PHONE} أو واتساب وأخبرنا بنوع العمل وموقعك بالمنصورة. نُرتِّب المعاينة المجانية وعرض السعر بسرعة. يمكن تنفيذ القص والتخريم في نفس الزيارة إذا كنت تحتاج الخدمتين.`,
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

export default function MansouraPage() {

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BRAND,
      url: DOMAIN,
      telephone: PHONE_INT,
      image: `${DOMAIN}/og-image.webp`,
      logo: `${DOMAIN}/logo-header-116x154.webp`,
      description: 'كور برو متخصصون في قص الخرسانة بالمنشار وتخريم الكور في المنصورة والدقهلية — فتح أبواب وشبابيك وأسقف وفتحات التكييف والغاز بدقة هندسية وبدون اهتزاز.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EG',
        addressLocality: 'Mansoura',
        addressRegion: 'Dakahlia Governorate',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 31.0364, longitude: 31.3807 },
      areaServed: ['المنصورة', 'Mansoura', 'الدقهلية', ...MANSOURA_AREAS],
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      sameAs: [DOMAIN, WHATSAPP],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '52' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات قص وتخريم الخرسانة بالمنصورة',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'قص خرسانة المنصورة بالمنشار الماسي', url: `${DOMAIN}/saw` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تخريم الخرسانة بالكور في المنصورة', url: `${DOMAIN}/core` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'قص خرسانة الدقهلية بالواير الماسي', url: `${DOMAIN}/wire` } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'قص وتخريم الخرسانة في المنصورة',
      serviceType: 'Concrete Cutting and Core Drilling Mansoura',
      provider: { '@type': 'LocalBusiness', name: BRAND, telephone: PHONE_INT, url: DOMAIN },
      areaServed: ['Mansoura', 'المنصورة', 'الدقهلية', ...MANSOURA_AREAS],
      url: CANONICAL,
      description: 'قص الخرسانة بالمنشار وتخريم الكور في المنصورة والدقهلية — فتح أبواب وشبابيك وأسقف وفتحات التكييف والغاز والسباكة بدقة هندسية.',
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
        { '@type': 'ListItem', position: 2, name: 'قص وتخريم الخرسانة في المنصورة', item: CANONICAL },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${DOMAIN}/images/saw/kas-kharsana-menshar-2.webp`,
      name: 'قص الخرسانة بالمنشار الماسي في المنصورة',
      description: 'منشار خرسانة ماسي يقص جداراً خرسانياً في المنصورة — كور برو',
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
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#saw-mansoura', '#core-mansoura', '#faq', 'h1'] },
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(99,102,241,0.14),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(14,165,233,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm text-indigo-800 shadow-sm mb-6">
            <MapPin className="h-4 w-4 text-indigo-600" />
            <span>يخدم المنصورة والدقهلية · قص بالمنشار · تخريم بالكور · الواير الماسي</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-indigo-500 pr-4">
                قص الخرسانة وتخريم الكور في المنصورة - 01021507462
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> هو متخصصك الأول في <strong>قص الخرسانة بالمنشار في المنصورة</strong>
                  و<strong>تخريم الخرسانة بالكور في المنصورة</strong>. نقدم الخدمتين بأعلى معايير الجودة —
                  بدون اهتزاز، وبدون غبار، وبضمان سلامة الهيكل الإنشائي.
                </p>
                <p>
                  سواء كنت تحتاج <strong>قص جدار في المنصورة</strong> لفتح باب أو شباك أو قص سقف دوبلكس،
                  أو <strong>صنايعي كور في المنصورة</strong> لفتحات التكييف والغاز والسباكة —
                  فريقنا يصل لأي موقع في المنصورة والدقهلية وينجز العمل باحترافية وسرعة.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <a href="#saw-mansoura" className="flex flex-col items-center gap-2 rounded-2xl border-2 border-indigo-400 bg-indigo-50 px-4 py-4 text-sm text-slate-800 shadow-sm font-bold text-center hover:bg-indigo-100 transition">
                  <Hammer className="h-6 w-6 text-indigo-600" />
                  قص بالمنشار
                  <span className="text-xs text-slate-500 font-medium">أبواب · شبابيك · أسقف</span>
                </a>
                <a href="#core-mansoura" className="flex flex-col items-center gap-2 rounded-2xl border-2 border-sky-400 bg-sky-50 px-4 py-4 text-sm text-slate-800 shadow-sm font-bold text-center hover:bg-sky-100 transition">
                  <Ruler className="h-6 w-6 text-sky-600" />
                  تخريم بالكور
                  <span className="text-xs text-slate-500 font-medium">تكييف · غاز · سباكة</span>
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
                <span>معاينة مجانية · نصل لجميع مراكز الدقهلية</span>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-indigo-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <div className="font-black text-slate-900 text-lg">تغطية محافظة الدقهلية</div>
                  <div className="text-sm text-slate-500">المنصورة وجميع المراكز</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {MANSOURA_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-2 rounded-xl bg-indigo-50 border border-indigo-100 px-3 py-2 text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-slate-900 text-white p-5">
                <div className="text-sm text-slate-400 mb-1">للحجز والاستفسار</div>
                <div className="text-2xl font-black text-indigo-400">{PHONE}</div>
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

            {/* 1. قص المنشار - PRIMARY */}
            <Section id="saw-mansoura" title="قص الخرسانة بالمنشار في المنصورة (الخدمة الرئيسية)">
              <p>
                <strong>قص الخرسانة بالمنشار في المنصورة</strong> هو تخصصنا الأبرز الذي يستقطب أكثر الطلبات في المنطقة.
                نستخدم <strong>منشار السكة (Track Saw)</strong> المزود بقرص ألماسي يتحرك على مسار معدني مثبت بدقة على الجدار أو السقف،
                مما يضمن <strong>قطعاً مستقيماً تماماً</strong> يُسمى شعبياً <strong>قص الخرسانة بالليزر</strong>.
              </p>
              <div className="not-prose space-y-4 mt-6">
                <h3 className="text-xl font-black text-slate-900">خدمات قص الخرسانة في المنصورة:</h3>
                {[
                  { t: 'قص جدار لفتح باب أو شباك', d: 'نفتح فتحات الأبواب والنوافذ في الجدران الخرسانية والطوبية بحواف ناعمة ومستوية جاهزة مباشرة لتركيب الحلق الخشبي أو الألومنيوم.' },
                  { t: 'قص السقف لعمل فتحة سلم داخلي', d: 'دمج شقتين رأسياً في دوبلكس؟ نقص الأسقف الخرسانية بأمان تام لعمل فتحة السلم مع تأمين البلوك قبل فصله لمنع السقوط.' },
                  { t: 'توسعة الفتحات القائمة وتكبير الأبواب', d: 'توسعة فتحة باب أو شباك موجود لأغراض معمارية أو لمرور أثاث كبير — ننجزه دون المساس بالكمرات والأعتاب المحيطة.' },
                  { t: 'قص الأرضيات والخرسانة الأفقية', d: 'قص خرسانة الأرضيات لمسارات الصرف أو مواسير التكييف المخفية أو أعمال البدروم، بمنشار القرص الأرضي (Floor Saw).' },
                  { t: 'قص الخرسانة بالواير الماسي', d: 'للكتل الضخمة والجدران السميكة جداً في المشاريع الإنشائية الكبيرة بالمنصورة. الواير الماسي لا حد أقصى لسماكته.' },
                ].map(item => (
                  <div key={item.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-black text-slate-900">{item.t}</div>
                      <p className="mt-1 text-slate-600 text-sm leading-7">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* مقارنة المنشار vs التكسير */}
              <div className="not-prose mt-6 grid md:grid-cols-2 gap-4">
                {[
                  { t: 'التكسير التقليدي', items: [{ bad: true, t: 'اهتزازات تُشقق الجدران' }, { bad: true, t: 'غبار يملأ الشقة' }, { bad: true, t: 'حواف غير منتظمة' }, { bad: true, t: 'يُضعف الهيكل الإنشائي' }], color: 'border-red-200 bg-red-50' },
                  { t: 'قص المنشار الماسي', items: [{ bad: false, t: 'بدون اهتزاز واحد' }, { bad: false, t: 'بدون غبار (تبريد مائي)' }, { bad: false, t: 'حواف ناعمة للتشطيب مباشرة' }, { bad: false, t: 'أمان إنشائي 100%' }], color: 'border-emerald-200 bg-emerald-50' },
                ].map(col => (
                  <div key={col.t} className={`rounded-2xl border p-5 ${col.color}`}>
                    <div className="font-black text-slate-900 mb-3">{col.t}</div>
                    {col.items.map(item => (
                      <div key={item.t} className="flex gap-2 items-center text-sm text-slate-700 mb-2">
                        {item.bad ? <X className="h-4 w-4 text-red-500 shrink-0" /> : <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />}
                        {item.t}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="not-prose mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image src="/images/saw/kas-kharsana-menshar-2.webp" alt="قص الخرسانة بالمنشار الماسي في المنصورة" width={800} height={533} className="w-full object-cover" loading="lazy" />
                <div className="bg-white px-4 py-2 text-xs text-slate-500">قص جدار خرساني بالمنشار الماسي مع التبريد المائي الكامل — كور برو المنصورة</div>
              </div>
            </Section>

            {/* 2. تخريم الكور - SECONDARY */}
            <Section id="core-mansoura" title="تخريم الخرسانة بالكور في المنصورة — فتحات التكييف والغاز والسباكة">
              <p>
                إلى جانب خدمة القص بالمنشار، نقدم أيضاً <strong>تخريم الخرسانة بالكور في المنصورة</strong>
                لعمل الفتحات الدائرية الدقيقة اللازمة لتمرير مواسير التكييف والغاز والسباكة والصرف الصحي.
                تقنية التبريد المائي تضمن فتحة نظيفة بدون اهتزاز ومثالية للشقق المسكونة.
              </p>
              <div className="not-prose space-y-4 mt-6">
                {[
                  { t: 'فتحة التكييف الاسبليت', d: 'قطر 5-7 سم بميل مضبوط للخارج لضمان خروج مياه التكثيف. الأكثر طلباً في شقق المنصورة.', icon: Wind },
                  { t: 'فتحة الغاز الطبيعي', d: 'بالمواصفات المطلوبة من شركة الغاز وبالقطر الصحيح لضمان أمان التركيب.', icon: Flame },
                  { t: 'فتحة مدخنة السخان', d: 'بالقطر والميل الصحيح لضمان خروج الغاز المحروق للخارج وحماية أسرتك من خطر الاختناق.', icon: Flame },
                  { t: 'فتحات الصرف الصحي والسباكة', d: 'من 4 إلى 8 بوصة لتمرير مواسير الصرف والمياه في الأسقف الخرسانية بالموقع الدقيق.', icon: Droplets },
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
              <div className="not-prose mt-4">
                <a href="/core" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 text-white px-6 py-3 font-black text-sm hover:bg-sky-700 transition">
                  تفاصيل خدمة تخريم الكور ←
                </a>
              </div>
            </Section>

            {/* 3. خصائص المنصورة */}
            <Section id="mansoura-buildings" title="خصوصية مباني المنصورة والدقهلية وكيف نتعامل معها">
              <p>تتميز مباني المنصورة بخصائص تتطلب خبرة موقعية حقيقية:</p>
              <div className="not-prose grid gap-4 md:grid-cols-2 mt-6">
                {[
                  { t: 'العمارات القديمة في وسط المنصورة', d: 'بعض المباني الكلاسيكية القديمة في قلب المنصورة تحتوي على خرسانة متقادمة أكثر حساسية. نتعامل معها بماكينات منخفضة الدوران لضمان الدقة والأمان.', bg: 'bg-indigo-50 border-indigo-100' },
                  { t: 'الأبراج والوحدات الحديثة', d: 'المشاريع الجديدة والأبراج في المنصورة الجديدة تحتاج أقراصاً ألماسية عالية الجودة للتعامل مع الخرسانة عالية الإجهاد الحديثة.', bg: 'bg-sky-50 border-sky-100' },
                  { t: 'الكومباوندات والمجمعات السكنية', d: 'نعمل داخل الكومباوندات والمجمعات السكنية بالتنسيق مع الإدارة. فريقنا نظيف ومُلتزم بمعايير الهدوء وترتيب العمل.', bg: 'bg-emerald-50 border-emerald-100' },
                  { t: 'المباني التجارية والإدارية', d: 'المحلات التجارية والمكاتب الإدارية في المنصورة تحتاج تدخلات دقيقة بدون إيقاف النشاط التجاري. نعمل بسرعة وصمت.', bg: 'bg-amber-50 border-amber-100' },
                ].map(x => (
                  <div key={x.t} className={`rounded-2xl border ${x.bg} p-5`}>
                    <div className="font-black text-slate-900 mb-2">{x.t}</div>
                    <p className="text-slate-600 text-sm leading-7">{x.d}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 4. مراحل التنفيذ */}
            <Section id="process" title="مراحل التنفيذ في المنصورة: من التواصل إلى التسليم">
              <div className="space-y-5 not-prose">
                {[
                  { n: '1', t: 'التواصل وتحديد نوع العمل', d: `تتصل بنا على ${PHONE} أو واتساب وتُخبرنا بالعمل المطلوب (قص أو تخريم أو كلاهما) وموقعك في المنصورة.` },
                  { n: '2', t: 'المعاينة الميدانية المجانية', d: 'يصل فريقنا للكشف بالأجهزة الإلكترونية وتحديد المسار الآمن وتقديم عرض سعر نهائي بدون أي رسوم مخفية.' },
                  { n: '3', t: 'التجهيز وحماية الموقع', d: 'نُغلِّف المفروشات والأرضيات بمواد الحماية ونجهز نظام شفط المياه قبل البدء.' },
                  { n: '4', t: 'التنفيذ بالمعدة المناسبة', d: 'ننفذ القص بالمنشار أو التخريم بالكور (أو كليهما في نفس الزيارة) مع التبريد المائي الكامل.' },
                  { n: '5', t: 'التسليم النظيف', d: 'ننظف الموقع بالكامل ونسلمك العمل بحواف ناعمة جاهزة للتشطيب.' },
                ].map(step => (
                  <div key={step.n} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500 font-black text-white text-sm">{step.n}</div>
                    <div>
                      <div className="font-black text-slate-900 mb-1">{step.t}</div>
                      <p className="text-slate-600 text-sm leading-7">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 5. FAQ */}
            <Section id="faq" title="الأسئلة الشائعة عن قص وتخريم الخرسانة في المنصورة">
              <div className="space-y-4 not-prose">
                {FAQ.map((item, i) => (
                  <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-indigo-300 transition">
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-indigo-600 group-open:rotate-180 transition p-1 bg-indigo-50 rounded-full shrink-0 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-indigo-400">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6 min-w-0">
            <div className="p-7 rounded-[40px] bg-indigo-600 text-white shadow-xl relative overflow-hidden sticky top-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="font-black text-2xl mb-3">اطلب معاينة مجانية</h3>
              <p className="text-indigo-100 text-sm mb-5 leading-7">فريقنا يصل للمنصورة ويُقدم عرض سعر فوري — بدون أي التزام مسبق.</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-2xl bg-white text-indigo-900 font-black text-lg hover:scale-[1.02] transition shadow-lg mb-3">
                واتساب مباشر
              </a>
              <a href={`tel:${PHONE}`} className="block w-full text-center py-4 rounded-2xl border-2 border-white/40 text-white font-black text-lg hover:bg-white/10 transition">
                {PHONE}
              </a>
            </div>

            <div className="p-7 rounded-[40px] bg-white border border-black/10 shadow-lg">
              <h3 className="font-black text-xl text-slate-900 mb-5">لماذا كور برو بالمنصورة؟</h3>
              <div className="space-y-4">
                <StatPill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="أمان إنشائي مثبت" />
                <StatPill icon={<Hammer className="h-4 w-4 text-indigo-600" />} text="منشار ماسي + كور دريل" />
                <StatPill icon={<Target className="h-4 w-4 text-amber-600" />} text="أسعار شفافة بدون مفاجآت" />
                <StatPill icon={<Wrench className="h-4 w-4 text-slate-700" />} text="الخدمتان في زيارة واحدة" />
                <StatPill icon={<MapPin className="h-4 w-4 text-rose-500" />} text="تغطية محافظة الدقهلية" />
                <StatPill icon={<Clock className="h-4 w-4 text-violet-600" />} text="معاينة مجانية بدون التزام" />
              </div>
            </div>

            <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
              <h3 className="font-black text-lg text-slate-900 mb-4">خدمات أخرى</h3>
              <div className="space-y-2">
                {[
                  { href: '/saw', label: 'قص الخرسانة بالمنشار', color: 'text-indigo-600' },
                  { href: '/core', label: 'تخريم الخرسانة بالكور', color: 'text-sky-600' },
                  { href: '/wire', label: 'قص بالواير الماسي', color: 'text-violet-600' },
                  { href: '/prices', label: 'دليل الأسعار', color: 'text-slate-600' },
                  { href: '/concrete-cutting-alexandria', label: 'قص وتخريم في الإسكندرية', color: 'text-emerald-600' },
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
                <MapPin className="h-5 w-5 text-indigo-400" />
                مناطق التغطية في الدقهلية
              </h3>
              <div className="space-y-2">
                {MANSOURA_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 font-bold mb-5 text-sm border border-indigo-500/30">
                <BadgeCheck className="w-4 h-4" />
                قص الخرسانة وتخريم الكور في المنصورة
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">جاهز لبدء مشروعك في المنصورة؟</h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر فوري. فريقنا جاهز لخدمتك في المنصورة والدقهلية 7 أيام أسبوعياً.
              </p>
              <div className="mt-4 text-2xl font-black text-indigo-400">{PHONE}</div>
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
