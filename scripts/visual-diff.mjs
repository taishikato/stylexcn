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
const BUTTON_STATES = ["default", "hover", "focus-visible", "disabled"];
const INPUT_STATES = ["default", "focus-visible", "disabled", "invalid"];
const LABEL_STATES = ["default", "disabled"];
const TEXTAREA_STATES = ["default", "focus-visible", "disabled", "invalid"];
const CHECKBOX_STATES = [
  "default",
  "checked",
  "focus-visible",
  "disabled",
  "invalid",
];
const SWITCH_STATES = ["default", "checked", "focus-visible", "disabled"];
const RADIO_GROUP_STATES = [
  "default",
  "checked",
  "focus-visible",
  "disabled",
  "invalid",
];
const CARD_STATES = ["default", "with-action"];
const DIALOG_STATES = ["default", "no-close"];
const SELECT_STATES = [
  "default",
  "selected",
  "focus-visible",
  "disabled",
  "invalid",
  "sm",
  "open",
];
const DROPDOWN_MENU_STATES = ["closed", "open"];
const SHEET_STATES = ["default", "left", "top", "bottom"];
const TABS_STATES = ["default", "second", "disabled"];
const THEMES = ["light", "dark"];
/* Dialog overlay+content: sm is 40rem. 800px keeps sm:max-w-lg / text-left / footer row. */
const DIALOG_VIEWPORT = { width: 800, height: 600 };
/* Sheet overlay+panel: sm is 40rem. 800px keeps sm:max-w-sm on left/right. */
const SHEET_VIEWPORT = { width: 800, height: 600 };
/* Select popper: trigger near top-left so content stays on-screen and does not flip. */
const SELECT_OPEN_VIEWPORT = { width: 640, height: 560 };
/* Dropdown Menu: trigger near top-left so portaled content stays on-screen. */
const DROPDOWN_MENU_OPEN_VIEWPORT = { width: 640, height: 560 };
const CARD_VIEWPORT = { width: 400, height: 480 };
const DEFAULT_VIEWPORT = { width: 400, height: 200 };

function buttonCases() {
  const list = [];
  for (const variant of VARIANTS) {
    for (const size of SIZES) {
      list.push({
        component: "button",
        variant,
        size,
        state: "default",
        theme: "light",
      });
    }
  }
  for (const theme of THEMES) {
    for (const variant of VARIANTS) {
      for (const state of BUTTON_STATES) {
        if (theme === "light" && state === "default") {
          continue;
        }
        list.push({
          component: "button",
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

function inputCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of INPUT_STATES) {
      list.push({
        component: "input",
        state,
        theme,
      });
    }
  }
  return list;
}

function labelCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of LABEL_STATES) {
      list.push({
        component: "label",
        state,
        theme,
      });
    }
  }
  return list;
}

function textareaCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of TEXTAREA_STATES) {
      list.push({
        component: "textarea",
        state,
        theme,
      });
    }
  }
  return list;
}

function checkboxCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of CHECKBOX_STATES) {
      list.push({
        component: "checkbox",
        state,
        theme,
      });
    }
  }
  return list;
}

function switchCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of SWITCH_STATES) {
      list.push({
        component: "switch",
        state,
        theme,
      });
    }
  }
  return list;
}

function radioGroupCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of RADIO_GROUP_STATES) {
      list.push({
        component: "radio-group",
        state,
        theme,
      });
    }
  }
  return list;
}

function cardCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of CARD_STATES) {
      list.push({
        component: "card",
        state,
        theme,
      });
    }
  }
  return list;
}

function dialogCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of DIALOG_STATES) {
      list.push({
        component: "dialog",
        state,
        theme,
      });
    }
  }
  return list;
}

function selectCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of SELECT_STATES) {
      list.push({
        component: "select",
        state,
        theme,
      });
    }
  }
  return list;
}

function dropdownMenuCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of DROPDOWN_MENU_STATES) {
      list.push({
        component: "dropdown-menu",
        state,
        theme,
      });
    }
  }
  return list;
}

function sheetCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of SHEET_STATES) {
      list.push({
        component: "sheet",
        state,
        theme,
      });
    }
  }
  return list;
}

function tabsCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of TABS_STATES) {
      list.push({
        component: "tabs",
        state,
        theme,
      });
    }
  }
  return list;
}

function cases() {
  return [
    ...buttonCases(),
    ...inputCases(),
    ...labelCases(),
    ...textareaCases(),
    ...checkboxCases(),
    ...switchCases(),
    ...radioGroupCases(),
    ...cardCases(),
    ...dialogCases(),
    ...selectCases(),
    ...dropdownMenuCases(),
    ...sheetCases(),
    ...tabsCases(),
  ];
}

