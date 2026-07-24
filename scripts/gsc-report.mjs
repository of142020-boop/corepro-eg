/**
 * Google Search Console - تقرير شامل
 * يستخدم الـ Service Account الموجود لجلب إحصائيات الموقع
 *
 * قبل التشغيل: أضف هذا البريد كـ Full User في Search Console:
 * indexing-api@tokyo-portal-468310-f1.iam.gserviceaccount.com
 *
 * التشغيل: node scripts/gsc-report.mjs
 */

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KEY_PATH   = path.join(__dirname, '../google-service-account.json');
const OUT_PATH   = path.join(__dirname, '../gsc-report.html');
const SITE_URL   = 'sc-domain:corepro-eg.com';  // Domain property format

// ─── نطاق التاريخ ─────────────────────────────────────────────
const TODAY      = new Date();
const fmt        = d => d.toISOString().split('T')[0];

// الفترة الحالية: آخر 28 يوم
const endDate    = new Date(TODAY); endDate.setDate(endDate.getDate() - 1);
const startDate  = new Date(endDate); startDate.setDate(startDate.getDate() - 27);

// الفترة السابقة: 28 يوم قبلها
const prevEnd    = new Date(startDate); prevEnd.setDate(prevEnd.getDate() - 1);
const prevStart  = new Date(prevEnd); prevStart.setDate(prevStart.getDate() - 27);

// ─── دالة جلب البيانات ────────────────────────────────────────
async function queryGSC(sc, dimensions, rowLimit = 50, dateRange = {
  startDate: fmt(startDate), endDate: fmt(endDate)
}) {
  const res = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      ...dateRange,
      dimensions,
      rowLimit,
      dataState: 'all',
    },
  });
  return res.data.rows || [];
}

// ─── المصادقة ─────────────────────────────────────────────────
async function authenticate() {
  if (!fs.existsSync(KEY_PATH)) {
    console.error('❌ لم يُعثر على google-service-account.json');
    process.exit(1);
  }
  const key = JSON.parse(fs.readFileSync(KEY_PATH, 'utf-8'));
  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: key.client_email, private_key: key.private_key },
    scopes: [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/webmasters',
    ],
  });
  return google.searchconsole({ version: 'v1', auth });
}

// ─── رسم شريط التقدم ──────────────────────────────────────────
function bar(value, max, width = 120) {
  const pct = max > 0 ? Math.round((value / max) * width) : 0;
  return `<div class="bar-wrap"><div class="bar-fill" style="width:${pct}px"></div></div>`;
}

function delta(curr, prev) {
  if (prev === 0) return curr > 0 ? '<span class="up">جديد ↑</span>' : '—';
  const pct = ((curr - prev) / prev * 100).toFixed(1);
  const cls = pct >= 0 ? 'up' : 'down';
  const arrow = pct >= 0 ? '↑' : '↓';
  return `<span class="${cls}">${Math.abs(pct)}% ${arrow}</span>`;
}

function num(n) { return Number(n || 0).toLocaleString('ar-EG'); }
function dec(n, d=1) { return Number(n || 0).toFixed(d); }

