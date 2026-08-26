import * as stylex from "@stylexjs/stylex";
import { PanelLeftIcon } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ComponentProps,
} from "react";
import { Separator as SeparatorPrimitive, Slot } from "radix-ui";
import { tokens } from "../tokens.stylex";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  type ButtonProps,
} from "./button";
import {
  inputBase,
  inputDisabled,
  inputFile,
  inputInvalid,
  inputSizes,
  type InputProps,
} from "./input";
import { separatorRoot, type SeparatorProps } from "./separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./sheet";
import { Skeleton } from "./skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  type TooltipContentProps,
} from "./tooltip";

/**
 * Sidebar family as StyleX tables.
 * Official item (new-york-v4/sidebar.json) is still the shadcn sidebar
 * primitive: radix Slot, CVA menu button, Sheet on mobile. Not Base UI.
 * Desktop layout uses data-state / data-collapsible / data-variant / data-side.
 */

const MOBILE_BREAKPOINT = 768;
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

const MD = "@media (min-width: 48rem)";
const SM = "@media (min-width: 40rem)";
const ICON = ':is([data-collapsible="icon"] *)';
const OFFCANVAS = ':is([data-collapsible="offcanvas"] *)';
const SIDE_LEFT = ':is([data-side="left"] *)';
const SIDE_RIGHT = ':is([data-side="right"] *)';
const VARIANT_FLOATING = ':is([data-variant="floating"] *)';
const PEER_INSET = ':is([data-slot="sidebar"][data-variant="inset"] + *)';
const PEER_INSET_COLLAPSED =
  ':is([data-slot="sidebar"][data-variant="inset"][data-state="collapsed"] + *)';
const HAS_MENU_ACTION =
  ':is([data-slot="sidebar-menu-item"]:has([data-sidebar="menu-action"]) *)';
const MIX_SIDEBAR_FG_70 =
  "color-mix(in oklab, var(--sidebar-foreground) 70%, transparent)";
const RING_SIDEBAR = "0 0 0 2px var(--sidebar-ring)";
const SHADOW_SM =
  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
const SHADOW_OUTLINE = "0 0 0 1px var(--sidebar-border)";
const SHADOW_OUTLINE_HOVER = "0 0 0 1px var(--sidebar-accent)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

const wrapper = stylex.create({
  root: {
    display: "flex",
    minHeight: "100svh",
    width: "100%",
    fontFamily: "inherit",
    boxSizing: "border-box",
    backgroundColor: {
      default: null,
      ':has([data-variant="inset"])': tokens["--sidebar"],
    },
  },
});

const none = stylex.create({
  root: {
    display: "flex",
    height: "100%",
    width: "var(--sidebar-width)",
    flexDirection: "column",
    backgroundColor: tokens["--sidebar"],
    color: tokens["--sidebar-foreground"],
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
});

const shell = stylex.create({
  root: {
    color: tokens["--sidebar-foreground"],
    display: {
      default: "none",
      [MD]: "block",
    },
    fontFamily: "inherit",
  },
});

const gap = stylex.create({
  root: {
    position: "relative",
    width: {
      default: "var(--sidebar-width)",
      [OFFCANVAS]: 0,
    },
    backgroundColor: "transparent",
    transitionProperty: "width",
    transitionDuration: "200ms",
    transitionTimingFunction: "linear",
    transform: {
      default: null,
      [SIDE_RIGHT]: "rotate(180deg)",
    },
  },
  sidebar: {
    width: {
      default: "var(--sidebar-width)",
      [OFFCANVAS]: 0,
      [ICON]: "var(--sidebar-width-icon)",
    },
  },
  padded: {
    width: {
      default: "var(--sidebar-width)",
      [OFFCANVAS]: 0,
      [ICON]: "calc(var(--sidebar-width-icon) + 1rem)",
    },
  },
});

const container = stylex.create({
  root: {
    position: "fixed",
    top: 0,
    bottom: 0,
    zIndex: 10,
    display: {
      default: "none",
      [MD]: "flex",
    },
    height: "100svh",
    width: "var(--sidebar-width)",
    boxSizing: "border-box",
    transitionProperty: "left, right, width",
    transitionDuration: "200ms",
    transitionTimingFunction: "linear",
    fontFamily: "inherit",
    borderStyle: "solid",
    borderColor: tokens["--sidebar-border"],
    borderWidth: 0,
  },
  left: {
    left: {
      default: 0,
      [OFFCANVAS]: "calc(var(--sidebar-width) * -1)",
    },
    right: "auto",
  },
  right: {
    right: {
      default: 0,
      [OFFCANVAS]: "calc(var(--sidebar-width) * -1)",
    },
    left: "auto",
  },
  sidebar: {
    width: {
      default: "var(--sidebar-width)",
      [ICON]: "var(--sidebar-width-icon)",
    },
    borderRightWidth: {
      default: null,
      [SIDE_LEFT]: "1px",
    },
    borderLeftWidth: {
      default: null,
      [SIDE_RIGHT]: "1px",
    },
  },
  padded: {
    padding: "0.5rem",
    width: {
      default: "var(--sidebar-width)",
      [ICON]: "calc(var(--sidebar-width-icon) + 1rem + 2px)",
    },
  },
});

const inner = stylex.create({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    backgroundColor: tokens["--sidebar"],
    boxSizing: "border-box",
    fontFamily: "inherit",
    borderRadius: {
      default: null,
      [VARIANT_FLOATING]: tokens["--radius-lg"],
    },
    borderWidth: {
      default: 0,
      [VARIANT_FLOATING]: "1px",
    },
    borderStyle: "solid",
    borderColor: tokens["--sidebar-border"],
    boxShadow: {
      default: "none",
      [VARIANT_FLOATING]: SHADOW_SM,
    },
  },
});

