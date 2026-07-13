import React from 'react';
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
import { Zap, CheckCircle2, Phone, ShieldCheck, Clock, BadgeCheck, MapPin, Settings } from 'lucide-react';

const BRAND    = 'كور برو - Core Pro';
const DOMAIN   = 'https://corepro-eg.com';
const CANONICAL = `${DOMAIN}/electrical-holes`;
const PHONE    = '01021507462';
const PHONE_INT = '+201021507462';
const WHATSAPP = 'https://wa.me/201021507462';

const FAQ = [
  { q: 'كيف تضمنون عدم إتلاف الأسلاك الكهربائية الموجودة؟', a: 'نستخدم كاشفاً إلكترونياً متطوراً يحدد مسار الأسلاك والأنابيب قبل الحفر. هذا يضمن 100% عدم الاقتراب من أي كابل كهربائي موجود في الجدار.' },
  { q: 'ما قطر الفتحة المناسب للكوندويت الكهربائي؟', a: 'كوندويت 16 ملم يحتاج فتحة قطرها 2 سم. كوندويت 25 ملم يحتاج 3 سم. كوندويت 32 ملم يحتاج 4 سم. نُنفذ الفتحة بالقطر الدقيق لضمان مرور الكوندويت باحتراف دون فراغات زائدة.' },
  { q: 'هل يمكن عمل فتحة في الجدار لتمرير الكيبل بدون تخريب الطلاء؟', a: 'نعم. بالكور، الفتحة تكون بالقطر المطلوب بالضبط دون أي خشونة أو كسور في الطلاء المحيط. بعد تمرير الكيبل، تُسد الفتحة بمعجون صغير ولا تكاد تُرى.' },
  { q: 'هل تعملون فتحات لشبكات الإنترنت والكاميرات؟', a: 'نعم. كابلات الإنترنت (Cat6) والكاميرات الأمنية (Coaxial, IP) تحتاج فتحات صغيرة في الجدران والأسقف. نُنفذها بسرعة وبدقة بالغة.' },
  { q: 'هل يمكن عمل فتحة من الخارج للداخل لإدخال كيبل الكهرباء؟', a: 'نعم. هذا شائع جداً في الفيلات والمحلات والمكاتب لإدخال كيبل الخط الرئيسي من لوحة الكهرباء الخارجية إلى داخل المبنى. نعمل الفتحة بزاوية ميل مناسبة لمنع دخول المياه.' },
  { q: 'هل تعملون في المنشآت التجارية والصناعية؟', a: 'نعم. المحلات التجارية والمصانع والمكاتب تحتاج تمديدات كهربائية معقدة تمر عبر جدران خرسانية. لدينا خبرة واسعة في هذا النوع من المشاريع.' },
  { q: 'هل يمكن عمل فتحة لتمرير المكيف ميني سبليت؟', a: 'هذا من أكثر طلباتنا. فتحة المكيف ميني سبليت (تمرير أنابيب الفريون والكيبل) تكون قطرها عادة 7-8 سم. نعمل الفتحة بزاوية ميل طفيفة للخارج لتصريف الكوندنسيت.' },
  { q: 'هل يمكن عمل فتحات متعددة لمشروع كبير في يوم واحد؟', a: 'نعم. في مشاريع التمديدات الكهربائية الكبيرة (شبكات، مكاتب، مصانع) ننجز عشرات الفتحات في يوم واحد. تواصل معنا لنُحدد الجدول الزمني المناسب.' },
];

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_12px_50px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-6">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-700 leading-9">{children}</div>
    </section>
  );
}

