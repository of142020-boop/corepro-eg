/**
 * Google Search Console - تقرير اليوم الأخير
 * node scripts/gsc-today.mjs
 */

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KEY_PATH  = path.join(__dirname, '../google-service-account.json');
const OUT_PATH  = path.join(__dirname, '../gsc-today-report.html');
const SITE_URL  = 'sc-domain:corepro-eg.com';

const fmt = d => d.toISOString().split('T')[0];

// اليوم الأخير (أمس — GSC يتأخر يوم)
const today    = new Date();
const lastDay  = new Date(today); lastDay.setDate(today.getDate() - 1);
const dayBefore = new Date(today); dayBefore.setDate(today.getDate() - 2);

const DATE_LABEL = fmt(lastDay);
const PREV_LABEL = fmt(dayBefore);

async function authenticate() {
  const key = JSON.parse(fs.readFileSync(KEY_PATH, 'utf-8'));
  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: key.client_email, private_key: key.private_key },
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  return google.searchconsole({ version: 'v1', auth });
}

async function query(sc, dimensions, dateRange, rowLimit = 25) {
  const res = await sc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: { ...dateRange, dimensions, rowLimit, dataState: 'all' },
  });
  return res.data.rows || [];
}

function num(n) { return Number(n || 0).toLocaleString('ar-EG'); }
function pct(n) { return (Number(n || 0) * 100).toFixed(1) + '%'; }
function pos(n) { return Number(n || 0).toFixed(1); }

function delta(curr, prev) {
  if (prev === 0 && curr === 0) return '—';
  if (prev === 0) return '<span class="up">جديد ↑</span>';
  const p = ((curr - prev) / prev * 100).toFixed(1);
  return p >= 0
    ? `<span class="up">+${p}% ↑</span>`
    : `<span class="down">${Math.abs(p)}% ↓</span>`;
}

function bar(v, max, w = 100) {
  const px = max > 0 ? Math.round((v / max) * w) : 0;
  return `<div class="bar-wrap"><div class="bar-fill" style="width:${px}px"></div></div>`;
}