const mobilePanel = stylex.create({
  root: {
    width: "var(--sidebar-width)",
    padding: 0,
    backgroundColor: tokens["--sidebar"],
    color: tokens["--sidebar-foreground"],
    gap: 0,
  },
  body: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
});

const trigger = stylex.create({
  root: {
    width: "1.75rem",
    height: "1.75rem",
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
    },
  },
});

const rail = stylex.create({
  root: {
    position: "absolute",
    top: 0,
    bottom: 0,
    zIndex: 20,
    display: {
      default: "none",
      [SM]: "flex",
    },
    width: "1rem",
    transform: {
      default: "translateX(-50%)",
      [OFFCANVAS]: "translateX(0)",
    },
    right: {
      default: null,
      [SIDE_LEFT]: "-1rem",
      ':is([data-side="left"][data-collapsible="offcanvas"] *)': "-0.5rem",
    },
    left: {
      default: null,
      [SIDE_RIGHT]: 0,
      ':is([data-side="right"][data-collapsible="offcanvas"] *)': "-0.5rem",
    },
    appearance: "none",
    backgroundColor: {
      default: "transparent",
      [`${OFFCANVAS}:hover`]: tokens["--sidebar"],
    },
    borderWidth: 0,
    padding: 0,
    margin: 0,
    cursor: {
      default: null,
      ':is([data-side="left"] *)': "w-resize",
      ':is([data-side="right"] *)': "e-resize",
      ':is([data-side="left"][data-state="collapsed"] *)': "e-resize",
      ':is([data-side="right"][data-state="collapsed"] *)': "w-resize",
    },
    transitionProperty: "all",
    transitionTimingFunction: "linear",
    "::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: {
        default: "50%",
        [OFFCANVAS]: "100%",
      },
      width: "2px",
    },
  },
});

const inset = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: tokens["--background"],
    fontFamily: "inherit",
    boxSizing: "border-box",
    margin: {
      default: null,
      [MD]: {
        default: null,
        [PEER_INSET]: "0.5rem",
      },
    },
    marginLeft: {
      default: null,
      [MD]: {
        default: null,
        [PEER_INSET]: 0,
        [PEER_INSET_COLLAPSED]: "0.5rem",
      },
    },
    borderRadius: {
      default: null,
      [MD]: {
        default: null,
        [PEER_INSET]: tokens["--radius-xl"],
      },
    },
    boxShadow: {
      default: null,
      [MD]: {
        default: null,
        [PEER_INSET]: SHADOW_SM,
      },
    },
  },
});

const sidebarInput = stylex.create({
  root: {
    height: "2rem",
    width: "100%",
    backgroundColor: tokens["--background"],
    boxShadow: "none",
  },
});

const chrome = stylex.create({
  headerFooter: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "0.5rem",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
});

const sidebarSeparator = stylex.create({
  root: {
    marginInline: "0.5rem",
    width: {
      default: "auto",
      '[data-orientation="horizontal"]': "auto",
    },
    backgroundColor: tokens["--sidebar-border"],
  },
});

