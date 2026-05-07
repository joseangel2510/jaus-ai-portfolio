#!/usr/bin/env node
/**
 * Capture a fixed-height region of the page (no fullPage) — useful to show
 * specific sections at higher visible detail.
 *
 * Usage: node scripts/snap-region.mjs [url] [label] [scrollY] [height]
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

async function snap(url, label, scrollY, height) {
  const num = nextNumber();
  const filename = label
    ? `screenshot-${num}-${label}.png`
    : `screenshot-${num}.png`;
  const filepath = path.join(SCREENSHOTS_DIR, filename);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 45000 });

  await page.evaluate(async (target) => {
    const total = Math.max(document.body.scrollHeight, target + window.innerHeight);
    const step = window.innerHeight * 0.6;
    for (let y = 0; y < total; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo({ top: target, behavior: "instant" });
  }, scrollY);

  await page.evaluate(() => {
    document
      .querySelectorAll(".reveal, .reveal-stagger")
      .forEach((el) => el.classList.add("is-visible"));
  });

  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: filepath, fullPage: false });
  await browser.close();
  console.log(`✓ Saved ${filepath}`);
}

const url = process.argv[2] || "http://localhost:3001";
const label = process.argv[3] || "region";
const scrollY = Number(process.argv[4] ?? 0);
const height = Number(process.argv[5] ?? 900);
snap(url, label, scrollY, height).catch((e) => {
  console.error(e.message);
  process.exit(1);
});
