/**
 * Google Ads API — List Client Accounts under Manager
 * Run this to find your actual Ads Account ID
 */

import { GoogleAdsApi } from 'google-ads-api';
import dotenv from 'dotenv';
dotenv.config();

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

// Query using the Manager Account
const manager = client.Customer({
  customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
});

async function main() {
  console.log('\n🔍 جلب الحسابات الفرعية تحت Manager Account...');
  console.log(`👤 Manager ID: ${process.env.GOOGLE_ADS_CUSTOMER_ID} (CorePro Manager)\n`);

  try {
    const clients = await manager.query(`
      SELECT
        customer_client.id,
        customer_client.descriptive_name,
        customer_client.currency_code,
        customer_client.time_zone,
        customer_client.status,
        customer_client.level,
        customer_client.manager
      FROM customer_client
      WHERE customer_client.level = 1
      ORDER BY customer_client.id ASC
    `);

    if (clients.length === 0) {
      console.log('⚠️ لا توجد حسابات فرعية تحت هذا الـ Manager Account.');
      console.log('ربما يجب إنشاء حساب Google Ads عادي وربطه بالـ Manager.');
      return;
    }

    console.log(`✅ تم العثور على ${clients.length} حساب:\n`);
    clients.forEach((row, i) => {
      const c = row.customer_client;
      const isManager = c.manager ? '👑 Manager' : '📢 Client';
      console.log(`${i + 1}. [${isManager}] ${c.descriptive_name}`);
      console.log(`   ID: ${c.id} | Currency: ${c.currency_code} | Status: ${c.status}`);
      console.log();
    });

    // Find non-manager accounts (actual ad accounts)
    const adAccounts = clients.filter(r => !r.customer_client.manager);
    
    if (adAccounts.length > 0) {
      console.log('💡 حسابات الإعلانات المتاحة (غير Manager):');
      adAccounts.forEach(row => {
        const c = row.customer_client;
        console.log(`  👉 GOOGLE_ADS_CLIENT_ACCOUNT_ID=${c.id}  (${c.descriptive_name})`);
      });
      console.log('\nأضف هذه القيمة إلى ملف .env باسم GOOGLE_ADS_CLIENT_ACCOUNT_ID');
    }

  } catch (error) {
    console.error('❌ خطأ:', error.message || error);
    if (error.errors) {
      error.errors.forEach(e => console.error(' -', e.message));
    }
  }
}

main();
