import { chromium } from 'playwright';
import fs from 'node:fs';

export const frames = [
  ['utama', '/', 1672, 941], ['kisah', '/kisah', 1672, 941],
  ['perjalanan', '/perjalanan', 1672, 941], ['karya', '/karya', 2069, 760],
  ['catatan', '/catatan', 1774, 887],
];
const phase = process.argv[2] || 'after';
const base = process.env.BASE_URL || 'http://localhost:3000';
fs.mkdirSync(`visual-qa/${phase}`, { recursive: true });
const browser = await chromium.launch();
const results = [];
for (const [name, route, width, height] of frames) {
  for (const mobile of [false, true]) {
    const page = await browser.newPage({viewport: mobile ? {width:390,height:844} : {width,height}, deviceScaleFactor:1, reducedMotion:'reduce'});
    const errors=[];
    page.on('pageerror', e=>errors.push(e.message));
    await page.goto(`${base}${route}?visualqa=1`, {waitUntil:'networkidle'});
    await page.evaluate(async()=>{await document.fonts.ready; await Promise.all(Array.from(document.images).map(i=>i.decode().catch(()=>{})));});
    await page.screenshot({path:`visual-qa/${phase}/${name}-${mobile?'mobile':'desktop'}.png`});
    results.push({name,mobile,errors,...await page.evaluate(()=>({viewport:[innerWidth,innerHeight],overflow:document.documentElement.scrollWidth>innerWidth,headings:[...document.querySelectorAll('h1')].map(e=>e.textContent),fonts:document.fonts.status}))});
    await page.close();
  }
}
await browser.close();
fs.mkdirSync('visual-qa/reports',{recursive:true});
fs.writeFileSync(`visual-qa/reports/${phase}-browser.json`,JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));
