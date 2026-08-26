import * as stylex from "@stylexjs/stylex";
import { Switch as SwitchPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

const MIX_INPUT_80 = "color-mix(in oklab, var(--input) 80%, transparent)";
const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
/* Tailwind v4 paints ring before --tw-shadow (first layer is on top). */
const RING_AND_SHADOW = `${RING}, ${SHADOW_XS}`;

/**
 * Track / thumb / disabled / focus as StyleX tables.
 * Official New York Switch default size only; illegal keys fail at compile time.
 * Official source has no aria-invalid utilities — do not invent them.
 */
const track = stylex.create({
  on: {
    display: "inline-flex",
    flexShrink: 0,
    alignItems: "center",
    height: "1.15rem",
    width: "2rem",
    boxSizing: "border-box",
    borderRadius: "9999px",
    borderWidth: "1px",
    borderStyle: "solid",
    padding: 0,
    margin: 0,
    outline: "none",
    fontFamily: "inherit",
    transitionProperty: "all",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

const fill = stylex.create({
  on: {
    backgroundColor: {
      default: tokens["--input"],
      '[data-state="unchecked"]': tokens["--input"],
      ':is(.dark *)[data-state="unchecked"]': MIX_INPUT_80,
      '[data-state="checked"]': tokens["--primary"],
      ':is(.dark *)[data-state="checked"]': tokens["--primary"],
    },
    borderColor: {
      default: "transparent",
      ":focus-visible": tokens["--ring"],
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

const focus = stylex.create({
  on: {
    boxShadow: {
      default: SHADOW_XS,
      ":focus-visible": RING_AND_SHADOW,
    },
  },
});

const thumb = stylex.create({
  on: {
    pointerEvents: "none",
    display: "block",
    width: "1rem",
    height: "1rem",
    borderRadius: "9999px",
    boxSizing: "border-box",
    backgroundColor: {
      default: tokens["--background"],
      ':is(.dark *)[data-state="unchecked"]': tokens["--foreground"],
      ':is(.dark *)[data-state="checked"]': tokens["--primary-foreground"],
    },
    boxShadow: "none",
    transitionProperty: "transform",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transform: {
      default: "translateX(0)",
      '[data-state="unchecked"]': "translateX(0)",
      '[data-state="checked"]': "translateX(calc(100% - 2px))",
    },
  },
});

export type SwitchProps = ComponentProps<typeof SwitchPrimitive.Root>;

export function Switch(props: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      {...props}
      {...stylex.props(track.on, fill.on, disabled.on, focus.on)}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        {...stylex.props(thumb.on)}
      />
    </SwitchPrimitive.Root>
  );
}

export const switchTrack = track;
export const switchFill = fill;
export const switchDisabled = disabled;
export const switchFocus = focus;
export const switchThumb = thumb;
