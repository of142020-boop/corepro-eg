import { OAuth2Client } from 'google-auth-library';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
  console.log("=== Google Ads API OAuth2 Setup ===");
  console.log("Please create OAuth2 Credentials (Desktop App) in Google Cloud Console.");
  
  const clientId = await question("Enter your Client ID: ");
  const clientSecret = await question("Enter your Client Secret: ");

  const oAuth2Client = new OAuth2Client(
    clientId,
    clientSecret,
    'urn:ietf:wg:oauth:2.0:oob' // Desktop app out-of-band redirect
  );

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/adwords'],
    prompt: 'consent' // Force to get refresh_token
  });

  console.log("\n1. Open this URL in your browser:");
  console.log(authUrl);
  console.log("\n2. Log in with your Google Ads Manager Account.");
  console.log("3. Grant permission and copy the authorization code.\n");

  const code = await question("Enter the authorization code: ");

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    console.log("\n✅ Success! Here are your tokens:");
    console.log("-----------------------------------");
    console.log(`REFRESH_TOKEN=${tokens.refresh_token}`);
    console.log("-----------------------------------");
    console.log("Save this REFRESH_TOKEN along with your DEVELOPER_TOKEN, CLIENT_ID, and CLIENT_SECRET in your .env file.");
  } catch (err) {
    console.error("Error fetching token:", err.message);
  } finally {
    rl.close();
  }
}

main();
