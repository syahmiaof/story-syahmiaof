import { chromium } from 'playwright';
const browser=await chromium.launch();
const routes=['/','/kisah','/perjalanan','/karya','/catatan'];
const pages=[];
for(const route of routes){const page=await browser.newPage({viewport:{width:1672,height:941},reducedMotion:'reduce'});const errs=[];page.on('pageerror',e=>errs.push(e.message));await page.goto('http://localhost:3002'+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);const data=await page.evaluate(()=>({title:document.querySelector('h1')?.innerText,broken:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),active:document.querySelector('[aria-current="page"]')?.innerText}));pages.push({route,...data,errors:errs});await page.close();}
const page=await browser.newPage({viewport:{width:1672,height:941},reducedMotion:'reduce'});
await page.goto('http://localhost:3002/kisah',{waitUntil:'networkidle'});await page.getByRole('button',{name:/Baca Selanjutnya/i}).first().click();const storyOpen=await page.locator('dialog').evaluate(d=>d.open);await page.getByRole('button',{name:'Tutup Dialog'}).click();
await page.goto('http://localhost:3002/perjalanan',{waitUntil:'networkidle'});await page.getByRole('button',{name:/Baca Selanjutnya/i}).first().click();const timelineOpen=await page.locator('dialog').evaluate(d=>d.open);await page.getByRole('button',{name:'Tutup Dialog'}).click();
await page.goto('http://localhost:3002/catatan',{waitUntil:'networkidle'});await page.getByRole('button',{name:'Baca PEMIKIRAN'}).click();const noteOpen=await page.locator('dialog').evaluate(d=>d.open);
await page.goto('http://localhost:3002/',{waitUntil:'networkidle'});await page.getByRole('button',{name:'Toggle navigation language'}).click();const languageChanged=await page.getByRole('navigation',{name:'Navigasi utama'}).getByRole('link',{name:'Home'}).count()===1;
const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});await mobile.goto('http://localhost:3002/',{waitUntil:'networkidle'});await mobile.getByRole('button',{name:'Buka Menu'}).click();const mobileNav=await mobile.getByRole('navigation',{name:'Navigasi utama'}).isVisible();
console.log(JSON.stringify({pages,storyOpen,timelineOpen,noteOpen,mobileNav,languageChanged},null,2));await browser.close();
