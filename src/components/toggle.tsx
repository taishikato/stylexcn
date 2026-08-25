import * as stylex from "@stylexjs/stylex";
import { Toggle as TogglePrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
const MIX_DESTRUCTIVE_40 =
  "color-mix(in oklab, var(--destructive) 40%, transparent)";
const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
const RING_DESTRUCTIVE = `0 0 0 3px ${MIX_DESTRUCTIVE_20}`;
const RING_DESTRUCTIVE_DARK = `0 0 0 3px ${MIX_DESTRUCTIVE_40}`;
/* Tailwind v4 paints ring before --tw-shadow (first layer is on top). */
const RING_AND_SHADOW = `${RING}, ${SHADOW_XS}`;
const RING_DESTRUCTIVE_AND_SHADOW = `${RING_DESTRUCTIVE}, ${SHADOW_XS}`;
const RING_DESTRUCTIVE_DARK_AND_SHADOW = `${RING_DESTRUCTIVE_DARK}, ${SHADOW_XS}`;

const TRANSPARENT_BORDER = {
  default: "transparent",
  ":focus-visible": tokens["--ring"],
  '[aria-invalid="true"]': tokens["--destructive"],
  '[aria-invalid="true"]:focus-visible': tokens["--destructive"],
} as const;

/**
 * Variant × size styles as StyleX tables. Keys are the only legal values;
 * a mistyped variant/size fails at typecheck and StyleX compile time.
 * Official `aria-invalid:ring-*` only sets ring color; width is
 * `focus-visible:ring-[3px]`.
 */
const variants = stylex.create({
  default: {
    backgroundColor: {
      default: "transparent",
      ":hover": tokens["--muted"],
      '[data-state="on"]': tokens["--accent"],
      '[data-state="on"]:hover': tokens["--accent"],
    },
    color: {
      default: "inherit",
      ":hover": tokens["--muted-foreground"],
      '[data-state="on"]': tokens["--accent-foreground"],
      '[data-state="on"]:hover': tokens["--accent-foreground"],
    },
    borderWidth: 0,
    borderColor: TRANSPARENT_BORDER,
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
      '[aria-invalid="true"]': "none",
      '[aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE,
      ':is(.dark *)[aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE_DARK,
    },
  },
  outline: {
    backgroundColor: {
      default: "transparent",
      ":hover": tokens["--accent"],
      '[data-state="on"]': tokens["--accent"],
      '[data-state="on"]:hover': tokens["--accent"],
    },
    color: {
      default: "inherit",
      ":hover": tokens["--accent-foreground"],
      '[data-state="on"]': tokens["--accent-foreground"],
      '[data-state="on"]:hover': tokens["--accent-foreground"],
    },
    borderWidth: "1px",
    borderColor: {
      default: tokens["--input"],
      ":focus-visible": tokens["--ring"],
      '[aria-invalid="true"]': tokens["--destructive"],
      '[aria-invalid="true"]:focus-visible': tokens["--destructive"],
    },
    boxShadow: {
      default: SHADOW_XS,
      ":focus-visible": RING_AND_SHADOW,
      /* Official `aria-invalid:ring-*` is color only; resting keeps shadow-xs. */
      '[aria-invalid="true"]': SHADOW_XS,
      '[aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE_AND_SHADOW,
      ':is(.dark *)[aria-invalid="true"]:focus-visible':
        RING_DESTRUCTIVE_DARK_AND_SHADOW,
    },
  },
});

const sizes = stylex.create({
  default: {
    height: "2.25rem",
    minWidth: "2.25rem",
    paddingInline: "0.5rem",
  },
  sm: {
    height: "2rem",
    minWidth: "2rem",
    paddingInline: "0.375rem",
  },
  lg: {
    height: "2.5rem",
    minWidth: "2.5rem",
    paddingInline: "0.625rem",
  },
});

const base = stylex.create({
  root: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderStyle: "solid",
    paddingBlock: 0,
    margin: 0,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    appearance: "none",
    backgroundImage: "none",
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outline: "none",
    pointerEvents: {
      default: null,
      ":disabled": "none",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
    },
  },
});

export type ToggleVariant = keyof typeof variants;
export type ToggleSize = keyof typeof sizes;

export type ToggleProps = ComponentProps<typeof TogglePrimitive.Root> & {
  variant?: ToggleVariant;
  size?: ToggleSize;
};

export function Toggle({
  variant = "default",
  size = "default",
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      {...props}
      {...stylex.props(base.root, variants[variant], sizes[size])}
    />
  );
}

export const toggleBase = base;
export const toggleVariants = variants;
export const toggleSizes = sizes;
