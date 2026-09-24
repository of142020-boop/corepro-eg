/**
 * اكتشاف شامل — قص الخرسانة وتقطيع الجدران
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

const ALL_KEYWORDS = [
  'قص الخرسانة',
  'تقطيع الخرسانة',
  'قص الخرسانة المسلحة',
  'تقطيع الخرسانة المسلحة',
  'قص جدار',
  'قص جدران',
  'قص سقف',
  'قص اسقف',
  'قص خرسانة',
  'منشار قص خرسانة',
  'منشار تقطيع الخرسانة',
  'صاروخ قص الجدران',
  'صاروخ قص الخرسانة',
  'صاروخ تقطيع الخرسانة',
  'مقاول قص خرسانة',
  'شركة قص خرسانة',
  'شركات تقطيع خرسانة',
  'فني قص خرسانة',
  'معلم قص جدار',
  'اسعار قص الخرسانة',
  'سعر قص الخرسانة',
  'سعر منشار الخرسانة',
  'تكلفة قص الخرسانة',
  'قص جدار بالمنشار',
  'قص جدار بالصاروخ',
  'قص الخرسانة بالليزر',
  'قص الجدران بالليزر',
  'قص بالليزر للخرسانة',
  'فتح باب في الجدار',
  'فتح شباك في الجدار',
  'توسعة باب',
  'توسعة شباك',
  'قص خرسانة السقف',
  'قص السقف لعمل سلم',
  'فتح سلم في السقف',
  'قص الخرسانة بالمنشار',
  'منشار السكة',
  'منشار خرسانة للبيع',
  'قص خرسانة بدون اهتزاز',
  'قص خرسانة بدون تكسير',
  'تكسير جدار بالصاروخ',
  'تكسير خرسانة',
  'concrete cutting egypt',
  'concrete sawing cairo',
  'wall sawing',
  'slab sawing',
  'قص خرسانة القاهرة',
  'قص خرسانة اسكندرية',
  'قص خرسانة التجمع',
  'قص جدار التجمع الخامس'
];

const COMP_AR = {
  LOW: '🟢 منخفض', MEDIUM: '🟡 متوسط',
  HIGH: '🔴 عالي', UNSPECIFIED: '⚪ غير محدد', UNKNOWN: '❓ غير معروف',
};

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
  console.log(`\n🔍 اكتشاف شامل للكلمات — قص الخرسانة`);
  console.log(`📋 إجمالي الكلمات المُختبَرة: ${unique.length}`);

  try {
    const batches = chunkArray(unique, 500);
    let allRaw = [];
    for (let i = 0; i < batches.length; i++) {
      process.stdout.write(`⏳ جارٍ جلب الدفعة ${i + 1}/${batches.length}...`);
      const raw = await fetchMetrics(batches[i]);
      allRaw = allRaw.concat(raw.map((item, j) => ({ item, keyword: batches[i][j] })));
      console.log(' ✅');
    }

    const results = allRaw.map(({ item, keyword }) => {
      const m = item.keyword_metrics || {};
      const avg     = Number(m.avg_monthly_searches) || 0;
      const compIdx = Number(m.competition_index) || 0;
      const comp    = m.competition || 'UNKNOWN';
      const lowCpc  = ((Number(m.low_top_of_page_bid_micros)  || 0) / 1_000_000);
      const highCpc = ((Number(m.high_top_of_page_bid_micros) || 0) / 1_000_000);
      
      return {
        keyword,
        avg_monthly_searches: avg,
        competition:          comp,
        competition_index:    compIdx,
        cpc_low:              lowCpc.toFixed(2),
        cpc_high:             highCpc.toFixed(2),
      };
    }).sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(results.map((r, i) => ({
      '#': i + 1,
      'الكلمة المفتاحية': r.keyword,
      'حجم البحث / شهر': r.avg_monthly_searches,
      'المنافسة': COMP_AR[r.competition] || r.competition,
      'مؤشر المنافسة': r.competition_index,
      'سعر النقرة تقريبي': r.cpc_high
    })));
    
    ws['!cols'] = [{ wch: 4 }, { wch: 30 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 20 }];
    
    XLSX.utils.book_append_sheet(wb, ws, 'كلمات قص الخرسانة');

    const xlsxPath = path.join(ROOT, 'saw-keywords.xlsx');
    XLSX.writeFile(wb, xlsxPath);
    
    const desktopFolder = 'C:\\Users\\i7\\Desktop\\الكلمات المفتاحية';
    if (fs.existsSync(desktopFolder)) {
      fs.copyFileSync(xlsxPath, path.join(desktopFolder, 'saw-keywords.xlsx'));
    }

    console.log('\n✅ تم الحفظ بنجاح في saw-keywords.xlsx');
    const { exec } = await import('child_process');
    exec(`powershell -Command "Start-Process '${xlsxPath}'"`, () => {});

  } catch (err) {
    console.error('\n❌ خطأ:', err.message);
  }
}

main();
