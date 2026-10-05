import { chromium } from 'playwright';

async function checkMagazine() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  
  await page.goto('https://starfairbd.com/magazine.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);
  
  const content = await page.content();
  console.log("=== Magazine Page Title ===");
  console.log(await page.title());

  console.log("=== Magazine Page Text Content Excerpt ===");
  console.log((await page.innerText('body')).slice(0, 500));

  console.log("=== Iframes, Embeds, PDFs, Flipbook Scripts ===");
  const iframes = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('iframe, embed, object, canvas, script')).map(el => ({
      tag: el.tagName,
      src: (el as any).src || (el as any).data || ''
    })).filter(x => x.src.length > 0);
  });
  console.log(iframes);

  await browser.close();
}

checkMagazine();
