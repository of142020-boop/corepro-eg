import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية - Core Pro Egypt",
  description:
    "سياسة الخصوصية الخاصة بشركة Core Pro Egypt توضح كيفية جمع واستخدام المعلومات.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-extrabold text-slate-900">
        سياسة الخصوصية
      </h1>

      <p className="leading-8 text-slate-700">
        نحن نحترم خصوصيتك ونلتزم بحماية أي معلومات شخصية يتم
        مشاركتها معنا عبر الموقع.
      </p>

      <h2 className="text-xl font-bold text-slate-900">
        المعلومات التي نجمعها
      </h2>
      <p className="text-slate-700 leading-8">
        قد نقوم بجمع بيانات مثل الاسم ورقم الهاتف عند التواصل معنا،
        وذلك فقط بغرض الرد على الاستفسارات أو تقديم الخدمة المطلوبة.
      </p>

      <h2 className="text-xl font-bold text-slate-900">
        كيفية استخدام البيانات
      </h2>
      <p className="text-slate-700 leading-8">
        نستخدم المعلومات لتحسين خدماتنا والتواصل مع العملاء،
        ولا نقوم ببيع أو مشاركة البيانات مع أطراف خارجية.
      </p>

      <h2 className="text-xl font-bold text-slate-900">
        الحماية
      </h2>
      <p className="text-slate-700 leading-8">
        نتخذ إجراءات تقنية وتنظيمية لحماية بيانات المستخدمين
        من الوصول غير المصرح به.
      </p>
    </section>
  );
}
