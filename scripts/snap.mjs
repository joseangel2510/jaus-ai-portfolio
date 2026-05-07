#!/usr/bin/env node
/**
 * Full-page screenshot that pre-scrolls the page so IntersectionObserver-based
 * reveal animations fire and finish before capture.
 *
 * Usage: node scripts/snap.mjs [url] [label] [viewport]
 *   viewport: "desktop" (default 1440x900), "mobile" (390x844), or WIDTHxHEIGHT
 */
import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = path.resolve(
  __dirname,
  "..",
  "temporary screenshots",
);
fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const PRESETS = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1 },
  laptop: { width: 1280, height: 800, deviceScaleFactor: 1 },
  tablet: { width: 768, height: 1024, deviceScaleFactor: 2 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2 },
};

function nextNumber() {
  const files = fs
    .readdirSync(SCREENSHOTS_DIR)
    .filter((f) => f.startsWith("screenshot-"));
  let max = 0;
  for (const f of files) {
    const m = f.match(/screenshot-(\d+)/);
    if (m) max = Math.max(max, Number(m[1]));
  }
  return max + 1;
}

function parseViewport(flag) {
  if (!flag) return PRESETS.desktop;
  if (PRESETS[flag]) return PRESETS[flag];
  const m = flag.match(/^(\d+)x(\d+)$/);
  if (m) return { width: Number(m[1]), height: Number(m[2]), deviceScaleFactor: 1 };
  return PRESETS.desktop;
}

async function snap(url, label, viewport) {
  const num = nextNumber();
  const filename = label
    ? `screenshot-${num}-${label}.png`
    : `screenshot-${num}.png`;
  const filepath = path.join(SCREENSHOTS_DIR, filename);

  console.log(`▸ Capturing ${url} @ ${viewport.width}x${viewport.height}`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport(viewport);
  await page.goto(url, { waitUntil: "networkidle2", timeout: 45000 });

  await page.evaluate(async () => {
    const total = document.body.scrollHeight;
    const step = window.innerHeight * 0.6;
    for (let y = 0; y < total; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });

  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal, .reveal-stagger")
      .forEach((el) => el.classList.add("is-visible"));
  });

  await page.evaluate(() =>
    document.fonts && document.fonts.ready ? document.fonts.ready : null,
  );
  await new Promise((r) => setTimeout(r, 1500));

  await page.screenshot({ path: filepath, fullPage: true });
  await browser.close();
  console.log(`✓ Saved ${filepath}`);
  return filepath;
}

const url = process.argv[2] || "http://localhost:3001";
const label = process.argv[3] || "snapshot";
const viewport = parseViewport(process.argv[4]);
snap(url, label, viewport).catch((e) => {
  console.error("Screenshot failed:", e.message);
  process.exit(1);
});
