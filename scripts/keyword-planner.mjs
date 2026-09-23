import { GoogleAdsApi, enums } from 'google-ads-api';
import dotenv from 'dotenv';
import fs from 'fs';

// Load variables from .env
dotenv.config();

// Validate required env vars
const REQUIRED_VARS = [
  'GOOGLE_ADS_CLIENT_ID',
  'GOOGLE_ADS_CLIENT_SECRET',
  'GOOGLE_ADS_DEVELOPER_TOKEN',
  'GOOGLE_ADS_REFRESH_TOKEN',
  'GOOGLE_ADS_CUSTOMER_ID'
];

const missing = REQUIRED_VARS.filter(v => !process.env[v]);
if (missing.length > 0) {
  console.error("❌ Missing required environment variables:", missing.join(", "));
  process.exit(1);
}

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

const customer = client.Customer({
  customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
});

async function main() {
  console.log("\n🔍 جلب أفكار الكلمات المفتاحية لـ Core Pro...\n");

  try {
    const cliArgs = process.argv.slice(2);
    const keywordsToSearch = cliArgs.length > 0 ? cliArgs : [
      'قص خرسانة',
      'تخريم كور',
      'كور دريل',
      'شفاط مطبخ',
      'حفر جدران',
    ];

    console.log("🎯 الكلمات المستخدمة:", keywordsToSearch.join(', '));
    console.log("📍 المنطقة: مصر | اللغة: العربية\n");

    // google-ads-api v14+ uses enums for KeywordPlanNetwork
    // GOOGLE_SEARCH = 2, GOOGLE_SEARCH_AND_PARTNERS = 3
    const response = await customer.keywordPlanIdeas.generateKeywordIdeas({
      customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
      keyword_plan_network: enums.KeywordPlanNetwork.GOOGLE_SEARCH,
      keyword_seed: {
        keywords: keywordsToSearch
      },
      // Arabic language constant ID: 1019
      language: 'languageConstants/1019',
      // Egypt geo target constant ID: 2818
      geo_target_constants: ['geoTargetConstants/2818'],
    });

    if (!response || !response.results || response.results.length === 0) {
      console.log("⚠️ لم يتم العثور على نتائج. جرّب كلمات مختلفة.");
      return;
    }

    // Process results
    const results = response.results
      .map(idea => {
        const metrics = idea.keyword_idea_metrics || {};
        const avgMonthlySearches = Number(metrics.avg_monthly_searches) || 0;
        const competition = metrics.competition || 'UNKNOWN';
        const competitionIndex = metrics.competition_index || 0;
        const lowBid = (Number(metrics.low_top_of_page_bid_micros) || 0) / 1_000_000;
        const highBid = (Number(metrics.high_top_of_page_bid_micros) || 0) / 1_000_000;

        return {
          keyword: idea.text,
          avgMonthlySearches,
          competition,
          competitionIndex,
          cpc_low_egp: lowBid.toFixed(2),
          cpc_high_egp: highBid.toFixed(2),
        };
      })
      .sort((a, b) => b.avgMonthlySearches - a.avgMonthlySearches);

    console.log(`✅ تم العثور على ${results.length} فكرة كلمة مفتاحية!\n`);
    console.log("📊 أفضل 20 كلمة حسب حجم البحث:");
    console.table(results.slice(0, 20));

    // Save all results to JSON
    const outputPath = 'keyword-ideas.json';
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8');
    console.log(`\n💾 تم حفظ ${results.length} كلمة في: ${outputPath}`);

    // Summary stats
    const highVolume = results.filter(r => r.avgMonthlySearches >= 1000).length;
    const medVolume  = results.filter(r => r.avgMonthlySearches >= 100 && r.avgMonthlySearches < 1000).length;
    const lowComp    = results.filter(r => r.competition === 'LOW').length;

    console.log("\n📈 ملخص:");
    console.log(`  🔥 كلمات بحجم بحث عالي (1000+/شهر): ${highVolume}`);
    console.log(`  📊 كلمات بحجم بحث متوسط (100-999/شهر): ${medVolume}`);
    console.log(`  💡 كلمات بمنافسة منخفضة: ${lowComp}`);

  } catch (error) {
    console.error("\n❌ خطأ في جلب الكلمات المفتاحية:");
    if (error.errors) {
      error.errors.forEach(e => console.error(' -', e.message));
    } else {
      console.error(error.message || error);
    }
    process.exit(1);
  }
}

main();
