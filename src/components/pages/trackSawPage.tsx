import React from 'react';
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import { Ruler, CheckCircle2, Phone, ShieldCheck, Clock, BadgeCheck, MapPin, Hammer } from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/track-saw`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const FAQ = [
  { q: 'ما هو منشار قص الخرسانة (Track Saw)؟', a: 'هو ماكينة متطورة تتكون من مسار معدني (سكة) يُثبت على الجدار الخرساني، وتتحرك عليه رأس قطع بمحرك هيدروليكي أو كهربائي يدور قرصاً ماسياً لقص الخرسانة والحديد معاً بخط مستقيم ودقيق تماماً.' },
  { q: 'ما هو أقصى سُمك يمكن قطعه بمنشار قص الخرسانة؟', a: 'تصل قدرة منشار السكة الماسي إلى قطع جدران خرسانية مسلحة تصل سماكتها إلى 100 سم (متر كامل) تقريباً عند القطع من الجانبين، و50 سم من جانب واحد.' },
  { q: 'هل يُصدر منشار الخرسانة اهتزازات تؤثر على المبنى؟', a: 'مطلقاً. القطع الماسي هو قطع ميكانيكي سلس بدون أي اهتزازات (Vibration-free)، مما يحافظ على السلامة الإنشائية للمبنى ويمنع ظهور شروخ في الجدران المحيطة بعكس التكسير بالدقاقات.' },
  { q: 'هل يمكن القطع بمنشار الخرسانة في أماكن مغلقة؟', a: 'نعم. نستخدم مناشير كهربائية بالكامل (لا تُصدر عوادم) مزودة بنظام تبريد مائي (Water cooling) يمنع تصاعد الغبار تماماً، مما يجعلها مثالية للعمل داخل الشقق والمستشفيات والمولات التجارية.' },
  { q: 'ما هي الاستخدامات الشائعة لمنشار السكة الماسي؟', a: 'يُستخدم أساساً لفتح أبواب وشبابيك جديدة في الجدران الخرسانية، عمل مداخل جراجات، إزالة سلالم خرسانية، قص فواصل التمدد، وإزالة حوائط قص (Shear Walls) بالكامل بغرض التعديلات المعمارية.' },
  { q: 'كيف يتم حساب سعر قص الخرسانة بالمنشار؟', a: 'يتم الحساب غالباً بالمتر الطولي مع الأخذ في الاعتبار سُمك الخرسانة وكثافة التسليح الحديدي. نحن في كور برو نقدم أفضل أسعار المتر في مصر، تواصل معنا لعمل مقايسة.' },
];

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div>
    </section>
  );
}

export default function TrackSawPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      name: BRAND, url: DOMAIN, telephone: PHONE_INT,
      description: 'خدمات قص الخرسانة بمنشار السكة الماسي (Track Saw) لعمل الفتحات والأبواب الدقيقة.',
      address: { '@type': 'PostalAddress', addressCountry: 'EG', addressLocality: 'Cairo' },
      priceRange: '$$', openingHours: 'Mo-Su 00:00-23:59',
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'منشار قص الخرسانة الماسي',
      serviceType: 'Track Sawing',
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
        { '@type': 'ListItem', position: 2, name: 'منشار قص الخرسانة', item: CANONICAL },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(225,29,72,0.1),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-800 shadow-sm mb-6 font-bold">
            <Hammer className="h-4 w-4 text-rose-600" />
            <span>تقنية منشار السكة الماسي (Track Saw) · قطع مستقيم 100%</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-rose-600 pr-4">
                منشار قص الخرسانة الماسي — {PHONE}
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  نعتمد في <strong>كور برو - Core Pro</strong> على أحدث تكنولوجيا تقطيع الخرسانة عالمياً: <strong>منشار السكة الماسي (Track Sawing)</strong>.
                  هذه التقنية توفر قطعاً مستقيماً كالمسطرة في الجدران والأسقف الخرسانية المسلحة، مع دقة ليزرية في التنفيذ.
                </p>
                <p>
                  وداعاً لأساليب التكسير البدائية! <strong>منشار قص الخرسانة</strong> المائي يضمن لك الحصول على فتحة باب أو نافذة جاهزة للتشطيب فوراً، <strong>بدون غبار، بدون ضوضاء مزعجة، وبدون أي اهتزازات</strong> تضر بالسلامة الإنشائية لمبناك.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {['بدون اهتزاز', 'بدون غبار', 'دقة بالمللي'].map(s => (
                  <div key={s} className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-3 py-3 text-sm text-slate-700 shadow-sm font-bold text-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />{s}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 font-black text-white shadow-[0_16px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition text-lg">
                  <Phone className="h-5 w-5" /> تواصل لطلب معاينة
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="rounded-2xl bg-slate-900 text-white p-6">
                <h3 className="text-xl font-black mb-3">هل لديك جدار تريد إزالته؟</h3>
                <p className="text-slate-300 text-sm mb-4">نستخدم منشار الخرسانة لقص الجدران مهما كان سُمكها بسرعة ونظافة تامة.</p>
                <a href={`tel:${PHONE}`} className="block text-center py-4 rounded-2xl bg-rose-600 text-white font-black text-xl hover:bg-rose-700 transition mb-3">{PHONE}</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-center py-4 rounded-2xl bg-emerald-600 text-white font-black text-lg hover:bg-emerald-700 transition">واتساب مباشر</a>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Ruler, c: 'text-sky-600', t: 'أقراص ألماسية تقطع الخرسانة والحديد' },
                  { icon: Clock, c: 'text-amber-600', t: 'سرعة إنجاز استثنائية' },
                  { icon: ShieldCheck, c: 'text-emerald-600', t: 'آمن تماماً على المباني القديمة' },
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

      <div className="mx-auto max-w-6xl px-4 pb-24 space-y-10">

        <Section id="features" title="كيف يعمل منشار قص الخرسانة (Track Saw)؟">
          <p>
            تعتمد آلية عمل منشار السكة على تثبيت مسار معدني (Track) بقوة على الجدار باستخدام براغي خرسانية. ثم يتم تركيب رأس القطع على هذا المسار.
            تتحرك الماكينة آلياً على السكة بينما يدور <strong>القرص الألماسي (Diamond Blade)</strong> بسرعات عالية لقطع الخرسانة بشكل تدريجي (Pass by Pass) حتى الوصول للعمق المطلوب.
          </p>
          <div className="not-prose grid gap-4 md:grid-cols-2 mt-6">
            {[
              { t: '1. دقة استقامة هندسية', d: 'نظراً لأن الماكينة تسير على سكة مثبتة، فإن خط القطع يكون مستقيماً بنسبة 100% وبدون أي تعرجات (كما في القطع اليدوي).' },
              { t: '2. نظام التبريد المائي', d: 'أثناء دوران القرص، يتم ضخ الماء باستمرار لتبريد الألماس ومنع تصاعد الغبار، مما يترك الموقع نظيفاً.' },
              { t: '3. قطع متدفق للحديد', d: 'الألماس الصناعي المُلحم على القرص قادر على قص أسياخ الحديد داخل الخرسانة بسهولة تامة كما يقص الخرسانة نفسها.' },
              { t: '4. قطع الغواطس (Plunge Cut)', d: 'يمكن للقرص الغوص في الخرسانة لعمل الفتحات المغلقة (مثل النوافذ) دون الحاجة للقطع من الأطراف الحرة.' },
            ].map(x => (
              <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-5">
                <div className="font-black text-slate-900 mb-2">{x.t}</div>
                <p className="text-slate-600 text-sm leading-7">{x.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" title="أسئلة وأجوبة عن مناشير قص الخرسانة">
          <div className="space-y-4 not-prose">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-rose-300 transition">
                <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-rose-500 group-open:rotate-180 transition p-1 bg-rose-50 rounded-full shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </summary>
                <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-rose-500">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-10">
          <h2 className="text-2xl font-black text-slate-900 mb-6">خدمات مرتبطة</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { href: '/wall-cutting', t: 'قص وفتح الجدران', d: 'استخدام المنشار لعمل فتحات أبواب وشبابيك.' },
              { href: '/saw', t: 'قص الخرسانة', d: 'خدمة قص الخرسانة الشاملة.' },
              { href: '/core', t: 'تخريم الخرسانة بالكور', d: 'للفتحات الدائرية بدلاً من المربعة.' },
              { href: '/wire', t: 'واير تقطيع خرسانة', d: 'للكتل الخرسانية شديدة السماكة والكباري.' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 hover:border-rose-300 transition">
                <div>
                  <div className="font-black text-slate-900">{s.t}</div>
                  <p className="text-slate-500 text-sm mt-1">{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">تحتاج لقص خرسانة باحترافية؟</h2>
              <p className="text-slate-300 text-lg max-w-xl">استعن الآن بأقوى منشار قص خرسانة في مصر.</p>
              <div className="mt-3 text-2xl font-black text-rose-400">{PHONE}</div>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto min-w-[220px]">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 transition text-white px-8 py-4 rounded-2xl font-black text-xl">
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
