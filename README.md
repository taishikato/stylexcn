# stylexcn

shadcn/ui-compatible components styled with [StyleX](https://stylexjs.com), not Tailwind. Visual target: official shadcn/ui **New York**. Primitives: [Base UI](https://base-ui.com).

This repo is a foundation plus **Button**, **Input**, and **Label**. Distribution (copy-into-repo / registry) comes later.

## Tokens

`src/tokens.stylex.ts` maps shadcn Neutral CSS variables 1:1 (`--background`, `--foreground`, `--primary`, `--radius`, …).

Copied from:

- https://ui.shadcn.com/r/colors/neutral.json
- https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/themes.ts (`neutral`)

Dark overrides: `src/theme.ts` via `stylex.createTheme`. Radius scale from current shadcn v4 `@theme inline` (`apps/v4/app/globals.css`).

## Playground

```bash
npm install
npx playwright install chromium
npm run dev
```

Open the root URL for the Button + Input + Label playground. Isolated capture frames use query params, for example `/?kit=stylex&component=button&variant=default&size=default&state=default&theme=light`, `/?kit=stylex&component=input&state=default&theme=light`, or `/?kit=stylex&component=label&state=default&theme=light`.

## Visual regression

Harness: `src/visual/harness.tsx` (query params `kit`, `component`, `state`, `theme`; Button also uses `variant` and `size`).

Official baselines: `src/visual/official-button.tsx`, `src/visual/official-input.tsx`, `src/visual/official-label.tsx`. Candidates: `src/components/button.tsx`, `src/components/input.tsx`, `src/components/label.tsx`.

```bash
npm run build
npm run visual:diff
```

Writes `visual/results/{shadcn,stylex,diff}/*.png` plus `visual/results/report.md`. Nonzero pixelmatch is a fail.

Latest local run: **74/74 PASS** on Button + Input (Label cases added; rerun `npm run visual:diff`).

Do not edit the harness or official baseline to hide a delta.
