import * as stylex from "@stylexjs/stylex";
import { Slider as SliderPrimitive } from "radix-ui";
import { useMemo, type ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
/* Tailwind v4 --shadow-sm (theme.css). Official thumb uses shadow-sm. */
const SHADOW_SM =
  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
/* Official: hover:ring-4 / focus-visible:ring-4 with ring-ring/50. */
const RING4 = `0 0 0 4px ${MIX_RING_50}`;
/* Tailwind v4 paints ring before --tw-shadow (first layer is on top). */
const RING4_AND_SHADOW = `${RING4}, ${SHADOW_SM}`;

/**
 * Slider as StyleX tables. Official New York: radix-ui Slider;
 * thumbs follow value/defaultValue length, else [min, max].
 */
const root = stylex.create({
  on: {
    position: "relative",
    display: "flex",
    width: {
      default: "100%",
      '[data-orientation="vertical"]': "auto",
    },
    height: {
      default: null,
      '[data-orientation="vertical"]': "100%",
    },
    minHeight: {
      default: null,
      '[data-orientation="vertical"]': "11rem",
    },
    alignItems: "center",
    flexDirection: {
      default: "row",
      '[data-orientation="vertical"]': "column",
    },
    userSelect: "none",
    touchAction: "none",
    boxSizing: "border-box",
    opacity: {
      default: 1,
      "[data-disabled]": 0.5,
    },
  },
});

const track = stylex.create({
  on: {
    position: "relative",
    flexGrow: 1,
    overflow: "hidden",
    borderRadius: "9999px",
    backgroundColor: tokens["--muted"],
    boxSizing: "border-box",
    height: {
      default: null,
      '[data-orientation="horizontal"]': "0.375rem",
      '[data-orientation="vertical"]': "100%",
    },
    width: {
      default: null,
      '[data-orientation="horizontal"]': "100%",
      '[data-orientation="vertical"]': "0.375rem",
    },
  },
});

const range = stylex.create({
  on: {
    position: "absolute",
    backgroundColor: tokens["--primary"],
    height: {
      default: null,
      '[data-orientation="horizontal"]': "100%",
    },
    width: {
      default: null,
      '[data-orientation="vertical"]': "100%",
    },
  },
});

const thumb = stylex.create({
  on: {
    display: "block",
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
    boxSizing: "border-box",
    borderRadius: "9999px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--primary"],
    backgroundColor: "oklch(1 0 0)",
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outline: {
      default: null,
      ":focus-visible": "2px solid transparent",
    },
    outlineOffset: {
      default: null,
      ":focus-visible": "2px",
    },
    boxShadow: {
      default: SHADOW_SM,
      ":hover": RING4_AND_SHADOW,
      ":focus-visible": RING4_AND_SHADOW,
    },
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

export type SliderProps = ComponentProps<typeof SliderPrimitive.Root>;

export function Slider({
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderProps) {
  const values = useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      {...props}
      {...stylex.props(root.on)}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        {...stylex.props(track.on)}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          {...stylex.props(range.on)}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          {...stylex.props(thumb.on)}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export const sliderRoot = root;
export const sliderTrack = track;
export const sliderRange = range;
export const sliderThumb = thumb;
