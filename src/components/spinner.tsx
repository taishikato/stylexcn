import * as stylex from "@stylexjs/stylex";
import { Loader2Icon } from "lucide-react";
import type { ComponentProps } from "react";

/**
 * Tailwind `animate-spin`: 1s linear infinite, rotate to 360deg.
 * Visual-diff disables CSS animations on both kits.
 */
const spin = stylex.keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const root = stylex.create({
  base: {
    animationName: spin,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});

/**
 * Official size comes from caller `size-*` className. StyleX uses a keyed
 * table matching the registry size example: size-3 / size-4 / size-6 / size-8.
 */
const sizes = stylex.create({
  "3": {
    width: "0.75rem",
    height: "0.75rem",
  },
  "4": {
    width: "1rem",
    height: "1rem",
  },
  "6": {
    width: "1.5rem",
    height: "1.5rem",
  },
  "8": {
    width: "2rem",
    height: "2rem",
  },
});

export type SpinnerSize = keyof typeof sizes;

export type SpinnerProps = Omit<ComponentProps<typeof Loader2Icon>, "size"> & {
  size?: SpinnerSize;
};

export function Spinner({ size = "4", ...props }: SpinnerProps) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      {...props}
      {...stylex.props(root.base, sizes[size])}
    />
  );
}

export const spinner = root;
export const spinnerSizes = sizes;
