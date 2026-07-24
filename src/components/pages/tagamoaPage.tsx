import React from 'react';

const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;

const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
  const actualSrc = typeof src === 'object' ? src.src : src;
  const actualW = width || (typeof src === 'object' ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === 'object' ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? 'absolute inset-0 w-full h-full object-cover' : '';
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(' ')} {...rest} loading={priority ? 'eager' : 'lazy'} fetchPriority={fetchpriority} />;
};

import {
  MapPin, Phone, ShieldCheck, CheckCircle2, Ruler, Hammer, Fan, Cable,
  Clock, BadgeCheck, Layers, Wrench, Target, Sparkles, Building2,
  HardHat, Drill, Maximize, Plus, X, Flame, Wind, Droplets, Search,
} from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/concrete-cutting-tagamoa`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const TAGAMOA_AREAS = [
  'التجمع الأول والثالث والخامس',
  'مدينتي والرحاب',
  'شارع التسعين الشمالي والجنوبي',
  'البنفسج والنرجس والفل',
  'القرنفل والياسمين',
  'الشروق وبدر',
  'المستثمرين الشمالية والجنوبية',
  'جنوب الأكاديمية',
  'القطامية والأمريكان كولوني',
  'زايد الجديدة (جانب التجمع)',
  'عمارات الفردوس والزيتون',
  'منطقة الجامعة الأمريكية AUC',
];

const FAQ = [
  {
    q: 'هل تعملون في التجمع الخامس بشكل دائم وليس موسمياً؟',
    a: 'نعم، لدينا فريق متخصص يغطي التجمع الخامس بشكل كامل ودائم طوال العام. نخدم جميع أحياء التجمع الخامس من التجمع الأول والثالث حتى مدينتي والرحاب وجنوب الأكاديمية، ونصل لموقعك في أسرع وقت ممكن.',
  },
  {
    q: 'هل تختلف أسعار قص الخرسانة في التجمع الخامس عن القاهرة؟',
    a: 'نقدم أسعاراً تنافسية موحدة في كل مصر. يتم تحديد السعر النهائي بناءً على نوع الخدمة وسُمك الخرسانة وعدد الفتحات أو الأمتار فقط — وليس بناءً على الموقع الجغرافي. نقدم عرض سعر مجاني بعد المعاينة.',
  },
  {
    q: 'هل تعملون في الكومباوندات والمجمعات السكنية المغلقة في التجمع الخامس؟',
    a: 'نعم، ولدينا خبرة واسعة في التعامل مع إدارات الكومباوندات وشروط الدخول والعمل بداخلها. فريقنا ملتزم بمعايير النظافة والهدوء المطلوبة في المجمعات السكنية الراقية. نحضر بسيارات نظيفة ومعدات مُرتبة ونغادر الموقع نظيفاً تماماً.',
  },
  {
    q: 'هل يمكنكم الوصول لمنطقة التجمع الخامس في نفس اليوم؟',
    a: 'نعم، لدينا فريق متمركز في منطقة القاهرة الجديدة ويمكنه الوصول لأي موقع في التجمع الخامس ومدينتي والرحاب في غضون ساعات. في أغلب الحالات نقدر نرسلك الفريق في نفس اليوم أو في اليوم التالي على أبعد تقدير.',
  },
  {
    q: 'هل تعملون في الشروق وبدر ومدن القاهرة الجديدة الأخرى القريبة من التجمع؟',
    a: 'بالتأكيد. نغطي الشروق وبدر والعبور وجميع مدن القاهرة الجديدة المحيطة بالتجمع الخامس. المسافة لا تمثل عائقاً طالما الموقع في محيط شرق القاهرة.',
  },
  {
    q: 'كم تستغرق عملية قص جدار كامل لفتح باب في التجمع الخامس؟',
    a: 'لفتح باب قياسي (90×210 سم) في جدار خرساني بسُمك 20 سم، تستغرق عملية القص الفعلية من 45 دقيقة إلى ساعتين حسب كثافة التسليح. يضاف إليها وقت التجهيز والمعاينة والتنظيف النهائي. في الجدران الطوبية تكون أسرع من ذلك.',
  },
  {
    q: 'هل عملية التخريم بالكور في التجمع الخامس نظيفة للشقق المفروشة؟',
    a: 'نعم تماماً. نعتمد على نظام التبريد المائي (Wet Core Drilling) الذي يحوّل الغبار إلى معجون سائل يُسحب فوراً. لا يتصاعد أي غبار في الهواء، مما يجعل العملية مثالية للشقق المسكونة والمفروشة في التجمع الخامس.',
  },
  {
    q: 'هل تركبون الشفاطات وتعملون الفتحة في نفس اليوم؟',
    a: 'نعم. خدمتنا متكاملة — نقوم بتخريم الفتحة بالكور بالقطر والميل المناسب، ثم نركب الشفاط ونوصل الدكت أو نثبت الفلتر الكربوني وننهي التشطيب في زيارة واحدة. هذا يوفر عليك التنسيق مع أطراف متعددة.',
  },
  {
    q: 'ما الفرق بين قص الخرسانة بالمنشار والتكسير بالصاروخ في التجمع الخامس؟',
    a: 'التكسير بالصاروخ العادي يُحدث اهتزازات تُشقق الجدران المجاورة وقد تُضعف الأعمدة والأساسات — خاصة في مباني التجمع الخامس القديمة ذات الخرسانة الهشة. أما القص بالمنشار الماسي فيعتمد على القطع السلس دون اهتزاز واحد، مما يضمن سلامة المبنى بنسبة 100%.',
  },
  {
    q: 'هل تقدمون ضماناً على جودة العمل في التجمع الخامس؟',
    a: 'نعم. نقف خلف كل عمل ننفذه. إذا ظهرت أي مشكلة ناتجة عن تنفيذنا، نعود لموقعك في التجمع الخامس فوراً لمعالجتها دون تكاليف إضافية. سمعتنا هي رأس مالنا الأول.',
  },
];

function Section({ title, subtitle, children, id, level = 2 }: {
  title: string; subtitle?: string; children: React.ReactNode; id?: string; level?: 2 | 3;
}) {
  const HeadingTag = level === 2 ? 'h2' : 'h3';
  return (
    <section id={id} className={`rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]`}>
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

export default function TagamoaPage() {

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BRAND,
      url: DOMAIN,
      telephone: PHONE_INT,
      image: `${DOMAIN}/og-image.webp`,
      logo: `${DOMAIN}/logo-header-116x154.webp`,
      description: 'كور برو - Core Pro متخصصون في قص الخرسانة بالمنشار وتخريم الكور وتركيب الشفاطات بالتجمع الخامس بدقة هندسية وأمان كامل.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EG',
        addressLocality: 'New Cairo',
        addressRegion: 'Cairo Governorate',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 31.2001, longitude: 29.9187 },
      areaServed: ['التجمع الخامس', 'New Cairo', ...TAGAMOA_AREAS],
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      sameAs: [DOMAIN, WHATSAPP],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات قص وتخريم الخرسانة بالتجمع الخامس',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'قص خرسانة التجمع الخامس بالمنشار', url: `${DOMAIN}/saw` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تخريم الخرسانة بالكور في التجمع الخامس', url: `${DOMAIN}/core` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تركيب شفاطات المطابخ بالتجمع الخامس', url: `${DOMAIN}/hoods` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'قص الخرسانة بالواير الماسي بالتجمع الخامس', url: `${DOMAIN}/wire` } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'قص وتخريم الخرسانة بالتجمع الخامس',
      serviceType: 'Concrete Cutting and Core Drilling New Cairo',
      provider: { '@type': 'LocalBusiness', name: BRAND, telephone: PHONE_INT, url: DOMAIN },
      areaServed: ['New Cairo', 'التجمع الخامس', ...TAGAMOA_AREAS],
      url: CANONICAL,
      description: 'خدمات متكاملة لقص الخرسانة بالمنشار وتخريم الكور وتركيب الشفاطات في التجمع الخامس. نخدم جميع أحياء التجمع الخامس بمعدات حديثة وبدون اهتزازات.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map(x => ({
        '@type': 'Question',
        name: x.q,
        acceptedAnswer: { '@type': 'Answer', text: x.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: DOMAIN },
        { '@type': 'ListItem', position: 2, name: 'قص وتخريم خرسانة التجمع الخامس', item: CANONICAL },
      ],
    },
    // ── ImageObject schemas for Google Image Search ──
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${DOMAIN}/images/saw/kas-kharsana-menshar-3.webp`,
      name: 'قص الخرسانة بالمنشار الماسي في التجمع الخامس',
      description: 'قص جدار خرساني بالمنشار الماسي مع التبريد المائي الكامل — خدمة كور برو في التجمع الخامس',
      author: { '@type': 'Organization', name: BRAND, url: DOMAIN },
      copyrightHolder: { '@type': 'Organization', name: BRAND },
      creditText: 'كور برو - Core Pro',
      acquireLicensePage: CANONICAL,
      creator: { '@type': 'Organization', name: BRAND },
      license: `${DOMAIN}/terms`,
      copyrightNotice: `© 2026 ${BRAND}`,

      representativeOfPage: false,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${DOMAIN}/images/core/fatahat-core-beton-1.webp`,
      name: 'تخريم الخرسانة بالكور الماسي في التجمع الخامس',
      description: 'ماكينة كور دريل هيدروليكية أثناء تخريم السقف الخرساني بالتبريد المائي — كور برو التجمع الخامس',
      author: { '@type': 'Organization', name: BRAND, url: DOMAIN },
      copyrightHolder: { '@type': 'Organization', name: BRAND },
      creditText: 'كور برو - Core Pro',
      acquireLicensePage: CANONICAL,
      creator: { '@type': 'Organization', name: BRAND },
      license: `${DOMAIN}/terms`,
      copyrightNotice: `© 2026 ${BRAND}`,

      representativeOfPage: false,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${DOMAIN}/images/hoods/tarkib-shafat-hamam-1.webp`,
      name: 'تركيب شفاطات المطابخ بالتجمع الخامس',
      description: 'شفاطات مطابخ مركبة على السطح بمنافذ خارجية محكمة ضد رطوبة هواء التجمع الخامس — كور برو',
      author: { '@type': 'Organization', name: BRAND, url: DOMAIN },
      copyrightHolder: { '@type': 'Organization', name: BRAND },
      creditText: 'كور برو - Core Pro',
      acquireLicensePage: CANONICAL,
      creator: { '@type': 'Organization', name: BRAND },
      license: `${DOMAIN}/terms`,
      copyrightNotice: `© 2026 ${BRAND}`,

      representativeOfPage: false,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      contentUrl: `${DOMAIN}/images/wire/kas-kharsana-wire-1.webp`,
      name: 'قص الخرسانة بالواير الماسي في التجمع الخامس',
      description: 'ماكينة الواير الماسي أثناء قص خرسانة ضخمة في مشروع بنية تحتية كبير — كور برو التجمع الخامس',
      author: { '@type': 'Organization', name: BRAND, url: DOMAIN },
      copyrightHolder: { '@type': 'Organization', name: BRAND },
      creditText: 'كور برو - Core Pro',
      acquireLicensePage: CANONICAL,
      creator: { '@type': 'Organization', name: BRAND },
      license: `${DOMAIN}/terms`,
      copyrightNotice: `© 2026 ${BRAND}`,

      representativeOfPage: false,
    },
    // ── HowTo schema for process steps (AI Overviews) ──
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'كيف تطلب خدمة قص وتخريم الخرسانة من كور برو بالتجمع الخامس؟',
      description: 'خطوات بسيطة للحصول على خدمة قص أو تخريم الخرسانة في التجمع الخامس من كور برو',
      totalTime: 'PT24H',
      tool: [
        { '@type': 'HowToTool', name: 'منشار خرسانة ماسي (Wall Saw)' },
        { '@type': 'HowToTool', name: 'ماكينة كور دريل هيدروليكية' },
        { '@type': 'HowToTool', name: 'نظام التبريد المائي' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'التواصل وتحديد المتطلبات',
          text: 'تواصل مع كور برو عبر واتساب أو الاتصال على 01021507462 وأخبرنا بنوع العمل المطلوب وموقعك في التجمع الخامس.',
          url: `${CANONICAL}#process`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'المعاينة الميدانية المجانية',
          text: 'يصل فريقنا لموقعك في التجمع الخامس لمعاينة الموقع بالكاشف الإلكتروني وتقديم عرض سعر نهائي مجاناً.',
          url: `${CANONICAL}#process`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'التجهيز وحماية المكان',
          text: 'نغلف المفروشات والأرضيات بمواد حماية ونجهز نظام شفط المياه والأتربة قبل البدء.',
          url: `${CANONICAL}#process`,
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'التنفيذ بالمعدات الاحترافية',
          text: 'ننفذ القص أو التخريم بالمعدات المناسبة مع التبريد المائي الكامل. لا غبار، لا اهتزاز.',
          url: `${CANONICAL}#process`,
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'التسليم النهائي النظيف',
          text: 'ننظف الموقع بالكامل ونسلمك الفتحة أو القطع بحواف ناعمة جاهزة للتشطيب مباشرة.',
          url: `${CANONICAL}#process`,
        },
      ],
    },
    // ── Speakable schema for AI voice answers ──
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url: CANONICAL,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#saw-New Cairo', '#core-New Cairo', '#faq'],
      },
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(16,185,129,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-800 shadow-sm mb-6">
            <MapPin className="h-4 w-4 text-sky-600" />
            <span>يخدم جميع أحياء التجمع الخامس · قص · تخريم · شفاطات · واير</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-sky-600 pr-4">
                قص وتخريم خرسانة التجمع الخامس — {PHONE}
              </h1>

              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> هو متخصصك الأول في <strong>قص الخرسانة بالتجمع الخامس</strong> وتخريم الكور وتركيب الشفاطات.
                  نقدم خدماتنا لأهالي التجمع الخامس في كافة الأحياء بأحدث معدات القطع الماسي والتخريم الهيدروليكي —
                  <strong> بدون اهتزازات، وبدون غبار، وبضمان سلامة الهيكل الإنشائي.</strong>
                </p>
                <p>
                  سواء كنت تحتاج <strong>معلم قص جدار بالتجمع الخامس</strong> لفتح باب أو شباك، أو <strong>صنايعي كور التجمع الخامس</strong> لتمرير مواسير الغاز والتكييف،
                  أو <strong>فني تركيب شفاط مطبخ بالتجمع الخامس</strong> — فريقنا المتخصص يصل إليك ويُنجز المهمة بسرعة ودقة عالية.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {['بدون اهتزاز', 'بدون غبار', 'دقة ليزر'].map(s => (
                  <div key={s} className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-3 py-3 text-sm text-slate-700 shadow-sm font-bold text-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
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
                <span>معاينة مجانية · نصل خلال 24 ساعة في التجمع الخامس</span>
              </div>
            </div>

            {/* Info Card */}
            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-sky-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-sky-600" />
                </div>
                <div>
                  <div className="font-black text-slate-900 text-lg">تغطية كاملة للتجمع الخامس</div>
                  <div className="text-sm text-slate-500">من مدينتي والرحاب حتى جنوب الأكاديمية</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {TAGAMOA_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-2 rounded-xl bg-sky-50 border border-sky-100 px-3 py-2 text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-slate-900 text-white p-5">
                <div className="text-sm text-slate-400 mb-1">للحجز والاستفسار</div>
                <div className="text-2xl font-black text-emerald-400">{PHONE}</div>
                <div className="text-sm text-slate-400 mt-1">متاح 7 أيام في الأسبوع</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ MAIN CONTENT + SIDEBAR ══════════════ */}
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* ── Main Column ── */}
          <div className="lg:col-span-2 space-y-10 min-w-0">

            {/* 1. قص الخرسانة بالمنشار */}
            <Section id="saw-New Cairo" title="قص الخرسانة بالمنشار في التجمع الخامس">
              <p>
                تقنية <strong>قص الخرسانة بالمنشار في التجمع الخامس</strong> هي الحل الهندسي الأمثل لإجراء تعديلات معمارية على المباني القائمة بدون تدمير الهيكل الإنشائي.
                نستخدم <strong>منشار السكة (Track Saw)</strong> المزود بأقراص ألماسية تنتقل على مسار معدني مثبت بدقة على الجدار أو السقف،
                مما يضمن <strong>قصاً مستقيماً بنسبة خطأ صفر</strong> — وهو ما يُعرَّف شعبياً بـ <strong>قص الخرسانة بالليزر</strong>.
              </p>
              <p>
                كثير من عمائر التجمع الخامس القديمة في الأحياء الداخلية كالتجمع الأول والتجمع الثالث تحتاج لتوسعة فتحات الأبواب أو فتح مداخل جديدة.
                <strong>معلم قص جدار بالتجمع الخامس</strong> من فريقنا يدرس المقطع الإنشائي أولاً، يحدد مسار الحديد بالأجهزة المتخصصة،
                ثم ينفذ القص بدقة جراحية وبتبريد مائي كامل يمنع أي غبار.
              </p>
              <div className="not-prose space-y-4 mt-6">
                <h3 className="text-xl font-black text-slate-900">خدمات قص الخرسانة التي نقدمها في التجمع الخامس:</h3>
                {[
                  { t: 'قص جدار لفتح باب أو شباك', d: 'نفتح فتحات الأبواب والنوافذ في الجدران الخرسانية والطوبية بدقة مطلقة. الحواف تكون ناعمة ومستوية جاهزة مباشرة لتركيب الحلق الخشبي أو الألومنيوم.' },
                  { t: 'قص السقف لعمل فتحات السلالم (دوبلكس)', d: 'دمج شقتين رأسياً في التجمع الخامس؟ نقوم بقص الأسقف الخرسانية بأمان تام لعمل فتحة السلم الداخلي مع تأمين البلوك قبل فصله لمنع السقوط المفاجئ.' },
                  { t: 'قص الخرسانة لتمرير المصاعد', d: 'تأسيس بئر المصعد يتطلب قص أسقف متعددة بدقة هندسية. نملك الخبرة والمعدات اللازمة لتنفيذ هذا النوع من المشاريع في مباني التجمع الخامس.' },
                  { t: 'قص بالصاروخ للأماكن الضيقة', d: 'لعمل مسارات الكهرباء والسباكة في الجدران، أو لتفتيح مجاري في الأماكن الضيقة التي لا تسمح بتركيب منشار السكة.' },
                ].map(item => (
                  <div key={item.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-black text-slate-900">{item.t}</div>
                      <p className="mt-1 text-slate-600 text-sm leading-7">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* صورة قص المنشار */}
              <div className="not-prose mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/saw/kas-kharsana-menshar-3.webp"
                  alt="قص الخرسانة بالمنشار الماسي في التجمع الخامس — كور برو"
                  width={900}
                  height={500}
                  className="w-full object-cover max-h-72"
                />
                <p className="text-center text-xs text-slate-400 py-2 bg-slate-50">قص جدار خرساني بالمنشار الماسي مع التبريد المائي الكامل</p>
              </div>
            </Section>

            {/* 2. تخريم الكور */}
            <Section id="core-New Cairo" title="تخريم الخرسانة بالكور في التجمع الخامس">
              <p>
                <strong>تخريم الخرسانة بالكور في التجمع الخامس</strong> هو إحداث فتحات أسطوانية دقيقة في الجدران والأسقف الخرسانية باستخدام ماكينة كور دريل مزودة بأسطوانات ألماسية.
                الفتحة الناتجة تكون دائرية تماماً، ناعمة الحواف من الداخل، بقطر مضبوط بالملليمتر — بدون أي اهتزاز أو تشقق للسطح المحيط.
              </p>
              <p>
                يستخدم <strong>صنايعي كور التجمع الخامس</strong> من فريقنا نظام التبريد المائي (Wet Core Drilling)
                الذي يحوّل الأتربة لمعجون سائل يُسحب فوراً، مما يجعل العملية <strong>نظيفة 100% حتى في الشقق المفروشة</strong>.
              </p>
              <div className="not-prose mt-6 space-y-4">
                <h3 className="text-xl font-black text-slate-900">أبرز استخدامات تخريم الكور في التجمع الخامس:</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50', t: 'فتحات الغاز الطبيعي', d: 'فتحات بالأقطار المطابقة لاشتراطات شركات الغاز في التجمع الخامس مع ضمان استقامة المسار.' },
                    { icon: Wind, color: 'text-sky-500', bg: 'bg-sky-50', t: 'فتحات التكييف والتهوية', d: 'فتحات بميل مضبوط للـ split وتمرير دكتات التكييف المركزي في فيلات وأبراج التجمع الخامس.' },
                    { icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-50', t: 'فتحات السباكة والصرف', d: 'فتحات المواسير بأقطار 4 و6 بوصة لتمرير خطوط المياه والصرف الصحي.' },
                    { icon: Fan, color: 'text-emerald-500', bg: 'bg-emerald-50', t: 'فتحات الشفاطات والمداخن', d: 'فتحة المدخنة ومسار الدكت بالقطر المناسب للشفاط مع إنهاء التشطيب في زيارة واحدة بالتجمع الخامس.' },
                  ].map(x => (
                    <div key={x.t} className={`rounded-2xl border border-black/10 ${x.bg} p-5`}>
                      <div className="flex items-center gap-2 mb-2">
                        <x.icon className={`h-5 w-5 ${x.color}`} />
                        <div className="font-black text-slate-900">{x.t}</div>
                      </div>
                      <p className="text-slate-600 text-sm leading-7">{x.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* صورة ماكينة الكور */}
              <div className="not-prose mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/core/fatahat-core-beton-1.webp"
                  alt="تخريم الخرسانة بالكور الماسي في التجمع الخامس — كور برو"
                  width={900}
                  height={500}
                  className="w-full object-cover max-h-72"
                />
                <p className="text-center text-xs text-slate-400 py-2 bg-slate-50">ماكينة كور دريل هيدروليكية أثناء تخريم السقف الخرساني بالتبريد المائي</p>
              </div>
            </Section>

            {/* 3. مقارنة */}
            <Section id="comparison" title="قص الخرسانة الاحترافي مقابل التكسير التقليدي في التجمع الخامس">
              <p>
                لا يزال بعض مقاولي التجمع الخامس يلجؤون إلى <strong>التكسير بالهيلتي أو الصاروخ اليدوي</strong> لفتح الفتحات،
                وهذا قد يُشكّل خطراً حقيقياً على مباني التجمع الخامس القديمة التي تعاني أصلاً من التقادم وضعف البنية الإنشائية مع مرور السنين.
                اليك مقارنة موضوعية:
              </p>
              <div className="not-prose mt-6 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-right text-slate-800 min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-4 font-black text-slate-900 w-1/4">وجه المقارنة</th>
                      <th className="p-4 font-black text-emerald-700 border-r border-slate-200 bg-emerald-50/50">القطع الاحترافي (كور برو)</th>
                      <th className="p-4 font-black text-rose-700 border-r border-slate-200 bg-rose-50/50">التكسير التقليدي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { aspect: 'الاهتزازات', pro: 'صفر اهتزاز — قطع احتكاكي سلس', con: 'اهتزازات عنيفة تُشقق الجدران' },
                      { aspect: 'الغبار والأتربة', pro: 'تبريد مائي — لا غبار إطلاقاً', con: 'غبار كثيف يملأ الشقة بالكامل' },
                      { aspect: 'دقة الحواف', pro: 'حواف ناعمة جاهزة للتشطيب', con: 'حواف خشنة تحتاج محارة مكلفة' },
                      { aspect: 'سلامة المبنى', pro: 'لا تأثير على الأعمدة والأساسات', con: 'خطر تشقق الهيكل الإنشائي' },
                      { aspect: 'الضوضاء', pro: 'مستوى صوت منخفض نسبياً', con: 'ضجيج عالٍ جداً ومزعج' },
                      { aspect: 'مناسب للمباني القديمة', pro: '✓ مثالي وآمن تماماً', con: '✗ خطر على الخرسانة المتقادمة' },
                    ].map(row => (
                      <tr key={row.aspect} className="hover:bg-slate-50 transition">
                        <td className="p-4 font-bold text-slate-900">{row.aspect}</td>
                        <td className="p-4 border-r border-slate-200 text-emerald-700 text-sm">{row.pro}</td>
                        <td className="p-4 border-r border-slate-200 text-rose-700/80 text-sm">{row.con}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* 4. الشفاطات */}
            <Section id="hoods-New Cairo" title="تركيب شفاطات المطابخ والحمامات بالتجمع الخامس">
              <p>
                نقدم خدمة <strong>تركيب شفاط المطبخ بالتجمع الخامس</strong> بشكل متكامل — من تخريم الفتحة بالكور بالقطر والميل الصحيحين،
                إلى تركيب الشفاط وتوصيل الدكت أو الفلتر الكربوني وتشطيب الإطار النهائي في زيارة واحدة.
                هذا يعني أنك لا تحتاج لتنسيق بين فني التخريم وفني التركيب — فريقنا يتولى كل شيء.
              </p>
              <p>
                نتعامل مع جميع ماركات الشفاطات المتوفرة في السوق المصري: توشيبا، فريش، تورنيدو، إليكا، باناسونيك، KDK، شارب، أريستون،
                سواء كانت بمدخنة (تحتاج فتحة خارجية) أو بفلتر كربوني (لا تحتاج فتحة).
              </p>
              <div className="not-prose grid gap-4 md:grid-cols-3 mt-6">
                {[
                  { t: 'شفاطات بمدخنة خارجية', d: 'نُخرِّم الفتحة في الجدار الخارجي ونوصل الدكت مع إنهاء التشطيب بشكل أنيق — مناسب لفيلات وشقق التجمع.' },
                  { t: 'شفاطات بفلتر كربوني', d: 'للشقق التي لا يمكن فيها عمل فتحة خارجية — الحل الأنسب لأبراج التجمع الخامس ومدينتي عالية الطوابق.' },
                  { t: 'شفاطات حمام مركزية', d: 'تركيب شبكة دكت مركزية لطرد الرطوبة المتراكمة في الحمامات — مطلوب بكثرة في الوحدات الكبيرة بالتجمع الخامس.' },
                ].map(x => (
                  <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="font-black text-slate-900 mb-2">{x.t}</div>
                    <p className="text-slate-600 text-sm leading-7">{x.d}</p>
                  </div>
                ))}
              </div>

              {/* صورة الشفاطات */}
              <div className="not-prose mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/hoods/tarkib-shafat-hamam-1.webp"
                  alt="تركيب شفاطات المطابخ والمداخن بالتجمع الخامس — كور برو"
                  width={900}
                  height={500}
                  className="w-full object-cover max-h-72"
                />
                <p className="text-center text-xs text-slate-400 py-2 bg-slate-50">شفاطات مطابخ مركبة على السطح بمنافذ خارجية محكمة ضد رطوبة هواء التجمع الخامس</p>
              </div>
            </Section>

            {/* 5. الواير الماسي */}
            <Section id="wire-New Cairo" title="قص الخرسانة بالواير الماسي في التجمع الخامس — المشاريع الكبرى">
              <p>
                <strong>قص الخرسانة بالواير الماسي (Diamond Wire Sawing) بالتجمع الخامس</strong> هو الحل النهائي لمشاريع البنية التحتية الكبرى
                التي تفوق قدرة المنشار التقليدي — مثل قص أساسات المشاريع العملاقة، هدم الكباري الخرسانية، وقواعد الماكينات الثقيلة في المناطق الصناعية بمحيط القاهرة الجديدة.
              </p>
              <p>
                يعتمد النظام على حبل فولاذي مرن مُرصَّع بحبيبات الألماس الصناعي يلتف حول الكتلة الخرسانية المراد قصها،
                تسحبه ماكينة هيدروليكية بسرعة محسوبة لقطع الخرسانة والحديد معاً في صمت تام وبدون اهتزاز واحد.
                لا يوجد حد أقصى لسماكة الخرسانة — مما يجعله مثالياً لمشاريع التجمع الخامس والقاهرة الجديدة الكبرى.
              </p>
              <Link href="/wire" className="inline-flex items-center gap-2 mt-4 text-sm font-black text-emerald-700 hover:underline">
                تعرف أكثر عن خدمة الواير الماسي ←
              </Link>

              {/* صورة الواير الماسي */}
              <div className="not-prose mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/wire/kas-kharsana-wire-1.webp"
                  alt="قص الخرسانة بالواير الماسي في التجمع الخامس — مشاريع كبرى — كور برو"
                  width={900}
                  height={500}
                  className="w-full object-cover max-h-72"
                />
                <p className="text-center text-xs text-slate-400 py-2 bg-slate-50">ماكينة الواير الماسي أثناء قص خرسانة ضخمة في مشروع بنية تحتية كبير</p>
              </div>
            </Section>

            {/* 6. الأسعار */}
            <Section
              id="pricing"
              title="دليل أسعار قص وتخريم الخرسانة في التجمع الخامس"
              subtitle="سياسة التسعير الشفاف — لا توجد أسعار مخفية أو مفاجآت"
            >
              <p>
                <strong>أسعار قص الخرسانة في التجمع الخامس</strong> تتحدد بناءً على معايير هندسية واضحة وليس جزافاً.
                نحن نؤمن بالشفافية الكاملة في التسعير ونقدم عرض سعر مفصّل بعد المعاينة الميدانية المجانية.
              </p>

              <div className="not-prose mt-6 space-y-4">
                <h3 className="text-xl font-black text-slate-900">العوامل التي تحدد السعر:</h3>
                <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <div className="bg-slate-900 p-5">
                    <h3 className="text-lg font-black text-sky-400">عوامل تسعير قص الخرسانة بالتجمع الخامس</h3>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      {
                        icon: '📐', t: 'سمك الخرسانة أو عمق الفتحة',
                        d: 'قص جدار بسمك 15 سم يختلف عن سمك 30 سم في التكلفة. كذلك قطر فتحة الكور يؤثر مباشرة على السعر (فتحة 4 بوصة ≠ 10 بوصة).'
                      },
                      {
                        icon: '🔩', t: 'كثافة التسليح الحديدي',
                        d: 'الخرسانة المسلحة بحديد كثيف تستهلك أسطوانات ألماس أسرع، وهذا ينعكس على السعر. الطوب والبلوك أرخص من الخرسانة المسلحة الثقيلة.'
                      },
                      {
                        icon: '📏', t: 'الطول الإجمالي أو عدد الفتحات',
                        d: 'في قص الجدران: يُحسب السعر بالمتر الطولي. في الكور: بعدد الفتحات. تنخفض التكلفة بشكل ملحوظ في الطلبيات الكبيرة والمشاريع.'
                      },
                      {
                        icon: '📍', t: 'موقع العمل داخل التجمع الخامس',
                        d: 'العمل في طوابق عليا يتطلب سقالات أو معدات إضافية. العمل في أماكن صعبة الوصول يُضاف له رسم تجهيز بسيط.'
                      },
                    ].map(row => (
                      <div key={row.t} className="flex gap-4 p-5">
                        <div className="text-2xl shrink-0">{row.icon}</div>
                        <div>
                          <div className="font-black text-slate-900 mb-1">{row.t}</div>
                          <p className="text-slate-600 text-sm leading-7">{row.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-sky-50 border border-sky-200 p-6 flex gap-4">
                  <BadgeCheck className="h-6 w-6 text-sky-600 shrink-0 mt-1" />
                  <div>
                    <div className="font-black text-slate-900 mb-1">خصم خاص للمقاولين وأصحاب المشاريع في التجمع الخامس</div>
                    <p className="text-slate-600 text-sm leading-7">
                      نقدم تسعيراً خاصاً للمقاولين والمكاتب الهندسية وأصحاب المشاريع الكبيرة بالتجمع الخامس عند التعاقد على كميات
                      (عدد كبير من الفتحات أو أمتار طولية عالية). تواصل معنا لمعرفة الباقات المتاحة.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* 7. مباني التجمع الخامس */}
            <Section
              id="tagamoa-buildings"
              title="تحديات مباني التجمع الخامس وكيف نتعامل معها"
              subtitle="خبرة متراكمة في خصوصية مباني القاهرة الجديدة"
            >
              <p>
                تتميز مباني التجمع الخامس بتنوعها بين عمائر قديمة وكومباوندات حديثة، وهو ما يتطلب خبرة متخصصة للتعامل مع كل نوع:
              </p>
              <div className="not-prose grid gap-4 md:grid-cols-2 mt-6">
                {[
                  { t: 'العمائر والمباني القديمة', d: 'عمائر التجمع الأول والثالث القديمة تحتوي على خرسانة متقادمة أقل صلابة وأكثر حساسية للاهتزاز. نتعامل معها بماكينات منخفضة الدوران وتبريد مائي مكثف لضمان عدم تفتت الخرسانة المحيطة.', bg: 'bg-amber-50 border-amber-100' },
                  { t: 'أبراج وكومباوندات مدينتي والرحاب', d: 'الخرسانة عالية الإجهاد في أبراج المجمعات السكنية الحديثة تحتاج أسطوانات ألماس بجودة عالية وضغط هيدروليكي أعلى. معداتنا مُهيّأة للتعامل مع أصعب أنواع الخرسانة الحديثة.', bg: 'bg-sky-50 border-sky-100' },
                  { t: 'المشاريع الصناعية والتجارية', d: 'المناطق التجارية والصناعية في محيط القاهرة الجديدة تضم منشآت بجدران وأرضيات خرسانية ثقيلة. نملك معدات الواير الماسي والمنشار الهيدروليكي الثقيل لهذا النوع من المشاريع.', bg: 'bg-violet-50 border-violet-100' },
                  { t: 'فيلات وبيوت مستقلة', d: 'الفيلات والمنازل المستقلة في أحياء البنفسج والقرنفل والنرجس تتميز بجدران أكثر سماكة وتصميمات معمارية خاصة. نتعامل معها بدقة لضمان الحفاظ على الشكل الجمالي للمبنى.', bg: 'bg-emerald-50 border-emerald-100' },
                ].map(x => (
                  <div key={x.t} className={`rounded-2xl border ${x.bg} p-5`}>
                    <div className="font-black text-slate-900 mb-2">{x.t}</div>
                    <p className="text-slate-600 text-sm leading-7">{x.d}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 8. مراحل التنفيذ */}
            <Section id="process" title="مراحل تنفيذ العمل في التجمع الخامس: من التواصل إلى التسليم">
              <div className="space-y-6 not-prose">
                {[
                  { n: '1', t: 'التواصل وتحديد المتطلبات', d: 'تتواصل معنا عبر واتساب أو الاتصال وتشرح نوع العمل المطلوب (قص أو تخريم أو تركيب)، الموقع في التجمع الخامس، وطبيعة الجدار أو السقف.' },
                  { n: '2', t: 'المعاينة الميدانية المجانية', d: 'يصل فريقنا لموقعك في التجمع الخامس لمعاينة الموقع بالكاشف الإلكتروني لتحديد أماكن حديد التسليح، ثم نُقدم عرض سعر نهائياً ومحدداً بدون أي رسوم مخفية.' },
                  { n: '3', t: 'التجهيز وحماية المكان', d: 'نُغلِّف المفروشات والأرضيات بمواد حماية مناسبة قبل البدء في العمل، ونجهز نظام شفط المياه والأتربة في مكانه.' },
                  { n: '4', t: 'التنفيذ بالمعدات الاحترافية', d: 'ننفذ القص أو التخريم بالمعدات المناسبة مع التبريد المائي الكامل. لا غبار، لا اهتزاز، لا ضجيج مبالغ فيه. الفريق يعمل بسرعة ودقة هندسية.' },
                  { n: '5', t: 'التسليم النهائي النظيف', d: 'ننظف الموقع بالكامل ونُسلِّمك الفتحة أو القطع بحواف ناعمة ومستوية جاهزة لأعمال التشطيب أو التركيب مباشرة.' },
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

            {/* 9. FAQ */}
            <Section id="faq" title="الأسئلة الشائعة عن خدمات قص وتخريم الخرسانة بالتجمع الخامس">
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

          {/* ── Sidebar ── */}
          <aside className="space-y-6 min-w-0">

            {/* CTA Card */}
            <div className="p-7 rounded-[40px] bg-sky-600 text-white shadow-xl relative overflow-hidden sticky top-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="font-black text-2xl mb-3">اطلب معاينة مجانية</h3>
              <p className="text-sky-100 text-sm mb-5 leading-7">
                فريقنا في التجمع الخامس يصل إليك ويُقدم عرض سعر فوري — بدون أي التزام.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-2xl bg-white text-sky-900 font-black text-lg hover:scale-[1.02] transition shadow-lg mb-3">
                واتساب مباشر
              </a>
              <a href={`tel:${PHONE}`}
                className="block w-full text-center py-4 rounded-2xl border-2 border-white/40 text-white font-black text-lg hover:bg-white/10 transition">
                {PHONE}
              </a>
            </div>

            {/* Trust Signals */}
            <div className="p-7 rounded-[40px] bg-white border border-black/10 shadow-lg">
              <h3 className="font-black text-xl text-slate-900 mb-5">لماذا نحن الخيار الأول بالتجمع الخامس؟</h3>
              <div className="space-y-4">
                <StatPill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="أمان إنشائي مثبت" />
                <StatPill icon={<Layers className="h-4 w-4 text-sky-600" />} text="معدات حديثة متطورة" />
                <StatPill icon={<Target className="h-4 w-4 text-amber-600" />} text="أسعار تنافسية شفافة" />
                <StatPill icon={<Wrench className="h-4 w-4 text-slate-700" />} text="خدمة متكاملة من فريق واحد" />
                <StatPill icon={<MapPin className="h-4 w-4 text-rose-500" />} text="تغطية كاملة للتجمع الخامس" />
                <StatPill icon={<Clock className="h-4 w-4 text-violet-600" />} text="وصول خلال 24 ساعة" />
              </div>
            </div>

            {/* Related Services */}
            <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
              <h3 className="font-black text-lg text-slate-900 mb-4">تفاصيل كل خدمة</h3>
              <div className="space-y-2">
                {[
                  { href: '/saw', label: 'قص الخرسانة بالمنشار', color: 'text-sky-600' },
                  { href: '/core', label: 'تخريم الخرسانة بالكور', color: 'text-emerald-600' },
                  { href: '/hoods', label: 'تركيب شفاطات المطابخ', color: 'text-amber-600' },
                  { href: '/wire', label: 'قص بالواير الماسي', color: 'text-violet-600' },
                  { href: '/prices', label: 'دليل الأسعار', color: 'text-slate-600' },
                ].map(s => (
                  <a key={s.href} href={s.href}
                    className={`flex items-center gap-2 text-sm font-bold text-slate-700 hover:${s.color} hover:underline py-1.5`}>
                    <span className={s.color}>›</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Areas */}
            <div className="p-6 rounded-[40px] bg-slate-900 text-white shadow-lg">
              <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-400" />
                مناطق التغطية
              </h3>
              <div className="space-y-2">
                {TAGAMOA_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>

        {/* CTA Banner */}
        <section className="mt-10 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 text-sky-300 font-bold mb-5 text-sm border border-sky-500/30">
                <BadgeCheck className="w-4 h-4" />
                خدمة متخصصة بالتجمع الخامس
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
                جاهز لبدء مشروعك في التجمع الخامس؟
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر فوري. فريقنا في التجمع الخامس جاهز 7 أيام أسبوعياً.
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

