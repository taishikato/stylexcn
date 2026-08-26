import * as stylex from "@stylexjs/stylex";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

const MIX_INPUT_30 = "color-mix(in oklab, var(--input) 30%, transparent)";
const MIX_INPUT_50 = "color-mix(in oklab, var(--input) 50%, transparent)";
const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
const MIX_DESTRUCTIVE_40 =
  "color-mix(in oklab, var(--destructive) 40%, transparent)";
const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
/* Tailwind v4 --shadow-md (theme.css). Official SelectContent uses shadow-md. */
const SHADOW_MD =
  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
const RING_DESTRUCTIVE = `0 0 0 3px ${MIX_DESTRUCTIVE_20}`;
const RING_DESTRUCTIVE_DARK = `0 0 0 3px ${MIX_DESTRUCTIVE_40}`;
/* Tailwind v4 paints ring before --tw-shadow (first layer is on top). */
const RING_AND_SHADOW = `${RING}, ${SHADOW_XS}`;
const RING_DESTRUCTIVE_AND_SHADOW = `${RING_DESTRUCTIVE}, ${SHADOW_XS}`;
const RING_DESTRUCTIVE_DARK_AND_SHADOW = `${RING_DESTRUCTIVE_DARK}, ${SHADOW_XS}`;

/**
 * Select family as StyleX tables.
 * Official New York SelectTrigger sizes are default (h-9) and sm (h-8).
 */
const triggerSizes = stylex.create({
  default: {
    height: "2.25rem",
  },
  sm: {
    height: "2rem",
  },
});

const trigger = stylex.create({
  root: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: {
      default: tokens["--input"],
      ":focus-visible": tokens["--ring"],
      '[aria-invalid="true"]': tokens["--destructive"],
      '[aria-invalid="true"]:focus-visible': tokens["--destructive"],
    },
    backgroundColor: {
      default: "transparent",
      ":is(.dark *)": MIX_INPUT_30,
      ":is(.dark *):hover": MIX_INPUT_50,
    },
    paddingInline: "0.75rem",
    paddingBlock: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    whiteSpace: "nowrap",
    boxShadow: {
      default: SHADOW_XS,
      ":focus-visible": RING_AND_SHADOW,
      /* Official `aria-invalid:ring-*` only sets ring color; width is
         `focus-visible:ring-[3px]`. Resting invalid is border + shadow-xs. */
      '[aria-invalid="true"]': SHADOW_XS,
      '[aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE_AND_SHADOW,
      ':is(.dark *)[aria-invalid="true"]:focus-visible':
        RING_DESTRUCTIVE_DARK_AND_SHADOW,
    },
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outline: "none",
    appearance: "none",
    margin: 0,
    backgroundImage: "none",
    fontFamily: "inherit",
    color: {
      default: "inherit",
      "[data-placeholder]": tokens["--muted-foreground"],
    },
    cursor: {
      default: null,
      ":disabled": "not-allowed",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
    },
  },
  value: {
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    WebkitLineClamp: 1,
  },
  chevron: {
    pointerEvents: "none",
    flexShrink: 0,
    width: "1rem",
    height: "1rem",
    opacity: 0.5,
    color: tokens["--muted-foreground"],
  },
});

const content = stylex.create({
  root: {
    position: "relative",
    zIndex: 50,
    maxHeight: "var(--radix-select-content-available-height)",
    minWidth: "8rem",
    transformOrigin: "var(--radix-select-content-transform-origin)",
    overflowX: "hidden",
    overflowY: "auto",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--popover"],
    color: tokens["--popover-foreground"],
    boxShadow: SHADOW_MD,
    fontFamily: "inherit",
  },
  popper: {
    transform: {
      default: null,
      '[data-side="bottom"]': "translateY(0.25rem)",
      '[data-side="left"]': "translateX(-0.25rem)",
      '[data-side="right"]': "translateX(0.25rem)",
      '[data-side="top"]': "translateY(-0.25rem)",
    },
  },
  viewport: {
    padding: "0.25rem",
  },
  viewportPopper: {
    height: "var(--radix-select-trigger-height)",
    width: "100%",
    minWidth: "var(--radix-select-trigger-width)",
    scrollMarginBlock: "0.25rem",
  },
});

