import * as stylex from "@stylexjs/stylex";
import { Separator as SeparatorPrimitive, Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";
import { separatorRoot, type SeparatorProps } from "./separator";

const MIX_MUTED_50 = "color-mix(in oklab, var(--muted) 50%, transparent)";
const MIX_ACCENT_50 = "color-mix(in oklab, var(--accent) 50%, transparent)";
const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const RING = `0 0 0 3px ${MIX_RING_50}`;

/**
 * Item family as StyleX tables. Official shadcn/ui: flex wrap row with
 * variant (default / outline / muted) and size (default / sm), plus media,
 * content, title, description, actions, group, separator, header, footer.
 * ItemSeparator composes separatorRoot (same table as Separator).
 */
const group = stylex.create({
  on: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "inherit",
  },
});

const itemSeparator = stylex.create({
  on: {
    marginBlock: 0,
  },
});

const root = stylex.create({
  base: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: {
      default: "transparent",
      ":focus-visible": tokens["--ring"],
    },
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    transitionDuration: "100ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outline: "none",
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
    },
    boxSizing: "border-box",
    fontFamily: "inherit",
    backgroundColor: {
      default: null,
      ":is(a):hover": MIX_ACCENT_50,
    },
    ":has([data-slot=item-description]) [data-slot=item-media]": {
      transform: "translateY(0.125rem)",
      alignSelf: "flex-start",
    },
  },
});

const variants = stylex.create({
  default: {
    backgroundColor: {
      default: "transparent",
      ":is(a):hover": MIX_ACCENT_50,
    },
  },
  outline: {
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
    },
    backgroundColor: {
      default: null,
      ":is(a):hover": MIX_ACCENT_50,
    },
  },
  muted: {
    backgroundColor: {
      default: MIX_MUTED_50,
      ":is(a):hover": MIX_ACCENT_50,
    },
  },
});

const sizes = stylex.create({
  default: {
    gap: "1rem",
    padding: "1rem",
  },
  sm: {
    gap: "0.625rem",
    paddingInline: "1rem",
    paddingBlock: "0.75rem",
  },
});

const media = stylex.create({
  base: {
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "inherit",
    ":not(#\\0) svg": {
      pointerEvents: "none",
    },
  },
});

const mediaVariants = stylex.create({
  default: {
    backgroundColor: "transparent",
  },
  icon: {
    width: "2rem",
    height: "2rem",
    borderRadius: tokens["--radius-sm"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--muted"],
    boxSizing: "border-box",
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
    },
  },
  image: {
    width: "2.5rem",
    height: "2.5rem",
    overflow: "hidden",
    borderRadius: tokens["--radius-sm"],
    ":not(#\\0) img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
});

const content = stylex.create({
  on: {
    display: "flex",
    flexGrow: {
      default: 1,
      ':is([data-slot="item-content"] + *)': 0,
    },
    flexShrink: {
      default: 1,
      ':is([data-slot="item-content"] + *)': 0,
    },
    flexBasis: {
      default: "0%",
      ':is([data-slot="item-content"] + *)': "auto",
    },
    flexDirection: "column",
    gap: "0.25rem",
    fontFamily: "inherit",
  },
});

const title = stylex.create({
  on: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: 1.375,
    fontWeight: 500,
    fontFamily: "inherit",
  },
});

const description = stylex.create({
  on: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    fontWeight: 400,
    textWrap: "balance",
    color: {
      default: tokens["--muted-foreground"],
      ":not(#\\0) > a:hover": tokens["--primary"],
    },
    fontFamily: "inherit",
    margin: 0,
    ":not(#\\0) > a": {
      textDecorationLine: "underline",
      textUnderlineOffset: "4px",
    },
  },
});

const actions = stylex.create({
  on: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontFamily: "inherit",
  },
});

const headerFooter = stylex.create({
  on: {
    display: "flex",
    flexBasis: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
    fontFamily: "inherit",
  },
});

export type ItemVariant = keyof typeof variants;
export type ItemSize = keyof typeof sizes;
export type ItemMediaVariant = keyof typeof mediaVariants;

export type ItemProps = ComponentProps<"div"> & {
  variant?: ItemVariant;
  size?: ItemSize;
  asChild?: boolean;
};
export type ItemMediaProps = ComponentProps<"div"> & {
  variant?: ItemMediaVariant;
};
export type ItemContentProps = ComponentProps<"div">;
export type ItemTitleProps = ComponentProps<"div">;
export type ItemDescriptionProps = ComponentProps<"p">;
export type ItemActionsProps = ComponentProps<"div">;
export type ItemGroupProps = ComponentProps<"div">;
export type ItemSeparatorProps = SeparatorProps;
export type ItemHeaderProps = ComponentProps<"div">;
export type ItemFooterProps = ComponentProps<"div">;

export function ItemGroup(props: ItemGroupProps) {
  return (
    <div
      role="list"
      data-slot="item-group"
      {...props}
      {...stylex.props(group.on)}
    />
  );
}

export function ItemSeparator({
  orientation = "horizontal",
  decorative = true,
  ...props
}: ItemSeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="item-separator"
      decorative={decorative}
      orientation={orientation}
      {...props}
      {...stylex.props(separatorRoot.base, itemSeparator.on)}
    />
  );
}

export function Item({
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ItemProps) {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      {...props}
      {...stylex.props(root.base, variants[variant], sizes[size])}
    />
  );
}

export function ItemMedia({
  variant = "default",
  ...props
}: ItemMediaProps) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      {...props}
      {...stylex.props(media.base, mediaVariants[variant])}
    />
  );
}

export function ItemContent(props: ItemContentProps) {
  return (
    <div
      data-slot="item-content"
      {...props}
      {...stylex.props(content.on)}
    />
  );
}

export function ItemTitle(props: ItemTitleProps) {
  return (
    <div data-slot="item-title" {...props} {...stylex.props(title.on)} />
  );
}

export function ItemDescription(props: ItemDescriptionProps) {
  return (
    <p
      data-slot="item-description"
      {...props}
      {...stylex.props(description.on)}
    />
  );
}

export function ItemActions(props: ItemActionsProps) {
  return (
    <div
      data-slot="item-actions"
      {...props}
      {...stylex.props(actions.on)}
    />
  );
}

export function ItemHeader(props: ItemHeaderProps) {
  return (
    <div
      data-slot="item-header"
      {...props}
      {...stylex.props(headerFooter.on)}
    />
  );
}

export function ItemFooter(props: ItemFooterProps) {
  return (
    <div
      data-slot="item-footer"
      {...props}
      {...stylex.props(headerFooter.on)}
    />
  );
}

export const itemGroup = group;
export const itemSeparatorStyles = itemSeparator;
export const itemRoot = root;
export const itemVariants = variants;
export const itemSizes = sizes;
export const itemMedia = media;
export const itemMediaVariants = mediaVariants;
export const itemContent = content;
export const itemTitle = title;
export const itemDescription = description;
export const itemActions = actions;
export const itemHeaderFooter = headerFooter;
