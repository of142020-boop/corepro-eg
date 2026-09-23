/**
 * اكتشاف شامل — كور وتخريم فقط
 * قائمة 200+ كلمة من زوايا متعددة
 */

import { GoogleAdsApi, enums } from 'google-ads-api';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

const customer = client.Customer({
  customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
});

// ─── 220+ كلمة — 11 فئة مختلفة ─────────────────────────────────────────────
const ALL_KEYWORDS = [

  // ①  الكلمات الجذرية — Core Basics
  'صنايعي كور',
  'فتحات كور',
  'كور دريل',
  'دريل الكور',
  'فتحة كور',
  'ماكينة كور',
  'صنايعي الكور',
  'فني كور',
  'معلم كور',
  'مقاول كور',
  'شركة كور',
  'خدمة كور',
  'عمال كور',
  'كور ماسي',
  'اسطوانة كور',
  'بنط كور',
  'رأس كور ماسي',
  'جهاز الكور',

  // ②  التخريم — الكلمة والفعل
  'تخريم خرسانة',
  'تخريم بلاطة',
  'تخريم السقف',
  'تخريم الجدار',
  'تخريم الخرسانة بالكور',
  'تخريم الخرسانة المسلحة',
  'تخريم كور',
  'تخريم كمر',
  'تخريم بلاطة الأرضية',
  'تخريم الرخام',
  'تخريم السيراميك',
  'تخريم البلوك',
  'تخريم الطوب',
  'تخريم الجبس',
  'تخريم جدار خرساني',
  'صنايعي تخريم',
  'عمال تخريم',
  'مقاول تخريم',
  'فني تخريم',
  'شركة تخريم',
  'خدمة تخريم خرسانة',
  'اسعار تخريم الخرسانة',
  'سعر تخريم الخرسانة',

  // ③  الماكينات والأجهزة
  'ماكينة كور تخريم الخرسانة',
  'ماكينة كور دريل',
  'جهاز تخريم الخرسانه',
  'ماكينة حفر خرسانة',
  'ماكينة ثقب خرسانة',
  'ماكينة تخريم كور',
  'ماكينة الكور الماسية',
  'ماكينة كور هيدروليك',
  'سعر ماكينة كور',
  'اسعار ماكينة كور',
  'سعر ماكينة كور دريل',
  'اسعار ماكينة كور تخريم الخرسانة',
  'ماكينة حفر الخرسانة',
  'درل تخريم الخرسانة',
  'مثقاب خرسانة',
  'مثقاب كور',

  // ④  الحفر والثقب
  'حفر خرسانة بالكور',
  'حفر في الخرسانة',
  'حفر جدار خرساني',
  'حفر بلاطة',
  'حفر سقف خرساني',
  'ثقب خرسانة',
  'ثقوب في الخرسانة',
  'ثقب في الجدار',
  'ثقب في السقف',
  'ثقب في البلاطة',
  'عمل ثقب في الخرسانة',

  // ⑤  فتح الفتحات — بالغرض
  'فتح فتحات في الخرسانة',
  'فتح كور في الكمر',
  'عمل فتحات كور',
  'عمل فتحة في الخرسانة',
  'عمل فتحة في الجدار',
  'عمل فتحة في السقف',
  'عمل فتحة في الأرضية',
  'عمل فتحة في البلاطة',
  'عمل فتحة في الكمر',
  'عمل فتحات الغاز',
  'عمل فتحة مدخنة السخان',
  'عمل فتحة تكييف في الجدار',
  'عمل فتحة للشفاط',
  'عمل فتحة سباكة في السقف',
  'عمل فتحة صرف في البلاطة',
  'عمل فتحة كهرباء في الجدار',
  'عمل فتحة تهوية في الجدار',
  'فتح باب في جدار خرساني',
  'فتح نافذة في جدار خرساني',
  'فتح فتحة مصعد في السقف',
  'فتح فتحة سلم في السقف',
  'فتحة تمرير مواسير',
  'تمرير مواسير في الخرسانة',
  'تمرير كابلات في الخرسانة',
  'تخريم لتمديد الغاز',
  'تخريم للسباكة',
  'تخريم للتكييف',
  'تخريم للكهرباء',

  // ⑥  المواد الحساسة
  'تخريم رخام',
  'تخريم سيراميك',
  'تخريم بورسلين',
  'فتحة في الرخام',
  'فتحة في السيراميك',
  'فتحة في البورسلين',
  'تخريم بلاط حمام',
  'تخريم رخام مطبخ',
  'تخريم رخام بدون كسر',
  'تخريم سيراميك بدون شرخ',
  'كور رخام',
  'كور سيراميك',
  'بنط تخريم رخام',
  'بنط تخريم سيراميك',
  'طريقة تخريم الرخام',
  'كيف تخرم الرخام',
  'طريقة تخريم السيراميك',

  // ⑦  الأسعار والتكلفة
  'اسعار فتحات الكور',
  'سعر فتحة الكور',
  'سعر فتحة تخريم الخرسانة',
  'تكلفة تخريم الخرسانة',
  'كم سعر فتحة الكور',
  'كم تكلفة فتحات الكور',
  'سعر تخريم بلاطة',
  'سعر تخريم السقف',
  'سعر تخريم الكمر',
  'سعر فتحة التكييف في الخرسانة',
  'سعر فتحة الغاز',

  // ⑧  الجغرافيا — المحافظات والأحياء
  'صنايعي كور القاهرة',
  'صنايعي كور الجيزة',
  'صنايعي كور اسكندرية',
  'صنايعي كور مدينة نصر',
  'صنايعي كور التجمع الخامس',
  'صنايعي كور المعادي',
  'صنايعي كور 6 اكتوبر',
  'صنايعي كور الشيخ زايد',
  'صنايعي كور العاصمة الادارية',
  'صنايعي كور الرحاب',
  'صنايعي كور مصر الجديدة',
  'صنايعي كور حلوان',
  'صنايعي كور الهرم',
  'صنايعي كور الدقي',
  'صنايعي كور الاسماعيلية',
  'صنايعي كور المنصورة',
  'صنايعي كور طنطا',
  'صنايعي كور الاسكندرية سموحة',
  'تخريم كور القاهرة',
  'تخريم كور الجيزة',
  'تخريم كور الاسكندرية',
  'تخريم خرسانة القاهرة',
  'تخريم خرسانة الجيزة',
  'صنايعي كور قريبي',
  'صنايعي كور احترافي',
  'صنايعي كور في مصر',
  'افضل صنايعي كور في مصر',
  'ارقام صنايعية كور',
  'رقم صنايعي كور',

  // ⑨  الأسئلة والاستفسارات (question intent)
  'كيف اعمل فتحة في الخرسانة',
  'كيف احفر في الخرسانة',
  'كيف اعمل فتحة في الجدار الخرساني',
  'كيف اخترم السيراميك',
  'كيف اخترم الرخام',
  'ما هو الكور دريل',
  'ما هي تقنية الكور',
  'ما هو تخريم الخرسانة',
  'هل تخريم السقف يضر المبنى',
  'هل الكور آمن على الاساسات',
  'كيف اعمل فتحة تكييف في الجدار',
  'كيف اعمل فتحة غاز في الجدار',
  'طريقة عمل فتحة في الخرسانة',
  'طريقة تخريم الخرسانة',
  'افضل طريقة لعمل فتحة في الخرسانة',
  'كيف اعمل فتحة للغسالة',
  'كيف اعمل فتحة للكاميرا في الجدار',

  // ⑩  المشاكل والحلول (problem → solution)
  'كيف افتح باب في جدار خرساني',
  'كيف اعمل دوبلكس في شقة',
  'تخريم الخرسانة بدون غبار',
  'تخريم الخرسانة بدون ضوضاء',
  'تخريم الخرسانة بدون اهتزاز',
  'تخريم الخرسانة بدون تكسير',
  'تخريم خرسانة نظيف',
  'فتحة في الخرسانة بدون كسر',
  'فتحة دقيقة في الخرسانة',
  'بديل التكسير في الخرسانة',
  'بديل الهيلتي في الخرسانة',

  // ⑪  الإنجليزية والمصطلحات المهنية
  'core drilling egypt',
  'core drilling cairo',
  'concrete core drilling',
  'diamond core drilling',
  'core drill service egypt',
  'concrete drilling service',
  'core drilling price egypt',
  'wet core drilling',
  'diamond drilling concrete',

];

