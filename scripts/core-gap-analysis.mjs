/**
 * مقارنة الكلمات المكتشفة بمحتوى صفحة الكور
 * يكشف الكلمات الغائبة والضعيفة في الصفحة
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// ── تحميل بيانات الكلمات من الملفات السابقة ─────────────────────────────────
const files = [
  'core-page-keywords.json',
  'core-new-keywords.json',
  'core-discover-full.json',
];

let allKeywords = [];
for (const f of files) {
  const p = path.join(ROOT, f);
  if (fs.existsSync(p)) {
    const data = JSON.parse(fs.readFileSync(p, 'utf-8'));
    allKeywords = allKeywords.concat(data);
  }
}

// إزالة المكررات، الاحتفاظ بأعلى حجم بحث
const kwMap = new Map();
for (const kw of allKeywords) {
  const existing = kwMap.get(kw.keyword);
  if (!existing || kw.avg_monthly_searches > existing.avg_monthly_searches) {
    kwMap.set(kw.keyword, kw);
  }
}
const keywords = [...kwMap.values()].sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);
console.log(`\n📂 إجمالي الكلمات المحللة: ${keywords.length}\n`);

// ── محتوى صفحة الكور النصي الكامل ───────────────────────────────────────────
// (مستخرج من src/pages/core/index.astro + corePage.tsx)
const PAGE_TEXT = `
صنايعي كور لتخريم الخرسانة وعمل فتحات كور دقيقة
تخريم الخرسانة بالكور
صنايعي كور محترف متخصص في تخريم بلاطة وحفر خرسانة بالكور الماسي
فتحات كور للتكييف والغاز والسباكة بأجهزة كور دريل احترافي
اسعار فتحات الكور تنافسية
تبحث عن صنايعي كور محترف
فتحات كور هي الحل الهندسي الأمثل لإحداث فجوات أسطوانية نظيفة في الخرسانة بدون تكسير أو اهتزاز
كأفضل صنايعي كور في مصر
نتخصص في عمل فتحات كور احترافية
أحدث ماكينات التخريم
صنايعية الكور في مصر
فتحات كور خرسانة
ما هي تقنية عمل فتحات كور في الخرسانة
جهاز تخريم الخرسانه المتطور
فتحات الكور بمقاسات دقيقة
أهمية استخدام ماكينة كور تخريم الخرسانة
ماكينة كور تخريم الخرسانة الحديثة
ماكينات الكور
ماكينة الكور
ماكينة تخريم خرسانة
فتحة الكور
الفرق بين عمل فتحات بالكور والتكسير التقليدي
عمل فتحات بالكور
قص الخرسانة بالمنشار
خدماتنا الشاملة في تخريم الخرسانة
عمل فتحات الغاز
عمل فتحة مدخنة السخان
فتحات خرسانة
تخريم السقف
فتح كور في الكمر
تخريم بلاطة الأرضيات والأسقف
تخريم بلاطة
الخرسانة المسلحة
فتحات كور في الإسكندرية
تخريم الجدار والمواد الحساسة
طريقة تخريم الرخام
تخريم الرخام
عمل فتحة في الرخام
تخريم السيراميك
بنط تخريم السيراميك
مراحل وخطوات التنفيذ
يتم تثبيت قاعدة دريل الكور
دريل الكور
أنواع وأقطار فتحات الكور
فتحات كور الخرسانة
دليلك الشامل لـ اسعار فتحات الكور
سعر فتحات الكور
سعر فتحة الكور
أسعار ماكينة كور تخريم الخرسانة
سعر ماكينة كور دريل
ماكينة الكور
صنايعي كور محترف
أسئلة شائعة حول قص الخرسانة بالكور
تخريم الخرسانة بالكور آمن
من هو أفضل صنايعي كور في مصر
رقم صنايعي كور احترافي
كيف أجد صنايعي كور قريبي
صنايعي كور اسكندرية
معلم قص جدار
فني تركيب شفاط مطبخ
تخريم الخرسانة المسلحة
فتحة في سقف خرساني
تخريم فتحة الشفاط
كم تستغرق عملية تخريم السقف
Wet Core Drilling
صنايعي كور قريبي
صنايعي كور احترافي
عمل فتحة في السقف لعمل سلم
الخرسانة المسلحة ذات الإجهاد العالي
أفضل اسعار فتحات الكور
أسرع صنايعي كور في مصر
تغطية كافة المحافظات
`.toLowerCase();

// ── فحص كل كلمة ─────────────────────────────────────────────────────────────
function checkKeyword(kw) {
  const term = kw.toLowerCase().trim();
  // فحص وجود الكلمة كاملة أو جزء منها
  if (PAGE_TEXT.includes(term)) return 'exact';
  // فحص الكلمات المكونة (كل كلمة موجودة منفردة)
  const words = term.split(' ').filter(w => w.length > 2);
  const foundWords = words.filter(w => PAGE_TEXT.includes(w));
  if (foundWords.length === words.length) return 'partial';
  if (foundWords.length >= Math.ceil(words.length * 0.6)) return 'weak';
  return 'missing';
}

const STATUS_LABEL = {
  exact:   '✅ موجودة بالكامل',
  partial: '⚠️ موجودة جزئياً',
  weak:    '🔶 ضعيفة الحضور',
  missing: '❌ غائبة تماماً',
};
const STATUS_PRIORITY = { missing: 0, weak: 1, partial: 2, exact: 3 };

// تطبيق الفحص
const analyzed = keywords
  .filter(r => r.avg_monthly_searches > 0)
  .map(r => ({
    ...r,
    status: checkKeyword(r.keyword),
    cpc_high_num: parseFloat(r.cpc_high || r.cpc_high_egp || 0),
    competition: r.competition || 'UNKNOWN',
    competition_index: r.competition_index || 0,
  }))
  .sort((a, b) => {
    // ترتيب: الغائبة أولاً، ثم حجم البحث
    if (STATUS_PRIORITY[a.status] !== STATUS_PRIORITY[b.status])
      return STATUS_PRIORITY[a.status] - STATUS_PRIORITY[b.status];
    return b.avg_monthly_searches - a.avg_monthly_searches;
  });

// تصنيفات
const missing  = analyzed.filter(r => r.status === 'missing');
const weak     = analyzed.filter(r => r.status === 'weak');
const partial  = analyzed.filter(r => r.status === 'partial');
const existing = analyzed.filter(r => r.status === 'exact');

// الفرص المفقودة عالية القيمة
const goldMissing = missing.filter(r => r.competition === 'LOW' && r.avg_monthly_searches >= 50);
const goodMissing = missing.filter(r => r.competition === 'LOW' && r.avg_monthly_searches >= 10);

// طباعة التقرير
console.log('═══════════════════════════════════════════════════');
console.log('📋 تقرير: الكلمات الغائبة عن صفحة الكور');
console.log('═══════════════════════════════════════════════════\n');

console.log('❌ كلمات غائبة تماماً وتستحق الإضافة:');
console.table(missing.slice(0, 30).map(r => ({
  'الكلمة':       r.keyword,
  'حجم/شهر':      r.avg_monthly_searches,
  'المنافسة':     r.competition === 'LOW' ? '🟢 منخفض' : r.competition === 'HIGH' ? '🔴 عالي' : '🟡 متوسط',
  'مؤشر':         r.competition_index,
  'CPC أعلى':     (r.cpc_high_num || 0).toFixed(2) + ' ج',
  'الأولوية':     r.avg_monthly_searches >= 100 && r.competition === 'LOW' ? '🥇 عاجل'
                : r.avg_monthly_searches >= 50  && r.competition === 'LOW' ? '⭐ مهم'
                : r.avg_monthly_searches >= 10  && r.competition === 'LOW' ? '💎 مفيد'
                : '📌 اختياري',
})));

console.log('\n⚠️ كلمات موجودة جزئياً (تحتاج تعزيز):');
console.table(weak.concat(partial).slice(0, 15).map(r => ({
  'الكلمة':   r.keyword,
  'حجم/شهر':  r.avg_monthly_searches,
  'الحالة':   STATUS_LABEL[r.status],
  'المنافسة': r.competition === 'LOW' ? '🟢' : r.competition === 'HIGH' ? '🔴' : '🟡',
})));

console.log('\n📊 ملخص الفحص:');
console.log(`  ✅ موجودة بالكامل:    ${existing.length} كلمة`);
console.log(`  ⚠️ موجودة جزئياً:    ${partial.length} كلمة`);
console.log(`  🔶 ضعيفة الحضور:     ${weak.length} كلمة`);
console.log(`  ❌ غائبة تماماً:     ${missing.length} كلمة`);
console.log(`\n  🥇 فرص ذهبية غائبة:  ${goldMissing.length} كلمة`);
console.log(`  💎 فرص جيدة غائبة:   ${goodMissing.length} كلمة`);

// ── Excel ─────────────────────────────────────────────────────────────────────
const wb = XLSX.utils.book_new();

const COLS = [
  { wch: 4 }, { wch: 38 }, { wch: 16 }, { wch: 16 },
  { wch: 16 }, { wch: 13 }, { wch: 24 }, { wch: 20 },
];

function makeRows(rows) {
  return rows.map((r, i) => ({
    '#':                   i + 1,
    'الكلمة المفتاحية':   r.keyword,
    'حجم البحث / شهر':    r.avg_monthly_searches,
    'المنافسة':            r.competition === 'LOW' ? '🟢 منخفض' : r.competition === 'HIGH' ? '🔴 عالي' : r.competition === 'MEDIUM' ? '🟡 متوسط' : r.competition,
    'مؤشر المنافسة /100': r.competition_index,
    'CPC أعلى (ج)':       (r.cpc_high_num || 0).toFixed(2),
    'الحالة في الصفحة':   STATUS_LABEL[r.status],
    'التوصية':
      r.status === 'missing' && r.competition === 'LOW' && r.avg_monthly_searches >= 100
        ? '🥇 أضفها فوراً — فرصة ذهبية'
      : r.status === 'missing' && r.competition === 'LOW' && r.avg_monthly_searches >= 50
        ? '⭐ أضفها للمحتوى — مهمة'
      : r.status === 'missing' && r.competition === 'LOW' && r.avg_monthly_searches >= 10
        ? '💎 أضفها — فرصة جيدة'
      : r.status === 'missing'
        ? '📌 اختياري'
      : r.status === 'weak' || r.status === 'partial'
        ? '🔧 عزّز حضورها بفقرة مخصصة'
      : '✅ لا يلزم تغيير',
  }));
}

// Sheet 1 — كل الكلمات مرتبة حسب الحالة
const ws1 = XLSX.utils.json_to_sheet(makeRows(analyzed));
ws1['!cols'] = COLS;
XLSX.utils.book_append_sheet(wb, ws1, 'كل الكلمات — حسب الحالة');

// Sheet 2 — الغائبة فقط (الأهم)
if (missing.length > 0) {
  const ws2 = XLSX.utils.json_to_sheet(makeRows(missing));
  ws2['!cols'] = COLS;
  XLSX.utils.book_append_sheet(wb, ws2, '❌ الغائبة — أضفها فوراً');
}

// Sheet 3 — الضعيفة والجزئية
const needsBoost = [...weak, ...partial];
if (needsBoost.length > 0) {
  const ws3 = XLSX.utils.json_to_sheet(makeRows(needsBoost));
  ws3['!cols'] = COLS;
  XLSX.utils.book_append_sheet(wb, ws3, '⚠️ تحتاج تعزيز');
}

// Sheet 4 — الموجودة بالكامل
if (existing.length > 0) {
  const ws4 = XLSX.utils.json_to_sheet(makeRows(existing));
  ws4['!cols'] = COLS;
  XLSX.utils.book_append_sheet(wb, ws4, '✅ موجودة بالكامل');
}

// Sheet 5 — خطة التحسين
const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' });
const planRows = [
  { 'البند': '📅 تاريخ التحليل',                  'التفاصيل': now },
  { 'البند': '📦 إجمالي الكلمات المحللة',         'التفاصيل': analyzed.length },
  { 'البند': '✅ موجودة بالكامل',                  'التفاصيل': existing.length },
  { 'البند': '⚠️ موجودة جزئياً (تحتاج تعزيز)',    'التفاصيل': partial.length },
  { 'البند': '🔶 ضعيفة الحضور',                   'التفاصيل': weak.length },
  { 'البند': '❌ غائبة تماماً',                   'التفاصيل': missing.length },
  { 'البند': '🥇 فرص ذهبية غائبة (أعلى أولوية)', 'التفاصيل': goldMissing.length },
  { 'البند': '', 'التفاصيل': '' },
  { 'البند': '════ 🥇 أولاً: أضف فوراً ════', 'التفاصيل': '' },
  ...goldMissing.map(r => ({
    'البند': `  ⭐ ${r.keyword}`,
    'التفاصيل': `${r.avg_monthly_searches} بحث/شهر | منافسة ${r.competition === 'LOW' ? 'منخفضة' : 'متوسطة'} | CPC: ${(r.cpc_high_num||0).toFixed(2)} ج`,
  })),
  { 'البند': '', 'التفاصيل': '' },
  { 'البند': '════ 💎 ثانياً: أضفها للمحتوى ════', 'التفاصيل': '' },
  ...goodMissing.filter(r => !goldMissing.includes(r)).map(r => ({
    'البند': `  • ${r.keyword}`,
    'التفاصيل': `${r.avg_monthly_searches} بحث/شهر`,
  })),
  { 'البند': '', 'التفاصيل': '' },
  { 'البند': '════ 🔧 ثالثاً: عزّز حضورها ════', 'التفاصيل': '' },
  ...needsBoost.filter(r => r.competition === 'LOW' && r.avg_monthly_searches >= 20).map(r => ({
    'البند': `  · ${r.keyword}`,
    'التفاصيل': `${r.avg_monthly_searches} بحث/شهر | ${STATUS_LABEL[r.status]}`,
  })),
];

const ws5 = XLSX.utils.json_to_sheet(planRows);
ws5['!cols'] = [{ wch: 45 }, { wch: 55 }];
XLSX.utils.book_append_sheet(wb, ws5, 'خطة التحسين 📋');

// حفظ + نسخ
const xlsxPath = path.join(ROOT, 'core-gap-analysis.xlsx');
XLSX.writeFile(wb, xlsxPath);

const desktopFolder = 'C:\\Users\\i7\\Desktop\\الكلمات المفتاحية';
if (fs.existsSync(desktopFolder)) {
  fs.copyFileSync(xlsxPath, path.join(desktopFolder, 'core-gap-analysis.xlsx'));
  console.log('\n📁 تم النسخ لفولدر "الكلمات المفتاحية" على سطح المكتب ✅');
}

const { exec } = await import('child_process');
exec(`powershell -Command "Start-Process '${xlsxPath}'"`, () => {});
console.log('🚀 جارٍ فتح التقرير في Excel...\n');
