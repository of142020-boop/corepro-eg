import React from 'react';
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import { Building2, CheckCircle2, Phone, ShieldCheck, Clock, BadgeCheck, MapPin, HardHat } from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/contractor`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const FAQ = [
  { q: 'هل تعملون كمقاول باطن (Subcontractor) في المشاريع الكبرى؟', a: 'نعم. نحن نتعاون مع شركات المقاولات العامة والمهندسين الاستشاريين لتنفيذ كافة أعمال قص وتخريم الخرسانة كمقاول متخصص (Specialized Subcontractor) مع الالتزام التام بالجدول الزمني ومعايير السلامة المهنية (HSE).' },
  { q: 'كيف يتم تسعير المشاريع الكبيرة؟', a: 'نقدم أسعاراً خاصة ومخفضة للمشاريع الكبيرة والكميات (تسعير بالجملة). نقوم بعمل معاينة ميدانية للموقع، ودراسة المخططات الهندسية، ثم تقديم عرض سعر رسمي (Quotation) مفصل.' },
  { q: 'هل لديكم القدرة على تنفيذ مشاريع في المحافظات والمدن الجديدة؟', a: 'بالتأكيد. أسطول معداتنا وفريقنا جاهز للعمل في العاصمة الإدارية، العلمين الجديدة، الجلالة، كافة الموانئ، والمناطق الصناعية في جميع أنحاء جمهورية مصر العربية.' },
  { q: 'ما هي قدرة المعدات لديكم في المشاريع العملاقة؟', a: 'نمتلك أحدث ماكينات الكور دريل (Core Drill) هيدروليكية وكهربائية، مناشير قص الجدران (Track Saws)، ومناشير الواير (Wire Saws) الألماسية القادرة على قطع أي سماكة للخرسانة المسلحة، مما يمكننا من العمل في أكثر من جبهة بوقت واحد.' },
  { q: 'هل توفرون فواتير ضريبية وأوراق رسمية للشركة؟', a: 'نعم. نحن شركة رسمية مسجلة ونوفر كافة المستندات القانونية (سجل تجاري، بطاقة ضريبية، فواتير إلكترونية) اللازمة للتعامل مع الشركات الكبرى والمؤسسات الحكومية.' },
  { q: 'كم سرعة الاستجابة لطلبات المقاولات الطارئة؟', a: 'ندرك أهمية الوقت في المشاريع الإنشائية. نوفر استجابة طارئة وتعبئة سريعة (Mobilization) للموقع خلال 24-48 ساعة من التعاقد.' },
  { q: 'هل تتعاملون مع أعمال البنية التحتية والمرافق؟', a: 'نعم. نُنفذ فتحات الكور الدقيقة لخطوط الصرف الرئيسية، خطوط المياه، كابلات الضغط العالي، وغرف التفتيش والمطابق الخرسانية.' },
];

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div>
    </section>
  );
}

export default function ContractorPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      name: BRAND, url: DOMAIN, telephone: PHONE_INT,
      description: 'أفضل شركة ومقاول قص وتخريم خرسانة في مصر للمشاريع الكبرى والشركات.',
      address: { '@type': 'PostalAddress', addressCountry: 'EG', addressLocality: 'Cairo' },
      priceRange: '$$$', openingHours: 'Mo-Su 00:00-23:59',
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'مقاولات قص وتخريم الخرسانة للشركات',
      serviceType: 'Concrete Contractor Services',
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
        { '@type': 'ListItem', position: 2, name: 'مقاول قص وتخريم الخرسانة', item: CANONICAL },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(15,23,42,0.1),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-800 shadow-sm mb-6 font-bold">
            <Building2 className="h-4 w-4 text-slate-600" />
            <span>مقاولات · شركات إنشائية · مشاريع قومية · B2B</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-slate-900 pr-4">
                شركة ومقاول قص وتخريم الخرسانة — {PHONE}
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> هي <strong>شركة متخصصة</strong> والمقاول الأول في مصر لتنفيذ أعمال <strong>قص وتخريم وتقطيع الخرسانة</strong>.
                  نحن الشريك الاستراتيجي لشركات المقاولات العامة والمهندسين في المشاريع الكبرى.
                </p>
                <p>
                  نمتلك أسطولاً من أحدث المعدات الألمانية (الكور، المنشار الماسي، واير القطع) مع فريق من الفنيين المعتمدين، مما يجعلنا <strong>أفضل مقاول قص خرسانة</strong> قادر على تسليم المشاريع العملاقة في وقتها القياسي وبأعلى معايير الجودة والسلامة.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {['فواتير رسمية', 'أسعار جملة', 'سرعة إنجاز'].map(s => (
                  <div key={s} className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-3 py-3 text-sm text-slate-700 shadow-sm font-bold text-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />{s}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 font-black text-white shadow-[0_16px_40px_rgba(16,185,129,0.3)] hover:bg-emerald-700 transition text-lg">
                  <Phone className="h-5 w-5" /> تواصل لطلب عرض سعر
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.1)] p-7 space-y-5">
              <div className="rounded-2xl bg-slate-900 text-white p-6">
                <h3 className="text-xl font-black mb-3">للشركات والمهندسين</h3>
                <p className="text-slate-300 text-sm mb-4">أرسل لنا المخططات أو الكميات وسنقوم بتقديم مقايسة وعرض سعر رسمي.</p>
                <a href={`tel:${PHONE}`} className="block text-center py-4 rounded-2xl bg-white text-slate-900 font-black text-xl hover:bg-slate-100 transition mb-3">اتصال مباشر بالمهندس المختص</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-center py-4 rounded-2xl border border-white/20 text-white font-black text-lg hover:bg-white/10 transition">إرسال عبر الواتساب</a>
              </div>
              <div className="space-y-3">
                {[
                  { icon: HardHat, c: 'text-orange-600', t: 'التزام بمعايير السلامة المهنية HSE' },
                  { icon: Building2, c: 'text-sky-600', t: 'خبرة في المشاريع القومية والمدن الجديدة' },
                  { icon: ShieldCheck, c: 'text-emerald-600', t: 'شركة رسمية ومسجلة قانونياً' },
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

        <Section id="services" title="خدمات المقاولات التي تقدمها شركات قص الخرسانة">
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              { t: 'مشاريع البنية التحتية', d: 'عمل فتحات ضخمة في المطابق وغرف التفتيش لخطوط الصرف الصحي وشبكات المياه والغاز الطبيعي في المشاريع الجديدة.' },
              { t: 'تعديلات إنشائية كبرى', d: 'قص وإزالة أجزاء كاملة من الخرسانة (حوائط قص، كمرات، أعمدة) باستخدام منشار الواير الألماسي والمنشار الجداري.' },
              { t: 'أعمال الـ MEP للمولات والأبراج', d: 'تنفيذ آلاف فتحات الكور لتمرير دكتات التكييف المركزي، مواسير الحريق (Firefighting)، وكابلات الكهرباء بأسعار جملة.' },
              { t: 'المنشآت الصناعية والمصانع', d: 'قص أرضيات المصانع (Slab Sawing) لعمل قواعد للماكينات الثقيلة أو مسارات لخطوط الإنتاج دون تعطيل العمل.' },
              { t: 'تأهيل وترميم المباني القائمة', d: 'قطع الخرسانة التالفة أو الزائدة بدقة جراحية استعداداً لأعمال التدعيم الإنشائي وألياف الكربون.' },
              { t: 'المشاريع الفندقية والسياحية', d: 'تنفيذ أعمال القص الدقيقة والتخريم في الفنادق والقرى السياحية مع التزام تام بالهدوء والنظافة.' },
            ].map(x => (
              <div key={x.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-slate-900">{x.t}</div>
                  <p className="mt-1 text-slate-600 text-sm leading-7">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="why-us" title="لماذا نحن أفضل شركة تخريم وتقطيع خرسانة في مصر؟">
          <p>
            اختيار المقاول الباطن الخاطئ قد يتسبب في تأخير المشروع بأكمله أو إتلاف عناصر إنشائية حرجة. نحن في <strong>كور برو</strong> نتفوق بـ:
          </p>
          <div className="not-prose grid gap-4 md:grid-cols-3 mt-6">
            {[
              { t: 'أسطول معدات حديث', d: 'لا نعتمد على ماكينة واحدة تتعطل وتوقف العمل. نمتلك أسطولاً من مكائن الكور ومناشير القص جاهز للمشاريع العملاقة.' },
              { t: 'أسعار مقاولات تنافسية', d: 'كمقاول مباشر (بدون وسطاء)، نُقدم لشركات المقاولات أسعاراً تنافسية جداً تضمن لهم تحقيق هامش ربح ممتاز.' },
              { t: 'فريق هندسي متخصص', d: 'أعمالنا لا تقتصر على الفنيين. نُدير مشاريعنا بعقلية هندسية تتفهم المخططات الإنشائية وأهمية الحفاظ على حديد التسليح الحرج.' },
            ].map(x => (
              <div className="rounded-2xl border border-black/10 bg-white p-5" key={x.t}>
                <div className="font-black text-slate-900 mb-2">{x.t}</div>
                <p className="text-slate-600 text-sm leading-7">{x.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" title="الأسئلة الشائعة للشركات والمهندسين">
          <div className="space-y-4 not-prose">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-slate-400 transition">
                <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-slate-500 group-open:rotate-180 transition p-1 bg-slate-50 rounded-full shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </summary>
                <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-slate-900">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">هل تبحث عن مقاول معتمد لمشروعك؟</h2>
              <p className="text-slate-300 text-lg max-w-xl">دعنا نتولى مهام التخريم والقص باحترافية تامة. تواصل مع قسم المشاريع الآن.</p>
              <div className="mt-3 text-2xl font-black text-white">{PHONE}</div>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto min-w-[220px]">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 transition text-white px-8 py-4 rounded-2xl font-black text-xl">
                <Phone className="w-5 h-5" /> واتساب المشاريع
              </a>
              <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 transition px-8 py-4 rounded-2xl font-black text-xl">
                <Phone className="w-5 h-5" /> اتصال هاتفي
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
