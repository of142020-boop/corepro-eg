import React, { useState } from 'react';
import { BookOpen, Search, Book, PenTool, Hash, Info, FileText } from 'lucide-react';

const BRAND = "كور برو - Core Pro";
const DOMAIN = "https://corepro-eg.com";
const CANONICAL = `${DOMAIN}/glossary`;
const PHONE = "01021507462";
const WHATSAPP = "https://wa.me/201021507462";

const terms = [
  {
    term: "الكور دريل (Core Drill)",
    category: "معدات",
    synonyms: ["ماكينة كور", "حفار خرسانة أسطواني"],
    description: "ماكينة متخصصة مزودة بأسطوانة معدنية (بنطة) مجوفة تنتهي بأسنان من الألماس الصناعي. تستخدم لعمل ثقوب دائرية دقيقة جداً في الخرسانة المسلحة دون إحداث أي اهتزازات في المبنى، وتستخدم عادة لفتحات السباكة، الغاز، والتكييف."
  },
  {
    term: "الواير الماسي (Diamond Wire)",
    category: "معدات قص",
    synonyms: ["سلك قص الخرسانة", "المنشار السلكي"],
    description: "سلك صلب (واير) يحتوي على خرزات صغيرة مغطاة بالألماس الصناعي. يتم تمرير هذا السلك حول الكتل الخرسانية الضخمة وتدويره بسرعة عالية لقص السماكات غير المحدودة كالكباري والقواعد الخرسانية الضخمة، ويتميز بالقص الصامت والسريع."
  },
  {
    term: "منشار السكة (Track Saw)",
    category: "معدات قص",
    synonyms: ["منشار جداري", "Wall Saw"],
    description: "آلة قص خرسانة تتحرك على سكة معدنية يتم تثبيتها مسبقاً على الجدار باستخدام جوايط صلبة. تُستخدم لقص الجدران بشكل مستقيم لفتح الأبواب والنوافذ وتصل أعماق القص بها إلى 70 سم، معتمدة على التبريد المائي لمنع تطاير الغبار."
  },
  {
    term: "زراعة الأشاير (Rebar Doweling)",
    category: "تقنيات إنشائية",
    synonyms: ["تزريع الحديد", "زرع أشاير"],
    description: "عملية هندسية يتم فيها ثقب الخرسانة القديمة، وتنظيف الثقب، ثم حقن مادة كيميائية (إيبوكسي) وغرس قضيب حديد تسليح جديد (إشارة) لربط الخرسانة القديمة بأخرى جديدة كالأعمدة الإضافية أو السلالم."
  },
  {
    term: "مادة الإيبوكسي (Epoxy Resin)",
    category: "مواد كيميائية",
    synonyms: ["مادة التزريع", "الكيميكال"],
    description: "مادة كيميائية لاصقة ثنائية المركب سريعة الجفاف وتتمتع بقوة تماسك تفوق قوة الخرسانة نفسها. تُستخدم لزراعة وتثبيت حديد التسليح داخل الخرسانة لتتحمل الأوزان والشدادات بأمان تام."
  },
  {
    term: "القص والتخريم المائي (Wet Cutting)",
    category: "تقنيات",
    synonyms: ["القص بالتبريد", "تخريم مائي"],
    description: "تقنية تعتمد على ضخ المياه بشكل مستمر على شفرات مناشير الخرسانة وأسطوانات الكور أثناء عملية الحفر. فائدتها مضاعفة: تبريد الشفرات الماسية ومنع التلف، وفي نفس الوقت منع تطاير الغبار والأتربة السامة نهائياً (بيئة عمل نظيفة)."
  },
  {
    term: "شفاط بلت إن (Built-in Hood)",
    category: "تهوية",
    synonyms: ["الشفاط المسطح", "شفاط الفلتر الكربوني"],
    description: "نوع من أنواع شفاطات المطبخ الحديثة التي يتم دمجها داخل الخزائن العلوية. تعمل بنظام الفلاتر الكربونية لتنقية الهواء وإعادته للداخل بدون الحاجة لعمل فتحة دائرية في الجدار الخارجي كشفاطات المدخنة."
  },
  {
    term: "الجوايط الصلب (Anchor Bolts)",
    category: "تثبيت",
    synonyms: ["مسامير التثبيت", "أكمون"],
    description: "مسامير معدنية ضخمة وقوية جداً يتم حفر ثقوب لها في الخرسانة لتثبيت سكك مناشير القص أو قواعد ماكينات الكور الثقيلة في الجدران أثناء العمل، لضمان استقرار המعدات ودقتها العالية."
  }
];

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = terms.filter(t => 
    t.term.includes(searchTerm) || 
    t.description.includes(searchTerm) || 
    t.synonyms.some(s => s.includes(searchTerm))
  );

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "دليل مصطلحات الخرسانة", item: CANONICAL },
    ],
  };

  const jsonLdDefinedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": CANONICAL,
    name: "دليل مصطلحات الخرسانة والتخريم",
    description: "قاموس شامل يوضح المصطلحات الهندسية والفنية المستخدمة في مجال قص وتخريم الخرسانة المسلحة بالكور والواير الماسي.",
    hasDefinedTerm: terms.map(t => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.description,
      inDefinedTermSet: CANONICAL,
    }))
  };

  const jsonLdSpeakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: CANONICAL,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".term-title", ".term-desc"],
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdBreadcrumb, jsonLdDefinedTermSet, jsonLdSpeakable]) }} />
      
      {/* HEADER */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_50%_0%,rgba(16,185,129,0.2),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-6 border border-emerald-500/30">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            دليل مصطلحات الخرسانة والتخريم
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            قاموس هندسي مبسط من فريق <strong>كور برو - Core Pro</strong> لشرح كل ما يتعلق بتقنيات الكور، القص، والواير الماسي.
          </p>

          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="ابحث عن مصطلح (مثال: كور، واير، إيبوكسي)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-2xl py-4 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-lg backdrop-blur-md"
            />
          </div>
        </div>
      </section>

      {/* GLOSSARY LIST */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        {filteredTerms.length > 0 ? (
          <div className="space-y-6">
            {filteredTerms.map((t, idx) => (
              <div key={idx} id={t.term.split(' ')[0]} className="bg-white rounded-[2rem] border border-black/5 shadow-sm p-6 md:p-8 hover:shadow-md transition duration-300 hover:border-emerald-100">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="term-title text-2xl font-black text-slate-900 border-r-4 border-emerald-500 pr-4">{t.term}</h2>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold">
                        <Hash className="h-3 w-3" />
                        {t.category}
                      </span>
                      {t.synonyms.map(syn => (
                        <span key={syn} className="inline-flex px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold">
                          يُعرف أيضاً: {syn}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="term-desc text-slate-700 leading-9 text-lg mt-5 bg-slate-50/50 p-5 rounded-2xl">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[2rem] border border-black/5 shadow-sm">
            <Info className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">عذراً، لم نجد المصطلح الذي تبحث عنه</h3>
            <p className="text-slate-500">جرب البحث بكلمة أخرى أو تصفح القائمة كاملة.</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-6 px-6 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 transition"
            >
              عرض كل المصطلحات
            </button>
          </div>
        )}
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-[3rem] bg-gradient-to-br from-emerald-600 to-teal-700 p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <h2 className="text-3xl font-black mb-4 relative z-10">هل تواجه مشكلة فنية في الخرسانة؟</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto leading-relaxed relative z-10">
            فريق كور برو متخصص في توفير حلول التخريم والقص بأحدث المعدات الموضحة في هذا الدليل. تواصل معنا للحصول على استشارة هندسية مجانية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href={`tel:${PHONE}`} className="tel flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-2xl font-black hover:bg-slate-50 transition shadow-lg" itemProp="telephone">
              اتصل مهندس مختص
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-800 text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-900 transition shadow-lg">
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
