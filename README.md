# stylexcn

shadcn/ui-compatible components styled with [StyleX](https://stylexjs.com), not Tailwind. Visual target: official shadcn/ui **New York**. Primitives: [Base UI](https://base-ui.com).

This repo is a foundation plus **Button**, **Input**, **Label**, **Textarea**, and **Checkbox**. Distribution (copy-into-repo / registry) comes later.

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

Open the root URL for the Button + Input + Label + Textarea + Checkbox playground. Isolated capture frames use query params, for example `/?kit=stylex&component=button&variant=default&size=default&state=default&theme=light`, `/?kit=stylex&component=input&state=default&theme=light`, `/?kit=stylex&component=label&state=default&theme=light`, `/?kit=stylex&component=textarea&state=default&theme=light`, or `/?kit=stylex&component=checkbox&state=default&theme=light`.

## Visual regression

Harness: `src/visual/harness.tsx` (query params `kit`, `component`, `state`, `theme`; Button also uses `variant` and `size`).

Official baselines: `src/visual/official-button.tsx`, `src/visual/official-input.tsx`, `src/visual/official-label.tsx`, `src/visual/official-textarea.tsx`, `src/visual/official-checkbox.tsx`. Candidates: `src/components/button.tsx`, `src/components/input.tsx`, `src/components/label.tsx`, `src/components/textarea.tsx`, `src/components/checkbox.tsx`.

```bash
npm run build
npm run visual:diff
```

Writes `visual/results/{shadcn,stylex,diff}/*.png` plus `visual/results/report.md`. Nonzero pixelmatch is a fail.

Latest local run: pending Checkbox visual artifacts (threshold 0).

Do not edit the harness or official baseline to hide a delta.
