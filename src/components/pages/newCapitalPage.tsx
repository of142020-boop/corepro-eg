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
const CANONICAL = `${DOMAIN}/concrete-cutting-new-capital`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const CAPITAL_AREAS = [
  'الحي الحكومي وحي الوزارات',
  'منطقة الأعمال المركزية (CBD)',
  'حي المال والأعمال',
  'المدينة الرياضية والمدينة الأولمبية',
  'الأحياء السكنية (R7, R8)',
  'منطقة المستثمرين',
  'محور بن زايد (الشمالي والجنوبي)',
  'مدينة المعرفة والجامعات',
];

const FAQ = [
  {
    q: 'هل تستطيعون تنفيذ طلبيات ضخمة (مئات الفتحات) في وقت قياسي في العاصمة؟',
    a: 'نعم، نحن ندرك أهمية عامل الوقت لشركات المقاولات. نمتلك أسطولاً من معدات الكور دريل الاحترافية وفريقاً جاهزاً للعمل بنظام الورديات لضمان تسليم المهام الضخمة في موعدها دون تأخير.',
  },
  {
    q: 'هل تقدمون أسعاراً خاصة لمقاولي العاصمة الإدارية والمشاريع الكبرى؟',
    a: 'بالتأكيد. نقدم نظام تسعير للمقاولين (B2B) يعتمد على أسعار تنافسية جداً عند التعاقد على عدد كبير من الفتحات أو أمتار طولية كبيرة لقص الخرسانة. نقدم مقايسة فنية ومالية بعد معاينة رسومات المشروع.',
  },
  {
    q: 'ما هي قدراتكم في قص الخرسانة السميكة جداً في البنية التحتية؟',
    a: 'لدينا أحدث مناشير السكة (Track Saws) التي تقص حتى عمق 100 سم، وللكتل الخرسانية الأضخم والكباري والأنفاق، نستخدم تقنية قص الواير الماسي (Wire Sawing) التي تقطع سماكات غير محدودة بأمان وسرعة.',
  },
  {
    q: 'هل يمكنكم عمل فتحات كور بمقاسات وأقطار كبيرة للمداخن المركزية والصرف؟',
    a: 'نعم، ماكينات الكور لدينا تستوعب بنط ماسية بأقطار تصل حتى 24 بوصة وأكثر للمداخن المركزية، وأنظمة إطفاء الحرائق، ومواسير الصرف الرئيسية في الأبراج والمولات.',
  },
  {
    q: 'هل تتعاملون مع تسليح الخرسانة الكثيف الخاص بالأبراج والمباني العالية؟',
    a: 'نعم، معداتنا الأوروبية تعتمد على أسطوانات ألماظ ذات جودة فائقة مصممة لاختراق الكتل الخرسانية الثقيلة المسلحة بكثافة والتي تتواجد في قواعد ومحاور الأبراج ومباني العاصمة الإدارية.',
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

export default function NewCapitalPage() {

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: BRAND,
      url: DOMAIN,
      telephone: PHONE_INT,
      image: `${DOMAIN}/og-image.webp`,
      logo: `${DOMAIN}/logo-header-116x154.webp`,
      description: 'شركة كور برو للمقاولات التخصصية، نقدم خدمات تخريم الكور وقص الخرسانة لمشاريع العاصمة الإدارية الجديدة، الأبراج، المولات والمباني الحكومية.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EG',
        addressLocality: 'New Administrative Capital',
        addressRegion: 'Cairo Governorate',
      },
      areaServed: ['العاصمة الإدارية الجديدة', 'New Administrative Capital', ...CAPITAL_AREAS],
      priceRange: '$$$',
      openingHours: 'Mo-Su 00:00-23:59',
      sameAs: [DOMAIN, WHATSAPP],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'مقاولات قص وتخريم الخرسانة بالعاصمة الإدارية',
      serviceType: 'Concrete Cutting and Core Drilling New Capital',
      provider: { '@type': 'LocalBusiness', name: BRAND, telephone: PHONE_INT, url: DOMAIN },
      areaServed: ['New Administrative Capital', 'العاصمة الإدارية الجديدة'],
      url: CANONICAL,
      description: 'تنفيذ فتحات الكور دريل وقص الخرسانة بالمنشار والواير الماسي لمشاريع البنية التحتية، الـ MEP، والمولات في العاصمة الإدارية الجديدة بمعدات احترافية.',
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
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(59,130,246,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm mb-6">
            <Building2 className="h-4 w-4 text-emerald-600" />
            <span>شركة مقاولات تخصصية B2B للمشاريع الكبرى · العاصمة الإدارية</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-emerald-600 pr-4">
                شركة قص وتخريم الخرسانة بالعاصمة الإدارية — {PHONE}
              </h1>

              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> هي خيارك الأول كـ <strong>مقاول تخريم وقص خرسانة</strong> في مشاريع العاصمة الإدارية الجديدة.
                  نحن متخصصون في دعم أعمال التأسيس الإلكتروميكانيكي (MEP)، السباكة، التكييف المركزي، وأنظمة إطفاء الحرائق في الأبراج والمولات والمباني الحكومية.
                </p>
                <p>
                  نمتاز بالقدرة على تنفيذ أوامر الشغل الضخمة (مئات فتحات الكور، ومئات الأمتار الطولية لقص المنشار)
                  في مدد زمنية قياسية لتسريع تسليم مشاريع المقاولات باستخدام أحدث تقنيات القطع الماسي.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {['سرعة إنجاز قياسية', 'معدات ألمانية', 'تنفيذ دقيق للمخططات'].map(s => (
                  <div key={s} className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-3 py-3 text-sm text-slate-700 shadow-sm font-bold text-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 font-black text-white shadow-[0_16px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition hover:-translate-y-0.5 transform text-lg">
                  <Phone className="h-5 w-5" /> اطلب مقايسة لمشروعك الآن
                </a>
              </div>
            </div>

            {/* Info Card */}
            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-black text-slate-900 text-lg">تغطية مشاريع العاصمة الإدارية</div>
                  <div className="text-sm text-slate-500">نعمل مع شركات المقاولات في كافة الأحياء</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {CAPITAL_AREAS.map(area => (
                  <div key={area} className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100 px-3 py-2 text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-slate-900 text-white p-5 text-center mt-4">
                <div className="text-sm text-emerald-400 font-bold mb-1">الرقم المخصص للمقاولين والشركات</div>
                <div className="text-3xl font-black text-white tracking-widest">{PHONE}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-10 lg:grid-cols-3">

          <div className="lg:col-span-2 space-y-10 min-w-0">

            <Section id="core-mep" title="شركة تخريم كور لأعمال الـ MEP بالعاصمة الإدارية">
              <p>
                لا غنى عن <strong>تخريم الخرسانة بالكور الماسي</strong> في مشاريع العاصمة الإدارية لتأسيس شبكات الكهروميكانيك (MEP). 
                العمل العشوائي وتكسير الخرسانة في المشاريع الضخمة غير مقبول هندسياً. نحن نوفر دقة متناهية وأقطار مطابقة 100% لمواصفات المشروع.
              </p>
              <div className="not-prose mt-6 space-y-4">
                <h3 className="text-xl font-black text-slate-900">حلولنا لقطاع المقاولات:</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { t: 'أنظمة التكييف (HVAC)', d: 'تخريم لشبكات التشيلر، الدكت، ومواسير غاز الفريون للأبراج الإدارية والمولات.' },
                    { t: 'أنظمة إطفاء الحريق (Firefighting)', d: 'فتحات الكور لمرور خطوط الإطفاء الرئيسية والفرعية عبر الأسقف والحوائط.' },
                    { t: 'تأسيس السباكة والصرف', d: 'فتحات 4 و6 و8 بوصة لخطوط التغذية والصرف الرئيسية للمباني.' },
                    { t: 'التيار الخفيف والكهرباء', d: 'فتحات لمرور الكابلات الرئيسية، وكابلات الإنترنت وكاميرات المراقبة للـ Smart Cities.' },
                  ].map(x => (
                    <div key={x.t} className={`rounded-2xl border border-black/10 bg-white p-5`}>
                      <div className="font-black text-slate-900 mb-2">{x.t}</div>
                      <p className="text-slate-600 text-sm leading-7">{x.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section id="wall-saw" title="مقاول قص خرسانة بالمنشار للمشاريع">
              <p>
                نستخدم مناشير السكة (Track Saws) ومناشير الأرضيات لعمل التعديلات المعمارية التي تُطلب فجأة أثناء سير المشاريع أو لفتح مجاري المصاعد والسلالم في العاصمة الإدارية.
              </p>
              <ul className="list-disc pr-6 mt-4 text-slate-700 leading-8 marker:text-emerald-500">
                <li>قص وإزالة قواعد الآلات الضخمة والمصاعد.</li>
                <li>توسيع مداخل الباركينج والجراجات الأرضية في المولات.</li>
                <li>قص وإزالة أسقف كاملة لدمج الطوابق بدون إحداث تشروخات في الهيكل المتبقي.</li>
                <li>عمل فواصل تمدد (Expansion Joints) لمشاريع الطرق وأرضيات المصانع والمخازن.</li>
              </ul>
            </Section>

            <Section id="wire-saw" title="تقنية الواير الماسي للبنية التحتية بالعاصمة">
              <p>
                بالنسبة للبنية التحتية، الأنفاق، قواعد الكباري العلوية، والكتل الخرسانية التي تتجاوز سماكتها متراً واحداً، نستخدم <strong>منشار الواير الماسي (Diamond Wire Saw)</strong>. 
                هذه التقنية هي الأقوى عالمياً في الهدم الجزئي للخرسانة المسلحة، حيث تقطع الكتل الخرسانية أياً كان حجمها بسرعة هائلة وبصمت تام دون أن تسبب أدنى إزعاج أو خطورة على الموقع المحيط.
              </p>
              <div className="not-prose mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/wire/wire-takteaa-kharsana.webp"
                  alt="منشار الواير الماسي لقص كباري وبنية تحتية العاصمة الادارية"
                  width={900}
                  height={500}
                  className="w-full object-cover max-h-72"
                />
              </div>
            </Section>
            
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sticky top-24">
              <div className="font-black text-slate-900 text-xl mb-4 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-emerald-600" /> لماذا نحن الخيار الأول للمقاولين؟
              </div>
              <ul className="space-y-4">
                {[
                  'قدرة تنفيذية ضخمة تلبي جداول المشاريع.',
                  'معدات أوروبية (Hilti وغيرها) لا تتعطل في الموقع.',
                  'التزام تام باشتراطات الأمن والسلامة (HSE).',
                  'فواتير وعقود ومقايسات هندسية رسمية وملزمة.',
                  'خبرة واسعة في تسليح وخرسانات العاصمة القوية.'
                ].map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700 font-bold leading-6">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href={`tel:${PHONE}`} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 font-black text-white hover:bg-emerald-700 transition">
                  <Phone className="h-4 w-4" /> اتصال بمسؤول المشاريع
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* FAQ Section at bottom */}
      <div className="mx-auto max-w-4xl px-4 pb-20">
         <Section id="faq" title="أسئلة شائعة من المكاتب الهندسية وشركات المقاولات">
           <div className="space-y-3 mt-6">
             {FAQ.map(item => (
               <details key={item.q} className="group rounded-2xl border border-black/10 bg-white p-4">
                 <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                   <span className="text-lg">{item.q}</span>
                   <span className="text-slate-500 group-open:rotate-180 transition">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                   </span>
                 </summary>
                 <p className="mt-3 text-slate-600 leading-7 font-medium">{item.a}</p>
               </details>
             ))}
           </div>
         </Section>
      </div>

    </div>
  );
}
