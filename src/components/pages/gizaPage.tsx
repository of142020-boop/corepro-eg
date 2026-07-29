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
  MapPin, Phone, ShieldCheck, CheckCircle2, Fan, Clock,
  BadgeCheck, Layers, Wrench, Target, Flame, Wind, Droplets, Maximize, Plus,
} from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/concrete-cutting-giza`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const GIZA_AREAS = [
  'الدقي والمهندسين',
  'العجوزة والزمالك',
  'إمبابة وأبو النمرس',
  '6 أكتوبر والشيخ زايد',
  'حدائق الأهرام والهرم',
  'البدرشين والعياط',
  'كرداسة والوراق',
  'فيصل والهرم',
  'مدينة 6 أكتوبر الجديدة',
  'الشيخ زايد والبياضية',
  'أكتوبر الجديدة وزايد 2030',
  'المنيب ووراق العرب',
];

const FAQ = [
  {
    q: 'هل تعملون في مدينة 6 أكتوبر والشيخ زايد بشكل دائم؟',
    a: 'نعم، لدينا فريق متخصص يغطي جميع مناطق الجيزة بشكل كامل ودائم طوال العام. نخدم من الدقي والمهندسين غرباً حتى 6 أكتوبر والشيخ زايد ونصل لموقعك في أسرع وقت.',
  },
  {
    q: 'هل تختلف أسعار قص الخرسانة في الجيزة عن القاهرة؟',
    a: 'نقدم أسعاراً تنافسية موحدة في كل مصر. السعر يُحدد بناءً على نوع الخدمة وسُمك الخرسانة وعدد الفتحات أو الأمتار — وليس الموقع الجغرافي. نقدم عرض سعر مجاني بعد المعاينة.',
  },
  {
    q: 'هل تتعاملون مع مشاريع مجمعات 6 أكتوبر والمجتمعات المسورة؟',
    a: 'بالتأكيد. لدينا خبرة في التعامل مع مشاريع الكمبوندات والمجتمعات المسورة في 6 أكتوبر والشيخ زايد، ونلتزم بجميع قواعد الأمان والنظافة المطلوبة من إدارات هذه المشاريع.',
  },
  {
    q: 'كم تستغرق عملية قص جدار لفتح باب في الجيزة؟',
    a: 'لفتح باب قياسي (90×210 سم) في جدار خرساني بسُمك 20 سم، تستغرق عملية القص الفعلية من 45 دقيقة إلى ساعتين حسب كثافة التسليح، مع وقت التجهيز والتنظيف النهائي.',
  },
  {
    q: 'هل تركبون الشفاطات وتعملون الفتحة في نفس اليوم في الجيزة؟',
    a: 'نعم. خدمتنا متكاملة — نقوم بتخريم الفتحة بالكور بالقطر المناسب، ثم نركب الشفاط ونوصل الدكت ونُنهي التشطيب في زيارة واحدة. هذا يوفر عليك التنسيق بين عدة أطراف.',
  },
  {
    q: 'هل العملية نظيفة في الشقق المفروشة بالجيزة؟',
    a: 'نعم تماماً. نعتمد على نظام التبريد المائي (Wet Core Drilling) الذي يحوّل الغبار إلى معجون سائل يُسحب فوراً. لا يتصاعد أي غبار في الهواء، مما يجعل العملية مثالية للشقق المسكونة والمفروشة.',
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

export default function GizaPage() {

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BRAND,
      url: DOMAIN,
      telephone: PHONE_INT,
      image: `${DOMAIN}/og-image.webp`,
      logo: `${DOMAIN}/logo-header-116x154.webp`,
      description: 'كور برو - Core Pro متخصصون في قص الخرسانة بالمنشار وتخريم الكور وتركيب الشفاطات في الجيزة بدقة هندسية وأمان كامل.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EG',
        addressLocality: 'Giza',
        addressRegion: 'Giza Governorate',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 30.0131, longitude: 31.2089 },
      areaServed: ['الجيزة', 'Giza', '6 أكتوبر', 'الشيخ زايد', ...GIZA_AREAS],
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      sameAs: [DOMAIN, WHATSAPP],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات قص وتخريم الخرسانة بالجيزة',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'قص خرسانة الجيزة بالمنشار', url: `${DOMAIN}/saw` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تخريم الخرسانة بالكور في الجيزة', url: `${DOMAIN}/core` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'تركيب شفاطات المطابخ بالجيزة', url: `${DOMAIN}/hoods` } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'قص وتخريم الخرسانة بالجيزة',
      serviceType: 'Concrete Cutting and Core Drilling Giza',
      provider: { '@type': 'LocalBusiness', name: BRAND, telephone: PHONE_INT, url: DOMAIN },
      areaServed: ['الجيزة', 'Giza', '6 أكتوبر', 'الشيخ زايد', ...GIZA_AREAS],
      url: CANONICAL,
      description: 'خدمات متكاملة لقص الخرسانة بالمنشار وتخريم الكور وتركيب الشفاطات في الجيزة. نخدم جميع أحياء الجيزة من الدقي حتى 6 أكتوبر بمعدات حديثة وبدون اهتزازات.',
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
        { '@type': 'ListItem', position: 2, name: 'قص وتخريم خرسانة الجيزة', item: CANONICAL },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(59,130,246,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm mb-6">
            <MapPin className="h-4 w-4 text-emerald-600" />
            <span>يخدم جميع أحياء الجيزة · قص · تخريم · شفاطات</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4">
                قص وتخريم خرسانة الجيزة - 01021507462
              </h1>

              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> هو متخصصك الأول في <strong>قص الخرسانة بالجيزة</strong> وتخريم الكور وتركيب الشفاطات.
                  نقدم خدماتنا لأهالي الجيزة في كافة الأحياء من الدقي والمهندسين حتى 6 أكتوبر والشيخ زايد —
                  <strong> بدون اهتزازات، وبدون غبار، وبضمان سلامة الهيكل الإنشائي.</strong>
                </p>
                <p>
                  سواء كنت تحتاج <strong>معلم قص جدار بالجيزة</strong> لفتح باب أو شباك، أو <strong>صنايعي كور في 6 أكتوبر</strong> لتمرير مواسير الغاز والتكييف،
                  أو <strong>فني تركيب شفاط مطبخ بالجيزة</strong> — فريقنا المتخصص يصل إليك ويُنجز المهمة بسرعة ودقة عالية.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {['بدون اهتزاز', 'بدون غبار', 'دقة هندسية'].map(s => (
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
                <span>معاينة مجانية · نصل خلال 24 ساعة في الجيزة</span>
              </div>
            </div>

            {/* Info Card */}
            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-black text-slate-900 text-lg">تغطية كاملة للجيزة</div>
                  <div className="text-sm text-slate-500">من الدقي شرقاً حتى 6 أكتوبر غرباً</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {GIZA_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2 text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
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

      {/* MAIN CONTENT + SIDEBAR */}
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10 min-w-0">

            {/* 1. قص الخرسانة */}
            <Section id="saw-giza" title="قص الخرسانة بالمنشار في الجيزة">
              <p>
                تقنية <strong>قص الخرسانة بالمنشار في الجيزة</strong> هي الحل الهندسي الأمثل لإجراء تعديلات معمارية على المباني القائمة بدون تدمير الهيكل الإنشائي.
                نستخدم <strong>منشار السكة (Track Saw)</strong> المزود بأقراص ألماسية تنتقل على مسار معدني مثبت بدقة على الجدار أو السقف،
                مما يضمن <strong>قصاً مستقيماً بدقة مطلقة</strong> — بدون اهتزاز واحد يؤثر على الأعمدة أو الأساسات.
              </p>
              <div className="not-prose space-y-4 mt-6">
                <h3 className="text-xl font-black text-slate-900">خدمات قص الخرسانة التي نقدمها في الجيزة:</h3>
                {[
                  { t: 'قص جدار لفتح باب أو شباك', d: 'نفتح فتحات الأبواب والنوافذ في الجدران الخرسانية بدقة مطلقة. الحواف تكون ناعمة ومستوية جاهزة لتركيب الحلق الخشبي أو الألومنيوم مباشرة.' },
                  { t: 'قص السقف لعمل فتحات السلالم (دوبلكس)', d: 'دمج شقتين رأسياً في مجمعات 6 أكتوبر والشيخ زايد؟ نقوم بقص الأسقف الخرسانية بأمان تام مع تأمين البلوك قبل الفصل.' },
                  { t: 'قص خرسانة كمبوندات 6 أكتوبر', d: 'نلتزم بمعايير السلامة الخاصة بكل مجمع سكني ونقدم شهادات الأمان المطلوبة من إدارة الكمبوند.' },
                  { t: 'قص الأساسات والقواعد الخرسانية', d: 'لمشاريع التعديل والتوسعة في المصانع والمستودعات بمنطقة الجيزة الصناعية.' },
                ].map(item => (
                  <div key={item.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-black text-slate-900">{item.t}</div>
                      <p className="mt-1 text-slate-600 text-sm leading-7">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 2. تخريم الكور */}
            <Section id="core-giza" title="تخريم الخرسانة بالكور في الجيزة">
              <p>
                <strong>تخريم الخرسانة بالكور في الجيزة</strong> هو إحداث فتحات أسطوانية دقيقة في الجدران والأسقف الخرسانية باستخدام ماكينة كور دريل مزودة بأسطوانات ألماسية.
                الفتحة الناتجة تكون دائرية تماماً، ناعمة الحواف من الداخل، بقطر مضبوط بالملليمتر — بدون أي اهتزاز أو تشقق للسطح المحيط.
              </p>
              <div className="not-prose mt-6 space-y-4">
                <h3 className="text-xl font-black text-slate-900">أبرز استخدامات تخريم الكور في الجيزة:</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50', t: 'فتحات الغاز الطبيعي', d: 'فتحات بالأقطار المطابقة لاشتراطات شركات الغاز في الجيزة مع ضمان استقامة المسار.' },
                    { icon: Wind, color: 'text-sky-500', bg: 'bg-sky-50', t: 'فتحات التكييف في الفيلات', d: 'فتحات بميل مضبوط لتصريف الكونديشن وتمرير دكتات التكييف المركزي في فيلات 6 أكتوبر.' },
                    { icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-50', t: 'فتحات السباكة والصرف', d: 'فتحات المواسير بأقطار 4 و6 بوصة لتمرير خطوط المياه والصرف الصحي.' },
                    { icon: Fan, color: 'text-emerald-500', bg: 'bg-emerald-50', t: 'فتحات الشفاطات والمداخن', d: 'فتحة المدخنة ومسار الدكت بالقطر المناسب للشفاط مع إحكام التسديد ضد الحشرات.' },
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
            </Section>

            {/* 3. الشفاطات */}
            <Section id="hoods-giza" title="تركيب شفاطات المطابخ والحمامات بالجيزة">
              <p>
                نقدم خدمة <strong>تركيب شفاط المطبخ بالجيزة</strong> بشكل متكامل — من تخريم الفتحة بالكور بالقطر والميل الصحيحين،
                إلى تركيب الشفاط وتوصيل الدكت أو الفلتر الكربوني وتشطيب الإطار النهائي في زيارة واحدة.
              </p>
              <div className="not-prose grid gap-4 md:grid-cols-3 mt-6">
                {[
                  { t: 'شفاطات بمدخنة خارجية', d: 'نُخرِّم الفتحة في الجدار الخارجي ونوصل الدكت مع هواية خارجية بصمام لمنع رجوع الهواء والحشرات.' },
                  { t: 'شفاطات بفلتر كربوني', d: 'للشقق التي لا يمكن فيها عمل فتحة خارجية — الحل الأنسب لأبراج الجيزة والأدوار العليا.' },
                  { t: 'شفاطات حمام ودكت تهوية', d: 'تركيب شبكة دكت مركزية لطرد الرطوبة من الحمامات — خاصة مهم في فيلات 6 أكتوبر.' },
                ].map(x => (
                  <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5">
                    <div className="font-black text-slate-900 mb-2">{x.t}</div>
                    <p className="text-slate-600 text-sm leading-7">{x.d}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 4. مناطق التغطية */}
            <Section id="areas" title="المناطق التي نخدمها في الجيزة" subtitle="تغطية شاملة من الدقي حتى 6 أكتوبر">
              <p>
                فريق كور برو يغطي <strong>جميع أحياء ومناطق محافظة الجيزة</strong> بكافة خدماته.
                من العمائر القديمة في الدقي والمهندسين، إلى الفيلات الفاخرة في الشيخ زايد وكمبوندات 6 أكتوبر.
              </p>
              <div className="not-prose mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                {GIZA_AREAS.map(area => (
                  <div key={area} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      {area}
                    </div>
                  </div>
                ))}
              </div>
              <div className="not-prose mt-5 rounded-2xl bg-slate-900 text-white p-5 flex items-center gap-4">
                <div>
                  <div className="font-black text-emerald-400 text-lg">{PHONE}</div>
                  <div className="text-slate-400 text-xs mt-1">تواصل معنا لتأكيد الوصول لمنطقتك في الجيزة</div>
                </div>
              </div>
            </Section>

            {/* 5. FAQ */}
            <Section id="faq" title="الأسئلة الشائعة عن خدمات قص وتخريم الخرسانة بالجيزة">
              <div className="space-y-4 not-prose">
                {FAQ.map((item, i) => (
                  <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-emerald-300 transition">
                    <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                      <span>{item.q}</span>
                      <span className="text-emerald-600 group-open:rotate-180 transition p-1 bg-emerald-50 rounded-full shrink-0 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-emerald-500">{item.a}</p>
                  </details>
                ))}
              </div>
            </Section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-6 min-w-0">

            {/* CTA */}
            <div className="p-7 rounded-[40px] bg-emerald-600 text-white shadow-xl relative overflow-hidden sticky top-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="font-black text-2xl mb-3">اطلب معاينة مجانية</h3>
              <p className="text-emerald-100 text-sm mb-5 leading-7">
                فريقنا في الجيزة يصل إليك ويُقدم عرض سعر فوري — بدون أي التزام.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-2xl bg-white text-emerald-900 font-black text-lg hover:scale-[1.02] transition shadow-lg mb-3">
                واتساب مباشر
              </a>
              <a href={`tel:${PHONE}`}
                className="block w-full text-center py-4 rounded-2xl border-2 border-white/40 text-white font-black text-lg hover:bg-white/10 transition">
                {PHONE}
              </a>
            </div>

            {/* Trust Signals */}
            <div className="p-7 rounded-[40px] bg-white border border-black/10 shadow-lg">
              <h3 className="font-black text-xl text-slate-900 mb-5">لماذا نحن الخيار الأول بالجيزة؟</h3>
              <div className="space-y-4">
                <StatPill icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="أمان إنشائي مثبت" />
                <StatPill icon={<Layers className="h-4 w-4 text-sky-600" />} text="معدات حديثة متطورة" />
                <StatPill icon={<Target className="h-4 w-4 text-amber-600" />} text="أسعار تنافسية شفافة" />
                <StatPill icon={<Wrench className="h-4 w-4 text-slate-700" />} text="خدمة متكاملة من فريق واحد" />
                <StatPill icon={<MapPin className="h-4 w-4 text-rose-500" />} text="تغطية كاملة للجيزة" />
                <StatPill icon={<Clock className="h-4 w-4 text-violet-600" />} text="وصول خلال 24 ساعة" />
              </div>
            </div>

            {/* Related Pages */}
            <div className="p-6 rounded-[40px] bg-white border border-black/10 shadow-sm">
              <h3 className="font-black text-lg text-slate-900 mb-4">خدمات أخرى</h3>
              <div className="space-y-2">
                {[
                  { href: '/saw', label: 'قص الخرسانة بالمنشار', color: 'text-sky-600' },
                  { href: '/core', label: 'تخريم الخرسانة بالكور', color: 'text-emerald-600' },
                  { href: '/hoods', label: 'تركيب شفاطات المطابخ', color: 'text-amber-600' },
                  { href: '/wire', label: 'قص بالواير الماسي', color: 'text-violet-600' },
                  { href: '/concrete-cutting-alexandria', label: 'خدماتنا في الإسكندرية', color: 'text-sky-600' },
                ].map(s => (
                  <a key={s.href} href={s.href}
                    className={`flex items-center gap-2 text-sm font-bold text-slate-700 hover:${s.color} hover:underline py-1.5`}>
                    <span className={s.color}>›</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

          </aside>
        </div>

        {/* CTA Banner */}
        <section className="mt-10 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 font-bold mb-5 text-sm border border-emerald-500/30">
                <BadgeCheck className="w-4 h-4" />
                خدمة متخصصة بالجيزة
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
                جاهز لبدء مشروعك في الجيزة؟
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر فوري. فريقنا في الجيزة جاهز 7 أيام أسبوعياً.
              </p>
              <div className="mt-4 text-2xl font-black text-emerald-400">{PHONE}</div>
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
