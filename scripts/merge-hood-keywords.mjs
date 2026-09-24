/**
 * تجميع شامل لجميع كلمات الشفاطات (الجديدة + الموجودة فعلياً في الصفحة) في شيت واحد
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
  console.log(`\n🔍 جاري تجميع كافة كلمات الشفاطات (الجديدة + الموجودة بالصفحة)...`);

  try {
    const pageContent = fs.readFileSync(path.join(ROOT, 'src', 'components', 'pages', 'hoodsPage.tsx'), 'utf-8');
    const pageContentMinified = pageContent.replace(/\s+/g, ' ');
    
    const allKeywordsSet = new Set([
      // كلمات الاكتشاف والتطوير
      'تخريم شفاط', 'فتحة شفاط', 'تخريم شفاط المطبخ', 'عمل فتحة للشفاط', 
      'مقاس فتحة الشفاط', 'كور دريل شفاط', 'فتحة شفاط الحمام', 'فتحة شفاط زجاج',
      'تخريم مدخنة مطعم', 'فتحة شفاط هرمي', 'مقاس فتحة شفاط المطبخ', 
      'كور دريل مدخنة', 'تخريم مدخنة', 'فتحة مدخنة مطبخ', 'فتحات مداخن المطاعم',
      'تخريم مداخن', 'فتحة شفاط مطبخ مركزي', 'فتحة شفاط مسطح', 'شفاطات مطاعم',
      'قص زجاج لعمل شفاط', 'عمل فتحة شفاط في الزجاج', 'تخريم جدار لعمل شفاط',
      'تخريم خرسانة للشفاط', 'قطر فتحة الشفاط', 'مقاسات الشفاطات وتخريمها',
      'تكسير جدار للشفاط', 'عمل فتحة في السقف للشفاط', 'تخريم سقف لمدخنة',
      'اسعار تخريم الشفاطات', 'تكلفة عمل فتحة شفاط', 'سعر الكور دريل للشفاط',
      'معلم تخريم شفاطات', 'فني تركيب شفاطات', 'صنايعي فتح شفاط',
      'تخريم شفاط التجمع', 'تخريم شفاطات اكتوبر', 'تخريم مداخن المعادي'
    ]);

    // استخراج الكلمات الفعلية من الكود
    const strongRegex = /<strong>(.*?)<\/strong>/g;
    let match;
    while ((match = strongRegex.exec(pageContent)) !== null) {
      const kw = match[1].trim();
      if (kw.length > 4 && kw.split(' ').length <= 5) {
        allKeywordsSet.add(kw);
      }
    }
    
    // إضافة ثوابت الـ SEO
    allKeywordsSet.add('تركيب شفاط المطبخ');
    allKeywordsSet.add('فني تركيب شفاط مطبخ');
    allKeywordsSet.add('تركيب مدخنة شفاط مطبخ');
    allKeywordsSet.add('تركيب شفاط حمام');
    allKeywordsSet.add('صيانة شفاط المطبخ');
    
    const unique = [...allKeywordsSet];
    console.log(`📋 تم تجميع ${unique.length} كلمة إجمالاً. جاري فحص البيانات...`);

    const batches = chunkArray(unique, 500);
    let allRaw = [];
    for (let i = 0; i < batches.length; i++) {
      const raw = await fetchMetrics(batches[i]);
      allRaw = allRaw.concat(raw.map((item, j) => ({ item, keyword: batches[i][j] })));
    }

    const results = allRaw.map(({ item, keyword }) => {
      const m = item.keyword_metrics || {};
      const avg = Number(m.avg_monthly_searches) || 0;
      
      const isAdded = pageContentMinified.includes(keyword) || 
                      (keyword.split(' ').filter(w => w.length > 3).every(w => pageContentMinified.includes(w)));
      
      return {
        keyword,
        avg_monthly_searches: avg,
        competition: m.competition || 'UNKNOWN',
        is_added: isAdded ? '✅ مضافة في الموقع' : '❌ جديدة (غير مضافة)'
      };
    }).sort((a, b) => b.avg_monthly_searches - a.avg_monthly_searches);

    // Filter out keywords with 0 volume if they are not in the page
    const validResults = results.filter(r => r.avg_monthly_searches > 0 || r.is_added === '✅ مضافة في الموقع');

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(validResults.map((r, i) => ({
      '#': i + 1,
      'الكلمة المفتاحية': r.keyword,
      'حجم البحث الشهري': r.avg_monthly_searches,
      'المنافسة': COMP_AR[r.competition] || r.competition,
      'حالة الكلمة': r.is_added
    })));
    
    ws['!cols'] = [{ wch: 4 }, { wch: 40 }, { wch: 20 }, { wch: 20 }, { wch: 30 }];
    XLSX.utils.book_append_sheet(wb, ws, 'كافة كلمات الشفاطات');

    const xlsxPath = path.join(ROOT, 'hood-keywords-master.xlsx');
    XLSX.writeFile(wb, xlsxPath);
    
    const desktopFolder = 'C:\\Users\\i7\\Desktop\\الكلمات المفتاحية';
    if (fs.existsSync(desktopFolder)) {
      fs.copyFileSync(xlsxPath, path.join(desktopFolder, 'كلمات_الشفاطات_الشاملة.xlsx'));
    }

    console.log('\n✅ تم الحفظ بنجاح في كلمات_الشفاطات_الشاملة.xlsx');
    const { exec } = await import('child_process');
    exec(`powershell -Command "Start-Process '${path.join(desktopFolder, 'كلمات_الشفاطات_الشاملة.xlsx')}'"`, () => {});

  } catch (err) {
    console.error('\n❌ خطأ:', err.message);
  }
}

main();
