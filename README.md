# stylexcn

shadcn/ui-compatible components styled with [StyleX](https://stylexjs.com), not Tailwind. Visual target: official shadcn/ui **New York**. Primitives: [Base UI](https://base-ui.com).

This repo is a foundation plus **Button**, **Input**, **Label**, **Textarea**, **Checkbox**, **Switch**, **Radio Group**, **Card**, **Dialog**, **Alert Dialog**, **Select**, **Dropdown Menu**, **Sheet**, **Tabs**, and **Popover**. Distribution (copy-into-repo / registry) comes later.

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

Open the root URL for the Button + Input + Label + Textarea + Checkbox + Switch + Radio Group + Card + Dialog + Alert Dialog + Select + Dropdown Menu + Sheet + Tabs + Popover playground. Isolated capture frames use query params, for example `/?kit=stylex&component=button&variant=default&size=default&state=default&theme=light`, `/?kit=stylex&component=input&state=default&theme=light`, `/?kit=stylex&component=label&state=default&theme=light`, `/?kit=stylex&component=textarea&state=default&theme=light`, `/?kit=stylex&component=checkbox&state=default&theme=light`, `/?kit=stylex&component=switch&state=default&theme=light`, `/?kit=stylex&component=radio-group&state=default&theme=light`, `/?kit=stylex&component=card&state=default&theme=light`, `/?kit=stylex&component=dialog&state=default&theme=light`, `/?kit=stylex&component=alert-dialog&state=default&theme=light`, `/?kit=stylex&component=select&state=default&theme=light`, `/?kit=stylex&component=dropdown-menu&state=closed&theme=light`, `/?kit=stylex&component=sheet&state=default&theme=light`, `/?kit=stylex&component=tabs&state=default&theme=light`, or `/?kit=stylex&component=popover&state=default&theme=light`. Dialog, Alert Dialog, and Sheet captures use a fixed **800×600** viewport (Tailwind `sm` / 40rem) so `sm:max-w-lg` / `sm:max-w-sm` apply on both kits. Open Select and Dropdown Menu captures use a fixed **640×560** viewport so the popper stays on-screen. Open Popover captures use a fixed **640×480** viewport so the popper stays on-screen.

## Visual regression

Harness: `src/visual/harness.tsx` (query params `kit`, `component`, `state`, `theme`; Button also uses `variant` and `size`).

Official baselines: `src/visual/official-button.tsx`, `src/visual/official-input.tsx`, `src/visual/official-label.tsx`, `src/visual/official-textarea.tsx`, `src/visual/official-checkbox.tsx`, `src/visual/official-switch.tsx`, `src/visual/official-radio-group.tsx`, `src/visual/official-card.tsx`, `src/visual/official-dialog.tsx`, `src/visual/official-alert-dialog.tsx`, `src/visual/official-select.tsx`, `src/visual/official-dropdown-menu.tsx`, `src/visual/official-sheet.tsx`, `src/visual/official-tabs.tsx`, `src/visual/official-popover.tsx`. Candidates: `src/components/button.tsx`, `src/components/input.tsx`, `src/components/label.tsx`, `src/components/textarea.tsx`, `src/components/checkbox.tsx`, `src/components/switch.tsx`, `src/components/radio-group.tsx`, `src/components/card.tsx`, `src/components/dialog.tsx`, `src/components/alert-dialog.tsx`, `src/components/select.tsx`, `src/components/dropdown-menu.tsx`, `src/components/sheet.tsx`, `src/components/tabs.tsx`, `src/components/popover.tsx`.

```bash
npm run build
npm run visual:diff
```

Writes `visual/results/{shadcn,stylex,diff}/*.png` plus `visual/results/report.md`. Nonzero pixelmatch is a fail.

Latest local run: **158/158 PASS** (66 Button + 8 Input + 4 Label + 8 Textarea + 10 Checkbox + 8 Switch + 10 Radio Group + 4 Card + 4 Dialog + 2 Alert Dialog + 14 Select + 4 Dropdown Menu + 8 Sheet + 6 Tabs + 2 Popover, threshold 0).

Do not edit the harness or official baseline to hide a delta.
