import * as stylex from "@stylexjs/stylex";
import { Progress as ProgressPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

/** Official `bg-primary/20` — color-mix in oklab of --primary at 20%. */
const MIX_PRIMARY_20 =
  "color-mix(in oklab, var(--primary) 20%, transparent)";

/**
 * Root: relative h-2 w-full overflow-hidden rounded-full bg-primary/20
 * Indicator: h-full w-full flex-1 bg-primary transition-all
 * Value via transform translateX(-(100 - value)%)
 */
const root = stylex.create({
  base: {
    position: "relative",
    height: "0.5rem",
    width: "100%",
    overflow: "hidden",
    borderRadius: "9999px",
    backgroundColor: MIX_PRIMARY_20,
  },
});

const indicator = stylex.create({
  base: {
    height: "100%",
    width: "100%",
    flexGrow: 1,
    backgroundColor: tokens["--primary"],
    transitionProperty: "all",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

export type ProgressProps = ComponentProps<typeof ProgressPrimitive.Root>;

export function Progress({ value, ...props }: ProgressProps) {
  const sxIndicator = stylex.props(indicator.base);

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value}
      {...props}
      {...stylex.props(root.base)}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        {...sxIndicator}
        style={{
          ...sxIndicator.style,
          transform: `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export const progressRoot = root;
export const progressIndicator = indicator;
