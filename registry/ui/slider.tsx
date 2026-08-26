import * as stylex from "@stylexjs/stylex";
import { Slider as SliderPrimitive } from "radix-ui";
import { useMemo, type ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
/* Tailwind v4 `shadow-sm` plus the four empty inset/ring slots from preflight. */
const SHADOW_SM_LAYERS =
  "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a";
/* Official: hover:ring-4 / focus-visible:ring-4 with ring-ring/50. */
const SHADOW_SM_RING4 =
  `0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 0 4px ${MIX_RING_50}, 0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a`;

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
    backgroundColor: "#fff",
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outlineStyle: {
      default: null,
      ":focus-visible": "none",
    },
    boxShadow: {
      default: SHADOW_SM_LAYERS,
      ":hover": SHADOW_SM_RING4,
      ":focus-visible": SHADOW_SM_RING4,
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
