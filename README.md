# stylexcn

shadcn/ui-compatible components styled with [StyleX](https://stylexjs.com), not Tailwind. Visual target: official shadcn/ui **New York**. Primitives: [Base UI](https://base-ui.com).

This repo is a foundation plus **Button**, **Input**, **Label**, **Textarea**, **Checkbox**, **Switch**, **Radio Group**, **Card**, **Dialog**, **Alert Dialog**, **Select**, **Dropdown Menu**, **Sheet**, **Tabs**, **Popover**, **Hover Card**, **Tooltip**, **Badge**, **Separator**, **Skeleton**, **Avatar**, **Progress**, **Accordion**, **Slider**, **Toggle**, **Breadcrumb**, **Collapsible**, **Scroll Area**, and **Pagination**. Distribution (copy-into-repo / registry) comes later.

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

Open the root URL for the Button + Input + Label + Textarea + Checkbox + Switch + Radio Group + Card + Dialog + Alert Dialog + Select + Dropdown Menu + Sheet + Tabs + Popover + Hover Card + Tooltip + Badge + Separator + Skeleton + Avatar + Progress + Accordion + Slider + Toggle + Breadcrumb + Collapsible + Scroll Area + Pagination playground. Isolated capture frames use query params, for example `/?kit=stylex&component=button&variant=default&size=default&state=default&theme=light`, `/?kit=stylex&component=input&state=default&theme=light`, `/?kit=stylex&component=label&state=default&theme=light`, `/?kit=stylex&component=textarea&state=default&theme=light`, `/?kit=stylex&component=checkbox&state=default&theme=light`, `/?kit=stylex&component=switch&state=default&theme=light`, `/?kit=stylex&component=radio-group&state=default&theme=light`, `/?kit=stylex&component=card&state=default&theme=light`, `/?kit=stylex&component=dialog&state=default&theme=light`, `/?kit=stylex&component=alert-dialog&state=default&theme=light`, `/?kit=stylex&component=select&state=default&theme=light`, `/?kit=stylex&component=dropdown-menu&state=closed&theme=light`, `/?kit=stylex&component=sheet&state=default&theme=light`, `/?kit=stylex&component=tabs&state=default&theme=light`, `/?kit=stylex&component=popover&state=default&theme=light`, `/?kit=stylex&component=hover-card&state=default&theme=light`, `/?kit=stylex&component=tooltip&state=default&theme=light`, `/?kit=stylex&component=badge&variant=default&state=default&theme=light`, `/?kit=stylex&component=separator&state=horizontal&theme=light`, `/?kit=stylex&component=skeleton&state=bar&theme=light`, `/?kit=stylex&component=avatar&state=default&theme=light`, `/?kit=stylex&component=progress&state=empty&theme=light`, `/?kit=stylex&component=accordion&state=open&theme=light`, `/?kit=stylex&component=slider&state=default&theme=light`, `/?kit=stylex&component=toggle&state=default&theme=light`, `/?kit=stylex&component=breadcrumb&state=default&theme=light`, `/?kit=stylex&component=collapsible&state=open&theme=light`, `/?kit=stylex&component=scroll-area&state=vertical&theme=light`, or `/?kit=stylex&component=pagination&state=default&theme=light`. Dialog, Alert Dialog, and Sheet captures use a fixed **800×600** viewport (Tailwind `sm` / 40rem) so `sm:max-w-lg` / `sm:max-w-sm` apply on both kits. Open Select and Dropdown Menu captures use a fixed **640×560** viewport so the popper stays on-screen. Open Popover and Hover Card captures use a fixed **640×480** viewport so the popper stays on-screen. Hover Card captures force `open={true}` on both kits (do not rely on hover). Tooltip captures use a fixed **480×320** viewport with the trigger pinned near the bottom so `side="top"` does not flip. Vertical Separator uses a fixed-height parent so `h-full` has something to fill. Progress uses an identical **16rem** parent on both kits so `w-full` matches. Accordion uses a **20rem** parent and crops `[data-slot="accordion"]`; open state is forced with controlled Radix `value`. Slider uses an identical **16rem** parent on both kits so `w-full` matches, and captures use controlled `value` (not the `[min, max]` thumb fallback). Toggle crops `[data-slot="toggle"]` with 16px pad; `on` uses controlled `pressed`. Breadcrumb uses an identical **24rem** parent on both kits so `flex-wrap` does not split the trail, and crops `[data-slot="breadcrumb"]`. Collapsible uses an identical **20rem** parent on both kits and crops `[data-slot="collapsible"]`; `open` / `closed` are forced with controlled Radix `open`. Scroll Area uses identical overflow content and identical fixed boxes (**12rem × 8rem** vertical, **16rem × 6rem** horizontal) on both kits so the thumb position matches, and crops `[data-slot="scroll-area"]`. Pagination crops `[data-slot="pagination"]` with 16px pad (`default` and `ellipsis`). Playwright `animations: "disabled"`.

## Visual regression

Harness: `src/visual/harness.tsx` (query params `kit`, `component`, `state`, `theme`; Button also uses `variant` and `size`; Badge uses `variant`).

Official baselines: `src/visual/official-button.tsx`, `src/visual/official-input.tsx`, `src/visual/official-label.tsx`, `src/visual/official-textarea.tsx`, `src/visual/official-checkbox.tsx`, `src/visual/official-switch.tsx`, `src/visual/official-radio-group.tsx`, `src/visual/official-card.tsx`, `src/visual/official-dialog.tsx`, `src/visual/official-alert-dialog.tsx`, `src/visual/official-select.tsx`, `src/visual/official-dropdown-menu.tsx`, `src/visual/official-sheet.tsx`, `src/visual/official-tabs.tsx`, `src/visual/official-popover.tsx`, `src/visual/official-hover-card.tsx`, `src/visual/official-tooltip.tsx`, `src/visual/official-badge.tsx`, `src/visual/official-separator.tsx`, `src/visual/official-skeleton.tsx`, `src/visual/official-avatar.tsx`, `src/visual/official-progress.tsx`, `src/visual/official-accordion.tsx`, `src/visual/official-slider.tsx`, `src/visual/official-toggle.tsx`, `src/visual/official-breadcrumb.tsx`, `src/visual/official-collapsible.tsx`, `src/visual/official-scroll-area.tsx`, `src/visual/official-pagination.tsx`. Candidates: `src/components/button.tsx`, `src/components/input.tsx`, `src/components/label.tsx`, `src/components/textarea.tsx`, `src/components/checkbox.tsx`, `src/components/switch.tsx`, `src/components/radio-group.tsx`, `src/components/card.tsx`, `src/components/dialog.tsx`, `src/components/alert-dialog.tsx`, `src/components/select.tsx`, `src/components/dropdown-menu.tsx`, `src/components/sheet.tsx`, `src/components/tabs.tsx`, `src/components/popover.tsx`, `src/components/hover-card.tsx`, `src/components/tooltip.tsx`, `src/components/badge.tsx`, `src/components/separator.tsx`, `src/components/skeleton.tsx`, `src/components/avatar.tsx`, `src/components/progress.tsx`, `src/components/accordion.tsx`, `src/components/slider.tsx`, `src/components/toggle.tsx`, `src/components/breadcrumb.tsx`, `src/components/collapsible.tsx`, `src/components/scroll-area.tsx`, `src/components/pagination.tsx`.

```bash
npm run build
npm run visual:diff
```

Writes `visual/results/{shadcn,stylex,diff}/*.png` plus `visual/results/report.md`. Nonzero pixelmatch is a fail.

Latest local run: **244/244 PASS** (66 Button + 8 Input + 4 Label + 8 Textarea + 10 Checkbox + 8 Switch + 10 Radio Group + 4 Card + 4 Dialog + 2 Alert Dialog + 14 Select + 4 Dropdown Menu + 8 Sheet + 6 Tabs + 2 Popover + 2 Hover Card + 2 Tooltip + 14 Badge + 4 Separator + 4 Skeleton + 10 Avatar + 6 Progress + 6 Accordion + 8 Slider + 14 Toggle + 4 Breadcrumb + 4 Collapsible + 4 Scroll Area + 4 Pagination, threshold 0).

Do not edit the harness or official baseline to hide a delta.
