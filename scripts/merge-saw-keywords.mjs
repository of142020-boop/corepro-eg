/**
 * تجميع جميع كلمات قص الخرسانة في شيت واحد شامل
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
  // كلمات تجارية قوية جداً (High Intent & B2B)
  'مقاول قص جدران', 'شركات التخريم وقص الخرسانة', 'افضل شركة قص خرسانة', 
  'رقم شركة قص خرسانة', 'قص خرسانة معتمد', 'معلم قص الخرسانة', 
  'مقاولين قص جدران', 'اسعار متر قص الخرسانة', 'كم سعر قص الجدار',
  'تكلفة قص جدار مسلح', 'تكلفة قص سقف خرساني', 'مقاول هدم وقص خرسانة',
  'شركات قص خرسانة في مصر', 'ارخص شركة قص خرسانة', 'رقم فني قص جدران',

  // تطبيقات هندسية وحلول مشاكل (Specific Applications)
  'قص جدار لفتح نافذة', 'فتح شباك مناولة', 'عمل مناور في السقف', 
  'قص سقف لعمل سلم داخلي', 'عمل فتحة درج', 'قص جدار حامل', 
  'توسعة مطبخ بالقص', 'ازالة جدار بين غرفتين بدون اهتزاز', 'ازالة عمود خرساني', 
  'قص كمرات بدون اهتزاز', 'قص السقف لعمل سلم', 'فتح طاقة في الجدار', 
  'توسيع شباك بالقص', 'قص خرسانة لعمل مصعد', 'عمل حفرة مصعد', 
  'تكسير درج خرساني بالقص', 'قص الخرسانة لفتحات التكييف', 'عمل فتحة للباب',

  // تكنولوجيا ومعدات (Tech & Tools)
  'منشار سكة لقص الخرسانة', 'منشار قص الجدران هيلتي', 'ماكينة قص خرسانة المانية', 
  'اسطوانة قص خرسانة 120 سم', 'قص خرسانة مائي', 'قص جدران مائي', 
  'تقنية قص الخرسانة بالواير', 'منشار واير لقص الخرسانة', 'قص الخرسانة بالليزر',
  'اسطوانات قص خرسانة للبيع', 'سعر منشار قص الجدران', 'منشار جدران كهربائي',

  // المناطق الجغرافية الفاخرة (Locations)
  'قص خرسانة المعادي', 'قص خرسانة زايد', 'قص خرسانة مدينتي', 
  'قص خرسانة في الرحاب', 'مقاول قص خرسانة بالتجمع', 'قص خرسانة الشروق',

  // الكلمات الأساسية من الدفعة الأولى
  'قص الخرسانة', 'تقطيع الخرسانة', 'قص الخرسانة المسلحة', 'تقطيع الخرسانة المسلحة',
  'قص جدار', 'قص جدران', 'قص سقف', 'قص اسقف', 'قص خرسانة',
  'منشار قص خرسانة', 'منشار تقطيع الخرسانة', 'صاروخ قص الجدران',
  'صاروخ قص الخرسانة', 'صاروخ تقطيع الخرسانة', 'مقاول قص خرسانة',
  'شركة قص خرسانة', 'شركات تقطيع خرسانة', 'فني قص خرسانة',
  'معلم قص جدار', 'اسعار قص الخرسانة', 'سعر قص الخرسانة',
  'سعر منشار الخرسانة', 'تكلفة قص الخرسانة', 'قص جدار بالمنشار',
  'قص جدار بالصاروخ', 'قص الخرسانة بالليزر', 'قص الجدران بالليزر',
  'قص بالليزر للخرسانة', 'فتح باب في الجدار', 'فتح شباك في الجدار',
  'توسعة باب', 'توسعة شباك', 'قص خرسانة السقف',
  'قص السقف لعمل سلم', 'فتح سلم في السقف', 'قص الخرسانة بالمنشار',
  'منشار السكة', 'منشار خرسانة للبيع', 'قص خرسانة بدون اهتزاز',
  'قص خرسانة بدون تكسير', 'تكسير جدار بالصاروخ', 'تكسير خرسانة',
  'concrete cutting egypt', 'concrete sawing cairo', 'wall sawing',
  'slab sawing', 'قص خرسانة القاهرة', 'قص خرسانة اسكندرية',
  'قص خرسانة التجمع', 'قص جدار التجمع الخامس'
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
  console.log(`\n🔍 جلب البيانات الشاملة لـ ${unique.length} كلمة...`);

  try {
    const pageContent = fs.readFileSync(path.join(ROOT, 'src', 'components', 'pages', 'sawPage.tsx'), 'utf-8').replace(/\s+/g, ' ');

    const batches = chunkArray(unique, 500);
    let allRaw = [];
    for (let i = 0; i < batches.length; i++) {
      const raw = await fetchMetrics(batches[i]);
      allRaw = allRaw.concat(raw.map((item, j) => ({ item, keyword: batches[i][j] })));
    }

    const results = allRaw.map(({ item, keyword }) => {
      const m = item.keyword_metrics || {};
      const avg = Number(m.avg_monthly_searches) || 0;
      const isAdded = pageContent.includes(keyword) || 
                      (keyword.split(' ').filter(w => w.length > 3).every(w => pageContent.includes(w)));
      
      return {
        keyword,
        avg_monthly_searches: avg,
        competition: m.competition || 'UNKNOWN',
        is_added: isAdded ? '✅ مضافة في الموقع' : '❌ جديدة (غير مضافة)',
      };
    }).sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);

    const validResults = results.filter(r => r.avg_monthly_searches > 0 || r.is_added === '✅ مضافة في الموقع');

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(validResults.map((r, i) => ({
      '#': i + 1,
      'الكلمة المفتاحية': r.keyword,
      'حجم البحث / شهر': r.avg_monthly_searches,
      'المنافسة': COMP_AR[r.competition] || r.competition,
      'حالة الإضافة للموقع': r.is_added
    })));
    
    ws['!cols'] = [{ wch: 4 }, { wch: 35 }, { wch: 20 }, { wch: 20 }, { wch: 30 }];
    XLSX.utils.book_append_sheet(wb, ws, 'كافة كلمات قص الخرسانة');

    const xlsxPath = path.join(ROOT, 'saw-keywords-master.xlsx');
    XLSX.writeFile(wb, xlsxPath);
    
    const desktopFolder = 'C:\\Users\\i7\\Desktop\\الكلمات المفتاحية';
    if (fs.existsSync(desktopFolder)) {
      fs.copyFileSync(xlsxPath, path.join(desktopFolder, 'كلمات_القص_الشاملة.xlsx'));
    }

    console.log('\n✅ تم الحفظ بنجاح في كلمات_القص_الشاملة.xlsx');
    const { exec } = await import('child_process');
    exec(`powershell -Command "Start-Process '${path.join(desktopFolder, 'كلمات_القص_الشاملة.xlsx')}'"`, () => {});

  } catch (err) {
    console.error('\n❌ خطأ:', err.message);
  }
}

main();
