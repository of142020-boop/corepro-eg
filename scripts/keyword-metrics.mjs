/**
 * Core Pro — Keyword Historical Metrics (Fixed)
 * Gets real search volume, competition, and CPC data
 * for specific keywords in Egypt (Arabic).
 *
 * Run: node scripts/keyword-metrics.mjs
 * Or:  npm run gads:metrics
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

// Core Pro target keywords — Arabic + Egyptian market
const TARGET_KEYWORDS = [
  // ── كلمات الكور (Core Drilling) ──────────────────────────────
  'صنايعي كور',
  'فتحات كور',
  'تخريم الخرسانة بالكور',
  'تخريم بلاطة',
  'حفر خرسانة بالكور',
  'كور دريل',
  'تخريم خرسانة',
  'ماكينة كور تخريم الخرسانة',
  'فتحات كور خرسانة',
  'اسعار فتحات الكور',
  'صنايعي كور في مصر',
  'تخريم السقف',
  'فتح كور في الكمر',
  'عمل فتحات الغاز',
  'عمل فتحة مدخنة السخان',
  'تخريم الجدار',
  'تخريم الرخام',
  'تخريم السيراميك',
  'صنايعي تخريم',
  'جهاز تخريم الخرسانه',
  // ── كلمات المنشار (Concrete Sawing) ─────────────────────────
  'قص الخرسانة بالمنشار',
  'مقاول قص خرسانة',
  'قص الخرسانة بالليزر',
  'تقطيع الخرسانة بالمنشار',
  'قص جدار بالمنشار',
  'قص خرسانة السقف',
  'قص الخرسانة المسلحة',
  'معلم قص جدار',
  'صاروخ قص الخرسانة',
  'منشار تقطيع الخرسانة',
  'اسعار قص الخرسانة',
  'شركة قص خرسانة',
  'ماكينة قص الخرسانة',
  'قص خرسانة',
  'تقطيع خرسانة',
  'قطع خرسانة',
  // ── شفاطات المطبخ (Hoods) ─────────────────────────────────
  'شفاط مطبخ',
  'تركيب شفاط مطبخ',
  // ── كلمات جغرافية (Location-specific) ──────────────────────
  'صنايعي كور اسكندرية',
  'قص خرسانة في القاهرة',
  'تخريم كور القاهرة',
  'تخريم كور مدينة نصر',
  'تخريم كور التجمع الخامس',
  'تخريم كور المعادي',
  'تخريم كور الشيخ زايد',
];

const MONTHS_AR = {
  JANUARY: 'يناير', FEBRUARY: 'فبراير', MARCH: 'مارس',
  APRIL: 'أبريل', MAY: 'مايو', JUNE: 'يونيو',
  JULY: 'يوليو', AUGUST: 'أغسطس', SEPTEMBER: 'سبتمبر',
  OCTOBER: 'أكتوبر', NOVEMBER: 'نوفمبر', DECEMBER: 'ديسمبر',
};

const COMP_EMOJI = { LOW: '🟢 منخفض', MEDIUM: '🟡 متوسط', HIGH: '🔴 عالي' };

function buildHTML(results) {
  const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' });

  const rows = results.map((r, i) => {
    const compClass = r.competition === 'LOW' ? 'green' : r.competition === 'HIGH' ? 'red' : 'orange';
    const vol = r.avg_monthly_searches;
    const volBar = Math.min(100, (vol / Math.max(...results.map(x => x.avg_monthly_searches)) * 100)).toFixed(0);
    return `<tr>
      <td><strong>${r.keyword}</strong></td>
      <td>
        <div class="vol-bar"><div class="vol-fill" style="width:${volBar}%"></div></div>
        <span>${vol.toLocaleString()}</span>
      </td>
      <td><span class="badge ${compClass}">${COMP_EMOJI[r.competition] || r.competition}</span></td>
      <td>${r.competition_index}/100</td>
      <td>${r.cpc_low_egp} EGP</td>
      <td>${r.cpc_high_egp} EGP</td>
      <td>${r.monthly_trend.map(m => `<span title="${MONTHS_AR[m.month]} ${m.year}">${m.searches}</span>`).join(' ')}</td>
    </tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Core Pro — Keyword Metrics</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Cairo', sans-serif; background: #0f1117; color: #e2e8f0; padding: 24px; }
  h1 { color: #fff; font-size: 1.8rem; margin-bottom: 4px; }
  .subtitle { color: #94a3b8; font-size: 0.875rem; margin-bottom: 28px; }

  .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; margin-bottom: 28px; }
  .kpi { background: #1a1d27; border: 1px solid #2a2d3e; border-radius: 12px; padding: 18px; text-align: center; }
  .kpi .val { font-size: 1.7rem; font-weight: 700; color: #fff; }
  .kpi .val.green { color: #22c55e; }
  .kpi .val.orange { color: #f59e0b; }
  .kpi .val.blue { color: #6366f1; }
  .kpi .lbl { font-size: 0.72rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.04em; margin-top: 4px; }

  .card { background: #1a1d27; border: 1px solid #2a2d3e; border-radius: 12px; overflow: hidden; }
  .card-header { padding: 14px 20px; border-bottom: 1px solid #2a2d3e; display: flex; align-items: center; gap: 10px; }
  .card-header h2 { font-size: 1rem; color: #fff; }
  .cnt { background: #6366f1; color: #fff; border-radius: 20px; padding: 2px 10px; font-size: 0.72rem; font-weight: 700; }

  .table-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: 0.83rem; }
  th { padding: 10px 14px; text-align: right; background: #13151f; color: #94a3b8; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; white-space: nowrap; }
  td { padding: 10px 14px; border-top: 1px solid #1e2130; white-space: nowrap; vertical-align: middle; }
  tr:hover td { background: #1e2234; }

  .badge { display: inline-block; padding: 2px 10px; border-radius: 8px; font-size: 0.72rem; font-weight: 700; }
  .badge.green  { background: #14532d; color: #86efac; }
  .badge.orange { background: #78350f; color: #fcd34d; }
  .badge.red    { background: #7f1d1d; color: #fca5a5; }

  .vol-bar { height: 4px; background: #2a2d3e; border-radius: 4px; margin-bottom: 4px; width: 100px; }
  .vol-fill { height: 100%; background: linear-gradient(90deg, #6366f1, #8b5cf6); border-radius: 4px; }

  /* Trend sparkline */
  td:last-child span { display: inline-block; width: 18px; height: 18px; line-height: 18px; text-align: center; font-size: 0.65rem; background: #1e293b; border-radius: 3px; margin: 1px; color: #94a3b8; cursor: default; }

  .footer { text-align: center; color: #475569; font-size: 0.78rem; margin-top: 28px; }
</style>
</head>
<body>
<h1>🔑 Core Pro — Keyword Metrics</h1>
<p class="subtitle">بيانات حقيقية من Google Ads API | آخر تحديث: ${now}</p>

<div class="kpi-grid">
  <div class="kpi">
    <div class="val blue">${results.length}</div>
    <div class="lbl">🔑 إجمالي الكلمات</div>
  </div>
  <div class="kpi">
    <div class="val">${results.reduce((s,r) => s + r.avg_monthly_searches, 0).toLocaleString()}</div>
    <div class="lbl">📊 إجمالي البحث/شهر</div>
  </div>
  <div class="kpi">
    <div class="val green">${results.filter(r => r.competition === 'LOW').length}</div>
    <div class="lbl">🟢 منافسة منخفضة</div>
  </div>
  <div class="kpi">
    <div class="val orange">${results.filter(r => r.avg_monthly_searches >= 100).length}</div>
    <div class="lbl">🔥 بحث عالي (100+)</div>
  </div>
  <div class="kpi">
    <div class="val">${(results.reduce((s,r) => s + parseFloat(r.cpc_high_egp), 0) / results.length).toFixed(2)} EGP</div>
    <div class="lbl">💰 متوسط CPC Max</div>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <h2>📊 الكلمات المفتاحية — مرتبة حسب حجم البحث</h2>
    <span class="cnt">${results.length} كلمة</span>
  </div>
  <div class="table-wrap">
    <table>
      <thead><tr>
        <th>الكلمة</th>
        <th>حجم البحث / شهر</th>
        <th>المنافسة</th>
        <th>مؤشر المنافسة</th>
        <th>CPC أدنى</th>
        <th>CPC أعلى</th>
        <th>الاتجاه (12 شهر) ↑</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
</div>

<div class="footer">Core Pro — Google Ads Keyword Analysis | ${now}</div>
</body>
</html>`;
}

async function main() {
  console.log('\n📊 Core Pro — Keyword Historical Metrics\n');
  console.log(`🔑 عدد الكلمات: ${TARGET_KEYWORDS.length}`);
  console.log('📍 المنطقة: مصر | اللغة: العربية\n');

  try {
    const response = await customer.keywordPlanIdeas.generateKeywordHistoricalMetrics({
      customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
      keywords: TARGET_KEYWORDS,
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
      const trend   = (m.monthly_search_volumes || []).map(mv => ({
        month: mv.month,
        year: mv.year,
        searches: Number(mv.monthly_searches) || 0,
      }));

      return {
        keyword: TARGET_KEYWORDS[i] || `keyword_${i}`,
        avg_monthly_searches: avg,
        competition: m.competition || 'UNKNOWN',
        competition_index: compIndex,
        cpc_low_egp:  lowCpc.toFixed(2),
        cpc_high_egp: highCpc.toFixed(2),
        monthly_trend: trend,
      };
    }).sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);

    // Console table (without trend for readability)
    const tableData = results.map(r => ({
      keyword: r.keyword,
      avg_monthly_searches: r.avg_monthly_searches,
      competition: COMP_EMOJI[r.competition] || r.competition,
      competition_index: r.competition_index,
      cpc_low_egp: r.cpc_low_egp,
      cpc_high_egp: r.cpc_high_egp,
    }));
    console.table(tableData);

    // Stats
    const highVol = results.filter(r => r.avg_monthly_searches >= 100);
    const lowComp = results.filter(r => r.competition === 'LOW');
    const bestOpps = results.filter(r => r.competition === 'LOW' && r.avg_monthly_searches >= 50);

    console.log('\n📈 ملخص:');
    console.log(`  🔥 كلمات بحجم عالي (100+/شهر): ${highVol.length}`);
    console.log(`  🟢 كلمات بمنافسة منخفضة: ${lowComp.length}`);
    console.log(`  ⭐ أفضل فرص (منافسة منخفضة + حجم 50+): ${bestOpps.length}`);
    if (bestOpps.length > 0) {
      console.log('  🏆 أفضل كلمة:', bestOpps[0].keyword, `(${bestOpps[0].avg_monthly_searches}/شهر)`);
    }

    // Save JSON
    const jsonPath = path.join(__dirname, '..', 'keyword-metrics.json');
    fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf-8');
    console.log(`\n💾 JSON: keyword-metrics.json`);

    // Build & save HTML
    const html = buildHTML(results);
    const htmlPath = path.join(__dirname, '..', 'keyword-metrics.html');
    fs.writeFileSync(htmlPath, html, 'utf-8');
    console.log(`📊 HTML Dashboard: keyword-metrics.html`);

    // Open in browser
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
