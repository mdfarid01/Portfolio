const { chromium } = require('playwright');

// URL to test - change if needed
const URL = 'https://portfolio-main-nine-omega.vercel.app/contact';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ timeout: 120000 });
  try {
    console.log('Navigating to', URL);
    // log console messages from the page
    page.on('console', (msg) => console.log('PAGE LOG:', msg.type(), msg.text()));

    // capture network responses
    page.on('response', async (response) => {
      try {
        const req = response.request();
        const method = req.method();
        const url = req.url();
        if (method === 'POST' || url.includes('/api') || url.includes('/_next')) {
          const status = response.status();
          let body = '';
          try {
            body = await response.text();
            if (body.length > 1000) body = body.slice(0, 1000) + '...[truncated]';
          } catch (e) {
            body = '<no body>';
          }
          console.log(`NETWORK: ${method} ${url} -> ${status}\n${body}`);
        }
      } catch (e) {
        // ignore
      }
    });

    await page.goto(URL, { waitUntil: 'networkidle' });

    // Fill the form fields using placeholders
    await page.fill('input[placeholder="Your full name"]', 'Smoke Test User');
    await page.fill('input[placeholder="+91 -----"]', '+1 555-0100');
    await page.fill('input[placeholder="your.email@example.com"]', 'smoke@example.com');
    await page.fill('textarea[placeholder="Tell me about your project or just say hello..."]', 'This is an automated smoke test.');

    // Click the submit button
    await page.click('button:has-text("Send Message")');

    // Wait a short while to collect network events and UI updates
    await page.waitForTimeout(5000);

    // Wait for success message text set in client UI
    const success = await page.locator('text=Message sent — I will reply soon.').count();
    if (success > 0) {
      console.log('Smoke test: SUCCESS - success message detected on page');
    } else {
      // Try to capture any visible error message
      const errorText = await page.locator('text=Failed to send message').textContent().catch(() => null);
      console.log('Smoke test: NO success message detected. Error text (if any):', errorText);
    }
  } catch (err) {
    console.error('Smoke test error:', err);
    process.exitCode = 2;
  } finally {
    await browser.close();
  }
}

run();
