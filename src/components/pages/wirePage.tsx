import React from 'react';
import ServiceContents from '../ServiceContents';

const PHONE = '01021507462';
const CANONICAL = 'https://corepro-eg.com/wire';
const faq = [
  { q: 'متى يكون قص الخرسانة بالواير مناسباً؟', a: 'قد يناسب الواير بعض الكتل والعناصر السميكة أو الأشكال التي يصعب الوصول إليها بمنشار قرصي. تُراجع إمكانية تمرير الواير وتثبيت المعدة وأبعاد العنصر وخطة الرفع قبل اختيار الأسلوب.' },
  { q: 'هل توجد سماكة قص ثابتة أو غير محدودة؟', a: 'لا نؤكد إمكان قص أي سماكة من دون مراجعة المشروع. تعتمد الإمكانية على أبعاد العنصر والتسليح ومساحة التثبيت ومسار الواير وتجهيزات الوصول ومناولة الجزء المفصول.' },
  { q: 'هل القص بالواير صامت أو خالٍ من المخلفات؟', a: 'يصدر عن المعدة صوت، ويحتاج كثير من أعمال القطع إلى تبريد بالماء وتجميع للمخلفات. تختلف مستويات الصوت والاهتزاز وظروف الحماية بحسب الموقع والمعدة وطريقة التشغيل.' },
  { q: 'هل يمكن قص قواعد أو أجزاء من كوبري؟', a: 'هذا تعديل إنشائي يحتاج إلى تصميم واعتماد من المهندس المسؤول وخطة للتدعيم وتسلسل القطع والرفع. لا يبدأ العمل اعتماداً على قدرة المعدة وحدها.' },
  { q: 'كيف أحصل على تكلفة قص بالواير؟', a: 'أرسل المخططات وصور العنصر وأبعاده وسماكته وموقعه، مع بيان طريقة الوصول وما إذا كان المطلوب قصاً فقط أو قصاً ورفعاً ونقلاً. يُحدد نطاق السعر بعد مراجعة هذه التفاصيل.' },
];