const content = stylex.create({
  root: {
    display: "flex",
    minHeight: 0,
    flex: 1,
    flexDirection: "column",
    gap: "0.5rem",
    overflow: {
      default: "auto",
      [ICON]: "hidden",
    },
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
});

const group = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    minWidth: 0,
    flexDirection: "column",
    padding: "0.5rem",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  label: {
    display: {
      default: "flex",
      [ICON]: "flex",
    },
    height: "2rem",
    flexShrink: 0,
    alignItems: "center",
    borderRadius: tokens["--radius-md"],
    paddingInline: "0.5rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: 500,
    color: MIX_SIDEBAR_FG_70,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    marginTop: {
      default: null,
      [ICON]: "-2rem",
    },
    opacity: {
      default: 1,
      [ICON]: 0,
    },
    transitionProperty: "margin, opacity",
    transitionDuration: "200ms",
    transitionTimingFunction: "linear",
    boxShadow: {
      default: "none",
      ":focus-visible": RING_SIDEBAR,
    },
    ":not(#\\0) > svg": {
      width: "1rem",
      height: "1rem",
      flexShrink: 0,
    },
  },
  action: {
    position: "absolute",
    top: "0.875rem",
    right: "0.75rem",
    display: {
      default: "flex",
      [ICON]: "none",
    },
    aspectRatio: "1 / 1",
    width: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens["--radius-md"],
    padding: 0,
    color: tokens["--sidebar-foreground"],
    backgroundColor: {
      default: "transparent",
      ":hover": tokens["--sidebar-accent"],
    },
    outline: "none",
    borderWidth: 0,
    appearance: "none",
    cursor: "default",
    fontFamily: "inherit",
    boxSizing: "border-box",
    boxShadow: {
      default: "none",
      ":focus-visible": RING_SIDEBAR,
    },
    ":not(#\\0) > svg": {
      width: "1rem",
      height: "1rem",
      flexShrink: 0,
    },
    "::after": {
      content: '""',
      position: "absolute",
      inset: "-0.5rem",
      display: {
        default: "block",
        [MD]: "none",
      },
    },
  },
  groupContent: {
    width: "100%",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontFamily: "inherit",
  },
});

