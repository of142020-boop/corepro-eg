/**
 * Core Page Keywords — تحليل كلمات صفحة الكور
 * الكلمات المستخرجة من: src/pages/core/index.astro + corePage.tsx
 */

import { GoogleAdsApi, enums } from 'google-ads-api';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

const customer = client.Customer({
  customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
});

// ─── الكلمات المستخرجة من صفحة الكور ──────────────────────────────────────
const CORE_PAGE_KEYWORDS = [
  // الكلمات الرئيسية (H1 + Title + Description)
  'صنايعي كور',
  'فتحات كور',
  'تخريم الخرسانة بالكور',
  'كور دريل',
  'تخريم بلاطة',
  'حفر خرسانة بالكور',
  'اسعار فتحات الكور',
  'صنايعي كور في مصر',

  // كلمات من المحتوى النصي
  'جهاز تخريم الخرسانه',
  'ماكينة كور تخريم الخرسانة',
  'فتحات كور خرسانة',
  'فتحة كور',
  'فتح كور في الكمر',
  'تخريم السقف',
  'عمل فتحات الغاز',
  'عمل فتحة مدخنة السخان',
  'تخريم الجدار',
  'تخريم الرخام',
  'تخريم السيراميك',
  'تخريم كور',

  // كلمات من H2/H3 والأقسام
  'عمل فتحات كور',
  'فتحات خرسانة',
  'ماكينة الكور',
  'دريل الكور',
  'سعر فتحات الكور',
  'سعر فتحة الكور',
  'ماكينة كور دريل',
  'سعر ماكينة كور دريل',
  'اسعار ماكينة كور تخريم الخرسانة',

  // كلمات FAQ
  'صنايعي كور اسكندرية',
  'معلم قص جدار',
  'تركيب شفاط مطبخ',
  'فني تركيب شفاط مطبخ',

  // كلمات طويلة الذيل (Long-tail)
  'فتحات كور في الإسكندرية',
  'صنايعي كور قريبي',
  'صنايعي كور احترافي',
  'عمل فتحة في سقف خرساني',
  'عمل فتحة في الجدار',
  'تخريم بلاطة الارضيات',
];

const MONTHS_AR = {
  JANUARY: 'يناير', FEBRUARY: 'فبراير', MARCH: 'مارس',
  APRIL: 'أبريل', MAY: 'مايو', JUNE: 'يونيو',
  JULY: 'يوليو', AUGUST: 'أغسطس', SEPTEMBER: 'سبتمبر',
  OCTOBER: 'أكتوبر', NOVEMBER: 'نوفمبر', DECEMBER: 'ديسمبر',
};

const COMP_EMOJI = { LOW: '🟢 منخفض', MEDIUM: '🟡 متوسط', HIGH: '🔴 عالي', UNSPECIFIED: '⚪ غير محدد' };
const COMP_CLASS = { LOW: 'green', MEDIUM: 'orange', HIGH: 'red', UNSPECIFIED: 'gray' };

