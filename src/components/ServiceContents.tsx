import React from 'react';

export type ContentsItem = { id: string; label: string };

export default function ServiceContents({ items }: { items: ContentsItem[] }) {
  return (
    <nav aria-label="محتويات الصفحة" className="rounded-3xl border border-emerald-200 bg-white p-5 md:p-7 shadow-sm">
      <p className="font-extrabold text-slate-900">انتقل إلى ما يهمك</p>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2 text-sm leading-7">
        {items.map(item => <li key={item.id}><a className="text-emerald-800 underline underline-offset-4 hover:text-emerald-600" href={`#${item.id}`}>{item.label}</a></li>)}
      </ul>
    </nav>
  );
}
