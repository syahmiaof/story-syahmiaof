import { chromium } from 'playwright';

const browser = await chromium.launch();
const viewports = [
  { name: 'iPhone-14', width: 390, height: 844 },
  { name: 'Galaxy-S20', width: 360, height: 800 },
  { name: 'Pixel-7', width: 412, height: 915 },
];

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    isMobile: true,
    hasTouch: true,
  });
  // skip welcome intro to test content layout
  await context.addInitScript(() => {
    sessionStorage.setItem('syahmiaof-welcome-seen', '1');
    sessionStorage.setItem('syahmiaof-welcome-v3-seen', '1');
  });

  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  // Check horizontal overflow
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth - window.innerWidth;
  });

  // Check bounding boxes of titles, copy, buttons, and sections
  const report = await page.evaluate(() => {
    const sections = ['utama', 'kisah', 'perjalanan', 'karya', 'catatan'];
    const sectionData = {};
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const title = el.querySelector('.reference-title');
      const intro = el.querySelector('.reference-intro');
      const actions = el.querySelector('.reference-actions');
      const copy = el.querySelector('.reference-copy');
      const scene = el.querySelector('.scene-layer');
      
      const tBox = title ? title.getBoundingClientRect() : null;
      const iBox = intro ? intro.getBoundingClientRect() : null;
      const aBox = actions ? actions.getBoundingClientRect() : null;
      const cBox = copy ? copy.getBoundingClientRect() : null;
      const sBox = scene ? scene.getBoundingClientRect() : null;

      // Check if title and intro overlap
      let titleIntroOverlap = false;
      if (tBox && iBox) {
        titleIntroOverlap = tBox.bottom > iBox.top + 5;
      }
      // Check if intro and actions overlap
      let introActionsOverlap = false;
      if (iBox && aBox) {
        introActionsOverlap = iBox.bottom > aBox.top + 5;
      }

      sectionData[id] = {
        titleBox: tBox ? { h: Math.round(tBox.height), b: Math.round(tBox.bottom) } : null,
        introBox: iBox ? { h: Math.round(iBox.height), t: Math.round(iBox.top), b: Math.round(iBox.bottom) } : null,
        actionsBox: aBox ? { t: Math.round(aBox.top) } : null,
        titleIntroOverlap,
        introActionsOverlap,
      };
    }
    return sectionData;
  });

  // Take screenshot for visual inspection
  await page.screenshot({ path: `qa/mobile-audit-${vp.name}.png`, fullPage: false });

  console.log(`=== Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
  console.log('Errors:', errors);
  console.log('Horizontal Overflow:', overflow, 'px');
  console.log('Section Layout & Overlaps:', JSON.stringify(report, null, 2));

  await context.close();
}

await browser.close();
