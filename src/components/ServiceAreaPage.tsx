import ServiceContents from './ServiceContents';
import areas from '../data/service-areas.json';

type Area = (typeof areas)[keyof typeof areas];

export default function ServiceAreaPage({ area }: { area: Area }) {
  const phoneInt = `+20${area.phone.slice(1)}`;
  const whatsapp = `https://wa.me/${phoneInt.slice(1)}`;
  const canonical = `https://corepro-eg.com/${area.slug}`;
  const faq = area.faq;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: area.title,
      description: area.intro,
      url: canonical,
      serviceType: 'Concrete core drilling and concrete saw cutting',
      provider: { '@id': 'https://corepro-eg.com/#organization' },
      areaServed: { '@type': 'Place', name: area.name },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: canonical,
        servicePhone: {
          '@type': 'ContactPoint',
          telephone: phoneInt,
          contactType: `حجز خدمات ${area.name}`,
          availableLanguage: 'Arabic',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];
  return (
    <div dir="rtl" className="bg-slate-50 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div className="mx-auto max-w-6xl px-4">
        <header className="grid gap-8 py-8 md:py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold text-emerald-800">خدمات القص والتخريم في {area.name} · تأكيد التغطية حسب العنوان</p>
            <h1 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 leading-tight">{area.title} - {area.phone}</h1>
            <p className="mt-5 text-lg leading-9 text-slate-700">{area.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-emerald-700 px-6 py-3 font-bold text-white hover:bg-emerald-800 transition">أرسل صور ومقاسات العمل</a>
              <a href={`tel:${phoneInt}`} className="rounded-2xl border border-emerald-700 px-6 py-3 font-bold text-emerald-900 hover:bg-emerald-50 transition">اتصل <bdi>{area.phone}</bdi></a>
            </div>
          </div>
          <img
            src={area.heroImage}
            width="800"
            height="600"
            fetchPriority="high"
            loading="eager"
            alt={area.heroAlt}
            className="w-full aspect-[4/3] object-cover rounded-3xl border border-slate-200"
          />
        </header>
        <ServiceContents
          items={[
            { id: 'local-work', label: `تجهيز العمل في ${area.name}` },
            { id: 'service-choice', label: 'الكور أم المنشار؟' },
            { id: 'quote', label: 'التكلفة والمعلومات المطلوبة' },
            { id: 'coverage', label: 'المناطق وتأكيد الوصول' },
            { id: 'faq', label: 'الأسئلة الشائعة' },
          ]}
        />
        {area.slug === 'concrete-cutting-alexandria' && (
          <aside className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h2 className="text-xl font-bold">تحتاج تركيب شفاط أو بلاور في الإسكندرية؟</h2>
            <p className="mt-3 leading-8 text-slate-700">
              للتأسيس والتركيب والدكت وهود المطاعم راجع{' '}
              <a className="font-bold text-sky-800 underline" href="/hoods-blowers-alexandria">
                خدمات الشفاطات والبلاورات في الإسكندرية
              </a>
              . هذه الصفحة مخصصة لأعمال فتحات الكور وقص الخرسانة.
            </p>
          </aside>
        )}
        <section id="local-work" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">تجهيز أعمال القص والتخريم في {area.name}</h2>
          <div className="mt-6 space-y-7">
            {area.topics.map((topic) => (
              <div key={topic.title}>
                <h3 className="text-xl font-bold text-slate-900">{topic.title}</h3>
                <p className="mt-2 leading-9 text-slate-700">{topic.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="service-choice" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">{area.serviceChoice.heading}</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-lg">تخريم الخرسانة بالكور في {area.name}</h3>
              <p className="mt-2 leading-8 text-slate-700">{area.serviceChoice.coreText}</p>
              <a href="/core" className="mt-3 inline-block text-emerald-800 underline">تفاصيل خدمة صنايعي كور وأقطار الفتحات</a>
            </div>
            <div>
              <h3 className="font-bold text-lg">قص الخرسانة بالمنشار في {area.name}</h3>
              <p className="mt-2 leading-8 text-slate-700">{area.serviceChoice.sawText}</p>
              <a href="/saw" className="mt-3 inline-block text-emerald-800 underline">مراحل قص الجدران والأسقف بالمنشار</a>
            </div>
          </div>
          <p className="mt-5 leading-8 text-slate-700">
            {area.serviceChoice.wireNote}{' '}
            <a href="/wire" className="text-emerald-800 underline">راجع متطلبات القص بالواير الماسي</a>.
          </p>
        </section>
        <section id="quote" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">تكلفة الكور والقص في {area.name}</h2>
          <p className="mt-4 leading-9 text-slate-700">{area.pricingNote}</p>
          <a href="/prices" className="mt-4 inline-block text-emerald-800 underline">دليل عوامل تسعير تخريم الكور وقص الخرسانة</a>
        </section>
        <section id="coverage" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">تأكيد الوصول إلى موقعك في {area.name}</h2>
          <p className="mt-4 leading-8 text-slate-700">{area.coverageNote}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {area.areas.map((name) => (
              <li key={name} className="rounded-xl bg-emerald-50 px-4 py-2 text-emerald-900 font-semibold">{name}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-700">
            صفحات مناطق أخرى:{' '}
            {area.related.map((key) => {
              const related = areas[key as keyof typeof areas];
              return (
                <a key={key} href={`/${related.slug}`} className="mx-2 inline-block leading-8 text-emerald-800 underline">
                  {related.name}
                </a>
              );
            })}
          </p>
          <a href="/projects" className="mt-4 inline-block text-emerald-800 underline">تصفح صور سابقة الأعمال في الموقع</a>
        </section>
        <section id="faq" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">أسئلة شائعة قبل طلب الخدمة في {area.name}</h2>
          <div className="mt-5 space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="rounded-2xl border border-slate-200 p-5">
                <summary className="cursor-pointer font-bold text-slate-900">{item.q}</summary>
                <p className="mt-3 leading-8 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
