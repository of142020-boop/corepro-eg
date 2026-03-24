
const Image = ({ src, alt, fill, className, width, height, priority, fetchpriority, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} fetchpriority={fetchpriority} />;
};
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;



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
