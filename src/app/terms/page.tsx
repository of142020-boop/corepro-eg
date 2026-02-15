import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شروط الاستخدام - Core Pro Egypt",
  description:
    "شروط وأحكام استخدام موقع Core Pro Egypt لخدمات قص الخرسانة وتخريم الكور وتركيب الشفاطات.",
};

export default function TermsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-extrabold text-slate-900">
        شروط الاستخدام
      </h1>

      <p className="text-slate-700 leading-8">
        باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط
        والأحكام المذكورة في هذه الصفحة.
      </p>

      <h2 className="text-xl font-bold text-slate-900">
        الخدمات
      </h2>
      <p className="text-slate-700 leading-8">
        المعلومات المعروضة بالموقع تهدف إلى توضيح خدماتنا
        في قص الخرسانة، تخريم الكور، وتركيب الشفاطات.
      </p>

      <h2 className="text-xl font-bold text-slate-900">
        المسؤولية
      </h2>
      <p className="text-slate-700 leading-8">
        يتم تنفيذ جميع الأعمال وفق المعايير الفنية،
        ولا نتحمل أي مسؤولية عن سوء الاستخدام أو
        التعديلات غير المصرح بها بعد التنفيذ.
      </p>
    </section>
  );
}
