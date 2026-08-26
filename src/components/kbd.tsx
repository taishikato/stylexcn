import * as stylex from "@stylexjs/stylex";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

/** Official `bg-background/20` inside tooltip content. */
const MIX_BACKGROUND_20 =
  "color-mix(in oklab, var(--background) 20%, transparent)";
/** Official `dark:` `bg-background/10` inside tooltip content. */
const MIX_BACKGROUND_10 =
  "color-mix(in oklab, var(--background) 10%, transparent)";

/**
 * Official New York Kbd:
 * pointer-events-none inline-flex h-5 w-fit min-w-5 items-center
 * justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs
 * font-medium text-muted-foreground select-none
 * [&_svg:not([class*='size-'])]:size-3
 * [[data-slot=tooltip-content]_&]:bg-background/20
 * [[data-slot=tooltip-content]_&]:text-background
 * dark:[[data-slot=tooltip-content]_&]:bg-background/10
 */
const root = stylex.create({
  base: {
    pointerEvents: "none",
    display: "inline-flex",
    height: "1.25rem",
    width: "fit-content",
    minWidth: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-sm"],
    backgroundColor: {
      default: tokens["--muted"],
      ':is([data-slot="tooltip-content"] *)': MIX_BACKGROUND_20,
      ':is(.dark [data-slot="tooltip-content"] *)': MIX_BACKGROUND_10,
    },
    paddingInline: "0.25rem",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: 500,
    color: {
      default: tokens["--muted-foreground"],
      ':is([data-slot="tooltip-content"] *)': tokens["--background"],
    },
    userSelect: "none",
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "0.75rem",
      height: "0.75rem",
    },
  },
});

/**
 * Official KbdGroup: inline-flex items-center gap-1 on a native kbd.
 */
const group = stylex.create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
  },
});

export type KbdProps = ComponentProps<"kbd">;
export type KbdGroupProps = ComponentProps<"div">;

export function Kbd(props: KbdProps) {
  return <kbd data-slot="kbd" {...props} {...stylex.props(root.base)} />;
}

export function KbdGroup(props: KbdGroupProps) {
  return (
    <kbd data-slot="kbd-group" {...props} {...stylex.props(group.base)} />
  );
}

export const kbd = root;
export const kbdGroup = group;
