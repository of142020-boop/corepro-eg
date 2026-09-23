/**
 * Google Ads API — Connection & Campaign Test
 * Tests basic connectivity and lists active campaigns
 */

import { GoogleAdsApi } from 'google-ads-api';
import dotenv from 'dotenv';
dotenv.config();

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

const customer = client.Customer({
  customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,  // 2622817901 — actual ads account
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
});

async function main() {
  console.log('\n🔌 اختبار الاتصال بـ Google Ads API...');
  console.log(`📋 Customer ID: ${process.env.GOOGLE_ADS_CUSTOMER_ID}\n`);

  try {
    // Test 1: Get customer info
    console.log('--- Test 1: Customer Info ---');
    const customerInfo = await customer.query(`
      SELECT
        customer.id,
        customer.descriptive_name,
        customer.currency_code,
        customer.time_zone,
        customer.status
      FROM customer
      LIMIT 1
    `);
    console.log('✅ Customer:', JSON.stringify(customerInfo[0]?.customer, null, 2));

  } catch (e) {
    console.error('❌ Customer Info Error:', e.message || e);
  }

  try {
    // Test 2: List campaigns
    console.log('\n--- Test 2: Active Campaigns ---');
    const campaigns = await customer.query(`
      SELECT
        campaign.id,
        campaign.name,
        campaign.status,
        campaign.advertising_channel_type,
        metrics.impressions,
        metrics.clicks,
        metrics.cost_micros,
        metrics.conversions
      FROM campaign
      WHERE campaign.status = 'ENABLED'
      ORDER BY metrics.impressions DESC
      LIMIT 10
    `);

    if (campaigns.length === 0) {
      console.log('⚠️ لا توجد حملات نشطة في هذا الحساب.');
    } else {
      console.log(`✅ عدد الحملات النشطة: ${campaigns.length}`);
      campaigns.forEach(row => {
        const c = row.campaign;
        const m = row.metrics;
        const cost = (Number(m.cost_micros) / 1_000_000).toFixed(2);
        console.log(`  📢 ${c.name} | Impressions: ${m.impressions} | Clicks: ${m.clicks} | Cost: ${cost} EGP`);
      });
    }

  } catch (e) {
    console.error('❌ Campaigns Error:', e.message || e);
  }

  try {
    // Test 3: Keyword performance (last 30 days)
    console.log('\n--- Test 3: Top Keywords (last 30 days) ---');
    const keywords = await customer.query(`
      SELECT
        ad_group_criterion.keyword.text,
        ad_group_criterion.keyword.match_type,
        metrics.impressions,
        metrics.clicks,
        metrics.cost_micros,
        metrics.average_cpc,
        metrics.conversions
      FROM keyword_view
      WHERE
        segments.date DURING LAST_30_DAYS
        AND campaign.status = 'ENABLED'
        AND ad_group.status = 'ENABLED'
        AND ad_group_criterion.status = 'ENABLED'
      ORDER BY metrics.clicks DESC
      LIMIT 20
    `);

    if (keywords.length === 0) {
      console.log('⚠️ لا توجد بيانات كلمات مفتاحية للفترة المحددة.');
    } else {
      console.log(`✅ أفضل ${keywords.length} كلمة مفتاحية:\n`);
      const table = keywords.map(row => ({
        keyword: row.ad_group_criterion.keyword.text,
        match: row.ad_group_criterion.keyword.match_type,
        impressions: row.metrics.impressions,
        clicks: row.metrics.clicks,
        cost_egp: (Number(row.metrics.cost_micros) / 1_000_000).toFixed(2),
        avg_cpc: (Number(row.metrics.average_cpc) / 1_000_000).toFixed(2),
        conversions: row.metrics.conversions,
      }));
      console.table(table);
    }

  } catch (e) {
    console.error('❌ Keywords Error:', e.message || e);
  }

  console.log('\n✅ انتهى الاختبار!');
}

main();
