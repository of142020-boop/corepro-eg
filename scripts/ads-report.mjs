/**
 * Core Pro — Google Ads Full Dashboard Report
 * Generates a comprehensive HTML report with campaign performance,
 * keyword analysis, and ad group data.
 *
 * Run: node scripts/ads-report.mjs
 */

import { GoogleAdsApi } from 'google-ads-api';
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

const STATUS_MAP = { 1: '✅ Enabled', 2: '✅ Enabled', 3: '⛔ Removed', 4: '⏸️ Paused' };
const MATCH_MAP  = { 1: 'EXACT', 2: 'PHRASE', 3: 'BROAD', 4: 'UNSPECIFIED' };

function fmt(micros)  { return (Number(micros) / 1_000_000).toFixed(2); }
function num(v)       { return Number(v) || 0; }
function pct(a, b)    { return b > 0 ? ((a / b) * 100).toFixed(1) + '%' : '0%'; }

async function fetchAll() {
  console.log('\n📊 Core Pro — Google Ads Report\n');

  // 1. Campaigns
  console.log('⏳ جلب بيانات الحملات...');
  const campaigns = await customer.query(`
    SELECT
      campaign.id, campaign.name, campaign.status,
      campaign.advertising_channel_type,
      campaign.bidding_strategy_type,
      metrics.impressions, metrics.clicks,
      metrics.cost_micros, metrics.ctr,
      metrics.average_cpc, metrics.conversions,
      metrics.cost_per_conversion
    FROM campaign
    ORDER BY metrics.cost_micros DESC
    LIMIT 20
  `);
  console.log(`  ✅ ${campaigns.length} حملة`);

  // 2. Ad Groups
  console.log('⏳ جلب بيانات المجموعات الإعلانية...');
  const adGroups = await customer.query(`
    SELECT
      campaign.name,
      ad_group.id, ad_group.name, ad_group.status,
      metrics.impressions, metrics.clicks,
      metrics.cost_micros, metrics.ctr, metrics.average_cpc,
      metrics.conversions
    FROM ad_group
    ORDER BY metrics.clicks DESC
    LIMIT 30
  `);
  console.log(`  ✅ ${adGroups.length} مجموعة إعلانية`);

  // 3. Keywords
  console.log('⏳ جلب بيانات الكلمات المفتاحية...');
  const keywords = await customer.query(`
    SELECT
      campaign.name,
      ad_group.name,
      ad_group_criterion.keyword.text,
      ad_group_criterion.keyword.match_type,
      ad_group_criterion.status,
      metrics.impressions, metrics.clicks,
      metrics.cost_micros, metrics.ctr,
      metrics.average_cpc, metrics.conversions,
      metrics.search_impression_share
    FROM keyword_view
    ORDER BY metrics.clicks DESC
    LIMIT 50
  `);
  console.log(`  ✅ ${keywords.length} كلمة مفتاحية`);

  // 4. Search Terms
  console.log('⏳ جلب search terms...');
  let searchTerms = [];
  try {
    searchTerms = await customer.query(`
      SELECT
        campaign.name,
        search_term_view.search_term,
        search_term_view.status,
        metrics.impressions, metrics.clicks,
        metrics.cost_micros, metrics.ctr,
        metrics.average_cpc, metrics.conversions
      FROM search_term_view
      WHERE metrics.impressions > 0
      ORDER BY metrics.clicks DESC
      LIMIT 50
    `);
    console.log(`  ✅ ${searchTerms.length} search term`);
  } catch(e) {
    console.log(`  ⚠️ Search terms: ${e.message?.slice(0,60)}`);
  }

  return { campaigns, adGroups, keywords, searchTerms };
}

