import * as stylex from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

const MIX_INPUT_30 = "color-mix(in oklab, var(--input) 30%, transparent)";
const MIX_INPUT_50 = "color-mix(in oklab, var(--input) 50%, transparent)";
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
 * Native Select family as StyleX tables.
 * Official New York: wrapper + native <select> + ChevronDownIcon;
 * sizes default (h-9) and sm (h-8). Not Radix Select.
 */
const wrapper = stylex.create({
  on: {
    position: "relative",
    width: "fit-content",
    opacity: {
      default: 1,
      ":has(select:disabled)": 0.5,
    },
  },
});

const sizes = stylex.create({
  default: {
    height: "2.25rem",
    paddingBlock: "0.5rem",
  },
  sm: {
    height: "2rem",
    paddingBlock: "0.25rem",
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
      default: null,
      ":disabled": "not-allowed",
    },
  },
});

const select = stylex.create({
  on: {
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundImage: "none",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    backgroundColor: {
      default: "transparent",
      ":is(.dark *)": MIX_INPUT_30,
      ":is(.dark *):hover": MIX_INPUT_50,
    },
    paddingInlineStart: "0.75rem",
    paddingInlineEnd: "2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontFamily: "inherit",
    color: {
      default: "inherit",
      "::placeholder": tokens["--muted-foreground"],
    },
    outline: "none",
    margin: 0,
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    "::selection": {
      backgroundColor: tokens["--primary"],
      color: tokens["--primary-foreground"],
    },
    "::ms-expand": {
      display: "none",
    },
  },
});

const icon = stylex.create({
  on: {
    pointerEvents: "none",
    position: "absolute",
    top: "50%",
    right: "0.875rem",
    width: "1rem",
    height: "1rem",
    transform: "translateY(-50%)",
    color: tokens["--muted-foreground"],
    opacity: 0.5,
    userSelect: "none",
  },
});

const option = stylex.create({
  on: {
    backgroundColor: "Canvas",
    color: "CanvasText",
  },
});

export type NativeSelectSize = keyof typeof sizes;
export type NativeSelectProps = Omit<ComponentProps<"select">, "size"> & {
  size?: NativeSelectSize;
};
export type NativeSelectOptionProps = ComponentProps<"option">;
export type NativeSelectOptGroupProps = ComponentProps<"optgroup">;

export function NativeSelect({
  size = "default",
  children,
  ...props
}: NativeSelectProps) {
  return (
    <div data-slot="native-select-wrapper" {...stylex.props(wrapper.on)}>
      <select
        data-slot="native-select"
        data-size={size}
        {...props}
        {...stylex.props(select.on, sizes[size], invalid.on, disabled.on)}
      >
        {children}
      </select>
      <ChevronDownIcon
        aria-hidden="true"
        data-slot="native-select-icon"
        {...stylex.props(icon.on)}
      />
    </div>
  );
}

export function NativeSelectOption(props: NativeSelectOptionProps) {
  return (
    <option
      data-slot="native-select-option"
      {...props}
      {...stylex.props(option.on)}
    />
  );
}

export function NativeSelectOptGroup(props: NativeSelectOptGroupProps) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      {...props}
      {...stylex.props(option.on)}
    />
  );
}

export const nativeSelectSizes = sizes;
export const nativeSelectInvalid = invalid;
export const nativeSelectDisabled = disabled;