// ─── البرنامج الرئيسي ─────────────────────────────────────────
async function main() {
  console.log('🚀 جارٍ جلب بيانات Search Console...');

  let sc;
  try {
    sc = await authenticate();
    console.log('✅ تم التوثيق بنجاح');
  } catch (e) {
    console.error('❌ فشل التوثيق:', e.message);
    process.exit(1);
  }

  // ── 1. ملخص الفترة الحالية ────────────────────────────────
  console.log('📊 جلب ملخص الفترة الحالية...');
  let summaryRows, summaryPrevRows;
  try {
    summaryRows = await queryGSC(sc, ['date'], 28);
    summaryPrevRows = await queryGSC(sc, ['date'], 28, {
      startDate: fmt(prevStart), endDate: fmt(prevEnd)
    });
  } catch (e) {
    console.error('❌ فشل جلب البيانات. تأكد من إضافة Service Account كـ Full User في Search Console.');
    console.error('   البريد:', JSON.parse(fs.readFileSync(KEY_PATH)).client_email);
    console.error('   الخطأ:', e.message);
    process.exit(1);
  }

  const sum = (rows, key) => rows.reduce((a, r) => a + (r[key] || 0), 0);
  const avgPos = rows => rows.length
    ? rows.reduce((a, r) => a + (r.position || 0) * (r.impressions || 0), 0) / Math.max(sum(rows, 'impressions'), 1)
    : 0;

  const totals = {
    clicks:      sum(summaryRows, 'clicks'),
    impressions: sum(summaryRows, 'impressions'),
    ctr:         summaryRows.length ? (sum(summaryRows, 'clicks') / sum(summaryRows, 'impressions') * 100) : 0,
    position:    avgPos(summaryRows),
  };
  const prevTotals = {
    clicks:      sum(summaryPrevRows, 'clicks'),
    impressions: sum(summaryPrevRows, 'impressions'),
    ctr:         summaryPrevRows.length ? (sum(summaryPrevRows, 'clicks') / sum(summaryPrevRows, 'impressions') * 100) : 0,
    position:    avgPos(summaryPrevRows),
  };

  // ── 2. أفضل الاستعلامات ───────────────────────────────────
  console.log('🔍 جلب أفضل الكلمات المفتاحية...');
  const queries     = await queryGSC(sc, ['query'], 25);
  const queriesPrev = await queryGSC(sc, ['query'], 25, { startDate: fmt(prevStart), endDate: fmt(prevEnd) });
  const queryPrevMap = Object.fromEntries(queriesPrev.map(r => [r.keys[0], r]));

  // ── 3. أفضل الصفحات ──────────────────────────────────────
  console.log('📄 جلب أفضل الصفحات...');
  const pages     = await queryGSC(sc, ['page'], 25);
  const pagesPrev = await queryGSC(sc, ['page'], 25, { startDate: fmt(prevStart), endDate: fmt(prevEnd) });
  const pagePrevMap = Object.fromEntries(pagesPrev.map(r => [r.keys[0], r]));

  // ── 4. أداء الأجهزة ───────────────────────────────────────
  console.log('📱 جلب بيانات الأجهزة...');
  const devices = await queryGSC(sc, ['device'], 10);

  // ── 5. بيانات يومية (آخر 28 يوم) ─────────────────────────
  console.log('📅 جلب البيانات اليومية...');
  const daily = await queryGSC(sc, ['date'], 28);
  daily.sort((a, b) => a.keys[0].localeCompare(b.keys[0]));
  const dateLabels = daily.map(r => `'${r.keys[0]}'`).join(',');
  const dailyClicks = daily.map(r => r.clicks || 0).join(',');
  const dailyImpressions = daily.map(r => r.impressions || 0).join(',');

  // ── 6. أعلى دول ───────────────────────────────────────────
  console.log('🌍 جلب بيانات الدول...');
  const countries = await queryGSC(sc, ['country'], 10);

  console.log('✅ تم جلب جميع البيانات! جارٍ توليد التقرير...');

  // ─── توليد HTML ───────────────────────────────────────────
  const maxQClicks = Math.max(...queries.map(r => r.clicks || 0), 1);
  const maxPClicks = Math.max(...pages.map(r => r.clicks || 0), 1);
  const maxDClicks = Math.max(...devices.map(r => r.clicks || 0), 1);

  const queryRows = queries.map(r => {
    const q    = r.keys[0];
    const prev = queryPrevMap[q] || {};
    return `
      <tr>
        <td class="kw">${q}</td>
        <td>${num(r.clicks)} ${bar(r.clicks, maxQClicks)}</td>
        <td>${num(r.impressions)}</td>
        <td>${dec(r.ctr * 100)}%</td>
        <td>${dec(r.position)}</td>
        <td>${delta(r.clicks, prev.clicks || 0)}</td>
      </tr>`;
  }).join('');

  const pageRows = pages.map(r => {
    const p    = r.keys[0];
    const slug = p.replace(SITE_URL, '/') || '/';
    const prev = pagePrevMap[p] || {};
    return `
      <tr>
        <td class="kw"><a href="${p}" target="_blank">${slug}</a></td>
        <td>${num(r.clicks)} ${bar(r.clicks, maxPClicks)}</td>
        <td>${num(r.impressions)}</td>
        <td>${dec(r.ctr * 100)}%</td>
        <td>${dec(r.position)}</td>
        <td>${delta(r.clicks, prev.clicks || 0)}</td>
      </tr>`;
  }).join('');

  const deviceMap = { MOBILE: 'موبايل 📱', DESKTOP: 'كمبيوتر 💻', TABLET: 'تابلت 🔲' };
  const totalDevClicks = sum(devices, 'clicks') || 1;
  const deviceRows = devices.map(r => {
    const pct = (r.clicks / totalDevClicks * 100).toFixed(1);
    return `
      <tr>
        <td>${deviceMap[r.keys[0]] || r.keys[0]}</td>
        <td>${num(r.clicks)} ${bar(r.clicks, maxDClicks)}</td>
        <td>${num(r.impressions)}</td>
        <td>${dec(r.ctr * 100)}%</td>
        <td>${dec(r.position)}</td>
        <td><strong>${pct}%</strong></td>
      </tr>`;
  }).join('');

  const countryMap = { egy: 'مصر 🇪🇬', sau: 'السعودية 🇸🇦', are: 'الإمارات 🇦🇪', kwt: 'الكويت 🇰🇼', qat: 'قطر 🇶🇦', omn: 'عُمان 🇴🇲', bhr: 'البحرين 🇧🇭', jor: 'الأردن 🇯🇴', lbn: 'لبنان 🇱🇧', usa: 'أمريكا 🇺🇸' };
  const maxCClicks = Math.max(...countries.map(r => r.clicks || 0), 1);
  const countryRows = countries.map(r => {
    const code = (r.keys[0] || '').toLowerCase();
    return `
      <tr>
        <td>${countryMap[code] || r.keys[0]}</td>
        <td>${num(r.clicks)} ${bar(r.clicks, maxCClicks)}</td>
        <td>${num(r.impressions)}</td>
        <td>${dec(r.ctr * 100)}%</td>
        <td>${dec(r.position)}</td>
      </tr>`;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>تقرير Search Console — كور برو</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js"><\/script>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #f1f5f9; color: #1e293b; direction: rtl; }
  .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0369a1 100%); color: white; padding: 40px; text-align: center; }
  .header h1 { font-size: 2rem; font-weight: 900; margin-bottom: 8px; }
  .header p { color: #94a3b8; font-size: 0.95rem; }
  .container { max-width: 1200px; margin: 0 auto; padding: 32px 20px; }
  .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
  .kpi { background: white; border-radius: 20px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,.07); text-align: center; }
  .kpi .label { font-size: .8rem; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; margin-bottom: 8px; }
  .kpi .value { font-size: 2.2rem; font-weight: 900; color: #0f172a; line-height: 1; }
  .kpi .change { margin-top: 10px; font-size: .85rem; }
  .up { color: #16a34a; font-weight: 700; }
  .down { color: #dc2626; font-weight: 700; }
  .card { background: white; border-radius: 20px; padding: 28px; box-shadow: 0 4px 20px rgba(0,0,0,.07); margin-bottom: 24px; overflow: hidden; }
  .card h2 { font-size: 1.2rem; font-weight: 800; color: #0f172a; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #f1f5f9; }
  .chart-wrap { position: relative; height: 260px; }
  table { width: 100%; border-collapse: collapse; font-size: .88rem; }
  th { background: #f8fafc; color: #475569; font-weight: 700; padding: 10px 12px; text-align: right; border-bottom: 2px solid #e2e8f0; }
  td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: middle; }
  tr:hover td { background: #f8fafc; }
  .kw { font-weight: 600; color: #0f172a; max-width: 280px; }
  .kw a { color: #0369a1; text-decoration: none; }
  .kw a:hover { text-decoration: underline; }
  .bar-wrap { display: inline-block; height: 6px; width: 120px; background: #f1f5f9; border-radius: 9999px; margin-right: 6px; vertical-align: middle; }
  .bar-fill { height: 100%; background: linear-gradient(90deg, #0369a1, #38bdf8); border-radius: 9999px; }
  .badge { display: inline-block; padding: 3px 10px; border-radius: 9999px; font-size: .75rem; font-weight: 700; background: #eff6ff; color: #1d4ed8; }
  .period-badge { display: inline-flex; align-items: center; gap: 8px; background: #f0fdf4; color: #15803d; font-weight: 700; font-size: .85rem; padding: 6px 14px; border-radius: 12px; margin-bottom: 24px; border: 1px solid #bbf7d0; }
  .footer { text-align: center; color: #94a3b8; font-size: .8rem; padding: 32px; }
  @media print { body { background: white; } .card { box-shadow: none; border: 1px solid #e2e8f0; } }
  @media (max-width: 768px) { .kpi-grid { grid-template-columns: repeat(2, 1fr); } }
</style>
</head>
<body>

<div class="header">
  <h1>📊 تقرير Google Search Console</h1>
  <p>كور برو — corepro-eg.com</p>
  <p style="margin-top:8px;font-size:.8rem">تاريخ التقرير: ${new Date().toLocaleDateString('ar-EG', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</p>
</div>

<div class="container">

  <div class="period-badge">
    📅 الفترة: ${fmt(startDate)} ← ${fmt(endDate)} (آخر 28 يوم) | مقارنةً بـ ${fmt(prevStart)} ← ${fmt(prevEnd)}
  </div>

  <!-- KPI Cards -->
  <div class="kpi-grid">
    <div class="kpi">
      <div class="label">إجمالي النقرات</div>
      <div class="value" style="color:#0369a1">${num(totals.clicks)}</div>
      <div class="change">${delta(totals.clicks, prevTotals.clicks)}</div>
    </div>
    <div class="kpi">
      <div class="label">إجمالي الظهورات</div>
      <div class="value" style="color:#7c3aed">${num(totals.impressions)}</div>
      <div class="change">${delta(totals.impressions, prevTotals.impressions)}</div>
    </div>
    <div class="kpi">
      <div class="label">معدل النقر CTR</div>
      <div class="value" style="color:#059669">${dec(totals.ctr)}%</div>
      <div class="change">${delta(totals.ctr, prevTotals.ctr)}</div>
    </div>
    <div class="kpi">
      <div class="label">متوسط الترتيب</div>
      <div class="value" style="color:#d97706">${dec(totals.position)}</div>
      <div class="change">${delta(prevTotals.position, totals.position)}</div>
    </div>
  </div>

  <!-- Chart -->
  <div class="card">
    <h2>📈 النقرات والظهورات اليومية</h2>
    <div class="chart-wrap">
      <canvas id="dailyChart"></canvas>
    </div>
  </div>

  <!-- Top Queries -->
  <div class="card">
    <h2>🔍 أفضل 25 كلمة مفتاحية</h2>
    <div style="overflow-x:auto">
      <table>
        <thead>
          <tr>
            <th>الكلمة المفتاحية</th>
            <th>النقرات</th>
            <th>الظهورات</th>
            <th>CTR</th>
            <th>الترتيب</th>
            <th>مقارنة</th>
          </tr>
        </thead>
        <tbody>${queryRows}</tbody>
      </table>
    </div>
  </div>

  <!-- Top Pages -->
  <div class="card">
    <h2>📄 أفضل 25 صفحة</h2>
    <div style="overflow-x:auto">
      <table>
        <thead>
          <tr>
            <th>الصفحة</th>
            <th>النقرات</th>
            <th>الظهورات</th>
            <th>CTR</th>
            <th>الترتيب</th>
            <th>مقارنة</th>
          </tr>
        </thead>
        <tbody>${pageRows}</tbody>
      </table>
    </div>
  </div>

  <!-- Devices + Countries grid -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:24px">
    <div class="card" style="margin:0">
      <h2>📱 الأجهزة</h2>
      <table>
        <thead>
          <tr><th>الجهاز</th><th>نقرات</th><th>ظهورات</th><th>CTR</th><th>ترتيب</th><th>النسبة</th></tr>
        </thead>
        <tbody>${deviceRows}</tbody>
      </table>
    </div>
    <div class="card" style="margin:0">
      <h2>🌍 الدول</h2>
      <table>
        <thead>
          <tr><th>الدولة</th><th>نقرات</th><th>ظهورات</th><th>CTR</th><th>ترتيب</th></tr>
        </thead>
        <tbody>${countryRows}</tbody>
      </table>
    </div>
  </div>

</div>

<div class="footer">
  تم توليد هذا التقرير تلقائياً بواسطة Google Search Console API<br>
  كور برو — corepro-eg.com — ${new Date().toISOString()}
</div>

<script>
const ctx = document.getElementById('dailyChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: [${dateLabels}],
    datasets: [
      {
        label: 'النقرات',
        data: [${dailyClicks}],
        borderColor: '#0369a1',
        backgroundColor: 'rgba(3,105,161,0.08)',
        borderWidth: 2.5,
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        yAxisID: 'y',
      },
      {
        label: 'الظهورات',
        data: [${dailyImpressions}],
        borderColor: '#7c3aed',
        backgroundColor: 'rgba(124,58,237,0.06)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        borderDash: [5,3],
        yAxisID: 'y1',
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    scales: {
      y:  { type:'linear', display:true, position:'right', grid:{ drawOnChartArea:true }, title:{ display:true, text:'النقرات' } },
      y1: { type:'linear', display:true, position:'left',  grid:{ drawOnChartArea:false }, title:{ display:true, text:'الظهورات' } },
      x:  { ticks:{ maxTicksLimit: 7 } }
    },
    plugins: {
      legend: { position: 'top' },
      tooltip: { rtl: true }
    }
  }
});
<\/script>
</body>
</html>`;

  fs.writeFileSync(OUT_PATH, html, 'utf-8');
  console.log(`\n✅ تم توليد التقرير بنجاح!`);
  console.log(`📁 المسار: ${OUT_PATH}`);
  console.log(`\n📊 ملخص سريع:`);
  console.log(`   النقرات:    ${num(totals.clicks)} (${totals.clicks > prevTotals.clicks ? '+' : ''}${((totals.clicks - prevTotals.clicks) / Math.max(prevTotals.clicks,1) * 100).toFixed(1)}%)`);
  console.log(`   الظهورات:   ${num(totals.impressions)}`);
  console.log(`   CTR:        ${dec(totals.ctr)}%`);
  console.log(`   الترتيب:    ${dec(totals.position)}`);

  // فتح التقرير تلقائياً
  try {
    const { exec } = await import('child_process');
    exec(`start "" "${OUT_PATH}"`);
    console.log(`\n🌐 جارٍ فتح التقرير في المتصفح...`);
  } catch {}
}

main().catch(e => {
  console.error('❌ خطأ غير متوقع:', e.message);
  process.exit(1);
});
