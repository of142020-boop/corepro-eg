import React from 'react';
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import {
  Flame, CheckCircle2, Phone, ShieldCheck, Clock, BadgeCheck,
  Wrench, MapPin, HardHat, Layers, Target, Settings,
} from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/gas-holes`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const FAQ = [
  { q: 'كم قطر فتحة الغاز الطبيعي المطلوب من شركة الغاز؟', a: 'تشترط شركات الغاز الطبيعي في مصر (مثل بوتاجاسكو وإيجاس) أن يكون قطر فتحة العداد والمواسير بين 6 و8 سم. الفتحات التي نعملها بالكور تكون بالقطر الدقيق المطلوب وناعمة الحواف بالكامل.' },
  { q: 'هل فتحة الغاز بالكور آمنة؟', a: 'نعم، وهي الأكثر أماناً. التخريم بالكور لا يُحدث أي اهتزازات تُضعف الجدار أو تُشقق المناطق المحيطة بأنابيب الغاز. نحدد موضع أسلاك الكهرباء والحديد أولاً بالكاشف الإلكتروني لضمان سلامة الحفر.' },
  { q: 'هل يمكن عمل فتحة الغاز من الخارج للداخل؟', a: 'نعم. نستطيع عمل فتحة من الحائط الخارجي للمبنى حتى الداخل بزاوية ميل مناسبة لتصريف أي ماء، ثم نضع الأنبوب ونسد الفراغات بمواد عازلة للحريق.' },
  { q: 'ما الفرق بين تخريم الغاز بالكور والتكسير العادي؟', a: 'التكسير العادي يُحدث اهتزازات عنيفة قد تُضعف اللحامات القريبة أو الأنابيب المجاورة. التخريم بالكور هادئ تماماً، دقيق بالمليمتر، ونظيف بنسبة 100% بفضل التبريد المائي — وهو المعتمد من شركات الغاز.' },
  { q: 'كم تستغرق عملية تخريم فتحة الغاز؟', a: 'في الجدران العادية تستغرق من 15 إلى 30 دقيقة. في الجدران الخرسانية المسلحة الثقيلة قد تصل إلى ساعة. نصل إليك ونُنجز العمل ونغادر في نفس اليوم.' },
  { q: 'هل تعملون في جميع مناطق القاهرة الكبرى؟', a: 'نعم. نخدم القاهرة الكبرى والجيزة والقليوبية والإسكندرية والمدن الجديدة (التجمع، 6 أكتوبر، العبور، بدر، العاصمة الإدارية). تواصل معنا وسنحدد موعد المعاينة.' },
  { q: 'هل تعملون فتحات متعددة في نفس الزيارة؟', a: 'بالتأكيد. كثيراً ما نزور موقعاً لعمل فتحات الغاز لشقة كاملة (فتحة العداد + فتحة السخان + مسار الأنبوب) في زيارة واحدة بتكلفة موحدة.' },
  { q: 'ما تكلفة فتحة الغاز بالكور؟', a: 'تتراوح أسعار فتحات الغاز بالكور بحسب سُمك الجدار وقطر الفتحة. نقدم عرض سعر مجاني بعد المعاينة. تواصل معنا على 01021507462 للحصول على السعر الفوري.' },
];

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div>
    </section>
  );
}

export default function GasHolesPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      name: BRAND, url: DOMAIN, telephone: PHONE_INT,
      description: 'كور برو متخصص في عمل فتحات الغاز الطبيعي بالكور بدقة هندسية وبدون اهتزاز في مصر.',
      address: { '@type': 'PostalAddress', addressCountry: 'EG', addressLocality: 'Cairo', addressRegion: 'Cairo Governorate' },
      priceRange: '$$', openingHours: 'Mo-Su 00:00-23:59',
      areaServed: ['القاهرة', 'الجيزة', 'الإسكندرية', 'المدن الجديدة', 'مصر'],
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'عمل فتحات الغاز الطبيعي بالكور',
      serviceType: 'Natural Gas Hole Drilling',
      provider: { '@type': 'LocalBusiness', name: BRAND, telephone: PHONE_INT },
      areaServed: 'EG', url: CANONICAL,
      description: 'تخريم فتحات الغاز الطبيعي بالكور بالقطر المطابق لاشتراطات شركات الغاز في مصر.',
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQ.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: DOMAIN },
        { '@type': 'ListItem', position: 2, name: 'فتحات الغاز الطبيعي', item: CANONICAL },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(249,115,22,0.15),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(239,68,68,0.1),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm text-orange-800 shadow-sm mb-6">
            <Flame className="h-4 w-4 text-orange-600" />
            <span>متخصصون في فتحات الغاز الطبيعي · دقة هندسية · معتمد</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-orange-500 pr-4">
                عمل فتحات الغاز الطبيعي بالكور — {PHONE}
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> متخصص في <strong>عمل فتحات الغاز الطبيعي بالكور</strong> بالقطر الدقيق المطلوب من شركات الغاز في مصر.
                  نستخدم أسطوانات كور ألماسية تُنتج فتحة دائرية ناعمة الحواف بدون أي اهتزاز أو تشقق في الجدران المحيطة.
                </p>
                <p>
                  سواء كنت تحتاج <strong>فتحة كور للغاز الطبيعي</strong> في جدار خرساني أو طوبي أو بلوك، نصل إليك في يوم التواصل وننجز العمل في أقل من ساعة.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {['بدون اهتزاز', 'دقة بالمللي', 'نظيف 100%'].map(s => (
                  <div key={s} className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-3 py-3 text-sm text-slate-700 shadow-sm font-bold text-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />{s}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 font-black text-white shadow-[0_16px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition text-lg">
                  <Phone className="h-5 w-5" /> تواصل واتساب الآن
                </a>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 font-black text-slate-900 hover:bg-slate-50 transition text-lg">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="rounded-2xl bg-slate-900 text-white p-6">
                <h3 className="text-xl font-black mb-3">احصل على عرض سعر فوري</h3>
                <p className="text-slate-300 text-sm mb-4">أخبرنا بنوع الجدار وسُمكه وعدد الفتحات المطلوبة</p>
                <a href={`tel:${PHONE}`} className="block text-center py-4 rounded-2xl bg-orange-500 text-white font-black text-xl hover:bg-orange-600 transition mb-3">
                  {PHONE}
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="block text-center py-4 rounded-2xl bg-emerald-600 text-white font-black text-lg hover:bg-emerald-700 transition">
                  واتساب مباشر
                </a>
              </div>
              <div className="space-y-3">
                {[
                  { icon: ShieldCheck, c: 'text-emerald-600', t: 'مطابق لاشتراطات شركات الغاز' },
                  { icon: BadgeCheck, c: 'text-sky-600', t: 'فتحة نظيفة بدون غبار' },
                  { icon: Clock, c: 'text-amber-600', t: 'ننجز في نفس يوم التواصل' },
                  { icon: MapPin, c: 'text-rose-500', t: 'نخدم كل مصر' },
                ].map(x => (
                  <div key={x.t} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3">
                    <x.icon className={`h-4 w-4 ${x.c} shrink-0`} />
                    <span className="text-sm font-bold text-slate-700">{x.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="mx-auto max-w-6xl px-4 pb-24 space-y-10">

        <Section id="why-core" title="لماذا فتحة الغاز بالكور وليس بالإزميل أو الهيلتي؟">
          <p>
            <strong>فتحة الغاز الطبيعي</strong> تمر عبر جدران خارجية وداخلية حساسة. التكسير العادي بالهيلتي يُحدث اهتزازات تُضعف الجدار وتُخلّ بالأنابيب المجاورة،
            بينما <strong>التخريم بالكور</strong> يقطع الخرسانة قطعاً جراحياً بدون أي اهتزاز. الناتج هو فتحة مستديرة مثالية بالقطر المطلوب، جاهزة لإدخال الأنبوب مباشرة.
          </p>
          <p>
            كذلك، التبريد المائي الذي نستخدمه يمنع ارتفاع درجة الحرارة أثناء الحفر — وهذا ضروري جداً عند العمل بالقرب من أنابيب الغاز القديمة.
          </p>

          <div className="not-prose overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm mt-6">
            <table className="w-full text-right text-slate-800 min-w-[500px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-black text-slate-900">وجه المقارنة</th>
                  <th className="p-4 font-black text-emerald-700 border-r border-slate-200 bg-emerald-50/50">الكور (كور برو)</th>
                  <th className="p-4 font-black text-rose-700 border-r border-slate-200 bg-rose-50/50">الإزميل / الهيلتي</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { a: 'الدقة', b: 'دقة بالمليمتر', c: 'فتحة مشوهة وغير منتظمة' },
                  { a: 'الاهتزاز', b: 'صفر اهتزاز', c: 'اهتزازات تُضعف الجدار' },
                  { a: 'الغبار', b: 'تبريد مائي — لا غبار', c: 'غبار خرسانة في كل المكان' },
                  { a: 'السلامة', b: '✓ مثالي مع مواسير الغاز', c: '✗ خطر الاهتزار والشرارة' },
                  { a: 'سرعة التنفيذ', b: 'أسرع (15-30 دقيقة)', c: 'أبطأ وأصعب' },
                ].map(row => (
                  <tr key={row.a} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-bold">{row.a}</td>
                    <td className="p-4 border-r border-slate-200 text-emerald-700 text-sm">{row.b}</td>
                    <td className="p-4 border-r border-slate-200 text-rose-700/80 text-sm">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="services" title="خدمات فتحات الغاز الطبيعي التي نقدمها">
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              { t: 'فتحة عداد الغاز', d: 'فتحة الجدار لمرور أنبوب العداد من الخارج للداخل بالقطر المطلوب من إيجاس أو بوتاجاسكو.' },
              { t: 'فتحة سخان الغاز (الحمام)', d: 'تخريم الجدار لإدخال مواسير غاز السخانات الفورية والسخانات الكهربائية والمخرج الخارجي.' },
              { t: 'فتحة بوتوجاز المطبخ', d: 'مسار الأنابيب في الجدران من عداد الغاز حتى موقع البوتاجاز في المطبخ.' },
              { t: 'فتحات توزيع الغاز على الغرف', d: 'تخريم متعدد لتوزيع شبكة الغاز الداخلية في الشقق والفيلات والمشاريع التجارية.' },
              { t: 'فتحات خطوط الغاز الصناعي', d: 'فتحات كبيرة القطر للمصانع والمطاعم والفنادق التي تحتاج خطوط غاز ذات ضغط عالٍ.' },
              { t: 'إصلاح وتوسيع فتحات قديمة', d: 'توسيع أو إعادة عمل فتحات غاز قديمة تالفة أو بقطر غير مناسب لمتطلبات الخط الجديد.' },
            ].map(x => (
              <div key={x.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-slate-900">{x.t}</div>
                  <p className="mt-1 text-slate-600 text-sm leading-7">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="process" title="خطوات التنفيذ: من التواصل حتى التسليم">
          <div className="space-y-4 not-prose">
            {[
              { n: '1', t: 'التواصل والاستفسار', d: 'اتصل أو أرسل واتساب على 01021507462 وأخبرنا بنوع الجدار وسُمكه وموقعه.' },
              { n: '2', t: 'المعاينة والكشف الإلكتروني', d: 'يصل فريقنا ويستخدم الكاشف الإلكتروني لتحديد مكان الحديد والكهرباء قبل الحفر.' },
              { n: '3', t: 'التثبيت وبدء التخريم', d: 'نثبت آلة الكور على الجدار بالدعامة المناسبة ونبدأ الحفر بالتبريد المائي الكامل.' },
              { n: '4', t: 'التسليم والتنظيف', d: 'فتحة نظيفة ناعمة الحواف جاهزة لإدخال الأنبوب مباشرة، مع تنظيف كامل للموقع.' },
            ].map(step => (
              <div key={step.n} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black text-white text-sm">{step.n}</div>
                <div>
                  <div className="font-black text-slate-900 mb-1">{step.t}</div>
                  <p className="text-slate-600 text-sm leading-7">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pricing" title="تكلفة فتحات الغاز بالكور — الأسعار والعوامل المؤثرة">
          <p>تتحدد تكلفة فتحة الغاز بالكور بناءً على 3 عوامل رئيسية:</p>
          <div className="not-prose grid gap-4 md:grid-cols-3 mt-6">
            {[
              { t: 'سُمك الجدار', d: 'جدار 15 سم يختلف عن 30 سم. الخرسانة المسلحة أصعب من البلوك والطوب.' },
              { t: 'قطر الفتحة', d: 'فتحة 6 سم (للغاز العادي) تختلف عن 15 سم (خطوط صناعية ثقيلة).' },
              { t: 'عدد الفتحات', d: 'زيادة العدد تُقلل التكلفة للفتحة الواحدة. مناسب للمشاريع والتشطيبات الكاملة.' },
            ].map(x => (
              <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5">
                <div className="font-black text-slate-900 mb-2">{x.t}</div>
                <p className="text-slate-600 text-sm leading-7">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="not-prose mt-6 rounded-2xl bg-orange-50 border border-orange-200 p-5 flex gap-4">
            <BadgeCheck className="h-6 w-6 text-orange-600 shrink-0 mt-1" />
            <div>
              <div className="font-black text-slate-900">معاينة مجانية + عرض سعر فوري</div>
              <p className="text-slate-600 text-sm mt-1">تواصل معنا على <strong>{PHONE}</strong> وسنُقدم لك سعراً محدداً بدون أي مفاجآت.</p>
            </div>
          </div>
        </Section>

        <Section id="faq" title="الأسئلة الشائعة عن فتحات الغاز الطبيعي بالكور">
          <div className="space-y-4 not-prose">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-orange-300 transition">
                <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-orange-500 group-open:rotate-180 transition p-1 bg-orange-50 rounded-full shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </summary>
                <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-orange-400">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Internal links */}
        <section className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-10">
          <h2 className="text-2xl font-black text-slate-900 mb-6">خدمات أخرى قد تحتاجها</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { href: '/core', t: 'تخريم الخرسانة بالكور', d: 'جميع أنواع فتحات الكور للمواسير والتمديدات.' },
              { href: '/saw', t: 'قص الخرسانة بالمنشار', d: 'قص الجدران والأسقف لفتح أبواب أو شبابيك.' },
              { href: '/hoods', t: 'تركيب شفاطات المطابخ', d: 'فتحة الكور + تركيب الشفاط في زيارة واحدة.' },
              { href: '/prices', t: 'أسعار التخريم والقص', d: 'دليل الأسعار التفصيلي لجميع الخدمات.' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 hover:border-orange-300 transition">
                <div>
                  <div className="font-black text-slate-900 hover:text-orange-600 transition">{s.t}</div>
                  <p className="text-slate-500 text-sm mt-1">{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">جاهز لعمل فتحات الغاز؟</h2>
              <p className="text-slate-300 text-lg max-w-xl">تواصل معنا الآن للمعاينة المجانية. نصل إليك في نفس اليوم ونُنجز العمل.</p>
              <div className="mt-3 text-2xl font-black text-orange-400">{PHONE}</div>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto min-w-[220px]">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 transition text-white px-8 py-4 rounded-2xl font-black text-xl">
                <Phone className="w-5 h-5" /> واتساب مباشر
              </a>
              <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 transition px-8 py-4 rounded-2xl font-black text-xl">
                <Phone className="w-5 h-5" /> اتصل الآن
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
