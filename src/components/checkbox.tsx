import * as stylex from "@stylexjs/stylex";
import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
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
 * Checked / unchecked / disabled / invalid / focus as StyleX tables.
 * Official New York Checkbox has a single size; illegal keys fail at compile time.
 */
const unchecked = stylex.create({
  on: {
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
    boxSizing: "border-box",
    borderRadius: "4px",
    borderWidth: "1px",
    borderStyle: "solid",
    padding: 0,
    outline: "none",
    fontFamily: "inherit",
    transitionProperty: "box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

const checked = stylex.create({
  on: {
    backgroundColor: {
      default: "transparent",
      ":is(.dark *)": MIX_INPUT_30,
      '[data-state="checked"]': tokens["--primary"],
      ':is(.dark *)[data-state="checked"]': tokens["--primary"],
    },
    color: {
      default: "inherit",
      '[data-state="checked"]': tokens["--primary-foreground"],
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

const invalid = stylex.create({
  on: {
    borderColor: {
      default: tokens["--input"],
      ":focus-visible": tokens["--ring"],
      '[aria-invalid="true"]': tokens["--destructive"],
      '[aria-invalid="true"]:focus-visible': tokens["--destructive"],
      /* Official lists `data-[state=checked]:border-primary` after
         `aria-invalid:border-destructive`; equal-specificity later rule wins. */
      '[data-state="checked"]': tokens["--primary"],
      '[data-state="checked"]:focus-visible': tokens["--ring"],
      '[data-state="checked"][aria-invalid="true"]': tokens["--primary"],
      '[data-state="checked"][aria-invalid="true"]:focus-visible':
        tokens["--destructive"],
    },
  },
});

const focus = stylex.create({
  on: {
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

const indicator = stylex.create({
  root: {
    display: "grid",
    placeContent: "center",
    color: "currentcolor",
    transitionProperty: "none",
  },
  icon: {
    width: "0.875rem",
    height: "0.875rem",
  },
});

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>;

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      {...props}
      {...stylex.props(
        unchecked.on,
        checked.on,
        disabled.on,
        invalid.on,
        focus.on,
      )}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        {...stylex.props(indicator.root)}
      >
        <CheckIcon {...stylex.props(indicator.icon)} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export const checkboxUnchecked = unchecked;
export const checkboxChecked = checked;
export const checkboxDisabled = disabled;
export const checkboxInvalid = invalid;
export const checkboxFocus = focus;
