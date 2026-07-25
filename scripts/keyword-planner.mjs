import { GoogleAdsApi } from 'google-ads-api';
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
  'GOOGLE_ADS_CUSTOMER_ID' // e.g. '1234567890' (without dashes)
];

const missing = REQUIRED_VARS.filter(v => !process.env[v]);
if (missing.length > 0) {
  console.error("Missing required environment variables:", missing.join(", "));
  console.log("Please make sure you have followed the Google Ads API setup steps and filled .env");
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
  console.log("Fetching keyword ideas for core drilling & concrete cutting in Egypt...");

  try {
    const cliArgs = process.argv.slice(2);
    const keywordsToSearch = cliArgs.length > 0 ? cliArgs : [
      'قص خرسانة', 
      'تخريم كور', 
      'كور دريل', 
      'شفاط مطبخ', 
      'صنايعي كور'
    ];
    console.log("Searching keywords:", keywordsToSearch.join(', '));

    const response = await customer.keywordPlanIdeas.generateKeywordIdeas({
      customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
      
      // Network: GOOGLE_SEARCH or GOOGLE_SEARCH_AND_PARTNERS
      keywordPlanNetwork: 'GOOGLE_SEARCH',
      
      // Keywords to base ideas on
      keywordSeed: {
        keywords: keywordsToSearch
      },

      // Language: Arabic (1019)
      language: 'languageConstants/1019', 
      
      // Location: Egypt (2818)
      geoTargetConstants: ['geoTargetConstants/2818'], 

      // Historical metrics options (e.g. past 12 months)
      // Defaults to last 12 months if omitted
    });

    // Process and sort results by search volume
    const results = response.results
      .map(idea => {
        const text = idea.text;
        const metrics = idea.keywordIdeaMetrics || {};
        const avgMonthlySearches = metrics.avgMonthlySearches || 0;
        const competition = metrics.competition || 'UNKNOWN';
        const competitionIndex = metrics.competitionIndex || 0;
        
        // Convert micro-currency to standard currency (e.g., EGP)
        const lowTopPageBid = (metrics.lowTopOfPageBidMicros || 0) / 1000000;
        const highTopPageBid = (metrics.highTopOfPageBidMicros || 0) / 1000000;

        return {
          keyword: text,
          avgMonthlySearches,
          competition,
          competitionIndex,
          cpc_low: lowTopPageBid.toFixed(2),
          cpc_high: highTopPageBid.toFixed(2)
        };
      })
      .sort((a, b) => b.avgMonthlySearches - a.avgMonthlySearches);

    console.log(`\nFound ${results.length} keyword ideas!`);
    console.table(results.slice(0, 15)); // Show top 15 in console

    // Export to JSON for SEO planning
    fs.writeFileSync('keyword-ideas.json', JSON.stringify(results, null, 2));
    console.log("\n✅ Saved all results to keyword-ideas.json");

  } catch (error) {
    console.error("Error fetching keywords:");
    if (error.response && error.response.data) {
      console.error(JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error);
    }
  }
}

main();
