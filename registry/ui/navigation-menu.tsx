import * as stylex from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import type { ComponentProps, CSSProperties } from "react";
import { tokens } from "@/lib/tokens.stylex";

const MD = "@media (min-width: 48rem)";
const VIEWPORT_FALSE =
  ':is([data-slot="navigation-menu"][data-viewport="false"] *)';
const CONTENT_DESCENDANT =
  ':is([data-slot="navigation-menu-content"] *)';
const MIX_MUTED_50 = "color-mix(in oklab, var(--muted) 50%, transparent)";
const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
/* Tailwind v4 --shadow (theme.css). Official Viewport / viewport=false Content use `shadow`. */
const SHADOW =
  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
/* Tailwind v4 --shadow-md. Official Indicator diamond uses shadow-md. */
const SHADOW_MD =
  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";

/**
 * Navigation Menu family as StyleX tables.
 * Uses the Radix primitive with the current shadcn/ui Base visual treatment.
 * Root `data-viewport` gates the shared Viewport vs per-item dropdown Content.
 */
const root = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    maxWidth: "max-content",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
  },
});

const list = stylex.create({
  root: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    listStyleType: "none",
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
    margin: 0,
    padding: 0,
    fontFamily: "inherit",
  },
});

const item = stylex.create({
  root: {
    position: "relative",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    fontFamily: "inherit",
  },
});

const trigger = stylex.create({
  root: {
    display: "inline-flex",
    height: "2.25rem",
    width: "max-content",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    appearance: "none",
    margin: 0,
    borderWidth: 0,
    borderStyle: "solid",
    borderRadius: tokens["--radius-lg"],
    backgroundColor: {
      default: "transparent",
      ":hover": tokens["--muted"],
      ":focus": tokens["--muted"],
      '[data-state="open"]': MIX_MUTED_50,
      '[data-state="open"]:hover': tokens["--muted"],
      '[data-state="open"]:focus': tokens["--muted"],
    },
    paddingInline: "0.625rem",
    paddingBlock: "0.375rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    fontFamily: "inherit",
    transitionProperty: "all",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outlineStyle: "none",
    outlineWidth: {
      default: null,
      ":focus-visible": "1px",
    },
    color: {
      default: "inherit",
      ":hover": "inherit",
      ":focus": "inherit",
      '[data-state="open"]': "inherit",
    },
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
    },
    pointerEvents: {
      default: null,
      ":disabled": "none",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
    },
    '[data-state="open"] svg': {
      transform: "rotate(180deg)",
    },
  },
  chevron: {
    position: "relative",
    top: "1px",
    marginLeft: "0.25rem",
    width: "0.75rem",
    height: "0.75rem",
    flexShrink: 0,
    pointerEvents: "none",
    transitionProperty: "transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

const content = stylex.create({
  root: {
    top: {
      default: 0,
      [VIEWPORT_FALSE]: "100%",
    },
    left: 0,
    width: {
      default: "100%",
      [MD]: "auto",
    },
    position: {
      default: null,
      [MD]: "absolute",
    },
    boxSizing: "border-box",
    padding: "0.5rem",
    paddingRight: "0.625rem",
    marginTop: {
      default: null,
      [VIEWPORT_FALSE]: "0.375rem",
    },
    overflow: {
      default: null,
      [VIEWPORT_FALSE]: "hidden",
    },
    borderRadius: {
      default: null,
      [VIEWPORT_FALSE]: tokens["--radius-md"],
    },
    borderWidth: {
      default: 0,
      [VIEWPORT_FALSE]: "1px",
    },
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: {
      default: null,
      [VIEWPORT_FALSE]: tokens["--popover"],
    },
    color: {
      default: "inherit",
      [VIEWPORT_FALSE]: tokens["--popover-foreground"],
    },
    boxShadow: {
      default: "none",
      [VIEWPORT_FALSE]: SHADOW,
    },
    fontFamily: "inherit",
  },
});

const viewportWrap = stylex.create({
  root: {
    position: "absolute",
    top: "100%",
    left: 0,
    isolation: "isolate",
    zIndex: 50,
    display: "flex",
    justifyContent: "center",
  },
});

const viewport = stylex.create({
  root: {
    transformOrigin: "top center",
    position: "relative",
    marginTop: "0.375rem",
    height: "var(--radix-navigation-menu-viewport-height)",
    width: {
      default: "100%",
      [MD]: "var(--radix-navigation-menu-viewport-width)",
    },
    overflow: "hidden",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--popover"],
    color: tokens["--popover-foreground"],
    boxShadow: SHADOW,
    fontFamily: "inherit",
  },
});

const link = stylex.create({
  root: {
    display: "inline-flex",
    height: {
      default: "2.25rem",
      [CONTENT_DESCENDANT]: "auto",
    },
    width: "max-content",
    flexDirection: {
      default: "row",
      [CONTENT_DESCENDANT]: "column",
    },
    alignItems: {
      default: "center",
      [CONTENT_DESCENDANT]: "stretch",
    },
    justifyContent: "center",
    gap: {
      default: "0.5rem",
      [CONTENT_DESCENDANT]: "0.25rem",
    },
    boxSizing: "border-box",
    borderRadius: {
      default: tokens["--radius-lg"],
      [CONTENT_DESCENDANT]: tokens["--radius-md"],
    },
    paddingInline: {
      default: "0.625rem",
      [CONTENT_DESCENDANT]: "0.5rem",
    },
    paddingBlock: {
      default: "0.375rem",
      [CONTENT_DESCENDANT]: "0.5rem",
    },
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    fontFamily: "inherit",
    transitionProperty: "all",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outlineStyle: "none",
    outlineWidth: {
      default: null,
      ":focus-visible": "1px",
    },
    textDecorationLine: "none",
    backgroundColor: {
      default: "transparent",
      ":hover": tokens["--muted"],
      ":focus": tokens["--muted"],
      '[data-active="true"]': MIX_MUTED_50,
      '[data-active="true"]:hover': tokens["--muted"],
      '[data-active="true"]:focus': tokens["--muted"],
    },
    color: {
      default: "inherit",
      ":hover": "inherit",
      ":focus": "inherit",
      '[data-active="true"]': "inherit",
    },
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
    },
    ":not(#\\0) svg": {
      width: "1rem",
      height: "1rem",
      color: tokens["--muted-foreground"],
    },
  },
});

const indicator = stylex.create({
  root: {
    top: "100%",
    zIndex: 1,
    display: "flex",
    height: "0.375rem",
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  diamond: {
    position: "relative",
    top: "60%",
    width: "0.5rem",
    height: "0.5rem",
    transform: "rotate(45deg)",
    borderTopLeftRadius: tokens["--radius-sm"],
    backgroundColor: tokens["--border"],
    boxShadow: SHADOW_MD,
  },
});

function mergeSx(
  sx: { className?: string; style?: CSSProperties },
  className?: string,
  style?: CSSProperties,
) {
  return {
    className: [sx.className, className].filter(Boolean).join(" "),
    style: { ...sx.style, ...style },
  };
}

export type NavigationMenuProps = ComponentProps<
  typeof NavigationMenuPrimitive.Root
> & {
  viewport?: boolean;
};
export type NavigationMenuListProps = ComponentProps<
  typeof NavigationMenuPrimitive.List
>;
export type NavigationMenuItemProps = ComponentProps<
  typeof NavigationMenuPrimitive.Item
>;
export type NavigationMenuTriggerProps = ComponentProps<
  typeof NavigationMenuPrimitive.Trigger
>;
export type NavigationMenuContentProps = ComponentProps<
  typeof NavigationMenuPrimitive.Content
>;
export type NavigationMenuViewportProps = ComponentProps<
  typeof NavigationMenuPrimitive.Viewport
>;
export type NavigationMenuLinkProps = ComponentProps<
  typeof NavigationMenuPrimitive.Link
>;
export type NavigationMenuIndicatorProps = ComponentProps<
  typeof NavigationMenuPrimitive.Indicator
>;

export function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: NavigationMenuProps) {
  const sx = stylex.props(root.root);
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      {...props}
      className={mergeSx(sx, className).className}
      style={mergeSx(sx, className, props.style).style}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

export function NavigationMenuList({
  className,
  ...props
}: NavigationMenuListProps) {
  const sx = stylex.props(list.root);
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      {...props}
      className={mergeSx(sx, className).className}
      style={mergeSx(sx, className, props.style).style}
    />
  );
}

export function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuItemProps) {
  const sx = stylex.props(item.root);
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      {...props}
      className={mergeSx(sx, className).className}
      style={mergeSx(sx, className, props.style).style}
    />
  );
}