const item = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    cursor: "default",
    alignItems: "center",
    gap: "0.5rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-sm"],
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    paddingRight: "2rem",
    paddingLeft: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    outline: "none",
    userSelect: "none",
    fontFamily: "inherit",
    backgroundColor: {
      default: "transparent",
      ":focus": tokens["--accent"],
    },
    color: {
      default: "inherit",
      ":focus": tokens["--accent-foreground"],
    },
    pointerEvents: {
      default: null,
      "[data-disabled]": "none",
    },
    opacity: {
      default: 1,
      "[data-disabled]": 0.5,
    },
  },
  indicator: {
    position: "absolute",
    right: "0.5rem",
    display: "flex",
    width: "0.875rem",
    height: "0.875rem",
    alignItems: "center",
    justifyContent: "center",
  },
  check: {
    pointerEvents: "none",
    flexShrink: 0,
    width: "1rem",
    height: "1rem",
    color: tokens["--muted-foreground"],
  },
});

const label = stylex.create({
  root: {
    paddingInline: "0.5rem",
    paddingBlock: "0.375rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

const separator = stylex.create({
  root: {
    pointerEvents: "none",
    marginInline: "-0.25rem",
    marginBlock: "0.25rem",
    height: "1px",
    backgroundColor: tokens["--border"],
    borderWidth: 0,
  },
});

const scrollButton = stylex.create({
  root: {
    display: "flex",
    cursor: "default",
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: "0.25rem",
  },
  icon: {
    width: "1rem",
    height: "1rem",
    pointerEvents: "none",
    flexShrink: 0,
  },
});

export type SelectProps = ComponentProps<typeof SelectPrimitive.Root>;
export type SelectGroupProps = ComponentProps<typeof SelectPrimitive.Group>;
export type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>;
export type SelectTriggerProps = ComponentProps<
  typeof SelectPrimitive.Trigger
> & {
  size?: keyof typeof triggerSizes;
};
export type SelectContentProps = ComponentProps<typeof SelectPrimitive.Content>;
export type SelectLabelProps = ComponentProps<typeof SelectPrimitive.Label>;
export type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;
export type SelectSeparatorProps = ComponentProps<
  typeof SelectPrimitive.Separator
>;
export type SelectScrollUpButtonProps = ComponentProps<
  typeof SelectPrimitive.ScrollUpButton
>;
export type SelectScrollDownButtonProps = ComponentProps<
  typeof SelectPrimitive.ScrollDownButton
>;

export function Select({ ...props }: SelectProps) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

export function SelectGroup({ ...props }: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

export function SelectValue({ className, ...props }: SelectValueProps) {
  const sx = stylex.props(trigger.value);
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectTriggerProps) {
  const sx = stylex.props(trigger.root, triggerSizes[size]);
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon {...stylex.props(trigger.chevron)} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: SelectContentProps) {
  const sx = stylex.props(content.root, position === "popper" && content.popper);
  const viewportSx = stylex.props(
    content.viewport,
    position === "popper" && content.viewportPopper,
  );
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        align={align}
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={sx.style}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={viewportSx.className}
          style={viewportSx.style}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectLabel({ className, ...props }: SelectLabelProps) {
  const sx = stylex.props(label.root);
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function SelectItem({ className, children, ...props }: SelectItemProps) {
  const sx = stylex.props(item.root);
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      <span data-slot="select-item-indicator" {...stylex.props(item.indicator)}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon {...stylex.props(item.check)} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  const sx = stylex.props(separator.root);
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function SelectScrollUpButton({
  className,
  ...props
}: SelectScrollUpButtonProps) {
  const sx = stylex.props(scrollButton.root);
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      <ChevronUpIcon {...stylex.props(scrollButton.icon)} />
    </SelectPrimitive.ScrollUpButton>
  );
}

export function SelectScrollDownButton({
  className,
  ...props
}: SelectScrollDownButtonProps) {
  const sx = stylex.props(scrollButton.root);
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      <ChevronDownIcon {...stylex.props(scrollButton.icon)} />
    </SelectPrimitive.ScrollDownButton>
  );
}

export const selectTrigger = trigger;
export const selectTriggerSizes = triggerSizes;
export const selectContent = content;
export const selectItem = item;
export const selectLabel = label;
export const selectSeparator = separator;
export const selectScrollButton = scrollButton;
