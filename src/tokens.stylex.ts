import * as stylex from "@stylexjs/stylex";

/**
 * shadcn/ui Neutral CSS variables, mapped 1:1 onto StyleX defineVars.
 *
 * Source of truth (preferred over docs-site globals.css, which diverges):
 * - https://ui.shadcn.com/r/colors/neutral.json (`cssVars.light` / `cssVars.dark`)
 * - https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/themes.ts (`name: "neutral"`)
 *
 * Radius scale matches current shadcn v4 `@theme inline` in
 * apps/v4/app/globals.css:
 *   --radius-sm: calc(var(--radius) * 0.6)
 *   --radius-md: calc(var(--radius) * 0.8)
 *   --radius-lg: var(--radius)
 *   --radius-xl: calc(var(--radius) * 1.4)
 *
 * Keys that start with `--` keep the public CSS custom property names
 * (`--background`, `--primary`, …) instead of hashed StyleX names.
 */
export const tokens = stylex.defineVars({
  "--background": "oklch(1 0 0)",
  "--foreground": "oklch(0.145 0 0)",
  "--card": "oklch(1 0 0)",
  "--card-foreground": "oklch(0.145 0 0)",
  "--popover": "oklch(1 0 0)",
  "--popover-foreground": "oklch(0.145 0 0)",
  "--primary": "oklch(0.205 0 0)",
  "--primary-foreground": "oklch(0.985 0 0)",
  "--secondary": "oklch(0.97 0 0)",
  "--secondary-foreground": "oklch(0.205 0 0)",
  "--muted": "oklch(0.97 0 0)",
  "--muted-foreground": "oklch(0.556 0 0)",
  "--accent": "oklch(0.97 0 0)",
  "--accent-foreground": "oklch(0.205 0 0)",
  "--destructive": "oklch(0.577 0.245 27.325)",
  "--border": "oklch(0.922 0 0)",
  "--input": "oklch(0.922 0 0)",
  "--ring": "oklch(0.708 0 0)",
  "--chart-1": "oklch(0.87 0 0)",
  "--chart-2": "oklch(0.556 0 0)",
  "--chart-3": "oklch(0.439 0 0)",
  "--chart-4": "oklch(0.371 0 0)",
  "--chart-5": "oklch(0.269 0 0)",
  "--radius": "0.625rem",
  "--radius-sm": "calc(var(--radius) * 0.6)",
  "--radius-md": "calc(var(--radius) * 0.8)",
  "--radius-lg": "var(--radius)",
  "--radius-xl": "calc(var(--radius) * 1.4)",
  "--sidebar": "oklch(0.985 0 0)",
  "--sidebar-foreground": "oklch(0.145 0 0)",
  "--sidebar-primary": "oklch(0.205 0 0)",
  "--sidebar-primary-foreground": "oklch(0.985 0 0)",
  "--sidebar-accent": "oklch(0.97 0 0)",
  "--sidebar-accent-foreground": "oklch(0.205 0 0)",
  "--sidebar-border": "oklch(0.922 0 0)",
  "--sidebar-ring": "oklch(0.708 0 0)",
});
