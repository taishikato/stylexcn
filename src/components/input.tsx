import * as stylex from "@stylexjs/stylex";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

const MIX_INPUT_30 = "color-mix(in oklab, var(--input) 30%, transparent)";
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

/**
 * Size / invalid / disabled / file styles as StyleX tables.
 * Official New York Input has a single size; illegal keys fail at compile time.
 */
const sizes = stylex.create({
  default: {
    height: "2.25rem",
    paddingInline: "0.75rem",
    paddingBlock: "0.25rem",
    fontSize: {
      default: "1rem",
      "@media (min-width: 768px)": "0.875rem",
    },
    lineHeight: {
      default: "1.5rem",
      "@media (min-width: 768px)": "1.25rem",
    },
  },
});

const invalid = stylex.create({
  on: {
    borderColor: {
      default: tokens["--input"],
      ":focus-visible": tokens["--ring"],
      '[aria-invalid="true"]': tokens["--destructive"],
      '[aria-invalid="true"]:focus-visible': tokens["--destructive"],
    },
    boxShadow: {
      default: SHADOW_XS,
      ":focus-visible": RING_AND_SHADOW,
      /* Official `aria-invalid:ring-*` only sets ring color; width is
         `focus-visible:ring-[3px]`. Resting invalid is border + shadow-xs. */
      '[aria-invalid="true"]': SHADOW_XS,
      '[aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE_AND_SHADOW,
      ':is(.dark *)[aria-invalid="true"]:focus-visible':
        RING_DESTRUCTIVE_DARK_AND_SHADOW,
    },
  },
});

const disabled = stylex.create({
  on: {
    pointerEvents: {
      default: null,
      ":disabled": "none",
    },
    cursor: {
      default: "text",
      ":disabled": "not-allowed",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
    },
  },
});

const file = stylex.create({
  on: {
    display: {
      default: null,
      "::file-selector-button": "inline-flex",
    },
    height: {
      default: "2.25rem",
      "::file-selector-button": "1.75rem",
    },
    borderWidth: {
      default: "1px",
      "::file-selector-button": 0,
    },
    backgroundColor: {
      default: "transparent",
      ":is(.dark *)": MIX_INPUT_30,
      "::file-selector-button": "transparent",
    },
    fontSize: {
      default: "1rem",
      "@media (min-width: 768px)": "0.875rem",
      "::file-selector-button": "0.875rem",
    },
    fontWeight: {
      default: 400,
      "::file-selector-button": 500,
    },
    color: {
      default: "inherit",
      "::placeholder": tokens["--muted-foreground"],
      "::file-selector-button": tokens["--foreground"],
    },
    lineHeight: {
      default: "1.5rem",
      "@media (min-width: 768px)": "1.25rem",
      "::file-selector-button": "1.25rem",
    },
  },
});

const base = stylex.create({
  root: {
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderStyle: "solid",
    outline: "none",
    fontFamily: "inherit",
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    "::selection": {
      backgroundColor: tokens["--primary"],
      color: tokens["--primary-foreground"],
    },
  },
});

export type InputSize = keyof typeof sizes;
export type InputProps = ComponentProps<"input">;

export function Input({ type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      {...props}
      {...stylex.props(
        base.root,
        sizes.default,
        invalid.on,
        disabled.on,
        file.on,
      )}
    />
  );
}

export const inputBase = base;
export const inputSizes = sizes;
export const inputInvalid = invalid;
export const inputDisabled = disabled;
export const inputFile = file;
