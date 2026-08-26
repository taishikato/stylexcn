import * as stylex from "@stylexjs/stylex";
import { Label as LabelPrimitive } from "radix-ui";
import type { ComponentProps } from "react";

/**
 * Group-disabled / peer-disabled styles as a StyleX table.
 * Official New York Label has no variants; illegal keys fail at compile time.
 */
const disabled = stylex.create({
  on: {
    pointerEvents: {
      default: null,
      ":is(.group[data-disabled=true] *)": "none",
    },
    opacity: {
      default: 1,
      ":is(.group[data-disabled=true] *)": 0.5,
      ":is(.peer:disabled ~ *)": 0.5,
    },
    cursor: {
      default: null,
      ":is(.peer:disabled ~ *)": "not-allowed",
    },
  },
});

const base = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: 1,
    fontWeight: 500,
    userSelect: "none",
    fontFamily: "inherit",
  },
});

export type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

export function Label(props: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      {...props}
      {...stylex.props(base.root, disabled.on)}
    />
  );
}

export const labelBase = base;
export const labelDisabled = disabled;