export default function ElectricalHolesPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      name: BRAND, url: DOMAIN, telephone: PHONE_INT,
      description: 'كور برو متخصص في عمل فتحات التمديدات الكهربائية وكابلات الشبكات والكاميرات في الجدران الخرسانية.',
      address: { '@type': 'PostalAddress', addressCountry: 'EG', addressLocality: 'Cairo' },
      priceRange: '$$', openingHours: 'Mo-Su 00:00-23:59',
    },
    {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'عمل فتحات التمديدات الكهربائية والكابلات بالكور',
      serviceType: 'Electrical Conduit Core Drilling',
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
        { '@type': 'ListItem', position: 2, name: 'فتحات التمديدات الكهربائية', item: CANONICAL },
      ],
    },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(234,179,8,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm text-yellow-800 shadow-sm mb-6">
            <Zap className="h-4 w-4 text-yellow-600" />
            <span>فتحات الكوندويت · كابلات الشبكات · كاميرات مراقبة · مكيفات ميني سبليت</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 border-r-8 border-yellow-500 pr-4">
                فتحات التمديدات الكهربائية في الخرسانة — {PHONE}
              </h1>
              <div className="mt-5 text-slate-800 leading-9 space-y-4 text-lg">
                <p>
                  <strong>كور برو - Core Pro</strong> متخصص في <strong>عمل فتحات التمديدات الكهربائية</strong> في الجدران والأسقف الخرسانية
                  بالكور الألماسي لتمرير <strong>كوندويت الكهرباء</strong> وكابلات الشبكة والإنترنت وكاميرات المراقبة وأنابيب مكيفات الميني سبليت.
                </p>
                <p>
                  نستخدم <strong>الكاشف الإلكتروني</strong> قبل كل حفرة لتحديد مسار الأسلاك الموجودة وتفاديها بأمان كامل.
                  الفتحة بالقطر الدقيق — لا أكبر ولا أصغر.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {['كاشف إلكتروني', 'قطر دقيق', 'آمن 100%'].map(s => (
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
                <h3 className="text-xl font-black mb-3">معاينة مجانية + سعر فوري</h3>
                <p className="text-slate-300 text-sm mb-4">أخبرنا بعدد الفتحات وأقطار الكوندويت المطلوبة</p>
                <a href={`tel:${PHONE}`} className="block text-center py-4 rounded-2xl bg-yellow-500 text-slate-900 font-black text-xl hover:bg-yellow-400 transition mb-3">{PHONE}</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block text-center py-4 rounded-2xl bg-emerald-600 text-white font-black text-lg hover:bg-emerald-700 transition">واتساب مباشر</a>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Zap, c: 'text-yellow-600', t: 'كاشف إلكتروني قبل كل حفرة' },
                  { icon: Settings, c: 'text-sky-600', t: 'نعمل مع فني الكهرباء' },
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

        <Section id="services" title="أنواع فتحات التمديدات الكهربائية التي نعملها">
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              { t: 'فتحات الكوندويت الكهربائي', d: 'فتحات لأنابيب الكوندويت (16، 20، 25، 32 ملم) في الجدران الخرسانية لمسار الأسلاك الكهربائية.' },
              { t: 'فتحات مكيفات الميني سبليت', d: 'فتحة تمرير أنابيب الفريون وكيبل الكهرباء من الوحدة الداخلية للخارجية. قطر 7-8 سم بزاوية ميل للصرف.' },
              { t: 'فتحات كابلات الإنترنت والشبكات', d: 'فتحات صغيرة لكابلات Cat6/Cat7 وكابلات الإنترنت الضوئي والتلفزيون بين الغرف والطوابق.' },
              { t: 'فتحات كاميرات المراقبة', d: 'فتحات الجدران والأسقف لتمرير كابلات الكاميرات الأمنية والمراقبة IP وCoaxial.' },
              { t: 'فتحات كيبل الكهرباء الرئيسي', d: 'إدخال كيبل الكهرباء الرئيسي من اللوحة الخارجية للداخل في الفيلات والمنشآت التجارية.' },
              { t: 'فتحات أنظمة الإنذار والنداء', d: 'فتحات أنظمة إنذار الحريق وأنظمة الاستدعاء وأنظمة التحكم في الوصول في المباني.' },
            ].map(x => (
              <div key={x.t} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <CheckCircle2 className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-slate-900">{x.t}</div>
                  <p className="mt-1 text-slate-600 text-sm leading-7">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="safety" title="بروتوكول السلامة: الكاشف الإلكتروني أولاً — دائماً">
          <p>
            العمل بالقرب من التمديدات الكهربائية يتطلب أعلى معايير السلامة. لهذا السبب، نتبع بروتوكولاً صارماً في كل موقع:
          </p>
          <div className="not-prose space-y-4 mt-6">
            {[
              { n: '1', t: 'الفصل الكهربائي (إذا لزم)', d: 'نطلب من فني الكهرباء فصل التيار عن القاطع المناسب قبل البدء في أي جدار يحتوي على أسلاك.' },
              { n: '2', t: 'الكشف الإلكتروني عن الأسلاك', d: 'نستخدم كاشف الأسلاك والمعادن الإلكتروني لرسم خريطة لمسار الأسلاك الموجودة في الجدار.' },
              { n: '3', t: 'اختيار موضع الفتحة بأمان', d: 'نختار موضع الفتحة بعيداً عن مسار الأسلاك المكتشفة. في الجدران المعقدة نُحدد أكثر من موضع بديل.' },
              { n: '4', t: 'الحفر الآمن والمدروس', d: 'نحفر بسرعة بطيئة وضغط منخفض في المناطق الحساسة. نتوقف فورًا عند أي مقاومة غير متوقعة.' },
            ].map(step => (
              <div key={step.n} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-500 font-black text-slate-900 text-sm">{step.n}</div>
                <div>
                  <div className="font-black text-slate-900 mb-1">{step.t}</div>
                  <p className="text-slate-600 text-sm leading-7">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" title="الأسئلة الشائعة عن فتحات التمديدات الكهربائية بالكور">
          <div className="space-y-4 not-prose">
            {FAQ.map((item, i) => (
              <details key={i} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm hover:border-yellow-300 transition">
                <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-yellow-500 group-open:rotate-180 transition p-1 bg-yellow-50 rounded-full shrink-0 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </span>
                </summary>
                <p className="mt-5 text-slate-700 leading-9 text-sm bg-slate-50 p-5 rounded-2xl border-r-4 border-yellow-400">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-10">
          <h2 className="text-2xl font-black text-slate-900 mb-6">خدمات مرتبطة</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { href: '/core', t: 'تخريم الخرسانة بالكور', d: 'جميع أنواع فتحات الكور.' },
              { href: '/ceiling-holes', t: 'فتحات الأسقف', d: 'فتحات أسقف التكييف والتهوية.' },
              { href: '/sewer-holes', t: 'فتحات الصرف والسباكة', d: 'فتحات الصرف الصحي وتمديدات المياه.' },
              { href: '/gas-holes', t: 'فتحات الغاز الطبيعي', d: 'فتحات مواسير الغاز المعتمدة.' },
            ].map(s => (
              <Link key={s.href} href={s.href} className="flex gap-4 rounded-2xl border border-black/10 bg-white p-5 hover:border-yellow-300 transition">
                <div>
                  <div className="font-black text-slate-900">{s.t}</div>
                  <p className="text-slate-500 text-sm mt-1">{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.8),transparent_70%)]" />
          <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-4">جاهز لتمديد الكهرباء والكابلات؟</h2>
              <p className="text-slate-300 text-lg max-w-xl">نصل إليك في نفس اليوم وننجز الفتحات بكل أمان.</p>
              <div className="mt-3 text-2xl font-black text-yellow-400">{PHONE}</div>
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
