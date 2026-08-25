import { chromium } from "playwright";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "visual", "results");
const port = 4173;
const base = `http://127.0.0.1:${port}`;

const VARIANTS = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
];
const SIZES = ["default", "sm", "lg", "icon"];
const STATES = ["default", "hover", "focus-visible", "disabled"];
const THEMES = ["light", "dark"];

function cases() {
  const list = [];
  for (const variant of VARIANTS) {
    for (const size of SIZES) {
      list.push({
        variant,
        size,
        state: "default",
        theme: "light",
      });
    }
  }
  for (const theme of THEMES) {
    for (const variant of VARIANTS) {
      for (const state of STATES) {
        if (theme === "light" && state === "default") {
          continue;
        }
        list.push({
          variant,
          size: "default",
          state,
          theme,
        });
      }
    }
  }
  return list;
}

function slug({ variant, size, state, theme }) {
  return `${theme}__${variant}__${size}__${state}`;
}

function urlFor(kit, c) {
  const q = new URLSearchParams({
    kit,
    variant: c.variant,
    size: c.size,
    state: c.state,
    theme: c.theme,
  });
  return `${base}/?${q}`;
}

function waitForServer() {
  return new Promise((resolve, reject) => {
    const t0 = Date.now();
    const tick = async () => {
      try {
        const res = await fetch(base);
        if (res.ok) {
          resolve();
          return;
        }
      } catch {
        /* not up yet */
      }
      if (Date.now() - t0 > 60_000) {
        reject(new Error("preview server did not start"));
        return;
      }
      setTimeout(tick, 200);
    };
    tick();
  });
}

async function startPreview() {
  try {
    const { execSync } = await import("node:child_process");
    execSync("fuser -k 4173/tcp", { stdio: "ignore" });
  } catch {
    /* port was free */
  }
  const child = spawn("npm", ["run", "preview", "--", "--strictPort"], {
    cwd: root,
    stdio: "pipe",
    env: { ...process.env, BROWSER: "none" },
  });
  child.stdout.on("data", (d) => process.stdout.write(d));
  child.stderr.on("data", (d) => process.stderr.write(d));
  await waitForServer();
  return child;
}

async function prepareButton(page, state) {
  const button = page.getByRole("button");
  await button.waitFor();
  if (state === "hover") {
    await button.hover();
  } else if (state === "focus-visible") {
    await page.locator("body").click({ position: { x: 1, y: 1 } });
    await page.keyboard.press("Tab");
  }
}

async function screenshotButton(page, dest) {
  const button = page.getByRole("button");
  const box = await button.boundingBox();
  if (!box) throw new Error("no bounding box");
  const pad = 16;
  const clip = {
    x: Math.max(0, box.x - pad),
    y: Math.max(0, box.y - pad),
    width: box.width + pad * 2,
    height: box.height + pad * 2,
  };
  await page.screenshot({ path: dest, clip, animations: "disabled" });
}

function diffPng(aBuf, bBuf, dest) {
  const imgA = PNG.sync.read(aBuf);
  const imgB = PNG.sync.read(bBuf);
  if (imgA.width !== imgB.width || imgA.height !== imgB.height) {
    const diff = new PNG({
      width: Math.max(imgA.width, imgB.width),
      height: Math.max(imgA.height, imgB.height),
    });
    const pixels = diff.width * diff.height;
    return { pixels, mismatched: pixels, width: diff.width, height: diff.height };
  }
  const { width, height } = imgA;
  const diff = new PNG({ width, height });
  const mismatched = pixelmatch(imgA.data, imgB.data, diff.data, width, height, {
    threshold: 0,
  });
  return { png: PNG.sync.write(diff), mismatched, pixels: width * height, width, height };
}

async function main() {
  if (!existsSync(path.join(root, "dist"))) {
    console.error("Run `npm run build` first.");
    process.exit(1);
  }
  await mkdir(path.join(outDir, "shadcn"), { recursive: true });
  await mkdir(path.join(outDir, "stylex"), { recursive: true });
  await mkdir(path.join(outDir, "diff"), { recursive: true });

  const preview = await startPreview();
  const browser = await chromium.launch({
    args: ["--font-render-hinting=none", "--disable-lcd-text"],
  });
  const page = await browser.newPage({
    viewport: { width: 400, height: 200 },
    deviceScaleFactor: 1,
  });
  await page.addInitScript(() => {
    document.documentElement.style.setProperty("transition", "none");
  });

  const rows = [];
  let failed = 0;
  for (const c of cases()) {
    const name = slug(c);
    const shadcnPath = path.join(outDir, "shadcn", `${name}.png`);
    const stylexPath = path.join(outDir, "stylex", `${name}.png`);
    const diffPath = path.join(outDir, "diff", `${name}.png`);

    await page.goto(urlFor("shadcn", c), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await prepareButton(page, c.state);
    await screenshotButton(page, shadcnPath);

    await page.goto(urlFor("stylex", c), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await prepareButton(page, c.state);
    await screenshotButton(page, stylexPath);

    const a = await readFile(shadcnPath);
    const b = await readFile(stylexPath);
    const result = diffPng(a, b, diffPath);
    if (result.png) await writeFile(diffPath, result.png);
    const pass = result.mismatched === 0 && a.length > 0;
    if (!pass) failed += 1;
    rows.push({
      name,
      ...c,
      width: result.width,
      height: result.height,
      mismatched: result.mismatched,
      pixels: result.pixels,
      pass,
      shadcn: path.relative(root, shadcnPath),
      stylex: path.relative(root, stylexPath),
      diff: result.png ? path.relative(root, diffPath) : null,
    });
    console.log(
      `${pass ? "PASS" : "FAIL"} ${name} mismatched=${result.mismatched}/${result.pixels}`,
    );
  }

  const report = {
    generatedAt: new Date().toISOString(),
    total: rows.length,
    failed,
    passed: rows.length - failed,
    threshold: 0,
    cases: rows,
  };
  await writeFile(
    path.join(outDir, "report.json"),
    JSON.stringify(report, null, 2),
  );
  const md = [
    "# Button visual diff",
    "",
    `- Passed: ${report.passed}/${report.total}`,
    `- Failed: ${report.failed}`,
    `- pixelmatch threshold: 0 (any nonzero pixel is a fail)`,
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows.map(
      (r) =>
        `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
    ),
    "",
  ].join("\n");
  await writeFile(path.join(outDir, "report.md"), md);

  await browser.close();
  preview.kill("SIGTERM");
  try {
    const { execSync } = await import("node:child_process");
    execSync("fuser -k 4173/tcp", { stdio: "ignore" });
  } catch {
    /* already gone */
  }
  if (failed > 0) {
    console.error(`Visual diff failed: ${failed} case(s)`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
