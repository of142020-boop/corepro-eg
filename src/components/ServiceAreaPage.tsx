import React from 'react';
import ServiceContents from './ServiceContents';
import areas from '../data/service-areas.json';

type Area = (typeof areas)[keyof typeof areas];

export default function ServiceAreaPage({ area }: { area: Area }) {
  const phoneInt = `+20${area.phone.slice(1)}`;
  const whatsapp = `https://wa.me/${phoneInt.slice(1)}`;
  const canonical = `https://corepro-eg.com/${area.slug}`;
  const faq = [
    { q: `كيف أطلب صنايعي كور أو قص خرسانة في ${area.name}؟`, a: `أرسل العنوان ونقطة الموقع وصور موضع العمل ومقاسات الفتحات أو طول القطع وسماكة العنصر. نراجع الطلب لتأكيد التغطية ومتطلبات المعاينة والتجهيز قبل الحجز على ${area.phone}.` },
    { q: 'ما العوامل التي تحدد تكلفة العمل؟', a: 'يتأثر التقدير بقطر الفتحات أو طول القطع وعمقه ونوع العنصر وعدد البنود. وتؤثر إمكانية الوصول والتثبيت ومناولة القطع وحماية التشطيبات والانتقال في نطاق العمل والتكلفة.' },
    { q: 'هل يمكن القص في بلاطة أو كمرة أو جدار حامل؟', a: 'يتطلب تعديل العنصر الإنشائي مراجعة المخططات وموافقة المهندس المسؤول وخطة للتدعيم والرفع عند الحاجة. لا يُقطع التسليح أو يُغير موضع الفتحة من دون توجيه هندسي.' },
    { q: 'هل يسبب الكور أو المنشار صوتاً أو مياه؟', a: 'يصدر عن تشغيل المعدات صوت، ويُستخدم الماء في كثير من أعمال التبريد. تُراجع وسيلة احتواء المياه والمخلفات وحماية المناطق المحيطة بحسب حالة الموقع، ولا يُحدد مدى ملاءمة العمل في مكان مأهول قبل تقييمه.' },
  ];
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'Service', '@id': `${canonical}#service`, name: area.title, description: area.intro, url: canonical, serviceType: 'Concrete core drilling and concrete saw cutting', provider: { '@type': 'Organization', '@id': 'https://corepro-eg.com/#organization', name: 'كور برو - Core Pro', url: 'https://corepro-eg.com', telephone: phoneInt }, areaServed: { '@type': 'Place', name: area.name } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ];
  return (
    <div dir="rtl" className="bg-slate-50 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div className="mx-auto max-w-6xl px-4">
        <header className="grid gap-8 py-8 md:py-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold text-emerald-800">خدمات القص والتخريم · تأكيد التغطية حسب العنوان</p>
            <h1 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 leading-tight">{area.title} - {area.phone}</h1>
            <p className="mt-5 text-lg leading-9 text-slate-700">{area.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsapp} className="rounded-2xl bg-emerald-700 px-6 py-3 font-bold text-white">أرسل صور ومقاسات العمل</a>
              <a href={`tel:${phoneInt}`} className="rounded-2xl border border-emerald-700 px-6 py-3 font-bold text-emerald-900">اتصل {area.phone}</a>
            </div>
          </div>
          <img src="/images/core/fatahat-core-beton-1.webp" width="800" height="533" fetchPriority="high" loading="eager" alt="ماكينة تخريم كور لعمل فتحة في الخرسانة" className="w-full rounded-3xl border border-slate-200" />
        </header>
        <ServiceContents items={[{ id: 'local-work', label: `تجهيز العمل في ${area.name}` }, { id: 'service-choice', label: 'الكور أم المنشار؟' }, { id: 'quote', label: 'التكلفة والمعلومات المطلوبة' }, { id: 'coverage', label: 'المناطق وتأكيد الوصول' }, { id: 'faq', label: 'الأسئلة الشائعة' }]} />
        <section id="local-work" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">تجهيز أعمال القص والتخريم في {area.name}</h2>
          <div className="mt-6 space-y-7">{area.topics.map(topic => <div key={topic.title}><h3 className="text-xl font-bold text-slate-900">{topic.title}</h3><p className="mt-2 leading-9 text-slate-700">{topic.text}</p></div>)}</div>
        </section>
        <section id="service-choice" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">أي خدمة تناسب الفتحة المطلوبة؟</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div><h3 className="font-bold text-lg">تخريم الخرسانة بالكور</h3><p className="mt-2 leading-8 text-slate-700">للفتحات الدائرية التي تمر منها مواسير وخطوط الخدمات. يُراجع القطر مع فني التمديدات، ثم تُحدد البنطة وطريقة تثبيت الماكينة بحسب الموقع.</p><a href="/core" className="mt-3 inline-block text-emerald-800 underline">تفاصيل خدمة صنايعي كور وأقطار الفتحات</a></div>
            <div><h3 className="font-bold text-lg">قص الخرسانة بالمنشار</h3><p className="mt-2 leading-8 text-slate-700">لخطوط القطع المستقيمة وفتحات الأبواب والنوافذ وتعديل أبعاد الفتحات. تُراجع سماكة العنصر ومسار القطع وخطة فصل الجزء ورفعه قبل التشغيل.</p><a href="/saw" className="mt-3 inline-block text-emerald-800 underline">مراحل قص الجدران والأسقف بالمنشار</a></div>
          </div>
          <p className="mt-5 leading-8 text-slate-700">للكتل أو العناصر التي تستلزم أسلوباً مختلفاً، نراجع ملاءمة <a href="/wire" className="text-emerald-800 underline">قص الخرسانة بالواير الماسي</a> بحسب أبعادها وإمكانية الوصول إليها.</p>
        </section>
        <section id="quote" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">تكلفة الكور والقص والمعلومات اللازمة للتقدير</h2>
          <p className="mt-4 leading-9 text-slate-700">لا يتحدد السعر من اسم المنطقة أو قطر الفتحة فقط. أرسل المقاسات والسماكات والكميات وصور المكان، ووضح الطابق وإمكانية التحميل والتثبيت. إذا شمل الطلب رفع الجزء الخرساني أو نقله أو التخلص من المخلفات، يُحدد ذلك ضمن نطاق الاتفاق.</p>
          <a href="/prices" className="mt-4 inline-block text-emerald-800 underline">عوامل تسعير تخريم الكور وقص الخرسانة</a>
        </section>
        <section id="coverage" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">تأكيد الوصول إلى موقعك</h2>
          <p className="mt-4 leading-8 text-slate-700">حدد العنوان التفصيلي ونقطة الموقع عند الطلب؛ يُؤكد توفر الخدمة والموعد بعد مراجعة نطاق العمل وترتيبات الانتقال.</p>
          <ul className="mt-4 flex flex-wrap gap-3">{area.areas.map(name => <li key={name} className="rounded-xl bg-emerald-50 px-4 py-2 text-emerald-900">{name}</li>)}</ul>
          <p className="mt-5 text-sm text-slate-700">صفحات مناطق أخرى: {area.related.map(key => { const related = areas[key as keyof typeof areas]; return <a key={key} href={`/${related.slug}`} className="mx-2 inline-block leading-8 text-emerald-800 underline">{related.name}</a>; })}</p>
          <a href="/projects" className="mt-4 inline-block text-emerald-800 underline">تصفح صور الأعمال المعروضة في الموقع</a>
        </section>
        <section id="faq" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
          <h2 className="text-2xl font-black text-slate-900">أسئلة قبل طلب الخدمة في {area.name}</h2>
          <div className="mt-5 space-y-4">{faq.map(item => <details key={item.q} className="rounded-2xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-slate-900">{item.q}</summary><p className="mt-3 leading-8 text-slate-700">{item.a}</p></details>)}</div>
        </section>
      </div>
    </div>
  );
}
