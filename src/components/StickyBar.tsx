"use client";

const PHONE = "01055550195";
const WHATSAPP = "https://wa.me/201055550195";

export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="border-t border-slate-200 bg-white/85 backdrop-blur">
        <div className="container-page h-12 flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="flex-1 btn-green py-2 text-sm rounded-xl"
            aria-label="تواصل واتساب"
            title="واتساب"
          >
            واتساب
          </a>

          <a
            href={`tel:${PHONE}`}
            className="flex-1 btn-outline py-2 text-sm rounded-xl"
            aria-label="اتصال"
            title="اتصال"
          >
            اتصال
          </a>
        </div>
      </div>
    </div>
  );
}
