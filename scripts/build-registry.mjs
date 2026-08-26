#!/usr/bin/env node
/**
 * Generates the shadcn registry from kit source.
 *
 * Reads `src/tokens.stylex.ts` and `src/components/*.tsx`, rewrites imports
 * for consumer apps, then writes:
 *   - rewritten sources under `registry/`
 *   - catalog `registry.json`
 *   - item JSON under `apps/docs/public/r/`
 *
 * Do not hand-edit those outputs; they drift. Change kit source and re-run.
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COMPONENTS_DIR = path.join(ROOT, "src/components");
const TOKENS_SRC = path.join(ROOT, "src/tokens.stylex.ts");
const CATALOG_SRC = path.join(ROOT, "apps/docs/src/catalog.ts");
const REGISTRY_DIR = path.join(ROOT, "registry");
const REGISTRY_LIB = path.join(REGISTRY_DIR, "lib");
const REGISTRY_UI = path.join(REGISTRY_DIR, "ui");
const CATALOG_OUT = path.join(ROOT, "registry.json");
const PUBLIC_R = path.join(ROOT, "apps/docs/public/r");

const HOMEPAGE = "https://stylexcn.vercel.app";
const REGISTRY_ORIGIN = (process.env.REGISTRY_ORIGIN ?? HOMEPAGE).replace(
  /\/$/,
  "",
);
const SCHEMA_REGISTRY = "https://ui.shadcn.com/schema/registry.json";
const SCHEMA_ITEM = "https://ui.shadcn.com/schema/registry-item.json";

const SKIP_COMPONENTS = new Set();

/** Extra registry items the file does not import but consumers need. */
const EXTRA_REGISTRY_DEPS = {
  "button-group": ["button"],
};

const EXTRA_META = {
  command: {
    title: "Command",
    description:
      "Command menu for search and quick actions. cmdk plus Dialog.",
  },
  "navigation-menu": {
    title: "Navigation Menu",
    description:
      "A collection of links for site navigation. Open a trigger to show the viewport.",
  },
  calendar: {
    title: "Calendar",
    description:
      "A monthly date grid. Pick a day or a range. Month is pinned so the preview does not drift.",
  },
  drawer: {
    title: "Drawer",
    description:
      "A panel that slides in from an edge of the screen. Built on vaul.",
  },
  field: {
    title: "Field",
    description:
      "Compose labels, controls, descriptions, and errors into a form field.",
  },
  "input-group": {
    title: "Input Group",
    description:
      "Groups an input or textarea with addons, buttons, and text.",
  },
  "input-otp": {
    title: "Input OTP",
    description:
      "One-time password slots. Type into the group, including a separator.",
  },
  item: {
    title: "Item",
    description:
      "A row of media, content, and actions with outline and muted variants.",
  },
  combobox: {
    title: "Combobox",
    description: "Autocomplete input with a list of suggestions.",
  },
  carousel: {
    title: "Carousel",
    description:
      "A carousel with motion and swipe. Horizontal by default; Previous and Next. Slide is pinned so the preview does not drift.",
  },
  chart: {
    title: "Chart",
    description:
      "Themed Recharts charts with tooltip and legend. Data is pinned and animation is off so the preview does not drift.",
  },
  sidebar: {
    title: "Sidebar",
    description:
      "A collapsible sidebar with menu groups. Open and collapsed states are pinned so the preview does not drift.",
  },
  sonner: {
    title: "Sonner",
    description: "A toast. Built on sonner.",
  },
};

const SKIP_NPM = new Set(["react"]);

const TOKENS_DOCS = [
  "This kit uses StyleX, not Tailwind utilities.",
  "The consumer app must compile StyleX (`@stylexjs/stylex` plus a bundler plugin such as `@stylexjs/unplugin` or `@stylexjs/babel-plugin`).",
  "Initializing Tailwind is not enough.",
].join(" ");

function titleFromName(name) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function parseCatalogDescriptions(source) {
  const descriptions = new Map();
  const re =
    /slug:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?description:\s*"((?:\\.|[^"\\])*)"/g;
  for (const match of source.matchAll(re)) {
    descriptions.set(match[1], {
      title: match[2],
      description: match[3].replaceAll('\\"', '"'),
    });
  }
  return descriptions;
}

