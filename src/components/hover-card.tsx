import * as stylex from "@stylexjs/stylex";
import { HoverCard as HoverCardPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

/* Tailwind v4 --shadow-md (theme.css). Official HoverCardContent uses shadow-md. */
const SHADOW_MD =
  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";

/**
 * Hover Card family as StyleX tables.
 * Official New York content is w-64 / rounded-md / p-4 / shadow-md.
 * Default align is center; default sideOffset is 4.
 */
const content = stylex.create({
  root: {
    zIndex: 50,
    width: "16rem",
    transformOrigin: "var(--radix-hover-card-content-transform-origin)",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--popover"],
    padding: "1rem",
    color: tokens["--popover-foreground"],
    boxShadow: SHADOW_MD,
    outline: "none",
    fontFamily: "inherit",
  },
});

export type HoverCardProps = ComponentProps<typeof HoverCardPrimitive.Root>;
export type HoverCardTriggerProps = ComponentProps<
  typeof HoverCardPrimitive.Trigger
>;
export type HoverCardContentProps = ComponentProps<
  typeof HoverCardPrimitive.Content
>;

export function HoverCard({ ...props }: HoverCardProps) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

export function HoverCardTrigger({ ...props }: HoverCardTriggerProps) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

export function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: HoverCardContentProps) {
  const sx = stylex.props(content.root);
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={sx.style}
      />
    </HoverCardPrimitive.Portal>
  );
}

export const hoverCardContent = content;
