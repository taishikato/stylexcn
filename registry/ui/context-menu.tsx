import * as stylex from "@stylexjs/stylex";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

const MIX_DESTRUCTIVE_10 =
  "color-mix(in oklab, var(--destructive) 10%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
/* Tailwind v4 --shadow-md (theme.css). Official ContextMenuContent uses shadow-md. */
const SHADOW_MD =
  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
/* Tailwind v4 --shadow-lg. Official ContextMenuSubContent uses shadow-lg. */
const SHADOW_LG =
  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";

/**
 * Context Menu family as StyleX tables.
 * Content uses --popover (not --background). Item inset is data-[inset]:pl-8.
 * Label uses --foreground (official text-foreground).
 */
const content = stylex.create({
  root: {
    zIndex: 50,
    maxHeight: "var(--radix-context-menu-content-available-height)",
    minWidth: "8rem",
    transformOrigin: "var(--radix-context-menu-content-transform-origin)",
    overflowX: "hidden",
    overflowY: "auto",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--popover"],
    color: tokens["--popover-foreground"],
    padding: "0.25rem",
    boxShadow: SHADOW_MD,
    fontFamily: "inherit",
  },
});

const subContent = stylex.create({
  root: {
    zIndex: 50,
    minWidth: "8rem",
    transformOrigin: "var(--radix-context-menu-content-transform-origin)",
    overflow: "hidden",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--popover"],
    color: tokens["--popover-foreground"],
    padding: "0.25rem",
    boxShadow: SHADOW_LG,
    fontFamily: "inherit",
  },
});

const item = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    cursor: "default",
    alignItems: "center",
    gap: "0.5rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-sm"],
    paddingInline: "0.5rem",
    paddingBlock: "0.375rem",
    paddingLeft: {
      default: "0.5rem",
      '[data-inset="true"]': "2rem",
    },
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    outline: "none",
    userSelect: "none",
    fontFamily: "inherit",
    backgroundColor: {
      default: "transparent",
      ":focus": tokens["--accent"],
      '[data-variant="destructive"]:focus': MIX_DESTRUCTIVE_10,
      ':is(.dark *)[data-variant="destructive"]:focus': MIX_DESTRUCTIVE_20,
    },
    color: {
      default: "inherit",
      ":focus": tokens["--accent-foreground"],
      '[data-variant="destructive"]': tokens["--destructive"],
      '[data-variant="destructive"]:focus': tokens["--destructive"],
    },
    pointerEvents: {
      default: null,
      "[data-disabled]": "none",
    },
    opacity: {
      default: 1,
      "[data-disabled]": 0.5,
    },
    ":not(#\\0) svg": {
      pointerEvents: "none",
      flexShrink: 0,
      width: "1rem",
      height: "1rem",
      color: tokens["--muted-foreground"],
    },
    '[data-variant="destructive"] :is(svg)': {
      color: tokens["--destructive"],
    },
  },
});

const checkboxRadioItem = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    cursor: "default",
    alignItems: "center",
    gap: "0.5rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-sm"],
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    paddingRight: "0.5rem",
    paddingLeft: "2rem",
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
    ":not(#\\0) svg": {
      pointerEvents: "none",
      flexShrink: 0,
    },
  },
  indicator: {
    pointerEvents: "none",
    position: "absolute",
    left: "0.5rem",
    display: "flex",
    width: "0.875rem",
    height: "0.875rem",
    alignItems: "center",
    justifyContent: "center",
  },
  check: {
    width: "1rem",
    height: "1rem",
  },
  circle: {
    width: "0.5rem",
    height: "0.5rem",
    fill: "currentColor",
  },
});

const label = stylex.create({
  root: {
    paddingInline: "0.5rem",
    paddingBlock: "0.375rem",
    paddingLeft: {
      default: "0.5rem",
      '[data-inset="true"]': "2rem",
    },
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    fontFamily: "inherit",
    color: tokens["--foreground"],
  },
});

const separator = stylex.create({
  root: {
    marginInline: "-0.25rem",
    marginBlock: "0.25rem",
    height: "1px",
    backgroundColor: tokens["--border"],
    borderWidth: 0,
  },
});

