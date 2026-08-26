import * as stylex from "@stylexjs/stylex";
import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const RING = `0 0 0 3px ${MIX_RING_50}`;

/**
 * Accordion family as StyleX tables. Official New York: radix-ui Accordion;
 * item border-b last:border-b-0; trigger py-4 text-sm font-medium.
 */
const header = stylex.create({
  on: {
    display: "flex",
    margin: 0,
    fontSize: "inherit",
    fontWeight: "inherit",
    fontFamily: "inherit",
  },
});

const item = stylex.create({
  on: {
    borderBottomWidth: {
      default: "1px",
      ":last-child": 0,
    },
    borderBottomStyle: "solid",
    borderBottomColor: tokens["--border"],
  },
});

const trigger = stylex.create({
  on: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    paddingBlock: "1rem",
    paddingInline: 0,
    textAlign: "left",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    fontFamily: "inherit",
    color: "inherit",
    backgroundColor: "transparent",
    backgroundImage: "none",
    appearance: "none",
    margin: 0,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
    },
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
    },
    outline: "none",
    textDecorationLine: {
      default: "none",
      ":hover": "underline",
    },
    transitionProperty: "all",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    pointerEvents: {
      default: null,
      ":disabled": "none",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
    },
  },
});

const chevron = stylex.create({
  on: {
    pointerEvents: "none",
    flexShrink: 0,
    width: "1rem",
    height: "1rem",
    color: tokens["--muted-foreground"],
    transform: {
      default: "translateY(0.125rem)",
      ':is([data-slot="accordion-trigger"][data-state="open"] > svg)':
        "translateY(0.125rem) rotate(180deg)",
    },
    transitionProperty: "transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

const content = stylex.create({
  on: {
    overflow: "hidden",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontFamily: "inherit",
  },
});

const contentInner = stylex.create({
  on: {
    paddingTop: 0,
    paddingBottom: "1rem",
  },
});

export type AccordionProps = ComponentProps<typeof AccordionPrimitive.Root>;

export function Accordion(props: AccordionProps) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

export type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;

export function AccordionItem(props: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      {...props}
      {...stylex.props(item.on)}
    />
  );
}

export type AccordionTriggerProps = ComponentProps<
  typeof AccordionPrimitive.Trigger
>;

export function AccordionTrigger({
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header {...stylex.props(header.on)}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        {...props}
        {...stylex.props(trigger.on)}
      >
        {children}
        <ChevronDownIcon {...stylex.props(chevron.on)} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export type AccordionContentProps = ComponentProps<
  typeof AccordionPrimitive.Content
>;

export function AccordionContent({
  children,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      {...props}
      {...stylex.props(content.on)}
    >
      <div {...stylex.props(contentInner.on)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export const accordionHeader = header;
export const accordionItem = item;
export const accordionTrigger = trigger;
export const accordionChevron = chevron;
export const accordionContent = content;
export const accordionContentInner = contentInner;
