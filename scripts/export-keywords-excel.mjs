/**
 * تصدير بيانات كلمات صفحة الكور إلى Excel
 * يقرأ من core-page-keywords.json ويولّد ملف .xlsx
 */

import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// ── قراءة البيانات ──────────────────────────────────────────────────────────
const jsonPath = path.join(ROOT, 'core-page-keywords.json');
if (!fs.existsSync(jsonPath)) {
  console.error('❌ ملف core-page-keywords.json غير موجود. شغّل أولاً: node scripts/core-page-keywords.mjs');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
console.log(`\n📂 تم قراءة ${data.length} كلمة من core-page-keywords.json\n`);

// ── Sheet 1: جميع الكلمات ───────────────────────────────────────────────────
const COMP_AR = {
  LOW:         '🟢 منخفض',
  MEDIUM:      '🟡 متوسط',
  HIGH:        '🔴 عالي',
  UNSPECIFIED: '⚪ غير محدد',
  UNKNOWN:     '❓ غير معروف',
};

const allRows = data.map((r, i) => ({
  '#':                  i + 1,
  'الكلمة المفتاحية':  r.keyword,
  'حجم البحث / شهر':   r.avg_monthly_searches,
  'المنافسة':           COMP_AR[r.competition] || r.competition,
  'مؤشر المنافسة /100': r.competition_index,
  'CPC أدنى (ج)':       parseFloat(r.cpc_low_egp)  || 0,
  'CPC أعلى (ج)':       parseFloat(r.cpc_high_egp) || 0,
  'الأولوية':           r.avg_monthly_searches >= 100 ? '🔥 عالية'
                       : r.avg_monthly_searches >= 50  ? '⭐ متوسطة'
                       : r.avg_monthly_searches > 0    ? '📌 منخفضة'
                       : '—',
}));

// ── Sheet 2: أفضل الفرص ─────────────────────────────────────────────────────
const bestRows = data
  .filter(r => r.competition === 'LOW' && r.avg_monthly_searches >= 50)
  .map((r, i) => ({
    '#':                 i + 1,
    'الكلمة المفتاحية': r.keyword,
    'حجم البحث / شهر':  r.avg_monthly_searches,
    'مؤشر المنافسة':    r.competition_index,
    'CPC أعلى (ج)':     parseFloat(r.cpc_high_egp) || 0,
    'التوصية':           'استهدفها بمحتوى مخصص',
  }));

// ── Sheet 3: كلمات بدون بيانات ──────────────────────────────────────────────
const missingRows = data
  .filter(r => r.avg_monthly_searches === 0)
  .map((r, i) => ({
    '#':                 i + 1,
    'الكلمة المفتاحية': r.keyword,
    'الحالة':            'بدون بيانات — حجم بحث منخفض جداً أو 0',
    'التوصية':           'راجع صياغتها أو أزلها من المحتوى',
  }));

// ── إنشاء الـ Workbook ───────────────────────────────────────────────────────
const wb = XLSX.utils.book_new();

// Sheet 1 — الكل
const ws1 = XLSX.utils.json_to_sheet(allRows, { skipHeader: false });
styleSheet(ws1, allRows.length);
XLSX.utils.book_append_sheet(wb, ws1, 'جميع الكلمات');

// Sheet 2 — أفضل الفرص
if (bestRows.length > 0) {
  const ws2 = XLSX.utils.json_to_sheet(bestRows);
  styleSheet(ws2, bestRows.length);
  XLSX.utils.book_append_sheet(wb, ws2, 'أفضل الفرص ⭐');
}

// Sheet 3 — بدون بيانات
if (missingRows.length > 0) {
  const ws3 = XLSX.utils.json_to_sheet(missingRows);
  XLSX.utils.book_append_sheet(wb, ws3, 'بدون بيانات ⚠️');
}

// Sheet 4 — ملخص
const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' });
const totalVol  = data.reduce((s, r) => s + r.avg_monthly_searches, 0);
const highVol   = data.filter(r => r.avg_monthly_searches >= 100).length;
const lowComp   = data.filter(r => r.competition === 'LOW').length;
const best      = data.filter(r => r.competition === 'LOW' && r.avg_monthly_searches >= 50);
const topKw     = data[0];

const summaryRows = [
  { 'البيان': '📅 تاريخ التحليل',             'القيمة': now },
  { 'البيان': '🔑 إجمالي الكلمات',            'القيمة': data.length },
  { 'البيان': '📊 إجمالي البحث / شهر',        'القيمة': totalVol.toLocaleString() },
  { 'البيان': '🔥 كلمات بحجم 100+ بحث',       'القيمة': highVol },
  { 'البيان': '🟢 كلمات بمنافسة منخفضة',      'القيمة': lowComp },
  { 'البيان': '⭐ أفضل الفرص (50+ + منخفض)',   'القيمة': best.length },
  { 'البيان': '⚠️ كلمات بدون بيانات',          'القيمة': missingRows.length },
  { 'البيان': '🏆 أعلى كلمة بحثاً',           'القيمة': topKw?.keyword || '—' },
  { 'البيان': '📈 أعلى حجم بحث / شهر',         'القيمة': topKw?.avg_monthly_searches || 0 },
  { 'البيان': '',                              'القيمة': '' },
  { 'البيان': '🏆 أفضل الفرص',                 'القيمة': '' },
  ...best.map(r => ({
    'البيان': `   • ${r.keyword}`,
    'القيمة': `${r.avg_monthly_searches} بحث/شهر | CPC: ${r.cpc_high_egp} ج`,
  })),
];

const ws4 = XLSX.utils.json_to_sheet(summaryRows);
ws4['!cols'] = [{ wch: 35 }, { wch: 40 }];
XLSX.utils.book_append_sheet(wb, ws4, 'ملخص 📋');

// ── حفظ الملف ───────────────────────────────────────────────────────────────
const outPath = path.join(ROOT, 'core-page-keywords.xlsx');
XLSX.writeFile(wb, outPath);

console.log('✅ تم إنشاء الملف بنجاح!');
console.log(`📁 المسار: ${outPath}`);
console.log(`📊 الشيتات: جميع الكلمات | أفضل الفرص | بدون بيانات | ملخص\n`);

// فتح الملف
const { exec } = await import('child_process');
exec(`powershell -Command "Start-Process '${outPath}'"`, () => {});
console.log('🚀 جارٍ فتح الملف في Excel...\n');

// ── دالة ضبط عرض الأعمدة ────────────────────────────────────────────────────
function styleSheet(ws, rowCount) {
  ws['!cols'] = [
    { wch: 4  },  // #
    { wch: 32 },  // الكلمة
    { wch: 18 },  // حجم البحث
    { wch: 16 },  // المنافسة
    { wch: 18 },  // مؤشر
    { wch: 14 },  // CPC أدنى
    { wch: 14 },  // CPC أعلى
    { wch: 14 },  // الأولوية
  ];
}