async function main() {
  console.log('🔐 جاري المصادقة...');
  const sc = await authenticate();

  const dayRange  = { startDate: DATE_LABEL, endDate: DATE_LABEL };
  const prevRange = { startDate: PREV_LABEL, endDate: PREV_LABEL };

  console.log(`📅 جلب بيانات: ${DATE_LABEL} مقارنةً بـ ${PREV_LABEL}`);

  // ── جلب البيانات ──
  const [totals, prevTotals, queries, prevQueries, pages, prevPages, devices] = await Promise.all([
    query(sc, ['date'],   dayRange,  1),
    query(sc, ['date'],   prevRange, 1),
    query(sc, ['query'],  dayRange,  25),
    query(sc, ['query'],  prevRange, 25),
    query(sc, ['page'],   dayRange,  20),
    query(sc, ['page'],   prevRange, 20),
    query(sc, ['device'], dayRange,  5),
  ]);

  const T  = totals[0]  || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  const PT = prevTotals[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };

  // بناء map للمقارنة
  const prevQMap = Object.fromEntries((prevQueries).map(r => [r.keys[0], r]));
  const prevPMap = Object.fromEntries((prevPages).map(r => [r.keys[0], r]));

  const maxClicks = Math.max(...queries.map(r => r.clicks), 1);
  const maxPageClicks = Math.max(...pages.map(r => r.clicks), 1);

  // ── HTML ──
  const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>تقرير GSC — ${DATE_LABEL} — كور برو</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Tahoma, sans-serif; background: #f1f5f9; color: #1e293b; direction: rtl; }
  .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0369a1 100%); color: white; padding: 36px; text-align: center; }
  .header h1 { font-size: 1.8rem; font-weight: 900; margin-bottom: 6px; }
  .header p  { color: #94a3b8; font-size: .9rem; }
  .badge-date { display:inline-block; background:#22c55e; color:white; font-weight:800; font-size:.85rem; padding:4px 14px; border-radius:20px; margin-top:10px; }
  .container { max-width: 1100px; margin: 0 auto; padding: 28px 16px; }
  .kpi-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 28px; }
  .kpi { background: white; border-radius: 18px; padding: 22px 16px; box-shadow: 0 4px 18px rgba(0,0,0,.07); text-align: center; }
  .kpi .label { font-size:.75rem; color:#64748b; font-weight:700; text-transform:uppercase; letter-spacing:.05em; margin-bottom:6px; }
  .kpi .value { font-size: 2rem; font-weight: 900; line-height: 1; }
  .kpi .change { margin-top: 8px; font-size: .82rem; }
  .up   { color: #16a34a; font-weight: 700; }
  .down { color: #dc2626; font-weight: 700; }
  .card { background: white; border-radius: 18px; padding: 24px; box-shadow: 0 4px 18px rgba(0,0,0,.07); margin-bottom: 20px; }
  .card h2 { font-size:1.1rem; font-weight:800; color:#0f172a; margin-bottom:16px; padding-bottom:10px; border-bottom:2px solid #f1f5f9; }
  table { width:100%; border-collapse:collapse; font-size:.85rem; }
  th { background:#f8fafc; color:#475569; font-weight:700; padding:9px 11px; text-align:right; border-bottom:2px solid #e2e8f0; }
  td { padding:9px 11px; border-bottom:1px solid #f1f5f9; vertical-align:middle; }
  tr:hover td { background:#f8fafc; }
  .kw { font-weight:600; color:#0f172a; max-width:260px; word-break:break-word; }
  .kw a { color:#0369a1; text-decoration:none; }
  .kw a:hover { text-decoration:underline; }
  .bar-wrap { display:inline-block; height:6px; width:100px; background:#f1f5f9; border-radius:9999px; margin-right:4px; vertical-align:middle; }
  .bar-fill { height:100%; background:linear-gradient(90deg,#0369a1,#38bdf8); border-radius:9999px; }
  .device-row { display:flex; align-items:center; gap:14px; padding:10px 0; border-bottom:1px solid #f1f5f9; }
  .device-row:last-child { border:none; }
  .device-label { font-weight:700; min-width:90px; }
  .device-bar-outer { flex:1; height:10px; background:#f1f5f9; border-radius:9999px; overflow:hidden; }
  .device-bar-inner { height:100%; border-radius:9999px; }
  .device-num { font-weight:800; color:#0f172a; min-width:40px; text-align:left; }
  .footer { text-align:center; color:#94a3b8; font-size:.78rem; padding:24px; }
  @media(max-width:700px) { .kpi-grid { grid-template-columns:repeat(2,1fr); } }
</style>
</head>
<body>

<div class="header">
  <h1>📊 تقرير Google Search Console</h1>
  <p>كور برو — corepro-eg.com</p>
  <div class="badge-date">📅 اليوم الأخير: ${DATE_LABEL}</div>
  <p style="margin-top:8px;font-size:.78rem;color:#64748b">مقارنةً بـ ${PREV_LABEL}</p>
</div>

<div class="container">

  <!-- KPIs -->
  <div class="kpi-grid">
    <div class="kpi">
      <div class="label">النقرات</div>
      <div class="value" style="color:#0369a1">${num(T.clicks)}</div>
      <div class="change">${delta(T.clicks, PT.clicks)}</div>
    </div>
    <div class="kpi">
      <div class="label">الظهورات</div>
      <div class="value" style="color:#7c3aed">${num(T.impressions)}</div>
      <div class="change">${delta(T.impressions, PT.impressions)}</div>
    </div>
    <div class="kpi">
      <div class="label">معدل النقر CTR</div>
      <div class="value" style="color:#059669">${pct(T.ctr)}</div>
      <div class="change">${delta(T.ctr, PT.ctr)}</div>
    </div>
    <div class="kpi">
      <div class="label">متوسط الترتيب</div>
      <div class="value" style="color:#d97706">${pos(T.position)}</div>
      <div class="change">${delta(-T.position, -PT.position)}</div>
    </div>
  </div>

  <!-- الكلمات المفتاحية -->
  <div class="card">
    <h2>🔍 الكلمات المفتاحية — ${DATE_LABEL}</h2>
    <div style="overflow-x:auto">
      <table>
        <thead>
          <tr>
            <th>الكلمة المفتاحية</th>
            <th>النقرات</th>
            <th>الظهورات</th>
            <th>CTR</th>
            <th>الترتيب</th>
            <th>مقارنة بالأمس</th>
          </tr>
        </thead>
        <tbody>
          ${queries.map(r => {
            const kw = r.keys[0];
            const prev = prevQMap[kw] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
            return `<tr>
              <td class="kw">${kw}</td>
              <td>${num(r.clicks)} ${bar(r.clicks, maxClicks)}</td>
              <td>${num(r.impressions)}</td>
              <td>${pct(r.ctr)}</td>
              <td>${pos(r.position)}</td>
              <td>${delta(r.clicks, prev.clicks)}</td>
            </tr>`;
          }).join('')}
          ${queries.length === 0 ? '<tr><td colspan="6" style="text-align:center;color:#94a3b8;padding:20px">لا توجد بيانات لهذا اليوم بعد</td></tr>' : ''}
        </tbody>
      </table>
    </div>
  </div>

  <!-- الصفحات -->
  <div class="card">
    <h2>📄 أداء الصفحات — ${DATE_LABEL}</h2>
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
        <tbody>
          ${pages.map(r => {
            const pg = r.keys[0];
            const prev = prevPMap[pg] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
            const slug = pg.replace('https://corepro-eg.com', '') || '/';
            return `<tr>
              <td class="kw"><a href="${pg}" target="_blank">${slug}</a></td>
              <td>${num(r.clicks)} ${bar(r.clicks, maxPageClicks)}</td>
              <td>${num(r.impressions)}</td>
              <td>${pct(r.ctr)}</td>
              <td>${pos(r.position)}</td>
              <td>${delta(r.clicks, prev.clicks)}</td>
            </tr>`;
          }).join('')}
          ${pages.length === 0 ? '<tr><td colspan="6" style="text-align:center;color:#94a3b8;padding:20px">لا توجد بيانات لهذا اليوم بعد</td></tr>' : ''}
        </tbody>
      </table>
    </div>
  </div>

  <!-- الأجهزة -->
  <div class="card">
    <h2>📱 توزيع الأجهزة — ${DATE_LABEL}</h2>
    ${(() => {
      const totalClicks = devices.reduce((s, r) => s + r.clicks, 0) || 1;
      const colors = { MOBILE: '#0369a1', DESKTOP: '#7c3aed', TABLET: '#059669' };
      const labels = { MOBILE: '📱 موبايل', DESKTOP: '🖥️ كمبيوتر', TABLET: '📟 تابلت' };
      return devices.map(r => {
        const d = r.keys[0];
        const pctVal = ((r.clicks / totalClicks) * 100).toFixed(1);
        return `<div class="device-row">
          <div class="device-label">${labels[d] || d}</div>
          <div class="device-bar-outer">
            <div class="device-bar-inner" style="width:${pctVal}%;background:${colors[d] || '#94a3b8'}"></div>
          </div>
          <div class="device-num">${num(r.clicks)}</div>
          <div style="color:#64748b;font-size:.8rem;min-width:50px">${pctVal}%</div>
        </div>`;
      }).join('') || '<p style="color:#94a3b8;text-align:center;padding:16px">لا توجد بيانات</p>';
    })()}
  </div>

</div>

<div class="footer">
  تم إنشاؤه تلقائياً • ${new Date().toLocaleString('ar-EG')} • corepro-eg.com
</div>

</body>
</html>`;

  fs.writeFileSync(OUT_PATH, html, 'utf-8');
  console.log(`\n✅ تم إنشاء التقرير: gsc-today-report.html`);
  console.log(`📊 النقرات: ${T.clicks} | الظهورات: ${T.impressions} | CTR: ${pct(T.ctr)} | الترتيب: ${pos(T.position)}`);
  console.log(`📅 التاريخ: ${DATE_LABEL}`);
}

main().catch(err => {
  console.error('❌ خطأ:', err.message);
  process.exit(1);
});
