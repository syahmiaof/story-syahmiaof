import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const pages = [
  { route: "/", name: "01-utama", width: 1672, height: 941, ref: "01-utama-homepage.png" },
  { route: "/kisah", name: "02-kisah", width: 1672, height: 941, ref: "02-kisah-my-story.png" },
  { route: "/perjalanan", name: "03-perjalanan", width: 1672, height: 941, ref: "03-perjalanan-my-journey.png" },
  { route: "/karya", name: "04-karya", width: 2048, height: 752, ref: "04-karya-creations.png" },
  { route: "/catatan", name: "05-catatan", width: 1774, height: 887, ref: "05-catatan-reflections.png" },
];

async function runQA() {
  console.log(`Starting Visual QA against ${BASE_URL}...`);
  fs.mkdirSync("qa/screenshots", { recursive: true });
  fs.mkdirSync("qa/diffs", { recursive: true });

  const browser = await chromium.launch({ headless: true });

  // 1. Desktop Test Cycle
  console.log("\n=== 1. CAPTURING DESKTOP REFERENCE VIEWPORTS ===");
  for (const p of pages) {
    const page = await browser.newPage({
      viewport: { width: p.width, height: p.height },
      deviceScaleFactor: 1,
    });

    console.log(`Navigating to ${p.route} (${p.width}x${p.height})...`);
    await page.goto(`${BASE_URL}${p.route}`, { waitUntil: "networkidle" });
    // Allow GSAP animations to complete smoothly
    await page.waitForTimeout(1500);

    const screenshotPath = `qa/screenshots/${p.name}-desktop-${p.width}x${p.height}.png`;
    await page.screenshot({ path: screenshotPath });
    console.log(`Saved screenshot -> ${screenshotPath}`);

    await page.close();
  }

  // 2. Mobile Test Cycle
  console.log("\n=== 2. CAPTURING MOBILE RESPONSIVE VIEWPORTS (390x844) ===");
  for (const p of pages) {
    const page = await browser.newPage({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });

    console.log(`Navigating to ${p.route} (Mobile 390x844)...`);
    await page.goto(`${BASE_URL}${p.route}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const screenshotPath = `qa/screenshots/${p.name}-mobile-390x844.png`;
    await page.screenshot({ path: screenshotPath });
    console.log(`Saved mobile screenshot -> ${screenshotPath}`);

    await page.close();
  }

  await browser.close();
  console.log("\nVisual QA captures completed successfully.");
}

runQA().catch((err) => {
  console.error("QA Error:", err);
  process.exit(1);
});
