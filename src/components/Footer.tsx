const Link = ({ href, children, ...rest }: any) => <a href={href} {...rest}>{children}</a>;
const Image = ({ src, alt, className, width, height, ...rest }: any) => {
  const actualSrc = typeof src === "object" ? src.src : src;
  const actualW = width || (typeof src === "object" ? src.width : undefined);
  const actualH = height || (typeof src === "object" ? src.height : undefined);
  return <img src={actualSrc} alt={alt} width={actualW} height={actualH} className={className} {...rest} />;
};
import { MapPin, Phone, ShieldCheck, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const BRAND = "Core Pro Egypt";
const PHONE = "01055550195";
const WHATSAPP = "https://wa.me/201055550195";
const EMAIL = "info@corepro-eg.com";
const ADDRESS = "الحي العاشر مدينة نصر - مصر";
const YEAR = new Date().getFullYear();

// ✅ يوزر موحد (حسب طلبك)
const SOCIAL_USER = "corproeg";

const SOCIAL = [
  {
    name: "Facebook",
    href: `https://www.facebook.com/${SOCIAL_USER}`,
    icon: <FaFacebookF className="h-4 w-4" />,
  },
  {
    name: "Instagram",
    href: `https://www.instagram.com/${SOCIAL_USER}`,
    icon: <FaInstagram className="h-4 w-4" />,
  },
  {
    name: "TikTok",
    href: `https://www.tiktok.com/@${SOCIAL_USER}`,
    icon: <FaTiktok className="h-4 w-4" />,
  },
  {
    name: "YouTube",
    href: `https://www.youtube.com/@${SOCIAL_USER}`,
    icon: <FaYoutube className="h-4 w-4" />,
  },
  {
    name: "X",
    href: `https://x.com/${SOCIAL_USER}`,
    icon: <FaXTwitter className="h-4 w-4" />,
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-black/10 bg-slate-950 text-white pb-40 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              {/* ✅ اللوجو داخل إطار وخلفية بيضاء */}
              <div className="h-12 w-12 rounded-2xl bg-white border border-black/10 shadow-sm grid place-items-center overflow-hidden">
                <Image
                  src="/logo-header-116x154.webp" width={116} height={154}
                  alt={`${BRAND} logo`}
                  width={40}
                  height={40}
                  sizes="40px"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <div className="text-lg font-extrabold">{BRAND}</div>
            </div>

            <p className="mt-4 text-white/85 leading-7">
              شركة متخصصة في قص الخرسانة بالمنشار، تخريم الكور، واير تقطيع خرسانة،
              وتركيب الشفاطات داخل القاهرة والجيزة. دقة هندسية وأمان كامل في التنفيذ.
            </p>

            <div className="mt-5 space-y-2 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/80" />
                <span>{ADDRESS}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/80" />
                <a
                  className="hover:text-white underline-offset-4 hover:underline"
                  href={`tel:${PHONE}`}
                >
                  {PHONE}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/80" />
                <a
                  className="hover:text-white underline-offset-4 hover:underline"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* ✅ أزرار السوشيال */}
            <div className="mt-6">
              <div className="text-sm font-extrabold text-white mb-3">
                تواصل معنا
              </div>

              <div className="flex flex-wrap gap-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="inline-flex items-center justify-center h-11 w-11 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <div className="mt-3 text-xs text-white/70">@{SOCIAL_USER}</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-lg font-extrabold mb-4">الخدمات</div>
            <div className="space-y-2 text-sm text-white/85">
              <Link href="/core" className="block hover:text-white transition">
                تخريم الخرسانة بالكور
              </Link>
              <Link href="/saw" className="block hover:text-white transition">
                قص الخرسانة بالمنشار
              </Link>
              <Link href="/wire" className="block hover:text-white transition">
                واير تقطيع خرسانة
              </Link>
              <Link href="/hoods" className="block hover:text-white transition">
                تركيب الشفاطات
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-lg font-extrabold mb-4">الشركة</div>
            <div className="space-y-2 text-sm text-white/85">
              <Link href="/about" className="block hover:text-white transition">
                من نحن
              </Link>
              <Link
                href="/privacy-policy"
                className="block hover:text-white transition"
              >
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="block hover:text-white transition">
                شروط الاستخدام
              </Link>
              <Link href="/blog" className="block hover:text-white transition">
                المدونة
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div className="text-lg font-extrabold mb-4">احجز معاينة الآن</div>

            <div className="space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 py-3 font-extrabold hover:bg-slate-200 transition"
                aria-label="اتصال مباشر"
              >
                <Phone className="h-4 w-4" />
                اتصال مباشر
              </a>

              <a
                href={WHATSAPP}
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 font-extrabold hover:bg-emerald-700 transition"
                aria-label="محادثة واتساب"
              >
                <FaWhatsapp className="h-4 w-4" />
                واتساب
              </a>
            </div>

            <div className="mt-6 flex items-start gap-2 text-sm text-white/85">
              <ShieldCheck className="h-4 w-4 mt-1 text-emerald-400" />
              تنفيذ آمن بدون اهتزاز أو تكسير عشوائي.
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/85">
          <div>
            © {YEAR} {BRAND}. جميع الحقوق محفوظة.
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:text-white transition">
              الرئيسية
            </Link>
            <Link href="/core" className="hover:text-white transition">
              الكور
            </Link>
            <Link href="/saw" className="hover:text-white transition">
              القص
            </Link>
            <Link href="/wire" className="hover:text-white transition">
              الواير
            </Link>
            <Link href="/hoods" className="hover:text-white transition">
              الشفاطات
            </Link>
            <Link href="/blog" className="hover:text-white transition">
              المدونة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
