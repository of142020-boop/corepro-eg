import React from 'react';
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import { Droplets, CheckCircle2, Phone, ShieldCheck, Clock, BadgeCheck, MapPin, Wrench } from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/sewer-holes`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const FAQ = [
  { q: 'كم قطر فتحة الصرف الصحي في الأرضية؟', a: 'قطر فتحة الصرف الصحي القياسية في الأرضيات يتراوح بين 10 و15 سم. أنابيب الصرف الرئيسية قد تحتاج أقطاراً أكبر تصل إلى 20 أو 25 سم. نُنفذ الفتحة بالقطر الدقيق المطلوب.' },
  { q: 'هل يمكن عمل فتحة صرف في بلاطة خرسانية صماء؟', a: 'نعم. هذا تخصصنا. بلاطة الأرضية الخرسانية المسلحة يُخرَّم فيها بالكور بالقطر المطلوب مع تبريد مائي كامل. الناتج فتحة دائرية نظيفة جاهزة لإدخال الأنبوب مباشرة.' },
  { q: 'هل يمكن إضافة حمام أو بوية جديدة في شقة قائمة؟', a: 'نعم وهذا شائع جداً. لإضافة حمام أو دورة مياه جديدة في شقة تشطيب قديم، نعمل الفتحات اللازمة في الأرضية (للصرف) والجدار (لمواسير المياه الحارة والباردة).' },
  { q: 'هل العملية تؤثر على مياه الشرب في المبنى؟', a: 'لا على الإطلاق. التخريم بالكور هو قطع ميكانيكي دقيق في الخرسانة فقط ولا يمس أنابيب المياه ما لم يُحدد موضعها بالكاشف الإلكتروني أولاً وتُتجنب.' },
  { q: 'ما الفرق بين فتحة الصرف وفتحة المياه؟', a: 'فتحة الصرف في الأرضية عادةً أكبر قطراً (10-15 سم) وتُنفَّذ بالكور في البلاطة. فتحات مواسير المياه في الجدران عادةً أصغر (3-5 سم) وتُنفَّذ بكور أصغر. كلاهما ضمن خدماتنا.' },
  { q: 'هل تعملون مع مقاولي السباكة؟', a: 'نعم. كثيراً ما نعمل بالتنسيق مع فني السباكة الذي يُحدد لنا أماكن وأقطار الفتحات المطلوبة. نحن نُنفذ الفتحات الخرسانية وهو يُنفذ التمديدات.' },
  { q: 'هل يمكن عمل فتحة صرف في سقف الطابق السفلي (لدورة مياه فوقه)؟', a: 'نعم. في المباني متعددة الطوابق، قد يحتاج مهندس السباكة لعمل فتحة في سقف الطابق السفلي لمرور أنابيب الصرف من الطابق العلوي. نُنفذها بالدقة والأمان الكاملين.' },
  { q: 'هل تعملون فتحات الصرف للمصانع والمشاريع الكبيرة؟', a: 'نعم. المصانع والمستودعات والمطاعم تحتاج عادةً فتحات صرف كبيرة القطر متعددة في الأرضيات. لدينا خبرة في هذا النوع من المشاريع مع إمكانية تنفيذ عدد كبير من الفتحات في وقت قصير.' },
];

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div>
    </section>
  );
}

export default function SewerHolesPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      name: BRAND, url: DOMAIN, telephone: PHONE_INT,
      description: 'كور برو متخصص في عمل فتحات الصرف الصحي والسباكة في الأرضيات والجدران الخرسانية بدقة هندسية.',
      address: { '@type': 'PostalAddress', addressCountry: 'EG', addressLocality: 'Cairo' },
      priceRange: '$$', openingHours: 'Mo-Su 00:00-23:59',
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'عمل فتحات الصرف الصحي والسباكة بالكور',
      serviceType: 'Plumbing Core Drilling',
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
        { '@type': 'ListItem', position: 2, name: 'فتحات الصرف الصحي والسباكة', item: CANONICAL },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(6,182,212,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm text-cyan-800 shadow-sm mb-6">
            <Droplets className="h-4 w-4 text-cyan-600" />
            <span>فتحات الصرف الصحي · مواسير السباكة · إضافة حمامات جديدة</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-cyan-500 pr-4">
                فتحات الصرف الصحي والسباكة في الخرسانة — {PHONE}
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> متخصص في <strong>عمل فتحات الصرف الصحي والسباكة</strong> في البلاطات الخرسانية والجدران
                  باستخدام أسطوانات كور ألماسية بالقطر الدقيق المطلوب لمواسير الصرف والمياه.
                </p>
                <p>
                  سواء كنت تُضيف <strong>حمام جديد</strong> في شقة قائمة، أو تُعيد توزيع شبكة الصرف، أو تحتاج فتحات صرف في أرضية مصنع أو مطعم —
                  نصل إليك ونُنجز الفتحات بدقة هندسية وبدون أي هدم إضافي.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {['قطر دقيق', 'بدون هدم', 'سريع ونظيف'].map(s => (
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
                <h3 className="text-xl font-black mb-3">استشارة مجانية + سعر فوري</h3>
                <p className="text-slate-300 text-sm mb-4">أخبرنا بعدد الفتحات وأقطارها ونُقدم السعر فوراً</p>
                <a href={`tel:${PHONE}`} className="block text-center py-4 rounded-2xl bg-cyan-600 text-white font-black text-xl hover:bg-cyan-700 transition mb-3">{PHONE}</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-center py-4 rounded-2xl bg-emerald-600 text-white font-black text-lg hover:bg-emerald-700 transition">واتساب مباشر</a>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Wrench, c: 'text-cyan-600', t: 'نعمل مع مقاولي السباكة' },
                  { icon: ShieldCheck, c: 'text-emerald-600', t: 'كاشف إلكتروني قبل الحفر' },
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

      <div className="mx-auto max-w-6xl px-4 pb-24 space-y-10">

        <Section id="services" title="حالات الاستخدام الشائعة لفتحات الصرف بالكور">
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              { t: 'إضافة حمام جديد في شقة قائمة', d: 'نعمل فتحات الصرف في الأرضية وفتحات المياه في الجدران لتمكين فني السباكة من تركيب الحمام الجديد.' },
              { t: 'نقل موقع المرحاض أو الحوض', d: 'تغيير موضع الصرف في الأرضية لنقل المرحاض أو حوض الاستحمام لموقع مختلف داخل الحمام.' },
              { t: 'فتحات صرف أرضيات المطاعم', d: 'فتحات صرف متعددة في أرضيات المطاعم والمطابخ الصناعية بأقطار تتناسب مع كميات الصرف الكبيرة.' },
              { t: 'فتحات صرف المصانع والمستودعات', d: 'أرضيات المصانع تحتاج فتحات صرف كبيرة القطر. نعمل أي عدد من الفتحات بالقطر المطلوب.' },
              { t: 'فتحات مواسير السباكة في الجدران', d: 'فتحات صغيرة في الجدران لمرور أنابيب المياه الحارة والباردة وأنابيب التغذية.' },
              { t: 'تمديد شبكة صرف جديدة في دور أرضي', d: 'إضافة شبكة صرف كاملة في دور أرضي لم يكن مخططاً له في الأصل.' },
            ].map(x => (
              <div key={x.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-slate-900">{x.t}</div>
                  <p className="mt-1 text-slate-600 text-sm leading-7">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="diameters" title="أقطار فتحات الصرف القياسية">
          <div className="not-prose overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-right text-slate-800 min-w-[400px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-black text-slate-900">الاستخدام</th>
                  <th className="p-4 font-black text-cyan-700 border-r border-slate-200">القطر الشائع</th>
                  <th className="p-4 font-black text-slate-700 border-r border-slate-200">ملاحظة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { a: 'صرف المرحاض', b: '10 سم (4 بوصة)', c: 'القطر القياسي في مصر' },
                  { a: 'صرف الحمام والاستحمام', b: '7.5 سم (3 بوصة)', c: 'أو 10 سم حسب التصميم' },
                  { a: 'صرف المطبخ', b: '5-7.5 سم', c: 'مع سيفون منع الروائح' },
                  { a: 'صرف أرضية المطعم', b: '10-15 سم', c: 'حسب تدفق المياه المتوقع' },
                  { a: 'الصرف الرئيسي', b: '15-25 سم', c: 'المواسير الرئيسية بين الأدوار' },
                ].map(row => (
                  <tr key={row.a} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-bold">{row.a}</td>
                    <td className="p-4 border-r border-slate-200 text-cyan-700 text-sm font-bold">{row.b}</td>
                    <td className="p-4 border-r border-slate-200 text-slate-600 text-sm">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="faq" title="الأسئلة الشائعة عن فتحات الصرف الصحي بالكور">
          <div className="space-y-4 not-prose">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-cyan-300 transition">
                <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-cyan-500 group-open:rotate-180 transition p-1 bg-cyan-50 rounded-full shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </summary>
                <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-cyan-400">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-10">
          <h2 className="text-2xl font-black text-slate-900 mb-6">خدمات مرتبطة</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { href: '/core', t: 'تخريم الخرسانة بالكور', d: 'جميع أنواع فتحات الكور في الجدران والأرضيات.' },
              { href: '/electrical-holes', t: 'فتحات التمديدات الكهربائية', d: 'فتحات الكهرباء والكابلات والشبكات.' },
              { href: '/gas-holes', t: 'فتحات الغاز الطبيعي', d: 'فتحات مواسير الغاز المعتمدة.' },
              { href: '/wall-cutting', t: 'قص الجدران وفتح الأبواب', d: 'فتح أبواب في الجدران الخرسانية.' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 hover:border-cyan-300 transition">
                <div>
                  <div className="font-black text-slate-900">{s.t}</div>
                  <p className="text-slate-500 text-sm mt-1">{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">تحتاج فتحات صرف أو سباكة؟</h2>
              <p className="text-slate-300 text-lg max-w-xl">تواصل معنا الآن للمعاينة المجانية وعرض السعر الفوري.</p>
              <div className="mt-3 text-2xl font-black text-cyan-400">{PHONE}</div>
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