const menu = stylex.create({
  list: {
    display: "flex",
    width: "100%",
    minWidth: 0,
    flexDirection: "column",
    gap: "0.25rem",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  item: {
    position: "relative",
    fontFamily: "inherit",
  },
});

const menuButton = stylex.create({
  root: {
    display: "flex",
    width: {
      default: "100%",
      [ICON]: "2rem",
    },
    height: {
      default: null,
      [ICON]: "2rem",
    },
    alignItems: "center",
    gap: "0.5rem",
    overflow: "hidden",
    borderRadius: tokens["--radius-md"],
    padding: {
      default: "0.5rem",
      [ICON]: "0.5rem",
      [HAS_MENU_ACTION]: "0.5rem 2rem 0.5rem 0.5rem",
    },
    textAlign: "left",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    outline: "none",
    borderWidth: 0,
    appearance: "none",
    cursor: "default",
    fontFamily: "inherit",
    boxSizing: "border-box",
    backgroundColor: {
      default: "transparent",
      ":hover": tokens["--sidebar-accent"],
      ":active": tokens["--sidebar-accent"],
      '[data-active="true"]': tokens["--sidebar-accent"],
    },
    color: {
      default: "inherit",
      ":hover": tokens["--sidebar-accent-foreground"],
      ":active": tokens["--sidebar-accent-foreground"],
      '[data-active="true"]': tokens["--sidebar-accent-foreground"],
    },
    fontWeight: {
      default: 400,
      '[data-active="true"]': 500,
    },
    pointerEvents: {
      default: null,
      ":disabled": "none",
      '[aria-disabled="true"]': "none",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
      '[aria-disabled="true"]': 0.5,
    },
    boxShadow: {
      default: "none",
      ":focus-visible": RING_SIDEBAR,
    },
    transitionProperty: "width, height, padding",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    ":not(#\\0) > span:last-child": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    ":not(#\\0) > svg": {
      width: "1rem",
      height: "1rem",
      flexShrink: 0,
    },
  },
  outline: {
    backgroundColor: {
      default: tokens["--background"],
      ":hover": tokens["--sidebar-accent"],
      ":active": tokens["--sidebar-accent"],
      '[data-active="true"]': tokens["--sidebar-accent"],
    },
    boxShadow: {
      default: SHADOW_OUTLINE,
      ":hover": SHADOW_OUTLINE_HOVER,
      ":focus-visible": RING_SIDEBAR,
    },
  },
  defaultSize: {
    height: {
      default: "2rem",
      [ICON]: "2rem",
    },
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  sm: {
    height: {
      default: "1.75rem",
      [ICON]: "2rem",
    },
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },
  lg: {
    height: {
      default: "3rem",
      [ICON]: "2rem",
    },
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    padding: {
      default: "0.5rem",
      [ICON]: 0,
    },
  },
});

const menuAction = stylex.create({
  root: {
    position: "absolute",
    top: {
      default: "0.375rem",
      ':is([data-slot="sidebar-menu-item"]:has([data-size="sm"]) *)': "0.25rem",
      ':is([data-slot="sidebar-menu-item"]:has([data-size="lg"]) *)': "0.625rem",
    },
    right: "0.25rem",
    display: {
      default: "flex",
      [ICON]: "none",
    },
    aspectRatio: "1 / 1",
    width: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens["--radius-md"],
    padding: 0,
    color: {
      default: tokens["--sidebar-foreground"],
      ":hover": tokens["--sidebar-accent-foreground"],
    },
    backgroundColor: {
      default: "transparent",
      ":hover": tokens["--sidebar-accent"],
    },
    outline: "none",
    borderWidth: 0,
    appearance: "none",
    cursor: "default",
    fontFamily: "inherit",
    boxSizing: "border-box",
    boxShadow: {
      default: "none",
      ":focus-visible": RING_SIDEBAR,
    },
    ":not(#\\0) > svg": {
      width: "1rem",
      height: "1rem",
      flexShrink: 0,
    },
    "::after": {
      content: '""',
      position: "absolute",
      inset: "-0.5rem",
      display: {
        default: "block",
        [MD]: "none",
      },
    },
  },
  showOnHover: {
    opacity: {
      default: 1,
      [MD]: 0,
      ":hover": 1,
      ":is([data-slot='sidebar-menu-item']:hover *)": 1,
      ":is([data-slot='sidebar-menu-item']:focus-within *)": 1,
      '[data-state="open"]': 1,
    },
  },
});

const menuBadge = stylex.create({
  root: {
    pointerEvents: "none",
    position: "absolute",
    right: "0.25rem",
    display: {
      default: "flex",
      [ICON]: "none",
    },
    height: "1.25rem",
    minWidth: "1.25rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens["--radius-md"],
    paddingInline: "0.25rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: 500,
    color: tokens["--sidebar-foreground"],
    fontVariantNumeric: "tabular-nums",
    userSelect: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    top: {
      default: "0.375rem",
      ':is([data-slot="sidebar-menu-item"]:has([data-size="sm"]) *)': "0.25rem",
      ':is([data-slot="sidebar-menu-item"]:has([data-size="lg"]) *)': "0.625rem",
    },
  },
});

const menuSkeleton = stylex.create({
  root: {
    display: "flex",
    height: "2rem",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: tokens["--radius-md"],
    paddingInline: "0.5rem",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  iconWell: {
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
  },
  textWell: {
    height: "1rem",
    flex: 1,
    maxWidth: "var(--skeleton-width)",
  },
});

const menuSub = stylex.create({
  list: {
    marginTop: 0,
    marginBottom: 0,
    marginInline: "0.875rem",
    display: {
      default: "flex",
      [ICON]: "none",
    },
    minWidth: 0,
    transform: "translateX(1px)",
    flexDirection: "column",
    gap: "0.25rem",
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderLeftColor: tokens["--sidebar-border"],
    paddingInline: "0.625rem",
    paddingBlock: "0.125rem",
    listStyleType: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  item: {
    position: "relative",
    fontFamily: "inherit",
  },
  button: {
    display: {
      default: "flex",
      [ICON]: "none",
    },
    height: "1.75rem",
    minWidth: 0,
    transform: "translateX(-1px)",
    alignItems: "center",
    gap: "0.5rem",
    overflow: "hidden",
    borderRadius: tokens["--radius-md"],
    paddingInline: "0.5rem",
    color: {
      default: tokens["--sidebar-foreground"],
      ":hover": tokens["--sidebar-accent-foreground"],
      ":active": tokens["--sidebar-accent-foreground"],
      '[data-active="true"]': tokens["--sidebar-accent-foreground"],
    },
    backgroundColor: {
      default: "transparent",
      ":hover": tokens["--sidebar-accent"],
      ":active": tokens["--sidebar-accent"],
      '[data-active="true"]': tokens["--sidebar-accent"],
    },
    outline: "none",
    textDecorationLine: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    pointerEvents: {
      default: null,
      ":disabled": "none",
      '[aria-disabled="true"]': "none",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
      '[aria-disabled="true"]': 0.5,
    },
    boxShadow: {
      default: "none",
      ":focus-visible": RING_SIDEBAR,
    },
    ":not(#\\0) > span:last-child": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    ":not(#\\0) > svg": {
      width: "1rem",
      height: "1rem",
      flexShrink: 0,
      color: tokens["--sidebar-accent-foreground"],
    },
  },
  sm: {
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },
  md: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
});

export type SidebarProviderProps = ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export type SidebarProps = ComponentProps<"div"> & {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
};

export type SidebarTriggerProps = ButtonProps;
export type SidebarRailProps = ComponentProps<"button">;
export type SidebarInsetProps = ComponentProps<"main">;
export type SidebarInputProps = InputProps;
export type SidebarHeaderProps = ComponentProps<"div">;
export type SidebarFooterProps = ComponentProps<"div">;
export type SidebarSeparatorProps = SeparatorProps;
export type SidebarContentProps = ComponentProps<"div">;
export type SidebarGroupProps = ComponentProps<"div">;
export type SidebarGroupLabelProps = ComponentProps<"div"> & {
  asChild?: boolean;
};
export type SidebarGroupActionProps = ComponentProps<"button"> & {
  asChild?: boolean;
};
export type SidebarGroupContentProps = ComponentProps<"div">;
export type SidebarMenuProps = ComponentProps<"ul">;
export type SidebarMenuItemProps = ComponentProps<"li">;
export type SidebarMenuButtonProps = ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | TooltipContentProps;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
};
export type SidebarMenuActionProps = ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
};
export type SidebarMenuBadgeProps = ComponentProps<"div">;
export type SidebarMenuSkeletonProps = ComponentProps<"div"> & {
  showIcon?: boolean;
};
export type SidebarMenuSubProps = ComponentProps<"ul">;
export type SidebarMenuSubItemProps = ComponentProps<"li">;
export type SidebarMenuSubButtonProps = ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
};

export function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  style,
  children,
  ...props
}: SidebarProviderProps) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);
  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((next) => !next) : setOpen((next) => !next);
  }, [isMobile, setOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const state = open ? "expanded" : "collapsed";
  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar],
  );

  const sx = stylex.props(wrapper.root);
  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          {...props}
          className={[sx.className, props.className].filter(Boolean).join(" ")}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...sx.style,
              ...style,
            } as CSSProperties
          }
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

