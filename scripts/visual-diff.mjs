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
const ALERT_DIALOG_STATES = ["default"];
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
const POPOVER_STATES = ["default"];
const HOVER_CARD_STATES = ["default"];
const TOOLTIP_STATES = ["default"];
const BADGE_VARIANTS = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
];
const SEPARATOR_STATES = ["horizontal", "vertical"];
const SKELETON_STATES = ["bar", "circle"];
const AVATAR_STATES = ["default", "sm", "lg", "badge", "group"];
const PROGRESS_STATES = ["empty", "halfway", "full"];
const ACCORDION_STATES = ["open", "second", "closed"];
const SLIDER_STATES = ["default", "disabled", "focus-visible", "range"];
const TOGGLE_STATES = [
  "default",
  "on",
  "outline",
  "sm",
  "lg",
  "disabled",
  "focus-visible",
];
const BREADCRUMB_STATES = ["default", "ellipsis"];
const COLLAPSIBLE_STATES = ["open", "closed"];
const SCROLL_AREA_STATES = ["vertical", "horizontal"];
const THEMES = ["light", "dark"];
/* Dialog / Alert Dialog overlay+content: sm is 40rem. 800px keeps sm:max-w-lg. */
const DIALOG_VIEWPORT = { width: 800, height: 600 };
/* Sheet overlay+panel: sm is 40rem. 800px keeps sm:max-w-sm on left/right. */
const SHEET_VIEWPORT = { width: 800, height: 600 };
/* Select popper: trigger near top-left so content stays on-screen and does not flip. */
const SELECT_OPEN_VIEWPORT = { width: 640, height: 560 };
/* Dropdown Menu: trigger near top-left so portaled content stays on-screen. */
const DROPDOWN_MENU_OPEN_VIEWPORT = { width: 640, height: 560 };
/* Popover: trigger near top, horizontally centered so w-72 content (align=center)
   stays on-screen and the popper does not flip. */
const POPOVER_VIEWPORT = { width: 640, height: 480 };
/* Hover Card: same 640×480 as Popover; pin trigger so w-64 content stays on-screen. */
const HOVER_CARD_VIEWPORT = { width: 640, height: 480 };
/* Tooltip: trigger near bottom; pin so side=top does not flip. */
const TOOLTIP_VIEWPORT = { width: 480, height: 320 };
const CARD_VIEWPORT = { width: 400, height: 480 };
const ACCORDION_VIEWPORT = { width: 400, height: 480 };
/* 20rem well + open copy + 16px crop pad must stay inside the viewport. */
const COLLAPSIBLE_VIEWPORT = { width: 400, height: 480 };
/* 24rem well + 16px crop pad on each side must stay inside the viewport. */
const BREADCRUMB_VIEWPORT = { width: 480, height: 200 };
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

function alertDialogCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of ALERT_DIALOG_STATES) {
      list.push({
        component: "alert-dialog",
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

function popoverCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of POPOVER_STATES) {
      list.push({
        component: "popover",
        state,
        theme,
      });
    }
  }
  return list;
}

function hoverCardCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of HOVER_CARD_STATES) {
      list.push({
        component: "hover-card",
        state,
        theme,
      });
    }
  }
  return list;
}

function tooltipCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of TOOLTIP_STATES) {
      list.push({
        component: "tooltip",
        state,
        theme,
      });
    }
  }
  return list;
}

function badgeCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const variant of BADGE_VARIANTS) {
      list.push({
        component: "badge",
        variant,
        state: "default",
        theme,
      });
    }
    list.push({
      component: "badge",
      variant: "default",
      state: "focus-visible",
      theme,
    });
  }
  return list;
}

function separatorCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of SEPARATOR_STATES) {
      list.push({
        component: "separator",
        state,
        theme,
      });
    }
  }
  return list;
}

function skeletonCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of SKELETON_STATES) {
      list.push({
        component: "skeleton",
        state,
        theme,
      });
    }
  }
  return list;
}

function avatarCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of AVATAR_STATES) {
      list.push({
        component: "avatar",
        state,
        theme,
      });
    }
  }
  return list;
}

function progressCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of PROGRESS_STATES) {
      list.push({
        component: "progress",
        state,
        theme,
      });
    }
  }
  return list;
}

function accordionCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of ACCORDION_STATES) {
      list.push({
        component: "accordion",
        state,
        theme,
      });
    }
  }
  return list;
}

function sliderCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of SLIDER_STATES) {
      list.push({
        component: "slider",
        state,
        theme,
      });
    }
  }
  return list;
}

function toggleCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of TOGGLE_STATES) {
      list.push({
        component: "toggle",
        state,
        theme,
      });
    }
  }
  return list;
}

function breadcrumbCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of BREADCRUMB_STATES) {
      list.push({
        component: "breadcrumb",
        state,
        theme,
      });
    }
  }
  return list;
}

function collapsibleCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of COLLAPSIBLE_STATES) {
      list.push({
        component: "collapsible",
        state,
        theme,
      });
    }
  }
  return list;
}

function scrollAreaCases() {
  const list = [];
  for (const theme of THEMES) {
    for (const state of SCROLL_AREA_STATES) {
      list.push({
        component: "scroll-area",
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
    ...alertDialogCases(),
    ...selectCases(),
    ...dropdownMenuCases(),
    ...sheetCases(),
    ...tabsCases(),
    ...popoverCases(),
    ...hoverCardCases(),
    ...tooltipCases(),
    ...badgeCases(),
    ...separatorCases(),
    ...skeletonCases(),
    ...avatarCases(),
    ...progressCases(),
    ...accordionCases(),
    ...sliderCases(),
    ...toggleCases(),
    ...breadcrumbCases(),
    ...collapsibleCases(),
    ...scrollAreaCases(),
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
  if (c.component === "alert-dialog") {
    return `alert-dialog__${c.theme}__${c.state}`;
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
  if (c.component === "popover") {
    return `popover__${c.theme}__${c.state}`;
  }
  if (c.component === "hover-card") {
    return `hover-card__${c.theme}__${c.state}`;
  }
  if (c.component === "tooltip") {
    return `tooltip__${c.theme}__${c.state}`;
  }
  if (c.component === "badge") {
    const key = c.state === "focus-visible" ? "focus-visible" : c.variant;
    return `badge__${c.theme}__${key}`;
  }
  if (c.component === "separator") {
    return `separator__${c.theme}__${c.state}`;
  }
  if (c.component === "skeleton") {
    return `skeleton__${c.theme}__${c.state}`;
  }
  if (c.component === "avatar") {
    return `avatar__${c.theme}__${c.state}`;
  }
  if (c.component === "progress") {
    return `progress__${c.theme}__${c.state}`;
  }
  if (c.component === "accordion") {
    return `accordion__${c.theme}__${c.state}`;
  }
  if (c.component === "slider") {
    return `slider__${c.theme}__${c.state}`;
  }
  if (c.component === "toggle") {
    return `toggle__${c.theme}__${c.state}`;
  }
  if (c.component === "breadcrumb") {
    return `breadcrumb__${c.theme}__${c.state}`;
  }
  if (c.component === "collapsible") {
    return `collapsible__${c.theme}__${c.state}`;
  }
  if (c.component === "scroll-area") {
    return `scroll-area__${c.theme}__${c.state}`;
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
  if (c.component === "badge") {
    q.set("variant", c.variant);
  } else if (
    c.component !== "input" &&
    c.component !== "label" &&
    c.component !== "textarea" &&
    c.component !== "checkbox" &&
    c.component !== "switch" &&
    c.component !== "radio-group" &&
    c.component !== "card" &&
    c.component !== "dialog" &&
    c.component !== "alert-dialog" &&
    c.component !== "select" &&
    c.component !== "dropdown-menu" &&
    c.component !== "sheet" &&
    c.component !== "tabs" &&
    c.component !== "popover" &&
    c.component !== "hover-card" &&
    c.component !== "tooltip" &&
    c.component !== "badge" &&
    c.component !== "separator" &&
    c.component !== "skeleton" &&
    c.component !== "avatar" &&
    c.component !== "progress" &&
    c.component !== "accordion" &&
    c.component !== "slider" &&
    c.component !== "toggle" &&
    c.component !== "breadcrumb" &&
    c.component !== "collapsible" &&
    c.component !== "scroll-area"
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
  if (c.component === "alert-dialog") {
    return page.locator('[data-slot="alert-dialog-content"][data-state="open"]');
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
  if (c.component === "popover") {
    return page.locator('[data-slot="popover-trigger"]');
  }
  if (c.component === "hover-card") {
    return page.locator('[data-slot="hover-card-trigger"]');
  }
  if (c.component === "tooltip") {
    return page.locator('[data-slot="tooltip-content"]');
  }
  if (c.component === "badge") {
    return page.locator('[data-slot="badge"]');
  }
  if (c.component === "separator") {
    if (c.state === "vertical") {
      return page.locator("[data-separator-well]");
    }
    return page.locator('[data-slot="separator"]');
  }
  if (c.component === "skeleton") {
    return page.locator('[data-slot="skeleton"]');
  }
  if (c.component === "avatar") {
    if (c.state === "group") {
      return page.locator('[data-slot="avatar-group"]');
    }
    return page.locator('[data-slot="avatar"]');
  }
  if (c.component === "progress") {
    return page.locator('[data-slot="progress"]');
  }
  if (c.component === "accordion") {
    return page.locator('[data-slot="accordion"]');
  }
  if (c.component === "slider") {
    return page.locator('[data-slot="slider"]');
  }
  if (c.component === "toggle") {
    return page.locator('[data-slot="toggle"]');
  }
  if (c.component === "breadcrumb") {
    return page.locator('[data-slot="breadcrumb"]');
  }
  if (c.component === "collapsible") {
    return page.locator('[data-slot="collapsible"]');
  }
  if (c.component === "scroll-area") {
    return page.locator('[data-slot="scroll-area"]');
  }
  return page.getByRole("button");
}

async function prepareControl(page, c) {
  if (c.component === "dialog") {
    await page.locator('[data-slot="dialog-overlay"][data-state="open"]').waitFor();
    await page.locator('[data-slot="dialog-content"][data-state="open"]').waitFor();
    return;
  }
  if (c.component === "alert-dialog") {
    await page.locator('[data-slot="alert-dialog-overlay"][data-state="open"]').waitFor();
    await page.locator('[data-slot="alert-dialog-content"][data-state="open"]').waitFor();
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
  if (c.component === "popover") {
    await page.locator('[data-slot="popover-trigger"]').waitFor();
    await page.locator('[data-slot="popover-content"][data-state="open"]').waitFor();
    return;
  }
  if (c.component === "hover-card") {
    await page.locator('[data-slot="hover-card-trigger"]').waitFor();
    await page.locator('[data-slot="hover-card-content"][data-state="open"]').waitFor();
    return;
  }
  if (c.component === "tooltip") {
    await page.locator('[data-slot="tooltip-trigger"]').waitFor();
    /* Controlled open with delay 0 uses data-state="instant-open", not "open". */
    await page.locator('[data-slot="tooltip-content"]').waitFor();
    return;
  }
  if (c.component === "accordion") {
    await page.locator('[data-slot="accordion"]').waitFor();
    if (c.state === "open" || c.state === "second") {
      await page
        .locator('[data-slot="accordion-content"][data-state="open"]')
        .waitFor();
    }
    return;
  }
  if (c.component === "collapsible") {
    await page.locator('[data-slot="collapsible"]').waitFor();
    if (c.state === "open") {
      await page
        .locator('[data-slot="collapsible-content"][data-state="open"]')
        .waitFor();
    }
    return;
  }
  if (c.component === "scroll-area") {
    await page.locator('[data-slot="scroll-area"]').waitFor();
    await page.locator('[data-slot="scroll-area-thumb"]').waitFor();
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
  if (c.component === "alert-dialog") {
    await page.locator('[data-slot="alert-dialog-overlay"][data-state="open"]').waitFor();
    await page.locator('[data-slot="alert-dialog-content"][data-state="open"]').waitFor();
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
  if (c.component === "popover") {
    await page.locator('[data-slot="popover-trigger"]').waitFor();
    await page.locator('[data-slot="popover-content"][data-state="open"]').waitFor();
    await page.screenshot({ path: dest, animations: "disabled" });
    return;
  }
  if (c.component === "hover-card") {
    await page.locator('[data-slot="hover-card-trigger"]').waitFor();
    await page.locator('[data-slot="hover-card-content"][data-state="open"]').waitFor();
    await page.screenshot({ path: dest, animations: "disabled" });
    return;
  }
  if (c.component === "tooltip") {
    await page.locator('[data-slot="tooltip-trigger"]').waitFor();
    await page.locator('[data-slot="tooltip-content"]').waitFor();
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
      c.component === "dialog" || c.component === "alert-dialog"
        ? DIALOG_VIEWPORT
        : c.component === "sheet"
          ? SHEET_VIEWPORT
          : c.component === "select" && c.state === "open"
            ? SELECT_OPEN_VIEWPORT
            : c.component === "dropdown-menu" && c.state === "open"
              ? DROPDOWN_MENU_OPEN_VIEWPORT
              : c.component === "popover"
                ? POPOVER_VIEWPORT
                : c.component === "hover-card"
                  ? HOVER_CARD_VIEWPORT
                : c.component === "tooltip"
                  ? TOOLTIP_VIEWPORT
                  : c.component === "card"
                  ? CARD_VIEWPORT
                  : c.component === "accordion"
                    ? ACCORDION_VIEWPORT
                  : c.component === "collapsible"
                    ? COLLAPSIBLE_VIEWPORT
                  : c.component === "breadcrumb"
                    ? BREADCRUMB_VIEWPORT
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
    "# Visual diff (Button + Input + Label + Textarea + Checkbox + Switch + Radio Group + Card + Dialog + Alert Dialog + Select + Dropdown Menu + Sheet + Tabs + Popover + Hover Card + Tooltip + Badge + Separator + Skeleton + Avatar + Progress + Accordion + Slider + Toggle + Breadcrumb + Collapsible + Scroll Area)",
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
          r.component !== "alert-dialog" &&
          r.component !== "select" &&
          r.component !== "dropdown-menu" &&
          r.component !== "sheet" &&
          r.component !== "tabs" &&
          r.component !== "popover" &&
          r.component !== "hover-card" &&
          r.component !== "tooltip" &&
          r.component !== "badge" &&
          r.component !== "separator" &&
          r.component !== "skeleton" &&
          r.component !== "avatar" &&
          r.component !== "progress" &&
          r.component !== "accordion" &&
          r.component !== "slider" &&
          r.component !== "toggle" &&
          r.component !== "breadcrumb" &&
          r.component !== "collapsible" &&
          r.component !== "scroll-area",
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
    "## Alert Dialog",
    "",
    "- Viewport: 800×600 (Tailwind `sm` / 40rem). Overlay + content are portaled to `document.body`.",
    "- Forced `open={true}`. Screenshots are full-viewport (overlay + panel). `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "alert-dialog")
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
    "## Popover",
    "",
    "- Viewport: 640×480. Trigger is pinned near the top and centered so `w-72` content (`align=\"center\"`, `side=\"bottom\"`) stays on-screen and the popper does not flip.",
    "- Controlled `open={true}` on both kits. Screenshots are full-viewport (trigger + content). `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "popover")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Hover Card",
    "",
    "- Viewport: 640×480. Trigger is pinned near the top and centered so `w-64` content (`align=\"center\"`, `side=\"bottom\"`, `sideOffset={4}`) stays on-screen and the popper does not flip.",
    "- Controlled `open={true}` on both kits (do not rely on hover). Screenshots are full-viewport (trigger + content). `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "hover-card")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Tooltip",
    "",
    "- Viewport: 480×320. Trigger is pinned near the bottom so `side=\"top\"` does not flip.",
    "- Forced open (`open={true}`) with `delayDuration={0}` on both kits. Full-viewport screenshot (trigger + content + arrow). `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "tooltip")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Badge",
    "",
    "- Official New York variants include ghost and link. Hover fills apply only to `[a&]` anchors; default cases are `<span>`.",
    "- `focus-visible` uses the default variant with `tabIndex={0}` on both kits (span is not tabbable otherwise). Official has no disabled utilities.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "badge")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Separator",
    "",
    "- Horizontal crops `[data-slot=\"separator\"]` with 16px pad inside a 16rem-wide parent (`w-full`).",
    "- Vertical uses a 3rem×6rem parent so `h-full` has a defined height; crops that parent with 16px pad. Same parent on both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "separator")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Skeleton",
    "",
    "- Official has no built-in size; both kits fill an identical parent (`bar` 250×16, `circle` 40×40).",
    "- Circle uses official `rounded-full` vs StyleX `radius=\"full\"`. `animate-pulse` stays on the official baseline; Playwright `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "skeleton")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Avatar",
    "",
    "- Crops `[data-slot=\"avatar\"]` (or `[data-slot=\"avatar-group\"]` for `group`) with 16px pad. Fallback initials only (no network images).",
    "- States: `default` / `sm` / `lg` fallbacks, `badge` (empty AvatarBadge on default), `group` (two fallbacks + count).",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "avatar")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "",
    "## Progress",
    "",
    "- Both kits use an identical 16rem-wide parent so `w-full` matches. Crops `[data-slot=\"progress\"]` with 16px pad.",
    "- States: `empty` (value 0), `halfway` (value 60), `full` (value 100), light and dark.",
    "- Official Indicator has `transition-all`; Playwright `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "progress")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Accordion",
    "",
    "- Crops `[data-slot=\"accordion\"]` with 16px pad inside a 20rem-wide parent. Two items, identical copy on both kits.",
    "- `type=\"single\"` `collapsible`. Controlled `value` / `onValueChange`: `open` (first), `second` (second), `closed` (empty). `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "accordion")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Slider",
    "",
    "- Crops `[data-slot=\"slider\"]` with 16px pad (covers the 4px focus ring). Identical 16rem-wide parent on both kits so `w-full` matches.",
    "- Controlled `value` on both kits (`[50]` single thumb; `range` is `[25, 75]`). Do not rely on the official `[min, max]` fallback.",
    "- States: `default` / `disabled` / `focus-visible` (Tab onto the thumb) / `range`, each × light/dark. `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "slider")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Toggle",
    "",
    "- Crops `[data-slot=\"toggle\"]` with 16px pad (covers the 3px focus ring).",
    "- Identical copy (`Italic`) on both kits. `on` uses controlled `pressed={true}`. `outline` / `sm` / `lg` are variant and size, not extra copy.",
    "- States: `default` / `on` / `outline` / `sm` / `lg` / `disabled` / `focus-visible` (Tab onto the control), each × light/dark. `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "toggle")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Breadcrumb",
    "",
    "- Crops `[data-slot=\"breadcrumb\"]` with 16px pad inside a 24rem-wide parent so `flex-wrap` does not split the trail differently on the two kits.",
    "- Identical copy: `default` is Home / Components / Breadcrumb (last is BreadcrumbPage); `ellipsis` inserts BreadcrumbEllipsis between Home and Components.",
    "- Viewport: 480×200 so the 24rem well plus pad stays on-screen. `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "breadcrumb")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Collapsible",
    "",
    "- Crops `[data-slot=\"collapsible\"]` with 16px pad inside an identical 20rem-wide parent on both kits.",
    "- Identical demo: StyleX/official Button (`variant=\"outline\"`) as the trigger (`asChild`) with copy `Can I use this?` plus the same body when open.",
    "- Controlled `open` / `onOpenChange`: `open` is `open={true}`, `closed` is `open={false}`. Playwright `animations: \"disabled\"`.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "collapsible")
      .map(
        (r) =>
          `| \`${r.name}\` | ${r.pass ? "PASS" : "FAIL"} | ${r.mismatched}/${r.pixels} |`,
      ),
    "",
    "## Scroll Area",
    "",
    "- Crops `[data-slot=\"scroll-area\"]` with 16px pad. Identical overflow content and identical fixed boxes on both kits so thumb position matches.",
    "- `vertical`: 12rem × 8rem box with the same 20 tags. `horizontal`: 16rem × 6rem box with the same 20-block strip plus `ScrollBar orientation=\"horizontal\"`.",
    "- Forced `type=\"always\"` so the thumb is visible. Official Root gets `size-full`; StyleX fills the parent. `animations: \"disabled\"` for both kits.",
    "",
    "| Case | Result | Mismatched pixels |",
    "| --- | --- | ---: |",
    ...rows
      .filter((r) => r.component === "scroll-area")
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
