import * as stylex from "@stylexjs/stylex";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

const MIX_PRIMARY_90 = "color-mix(in oklab, var(--primary) 90%, transparent)";
const MIX_SECONDARY_90 =
  "color-mix(in oklab, var(--secondary) 90%, transparent)";
const MIX_DESTRUCTIVE_90 =
  "color-mix(in oklab, var(--destructive) 90%, transparent)";
const MIX_DESTRUCTIVE_60 =
  "color-mix(in oklab, var(--destructive) 60%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
const MIX_DESTRUCTIVE_40 =
  "color-mix(in oklab, var(--destructive) 40%, transparent)";
const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
const RING_DESTRUCTIVE = `0 0 0 3px ${MIX_DESTRUCTIVE_20}`;
const RING_DESTRUCTIVE_DARK = `0 0 0 3px ${MIX_DESTRUCTIVE_40}`;

const TRANSPARENT_BORDER = {
  default: "transparent",
  ":focus-visible": tokens["--ring"],
  '[aria-invalid="true"]': tokens["--destructive"],
  '[aria-invalid="true"]:focus-visible': tokens["--destructive"],
} as const;

const DEFAULT_RING = {
  default: "none",
  ":focus-visible": RING,
  '[aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE,
  ':is(.dark *)[aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE_DARK,
} as const;

/**
 * Variant styles as StyleX tables. Keys are the only legal values;
 * a mistyped variant fails at typecheck and StyleX compile time.
 * Hover fills match official `[a&]:hover` (anchor only).
 * Border/ring maps live on each variant so a later table cannot drop
 * `border-transparent` (global `* { border-border }` would otherwise win).
 */
const variants = stylex.create({
  default: {
    backgroundColor: {
      default: tokens["--primary"],
      ":is(a):hover": MIX_PRIMARY_90,
    },
    color: tokens["--primary-foreground"],
    borderColor: TRANSPARENT_BORDER,
    boxShadow: DEFAULT_RING,
  },
  secondary: {
    backgroundColor: {
      default: tokens["--secondary"],
      ":is(a):hover": MIX_SECONDARY_90,
    },
    color: tokens["--secondary-foreground"],
    borderColor: TRANSPARENT_BORDER,
    boxShadow: DEFAULT_RING,
  },
  destructive: {
    backgroundColor: {
      default: tokens["--destructive"],
      ":is(.dark *)": MIX_DESTRUCTIVE_60,
      ":is(a):hover": MIX_DESTRUCTIVE_90,
      ":is(.dark *):is(a):hover": MIX_DESTRUCTIVE_90,
    },
    color: "white",
    borderColor: TRANSPARENT_BORDER,
    boxShadow: {
      default: "none",
      ":focus-visible": RING_DESTRUCTIVE,
      ":is(.dark *):focus-visible": RING_DESTRUCTIVE_DARK,
      '[aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE,
      ':is(.dark *)[aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE_DARK,
    },
  },
  outline: {
    backgroundColor: {
      default: "transparent",
      ":is(a):hover": tokens["--accent"],
    },
    color: {
      default: tokens["--foreground"],
      ":is(a):hover": tokens["--accent-foreground"],
    },
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
      '[aria-invalid="true"]': tokens["--destructive"],
      '[aria-invalid="true"]:focus-visible': tokens["--destructive"],
    },
    boxShadow: DEFAULT_RING,
  },
  ghost: {
    backgroundColor: {
      default: "transparent",
      ":is(a):hover": tokens["--accent"],
    },
    color: {
      default: "inherit",
      ":is(a):hover": tokens["--accent-foreground"],
    },
    borderColor: TRANSPARENT_BORDER,
    boxShadow: DEFAULT_RING,
  },
  link: {
    backgroundColor: "transparent",
    color: tokens["--primary"],
    textUnderlineOffset: "4px",
    textDecorationLine: {
      default: "none",
      ":is(a):hover": "underline",
    },
    borderColor: TRANSPARENT_BORDER,
    boxShadow: DEFAULT_RING,
  },
});

const base = stylex.create({
  root: {
    display: "inline-flex",
    width: "fit-content",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    overflow: "hidden",
    borderRadius: "9999px",
    borderWidth: "1px",
    borderStyle: "solid",
    boxSizing: "border-box",
    paddingInline: "0.5rem",
    paddingBlock: "0.125rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

export type BadgeVariant = keyof typeof variants;

export type BadgeProps = ComponentProps<"span"> & {
  variant?: BadgeVariant;
  asChild?: boolean;
};

export function Badge({
  variant = "default",
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      {...props}
      {...stylex.props(base.root, variants[variant])}
    />
  );
}

export const badgeVariants = variants;
