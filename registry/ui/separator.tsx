import * as stylex from "@stylexjs/stylex";
import { Separator as SeparatorPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

/**
 * Size maps keyed by Radix `data-orientation`. Official:
 * shrink-0 bg-border
 * data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full
 * data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px
 */
const root = stylex.create({
  base: {
    flexShrink: 0,
    backgroundColor: tokens["--border"],
    height: {
      default: null,
      '[data-orientation="horizontal"]': "1px",
      '[data-orientation="vertical"]': "100%",
    },
    width: {
      default: null,
      '[data-orientation="horizontal"]': "100%",
      '[data-orientation="vertical"]': "1px",
    },
  },
});

export type SeparatorProps = ComponentProps<typeof SeparatorPrimitive.Root>;

export function Separator({
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      {...props}
      {...stylex.props(root.base)}
    />
  );
}

export const separatorRoot = root;