export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuTriggerProps) {
  const sx = stylex.props(trigger.root);
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      {...props}
      className={mergeSx(sx, className).className}
      style={mergeSx(sx, className, props.style).style}
    >
      {children}{" "}
      <ChevronDownIcon
        aria-hidden="true"
        {...stylex.props(trigger.chevron)}
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

export function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuContentProps) {
  const sx = stylex.props(content.root);
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      {...props}
      className={mergeSx(sx, className).className}
      style={mergeSx(sx, className, props.style).style}
    />
  );
}

export function NavigationMenuViewport({
  className,
  ...props
}: NavigationMenuViewportProps) {
  const wrap = stylex.props(viewportWrap.root);
  const sx = stylex.props(viewport.root);
  return (
    <div className={wrap.className} style={wrap.style}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        {...props}
        className={mergeSx(sx, className).className}
        style={mergeSx(sx, className, props.style).style}
      />
    </div>
  );
}

export function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuLinkProps) {
  const sx = stylex.props(link.root);
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      {...props}
      className={mergeSx(sx, className).className}
      style={mergeSx(sx, className, props.style).style}
    />
  );
}

export function NavigationMenuIndicator({
  className,
  children,
  ...props
}: NavigationMenuIndicatorProps) {
  const sx = stylex.props(indicator.root);
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      {...props}
      className={mergeSx(sx, className).className}
      style={mergeSx(sx, className, props.style).style}
    >
      {children ?? <div {...stylex.props(indicator.diamond)} />}
    </NavigationMenuPrimitive.Indicator>
  );
}

export const navigationMenuTriggerStyle = trigger;
export const navigationMenuRoot = root;
export const navigationMenuList = list;
export const navigationMenuItem = item;
export const navigationMenuContent = content;
export const navigationMenuViewport = viewport;
export const navigationMenuLink = link;
export const navigationMenuIndicator = indicator;
