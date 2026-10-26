import React from 'react';
import ServiceContents from './ServiceContents';
import applications from '../data/service-applications.json';

type Application = (typeof applications)[keyof typeof applications];

export default function ApplicationServicePage({ service }: { service: Application }) {
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', name: service.title, url: `https://corepro-eg.com/${service.slug}`, description: service.description, provider: { '@type': 'Organization', '@id': 'https://corepro-eg.com/#organization', name: 'كور برو - Core Pro', telephone: '+201021507462' } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faq.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ];
  return <div className="bg-slate-50 pb-20" dir="rtl"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><div className="mx-auto max-w-5xl px-4">
    <header className="py-10"><p className="font-bold text-emerald-800">تحديد المقاسات ونطاق الخدمة قبل الحجز</p><h1 className="mt-4 text-3xl md:text-4xl font-black leading-tight text-slate-900">{service.title} - 01021507462</h1><p className="mt-5 text-lg leading-9 text-slate-700">{service.intro}</p><a href={`/${service.parent}`} className="mt-4 inline-block text-emerald-800 underline">{service.parentLabel}</a></header>
    <ServiceContents items={[...service.sections.map(section => ({ id: section.id, label: section.title })), { id: 'service-request', label: 'المعلومات المطلوبة للتقدير' }, { id: 'faq', label: 'الأسئلة الشائعة' }]} />
    {service.sections.map(section => <section key={section.id} id={section.id} className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9"><h2 className="text-2xl font-black text-slate-900">{section.title}</h2><p className="mt-4 leading-9 text-slate-700">{section.text}</p></section>)}
    <section id="service-request" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9"><h2 className="text-2xl font-black text-slate-900">جهز بيانات العمل قبل طلب التقدير</h2><ul className="mt-4 list-disc pr-5 space-y-3 leading-8 text-slate-700"><li>نوع العنصر ومقاس الفتحة وسماكته وعدد البنود.</li><li>صور موضع العمل والخدمات المحيطة ومخطط إن توفر.</li><li>عنوان الموقع والطابق ومواعيد الدخول وإمكانية التحميل.</li><li>الأعمال المطلوب شمولها، مثل التدعيم أو الرفع أو نقل المخلفات أو تركيب ملحقات.</li></ul><p className="mt-4 leading-8">راجع <a href="/prices" className="text-emerald-800 underline">عوامل تحديد تكلفة القص والتخريم</a>، وتصفح <a href="/projects" className="text-emerald-800 underline">صور الأعمال المعروضة في الموقع</a>.</p><div className="mt-5 flex flex-wrap gap-3"><a href="https://wa.me/201021507462" className="rounded-2xl bg-emerald-700 px-6 py-3 font-bold text-white">أرسل صور ومقاسات العمل</a><a href="tel:+201021507462" className="rounded-2xl border border-emerald-700 px-6 py-3 font-bold text-emerald-900">اتصل 01021507462</a></div></section>
    <section id="faq" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9"><h2 className="text-2xl font-black text-slate-900">أسئلة قبل التنفيذ</h2><div className="mt-5 space-y-4">{service.faq.map(item => <details key={item.q} className="rounded-2xl border border-slate-200 p-5"><summary className="font-bold cursor-pointer">{item.q}</summary><p className="mt-3 leading-8 text-slate-700">{item.a}</p></details>)}</div></section>
  </div></div>;
}