function buildHTML(results) {
  const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' });
  const maxVol = Math.max(...results.map(x => x.avg_monthly_searches), 1);

  const rows = results.map((r, i) => {
    const cls = COMP_CLASS[r.competition] || 'gray';
    const volBar = Math.min(100, (r.avg_monthly_searches / maxVol * 100)).toFixed(0);
    const rowBg = i % 2 === 0 ? '' : 'style="background:#f8fafc"';
    return `<tr ${rowBg}>
      <td><strong dir="rtl">${r.keyword}</strong></td>
      <td>
        <div class="vol-wrap">
          <div class="vol-bar"><div class="vol-fill" style="width:${volBar}%"></div></div>
          <span class="vol-num">${r.avg_monthly_searches.toLocaleString()}</span>
        </div>
      </td>
      <td><span class="badge ${cls}">${COMP_EMOJI[r.competition] || r.competition}</span></td>
      <td>${r.competition_index}<span style="color:#94a3b8">/100</span></td>
      <td class="${r.cpc_low_egp > 0 ? 'cpc' : 'na'}">${r.cpc_low_egp > 0 ? r.cpc_low_egp + ' ج' : '—'}</td>
      <td class="${r.cpc_high_egp > 0 ? 'cpc' : 'na'}">${r.cpc_high_egp > 0 ? r.cpc_high_egp + ' ج' : '—'}</td>
      <td class="trend">${r.monthly_trend.slice(-6).map(m => `<span title="${MONTHS_AR[m.month] || m.month} ${m.year}">${m.searches > 0 ? m.searches.toLocaleString() : '–'}</span>`).join('')}</td>
    </tr>`;
  }).join('');

  const totalVol = results.reduce((s, r) => s + r.avg_monthly_searches, 0);
  const highVol = results.filter(r => r.avg_monthly_searches >= 100).length;
  const lowComp = results.filter(r => r.competition === 'LOW').length;
  const bestOpps = results.filter(r => r.competition === 'LOW' && r.avg_monthly_searches >= 50);
  const avgCpc = results.filter(r => r.cpc_high_egp > 0).reduce((s, r) => s + parseFloat(r.cpc_high_egp), 0)
    / (results.filter(r => r.cpc_high_egp > 0).length || 1);

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Core Pro — تحليل كلمات صفحة الكور</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Cairo', sans-serif; background: #0f1117; color: #e2e8f0; padding: 24px; direction: rtl; }
  h1 { color: #fff; font-size: 1.9rem; font-weight: 900; }
  .sub { color: #64748b; font-size: 0.85rem; margin: 6px 0 28px; }

  .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; margin-bottom: 28px; }
  .kpi { background: #1a1d27; border: 1px solid #2a2d3e; border-radius: 14px; padding: 18px; text-align: center; }
  .kpi .val { font-size: 1.8rem; font-weight: 900; }
  .kpi .val.blue { color: #6366f1; }
  .kpi .val.green { color: #22c55e; }
  .kpi .val.orange { color: #f59e0b; }
  .kpi .val.purple { color: #a855f7; }
  .kpi .lbl { font-size: 0.72rem; color: #64748b; margin-top: 5px; }

  /* Best opps */
  .best-opps { margin-bottom: 24px; background: #111827; border: 1px solid #1e3a5f; border-radius: 14px; padding: 18px 20px; }
  .best-opps h2 { color: #38bdf8; font-size: 1rem; margin-bottom: 12px; }
  .opp-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .opp-chip { background: #1e3a5f; color: #bae6fd; border-radius: 20px; padding: 4px 14px; font-size: 0.78rem; font-weight: 700; }
  .opp-chip span { color: #38bdf8; margin-right: 6px; }

  .card { background: #1a1d27; border: 1px solid #2a2d3e; border-radius: 14px; overflow: hidden; }
  .card-head { padding: 14px 20px; border-bottom: 1px solid #2a2d3e; display: flex; align-items: center; gap: 10px; }
  .card-head h2 { font-size: 1rem; color: #fff; }
  .cnt { background: #6366f1; color: #fff; border-radius: 20px; padding: 2px 12px; font-size: 0.72rem; font-weight: 700; }

  .tbl-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
  th { padding: 10px 14px; text-align: right; background: #13151f; color: #64748b; font-weight: 700; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.04em; white-space: nowrap; }
  td { padding: 10px 14px; border-top: 1px solid #1e2130; white-space: nowrap; vertical-align: middle; }
  tr:hover td { background: #1e2234 !important; }

  .badge { display: inline-block; padding: 3px 12px; border-radius: 8px; font-size: 0.72rem; font-weight: 700; }
  .badge.green  { background: #14532d; color: #86efac; }
  .badge.orange { background: #78350f; color: #fcd34d; }
  .badge.red    { background: #7f1d1d; color: #fca5a5; }
  .badge.gray   { background: #1e293b; color: #94a3b8; }

  .vol-wrap { display: flex; align-items: center; gap: 8px; }
  .vol-bar  { width: 80px; height: 5px; background: #2a2d3e; border-radius: 4px; flex-shrink: 0; }
  .vol-fill { height: 100%; background: linear-gradient(90deg, #6366f1, #a855f7); border-radius: 4px; }
  .vol-num  { font-weight: 700; color: #e2e8f0; min-width: 40px; }

  .cpc { color: #34d399; font-weight: 700; }
  .na  { color: #475569; }

  .trend span { display: inline-block; font-size: 0.65rem; background: #1e293b; color: #94a3b8; border-radius: 4px; padding: 2px 5px; margin: 1px; cursor: default; }

  .footer { text-align: center; color: #334155; font-size: 0.75rem; margin-top: 28px; }
</style>
</head>
<body>
<h1>🔑 تحليل كلمات صفحة الكور</h1>
<p class="sub">بيانات Google Ads API لمصر (العربية) | آخر تحديث: ${now}</p>

<div class="kpi-grid">
  <div class="kpi"><div class="val blue">${results.length}</div><div class="lbl">🔑 إجمالي الكلمات</div></div>
  <div class="kpi"><div class="val">${totalVol.toLocaleString()}</div><div class="lbl">📊 إجمالي البحث / شهر</div></div>
  <div class="kpi"><div class="val green">${lowComp}</div><div class="lbl">🟢 منافسة منخفضة</div></div>
  <div class="kpi"><div class="val orange">${highVol}</div><div class="lbl">🔥 بحث عالي (100+)</div></div>
  <div class="kpi"><div class="val purple">${bestOpps.length}</div><div class="lbl">⭐ أفضل الفرص</div></div>
  <div class="kpi"><div class="val">${avgCpc.toFixed(2)} ج</div><div class="lbl">💰 متوسط CPC</div></div>
</div>

${bestOpps.length > 0 ? `
<div class="best-opps">
  <h2>⭐ أفضل الفرص — منافسة منخفضة + حجم بحث جيد (50+)</h2>
  <div class="opp-chips">
    ${bestOpps.map(r => `<div class="opp-chip"><span>${r.avg_monthly_searches.toLocaleString()}/شهر</span>${r.keyword}</div>`).join('')}
  </div>
</div>` : ''}

<div class="card">
  <div class="card-head">
    <h2>📊 جميع الكلمات — مرتبة حسب حجم البحث</h2>
    <span class="cnt">${results.length} كلمة</span>
  </div>
  <div class="tbl-wrap">
    <table>
      <thead><tr>
        <th>#</th>
        <th>الكلمة المفتاحية</th>
        <th>حجم البحث / شهر</th>
        <th>المنافسة</th>
        <th>مؤشر</th>
        <th>CPC أدنى</th>
        <th>CPC أعلى</th>
        <th>آخر 6 أشهر</th>
      </tr></thead>
      <tbody>
        ${results.map((r, i) => {
          const cls = COMP_CLASS[r.competition] || 'gray';
          const volBar = Math.min(100, (r.avg_monthly_searches / maxVol * 100)).toFixed(0);
          const rowBg = i % 2 === 0 ? '' : 'style="background:#13151f"';
          return `<tr ${rowBg}>
            <td style="color:#475569">${i + 1}</td>
            <td><strong>${r.keyword}</strong></td>
            <td>
              <div class="vol-wrap">
                <div class="vol-bar"><div class="vol-fill" style="width:${volBar}%"></div></div>
                <span class="vol-num">${r.avg_monthly_searches.toLocaleString()}</span>
              </div>
            </td>
            <td><span class="badge ${cls}">${COMP_EMOJI[r.competition] || r.competition}</span></td>
            <td>${r.competition_index}<span style="color:#475569">/100</span></td>
            <td class="${r.cpc_low_egp > 0 ? 'cpc' : 'na'}">${r.cpc_low_egp > 0 ? r.cpc_low_egp + ' ج' : '—'}</td>
            <td class="${r.cpc_high_egp > 0 ? 'cpc' : 'na'}">${r.cpc_high_egp > 0 ? r.cpc_high_egp + ' ج' : '—'}</td>
            <td class="trend">${r.monthly_trend.slice(-6).map(m => `<span title="${MONTHS_AR[m.month] || m.month} ${m.year}">${m.searches > 0 ? m.searches : '–'}</span>`).join('')}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>
</div>

<div class="footer">Core Pro — Keyword Analysis for /core page | ${now}</div>
</body>
</html>`;
}

async function main() {
  console.log('\n🔑 تحليل كلمات صفحة الكور — Core Pro\n');
  console.log(`📋 عدد الكلمات: ${CORE_PAGE_KEYWORDS.length}`);
  console.log('📍 المنطقة: مصر | اللغة: العربية\n');

  try {
    const response = await customer.keywordPlanIdeas.generateKeywordHistoricalMetrics({
      customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
      keywords: CORE_PAGE_KEYWORDS,
      language: 'languageConstants/1019',
      geo_target_constants: ['geoTargetConstants/2818'],
      keyword_plan_network: enums.KeywordPlanNetwork.GOOGLE_SEARCH,
    });

    const rawResults = response?.results || [];
    console.log(`✅ تم جلب بيانات ${rawResults.length} كلمة\n`);

    const results = rawResults.map((item, i) => {
      const m = item.keyword_metrics || {};
      const avg = Number(m.avg_monthly_searches) || 0;
      const compIndex = Number(m.competition_index) || 0;
      const lowCpc  = (Number(m.low_top_of_page_bid_micros)  || 0) / 1_000_000;
      const highCpc = (Number(m.high_top_of_page_bid_micros) || 0) / 1_000_000;
      const trend = (m.monthly_search_volumes || []).map(mv => ({
        month: mv.month, year: mv.year,
        searches: Number(mv.monthly_searches) || 0,
      }));

      return {
        keyword: CORE_PAGE_KEYWORDS[i] || `keyword_${i}`,
        avg_monthly_searches: avg,
        competition: m.competition || 'UNKNOWN',
        competition_index: compIndex,
        cpc_low_egp:  lowCpc.toFixed(2),
        cpc_high_egp: highCpc.toFixed(2),
        monthly_trend: trend,
      };
    }).sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);

    // Console output
    const tableData = results.map(r => ({
      'الكلمة': r.keyword,
      'حجم البحث': r.avg_monthly_searches,
      'المنافسة': r.competition === 'LOW' ? '🟢 منخفض' : r.competition === 'HIGH' ? '🔴 عالي' : r.competition === 'MEDIUM' ? '🟡 متوسط' : r.competition,
      'مؤشر': r.competition_index,
      'CPC أعلى': r.cpc_high_egp + ' ج',
    }));
    console.table(tableData);

    // Stats
    const highVol  = results.filter(r => r.avg_monthly_searches >= 100);
    const lowComp  = results.filter(r => r.competition === 'LOW');
    const bestOpps = results.filter(r => r.competition === 'LOW' && r.avg_monthly_searches >= 50);
    const missing  = results.filter(r => r.avg_monthly_searches === 0);

    console.log('\n📈 ملخص:');
    console.log(`  🔥 كلمات بحجم 100+ بحث: ${highVol.length}`);
    console.log(`  🟢 منافسة منخفضة: ${lowComp.length}`);
    console.log(`  ⭐ أفضل فرص (منخفضة + 50+): ${bestOpps.length}`);
    console.log(`  ⚠️  كلمات بدون بيانات: ${missing.length}`);
    if (bestOpps.length > 0) {
      console.log('\n  🏆 أفضل الفرص:');
      bestOpps.forEach(r => console.log(`     • ${r.keyword} → ${r.avg_monthly_searches}/شهر | CPC: ${r.cpc_high_egp} ج`));
    }

    // Save files
    const jsonPath = 'core-page-keywords.json';
    fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf-8');
    console.log(`\n💾 JSON: ${jsonPath}`);

    const html = buildHTML(results);
    const htmlPath = path.join(__dirname, '..', 'core-page-keywords.html');
    fs.writeFileSync(htmlPath, html, 'utf-8');
    console.log(`📊 HTML Dashboard: core-page-keywords.html`);

    const { exec } = await import('child_process');
    exec(`powershell -Command "Start-Process '${htmlPath}'"`, () => {});
    console.log('\n✅ تم! جارٍ فتح التقرير في المتصفح...\n');

  } catch (err) {
    console.error('\n❌ خطأ:');
    if (err.errors) {
      err.errors.forEach(e => console.error(' -', e.message));
    } else {
      console.error(err.message || err);
    }
    process.exit(1);
  }
}

main();
