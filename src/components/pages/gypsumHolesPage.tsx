import React from 'react';
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import { Layers, CheckCircle2, Phone, ShieldCheck, Clock, BadgeCheck, MapPin } from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/gypsum-holes`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const FAQ = [
  { q: 'هل يمكن عمل فتحة في جدار الجبس بدون كسره؟', a: 'نعم تماماً. نستخدم أسطوانة كور ألماسية خاصة بالمواد اللينة تُنتج فتحة دائرية مثالية في الجبس بدون أي تشقق أو تكسير للألواح المحيطة. الفتحة جاهزة مباشرة بعد الانتهاء.' },
  { q: 'ما قطر الفتحة المناسب لجدار الجبس؟', a: 'يتراوح قطر الفتحة في الجبسيات بين 5 سم (لتمرير كابل أو أنبوب) وحتى 30 سم (لفتحات تهوية الكاسيت أو الشفاط). نُنفذ أي قطر تحتاجه بدقة كاملة.' },
  { q: 'هل التخريم في الجبس يُخرب الطلاء أو الديكور؟', a: 'لا على الإطلاق. لأننا نستخدم قطر محدد دون اهتزاز، فالمنطقة المحيطة بالفتحة تبقى سليمة تماماً. لا تشقق ولا تكسير في الأسقف الجبسية أو الجدران المحيطة.' },
  { q: 'هل تعملون فتحات في الأسقف الجبسية (درايول - GRC)؟', a: 'نعم. نعمل في جميع أنواع الأسقف الجبسية: ألواح الجبسم، الدرايول، GRC، GRG. نتأكد أولاً من المسافة بين السقف الجبسي والسقف الخرساني فوقه لاختيار القطر المناسب.' },
  { q: 'هل يمكن عمل فتحة في الجبس لتركيب وحدة تكييف كاسيت؟', a: 'هذا من أكثر الطلبات شيوعاً لدينا. وحدات الكاسيت تحتاج فتحة دقيقة القياس في السقف الجبسي. نُنفذها بالأبعاد المحددة من الكتالوج مع مراعاة المسافة الحرة المطلوبة.' },
  { q: 'كم تستغرق عملية تخريم الجبس؟', a: 'فتحة واحدة في جدار أو سقف جبسي تستغرق من 5 إلى 15 دقيقة فقط. في المشاريع الكبيرة التي تحتاج فتحات متعددة، ننجز الجميع في زيارة واحدة.' },
  { q: 'هل يمكن عمل فتحة في جدار الجبس لتمديد الكهرباء؟', a: 'نعم. كثيراً ما نعمل فتحات في جدران الجبس لمرور قنوات الكهرباء (كوندويت) والأنابيب وكابلات الشبكة والكاميرات. الفتحة بقطر دقيق يناسب قطر الأنبوب أو الكابل.' },
  { q: 'هل تعملون في مواقع التشطيب الراقي دون تلوث؟', a: 'نعم. الجبس مادة حساسة والعملاء يهتمون بالنظافة. نُغطي الأرضيات، ونستخدم مكنسة كهربائية صغيرة لشفط الغبار أثناء الحفر، ونُنظف الموقع بالكامل قبل المغادرة.' },
];

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div>
    </section>
  );
}

export default function GypsumHolesPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      name: BRAND, url: DOMAIN, telephone: PHONE_INT,
      description: 'كور برو متخصص في عمل فتحات الجبس والأسقف الجبسية بدقة هندسية وبدون تشقق في مصر.',
      address: { '@type': 'PostalAddress', addressCountry: 'EG', addressLocality: 'Cairo' },
      priceRange: '$$', openingHours: 'Mo-Su 00:00-23:59',
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'عمل فتحات في الجبس والأسقف الجبسية',
      serviceType: 'Gypsum Board Core Drilling',
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
        { '@type': 'ListItem', position: 2, name: 'فتحات الجبس', item: CANONICAL },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(168,85,247,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm text-purple-800 shadow-sm mb-6">
            <Layers className="h-4 w-4 text-purple-600" />
            <span>فتحات جبسيات · أسقف درايول · GRC · GRG · بدون تشقق</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-purple-500 pr-4">
                عمل فتحات في الجبس والأسقف الجبسية — {PHONE}
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> متخصص في <strong>عمل فتحات الجبس</strong> بدقة عالية وبدون أي تشقق في الألواح المحيطة.
                  سواء كنت تحتاج فتحة في <strong>سقف جبسي</strong> (درايول، GRC، GRG) أو <strong>جدار جبسي</strong> داخلي،
                  نُنفذها في دقائق معدودة باستخدام أسطوانات كور خاصة بالمواد اللينة.
                </p>
                <p>
                  مثالي لفتحات <strong>تكييف الكاسيت</strong> وشفاطات الحمامات والتمديدات الكهربائية والسباكة في التشطيبات الراقية.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {['بدون تشقق', 'نظيف 100%', 'دقة مثالية'].map(s => (
                  <div key={s} className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-3 py-3 text-sm text-slate-700 shadow-sm font-bold text-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />{s}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 font-black text-white shadow-[0_16px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition text-lg">
                  <Phone className="h-5 w-5" /> واتساب مباشر
                </a>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 font-black text-slate-900 hover:bg-slate-50 transition text-lg">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="rounded-2xl bg-slate-900 text-white p-6">
                <h3 className="text-xl font-black mb-3">احجز زيارة الآن</h3>
                <p className="text-slate-300 text-sm mb-4">حدد عدد الفتحات وموقعها ونصل إليك في نفس اليوم</p>
                <a href={`tel:${PHONE}`} className="block text-center py-4 rounded-2xl bg-purple-600 text-white font-black text-xl hover:bg-purple-700 transition mb-3">{PHONE}</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-center py-4 rounded-2xl bg-emerald-600 text-white font-black text-lg hover:bg-emerald-700 transition">واتساب مباشر</a>
              </div>
              <div className="space-y-3">
                {[
                  { icon: ShieldCheck, c: 'text-emerald-600', t: 'لا تشقق في الجبس المحيط' },
                  { icon: BadgeCheck, c: 'text-purple-600', t: 'مناسب للتشطيبات الراقية' },
                  { icon: Clock, c: 'text-amber-600', t: 'فتحة في دقائق معدودة' },
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

        <Section id="services" title="خدمات فتحات الجبس التي نقدمها">
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              { t: 'فتحات الأسقف الجبسية للكاسيت', d: 'فتحات دقيقة القطر لتركيب وحدات التكييف الكاسيت في الأسقف الجبسية. بأبعاد الكتالوج تماماً.' },
              { t: 'فتحات شفاطات الحمام في الجبس', d: 'فتحة الشفاط في السقف الجبسي للحمامات والمداخل بالقطر المناسب لتوصيل الدكت.' },
              { t: 'فتحات التهوية في الأسقف الجبسية', d: 'فتحات الفنتيلايشن والتهوية الطبيعية أو الميكانيكية في الأسقف والجدران الجبسية.' },
              { t: 'فتحات جدران الجبس للتمديدات', d: 'فتحات في جدران الدرايول والجبس لتمرير كابلات الكهرباء والإنترنت والكاميرات والسباكة.' },
              { t: 'فتحات الإضاءة الغائرة في الجبس', d: 'فتحات مضبوطة بالقطر المحدد (عادة 7.5 سم أو 10 سم) لتركيب سبوتات الإضاءة الغائرة.' },
              { t: 'فتحات متعددة في مشاريع التشطيب', d: 'للمشاريع الكبيرة والشقق كاملة التشطيب: ننجز جميع الفتحات في زيارة واحدة بسعر خاص.' },
            ].map(x => (
              <div key={x.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-slate-900">{x.t}</div>
                  <p className="mt-1 text-slate-600 text-sm leading-7">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="comparison" title="تخريم الجبس بالكور مقابل القطع اليدوي">
          <div className="not-prose overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-right text-slate-800 min-w-[500px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-black text-slate-900">وجه المقارنة</th>
                  <th className="p-4 font-black text-emerald-700 border-r border-slate-200 bg-emerald-50/50">الكور (كور برو)</th>
                  <th className="p-4 font-black text-rose-700 border-r border-slate-200 bg-rose-50/50">القطع اليدوي أو الزاوية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { a: 'شكل الفتحة', b: 'دائري مثالي بدون خشونة', c: 'شكل غير منتظم وحواف خشنة' },
                  { a: 'التشقق', b: 'صفر تشقق في الجبس', c: 'قد يُشقق الألواح المجاورة' },
                  { a: 'الغبار', b: 'ضئيل جداً — سهل الشفط', c: 'كميات كبيرة من غبار الجبس' },
                  { a: 'الوقت', b: '5-15 دقيقة للفتحة الواحدة', c: 'أبطأ ويحتاج تهذيب ولحام' },
                  { a: 'جاهزية الفتحة', b: 'جاهزة مباشرة للتركيب', c: 'تحتاج ترميم ومعجون بعدها' },
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

        <Section id="types" title="أنواع الجبسيات التي نعمل عليها">
          <div className="not-prose grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'ألواح الجبس العادي', d: 'الجبسم الأبيض والرمادي بسُمك 9-13 ملم.' },
              { t: 'ألواح الدرايول (Drywall)', d: 'ألواح GWB الأمريكي والأوروبي المعروف بالدرايول.' },
              { t: 'سقف GRC', d: 'الألواح الجاهزة من الزجاج المقوى بالإسمنت.' },
              { t: 'سقف GRG', d: 'الألواح الجبسية المقواة بالألياف الزجاجية.' },
              { t: 'الجبس المركب على شبك', d: 'الجبس التقليدي المصبوب على شبك الرابيتز.' },
              { t: 'جدران الخرتوش والتقسيمات', d: 'جدران البودي بارد وجدران التقسيم الداخلية.' },
            ].map(x => (
              <div key={x.t} className="rounded-2xl border border-black/10 bg-white p-4">
                <div className="font-black text-slate-900 mb-1">{x.t}</div>
                <p className="text-slate-600 text-sm">{x.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" title="الأسئلة الشائعة عن فتحات الجبس والأسقف الجبسية">
          <div className="space-y-4 not-prose">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-purple-300 transition">
                <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-purple-500 group-open:rotate-180 transition p-1 bg-purple-50 rounded-full shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </summary>
                <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-purple-400">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-10">
          <h2 className="text-2xl font-black text-slate-900 mb-6">خدمات مرتبطة</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { href: '/ceiling-holes', t: 'فتحات الأسقف الخرسانية', d: 'فتحات في الأسقف الخرسانية المسلحة.' },
              { href: '/core', t: 'تخريم الخرسانة بالكور', d: 'جميع أنواع فتحات الكور الخرسانية.' },
              { href: '/gas-holes', t: 'فتحات الغاز الطبيعي', d: 'فتحات الغاز المعتمدة في الجدران.' },
              { href: '/wall-cutting', t: 'قص وفتح الجدران', d: 'فتح أبواب ونوافذ في الخرسانة.' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 hover:border-purple-300 transition">
                <div>
                  <div className="font-black text-slate-900">{s.t}</div>
                  <p className="text-slate-500 text-sm mt-1">{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">جاهز لعمل فتحات الجبس؟</h2>
              <p className="text-slate-300 text-lg max-w-xl">تواصل معنا ونصل إليك في نفس اليوم.</p>
              <div className="mt-3 text-2xl font-black text-purple-400">{PHONE}</div>
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