export default function WirePage() {
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', name: 'قص الخرسانة بالواير الماسي', url: CANONICAL, description: 'قص العناصر والكتل الخرسانية بالواير الماسي بعد مراجعة أبعاد العنصر وإمكانية الوصول وخطة فصل الجزء ورفعه.', provider: { '@type': 'Organization', '@id': 'https://corepro-eg.com/#organization', name: 'كور برو - Core Pro', telephone: '+201021507462' }, areaServed: { '@type': 'Country', name: 'Egypt' } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ];
  return <div className="bg-slate-50 pb-20" dir="rtl">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="mx-auto max-w-6xl px-4">
      <header className="grid gap-8 py-10 lg:grid-cols-2 lg:items-center">
        <div><p className="font-bold text-emerald-800">واير تقطيع خرسانة · مراجعة المشروع قبل التنفيذ</p>
          <h1 className="mt-4 text-3xl md:text-5xl leading-tight font-black text-slate-900">قص الخرسانة بالواير الماسي للكباري والقواعد - 01021507462</h1>
          <p className="mt-5 leading-9 text-lg text-slate-700">نراجع طلبات قص الخرسانة المسلحة بالواير الماسي للكتل والقواعد والعناصر التي تتطلب أسلوب قطع مناسباً لأبعادها. أرسل مخطط العنصر وصوره ومقاساته وموقعه لتقييم مسار الواير ونقاط التثبيت وطريقة التعامل مع الجزء المفصول.</p>
          <div className="mt-6 flex flex-wrap gap-3"><a href="https://wa.me/201021507462" className="rounded-2xl bg-emerald-700 px-6 py-3 font-bold text-white">أرسل مخطط وصور المشروع</a><a href={`tel:${PHONE}`} className="rounded-2xl border border-emerald-700 px-6 py-3 font-bold text-emerald-900">اتصل {PHONE}</a></div>
        </div>
        <img src="/images/wire/wire-takteaa-kharsana.webp" width="800" height="800" loading="eager" fetchPriority="high" alt="معدات قص الخرسانة بالواير الماسي" className="w-full rounded-3xl" />
      </header>
      <ServiceContents items={[{ id: 'wire-method', label: 'كيف يعمل الواير الماسي؟' }, { id: 'wire-applications', label: 'حالات الاستخدام وحدود التنفيذ' }, { id: 'wire-comparison', label: 'الواير أم المنشار أم الكور؟' }, { id: 'wire-process', label: 'تجهيز الموقع وخطوات العمل' }, { id: 'wire-price', label: 'عوامل تكلفة القص' }, { id: 'faq', label: 'الأسئلة الشائعة' }]} />
      <section id="wire-method" className="mt-8 rounded-3xl bg-white border border-slate-200 p-6 md:p-9"><h2 className="text-2xl font-black">كيف يعمل واير تقطيع الخرسانة؟</h2><p className="mt-4 leading-9 text-slate-700">يعتمد القص بالواير الماسي على سلك قطع يمر حول الجزء المراد فصله أو عبر مسار مُجهز له، وتوجهه بكرات مرتبطة بمعدة التشغيل. تتحدد طريقة تمريره وتثبيت المعدة وتسلسل القطع بعد مراجعة شكل العنصر والفراغ المتاح حوله. قد يحتاج المشروع إلى فتحات تمهيدية أو تجهيزات وصول قبل التشغيل.</p></section>
      <section id="wire-applications" className="mt-8 rounded-3xl bg-white border border-slate-200 p-6 md:p-9"><h2 className="text-2xl font-black">حالات استخدام القص بالواير الماسي</h2><div className="mt-5 grid gap-5 md:grid-cols-2">{[
        { title: 'فصل قواعد أو كتل خرسانية', text: 'يُراجع حجم الجزء ووزنه ومساحة إخراجه ومعدات المناولة قبل تحديد مسارات القطع. وجود كتلة كبيرة لا يعني أن الواير هو الاختيار الوحيد أو المتاح في كل موضع.' },
        { title: 'تعديل عناصر في جسر أو كوبري', text: 'يخضع أي قص إنشائي لخطة يعتمدها المهندس المسؤول، تشمل التدعيم وتسلسل فصل الأجزاء ومناطق العزل والرفع. يُحدد دور مقاول القص ضمن هذه الخطة.' },
        { title: 'أجزاء يصعب الوصول إليها بالمنشار', text: 'قد تساعد مرونة مسار الواير في بعض المواضع، لكن يلزم التحقق من مساحة تثبيت البكرات والمعدة وإمكانية تمرير السلك وعزل منطقة التشغيل.' },
        { title: 'إزالة قواعد معدات قائمة', text: 'أرسل صور المنطقة والخدمات المتصلة بها وحالة تشغيل المكان. تتطلب بعض الأعمال تنسيق فصل الخدمات وعزل منطقة العمل قبل التجهيز.' },
      ].map(item => <div key={item.title}><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-2 leading-8 text-slate-700">{item.text}</p></div>)}</div></section>
      <section id="wire-comparison" className="mt-8 rounded-3xl bg-white border border-slate-200 p-6 md:p-9"><h2 className="text-2xl font-black">متى تختار الواير مقارنة بالمنشار والكور؟</h2><ul className="mt-4 space-y-4 leading-8 text-slate-700"><li><a href="/core" className="text-emerald-800 underline">تخريم الكور</a>: للفتحات الدائرية لتمرير المواسير وخطوط الخدمات بحسب القطر المطلوب.</li><li><a href="/saw" className="text-emerald-800 underline">قص الخرسانة بالمنشار</a>: لخطوط القطع المستقيمة وفتحات الأبواب والنوافذ عندما تلائم أبعاد المعدة ومساحة التثبيت الموقع.</li><li>الواير الماسي: يُقيّم لبعض الكتل والعناصر الكبيرة أو مسارات القطع التي لا يلائمها المنشار القرصي؛ يتوقف الاختيار على مراجعة العنصر والتجهيزات المطلوبة.</li></ul></section>
      <section id="wire-process" className="mt-8 rounded-3xl bg-white border border-slate-200 p-6 md:p-9"><h2 className="text-2xl font-black">التجهيز قبل قص الخرسانة بالواير</h2><ol className="mt-4 list-decimal pr-6 space-y-3 leading-9 text-slate-700"><li>استلام المخططات وأبعاد العنصر ومراجعة اعتماد المهندس للتعديل الإنشائي.</li><li>تحديد مسار السلك ونقاط التثبيت ومنطقة عزل العمل وإمكانية الوصول.</li><li>مراجعة تثبيت الجزء المفصول وتدعيمه وخطة الرفع أو التجزئة قبل نهاية القطع.</li><li>تجهيز احتواء مياه التبريد والمخلفات وتحديد مسؤولية نقلها حسب الاتفاق.</li><li>تنفيذ مسارات القطع المعتمدة ومناولة الأجزاء وفق خطة الموقع.</li></ol></section>
      <section id="wire-price" className="mt-8 rounded-3xl bg-white border border-slate-200 p-6 md:p-9"><h2 className="text-2xl font-black">ما الذي يحدد تكلفة قص الخرسانة بالواير؟</h2><p className="mt-4 leading-9 text-slate-700">تشمل عوامل التقدير أبعاد القطع وسماكة العنصر والتسليح وطريقة تمرير الواير وتثبيت المعدة. تؤثر أيضاً تجهيزات الوصول والتدعيم والرفع وعدد الأجزاء وموقع المشروع. حدد إن كان المطلوب قصاً فقط أو قصاً ومناولةً ونقلاً حتى يكون نطاق عرض العمل واضحاً.</p><a href="/prices#wire-pricing" className="mt-4 inline-block text-emerald-800 underline">تفاصيل عوامل تسعير أعمال الواير</a></section>
      <section id="faq" className="mt-8 rounded-3xl bg-white border border-slate-200 p-6 md:p-9"><h2 className="text-2xl font-black">أسئلة عن قص الخرسانة بالواير</h2><div className="mt-5 space-y-4">{faq.map(item => <details key={item.q} className="rounded-2xl border border-slate-200 p-5"><summary className="font-bold cursor-pointer">{item.q}</summary><p className="mt-3 leading-8 text-slate-700">{item.a}</p></details>)}</div></section>
    </div>
  </div>;
}
