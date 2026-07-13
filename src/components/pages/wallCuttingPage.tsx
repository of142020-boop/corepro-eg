import React from 'react';
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import { Hammer, CheckCircle2, Phone, ShieldCheck, Clock, BadgeCheck, MapPin, Ruler } from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/wall-cutting`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const FAQ = [
  { q: 'كم تكلفة فتح باب في جدار خرساني؟', a: 'تتحدد التكلفة بناءً على أبعاد الفتحة المطلوبة وسُمك الجدار وكثافة التسليح الحديدي. نقدم معاينة مجانية وعرض سعر فوري. تواصل معنا على 01021507462.' },
  { q: 'هل يمكن قص جدار مسلح بحديد كثيف؟', a: 'نعم. منشار السكة الذي نستخدمه مُزوَّد بأقراص ألماسية قادرة على قطع الخرسانة والحديد معاً بدون أي مشكلة. نكشف مسار الحديد أولاً بالكاشف الإلكتروني لتحديد الطريقة المثلى.' },
  { q: 'هل قص الجدار يؤثر على المباني القديمة؟', a: 'لا. تقنية قص الخرسانة بالمنشار الماسي لا تُحدث أي اهتزازات — على عكس التكسير التقليدي. هذا يجعلها آمنة تماماً حتى في المباني القديمة ذات الخرسانة الهشة.' },
  { q: 'هل يمكن فتح باب في حائط حامل (load-bearing wall)؟', a: 'يمكن إجراء الفتحة لكن يجب أن يقرر المهندس الإنشائي أولاً ويحدد الدعامة اللازمة (الكمر). دورنا هو القص الدقيق بعد الموافقة الهندسية.' },
  { q: 'ما الحد الأقصى لعرض الفتحة التي يمكن قصها؟', a: 'لا يوجد حد أقصى تقريباً. منشار السكة يعمل بمسار محدد الطول. عادةً نُنجز فتحات أبواب (90 سم) ونوافذ (120 سم) وحتى مداخل سيارات (3 متر وأكثر).' },
  { q: 'كم تستغرق عملية قص جدار لفتح باب؟', a: 'فتح باب قياسي (90×210 سم) في جدار خرساني بسُمك 20 سم يستغرق من ساعة إلى ساعتين. الجدران الأسمك أو الأكثر تسليحاً تأخذ وقتاً أطول.' },
  { q: 'هل العملية نظيفة وبدون غبار؟', a: 'نعم. نستخدم التبريد المائي الذي يحوّل الغبار لطمي سائل يُسحب مباشرة. نُغطي الأرضيات والمفروشات قبل البدء ونُنظف الموقع بالكامل عند الانتهاء.' },
  { q: 'هل تعملون في الدور العلوي والطوابق المرتفعة؟', a: 'نعم. نصل لجميع الطوابق ونجهز المعدات المناسبة لكل ارتفاع. بالنسبة للأعمال الخارجية في الطوابق العالية، نستخدم السقالات أو الحبال حسب طبيعة الموقع.' },
];

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div>
    </section>
  );
}

export default function WallCuttingPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      name: BRAND, url: DOMAIN, telephone: PHONE_INT,
      description: 'كور برو متخصص في قص جدران الخرسانة وفتح الأبواب والنوافذ بالمنشار الماسي بدقة هندسية في مصر.',
      address: { '@type': 'PostalAddress', addressCountry: 'EG', addressLocality: 'Cairo' },
      priceRange: '$$', openingHours: 'Mo-Su 00:00-23:59',
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'قص جدران الخرسانة وفتح الأبواب والنوافذ',
      serviceType: 'Concrete Wall Cutting',
      provider: { '@type': 'LocalBusiness', name: BRAND, telephone: PHONE_INT },
      areaServed: 'EG', url: CANONICAL,
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQ.map(x => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: DOMAIN },
        { '@type': 'ListItem', position: 2, name: 'قص الجدران وفتح الأبواب', item: CANONICAL },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(100,116,139,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 shadow-sm mb-6">
            <Hammer className="h-4 w-4 text-slate-600" />
            <span>فتح أبواب · نوافذ · مداخل · قص جدران بالمنشار الماسي</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-slate-700 pr-4">
                عمل فتحات في الجدار وقص الخرسانة — {PHONE}
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> متخصص في <strong>قص جدران الخرسانة</strong> وفتح الأبواب والنوافذ والمداخل
                  باستخدام <strong>منشار السكة الماسي (Track Saw)</strong> الذي يسير على مسار معدني مثبت بالجدار لضمان خط قطع مستقيم بدقة ليزر.
                </p>
                <p>
                  سواء كنت تريد <strong>فتح باب جديد في جدار خرساني</strong> أو توسيع نافذة أو عمل مدخل للسيارة، نصل إليك ونُنجز العمل
                  بدون اهتزاز واحد وبدون غبار في المكان.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {['قص مستقيم', 'بدون اهتزاز', 'حواف ناعمة'].map(s => (
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

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="rounded-2xl bg-slate-900 text-white p-6">
                <h3 className="text-xl font-black mb-3">معاينة مجانية + سعر فوري</h3>
                <p className="text-slate-300 text-sm mb-4">أخبرنا بأبعاد الفتحة ونوع الجدار وسنُقدم لك السعر في نفس الوقت</p>
                <a href={`tel:${PHONE}`} className="block text-center py-4 rounded-2xl bg-slate-700 text-white font-black text-xl hover:bg-slate-600 transition mb-3">{PHONE}</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-center py-4 rounded-2xl bg-emerald-600 text-white font-black text-lg hover:bg-emerald-700 transition">واتساب مباشر</a>
              </div>
              <div className="space-y-3">
                {[
                  { icon: ShieldCheck, c: 'text-emerald-600', t: 'آمن على الهيكل الإنشائي' },
                  { icon: Ruler, c: 'text-sky-600', t: 'دقة هندسية بالمليمتر' },
                  { icon: Clock, c: 'text-amber-600', t: 'ننجز في نفس اليوم' },
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

        <Section id="services" title="أنواع الفتحات التي نعملها في الجدران">
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              { t: 'فتح باب في جدار خرساني', d: 'فتحة الباب بأي أبعاد تريدها في الجدران الخرسانية المسلحة بمنشار ماسي وبدون اهتزاز. الحواف جاهزة للتشطيب مباشرة.' },
              { t: 'توسيع باب أو نافذة موجودة', d: 'توسيع الفتحة الحالية لأعلى أو للجانب. مثالي لمن يريد توسيع مدخل شقته أو توسيع نافذة المطبخ.' },
              { t: 'فتح مدخل للسيارة (جراج)', d: 'قص جدار الجراج وعمل مدخل واسع للسيارات بالمنشار الماسي مع تركيب الكمر الإنشائي عند الحاجة.' },
              { t: 'فتح ممر بين شقتين', d: 'دمج شقتين متجاورتين بعمل فتحة في الجدار الفاصل بينهما بعرض مناسب للممر.' },
              { t: 'فتحات الواجهة (الخارجية)', d: 'قص الواجهات الخارجية لعمل مداخل أو شبابيك جديدة في مباني قائمة.' },
              { t: 'فتحات للتكييفات المركزية', d: 'فتحات مستطيلة في الجدران لمرور دكتات التكييف المركزي والتهوية الميكانيكية.' },
            ].map(x => (
              <div key={x.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-slate-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-slate-900">{x.t}</div>
                  <p className="mt-1 text-slate-600 text-sm leading-7">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="comparison" title="المنشار الماسي مقابل التكسير التقليدي — الفرق الحقيقي">
          <div className="not-prose overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-right text-slate-800 min-w-[500px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-black text-slate-900">وجه المقارنة</th>
                  <th className="p-4 font-black text-emerald-700 border-r border-slate-200 bg-emerald-50/50">المنشار الماسي (كور برو)</th>
                  <th className="p-4 font-black text-rose-700 border-r border-slate-200 bg-rose-50/50">التكسير التقليدي</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { a: 'استقامة الخط', b: 'مستقيم 100% على مسار معدني', c: 'يد العامل ← خط مشوه' },
                  { a: 'جودة الحواف', b: 'ناعمة جاهزة للتشطيب', c: 'خشنة تحتاج محارة كثيرة' },
                  { a: 'الاهتزاز', b: 'صفر — لا تأثير على المبنى', c: 'اهتزاز يُشقق الجدران المجاورة' },
                  { a: 'الغبار', b: 'تبريد مائي — لا غبار', c: 'غبار خرسانة يملأ الشقة' },
                  { a: 'سلامة الحديد', b: 'يُقطع بدقة دون تشويه', c: 'ينكسر ويتشوه ويُضعف الجدار' },
                  { a: 'سرعة التنفيذ', b: 'أسرع بكثير', c: 'أبطأ وأكثر إرهاقاً' },
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

        <Section id="materials" title="أنواع الجدران التي نعمل عليها">
          <div className="not-prose grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'الخرسانة المسلحة', d: 'الجدران والأسقف الخرسانية ذات التسليح الحديدي بأي سُمك.' },
              { t: 'الطوب الأحمر', d: 'الحوائط الطوبية بسُمك طوبة واحدة أو طوبتين.' },
              { t: 'البلوك الخرساني', d: 'جدران البلوك بكل أحجامه (10، 15، 20 سم).' },
              { t: 'الجبس (GRC/Gypsum)', d: 'الجدران الجبسية والتقسيمات الداخلية.' },
              { t: 'الطوب الأسمنتي', d: 'الحوائط الخارجية والداخلية من الطوب الأسمنتي.' },
              { t: 'الخرسانة القديمة', d: 'مباني قديمة تحتاج تعاملاً حذراً وخبرة خاصة.' },
            ].map(x => (
              <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="font-black text-slate-900 mb-1">{x.t}</div>
                <p className="text-slate-600 text-sm">{x.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" title="الأسئلة الشائعة عن قص الجدران وعمل الفتحات">
          <div className="space-y-4 not-prose">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-slate-400 transition">
                <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-slate-500 group-open:rotate-180 transition p-1 bg-slate-50 rounded-full shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </summary>
                <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-slate-400">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Internal links */}
        <section className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-10">
          <h2 className="text-2xl font-black text-slate-900 mb-6">خدمات مرتبطة</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { href: '/saw', t: 'قص الخرسانة بالمنشار', d: 'تفاصيل كاملة عن خدمة القص بالمنشار الماسي.' },
              { href: '/core', t: 'تخريم الخرسانة بالكور', d: 'فتحات دائرية للمواسير والتمديدات.' },
              { href: '/ceiling-holes', t: 'فتحات الأسقف والتهوية', d: 'فتحات الأسقف للتكييف والتهوية.' },
              { href: '/gas-holes', t: 'فتحات الغاز الطبيعي', d: 'فتحات مخصصة لمواسير الغاز.' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 hover:border-slate-400 transition">
                <div>
                  <div className="font-black text-slate-900">{s.t}</div>
                  <p className="text-slate-500 text-sm mt-1">{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(100,116,139,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">جاهز لفتح الجدار؟</h2>
              <p className="text-slate-300 text-lg max-w-xl">تواصل معنا الآن للمعاينة المجانية وعرض السعر الفوري.</p>
              <div className="mt-3 text-2xl font-black text-slate-300">{PHONE}</div>
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
