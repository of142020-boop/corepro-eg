import React from 'react';
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import { Wind, CheckCircle2, Phone, ShieldCheck, Clock, BadgeCheck, MapPin, Fan } from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/ceiling-holes`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const FAQ = [
  { q: 'ما قطر فتحة السقف للتهوية والتكييف؟', a: 'يتراوح قطر فتحات التهوية بين 10 و30 سم حسب نوع التهوية. فتحات التكييف المركزي تكون مستطيلة وأكبر. نُنفذ أي قطر تحتاجه بدقة ليزر.' },
  { q: 'هل يمكن عمل فتحة في سقف دوبلكس لعمل سلم داخلي؟', a: 'نعم. نقطع السقف الخرساني بالمنشار الماسي بالأبعاد المطلوبة للسلم مع تأمين البلوك قبل فصله لمنع السقوط المفاجئ. يجب أن يوافق المهندس الإنشائي أولاً.' },
  { q: 'هل الفتحة في السقف تُضعف البلاطة الخرسانية؟', a: 'إذا نُفِّذت بشكل صحيح مع مراعاة مسار التسليح واتجاه التحميل، لا تُضعف البلاطة. نُحدد مسار الحديد بالكاشف الإلكتروني قبل الحفر لضمان ذلك.' },
  { q: 'هل تعملون فتحات سقف للشفاطات؟', a: 'نعم. فتحة مدخنة الشفاط في السقف أو الجدار الخارجي هي ضمن خدماتنا الأساسية. نُنجز الفتحة ونُركب الدكت أو الفلتر في نفس الزيارة.' },
  { q: 'هل العملية خطيرة في الطوابق العليا؟', a: 'لا. فريقنا مدرب على العمل في جميع الأوضاع. نستخدم الدعامات المناسبة ونثبت الماكينة بشكل آمن. نُغطي أيضاً الأرضيات لمنع تساقط قطع الخرسانة.' },
  { q: 'كم تستغرق عملية فتح ثقب في السقف؟', a: 'فتحة دائرية قطرها 15 سم في سقف خرساني سُمكه 20 سم تستغرق من 20 إلى 40 دقيقة. الفتحات المستطيلة الكبيرة (للسلالم مثلاً) تأخذ وقتاً أطول.' },
  { q: 'هل تعملون فتحات السقف لوحدات التكييف الكاسيت؟', a: 'نعم. وحدات الكاسيت المركزية تحتاج فتحات دقيقة في السقف لتمرير المبخر وخطوط التصريف والتغذية الكهربائية. نُنجزها بالأبعاد الدقيقة التي يحددها المهندس الميكانيكي.' },
  { q: 'هل يمكن عمل فتحة في سقف الحمام للشفاط؟', a: 'بالتأكيد. فتحة شفاط الحمام تكون عادةً بقطر 10 إلى 15 سم. نتأكد من توافقها مع دكت الشفاط وموقع الوحدة قبل الحفر.' },
];

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div>
    </section>
  );
}

export default function CeilingHolesPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      name: BRAND, url: DOMAIN, telephone: PHONE_INT,
      description: 'كور برو متخصص في عمل فتحات الأسقف بالكور للتهوية والتكييف والشفاطات والسلالم الداخلية.',
      address: { '@type': 'PostalAddress', addressCountry: 'EG', addressLocality: 'Cairo' },
      priceRange: '$$', openingHours: 'Mo-Su 00:00-23:59',
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'عمل فتحات الأسقف بالكور للتهوية والتكييف',
      serviceType: 'Ceiling Core Drilling',
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
        { '@type': 'ListItem', position: 2, name: 'فتحات الأسقف بالكور', item: CANONICAL },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(14,165,233,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm text-sky-800 shadow-sm mb-6">
            <Wind className="h-4 w-4 text-sky-600" />
            <span>فتحات أسقف للتهوية · التكييف · الشفاطات · السلالم الداخلية</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-sky-500 pr-4">
                عمل فتحات في السقف بالكور — {PHONE}
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> متخصص في <strong>عمل فتحات الأسقف الخرسانية بالكور</strong>
                  للتهوية والتكييف المركزي وشفاطات الحمامات والمطابخ والسلالم الداخلية (الدوبلكس).
                </p>
                <p>
                  نستخدم ماكينة كور دريل ذات محرك هيدروليكي قوي مع تبريد مائي كامل — ينتج فتحة دائرية مثالية في السقف
                  <strong> بدون أي غبار يتساقط وبدون اهتزاز يُشقق الطلاء.</strong>
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {['دائري مثالي', 'بدون غبار', 'سريع ونظيف'].map(s => (
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
                <h3 className="text-xl font-black mb-3">احجز معاينة مجانية</h3>
                <p className="text-slate-300 text-sm mb-4">حدد موقع الفتحة ونوع الاستخدام ونتواصل لتحديد الموعد</p>
                <a href={`tel:${PHONE}`} className="block text-center py-4 rounded-2xl bg-sky-600 text-white font-black text-xl hover:bg-sky-700 transition mb-3">{PHONE}</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-center py-4 rounded-2xl bg-emerald-600 text-white font-black text-lg hover:bg-emerald-700 transition">واتساب مباشر</a>
              </div>
              <div className="space-y-3">
                {[
                  { icon: ShieldCheck, c: 'text-emerald-600', t: 'لا يُضعف البلاطة الخرسانية' },
                  { icon: Fan, c: 'text-sky-600', t: 'مثالي للتهوية والتكييف' },
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

        <Section id="services" title="خدمات فتحات الأسقف التي نقدمها">
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              { t: 'فتحات التهوية الميكانيكية', d: 'فتحات دائرية للشفاطات ووحدات التهوية المركزية بالقطر والموقع الدقيق المحدد من المهندس الميكانيكي.' },
              { t: 'فتحات وحدات الكاسيت (تكييف مركزي)', d: 'فتحات دقيقة لتمرير المبخر وتصريف الكوندنسيت وخطوط التغذية الكهربائية لوحدات الكاسيت.' },
              { t: 'فتحات شفاطات الحمامات', d: 'فتحة الشفاط في سقف الحمام أو جداره الخارجي لتصريف البخار والرطوبة.' },
              { t: 'فتحات مداخنة الشفاط (مطبخ)', d: 'فتحة مدخنة الشفاط في السقف أو الجدار للطرد المباشر للشفاطات ذات المدخنة.' },
              { t: 'فتحات السلم الداخلي (دوبلكس)', d: 'قطع السقف لعمل فتحة السلم في الدوبلكس بأبعاد دقيقة وبتأمين كامل لمنع السقوط أثناء العمل.' },
              { t: 'فتحات الإضاءة الغائرة والفانوس', d: 'فتحات السقف للإضاءة الغائرة والفانوس الزجاجي والسكاي لايت بأقطار وأشكال متنوعة.' },
            ].map(x => (
              <div key={x.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-slate-900">{x.t}</div>
                  <p className="mt-1 text-slate-600 text-sm leading-7">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="technique" title="كيف نعمل الفتحة في السقف بأمان تام؟">
          <p>
            التخريم في الأسقف يختلف عن الجدران في نقطة أساسية واحدة: <strong>الجاذبية</strong>. أي قطعة خرسانة مفككة ستسقط للأسفل.
            لهذا السبب، نتبع بروتوكولاً صارماً:
          </p>
          <div className="not-prose space-y-4 mt-6">
            {[
              { n: '1', t: 'الكشف الإلكتروني لمسار الحديد', d: 'نُحدد مسار حديد التسليح بالكاشف الإلكتروني قبل وضع الماكينة لاختيار أفضل موضع للفتحة.' },
              { n: '2', t: 'تغطية الأرضية', d: 'نُغطي الأرضية أسفل منطقة العمل بمواد حماية سميكة لاستيعاب أي مواد تتساقط.' },
              { n: '3', t: 'استخدام نظام تبريد مائي', d: 'التبريد المائي يُحوِّل الغبار لطمي سائل يُسحب فوراً — لا يتصاعد أي غبار في الهواء.' },
              { n: '4', t: 'تثبيت البلوك قبل الفصل النهائي', d: 'في فتحات السقف الكبيرة (كفتحة السلم) نُثبِّت البلوك بدعامة قبل فصله لمنع السقوط المفاجئ.' },
              { n: '5', t: 'التسليم والتنظيف', d: 'فتحة نظيفة ناعمة الحواف جاهزة لتركيب التكييف أو الشفاط أو الدرابزين مباشرة.' },
            ].map(step => (
              <div key={step.n} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 font-black text-white text-sm">{step.n}</div>
                <div>
                  <div className="font-black text-slate-900 mb-1">{step.t}</div>
                  <p className="text-slate-600 text-sm leading-7">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" title="الأسئلة الشائعة عن فتحات الأسقف بالكور">
          <div className="space-y-4 not-prose">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-sky-300 transition">
                <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-sky-500 group-open:rotate-180 transition p-1 bg-sky-50 rounded-full shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </summary>
                <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-sky-400">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Internal links */}
        <section className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-10">
          <h2 className="text-2xl font-black text-slate-900 mb-6">خدمات مرتبطة</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { href: '/core', t: 'تخريم الخرسانة بالكور', d: 'جميع أنواع فتحات الكور في الجدران والأسقف.' },
              { href: '/hoods', t: 'تركيب شفاطات المطابخ', d: 'الفتحة + تركيب الشفاط في زيارة واحدة.' },
              { href: '/gas-holes', t: 'فتحات الغاز الطبيعي', d: 'فتحات مخصصة لمواسير الغاز المعتمدة.' },
              { href: '/wall-cutting', t: 'قص الجدران وفتح الأبواب', d: 'فتح أبواب ونوافذ في الجدران الخرسانية.' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 hover:border-sky-300 transition">
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
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">جاهز لعمل الفتحة في السقف؟</h2>
              <p className="text-slate-300 text-lg max-w-xl">تواصل معنا الآن ونصل إليك في نفس اليوم.</p>
              <div className="mt-3 text-2xl font-black text-sky-400">{PHONE}</div>
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
