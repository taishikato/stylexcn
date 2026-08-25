import * as stylex from "@stylexjs/stylex";
import { Popover as PopoverPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

/* Tailwind v4 --shadow-md (theme.css). Official PopoverContent uses shadow-md. */
const SHADOW_MD =
  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";

/**
 * Popover family as StyleX tables.
 * Official New York content is w-72 / rounded-md / p-4 / shadow-md.
 * Default align is center; default sideOffset is 4.
 */
const content = stylex.create({
  root: {
    zIndex: 50,
    width: "18rem",
    transformOrigin: "var(--radix-popover-content-transform-origin)",
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

const header = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontFamily: "inherit",
  },
});

const title = stylex.create({
  root: {
    fontWeight: 500,
    fontFamily: "inherit",
  },
});

const description = stylex.create({
  root: {
    margin: 0,
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

export type PopoverProps = ComponentProps<typeof PopoverPrimitive.Root>;
export type PopoverTriggerProps = ComponentProps<
  typeof PopoverPrimitive.Trigger
>;
export type PopoverContentProps = ComponentProps<
  typeof PopoverPrimitive.Content
>;
export type PopoverAnchorProps = ComponentProps<typeof PopoverPrimitive.Anchor>;
export type PopoverHeaderProps = ComponentProps<"div">;
export type PopoverTitleProps = ComponentProps<"h2">;
export type PopoverDescriptionProps = ComponentProps<"p">;

export function Popover({ ...props }: PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

export function PopoverTrigger({ ...props }: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

export function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  const sx = stylex.props(content.root);
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={sx.style}
      />
    </PopoverPrimitive.Portal>
  );
}

export function PopoverAnchor({ ...props }: PopoverAnchorProps) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export function PopoverHeader({ className, ...props }: PopoverHeaderProps) {
  const sx = stylex.props(header.root);
  return (
    <div
      data-slot="popover-header"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function PopoverTitle({ className, ...props }: PopoverTitleProps) {
  const sx = stylex.props(title.root);
  return (
    <div
      data-slot="popover-title"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function PopoverDescription({
  className,
  ...props
}: PopoverDescriptionProps) {
  const sx = stylex.props(description.root);
  return (
    <p
      data-slot="popover-description"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const popoverContent = content;
export const popoverHeader = header;
export const popoverTitle = title;
export const popoverDescription = description;
