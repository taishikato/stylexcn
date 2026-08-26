import * as stylex from "@stylexjs/stylex";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { Menubar as MenubarPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

const MIX_DESTRUCTIVE_10 =
  "color-mix(in oklab, var(--destructive) 10%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
/* Tailwind v4 --shadow-xs (theme.css). Official Menubar Root uses shadow-xs. */
const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
/* Tailwind v4 --shadow-md. Official MenubarContent uses shadow-md. */
const SHADOW_MD =
  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
/* Tailwind v4 --shadow-lg. Official MenubarSubContent uses shadow-lg. */
const SHADOW_LG =
  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
/* Tailwind v4 --radius-xs (0.125rem). Official checkbox/radio items use rounded-xs. */
const RADIUS_XS = "0.125rem";

/**
 * Menubar family as StyleX tables.
 * Root uses --background (not --popover). Content uses --popover.
 * Content min-width is 12rem; item inset is data-[inset]:pl-8.
 */
const root = stylex.create({
  root: {
    display: "flex",
    height: "2.25rem",
    alignItems: "center",
    gap: "0.25rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--background"],
    padding: "0.25rem",
    boxShadow: SHADOW_XS,
    fontFamily: "inherit",
  },
});

const trigger = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-sm"],
    paddingInline: "0.5rem",
    paddingBlock: "0.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
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
  },
});

const content = stylex.create({
  root: {
    zIndex: 50,
    minWidth: "12rem",
    transformOrigin: "var(--radix-menubar-content-transform-origin)",
    overflow: "hidden",
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
    transformOrigin: "var(--radix-menubar-content-transform-origin)",
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
    borderRadius: RADIUS_XS,
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
  },
  chevron: {
    marginLeft: "auto",
    width: "1rem",
    height: "1rem",
    pointerEvents: "none",
    flexShrink: 0,
  },
});

export type MenubarProps = ComponentProps<typeof MenubarPrimitive.Root>;
export type MenubarMenuProps = ComponentProps<typeof MenubarPrimitive.Menu>;
export type MenubarGroupProps = ComponentProps<typeof MenubarPrimitive.Group>;
export type MenubarPortalProps = ComponentProps<typeof MenubarPrimitive.Portal>;
export type MenubarRadioGroupProps = ComponentProps<
  typeof MenubarPrimitive.RadioGroup
>;
export type MenubarTriggerProps = ComponentProps<typeof MenubarPrimitive.Trigger>;
export type MenubarContentProps = ComponentProps<typeof MenubarPrimitive.Content>;
export type MenubarItemProps = ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
};
export type MenubarCheckboxItemProps = ComponentProps<
  typeof MenubarPrimitive.CheckboxItem
>;
export type MenubarRadioItemProps = ComponentProps<
  typeof MenubarPrimitive.RadioItem
>;
export type MenubarLabelProps = ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean;
};
export type MenubarSeparatorProps = ComponentProps<
  typeof MenubarPrimitive.Separator
>;
export type MenubarShortcutProps = ComponentProps<"span">;
export type MenubarSubProps = ComponentProps<typeof MenubarPrimitive.Sub>;
export type MenubarSubTriggerProps = ComponentProps<
  typeof MenubarPrimitive.SubTrigger
> & {
  inset?: boolean;
};
export type MenubarSubContentProps = ComponentProps<
  typeof MenubarPrimitive.SubContent
>;

export function Menubar({ className, ...props }: MenubarProps) {
  const sx = stylex.props(root.root);
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function MenubarMenu({ ...props }: MenubarMenuProps) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

export function MenubarGroup({ ...props }: MenubarGroupProps) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

export function MenubarPortal({ ...props }: MenubarPortalProps) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

export function MenubarRadioGroup({ ...props }: MenubarRadioGroupProps) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}

export function MenubarTrigger({ className, ...props }: MenubarTriggerProps) {
  const sx = stylex.props(trigger.root);
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: MenubarContentProps) {
  const sx = stylex.props(content.root);
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={sx.style}
      />
    </MenubarPortal>
  );
}

export function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenubarItemProps) {
  const sx = stylex.props(item.root);
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenubarCheckboxItemProps) {
  const sx = stylex.props(checkboxRadioItem.root);
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      checked={checked}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      <span {...stylex.props(checkboxRadioItem.indicator)}>
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon {...stylex.props(checkboxRadioItem.check)} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

export function MenubarRadioItem({
  className,
  children,
  ...props
}: MenubarRadioItemProps) {
  const sx = stylex.props(checkboxRadioItem.root);
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      <span {...stylex.props(checkboxRadioItem.indicator)}>
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon {...stylex.props(checkboxRadioItem.circle)} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

export function MenubarLabel({
  className,
  inset,
  ...props
}: MenubarLabelProps) {
  const sx = stylex.props(label.root);
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function MenubarSeparator({
  className,
  ...props
}: MenubarSeparatorProps) {
  const sx = stylex.props(separator.root);
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function MenubarShortcut({ className, ...props }: MenubarShortcutProps) {
  const sx = stylex.props(shortcut.root);
  return (
    <span
      data-slot="menubar-shortcut"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function MenubarSub({ ...props }: MenubarSubProps) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

export function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenubarSubTriggerProps) {
  const sx = stylex.props(subTrigger.root);
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      {children}
      <ChevronRightIcon {...stylex.props(subTrigger.chevron)} />
    </MenubarPrimitive.SubTrigger>
  );
}

export function MenubarSubContent({
  className,
  ...props
}: MenubarSubContentProps) {
  const sx = stylex.props(subContent.root);
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const menubarRoot = root;
export const menubarTrigger = trigger;
export const menubarContent = content;
export const menubarSubContent = subContent;
export const menubarItem = item;
export const menubarCheckboxRadioItem = checkboxRadioItem;
export const menubarLabel = label;
export const menubarSeparator = separator;
export const menubarShortcut = shortcut;
export const menubarSubTrigger = subTrigger;