export function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  children,
  ...props
}: SidebarProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  const padded = variant === "floating" || variant === "inset";

  if (collapsible === "none") {
    return (
      <div data-slot="sidebar" {...props} {...stylex.props(none.root)}>
        {children}
      </div>
    );
  }

  if (isMobile) {
    const mobileSx = stylex.props(mobilePanel.root);
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          side={side}
          showCloseButton={false}
          className={mobileSx.className}
          style={
            {
              ...mobileSx.style,
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as CSSProperties
          }
        >
          <SheetHeader {...stylex.props(mobilePanel.srOnly)}>
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div {...stylex.props(mobilePanel.body)}>{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  const containerSx = stylex.props(
    container.root,
    side === "left" ? container.left : container.right,
    padded ? container.padded : container.sidebar,
  );

  return (
    <div
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
      {...stylex.props(shell.root)}
    >
      <div
        data-slot="sidebar-gap"
        {...stylex.props(gap.root, padded ? gap.padded : gap.sidebar)}
      />
      <div
        data-slot="sidebar-container"
        {...props}
        className={[containerSx.className, props.className]
          .filter(Boolean)
          .join(" ")}
        style={{ ...containerSx.style, ...props.style }}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          {...stylex.props(inner.root)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function SidebarTrigger({
  onClick,
  ...props
}: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar();
  return (
    <ButtonPrimitive
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      data-variant="ghost"
      data-size="icon"
      {...props}
      {...stylex.props(
        buttonBase.root,
        buttonVariants.ghost,
        buttonSizes.icon,
        trigger.root,
      )}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
    >
      <PanelLeftIcon />
      <span {...stylex.props(mobilePanel.srOnly)}>Toggle Sidebar</span>
    </ButtonPrimitive>
  );
}

export function SidebarRail(props: SidebarRailProps) {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      title="Toggle Sidebar"
      onClick={toggleSidebar}
      {...props}
      {...stylex.props(rail.root)}
    />
  );
}

export function SidebarInset(props: SidebarInsetProps) {
  return (
    <main data-slot="sidebar-inset" {...props} {...stylex.props(inset.root)} />
  );
}

export function SidebarInput(props: SidebarInputProps) {
  return (
    <input
      data-slot="sidebar-input"
      data-sidebar="input"
      {...props}
      {...stylex.props(
        inputBase.root,
        inputSizes.default,
        inputInvalid.on,
        inputDisabled.on,
        inputFile.on,
        sidebarInput.root,
      )}
    />
  );
}

export function SidebarHeader(props: SidebarHeaderProps) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      {...props}
      {...stylex.props(chrome.headerFooter)}
    />
  );
}

export function SidebarFooter(props: SidebarFooterProps) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      {...props}
      {...stylex.props(chrome.headerFooter)}
    />
  );
}

