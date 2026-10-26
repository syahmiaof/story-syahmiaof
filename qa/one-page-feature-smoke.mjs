import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

try {
  const introContext = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "no-preference" });
  await introContext.addInitScript(() => { sessionStorage.clear(); localStorage.removeItem("syahmiaof-language"); });
  const introPage = await introContext.newPage();
  await introPage.goto("http://localhost:3000/", { waitUntil: "commit" });
  await introPage.locator(".welcome-overlay").waitFor({ state: "attached" });
  const introStarted = Date.now();
  const introData = await introPage.evaluate(() => ({
    progressDuration: getComputedStyle(document.querySelector(".welcome-progress span")).animationDuration,
    sections: ["utama", "kisah", "perjalanan", "karya", "catatan"].map(id => document.querySelectorAll(`#${id}`).length),
  }));
  check(introData.sections.every(count => count === 1), `Duplicate/missing page section IDs: ${introData.sections.join(",")}`);
  check(introData.progressDuration === "5s", `Welcome intro duration is ${introData.progressDuration}`);
  await introPage.locator(".welcome-overlay").waitFor({ state: "detached", timeout: 8000 });
  const introElapsed = Date.now() - introStarted;
  check(introElapsed >= 4500 && introElapsed < 7500, `Welcome intro elapsed ${introElapsed}ms instead of five seconds`);
  const canvasData = await introPage.locator(".particle-field").evaluate(element => {
    const canvas = element;
    const pixels = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
    let redSamples = 0;
    for (let i = 0; i < pixels.length; i += 48) if (pixels[i] > 105 && pixels[i + 1] < 85 && pixels[i + 2] < 110 && pixels[i + 3] > 80) redSamples++;
    return { width: canvas.width, height: canvas.height, redSamples };
  });
  check(canvasData.redSamples > 180, `Particle field too faint/sparse (${canvasData.redSamples} sampled red pixels)`);
  await introPage.mouse.move(320, 260);
  await introPage.waitForTimeout(100);
  const pointerGlow = await introPage.locator(".particle-field").evaluate(element => Array.from(element.getContext("2d").getImageData(320, 260, 1, 1).data));
  check(pointerGlow[0] > pointerGlow[1] + 20 && pointerGlow[3] > 0, `Mouse-follow glow did not render: ${pointerGlow}`);
  await introContext.close();

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "no-preference" });
  await context.addInitScript(() => { sessionStorage.setItem("syahmiaof-welcome-v3-seen", "1"); });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "English" }).click();
  check(await page.getByRole("navigation", { name: "Navigasi utama" }).getByRole("link", { name: "Home" }).count() === 1, "English nav did not switch");
  check(await page.locator("html").getAttribute("lang") === "en", "HTML lang did not update to en");
  await page.getByRole("button", { name: "中文" }).click();
  check(await page.getByRole("navigation", { name: "Navigasi utama" }).getByRole("link", { name: "首页" }).count() === 1, "Chinese nav did not switch");
  check(await page.locator("html").getAttribute("lang") === "zh-Hans", "HTML lang did not update to zh-Hans");
  await page.getByRole("button", { name: "Bahasa Melayu" }).click();
  const footerCheck = await page.evaluate(() => ({
    punctuationGap: getComputedStyle(document.querySelector(".footer-about h2 span")).marginLeft,
    whatsapp: document.querySelector('.footer-contact a[href^="https://wa.me/"]')?.getAttribute("href"),
    email: document.querySelector('.footer-contact a[href^="mailto:"]')?.getAttribute("href"),
    portfolio: document.querySelector('.footer-contact a[href^="https://syahmiaof.my"]')?.getAttribute("href"),
  }));
  check(parseFloat(footerCheck.punctuationGap) > 0, "Footer heading punctuation has no breathing room");
  check(footerCheck.whatsapp === "https://wa.me/60107965236", "WhatsApp footer link is incorrect");
  check(footerCheck.email === "mailto:hello@syahmiaof.my", "Email footer link is incorrect");
  check(footerCheck.portfolio === "https://syahmiaof.my", "Portfolio footer link is incorrect");
  await page.getByRole("navigation", { name: "Navigasi utama" }).getByRole("link", { name: "Kisah" }).click();
  await page.waitForTimeout(750);
  check(new URL(page.url()).hash === "#kisah", "Kisah navigation did not scroll to its section");
  await page.locator(".section-kisah .reference-button.primary").click();
  check(new URL(page.url()).hash === "#kisah-stories", "Kisah hero CTA did not target story cards");
  await page.goto("http://localhost:3000/catatan", { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  check(await page.locator("#catatan").count() === 1, "Catatan route has duplicate/missing section anchor");
  check(Math.abs(await page.locator("#catatan").evaluate(element => element.getBoundingClientRect().top) - 76) < 100, "Direct Catatan route alignment is incorrect");

  await page.goto("http://localhost:3000/karya", { waitUntil: "networkidle" });
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await page.locator("#projects [role=button]").first().click();
  check(await page.getByRole("dialog", { name: /SYAHMIAOF/ }).count() === 1, "Project dialog did not open accessibly");
  await page.keyboard.press("Escape");
  check(await page.getByRole("dialog").count() === 0, "Project dialog did not close on Escape");

  const mobile = await context.newPage();
  await mobile.setViewportSize({ width: 390, height: 844 });
  await mobile.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const mobileOverflow = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  check(mobileOverflow <= 1, `Mobile has horizontal overflow of ${mobileOverflow}px`);
  await mobile.getByRole("button", { name: /Buka menu/i }).click();
  check(await mobile.getByRole("navigation", { name: "Navigasi utama" }).isVisible(), "Mobile navigation menu did not open");
  check(errors.length === 0, `Browser runtime errors: ${errors.join("; ")}`);
  console.log(JSON.stringify({ intro: { duration: introData.progressDuration, elapsed: introElapsed, canvas: canvasData }, pointerGlow, footerCheck, mobileOverflow, errors, failures }, null, 2));
  await context.close();
} finally {
  await browser.close();
}

if (failures.length) process.exitCode = 1;
