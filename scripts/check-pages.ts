import { chromium } from 'playwright';
import path from 'path';

async function checkSpecificPages() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
  
  const pagesToCheck = [
    { name: 'starfair-course', url: 'https://starfairbd.com/course.php' },
    { name: 'starfair-magazine', url: 'https://starfairbd.com/magazine.html' },
    { name: 'starfair-registration', url: 'https://starfairbd.com/registration.html' },
    { name: 'buildhub-products', url: 'https://buildhubs.ae/products' },
    { name: 'buildhub-categories', url: 'https://buildhubs.ae/categories' },
    { name: 'sevix-services', url: 'https://sevixglobal.com/services' },
    { name: 'sevix-ai-automation', url: 'https://sevixglobal.com/services/ai-automation' }
  ];

  for (const item of pagesToCheck) {
    const page = await context.newPage();
    try {
      await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(2000);
      const title = await page.title();
      console.log(`Page: ${item.name} (${item.url}) | Title: ${title}`);
      
      const screenshotPath = path.join(process.cwd(), 'scratch', `check-${item.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`Saved screenshot to: ${screenshotPath}`);
    } catch (e: any) {
      console.log(`Error checking ${item.name}: ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
}

checkSpecificPages();