export function SidebarSeparator(props: SidebarSeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="sidebar-separator"
      data-sidebar="separator"
      decorative
      orientation="horizontal"
      {...props}
      {...stylex.props(separatorRoot.base, sidebarSeparator.root)}
    />
  );
}

export function SidebarContent(props: SidebarContentProps) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      {...props}
      {...stylex.props(content.root)}
    />
  );
}

export function SidebarGroup(props: SidebarGroupProps) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      {...props}
      {...stylex.props(group.root)}
    />
  );
}

export function SidebarGroupLabel({
  asChild = false,
  ...props
}: SidebarGroupLabelProps) {
  const Comp = asChild ? Slot.Root : "div";
  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      {...props}
      {...stylex.props(group.label)}
    />
  );
}

export function SidebarGroupAction({
  asChild = false,
  ...props
}: SidebarGroupActionProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      {...props}
      {...stylex.props(group.action)}
    />
  );
}

export function SidebarGroupContent(props: SidebarGroupContentProps) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      {...props}
      {...stylex.props(group.groupContent)}
    />
  );
}

export function SidebarMenu(props: SidebarMenuProps) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      {...props}
      {...stylex.props(menu.list)}
    />
  );
}

export function SidebarMenuItem(props: SidebarMenuItemProps) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      {...props}
      {...stylex.props(menu.item)}
    />
  );
}

export function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  ...props
}: SidebarMenuButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  const { isMobile, state } = useSidebar();
  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      {...props}
      {...stylex.props(
        menuButton.root,
        variant === "outline" && menuButton.outline,
        menuButton[size === "default" ? "defaultSize" : size],
      )}
    />
  );

  if (!tooltip) {
    return button;
  }

  const tooltipProps: TooltipContentProps =
    typeof tooltip === "string" ? { children: tooltip } : tooltip;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltipProps}
      />
    </Tooltip>
  );
}

export function SidebarMenuAction({
  asChild = false,
  showOnHover = false,
  ...props
}: SidebarMenuActionProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      {...props}
      {...stylex.props(menuAction.root, showOnHover && menuAction.showOnHover)}
    />
  );
}

export function SidebarMenuBadge(props: SidebarMenuBadgeProps) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      {...props}
      {...stylex.props(menuBadge.root)}
    />
  );
}

export function SidebarMenuSkeleton({
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) {
  const width = useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      {...props}
      {...stylex.props(menuSkeleton.root)}
    >
      {showIcon ? (
        <div
          data-sidebar="menu-skeleton-icon"
          {...stylex.props(menuSkeleton.iconWell)}
        >
          <Skeleton />
        </div>
      ) : null}
      <div
        data-sidebar="menu-skeleton-text"
        {...stylex.props(menuSkeleton.textWell)}
        style={{ ["--skeleton-width" as string]: width }}
      >
        <Skeleton />
      </div>
    </div>
  );
}

export function SidebarMenuSub(props: SidebarMenuSubProps) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      {...props}
      {...stylex.props(menuSub.list)}
    />
  );
}

export function SidebarMenuSubItem(props: SidebarMenuSubItemProps) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      {...props}
      {...stylex.props(menuSub.item)}
    />
  );
}

export function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  ...props
}: SidebarMenuSubButtonProps) {
  const Comp = asChild ? Slot.Root : "a";
  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      {...props}
      {...stylex.props(menuSub.button, menuSub[size])}
    />
  );
}