const shortcut = stylex.create({
  root: {
    marginLeft: "auto",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    letterSpacing: "0.1em",
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

const subTrigger = stylex.create({
  root: {
    display: "flex",
    cursor: "default",
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-sm"],
    paddingInline: "0.5rem",
    paddingBlock: "0.375rem",
    paddingLeft: {
      default: "0.5rem",
      '[data-inset="true"]': "2rem",
    },
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    outline: "none",
    userSelect: "none",
    fontFamily: "inherit",
    backgroundColor: {
      default: "transparent",
      ":focus": tokens["--accent"],
      '[data-state="open"]': tokens["--accent"],
    },
    color: {
      default: "inherit",
      ":focus": tokens["--accent-foreground"],
      '[data-state="open"]': tokens["--accent-foreground"],
    },
    ":not(#\\0) svg": {
      pointerEvents: "none",
      flexShrink: 0,
      width: "1rem",
      height: "1rem",
      color: tokens["--muted-foreground"],
    },
  },
  chevron: {
    marginLeft: "auto",
    width: "1rem",
    height: "1rem",
    pointerEvents: "none",
    flexShrink: 0,
  },
});

export type ContextMenuProps = ComponentProps<typeof ContextMenuPrimitive.Root>;
export type ContextMenuPortalProps = ComponentProps<
  typeof ContextMenuPrimitive.Portal
>;
export type ContextMenuTriggerProps = ComponentProps<
  typeof ContextMenuPrimitive.Trigger
>;
export type ContextMenuContentProps = ComponentProps<
  typeof ContextMenuPrimitive.Content
>;
export type ContextMenuGroupProps = ComponentProps<
  typeof ContextMenuPrimitive.Group
>;
export type ContextMenuItemProps = ComponentProps<
  typeof ContextMenuPrimitive.Item
> & {
  inset?: boolean;
  variant?: "default" | "destructive";
};
export type ContextMenuCheckboxItemProps = ComponentProps<
  typeof ContextMenuPrimitive.CheckboxItem
>;
export type ContextMenuRadioGroupProps = ComponentProps<
  typeof ContextMenuPrimitive.RadioGroup
>;
export type ContextMenuRadioItemProps = ComponentProps<
  typeof ContextMenuPrimitive.RadioItem
>;
export type ContextMenuLabelProps = ComponentProps<
  typeof ContextMenuPrimitive.Label
> & {
  inset?: boolean;
};
export type ContextMenuSeparatorProps = ComponentProps<
  typeof ContextMenuPrimitive.Separator
>;
export type ContextMenuShortcutProps = ComponentProps<"span">;
export type ContextMenuSubProps = ComponentProps<typeof ContextMenuPrimitive.Sub>;
export type ContextMenuSubTriggerProps = ComponentProps<
  typeof ContextMenuPrimitive.SubTrigger
> & {
  inset?: boolean;
};
export type ContextMenuSubContentProps = ComponentProps<
  typeof ContextMenuPrimitive.SubContent
>;

export function ContextMenu({ ...props }: ContextMenuProps) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

export function ContextMenuPortal({ ...props }: ContextMenuPortalProps) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

export function ContextMenuTrigger({ ...props }: ContextMenuTriggerProps) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      {...props}
    />
  );
}

export function ContextMenuContent({
  className,
  ...props
}: ContextMenuContentProps) {
  const sx = stylex.props(content.root);
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={sx.style}
      />
    </ContextMenuPrimitive.Portal>
  );
}

export function ContextMenuGroup({ ...props }: ContextMenuGroupProps) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

export function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: ContextMenuItemProps) {
  const sx = stylex.props(item.root);
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: ContextMenuCheckboxItemProps) {
  const sx = stylex.props(checkboxRadioItem.root);
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      checked={checked}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      <span {...stylex.props(checkboxRadioItem.indicator)}>
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon {...stylex.props(checkboxRadioItem.check)} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

export function ContextMenuRadioGroup({ ...props }: ContextMenuRadioGroupProps) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

export function ContextMenuRadioItem({
  className,
  children,
  ...props
}: ContextMenuRadioItemProps) {
  const sx = stylex.props(checkboxRadioItem.root);
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      <span {...stylex.props(checkboxRadioItem.indicator)}>
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon {...stylex.props(checkboxRadioItem.circle)} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

export function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuLabelProps) {
  const sx = stylex.props(label.root);
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuSeparatorProps) {
  const sx = stylex.props(separator.root);
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function ContextMenuShortcut({
  className,
  ...props
}: ContextMenuShortcutProps) {
  const sx = stylex.props(shortcut.root);
  return (
    <span
      data-slot="context-menu-shortcut"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function ContextMenuSub({ ...props }: ContextMenuSubProps) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

export function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuSubTriggerProps) {
  const sx = stylex.props(subTrigger.root);
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      {children}
      <ChevronRightIcon {...stylex.props(subTrigger.chevron)} />
    </ContextMenuPrimitive.SubTrigger>
  );
}

export function ContextMenuSubContent({
  className,
  ...props
}: ContextMenuSubContentProps) {
  const sx = stylex.props(subContent.root);
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const contextMenuContent = content;
export const contextMenuSubContent = subContent;
export const contextMenuItem = item;
export const contextMenuCheckboxRadioItem = checkboxRadioItem;
export const contextMenuLabel = label;
export const contextMenuSeparator = separator;
export const contextMenuShortcut = shortcut;
export const contextMenuSubTrigger = subTrigger;
