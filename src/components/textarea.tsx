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
 * Size / invalid / disabled styles as StyleX tables.
 * Official New York Textarea has a single size; illegal keys fail at compile time.
 */
const sizes = stylex.create({
  default: {
    minHeight: "4rem",
    paddingInline: "0.75rem",
    paddingBlock: "0.5rem",
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
    cursor: {
      default: null,
      ":disabled": "not-allowed",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
    },
  },
});

const base = stylex.create({
  root: {
    display: "flex",
    fieldSizing: "content",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: {
      default: "transparent",
      ":is(.dark *)": MIX_INPUT_30,
    },
    outline: "none",
    fontFamily: "inherit",
    color: {
      default: "inherit",
      "::placeholder": tokens["--muted-foreground"],
    },
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

export type TextareaProps = ComponentProps<"textarea">;

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      {...props}
      {...stylex.props(base.root, sizes.default, invalid.on, disabled.on)}
    />
  );
}

export const textareaSizes = sizes;
export const textareaInvalid = invalid;
export const textareaDisabled = disabled;
