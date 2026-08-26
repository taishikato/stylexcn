import * as stylex from "@stylexjs/stylex";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

/**
 * Tailwind `animate-pulse`: 2s cubic-bezier(0.4, 0, 0.6, 1) infinite,
 * opacity 1 → 0.5 at 50%. Visual-diff disables CSS animations on both kits.
 */
const pulse = stylex.keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0.5 },
  "100%": { opacity: 1 },
});

const root = stylex.create({
  base: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    backgroundColor: tokens["--accent"],
    animationName: pulse,
    animationDuration: "2s",
    animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
    animationIterationCount: "infinite",
  },
});

/**
 * Official size comes from caller className. StyleX fills a same-sized parent.
 * `rounded-md` is the official default; `rounded-full` is a caller override.
 */
const radius = stylex.create({
  md: {
    borderRadius: tokens["--radius-md"],
  },
  full: {
    borderRadius: "9999px",
  },
});

export type SkeletonRadius = keyof typeof radius;

export type SkeletonProps = ComponentProps<"div"> & {
  radius?: SkeletonRadius;
};

export function Skeleton({ radius: radiusKey = "md", ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      {...props}
      {...stylex.props(root.base, radius[radiusKey])}
    />
  );
}

export const skeleton = root;
export const skeletonRadius = radius;