function slug(c) {
  if (c.component === "input") {
    return `input__${c.theme}__${c.state}`;
  }
  if (c.component === "label") {
    return `label__${c.theme}__${c.state}`;
  }
  if (c.component === "textarea") {
    return `textarea__${c.theme}__${c.state}`;
  }
  if (c.component === "checkbox") {
    return `checkbox__${c.theme}__${c.state}`;
  }
  if (c.component === "switch") {
    return `switch__${c.theme}__${c.state}`;
  }
  if (c.component === "radio-group") {
    return `radio-group__${c.theme}__${c.state}`;
  }
  if (c.component === "card") {
    return `card__${c.theme}__${c.state}`;
  }
  if (c.component === "dialog") {
    return `dialog__${c.theme}__${c.state}`;
  }
  if (c.component === "select") {
    return `select__${c.theme}__${c.state}`;
  }
  if (c.component === "dropdown-menu") {
    return `dropdown-menu__${c.theme}__${c.state}`;
  }
  if (c.component === "sheet") {
    return `sheet__${c.theme}__${c.state}`;
  }
  if (c.component === "tabs") {
    return `tabs__${c.theme}__${c.state}`;
  }
  return `${c.theme}__${c.variant}__${c.size}__${c.state}`;
}

function urlFor(kit, c) {
  const q = new URLSearchParams({
    kit,
    component: c.component ?? "button",
    state: c.state,
    theme: c.theme,
  });
  if (
    c.component !== "input" &&
    c.component !== "label" &&
    c.component !== "textarea" &&
    c.component !== "checkbox" &&
    c.component !== "switch" &&
    c.component !== "radio-group" &&
    c.component !== "card" &&
    c.component !== "dialog" &&
    c.component !== "select" &&
    c.component !== "dropdown-menu" &&
    c.component !== "sheet" &&
    c.component !== "tabs"
  ) {
    q.set("variant", c.variant);
    q.set("size", c.size);
  }
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

function controlLocator(page, c) {
  if (c.component === "input") {
    return page.locator('[data-slot="input"]');
  }
  if (c.component === "label") {
    return page.locator('[data-slot="label"]');
  }
  if (c.component === "textarea") {
    return page.locator('[data-slot="textarea"]');
  }
  if (c.component === "checkbox") {
    return page.locator('[data-slot="checkbox"]');
  }
  if (c.component === "switch") {
    return page.locator('[data-slot="switch"]');
  }
  if (c.component === "radio-group") {
    return page.locator('[data-slot="radio-group-item"]');
  }
  if (c.component === "card") {
    return page.locator('[data-slot="card"]');
  }
  if (c.component === "dialog") {
    return page.locator('[data-slot="dialog-content"][data-state="open"]');
  }
  if (c.component === "select") {
    return page.locator('[data-slot="select-trigger"]');
  }
  if (c.component === "dropdown-menu") {
    return page.locator('[data-slot="dropdown-menu-trigger"]');
  }
  if (c.component === "sheet") {
    return page.locator('[data-slot="sheet-content"][data-state="open"]');
  }
  if (c.component === "tabs") {
    return page.locator('[data-slot="tabs"]');
  }
  return page.getByRole("button");
}

async function prepareControl(page, c) {
  if (c.component === "dialog") {
    await page.locator('[data-slot="dialog-overlay"][data-state="open"]').waitFor();
    await page.locator('[data-slot="dialog-content"][data-state="open"]').waitFor();
    return;
  }
  if (c.component === "select" && c.state === "open") {
    await page.locator('[data-slot="select-trigger"]').waitFor();
    await page.locator('[data-slot="select-content"][data-state="open"]').waitFor();
    return;
  }
  if (c.component === "dropdown-menu" && c.state === "open") {
    await page.locator('[data-slot="dropdown-menu-trigger"]').waitFor();
    await page
      .locator('[data-slot="dropdown-menu-content"][data-state="open"]')
      .waitFor();
    return;
  }
  if (c.component === "sheet") {
    await page.locator('[data-slot="sheet-overlay"][data-state="open"]').waitFor();
    await page.locator('[data-slot="sheet-content"][data-state="open"]').waitFor();
    return;
  }
  const locator = controlLocator(page, c);
  await locator.waitFor();
  if (c.state === "hover") {
    await locator.hover();
  } else if (c.state === "focus-visible") {
    await page.locator("body").click({ position: { x: 1, y: 1 } });
    await page.keyboard.press("Tab");
  }
}

async function screenshotControl(page, c, dest) {
  if (c.component === "dialog") {
    await page.locator('[data-slot="dialog-overlay"][data-state="open"]').waitFor();
    await page.locator('[data-slot="dialog-content"][data-state="open"]').waitFor();
    await page.screenshot({ path: dest, animations: "disabled" });
    return;
  }
  if (c.component === "select" && c.state === "open") {
    await page.locator('[data-slot="select-trigger"]').waitFor();
    await page.locator('[data-slot="select-content"][data-state="open"]').waitFor();
    await page.screenshot({ path: dest, animations: "disabled" });
    return;
  }
  if (c.component === "dropdown-menu" && c.state === "open") {
    await page.locator('[data-slot="dropdown-menu-trigger"]').waitFor();
    await page
      .locator('[data-slot="dropdown-menu-content"][data-state="open"]')
      .waitFor();
    await page.screenshot({ path: dest, animations: "disabled" });
    return;
  }
  if (c.component === "sheet") {
    await page.locator('[data-slot="sheet-overlay"][data-state="open"]').waitFor();
    await page.locator('[data-slot="sheet-content"][data-state="open"]').waitFor();
    await page.screenshot({ path: dest, animations: "disabled" });
    return;
  }
  const locator = controlLocator(page, c);
  const box = await locator.boundingBox();
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

    await page.setViewportSize(
      c.component === "dialog"
        ? DIALOG_VIEWPORT
        : c.component === "sheet"
          ? SHEET_VIEWPORT
          : c.component === "select" && c.state === "open"
            ? SELECT_OPEN_VIEWPORT
            : c.component === "dropdown-menu" && c.state === "open"
              ? DROPDOWN_MENU_OPEN_VIEWPORT
              : c.component === "card"
                ? CARD_VIEWPORT
                : DEFAULT_VIEWPORT,
    );

    await page.goto(urlFor("shadcn", c), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await prepareControl(page, c);
    await screenshotControl(page, c, shadcnPath);

    await page.goto(urlFor("stylex", c), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await prepareControl(page, c);
    await screenshotControl(page, c, stylexPath);

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
    "# Visual diff (Button + Input + Label + Textarea + Checkbox + Switch + Radio Group + Card + Dialog + Select + Dropdown Menu + Sheet + Tabs)",
    "",
    `- Passed: ${report.passed}/${report.total}`,
    `- Failed: ${report.failed}`,
    `- pixelmatch threshold: 0 (any nonzero pixel is a fail)`,
    "",
    "## Button",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter(
        (r) =>
          r.component !== "input" &&
          r.component !== "label" &&
          r.component !== "textarea" &&
          r.component !== "checkbox" &&
          r.component !== "switch" &&
          r.component !== "radio-group" &&
          r.component !== "card" &&
          r.component !== "dialog" &&
          r.component !== "select" &&
          r.component !== "dropdown-menu" &&
          r.component !== "sheet" &&
          r.component !== "tabs",
      )
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Input",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "input")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Label",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "label")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Textarea",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "textarea")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Checkbox",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "checkbox")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Switch",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "switch")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Radio Group",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "radio-group")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Card",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "card")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Dialog",
    "",
    "- Viewport: 800×600 (Tailwind `sm` / 40rem). Overlay + content are portaled to `document.body`.",
    "- Screenshots are full-viewport (overlay + panel). `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "dialog")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Select",
    "",
    "- Closed cases crop the trigger (16px pad). Open cases are full-viewport (640×560) so trigger + popper content are captured together.",
    "- Open uses controlled `open={true}` and `position=\"popper\"` on both kits. `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "select")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Dropdown Menu",
    "",
    "- Closed cases crop the trigger (16px pad). Open cases are full-viewport (640×560) so trigger + portaled content are captured together.",
    "- Open uses controlled `open={true}` and `side=\"bottom\"` `align=\"start\"` on both kits. `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "dropdown-menu")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Sheet",
    "",
    "- Viewport: 800×600 (Tailwind `sm` / 40rem). Overlay + content are portaled to `document.body`.",
    "- `default` is official `side=\"right\"`. `left` / `top` / `bottom` cover the other official sides.",
    "- Screenshots are full-viewport (overlay + panel). `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "sheet")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Tabs",
    "",
    "- Crops `[data-slot=\"tabs\"]` (list + content) with 16px pad. Labels/content are identical on both kits.",
    "- States: `default` (first selected), `second` (second selected), `disabled` (second trigger disabled).",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "tabs")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
  ].join("\n");
  await writeFile(path.join(outDir, "report.md"), md);

  // Open Dialog can hang Playwright close(). Tear down the preview first and
  // force-exit so a passing run does not stall.
  preview.kill("SIGTERM");
  try {
    const { execSync } = await import("node:child_process");
    execSync("fuser -k 4173/tcp", { stdio: "ignore" });
  } catch {
    /* already gone */
  }
  await Promise.race([
    browser.close(),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
  if (failed > 0) {
    console.error(`Visual diff failed: ${failed} case(s)`);
    process.exit(1);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
