import * as stylex from "@stylexjs/stylex";
import { Tabs as TabsPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

const MIX_FOREGROUND_60 =
  "color-mix(in oklab, var(--foreground) 60%, transparent)";
const MIX_INPUT_30 = "color-mix(in oklab, var(--input) 30%, transparent)";
const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
/* Tailwind v4 --shadow-sm (theme.css). Official default-variant active trigger. */
const SHADOW_SM =
  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
const RING_AND_SHADOW = `${RING}, ${SHADOW_SM}`;

/**
 * Tabs family as StyleX tables.
 * Official New York Tabs: radix-ui Tabs; list variants default | line;
 * Root is flex + gap-2, horizontal → flex-col (spacing is gap, not mt-2).
 */
const root = stylex.create({
  on: {
    display: "flex",
    gap: "0.5rem",
    flexDirection: {
      default: "column",
      '[data-orientation="vertical"]': "row",
    },
    fontFamily: "inherit",
  },
});

const list = stylex.create({
  on: {
    display: "inline-flex",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    borderRadius: {
      default: tokens["--radius-lg"],
      '[data-variant="line"]': 0,
    },
    padding: "3px",
    color: tokens["--muted-foreground"],
    height: {
      default: "2.25rem",
      ':is([data-orientation="vertical"] *)': "fit-content",
    },
    flexDirection: {
      default: "row",
      ':is([data-orientation="vertical"] *)': "column",
    },
    fontFamily: "inherit",
  },
});

const listVariants = stylex.create({
  default: {
    backgroundColor: tokens["--muted"],
  },
  line: {
    gap: "0.25rem",
    backgroundColor: "transparent",
  },
});

const trigger = stylex.create({
  on: {
    position: "relative",
    display: "inline-flex",
    height: "calc(100% - 1px)",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    alignItems: "center",
    justifyContent: {
      default: "center",
      ':is([data-orientation="vertical"] *)': "flex-start",
    },
    gap: "0.375rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: {
      default: "transparent",
      ":focus-visible": tokens["--ring"],
      ':is(.dark *)[data-state="active"]': tokens["--input"],
      ':is(.dark *):is([data-variant="line"] *)[data-state="active"]':
        "transparent",
    },
    paddingInline: "0.5rem",
    paddingBlock: "0.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    color: {
      default: MIX_FOREGROUND_60,
      ":hover": tokens["--foreground"],
      ":is(.dark *)": tokens["--muted-foreground"],
      ":is(.dark *):hover": tokens["--foreground"],
      '[data-state="active"]': tokens["--foreground"],
      ':is(.dark *)[data-state="active"]': tokens["--foreground"],
    },
    backgroundColor: {
      default: "transparent",
      '[data-state="active"]': tokens["--background"],
      ':is(.dark *)[data-state="active"]': MIX_INPUT_30,
      ':is([data-variant="line"] *)': "transparent",
      ':is([data-variant="line"] *)[data-state="active"]': "transparent",
      ':is(.dark *):is([data-variant="line"] *)[data-state="active"]':
        "transparent",
    },
    transitionProperty: "all",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    width: {
      default: null,
      ':is([data-orientation="vertical"] *)': "100%",
    },
    outline: {
      default: "none",
      ":focus-visible": "1px solid var(--ring)",
    },
    boxShadow: {
      default: "none",
      ':is([data-variant="default"] *)[data-state="active"]': SHADOW_SM,
      ':is([data-variant="line"] *)[data-state="active"]': "none",
      ":focus-visible": RING,
      ':is([data-variant="default"] *)[data-state="active"]:focus-visible':
        RING_AND_SHADOW,
    },
    pointerEvents: {
      default: null,
      ":disabled": "none",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
    },
    appearance: "none",
    margin: 0,
    backgroundImage: "none",
    fontFamily: "inherit",
    cursor: "pointer",
    "::after": {
      content: '""',
      position: "absolute",
      backgroundColor: tokens["--foreground"],
      opacity: {
        default: 0,
        ':is([data-variant="line"] *)[data-state="active"]': 1,
      },
      transitionProperty: "opacity",
      transitionDuration: "150ms",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      pointerEvents: "none",
      left: {
        default: 0,
        ':is([data-orientation="vertical"] *)': "auto",
      },
      right: {
        default: 0,
        ':is([data-orientation="vertical"] *)': "-0.25rem",
      },
      bottom: {
        default: "-5px",
        ':is([data-orientation="vertical"] *)': 0,
      },
      top: {
        default: null,
        ':is([data-orientation="vertical"] *)': 0,
      },
      height: {
        default: "0.125rem",
        ':is([data-orientation="vertical"] *)': "auto",
      },
      width: {
        default: null,
        ':is([data-orientation="vertical"] *)': "0.125rem",
      },
    },
  },
});

const content = stylex.create({
  on: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    outline: "none",
    fontFamily: "inherit",
  },
});

export type TabsProps = ComponentProps<typeof TabsPrimitive.Root>;
export type TabsListProps = ComponentProps<typeof TabsPrimitive.List> & {
  variant?: keyof typeof listVariants;
};
export type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger>;
export type TabsContentProps = ComponentProps<typeof TabsPrimitive.Content>;

export function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsProps) {
  const sx = stylex.props(root.on);
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function TabsList({
  className,
  variant = "default",
  ...props
}: TabsListProps) {
  const sx = stylex.props(list.on, listVariants[variant]);
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  const sx = stylex.props(trigger.on);
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function TabsContent({ className, ...props }: TabsContentProps) {
  const sx = stylex.props(content.on);
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const tabsRoot = root;
export const tabsList = list;
export const tabsListVariants = listVariants;
export const tabsTrigger = trigger;
export const tabsContent = content;