const COMP_AR = {
  LOW: '🟢 منخفض', MEDIUM: '🟡 متوسط',
  HIGH: '🔴 عالي', UNSPECIFIED: '⚪ غير محدد', UNKNOWN: '❓ غير معروف',
};

// ── تقسيم الكلمات لدفعات (الـ API لها حد أقصى 500 كلمة لكل طلب) ──────────
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size)
    chunks.push(arr.slice(i, i + size));
  return chunks;
}

async function fetchMetrics(keywords) {
  const response = await customer.keywordPlanIdeas.generateKeywordHistoricalMetrics({
    customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
    keywords,
    language: 'languageConstants/1019',
    geo_target_constants: ['geoTargetConstants/2818'],
    keyword_plan_network: enums.KeywordPlanNetwork.GOOGLE_SEARCH,
  });
  return response?.results || [];
}

async function main() {
  const unique = [...new Set(ALL_KEYWORDS)];
  console.log(`\n🔍 اكتشاف شامل للكلمات — الكور والتخريم فقط`);
  console.log(`📋 إجمالي الكلمات المُختبَرة: ${unique.length}`);
  console.log('📍 مصر | العربية | Google Search\n');

  try {
    // جلب البيانات — دفعات بحد 500
    const batches = chunkArray(unique, 500);
    let allRaw = [];
    for (let i = 0; i < batches.length; i++) {
      process.stdout.write(`⏳ جارٍ جلب الدفعة ${i + 1}/${batches.length} (${batches[i].length} كلمة)...`);
      const raw = await fetchMetrics(batches[i]);
      allRaw = allRaw.concat(raw.map((item, j) => ({ item, keyword: batches[i][j] })));
      console.log(' ✅');
    }

    console.log(`\n📦 إجمالي النتائج: ${allRaw.length}\n`);

    // تجهيز البيانات
    const results = allRaw.map(({ item, keyword }) => {
      const m = item.keyword_metrics || {};
      const avg     = Number(m.avg_monthly_searches) || 0;
      const compIdx = Number(m.competition_index) || 0;
      const comp    = m.competition || 'UNKNOWN';
      const lowCpc  = ((Number(m.low_top_of_page_bid_micros)  || 0) / 1_000_000);
      const highCpc = ((Number(m.high_top_of_page_bid_micros) || 0) / 1_000_000);
      const trend   = (m.monthly_search_volumes || []).map(mv => Number(mv.monthly_searches) || 0);
      const trendStr = trend.slice(-6).join(' → ');

      return {
        keyword,
        avg_monthly_searches: avg,
        competition:          comp,
        competition_index:    compIdx,
        cpc_low:              lowCpc.toFixed(2),
        cpc_high:             highCpc.toFixed(2),
        trend_6m:             trendStr,
        priority:
          avg >= 100 && comp === 'LOW'  ? '🥇 ذهبية'
        : avg >= 50  && comp === 'LOW'  ? '⭐ ممتازة'
        : avg >= 10  && comp === 'LOW'  ? '💎 جيدة'
        : avg >= 500                    ? '🔥 حجم ضخم'
        : avg >= 100                    ? '📈 حجم عالي'
        : avg > 0                       ? '📌 عادية'
        : '—',
        category:
          keyword.includes('سعر') || keyword.includes('اسعار') || keyword.includes('تكلفة') || keyword.includes('كم') ? '💰 سعر'
        : keyword.includes('اسكندرية') || keyword.includes('القاهرة') || keyword.includes('الجيزة')
          || keyword.includes('نصر') || keyword.includes('التجمع') || keyword.includes('المعادي')
          || keyword.includes('اكتوبر') || keyword.includes('زايد') || keyword.includes('قريبي')
          || keyword.includes('محافظ') ? '📍 جغرافي'
        : keyword.includes('رخام') || keyword.includes('سيراميك') || keyword.includes('بورسلين')
          || keyword.includes('بلاط') ? '🪨 مواد حساسة'
        : keyword.includes('ماكينة') || keyword.includes('جهاز') || keyword.includes('بنط')
          || keyword.includes('اسطوانة') || keyword.includes('رأس') || keyword.includes('درل')
          || keyword.includes('مثقاب') ? '⚙️ ماكينات'
        : keyword.includes('كيف') || keyword.includes('طريقة') || keyword.includes('هل')
          || keyword.includes('ما هو') || keyword.includes('ما هي') ? '❓ أسئلة'
        : keyword.includes('غاز') || keyword.includes('تكييف') || keyword.includes('سباكة')
          || keyword.includes('شفاط') || keyword.includes('مدخنة') || keyword.includes('صرف')
          || keyword.includes('كهرباء') || keyword.includes('تهوية') || keyword.includes('مواسير') ? '🔧 تطبيقات'
        : keyword.includes('بدون') || keyword.includes('نظيف') || keyword.includes('دقيق')
          || keyword.includes('بديل') ? '✨ مزايا'
        : keyword.match(/[a-zA-Z]/) ? '🌐 إنجليزي'
        : '🔑 أساسي',
      };
    }).sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);

    // تصنيفات
    const withData  = results.filter(r => r.avg_monthly_searches > 0);
    const golden    = results.filter(r => r.priority === '🥇 ذهبية');
    const excellent = results.filter(r => r.priority === '⭐ ممتازة');
    const good      = results.filter(r => r.priority === '💎 جيدة');
    const highVol   = results.filter(r => r.avg_monthly_searches >= 200);
    const noData    = results.filter(r => r.avg_monthly_searches === 0);

    // طباعة
    console.log('📊 أفضل الكلمات بحجم بحث:');
    console.table(withData.slice(0, 40).map(r => ({
      'الكلمة':      r.keyword,
      'حجم/شهر':     r.avg_monthly_searches,
      'المنافسة':    COMP_AR[r.competition] || r.competition,
      'مؤشر':        r.competition_index,
      'CPC أعلى':    r.cpc_high + ' ج',
      'الأولوية':    r.priority,
      'الفئة':       r.category,
    })));

    console.log('\n🥇 الفرص الذهبية (منخفضة + 100+):');
    golden.forEach(r => console.log(`   ⭐ ${r.keyword} | ${r.avg_monthly_searches}/شهر | ${r.category}`));
    console.log('\n⭐ الفرص الممتازة (منخفضة + 50-99):');
    excellent.forEach(r => console.log(`   • ${r.keyword} | ${r.avg_monthly_searches}/شهر`));
    console.log('\n💎 الفرص الجيدة (منخفضة + 10-49):');
    good.forEach(r => console.log(`   · ${r.keyword} | ${r.avg_monthly_searches}/شهر`));

    console.log(`\n════════════════════════════════════`);
    console.log(`📈 ملخص نهائي:`);
    console.log(`   📦 إجمالي: ${results.length} | 📊 بحجم بحث: ${withData.length}`);
    console.log(`   🥇 ذهبية: ${golden.length} | ⭐ ممتازة: ${excellent.length} | 💎 جيدة: ${good.length}`);
    console.log(`   🔥 حجم 200+: ${highVol.length} | ⚠️ بدون بيانات: ${noData.length}`);

    // ── Excel ────────────────────────────────────────────────────────────────
    const wb = XLSX.utils.book_new();

    const COL_WIDTHS = [
      { wch: 4 }, { wch: 40 }, { wch: 16 }, { wch: 16 },
      { wch: 16 }, { wch: 13 }, { wch: 13 }, { wch: 32 },
      { wch: 14 }, { wch: 14 },
    ];

    function toRow(r, i) {
      return {
        '#':                   i + 1,
        'الكلمة المفتاحية':   r.keyword,
        'حجم البحث / شهر':    r.avg_monthly_searches,
        'المنافسة':            COMP_AR[r.competition] || r.competition,
        'مؤشر المنافسة /100': r.competition_index,
        'CPC أدنى (ج)':       parseFloat(r.cpc_low)  || 0,
        'CPC أعلى (ج)':       parseFloat(r.cpc_high) || 0,
        'اتجاه آخر 6 أشهر':   r.trend_6m,
        'الأولوية':            r.priority,
        'الفئة':               r.category,
      };
    }

    function addSheet(name, rows) {
      if (!rows.length) return;
      const ws = XLSX.utils.json_to_sheet(rows.map(toRow));
      ws['!cols'] = COL_WIDTHS;
      XLSX.utils.book_append_sheet(wb, ws, name);
    }

    // Sheets
    addSheet('جميع الكلمات', results);
    addSheet('الفرص الذهبية 🥇', [...golden, ...excellent, ...good]);
    addSheet('حجم بحث عالي 🔥', highVol);

    // شيت حسب الفئة
    const categories = [...new Set(results.map(r => r.category))];
    for (const cat of categories) {
      const rows = results.filter(r => r.category === cat && r.avg_monthly_searches > 0);
      if (rows.length > 0)
        addSheet(cat.replace(/[^\u0600-\u06FFa-zA-Z0-9 ]/g, '').trim().slice(0, 25), rows);
    }

    // Sheet — بدون بيانات
    if (noData.length > 0) {
      const ws = XLSX.utils.json_to_sheet(noData.map((r, i) => ({
        '#': i + 1, 'الكلمة': r.keyword, 'الفئة': r.category,
        'ملاحظة': 'حجم بحث 0 — جرّب صياغة مختلفة',
      })));
      ws['!cols'] = [{ wch: 4 }, { wch: 40 }, { wch: 14 }, { wch: 35 }];
      XLSX.utils.book_append_sheet(wb, ws, 'بدون بيانات ⚠️');
    }

    // Sheet — ملخص
    const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' });
    const wsSummary = XLSX.utils.json_to_sheet([
      { 'البيان': '📅 تاريخ الاكتشاف',             'القيمة': now },
      { 'البيان': '📋 إجمالي الكلمات المختبرة',    'القيمة': results.length },
      { 'البيان': '📊 كلمات بحجم بحث > 0',          'القيمة': withData.length },
      { 'البيان': '🥇 فرص ذهبية (منخفض + 100+)',    'القيمة': golden.length },
      { 'البيان': '⭐ فرص ممتازة (منخفض + 50-99)',   'القيمة': excellent.length },
      { 'البيان': '💎 فرص جيدة (منخفض + 10-49)',     'القيمة': good.length },
      { 'البيان': '🔥 حجم بحث 200+',                'القيمة': highVol.length },
      { 'البيان': '⚠️ بدون بيانات',                 'القيمة': noData.length },
      { 'البيان': '', 'القيمة': '' },
      { 'البيان': '════ 🥇 الفرص الذهبية ════', 'القيمة': '' },
      ...golden.map(r => ({ 'البيان': `  ⭐ ${r.keyword}`, 'القيمة': `${r.avg_monthly_searches} بحث/شهر | CPC: ${r.cpc_high} ج | ${r.category}` })),
      { 'البيان': '', 'القيمة': '' },
      { 'البيان': '════ ⭐ الفرص الممتازة ════', 'القيمة': '' },
      ...excellent.map(r => ({ 'البيان': `  • ${r.keyword}`, 'القيمة': `${r.avg_monthly_searches} بحث/شهر | ${r.category}` })),
      { 'البيان': '', 'القيمة': '' },
      { 'البيان': '════ 💎 الفرص الجيدة ════', 'القيمة': '' },
      ...good.map(r => ({ 'البيان': `  · ${r.keyword}`, 'القيمة': `${r.avg_monthly_searches} بحث/شهر | ${r.category}` })),
    ]);
    wsSummary['!cols'] = [{ wch: 42 }, { wch: 50 }];
    XLSX.utils.book_append_sheet(wb, wsSummary, 'ملخص الاكتشاف 📋');

    // حفظ + نسخ
    const xlsxPath = path.join(ROOT, 'core-discover-full.xlsx');
    const jsonPath = path.join(ROOT, 'core-discover-full.json');
    XLSX.writeFile(wb, xlsxPath);
    fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf-8');

    const desktopFolder = 'C:\\Users\\i7\\Desktop\\الكلمات المفتاحية';
    if (fs.existsSync(desktopFolder)) {
      fs.copyFileSync(xlsxPath, path.join(desktopFolder, 'core-discover-full.xlsx'));
      fs.copyFileSync(jsonPath, path.join(desktopFolder, 'core-discover-full.json'));
      console.log('\n📁 تم النسخ لفولدر "الكلمات المفتاحية" على سطح المكتب ✅');
    }

    const { exec } = await import('child_process');
    exec(`powershell -Command "Start-Process '${xlsxPath}'"`, () => {});
    console.log('🚀 جارٍ فتح الشيت...\n');

  } catch (err) {
    console.error('\n❌ خطأ:');
    if (err.errors) err.errors.forEach(e => console.error(' -', e.message));
    else console.error(err.message || err);
    process.exit(1);
  }
}

main();
