"use client";
import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, Building2, ShieldCheck, Images, X } from "lucide-react";

// Mock Image component since we're using static images in Next.js/Astro hybrid
const Image = ({ src, alt, fill, className, width, height, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading="lazy" />;
};

const PHONE_NUM = "01055550195";

export default function ProjectsPage() {
  const [activeProjectGrid, setActiveProjectGrid] = useState<any>(null);

  // Disable scroll when grid modal is open
  useEffect(() => {
    if (activeProjectGrid) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeProjectGrid]);

  const portSaidGallery = [
    "/images/projects/port-said/photo_1_2026-06-23_03-12-43.jpg",
    "/images/projects/port-said/photo_2_2026-06-23_03-12-43.jpg",
    "/images/projects/port-said/photo_3_2026-06-23_03-12-43.jpg",
    "/images/projects/port-said/photo_4_2026-06-23_03-12-43.jpg",
    "/images/projects/port-said/photo_5_2026-06-23_03-12-43.jpg",
    "/images/projects/port-said/photo_6_2026-06-23_03-12-43.jpg",
    "/images/projects/port-said/photo_7_2026-06-23_03-12-43.jpg",
    "/images/projects/port-said/photo_8_2026-06-23_03-12-44.jpg",
    "/images/projects/port-said/photo_9_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_10_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_11_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_12_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_13_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_14_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_15_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_16_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_17_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_18_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_19_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_20_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_21_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_22_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_23_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_24_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_25_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_26_2026-06-23_03-12-45.jpg",
    "/images/projects/port-said/photo_27_2026-06-23_03-12-45.jpg"
  ];

  const rasGharibGallery = [
    "/images/projects/ras-gharib/photo_1_2026-06-23_03-45-26.jpg",
    "/images/projects/ras-gharib/photo_2_2026-06-23_03-45-26.jpg",
    "/images/projects/ras-gharib/photo_3_2026-06-23_03-45-26.jpg",
    "/images/projects/ras-gharib/photo_1_2026-06-23_04-16-57.jpg",
    "/images/projects/ras-gharib/photo_2_2026-06-23_04-16-57.jpg"
  ];

  const andalusiaGallery = [
    "/images/projects/andalusia/photo_1_2026-06-23_04-21-37.jpg",
    "/images/projects/andalusia/photo_2_2026-06-23_04-21-37.jpg",
    "/images/projects/andalusia/photo_3_2026-06-23_04-21-37.jpg",
    "/images/projects/andalusia/photo_4_2026-06-23_04-21-37.jpg"
  ];

  const projects = [
    {
      id: 0,
      title: "قص سور مخازن ميناء بور سعيد لتركيب جمالون حديد",
      location: "ميناء بور سعيد",
      cover: "/images/projects/port-said/photo_21_2026-06-23_03-12-45.jpg",
      gallery: portSaidGallery,
      problem: "العمل على ارتفاع شاهق (16 متر) لقص جزء من سور مخازن بقطر خرسانة ضخم يصل إلى 120 سم، بالإضافة لفتح أبواب بارتفاع 6 أمتار. التحدي الأساسي كان في الارتفاع الخطير والسمك غير العادي للخرسانة.",
      solution: "تم استخدام ماكينة قص الخرسانة بالواير الماسي (Diamond Wire Sawing) لتنفيذ القطع بسلامة تامة واحترافية عالية رغم الارتفاع وصعوبة الوصول، مما سمح بتركيب الجمالون الحديدي بنجاح تام.",
      highlights: ["سمك الخرسانة 120 سم", "العمل على ارتفاع 16 متر", "قص بماكينة الواير"]
    },
    {
      id: 1,
      title: "قص وإزالة قواعد وحوائط محطة كهرباء غرب بكر",
      location: "رأس غارب، البحر الأحمر",
      cover: rasGharibGallery[0],
      gallery: rasGharibGallery,
      problem: "المشروع عبارة عن إزالة قواعد خرسانية في الأرض بالإضافة إلى قص مجموعة من الحوائط الخرسانية الضخمة بارتفاع 11 متراً وعرض 6 أمتار للحائط الواحد داخل محطة الكهرباء. التحدي الأكبر هو التعامل مع هذه الأبعاد العملاقة والقواعد الأرضية بأمان تام.",
      solution: "تم الاعتماد بشكل أساسي على (ماكينة الواير الماسي) المتطورة لقص القواعد الأرضية والحوائط. تم تخطيط وتقسيم الخرسانة هندسياً وقطعها إلى أجزاء محسوبة الوزن، ليتم (تصبينها) ورفعها وإزالتها مباشرة بواسطة الأوناش العملاقة لتفريغ المساحة بأمان وسرعة فائقة.",
      highlights: ["ارتفاع الحائط 11 متر", "إزالة قواعد أرضية", "تصبين ورفع بالأوناش", "قص بماكينة الواير"]
    },
    {
      id: 2,
      title: "فتح باب لربط مبنيين بمستشفى الأندلسية",
      location: "مستشفى الأندلسية، المعادي",
      cover: andalusiaGallery[0],
      gallery: andalusiaGallery,
      problem: "العمل يتطلب فتح باب لربط مبنى المستشفى الحالي بمبنى آخر جديد. التحدي الاستثنائي كان في سمك الجدار الخرساني الهائل والذي بلغ (170 سم) من الخرسانة المسلحة الصلبة، بالإضافة لضرورة تنفيذ العمل بأمان تام داخل بيئة مستشفى.",
      solution: "تم استخدام (ماكينة الواير الماسي) المتطورة لاختراق وقص هذا السمك الهائل (170 سم) بدقة. بعد إتمام عملية القص وفصل الكتلة الخرسانية، تم إسقاطها بحرص على الأرض وتكسيرها باستخدام (الجاك هامر - Jack Hammer) لتسهيل نقلها وإزالتها دون التسبب باهتزازات تؤثر على سلامة المبنى.",
      highlights: ["سمك خرسانة 170 سم", "قص بماكينة الواير", "تكسير بالجاك هامر", "بيئة عمل حرجة"]
    }
  ];

  return (
    <>
      <main className="bg-slate-50 min-h-screen overflow-x-hidden" dir="rtl">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.8),transparent_70%)]" />
          <div className="mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-6">سابقة الأعمال</h1>
            <p className="text-xl text-slate-300 leading-9 font-medium">
              تصفح أحدث مشاريعنا الهندسية في قص وتخريم الخرسانة. نحن لا نقدم مجرد خدمة، بل نقدم حلولاً إنشائية آمنة لأعقد التحديات في كبرى المشاريع المصرية.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-16">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col md:flex-row group">
                  {/* Image Side with Multiple Photos Badge */}
                  <div 
                    className="w-full md:w-5/12 relative aspect-[4/3] md:aspect-auto overflow-hidden bg-slate-100 cursor-pointer"
                    onClick={() => setActiveProjectGrid(project)}
                  >
                    <Image 
                      src={project.cover} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />

                    {/* Status Badge */}
                    {project.status && (
                      <div className="absolute top-4 left-4 bg-amber-500/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-white shadow-sm flex items-center gap-2 pointer-events-none">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                        {project.status}
                      </div>
                    )}
                    
                    {/* Permanent Badge showing multiple photos exist */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                      <Images className="w-5 h-5" />
                      +{project.gallery.length} صورة
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-slate-800 shadow-sm flex items-center gap-2 pointer-events-none">
                      <Building2 className="w-4 h-4 text-emerald-600" />
                      {project.location}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{project.title}</h2>
                    
                    <div className="space-y-6 flex-1">
                      {/* Problem */}
                      <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                        <h3 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-rose-500"></span> التحدي والمشكلة
                        </h3>
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium">
                          {project.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" /> الحل من كور برو
                        </h3>
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.highlights.map((hl, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-bold">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          {hl}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-emerald-600 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-black mb-6">هل لديك تحدي إنشائي مشابه؟</h2>
                 <p className="text-lg md:text-xl text-emerald-50 mb-10 leading-relaxed">
                   تواصل معنا الآن وسيقوم مهندسونا بزيارة الموقع لتقديم أفضل الحلول الآمنة لقص أو تخريم الخرسانة.
                 </p>
                 <a 
                   href={`tel:${PHONE_NUM}`} 
                   className="inline-flex items-center justify-center gap-3 bg-white text-emerald-700 px-8 py-4 rounded-2xl font-black text-xl hover:bg-slate-50 transition-colors shadow-xl"
                 >
                   <Phone className="w-6 h-6" />
                   طلب معاينة مجانية
                 </a>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fullscreen Photo Grid Modal */}
      {activeProjectGrid && (
        <div 
          className="fixed inset-0 z-[1000] bg-white flex flex-col overflow-hidden animate-in fade-in duration-300"
          dir="rtl"
        >
          {/* Modal Header */}
          <div className="h-16 border-b flex items-center justify-between px-4 md:px-8 bg-white shrink-0 sticky top-0 z-10 shadow-sm">
            <div>
              <h3 className="font-black text-slate-900">{activeProjectGrid.title}</h3>
              <p className="text-sm text-slate-500">{activeProjectGrid.gallery.length} صورة متاحة</p>
            </div>
            <button 
              onClick={() => setActiveProjectGrid(null)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="إغلاق الشبكة"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>
          </div>

          {/* Grid Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {activeProjectGrid.gallery.map((img: string, index: number) => (
                <div 
                  key={index}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow group border border-slate-200"
                  data-lightbox-gallery={JSON.stringify(activeProjectGrid.gallery)}
                  data-lightbox-index={index}
                >
                  <Image 
                    src={img} 
                    alt={`${activeProjectGrid.title} - صورة ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle index number on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-slate-900 font-bold px-3 py-1 rounded-lg text-sm shadow-sm backdrop-blur-sm">
                      عرض
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
