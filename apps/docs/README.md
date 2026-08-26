# stylexcn docs

Next.js App Router site for the StyleX port of shadcn/ui. It imports the existing `src/components` kit so you can click live StyleX components in the browser.

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

That command regenerates the shadcn registry JSON under `public/r` before `next build`, so Vercel always publishes a fresh catalog. Install a component with:

```bash
pnpm dlx shadcn@latest add https://stylexcn.vercel.app/r/input.json
```

The consumer app must compile StyleX. Tailwind init is not enough. See the root README for namespace and list commands.

From `apps/docs` via the workspace:

```bash
npm run dev -w stylexcn-docs
npm run build -w stylexcn-docs
```
