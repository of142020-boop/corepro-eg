/**
 * فحص الأفكار الموسعة لصفحة الشفاطات (الدفعة الثالثة: البلاورات والتأسيس والمقاولات)
 */

import { GoogleAdsApi, enums } from 'google-ads-api';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

const BLOWER_AND_PREP_IDEAS = [
  'بلاور شفط هواء',
  'اسعار بلاور الهواء',
  'بلاور شفط للمطاعم',
  'تركيب بلاور شفط',
  'شفاط بلاور',
  'مروحة طرد مركزي',
  'بلاورات هواء صناعية',
  'شركات تركيب بلاورات',
  'تأسيس شفاط الحمام',
  'تأسيس تهوية الحمام',
  'مواسير الشفاط المخفية',
  'تاسيس مداخن المطابخ',
  'تأسيس شفاط مسطح',
  'توريد وتركيب شفاطات مركزية',
  'توريد وتركيب مداخن مطاعم',
  'تركيب تهوية مركزية',
  'شفاطات مصانع',
  'تهوية جراجات',
  'دكت الصاج للشفاطات',
  'تأسيس هوايات المطبخ',
  'عمل فتحة شفاط مركزي',
  'شركات تهوية وتبريد',
  'مقاول تهوية مركزية',
  'مراوح شفط كبيرة'
];

async function main() {
  console.log(`\n🧠 جاري فحص ${BLOWER_AND_PREP_IDEAS.length} فكرة جديدة (البلاورات والتأسيس)...`);

  try {
    const response = await customer.keywordPlanIdeas.generateKeywordHistoricalMetrics({
      customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
      keywords: BLOWER_AND_PREP_IDEAS,
      language: 'languageConstants/1019',
      geo_target_constants: ['geoTargetConstants/2818'],
      keyword_plan_network: enums.KeywordPlanNetwork.GOOGLE_SEARCH,
    });
    
    const results = (response?.results || []).map((res, i) => {
      const kw = res.text || BLOWER_AND_PREP_IDEAS[i] || 'غير معروف';
      const m = res.keyword_metrics || {};
      return {
        'الكلمة المقترحة': kw,
        'حجم البحث الشهري': Number(m.avg_monthly_searches) || 0
      };
    }).sort((a, b) => b['حجم البحث الشهري'] - a['حجم البحث الشهري']);

    const valid = results.filter(r => r['حجم البحث الشهري'] > 0);

    console.log('\n✅ النتائج القوية (دفعة البلاورات والتأسيس):');
    console.table(valid);

  } catch (err) {
    console.error('\n❌ خطأ:', err.message);
  }
}

main();
