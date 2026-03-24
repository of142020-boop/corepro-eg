
const Image = ({ src, alt, fill, className, width, height, priority, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined) || (fill ? 800 : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined) || (fill ? 800 : undefined);
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : "";
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={[fillClasses, className].filter(Boolean).join(" ")} {...rest} loading={priority ? "eager" : "lazy"} />;
};
const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;



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
