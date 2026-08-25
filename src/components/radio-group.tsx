import * as stylex from "@stylexjs/stylex";
import { CircleIcon } from "lucide-react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
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
 * Root / item / indicator as StyleX tables.
 * Official New York Radio Group has a single item size; illegal keys fail at compile time.
 */
const root = stylex.create({
  on: {
    display: "grid",
    gap: "0.75rem",
  },
});

const item = stylex.create({
  on: {
    aspectRatio: "1 / 1",
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
    boxSizing: "border-box",
    borderRadius: "9999px",
    borderWidth: "1px",
    borderStyle: "solid",
    padding: 0,
    margin: 0,
    outline: "none",
    fontFamily: "inherit",
    color: tokens["--primary"],
    backgroundColor: {
      default: "transparent",
      ":is(.dark *)": MIX_INPUT_30,
    },
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
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
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "0.5rem",
    height: "0.5rem",
    transform: "translate(-50%, -50%)",
    fill: tokens["--primary"],
  },
});

export type RadioGroupProps = ComponentProps<typeof RadioGroupPrimitive.Root>;
export type RadioGroupItemProps = ComponentProps<
  typeof RadioGroupPrimitive.Item
>;

export function RadioGroup(props: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      {...props}
      {...stylex.props(root.on)}
    />
  );
}

export function RadioGroupItem(props: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      {...props}
      {...stylex.props(item.on, disabled.on, invalid.on, focus.on)}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        {...stylex.props(indicator.root)}
      >
        <CircleIcon {...stylex.props(indicator.icon)} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export const radioGroupRoot = root;
export const radioGroupItem = item;
export const radioGroupDisabled = disabled;
export const radioGroupInvalid = invalid;
export const radioGroupFocus = focus;
