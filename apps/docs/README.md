# stylexcn docs

Next.js App Router site that imports the existing `src/components` kit so you can click live StyleX components in the browser.

The Vite playground and `npm run visual:diff` at the repo root are unchanged. This app does not replace them.

## Run

From the repository root:

```bash
npm install
npm run docs
```

http://localhost:3000

Production build:

```bash
npm run docs:build
```

From `apps/docs` via the workspace:

```bash
npm run dev -w stylexcn-docs
npm run build -w stylexcn-docs
```