function rewriteConsumerImports(source) {
  return source
    .replaceAll(
      /from ["']\.\.\/tokens\.stylex["']/g,
      'from "@/lib/tokens.stylex"',
    )
    .replaceAll(
      /from ["']\.\/([a-z0-9-]+)["']/g,
      'from "@/components/ui/$1"',
    );
}

function collectImportSpecifiers(source) {
  const specs = [];
  const re = /from\s+["']([^"']+)["']/g;
  for (const match of source.matchAll(re)) {
    specs.push(match[1]);
  }
  return specs;
}

function npmPackageName(spec) {
  if (spec.startsWith(".") || spec.startsWith("@/") || spec.startsWith("@ui/")) {
    return null;
  }
  if (spec.startsWith("@base-ui/react")) {
    return "@base-ui/react";
  }
  if (spec.startsWith("@")) {
    const parts = spec.split("/");
    return parts.slice(0, 2).join("/");
  }
  return spec.split("/")[0];
}

function npmDependencies(source) {
  const deps = new Set();
  for (const spec of collectImportSpecifiers(source)) {
    const pkg = npmPackageName(spec);
    if (!pkg || SKIP_NPM.has(pkg)) continue;
    deps.add(pkg);
  }
  return [...deps].sort();
}

function registryDependencies(name, source) {
  const deps = new Set();
  if (/from ["']\.\.\/tokens\.stylex["']/.test(source)) {
    deps.add("tokens");
  }
  for (const spec of collectImportSpecifiers(source)) {
    const match = spec.match(/^\.\/([a-z0-9-]+)$/);
    if (match) deps.add(match[1]);
  }
  for (const extra of EXTRA_REGISTRY_DEPS[name] ?? []) {
    deps.add(extra);
  }
  // Bare names resolve to the official shadcn registry. Point at this
  // catalog so `shadcn add https://stylexcn.vercel.app/r/input.json` pulls
  // tokens and sibling UI from the same host.
  return [...deps]
    .sort()
    .map((dep) => `${REGISTRY_ORIGIN}/r/${dep}.json`);
}

function assertNoKitAlias(source, fileLabel) {
  if (source.includes("@stylexcn/")) {
    throw new Error(`${fileLabel} still contains @stylexcn/ imports`);
  }
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function emptyDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function componentFiles() {
  return fs
    .readdirSync(COMPONENTS_DIR)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.slice(0, -4))
    .filter((name) => !SKIP_COMPONENTS.has(name))
    .sort();
}

function build() {
  const catalogMeta = parseCatalogDescriptions(
    fs.readFileSync(CATALOG_SRC, "utf8"),
  );
  const tokensSource = rewriteConsumerImports(
    fs.readFileSync(TOKENS_SRC, "utf8"),
  );
  assertNoKitAlias(tokensSource, "tokens");

  emptyDir(REGISTRY_LIB);
  emptyDir(REGISTRY_UI);
  emptyDir(PUBLIC_R);

  fs.writeFileSync(path.join(REGISTRY_LIB, "tokens.stylex.ts"), tokensSource);

  const tokensItem = {
    name: "tokens",
    type: "registry:lib",
    title: "Tokens",
    description:
      "Shared StyleX design tokens (defineVars) used by the StyleX component set.",
    dependencies: ["@stylexjs/stylex"],
    docs: TOKENS_DOCS,
    files: [
      {
        path: "registry/lib/tokens.stylex.ts",
        type: "registry:lib",
        target: "@lib/tokens.stylex.ts",
      },
    ],
  };

  const uiItems = [];
  for (const name of componentFiles()) {
    const kitPath = path.join(COMPONENTS_DIR, `${name}.tsx`);
    const kitSource = fs.readFileSync(kitPath, "utf8");
    const consumerSource = rewriteConsumerImports(kitSource);
    assertNoKitAlias(consumerSource, name);
    fs.writeFileSync(path.join(REGISTRY_UI, `${name}.tsx`), consumerSource);

    const meta = catalogMeta.get(name) ?? EXTRA_META[name];
    const title = meta?.title ?? titleFromName(name);
    const description =
      meta?.description ?? `StyleX ${title} component.`;
    const dependencies = npmDependencies(kitSource);
    const registryDeps = registryDependencies(name, kitSource);

    const item = {
      name,
      type: "registry:ui",
      title,
      description,
      files: [
        {
          path: `registry/ui/${name}.tsx`,
          type: "registry:ui",
          target: `@ui/${name}.tsx`,
        },
      ],
    };
    if (dependencies.length) item.dependencies = dependencies;
    if (registryDeps.length) item.registryDependencies = registryDeps;
    uiItems.push(item);
  }

  const items = [tokensItem, ...uiItems];
  const catalog = {
    $schema: SCHEMA_REGISTRY,
    name: "stylexcn",
    homepage: HOMEPAGE,
    items,
  };

  writeJson(CATALOG_OUT, catalog);

  const publicCatalog = {
    ...catalog,
    items: items.map((item) => ({ ...item })),
  };
  writeJson(path.join(PUBLIC_R, "registry.json"), publicCatalog);

  for (const item of items) {
    const files = item.files.map((file) => ({
      ...file,
      content: fs.readFileSync(path.join(ROOT, file.path), "utf8"),
    }));
    writeJson(path.join(PUBLIC_R, `${item.name}.json`), {
      $schema: SCHEMA_ITEM,
      ...item,
      files,
    });
  }

  console.log(
    `Wrote ${items.length} registry items (${uiItems.length} ui + tokens) to registry.json and apps/docs/public/r`,
  );
}

function shadcnBuild() {
  const shadcn = process.env.SKIP_SHADCN_BUILD;
  if (shadcn === "1") return;
  try {
    execFileSync(
      "npx",
      [
        "--yes",
        "shadcn@latest",
        "build",
        "registry.json",
        "--output",
        "apps/docs/public/r",
      ],
      { cwd: ROOT, stdio: "inherit" },
    );
  } catch (error) {
    console.warn(
      "shadcn build failed; keeping generator JSON. Set SKIP_SHADCN_BUILD=1 to skip.",
    );
    if (process.env.REQUIRE_SHADCN_BUILD === "1") {
      throw error;
    }
  }
}

build();
shadcnBuild();
