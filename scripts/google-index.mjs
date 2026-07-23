import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const KEY_PATH = path.join(__dirname, '../google-service-account.json');
const SITEMAP_PATH = path.join(__dirname, '../dist/sitemap-0.xml');

async function main() {
  console.log('🚀 Starting Google Indexing API Script...');

  // 1. Check if the key exists
  if (!fs.existsSync(KEY_PATH)) {
    console.error('❌ ERROR: google-service-account.json not found!');
    console.error('Please download your Service Account JSON key from Google Cloud Console and save it as google-service-account.json in the root directory.');
    process.exit(1);
  }

  // 1.1 Check if it's the placeholder
  const keyContent = JSON.parse(fs.readFileSync(KEY_PATH, 'utf-8'));
  if (keyContent.project_id === 'YOUR_PROJECT_ID') {
    console.error('❌ ERROR: You are using the placeholder google-service-account.json!');
    console.error('Please replace the contents of google-service-account.json with your actual Service Account key.');
    process.exit(1);
  }

  // 2. Check if sitemap exists
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ ERROR: Sitemap not found at dist/sitemap-0.xml');
    console.error('Please run "npm run build" first to generate the sitemap.');
    process.exit(1);
  }

  // 3. Read and parse Sitemap to extract URLs
  console.log('🔍 Reading sitemap...');
  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const parser = new XMLParser();
  const parsedSitemap = parser.parse(sitemapXml);
  
  let urls = [];
  if (parsedSitemap.urlset && parsedSitemap.urlset.url) {
    const urlElements = Array.isArray(parsedSitemap.urlset.url) 
      ? parsedSitemap.urlset.url 
      : [parsedSitemap.urlset.url];
    
    urls = urlElements.map(u => u.loc).filter(loc => loc && !loc.endsWith('/')); // avoid trailing slash duplicates if present, or just grab all
    // Let's grab all unique URLs actually
    urls = [...new Set(urlElements.map(u => u.loc))];
  }

  if (urls.length === 0) {
    console.error('❌ No URLs found in the sitemap.');
    process.exit(1);
  }

  console.log(`✅ Found ${urls.length} URLs to index.`);

  // 4. Authenticate with Google
  console.log('🔐 Authenticating with Google Indexing API...');
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: keyContent.client_email,
      private_key: keyContent.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  let authClient;
  try {
    authClient = await auth.getClient();
    console.log('✅ Authentication successful.');
  } catch (err) {
    console.error('❌ Authentication failed. Make sure your JSON key is correct.');
    console.error(err.message);
    process.exit(1);
  }

  // 5. Send URLs to Indexing API
  const indexing = google.indexing({ version: 'v3', auth: authClient });
  
  let successCount = 0;
  let errorCount = 0;

  for (const url of urls) {
    try {
      // Send URL_UPDATED notification
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`🟢 Successfully requested indexing for: ${url}`);
      successCount++;
    } catch (err) {
      console.error(`🔴 Failed to request indexing for: ${url}`);
      if (err.response && err.response.data && err.response.data.error) {
        console.error(`   Error: ${err.response.data.error.message}`);
        if (err.response.data.error.status === 'PERMISSION_DENIED') {
          console.error('   💡 Fix: Ensure the Service Account email is added as an OWNER in Google Search Console.');
          break; // Stop execution if permission is denied (don't spam errors)
        }
      } else {
        console.error(`   Error: ${err.message}`);
      }
      errorCount++;
    }
  }

  console.log('\n================================');
  console.log(`🎉 Indexing complete!`);
  console.log(`✅ Success: ${successCount} URLs`);
  if (errorCount > 0) {
    console.log(`❌ Failed: ${errorCount} URLs`);
  }
  console.log('================================\n');
}

main();
