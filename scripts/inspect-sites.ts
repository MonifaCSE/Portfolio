import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const scratchDir = path.join(process.cwd(), 'scratch');
if (!fs.existsSync(scratchDir)) {
  fs.mkdirSync(scratchDir, { recursive: true });
}

const targets = [
  { name: 'buildhub', url: 'https://buildhubs.ae' },
  { name: 'starfair', url: 'https://starfairbd.com/' },
  { name: 'sevix', url: 'https://sevixglobal.com/' }
];

async function inspect() {
  console.log("Starting site inspection...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1000 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  for (const target of targets) {
    console.log(`\n========================================`);
    console.log(`Inspecting ${target.name} (${target.url})`);
    console.log(`========================================`);
    const page = await context.newPage();
    try {
      const response = await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(3000); // Allow dynamic content to load
      console.log(`Status: ${response ? response.status() : 'No response'}`);
      console.log(`Title: ${await page.title()}`);

      // Capture homepage preview
      const hpPath = path.join(scratchDir, `${target.name}-homepage.png`);
      await page.screenshot({ path: hpPath, fullPage: false });
      console.log(`Saved viewport screenshot: ${hpPath}`);

      // Capture fullpage
      const fpPath = path.join(scratchDir, `${target.name}-homepage-full.png`);
      await page.screenshot({ path: fpPath, fullPage: true });
      console.log(`Saved full page screenshot: ${fpPath}`);

      // Extract all internal navigation links
      const links = await page.evaluate(() => {
        const origin = location.origin;
        const elements = Array.from(document.querySelectorAll('a[href]'));
        return elements.map(a => {
          const href = (a as HTMLAnchorElement).href;
          const text = (a as HTMLElement).innerText.trim().replace(/\s+/g, ' ');
          return { text, href };
        }).filter(l => l.href.startsWith(origin) && l.href !== location.href && !l.href.includes('#'));
      });

      console.log(`Found ${links.length} internal links:`);
      const uniqueLinksMap = new Map<string, string>();
      links.forEach(l => {
        if (!uniqueLinksMap.has(l.href)) {
          uniqueLinksMap.set(l.href, l.text);
        }
      });

      uniqueLinksMap.forEach((text, href) => {
        console.log(`  - [${text}] -> ${href}`);
      });

      // Also inspect secondary pages if found
      let inspectedCount = 0;
      for (const [href, text] of uniqueLinksMap.entries()) {
        if (inspectedCount >= 5) break;
        try {
          console.log(`  Visiting secondary page: ${text} (${href})`);
          const secPage = await context.newPage();
          await secPage.goto(href, { waitUntil: 'domcontentloaded', timeout: 15000 });
          await secPage.waitForTimeout(2000);
          const slug = href.replace(target.url, '').replace(/[^a-zA-Z0-9]/g, '-').replace(/^-+|-+$/g, '') || 'page';
          const secPath = path.join(scratchDir, `${target.name}-${slug}.png`);
          await secPage.screenshot({ path: secPath, fullPage: false });
          console.log(`  Saved: ${secPath} (Title: ${await secPage.title()})`);
          await secPage.close();
          inspectedCount++;
        } catch (err: any) {
          console.log(`  Failed to visit ${href}: ${err.message}`);
        }
      }

    } catch (err: any) {
      console.error(`Error inspecting ${target.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("\nInspection complete!");
}

inspect();
