import * as stylex from "@stylexjs/stylex";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

/**
 * Tooltip family as StyleX tables.
 * Official New York content is bg-foreground / text-background, not popover.
 * Arrow is a 2.5 (0.625rem) square rotated 45deg (Tailwind size-2.5 + rotate-45).
 */
const content = stylex.create({
  root: {
    zIndex: 50,
    width: "fit-content",
    transformOrigin: "var(--radix-tooltip-content-transform-origin)",
    borderRadius: tokens["--radius-md"],
    backgroundColor: tokens["--foreground"],
    paddingInline: "0.75rem",
    paddingBlock: "0.375rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    textWrap: "balance",
    color: tokens["--background"],
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
});

const arrow = stylex.create({
  root: {
    zIndex: 50,
    width: "0.625rem",
    height: "0.625rem",
    transform: "translateY(calc(-50% - 2px)) rotate(45deg)",
    borderRadius: "2px",
    backgroundColor: tokens["--foreground"],
    fill: tokens["--foreground"],
  },
});

export type TooltipProviderProps = ComponentProps<
  typeof TooltipPrimitive.Provider
>;
export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root>;
export type TooltipTriggerProps = ComponentProps<
  typeof TooltipPrimitive.Trigger
>;
export type TooltipContentProps = ComponentProps<
  typeof TooltipPrimitive.Content
>;

export function TooltipProvider({
  delayDuration = 0,
  ...props
}: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

export function Tooltip({ ...props }: TooltipProps) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

export function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: TooltipContentProps) {
  const sx = stylex.props(content.root);
  const arrowSx = stylex.props(arrow.root);
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={sx.style}
      >
        {children}
        <TooltipPrimitive.Arrow
          className={arrowSx.className}
          style={arrowSx.style}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export const tooltipContent = content;
export const tooltipArrow = arrow;
