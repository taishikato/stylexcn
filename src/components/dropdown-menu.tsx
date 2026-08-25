import * as stylex from "@stylexjs/stylex";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

const MIX_DESTRUCTIVE_10 =
  "color-mix(in oklab, var(--destructive) 10%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
/* Tailwind v4 --shadow-md (theme.css). Official DropdownMenuContent uses shadow-md. */
const SHADOW_MD =
  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
/* Tailwind v4 --shadow-lg. Official DropdownMenuSubContent uses shadow-lg. */
const SHADOW_LG =
  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";

/**
 * Dropdown Menu family as StyleX tables.
 * Content uses --popover (not --background). Item inset is data-[inset]:pl-8.
 */
const content = stylex.create({
  root: {
    zIndex: 50,
    maxHeight: "var(--radix-dropdown-menu-content-available-height)",
    minWidth: "8rem",
    transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)",
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
    transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)",
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

export type DropdownMenuProps = ComponentProps<typeof DropdownMenuPrimitive.Root>;
export type DropdownMenuPortalProps = ComponentProps<
  typeof DropdownMenuPrimitive.Portal
>;
export type DropdownMenuTriggerProps = ComponentProps<
  typeof DropdownMenuPrimitive.Trigger
>;
export type DropdownMenuContentProps = ComponentProps<
  typeof DropdownMenuPrimitive.Content
>;
export type DropdownMenuGroupProps = ComponentProps<
  typeof DropdownMenuPrimitive.Group
>;
export type DropdownMenuItemProps = ComponentProps<
  typeof DropdownMenuPrimitive.Item
> & {
  inset?: boolean;
  variant?: "default" | "destructive";
};
export type DropdownMenuCheckboxItemProps = ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>;
export type DropdownMenuRadioGroupProps = ComponentProps<
  typeof DropdownMenuPrimitive.RadioGroup
>;
export type DropdownMenuRadioItemProps = ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>;
export type DropdownMenuLabelProps = ComponentProps<
  typeof DropdownMenuPrimitive.Label
> & {
  inset?: boolean;
};
export type DropdownMenuSeparatorProps = ComponentProps<
  typeof DropdownMenuPrimitive.Separator
>;
export type DropdownMenuShortcutProps = ComponentProps<"span">;
export type DropdownMenuSubProps = ComponentProps<typeof DropdownMenuPrimitive.Sub>;
export type DropdownMenuSubTriggerProps = ComponentProps<
  typeof DropdownMenuPrimitive.SubTrigger
> & {
  inset?: boolean;
};
export type DropdownMenuSubContentProps = ComponentProps<
  typeof DropdownMenuPrimitive.SubContent
>;

export function DropdownMenu({ ...props }: DropdownMenuProps) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

export function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

export function DropdownMenuTrigger({ ...props }: DropdownMenuTriggerProps) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

export function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) {
  const sx = stylex.props(content.root);
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={sx.style}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

export function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

export function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: DropdownMenuItemProps) {
  const sx = stylex.props(item.root);
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) {
  const sx = stylex.props(checkboxRadioItem.root);
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      checked={checked}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      <span {...stylex.props(checkboxRadioItem.indicator)}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon {...stylex.props(checkboxRadioItem.check)} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioGroup({
  ...props
}: DropdownMenuRadioGroupProps) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

export function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  const sx = stylex.props(checkboxRadioItem.root);
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      <span {...stylex.props(checkboxRadioItem.indicator)}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon {...stylex.props(checkboxRadioItem.circle)} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

export function DropdownMenuLabel({
  className,
  inset,
  ...props
}: DropdownMenuLabelProps) {
  const sx = stylex.props(label.root);
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuSeparatorProps) {
  const sx = stylex.props(separator.root);
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DropdownMenuShortcut({
  className,
  ...props
}: DropdownMenuShortcutProps) {
  const sx = stylex.props(shortcut.root);
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

export function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  const sx = stylex.props(subTrigger.root);
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      {children}
      <ChevronRightIcon {...stylex.props(subTrigger.chevron)} />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

export function DropdownMenuSubContent({
  className,
  ...props
}: DropdownMenuSubContentProps) {
  const sx = stylex.props(subContent.root);
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const dropdownMenuContent = content;
export const dropdownMenuSubContent = subContent;
export const dropdownMenuItem = item;
export const dropdownMenuCheckboxRadioItem = checkboxRadioItem;
export const dropdownMenuLabel = label;
export const dropdownMenuSeparator = separator;
export const dropdownMenuShortcut = shortcut;
export const dropdownMenuSubTrigger = subTrigger;