function buildHTML({ campaigns, adGroups, keywords, searchTerms }) {
  const now = new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' });

  // Summary totals
  const totals = campaigns.reduce((acc, r) => {
    const m = r.metrics;
    acc.impressions += num(m.impressions);
    acc.clicks      += num(m.clicks);
    acc.cost        += num(m.cost_micros) / 1e6;
    acc.conversions += num(m.conversions);
    return acc;
  }, { impressions: 0, clicks: 0, cost: 0, conversions: 0 });
  totals.ctr = pct(totals.clicks, totals.impressions);
  totals.avgCpc = totals.clicks > 0 ? (totals.cost / totals.clicks).toFixed(2) : '0';

  const campaignRows = campaigns.map(r => {
    const c = r.campaign, m = r.metrics;
    return `<tr>
      <td>${c.name}</td>
      <td><span class="badge ${num(m.impressions) > 0 ? 'green' : 'gray'}">${STATUS_MAP[c.status] || c.status}</span></td>
      <td>${num(m.impressions).toLocaleString()}</td>
      <td>${num(m.clicks).toLocaleString()}</td>
      <td>${pct(num(m.clicks), num(m.impressions))}</td>
      <td>${fmt(m.cost_micros)} EGP</td>
      <td>${fmt(m.average_cpc)} EGP</td>
      <td>${num(m.conversions)}</td>
    </tr>`;
  }).join('');

  const adGroupRows = adGroups.map(r => {
    const ag = r.ad_group, m = r.metrics;
    return `<tr>
      <td>${r.campaign.name}</td>
      <td>${ag.name}</td>
      <td><span class="badge ${ag.status === 2 ? 'green' : 'gray'}">${STATUS_MAP[ag.status] || ag.status}</span></td>
      <td>${num(m.impressions).toLocaleString()}</td>
      <td>${num(m.clicks).toLocaleString()}</td>
      <td>${pct(num(m.clicks), num(m.impressions))}</td>
      <td>${fmt(m.cost_micros)} EGP</td>
      <td>${fmt(m.average_cpc)} EGP</td>
    </tr>`;
  }).join('');

  const keywordRows = keywords.map(r => {
    const kw = r.ad_group_criterion.keyword, m = r.metrics;
    const imp = num(m.impressions);
    const clicks = num(m.clicks);
    return `<tr>
      <td><strong>${kw.text}</strong></td>
      <td><span class="badge blue">${MATCH_MAP[kw.match_type] || kw.match_type}</span></td>
      <td>${r.ad_group.name}</td>
      <td>${imp.toLocaleString()}</td>
      <td>${clicks.toLocaleString()}</td>
      <td>${pct(clicks, imp)}</td>
      <td>${fmt(m.cost_micros)} EGP</td>
      <td>${fmt(m.average_cpc)} EGP</td>
      <td>${num(m.conversions)}</td>
    </tr>`;
  }).join('');

  const stRows = searchTerms.map(r => {
    const m = r.metrics;
    const imp = num(m.impressions);
    const clicks = num(m.clicks);
    return `<tr>
      <td>${r.search_term_view.search_term}</td>
      <td>${r.campaign.name}</td>
      <td>${imp.toLocaleString()}</td>
      <td>${clicks.toLocaleString()}</td>
      <td>${pct(clicks, imp)}</td>
      <td>${fmt(m.cost_micros)} EGP</td>
      <td>${fmt(m.average_cpc)} EGP</td>
    </tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Core Pro — Google Ads Dashboard</title>
<style>
  :root {
    --bg: #0f1117;
    --card: #1a1d27;
    --border: #2a2d3e;
    --text: #e2e8f0;
    --muted: #94a3b8;
    --accent: #6366f1;
    --green: #22c55e;
    --blue: #3b82f6;
    --orange: #f59e0b;
    --red: #ef4444;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Cairo', -apple-system, sans-serif; background: var(--bg); color: var(--text); padding: 24px; }
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

  h1 { font-size: 1.8rem; color: #fff; margin-bottom: 4px; }
  .subtitle { color: var(--muted); font-size: 0.9rem; margin-bottom: 32px; }

  /* KPI Cards */
  .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; margin-bottom: 32px; }
  .kpi { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; text-align: center; }
  .kpi .value { font-size: 1.8rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .kpi .label { font-size: 0.78rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; }
  .kpi.accent { border-color: var(--accent); }
  .kpi .value.green { color: var(--green); }
  .kpi .value.orange { color: var(--orange); }

  /* Section */
  .section { background: var(--card); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 24px; overflow: hidden; }
  .section-header { padding: 16px 20px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; }
  .section-header h2 { font-size: 1rem; color: #fff; }
  .section-header .count { background: var(--accent); color: #fff; border-radius: 20px; padding: 2px 10px; font-size: 0.75rem; font-weight: 600; }

  /* Table */
  .table-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
  th { padding: 10px 14px; text-align: right; background: #13151f; color: var(--muted); font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em; white-space: nowrap; }
  td { padding: 10px 14px; border-top: 1px solid var(--border); color: var(--text); white-space: nowrap; }
  tr:hover td { background: #1e2130; }

  /* Badges */
  .badge { display: inline-block; padding: 2px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 600; }
  .badge.green { background: #14532d; color: #86efac; }
  .badge.gray  { background: #1e293b; color: #94a3b8; }
  .badge.blue  { background: #1e3a5f; color: #93c5fd; }
  .badge.orange{ background: #78350f; color: #fcd34d; }

  /* Footer */
  .footer { text-align: center; color: var(--muted); font-size: 0.8rem; margin-top: 32px; }

  .no-data { padding: 32px; text-align: center; color: var(--muted); }
</style>
</head>
<body>
<h1>🚀 Core Pro — Google Ads Dashboard</h1>
<p class="subtitle">آخر تحديث: ${now} | Customer ID: ${process.env.GOOGLE_ADS_CUSTOMER_ID}</p>

<!-- KPI Summary -->
<div class="kpi-grid">
  <div class="kpi accent">
    <div class="value">${totals.impressions.toLocaleString()}</div>
    <div class="label">👁️ Impressions</div>
  </div>
  <div class="kpi">
    <div class="value green">${totals.clicks.toLocaleString()}</div>
    <div class="label">🖱️ Clicks</div>
  </div>
  <div class="kpi">
    <div class="value orange">${totals.ctr}</div>
    <div class="label">📈 CTR</div>
  </div>
  <div class="kpi">
    <div class="value">${totals.cost.toFixed(2)} EGP</div>
    <div class="label">💰 Total Cost</div>
  </div>
  <div class="kpi">
    <div class="value">${totals.avgCpc} EGP</div>
    <div class="label">⚡ Avg CPC</div>
  </div>
  <div class="kpi">
    <div class="value green">${totals.conversions}</div>
    <div class="label">✅ Conversions</div>
  </div>
</div>

<!-- Campaigns -->
<div class="section">
  <div class="section-header">
    <h2>📢 الحملات الإعلانية</h2>
    <span class="count">${campaigns.length}</span>
  </div>
  <div class="table-wrap">
    ${campaigns.length > 0 ? `
    <table>
      <thead><tr>
        <th>اسم الحملة</th><th>الحالة</th><th>Impressions</th>
        <th>Clicks</th><th>CTR</th><th>Cost</th><th>Avg CPC</th><th>Conversions</th>
      </tr></thead>
      <tbody>${campaignRows}</tbody>
    </table>` : '<div class="no-data">لا توجد بيانات</div>'}
  </div>
</div>

<!-- Ad Groups -->
<div class="section">
  <div class="section-header">
    <h2>📁 المجموعات الإعلانية</h2>
    <span class="count">${adGroups.length}</span>
  </div>
  <div class="table-wrap">
    ${adGroups.length > 0 ? `
    <table>
      <thead><tr>
        <th>الحملة</th><th>المجموعة</th><th>الحالة</th>
        <th>Impressions</th><th>Clicks</th><th>CTR</th><th>Cost</th><th>Avg CPC</th>
      </tr></thead>
      <tbody>${adGroupRows}</tbody>
    </table>` : '<div class="no-data">لا توجد بيانات</div>'}
  </div>
</div>

<!-- Keywords -->
<div class="section">
  <div class="section-header">
    <h2>🔑 الكلمات المفتاحية</h2>
    <span class="count">${keywords.length}</span>
  </div>
  <div class="table-wrap">
    ${keywords.length > 0 ? `
    <table>
      <thead><tr>
        <th>الكلمة</th><th>نوع المطابقة</th><th>المجموعة</th>
        <th>Impressions</th><th>Clicks</th><th>CTR</th><th>Cost</th><th>Avg CPC</th><th>Conversions</th>
      </tr></thead>
      <tbody>${keywordRows}</tbody>
    </table>` : '<div class="no-data">لا توجد بيانات كلمات مفتاحية</div>'}
  </div>
</div>

<!-- Search Terms -->
<div class="section">
  <div class="section-header">
    <h2>🔍 Search Terms الفعلية</h2>
    <span class="count">${searchTerms.length}</span>
  </div>
  <div class="table-wrap">
    ${searchTerms.length > 0 ? `
    <table>
      <thead><tr>
        <th>ما بحث عنه المستخدم</th><th>الحملة</th>
        <th>Impressions</th><th>Clicks</th><th>CTR</th><th>Cost</th><th>Avg CPC</th>
      </tr></thead>
      <tbody>${stRows}</tbody>
    </table>` : '<div class="no-data">لا توجد search terms (الحملة موقوفة؟)</div>'}
  </div>
</div>

<div class="footer">
  تقرير Core Pro — Google Ads API &nbsp;|&nbsp; ${now}
</div>
</body>
</html>`;
}

async function main() {
  try {
    const data = await fetchAll();
    const html = buildHTML(data);

    const outPath = path.join(__dirname, '..', 'ads-dashboard.html');
    fs.writeFileSync(outPath, html, 'utf-8');

    console.log(`\n✅ تم إنشاء التقرير: ads-dashboard.html`);
    console.log(`📂 المسار: ${outPath}`);
    console.log('\n💡 افتح الملف في المتصفح لرؤية التقرير الكامل.\n');

    // Also save raw JSON
    const jsonPath = path.join(__dirname, '..', 'ads-data.json');
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`💾 البيانات الخام: ads-data.json`);

  } catch (err) {
    console.error('\n❌ خطأ:', err.message || err);
    if (err.errors) err.errors.forEach(e => console.error(' -', e.message));
    process.exit(1);
  }
}

main();
