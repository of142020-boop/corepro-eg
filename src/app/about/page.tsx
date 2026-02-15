import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن - Core Pro Egypt",
  description:
    "تعرف على شركة Core Pro Egypt المتخصصة في قص الخرسانة بالمنشار وتخريم الكور وتركيب الشفاطات داخل القاهرة والجيزة.",
};

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">
          من نحن
        </h1>
        <p className="mt-4 leading-8 text-slate-700">
          نحن في <strong>Core Pro Egypt</strong> شركة متخصصة في
          قص الخرسانة بالمنشار (تقنية الليزر)، تخريم الكور،
          وتركيب وصيانة الشفاطات داخل القاهرة الكبرى والجيزة.
        </p>
      </div>

      <div className="space-y-6 text-slate-700 leading-8">
        <p>
          نمتلك خبرة عملية في تنفيذ أعمال قص الخرسانة المسلحة
          وفتح الفتحات الإنشائية بأمان كامل وبدون تكسير عشوائي،
          مع استخدام أحدث المعدات المستوردة لضمان الدقة
          والنظافة وسرعة الإنجاز.
        </p>

        <p>
          كما نقدم خدمات تخريم الكور لعمل فتحات الغاز،
          التكييف، السباكة، ومدخنة السخان،
          بالإضافة إلى تركيب شفاطات المطابخ والحمامات
          بجميع الماركات العالمية والمحلية.
        </p>

        <p>
          هدفنا هو تقديم خدمة احترافية تجمع بين
          الجودة العالية، الأمان الإنشائي،
          والسعر المناسب.
        </p>
      </div>
    </section>
  );
}
