/**
 * Google Ads API — Refresh Token Generator (Localhost Flow)
 * Uses http://localhost:8080/callback instead of deprecated OOB flow.
 *
 * BEFORE running: make sure http://localhost:8080/callback is added
 * as an Authorized Redirect URI in Google Cloud Console → OAuth 2.0 Clients.
 *
 * Run: node scripts/refresh-token.mjs
 */

import { OAuth2Client } from 'google-auth-library';
import http from 'http';
import { exec } from 'child_process';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env');

const CLIENT_ID = process.env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_ADS_CLIENT_SECRET;
const PORT = 3333;
const REDIRECT_URI = `http://localhost:${PORT}/callback`;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('❌ GOOGLE_ADS_CLIENT_ID or GOOGLE_ADS_CLIENT_SECRET missing from .env');
  process.exit(1);
}

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/adwords'],
  prompt: 'consent',
});

console.log('\n=== Google Ads API — Refresh Token Generator ===\n');
console.log('🚀 جاري فتح المتصفح للمصادقة...');
console.log('\nإذا لم يفتح المتصفح تلقائياً، افتح هذا الرابط يدوياً:');
console.log(authUrl);
console.log('\n⏳ في انتظار الموافقة...\n');

// Open browser automatically
if (process.platform === 'win32') {
  // On Windows, use PowerShell Start-Process to safely open URLs with special characters
  exec(`powershell -Command "Start-Process '${authUrl}'"`, (err) => {
    if (err) console.log('(تعذّر فتح المتصفح تلقائياً، افتح الرابط أعلاه يدوياً)');
  });
} else if (process.platform === 'darwin') {
  exec(`open "${authUrl}"`, (err) => {
    if (err) console.log('(تعذّر فتح المتصفح تلقائياً)');
  });
} else {
  exec(`xdg-open "${authUrl}"`, (err) => {
    if (err) console.log('(تعذّر فتح المتصفح تلقائياً)');
  });
}

// Start local server to catch the redirect
const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith('/callback')) {
    res.writeHead(404);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h2>❌ خطأ: ${error}</h2><p>أغلق هذه النافذة وحاول مرة أخرى.</p>`);
    server.close();
    process.exit(1);
  }

  if (!code) {
    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h2>❌ لم يتم الحصول على الكود</h2>');
    server.close();
    process.exit(1);
  }

  try {
    const { tokens } = await oAuth2Client.getToken(code);

    if (!tokens.refresh_token) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <h2>⚠️ تحذير: لم يتم الحصول على Refresh Token</h2>
        <p>ربما سبق وأعطيت إذناً لهذا التطبيق. يرجى إلغاء الإذن من <a href="https://myaccount.google.com/permissions">هنا</a> ثم المحاولة مرة أخرى.</p>
      `);
      server.close();
      return;
    }

    // Update .env
    let envContent = fs.readFileSync(envPath, 'utf-8');
    if (envContent.match(/GOOGLE_ADS_REFRESH_TOKEN=/)) {
      envContent = envContent.replace(
        /GOOGLE_ADS_REFRESH_TOKEN=.*/,
        `GOOGLE_ADS_REFRESH_TOKEN=${tokens.refresh_token}`
      );
    } else {
      envContent += `\nGOOGLE_ADS_REFRESH_TOKEN=${tokens.refresh_token}\n`;
    }
    fs.writeFileSync(envPath, envContent, 'utf-8');

    console.log('\n✅ تم الحصول على Refresh Token بنجاح!');
    console.log('✅ تم تحديث ملف .env تلقائياً!');
    console.log('\n🚀 يمكنك الآن تشغيل: npm run gads:keywords\n');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>Core Pro — تم التفويض</title>
        <style>
          body { font-family: Arial, sans-serif; display:flex; align-items:center; justify-content:center; height:100vh; margin:0; background:#f0fdf4; }
          .card { background:white; border-radius:16px; padding:40px; text-align:center; box-shadow:0 4px 24px rgba(0,0,0,0.1); max-width:400px; }
          h1 { color:#16a34a; font-size:2rem; }
          p { color:#555; margin-top:8px; }
          .badge { background:#dcfce7; color:#16a34a; padding:8px 16px; border-radius:8px; font-weight:bold; display:inline-block; margin-top:16px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>✅ تم التفويض!</h1>
          <p>تم تحديث Refresh Token في ملف .env بنجاح.</p>
          <div class="badge">يمكنك إغلاق هذه النافذة</div>
        </div>
      </body>
      </html>
    `);

    server.close();
  } catch (err) {
    console.error('\n❌ خطأ في استبدال الكود:', err.message);
    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<h2>❌ خطأ: ${err.message}</h2>`);
    server.close();
    process.exit(1);
  }
});

server.listen(PORT, () => {
  console.log(`🌐 الخادم المحلي يعمل على: http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ المنفذ ${PORT} مستخدم بالفعل. أغلق البرنامج الذي يستخدمه وحاول مرة أخرى.`);
  } else {
    console.error('\n❌ خطأ في الخادم:', err.message);
  }
  process.exit(1);
});
