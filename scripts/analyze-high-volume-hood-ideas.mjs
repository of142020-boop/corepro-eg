/**
 * فحص الكلمات العامة ذات حجم البحث العالي جداً (Head Terms) لصفحة الشفاطات
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

const HIGH_VOLUME_IDEAS = [
  'شفاط',
  'شفاطات',
  'شفاط مطبخ',
  'شفاط حمام',
  'شفاط توشيبا',
  'شفاط فريش',
  'شفاط تورنيدو',
  'شفاط بلت ان',
  'شفاط هرمي',
  'شفاط مسطح',
  'اسعار الشفاطات',
  'سعر شفاط مطبخ',
  'سعر شفاط الحمام',
  'افضل شفاط مطبخ',
  'افضل شفاط حمام',
  'مدخنة مطبخ',
  'شفاط مطعم',
  'شفاط بوتاجاز',
  'شفاط زجاج',
  'تنظيف الشفاط'
];

async function main() {
  console.log(`\n🧠 جاري فحص ${HIGH_VOLUME_IDEAS.length} كلمة عامة (Head Terms) متوقع لها بحث ضخم جداً...`);

  try {
    const response = await customer.keywordPlanIdeas.generateKeywordHistoricalMetrics({
      customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
      keywords: HIGH_VOLUME_IDEAS,
      language: 'languageConstants/1019',
      geo_target_constants: ['geoTargetConstants/2818'],
      keyword_plan_network: enums.KeywordPlanNetwork.GOOGLE_SEARCH,
    });
    
    const results = (response?.results || []).map((res, i) => {
      const kw = res.text || HIGH_VOLUME_IDEAS[i] || 'غير معروف';
      const m = res.keyword_metrics || {};
      return {
        'الكلمة المقترحة': kw,
        'حجم البحث الشهري': Number(m.avg_monthly_searches) || 0
      };
    }).sort((a, b) => b['حجم البحث الشهري'] - a['حجم البحث الشهري']);

    const valid = results.filter(r => r['حجم البحث الشهري'] > 0);

    console.log('\n✅ النتائج (أعلى الكلمات بحثاً على الإطلاق):');
    console.table(valid);

  } catch (err) {
    console.error('\n❌ خطأ:', err.message);
  }
}

main();
