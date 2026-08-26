import * as stylex from "@stylexjs/stylex";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const RING = `0 0 0 3px ${MIX_RING_50}`;

/**
 * Scroll Area family as StyleX tables. Official New York: radix-ui ScrollArea.
 * Root is `relative`; StyleX also fills a same-sized parent (official size
 * comes from caller className). Viewport is size-full + inherited radius.
 */
const root = stylex.create({
  base: {
    position: "relative",
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
  },
});

const viewport = stylex.create({
  base: {
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    boxSizing: "border-box",
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outlineStyle: "none",
    outlineWidth: {
      default: null,
      ":focus-visible": "1px",
    },
    boxShadow: {
      default: null,
      ":focus-visible": RING,
    },
  },
});

const scrollbar = stylex.create({
  base: {
    display: "flex",
    touchAction: "none",
    padding: "1px",
    userSelect: "none",
    boxSizing: "border-box",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  vertical: {
    height: "100%",
    width: "0.625rem",
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderLeftColor: "transparent",
  },
  horizontal: {
    height: "0.625rem",
    flexDirection: "column",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: "transparent",
  },
});

const thumb = stylex.create({
  base: {
    position: "relative",
    flexGrow: 1,
    borderRadius: "9999px",
    backgroundColor: tokens["--border"],
  },
});

export type ScrollAreaProps = ComponentProps<typeof ScrollAreaPrimitive.Root>;
export type ScrollBarProps = ComponentProps<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

export function ScrollArea({ children, ...props }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      {...props}
      {...stylex.props(root.base)}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        {...stylex.props(viewport.base)}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

export function ScrollBar({
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...props}
      {...stylex.props(
        scrollbar.base,
        orientation === "horizontal" ? scrollbar.horizontal : scrollbar.vertical,
      )}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        {...stylex.props(thumb.base)}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export const scrollAreaRoot = root;
export const scrollAreaViewport = viewport;
export const scrollAreaScrollbar = scrollbar;
export const scrollAreaThumb = thumb;
