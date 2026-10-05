import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

interface ScreenshotTask {
  dir: string;
  filename: string;
  url: string;
  viewport: { width: number; height: number };
  fullPage?: boolean;
}

const tasks: ScreenshotTask[] = [
  // BuildHub
  {
    dir: 'public/projects/buildhub',
    filename: 'storefront.png',
    url: 'https://buildhubs.ae',
    viewport: { width: 1600, height: 1000 }
  },
  {
    dir: 'public/projects/buildhub',
    filename: 'product-catalog.png',
    url: 'https://buildhubs.ae/products',
    viewport: { width: 1600, height: 1000 }
  },

  // Starfair Training Institute
  {
    dir: 'public/projects/starfair-training-institute',
    filename: 'homepage.png',
    url: 'https://starfairbd.com/',
    viewport: { width: 1600, height: 1000 }
  },
  {
    dir: 'public/projects/starfair-training-institute',
    filename: 'course-page.png',
    url: 'https://starfairbd.com/course.php',
    viewport: { width: 1600, height: 1000 }
  },
  {
    dir: 'public/projects/starfair-training-institute',
    filename: 'magazine.png',
    url: 'https://starfairbd.com/magazine.html',
    viewport: { width: 1600, height: 1000 }
  },

  // Sevix Global
  {
    dir: 'public/projects/sevix-global',
    filename: 'homepage.png',
    url: 'https://sevixglobal.com/',
    viewport: { width: 1600, height: 1000 }
  },
  {
    dir: 'public/projects/sevix-global',
    filename: 'services.png',
    url: 'https://sevixglobal.com/services',
    viewport: { width: 1600, height: 1000 }
  },
  {
    dir: 'public/projects/sevix-global',
    filename: 'ai-automation.png',
    url: 'https://sevixglobal.com/services/ai-automation',
    viewport: { width: 1600, height: 1000 }
  }
];

async function run() {
  console.log('🚀 Starting screenshot capture session...');
  const browser = await chromium.launch({ headless: true });

  for (const task of tasks) {
    const fullDir = path.join(process.cwd(), task.dir);
    if (!fs.existsSync(fullDir)) {
      fs.mkdirSync(fullDir, { recursive: true });
    }

    const targetPath = path.join(fullDir, task.filename);
    const tempRawPath = path.join(fullDir, `temp-${task.filename}`);

    console.log(`\n📸 Capturing [${task.url}] -> ${task.dir}/${task.filename}`);

    const context = await browser.newContext({
      viewport: task.viewport,
      deviceScaleFactor: 1.25, // Sharp text & crisp rendering
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    const page = await context.newPage();

    try {
      await page.goto(task.url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await page.waitForTimeout(4000); // Allow dynamic fonts, layout & images to finish loading

      await page.screenshot({
        path: tempRawPath,
        fullPage: task.fullPage || false,
        animations: 'disabled'
      });

      // Optimize image with Sharp
      await sharp(tempRawPath)
        .png({ compressionLevel: 8, palette: false, quality: 90 })
        .toFile(targetPath);

      // Clean up raw temp file
      if (fs.existsSync(tempRawPath)) {
        fs.unlinkSync(tempRawPath);
      }

      const stats = fs.statSync(targetPath);
      const metadata = await sharp(targetPath).metadata();

      console.log(`  ✅ Saved: ${targetPath}`);
      console.log(`     Dimensions: ${metadata.width}x${metadata.height}px`);
      console.log(`     Size: ${(stats.size / 1024).toFixed(1)} KB`);

    } catch (err: any) {
      console.error(`  ❌ Failed to capture ${task.url}:`, err.message);
    } finally {
      await page.close();
      await context.close();
    }
  }

  await browser.close();
  console.log('\n🎉 Screenshot capture session complete!');
}

run();
