/**
 * استخراج الكلمات المفتاحية الموجودة بالفعل داخل كود صفحة الشفاطات وفحصها
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
  console.log(`\n🔍 جاري استخراج الكلمات من كود الصفحة...`);

  try {
    const pageContent = fs.readFileSync(path.join(ROOT, 'src', 'components', 'pages', 'hoodsPage.tsx'), 'utf-8');
    
    // استخراج الكلمات الموجودة بين <strong> </strong> لأنها غالباً الكلمات المستهدفة
    const strongRegex = /<strong>(.*?)<\/strong>/g;
    let match;
    const extractedKeywords = new Set();
    
    while ((match = strongRegex.exec(pageContent)) !== null) {
      const kw = match[1].trim();
      // استبعاد الكلمات القصيرة جداً أو التي ليست كلمات مفتاحية حقاً
      if (kw.length > 4 && kw.split(' ').length <= 5) {
        extractedKeywords.add(kw);
      }
    }
    
    // إضافة بعض الكلمات الواضحة من العناوين أو الميتا
    extractedKeywords.add('تركيب شفاط المطبخ');
    extractedKeywords.add('فني تركيب شفاط مطبخ');
    extractedKeywords.add('تركيب مدخنة شفاط مطبخ');
    extractedKeywords.add('تركيب شفاط حمام');
    extractedKeywords.add('صيانة شفاط المطبخ');
    
    const unique = [...extractedKeywords];
    
    console.log(`📋 تم استخراج ${unique.length} كلمة مستهدفة حالياً في الصفحة. جاري فحصهم في جوجل...`);

    const batches = chunkArray(unique, 500);
    let allRaw = [];
    for (let i = 0; i < batches.length; i++) {
      const raw = await fetchMetrics(batches[i]);
      allRaw = allRaw.concat(raw.map((item, j) => ({ item, keyword: batches[i][j] })));
    }

    const results = allRaw.map(({ item, keyword }) => {
      const m = item.keyword_metrics || {};
      const avg = Number(m.avg_monthly_searches) || 0;
      return {
        keyword,
        avg_monthly_searches: avg,
        competition: m.competition || 'UNKNOWN',
      };
    }).sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(results.map((r, i) => ({
      '#': i + 1,
      'الكلمة الموجودة بالصفحة': r.keyword,
      'حجم البحث الشهري': r.avg_monthly_searches,
      'المنافسة': COMP_AR[r.competition] || r.competition
    })));
    
    ws['!cols'] = [{ wch: 4 }, { wch: 40 }, { wch: 20 }, { wch: 20 }];
    XLSX.utils.book_append_sheet(wb, ws, 'كلمات الصفحة الحالية');

    const xlsxPath = path.join(ROOT, 'hood-current-keywords.xlsx');
    XLSX.writeFile(wb, xlsxPath);
    
    const desktopFolder = 'C:\\Users\\i7\\Desktop\\الكلمات المفتاحية';
    if (fs.existsSync(desktopFolder)) {
      fs.copyFileSync(xlsxPath, path.join(desktopFolder, 'الكلمات_الموجودة_حاليا_بصفحة_الشفاطات.xlsx'));
    }

    console.log('\n✅ تم الحفظ بنجاح في الكلمات_الموجودة_حاليا_بصفحة_الشفاطات.xlsx');
    const { exec } = await import('child_process');
    exec(`powershell -Command "Start-Process '${path.join(desktopFolder, 'الكلمات_الموجودة_حاليا_بصفحة_الشفاطات.xlsx')}'"`, () => {});

  } catch (err) {
    console.error('\n❌ خطأ:', err.message);
  }
}

main();
