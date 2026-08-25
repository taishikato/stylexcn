import * as stylex from "@stylexjs/stylex";
import { useLayoutEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../components/alert";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "../components/avatar";
import { Badge, type BadgeVariant } from "../components/badge";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/collapsible";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/pagination";
import { Separator } from "../components/separator";
import { Button, type ButtonSize, type ButtonVariant } from "../components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";
import { Checkbox } from "../components/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../components/dropdown-menu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "../components/context-menu";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { Progress } from "../components/progress";
import { RadioGroup, RadioGroupItem } from "../components/radio-group";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../components/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../components/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../components/sheet";
import { Switch } from "../components/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/tabs";
import { Skeleton, type SkeletonRadius } from "../components/skeleton";
import { ScrollArea, ScrollBar } from "../components/scroll-area";
import { Slider } from "../components/slider";
import { Textarea } from "../components/textarea";
import { Toggle, type ToggleSize, type ToggleVariant } from "../components/toggle";
import { CircleAlert } from "lucide-react";
import { AspectRatio } from "../components/aspect-ratio";
import { ToggleGroup, ToggleGroupItem } from "../components/toggle-group";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../components/menubar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/resizable";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/tooltip";
import { darkTheme } from "../theme";
import { tokens } from "../tokens.stylex";
import {
  OfficialAccordion,
  OfficialAccordionContent,
  OfficialAccordionItem,
  OfficialAccordionTrigger,
} from "./official-accordion";
import {
  OfficialAlert,
  OfficialAlertDescription,
  OfficialAlertTitle,
} from "./official-alert";
import {
  OfficialAvatar,
  OfficialAvatarBadge,
  OfficialAvatarFallback,
  OfficialAvatarGroup,
  OfficialAvatarGroupCount,
} from "./official-avatar";
import { OfficialBadge } from "./official-badge";
import {
  OfficialBreadcrumb,
  OfficialBreadcrumbEllipsis,
  OfficialBreadcrumbItem,
  OfficialBreadcrumbLink,
  OfficialBreadcrumbList,
  OfficialBreadcrumbPage,
  OfficialBreadcrumbSeparator,
} from "./official-breadcrumb";
import {
  OfficialCollapsible,
  OfficialCollapsibleContent,
  OfficialCollapsibleTrigger,
} from "./official-collapsible";
import {
  OfficialPagination,
  OfficialPaginationContent,
  OfficialPaginationEllipsis,
  OfficialPaginationItem,
  OfficialPaginationLink,
  OfficialPaginationNext,
  OfficialPaginationPrevious,
} from "./official-pagination";
import { OfficialSeparator } from "./official-separator";
import { OfficialButton } from "./official-button";
import {
  OfficialCard,
  OfficialCardAction,
  OfficialCardContent,
  OfficialCardDescription,
  OfficialCardFooter,
  OfficialCardHeader,
  OfficialCardTitle,
} from "./official-card";
import {
  OfficialAlertDialog,
  OfficialAlertDialogAction,
  OfficialAlertDialogCancel,
  OfficialAlertDialogContent,
  OfficialAlertDialogDescription,
  OfficialAlertDialogFooter,
  OfficialAlertDialogHeader,
  OfficialAlertDialogTitle,
} from "./official-alert-dialog";
import { OfficialCheckbox } from "./official-checkbox";
import { OfficialInput } from "./official-input";
import { OfficialLabel } from "./official-label";
import { OfficialProgress } from "./official-progress";
import {
  OfficialRadioGroup,
  OfficialRadioGroupItem,
} from "./official-radio-group";
import {
  OfficialDialog,
  OfficialDialogContent,
  OfficialDialogDescription,
  OfficialDialogFooter,
  OfficialDialogHeader,
  OfficialDialogTitle,
} from "./official-dialog";
import {
  OfficialHoverCard,
  OfficialHoverCardContent,
  OfficialHoverCardTrigger,
} from "./official-hover-card";
import {
  OfficialPopover,
  OfficialPopoverContent,
  OfficialPopoverDescription,
  OfficialPopoverHeader,
  OfficialPopoverTitle,
  OfficialPopoverTrigger,
} from "./official-popover";
import {
  OfficialSelect,
  OfficialSelectContent,
  OfficialSelectGroup,
  OfficialSelectItem,
  OfficialSelectLabel,
  OfficialSelectSeparator,
  OfficialSelectTrigger,
  OfficialSelectValue,
} from "./official-select";
import {
  OfficialSheet,
  OfficialSheetContent,
  OfficialSheetDescription,
  OfficialSheetFooter,
  OfficialSheetHeader,
  OfficialSheetTitle,
} from "./official-sheet";
import { OfficialSkeleton } from "./official-skeleton";
import {
  OfficialScrollArea,
  OfficialScrollBar,
} from "./official-scroll-area";
import { OfficialSlider } from "./official-slider";
import { OfficialSwitch } from "./official-switch";
import { OfficialToggle } from "./official-toggle";
import { OfficialAspectRatio } from "./official-aspect-ratio";
import {
  OfficialToggleGroup,
  OfficialToggleGroupItem,
} from "./official-toggle-group";
import {
  OfficialMenubar,
  OfficialMenubarContent,
  OfficialMenubarItem,
  OfficialMenubarMenu,
  OfficialMenubarSeparator,
  OfficialMenubarTrigger,
} from "./official-menubar";
import {
  OfficialTable,
  OfficialTableBody,
  OfficialTableCaption,
  OfficialTableCell,
  OfficialTableFooter,
  OfficialTableHead,
  OfficialTableHeader,
  OfficialTableRow,
} from "./official-table";
import {
  OfficialResizableHandle,
  OfficialResizablePanel,
  OfficialResizablePanelGroup,
} from "./official-resizable";
import {
  OfficialTabs,
  OfficialTabsContent,
  OfficialTabsList,
  OfficialTabsTrigger,
} from "./official-tabs";
import { OfficialTextarea } from "./official-textarea";
import {
  OfficialDropdownMenu,
  OfficialDropdownMenuCheckboxItem,
  OfficialDropdownMenuContent,
  OfficialDropdownMenuGroup,
  OfficialDropdownMenuItem,
  OfficialDropdownMenuLabel,
  OfficialDropdownMenuRadioGroup,
  OfficialDropdownMenuRadioItem,
  OfficialDropdownMenuSeparator,
  OfficialDropdownMenuShortcut,
  OfficialDropdownMenuTrigger,
} from "./official-dropdown-menu";
import {
  OfficialContextMenu,
  OfficialContextMenuContent,
  OfficialContextMenuItem,
  OfficialContextMenuSeparator,
  OfficialContextMenuShortcut,
  OfficialContextMenuTrigger,
} from "./official-context-menu";
import {
  OfficialTooltip,
  OfficialTooltipContent,
  OfficialTooltipProvider,
  OfficialTooltipTrigger,
} from "./official-tooltip";

export const VARIANTS = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
] as const satisfies readonly ButtonVariant[];

export const SIZES = [
  "default",
  "sm",
  "lg",
  "icon",
] as const satisfies readonly ButtonSize[];

export const BADGE_VARIANTS = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const satisfies readonly BadgeVariant[];

export type CaptureComponent =
  | "button"
  | "input"
  | "label"
  | "textarea"
  | "checkbox"
  | "switch"
  | "radio-group"
  | "card"
  | "dialog"
  | "select"
  | "alert-dialog"
  | "dropdown-menu"
  | "context-menu"
  | "sheet"
  | "tabs"
  | "popover"
  | "hover-card"
  | "tooltip"
  | "badge"
  | "separator"
  | "skeleton"
  | "avatar"
  | "progress"
  | "accordion"
  | "slider"
  | "toggle"
  | "breadcrumb"
  | "collapsible"
  | "scroll-area"
  | "pagination"
  | "alert"
  | "toggle-group"
  | "menubar"
  | "aspect-ratio"
  | "table"
  | "resizable";
export type CaptureKit = "shadcn" | "stylex";
export type CaptureState =
  | "default"
  | "hover"
  | "focus-visible"
  | "disabled"
  | "invalid"
  | "checked"
  | "with-action"
  | "no-close"
  | "selected"
  | "sm"
  | "open"
  | "closed"
  | "left"
  | "top"
  | "bottom"
  | "second"
  | "horizontal"
  | "vertical"
  | "bar"
  | "circle"
  | "badge"
  | "group"
  | "empty"
  | "halfway"
  | "full"
  | "range"
  | "on"
  | "outline"
  | "lg"
  | "ellipsis"
  | "with-icon"
  | "with-footer";
export type CaptureTheme = "light" | "dark";

export type ButtonCaptureParams = {
  component: "button";
  kit: CaptureKit;
  variant: ButtonVariant;
  size: ButtonSize;
  state: Exclude<CaptureState, "invalid">;
  theme: CaptureTheme;
};

export type InputCaptureParams = {
  component: "input";
  kit: CaptureKit;
  state: Exclude<CaptureState, "hover" | "checked">;
  theme: CaptureTheme;
};

export type LabelCaptureParams = {
  component: "label";
  kit: CaptureKit;
  state: "default" | "disabled";
  theme: CaptureTheme;
};

export type TextareaCaptureParams = {
  component: "textarea";
  kit: CaptureKit;
  state: Exclude<CaptureState, "hover" | "checked">;
  theme: CaptureTheme;
};

export type CheckboxCaptureParams = {
  component: "checkbox";
  kit: CaptureKit;
  state: Exclude<CaptureState, "hover">;
  theme: CaptureTheme;
};

export type SwitchCaptureParams = {
  component: "switch";
  kit: CaptureKit;
  state: "default" | "checked" | "focus-visible" | "disabled";
  theme: CaptureTheme;
};

export type RadioGroupCaptureParams = {
  component: "radio-group";
  kit: CaptureKit;
  state: Exclude<CaptureState, "hover" | "with-action">;
  theme: CaptureTheme;
};

export type CardCaptureParams = {
  component: "card";
  kit: CaptureKit;
  state: "default" | "with-action";
  theme: CaptureTheme;
};

export type DialogCaptureParams = {
  component: "dialog";
  kit: CaptureKit;
  state: "default" | "no-close";
  theme: CaptureTheme;
};

export type SelectCaptureParams = {
  component: "select";
  kit: CaptureKit;
  state:
    | "default"
    | "selected"
    | "focus-visible"
    | "disabled"
    | "invalid"
    | "sm"
    | "open";
  theme: CaptureTheme;
};

export type AlertDialogCaptureParams = {
  component: "alert-dialog";
  kit: CaptureKit;
  state: "default";
  theme: CaptureTheme;
};

export type DropdownMenuCaptureParams = {
  component: "dropdown-menu";
  kit: CaptureKit;
  state: "closed" | "open";
  theme: CaptureTheme;
};

export type ContextMenuCaptureParams = {
  component: "context-menu";
  kit: CaptureKit;
  state: "closed" | "open";
  theme: CaptureTheme;
};

export type SheetCaptureParams = {
  component: "sheet";
  kit: CaptureKit;
  state: "default" | "left" | "top" | "bottom";
  theme: CaptureTheme;
};

export type TabsCaptureParams = {
  component: "tabs";
  kit: CaptureKit;
  state: "default" | "second" | "disabled";
  theme: CaptureTheme;
};

export type PopoverCaptureParams = {
  component: "popover";
  kit: CaptureKit;
  state: "default";
  theme: CaptureTheme;
};

export type HoverCardCaptureParams = {
  component: "hover-card";
  kit: CaptureKit;
  state: "default";
  theme: CaptureTheme;
};

export type TooltipCaptureParams = {
  component: "tooltip";
  kit: CaptureKit;
  state: "default";
  theme: CaptureTheme;
};

export type BadgeCaptureParams = {
  component: "badge";
  kit: CaptureKit;
  variant: BadgeVariant;
  state: "default" | "focus-visible";
  theme: CaptureTheme;
};

export type SeparatorCaptureParams = {
  component: "separator";
  kit: CaptureKit;
  state: "horizontal" | "vertical";
  theme: CaptureTheme;
};

export type SkeletonCaptureParams = {
  component: "skeleton";
  kit: CaptureKit;
  state: "bar" | "circle";
  theme: CaptureTheme;
};

export type AvatarCaptureParams = {
  component: "avatar";
  kit: CaptureKit;
  state: "default" | "sm" | "lg" | "badge" | "group";
  theme: CaptureTheme;
};

export type ProgressCaptureParams = {
  component: "progress";
  kit: CaptureKit;
  state: "empty" | "halfway" | "full";
  theme: CaptureTheme;
};

export type AccordionCaptureParams = {
  component: "accordion";
  kit: CaptureKit;
  state: "open" | "second" | "closed";
  theme: CaptureTheme;
};

export type SliderCaptureParams = {
  component: "slider";
  kit: CaptureKit;
  state: "default" | "disabled" | "focus-visible" | "range";
  theme: CaptureTheme;
};

export type ToggleCaptureParams = {
  component: "toggle";
  kit: CaptureKit;
  state:
    | "default"
    | "on"
    | "outline"
    | "sm"
    | "lg"
    | "disabled"
    | "focus-visible";
  theme: CaptureTheme;
};

export type BreadcrumbCaptureParams = {
  component: "breadcrumb";
  kit: CaptureKit;
  state: "default" | "ellipsis";
  theme: CaptureTheme;
};

export type CollapsibleCaptureParams = {
  component: "collapsible";
  kit: CaptureKit;
  state: "open" | "closed";
  theme: CaptureTheme;
};

export type ScrollAreaCaptureParams = {
  component: "scroll-area";
  kit: CaptureKit;
  state: "vertical" | "horizontal";
  theme: CaptureTheme;
};

export type PaginationCaptureParams = {
  component: "pagination";
  kit: CaptureKit;
  state: "default" | "ellipsis";
  theme: CaptureTheme;
};

export type AlertCaptureParams = {
  component: "alert";
  kit: CaptureKit;
  state: "default" | "with-icon" | "destructive";
  theme: CaptureTheme;
};

export type ToggleGroupCaptureParams = {
  component: "toggle-group";
  kit: CaptureKit;
  state: "default" | "outline" | "sm" | "lg";
  theme: CaptureTheme;
};

export type MenubarCaptureParams = {
  component: "menubar";
  kit: CaptureKit;
  state: "closed" | "open";
  theme: CaptureTheme;
};

export type AspectRatioCaptureParams = {
  component: "aspect-ratio";
  kit: CaptureKit;
  state: "default";
  theme: CaptureTheme;
};

export type TableCaptureParams = {
  component: "table";
  kit: CaptureKit;
  state: "default" | "with-footer";
  theme: CaptureTheme;
};

export type ResizableCaptureParams = {
  component: "resizable";
  kit: CaptureKit;
  state: "horizontal" | "vertical";
  theme: CaptureTheme;
};

export type CaptureParams =
  | ButtonCaptureParams
  | InputCaptureParams
  | LabelCaptureParams
  | TextareaCaptureParams
  | CheckboxCaptureParams
  | SwitchCaptureParams
  | RadioGroupCaptureParams
  | CardCaptureParams
  | DialogCaptureParams
  | SelectCaptureParams
  | AlertDialogCaptureParams
  | DropdownMenuCaptureParams
  | ContextMenuCaptureParams
  | SheetCaptureParams
  | TabsCaptureParams
  | PopoverCaptureParams
  | HoverCardCaptureParams
  | TooltipCaptureParams
  | BadgeCaptureParams
  | SeparatorCaptureParams
  | SkeletonCaptureParams
  | AvatarCaptureParams
  | ProgressCaptureParams
  | AccordionCaptureParams
  | SliderCaptureParams
  | ToggleCaptureParams
  | BreadcrumbCaptureParams
  | CollapsibleCaptureParams
  | ScrollAreaCaptureParams
  | PaginationCaptureParams
  | AlertCaptureParams
  | ToggleGroupCaptureParams
  | MenubarCaptureParams
  | AspectRatioCaptureParams
  | TableCaptureParams
  | ResizableCaptureParams;

const styles = stylex.create({
  frame: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  },
  inputWell: {
    width: "16rem",
  },
  cardWell: {
    width: "20rem",
  },
  selectOpenFrame: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "3rem",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  },
  /* Trigger near the top, horizontally centered so w-72 / w-64 content
     (align=center) stays on-screen and the popper does not flip. */
  popoverOpenFrame: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: "4rem",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  },
  /* Trigger near the bottom so default side=top has room and does not flip. */
  tooltipFrame: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: "5rem",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  },
  separatorHorizontalWell: {
    width: "16rem",
  },
  separatorVerticalWell: {
    height: "6rem",
    width: "3rem",
    display: "flex",
    justifyContent: "center",
  },
  /* Identical boxes on both kits. Size is not a Skeleton API; official uses
     caller className and StyleX fills the parent. */
  skeletonBar: {
    width: 250,
    height: 16,
  },
  skeletonCircle: {
    width: 40,
    height: 40,
  },
  /* Identical 16rem parent on both kits so w-full matches. */
  progressWell: {
    width: "16rem",
  },
  accordionWell: {
    width: "20rem",
  },
  sliderWell: {
    width: "16rem",
  },
  /* Wide enough that flex-wrap does not split the trail differently. */
  breadcrumbWell: {
    width: "24rem",
  },
  /* Identical width on both kits so trigger + open copy wrap the same. */
  collapsibleWell: {
    width: "20rem",
  },
  /* Identical fixed boxes on both kits so overflow and thumb position match. */
  scrollAreaVerticalWell: {
    width: "12rem",
    height: "8rem",
  },
  scrollAreaHorizontalWell: {
    width: "16rem",
    height: "6rem",
  },
  scrollAreaList: {
    padding: "1rem",
  },
  scrollAreaListItem: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    paddingBlock: "0.25rem",
  },
  scrollAreaStrip: {
    display: "flex",
    width: "max-content",
    gap: "0.75rem",
    padding: "1rem",
  },
  scrollAreaBlock: {
    width: "5rem",
    height: "3.5rem",
    flexShrink: 0,
    borderRadius: "0.375rem",
    backgroundColor: "var(--muted)",
  },
  /* Identical 24rem parent on both kits so w-full matches. */
  alertWell: {
    width: "24rem",
  },
  /* Menubar pinned near the top so the portaled File menu stays on-screen. */
  menubarOpenFrame: {
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "2rem",
    paddingLeft: "2rem",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  },
  /* Identical 20rem parent on both kits so the 16/9 box size matches. */
  aspectRatioWell: {
    width: "20rem",
  },
  /* Local muted fill — no network image. Covers the ratio box on both kits. */
  aspectRatioFill: {
    width: "100%",
    height: "100%",
    backgroundColor: tokens["--muted"],
  },
  /* Identical 32rem parent on both kits so w-full matches. */
  tableWell: {
    width: "32rem",
  },
  /* Identical fixed boxes on both kits so defaultSize={50} panels match. */
  resizableHorizontalWell: {
    width: "24rem",
    height: "8rem",
  },
  resizableVerticalWell: {
    width: "16rem",
    height: "12rem",
  },
  resizablePanelFill: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    backgroundColor: "var(--muted)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "var(--border)",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
});

function labelFor(size: ButtonSize) {
  return size === "icon" ? "→" : "Button";
}

function ButtonHarness({ kit, variant, size, state, theme }: ButtonCaptureParams) {
  const disabled = state === "disabled";
  const isDark = theme === "dark";
  const text = labelFor(size);

  const button =
    kit === "shadcn" ? (
      <OfficialButton variant={variant} size={size} disabled={disabled}>
        {text}
      </OfficialButton>
    ) : (
      <Button variant={variant} size={size} disabled={disabled}>
        {text}
      </Button>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="button"
      data-variant={variant}
      data-size={size}
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {button}
    </div>
  );
}

function InputHarness({ kit, state, theme }: InputCaptureParams) {
  const disabled = state === "disabled";
  const invalid = state === "invalid";
  const isDark = theme === "dark";

  const input =
    kit === "shadcn" ? (
      <OfficialInput
        defaultValue="Email"
        disabled={disabled}
        aria-invalid={invalid || undefined}
      />
    ) : (
      <Input
        defaultValue="Email"
        disabled={disabled}
        aria-invalid={invalid || undefined}
      />
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="input"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.inputWell)}>{input}</div>
    </div>
  );
}

function TextareaHarness({ kit, state, theme }: TextareaCaptureParams) {
  const disabled = state === "disabled";
  const invalid = state === "invalid";
  const isDark = theme === "dark";

  const textarea =
    kit === "shadcn" ? (
      <OfficialTextarea
        defaultValue="Email"
        disabled={disabled}
        aria-invalid={invalid || undefined}
      />
    ) : (
      <Textarea
        defaultValue="Email"
        disabled={disabled}
        aria-invalid={invalid || undefined}
      />
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="textarea"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.inputWell)}>{textarea}</div>
    </div>
  );
}

function CheckboxHarness({ kit, state, theme }: CheckboxCaptureParams) {
  const disabled = state === "disabled";
  const invalid = state === "invalid";
  const checked = state === "checked";
  const isDark = theme === "dark";

  const checkbox =
    kit === "shadcn" ? (
      <OfficialCheckbox
        checked={checked}
        disabled={disabled}
        aria-invalid={invalid || undefined}
      />
    ) : (
      <Checkbox
        checked={checked}
        disabled={disabled}
        aria-invalid={invalid || undefined}
      />
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="checkbox"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {checkbox}
    </div>
  );
}

function RadioGroupHarness({ kit, state, theme }: RadioGroupCaptureParams) {
  const disabled = state === "disabled";
  const invalid = state === "invalid";
  const checked = state === "checked";
  const isDark = theme === "dark";

  const control =
    kit === "shadcn" ? (
      <OfficialRadioGroup value={checked ? "on" : ""}>
        <OfficialRadioGroupItem
          value="on"
          disabled={disabled}
          aria-invalid={invalid || undefined}
        />
      </OfficialRadioGroup>
    ) : (
      <RadioGroup value={checked ? "on" : ""}>
        <RadioGroupItem
          value="on"
          disabled={disabled}
          aria-invalid={invalid || undefined}
        />
      </RadioGroup>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="radio-group"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {control}
    </div>
  );
}

function SwitchHarness({ kit, state, theme }: SwitchCaptureParams) {
  const disabled = state === "disabled";
  const checked = state === "checked";
  const isDark = theme === "dark";

  const control =
    kit === "shadcn" ? (
      <OfficialSwitch checked={checked} disabled={disabled} />
    ) : (
      <Switch checked={checked} disabled={disabled} />
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="switch"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {control}
    </div>
  );
}

function CardBody({ withAction }: { withAction: boolean }) {
  return (
    <>
      <CardTitle>Login to your account</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
      {withAction ? <CardAction>Action</CardAction> : null}
    </>
  );
}

function OfficialCardBody({ withAction }: { withAction: boolean }) {
  return (
    <>
      <OfficialCardTitle>Login to your account</OfficialCardTitle>
      <OfficialCardDescription>
        Enter your email below to login to your account
      </OfficialCardDescription>
      {withAction ? (
        <OfficialCardAction>Action</OfficialCardAction>
      ) : null}
    </>
  );
}

function CardHarness({ kit, state, theme }: CardCaptureParams) {
  const isDark = theme === "dark";
  const withAction = state === "with-action";

  const card =
    kit === "shadcn" ? (
      <OfficialCard>
        <OfficialCardHeader>
          <OfficialCardBody withAction={withAction} />
        </OfficialCardHeader>
        <OfficialCardContent>
          A short body of copy that wraps at this width.
        </OfficialCardContent>
        <OfficialCardFooter>Need help?</OfficialCardFooter>
      </OfficialCard>
    ) : (
      <Card>
        <CardHeader>
          <CardBody withAction={withAction} />
        </CardHeader>
        <CardContent>
          A short body of copy that wraps at this width.
        </CardContent>
        <CardFooter>Need help?</CardFooter>
      </Card>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="card"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.cardWell)}>{card}</div>
    </div>
  );
}

const POPOVER_TRIGGER = "Open popover";
const POPOVER_TITLE = "Dimensions";
const POPOVER_DESCRIPTION = "Set the dimensions for the layer.";

const DIALOG_TITLE = "Edit profile";
const DIALOG_DESCRIPTION =
  "Make changes to your profile here. Click save when you are done.";
const DIALOG_BODY = "This is the dialog body.";
const DIALOG_SAVE = "Save changes";

/**
 * Portaled overlay/content mount on document.body. Dark Neutral tokens and
 * `.dark` must live on <html> so both kits inherit the same theme.
 */
function usePortalDocumentTheme(isDark: boolean) {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const applied: string[] = [];
    if (isDark) {
      html.classList.add("dark");
      applied.push("dark");
      const sx = stylex.props(darkTheme);
      for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
        html.classList.add(cls);
        applied.push(cls);
      }
    }
    return () => {
      for (const cls of applied) {
        html.classList.remove(cls);
      }
    };
  }, [isDark]);
}

function DialogHarness({ kit, state, theme }: DialogCaptureParams) {
  const isDark = theme === "dark";
  const showCloseButton = state !== "no-close";
  usePortalDocumentTheme(isDark);

  const dialog =
    kit === "shadcn" ? (
      <OfficialDialog open onOpenChange={() => {}}>
        <OfficialDialogContent showCloseButton={showCloseButton}>
          <OfficialDialogHeader>
            <OfficialDialogTitle>{DIALOG_TITLE}</OfficialDialogTitle>
            <OfficialDialogDescription>
              {DIALOG_DESCRIPTION}
            </OfficialDialogDescription>
          </OfficialDialogHeader>
          <p>{DIALOG_BODY}</p>
          <OfficialDialogFooter>
            <OfficialButton>{DIALOG_SAVE}</OfficialButton>
          </OfficialDialogFooter>
        </OfficialDialogContent>
      </OfficialDialog>
    ) : (
      <Dialog open onOpenChange={() => {}}>
        <DialogContent showCloseButton={showCloseButton}>
          <DialogHeader>
            <DialogTitle>{DIALOG_TITLE}</DialogTitle>
            <DialogDescription>{DIALOG_DESCRIPTION}</DialogDescription>
          </DialogHeader>
          <p>{DIALOG_BODY}</p>
          <DialogFooter>
            <Button>{DIALOG_SAVE}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="dialog"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {dialog}
    </div>
  );
}

const ALERT_DIALOG_TITLE = "Are you absolutely sure?";
const ALERT_DIALOG_DESCRIPTION =
  "This action cannot be undone. This will permanently delete your account and remove your data from our servers.";
const ALERT_DIALOG_CANCEL = "Cancel";
const ALERT_DIALOG_CONTINUE = "Continue";

function AlertDialogHarness({ kit, state, theme }: AlertDialogCaptureParams) {
  const isDark = theme === "dark";
  usePortalDocumentTheme(isDark);

  const alertDialog =
    kit === "shadcn" ? (
      <OfficialAlertDialog open onOpenChange={() => {}}>
        <OfficialAlertDialogContent>
          <OfficialAlertDialogHeader>
            <OfficialAlertDialogTitle>{ALERT_DIALOG_TITLE}</OfficialAlertDialogTitle>
            <OfficialAlertDialogDescription>
              {ALERT_DIALOG_DESCRIPTION}
            </OfficialAlertDialogDescription>
          </OfficialAlertDialogHeader>
          <OfficialAlertDialogFooter>
            <OfficialAlertDialogCancel>
              {ALERT_DIALOG_CANCEL}
            </OfficialAlertDialogCancel>
            <OfficialAlertDialogAction>
              {ALERT_DIALOG_CONTINUE}
            </OfficialAlertDialogAction>
          </OfficialAlertDialogFooter>
        </OfficialAlertDialogContent>
      </OfficialAlertDialog>
    ) : (
      <AlertDialog open onOpenChange={() => {}}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{ALERT_DIALOG_TITLE}</AlertDialogTitle>
            <AlertDialogDescription>
              {ALERT_DIALOG_DESCRIPTION}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{ALERT_DIALOG_CANCEL}</AlertDialogCancel>
            <AlertDialogAction>{ALERT_DIALOG_CONTINUE}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="alert-dialog"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {alertDialog}
    </div>
  );
}

const SELECT_PLACEHOLDER = "Select a fruit";
const SELECT_VALUE_APPLE = "apple";

function SelectOptions({ kit }: { kit: CaptureKit }) {
  if (kit === "shadcn") {
    return (
      <>
        <OfficialSelectGroup>
          <OfficialSelectLabel>Fruits</OfficialSelectLabel>
          <OfficialSelectItem value="apple">Apple</OfficialSelectItem>
          <OfficialSelectItem value="banana">Banana</OfficialSelectItem>
          <OfficialSelectItem value="blueberry">Blueberry</OfficialSelectItem>
        </OfficialSelectGroup>
        <OfficialSelectSeparator />
        <OfficialSelectGroup>
          <OfficialSelectLabel>Vegetables</OfficialSelectLabel>
          <OfficialSelectItem value="carrot">Carrot</OfficialSelectItem>
          <OfficialSelectItem value="broccoli">Broccoli</OfficialSelectItem>
        </OfficialSelectGroup>
      </>
    );
  }
  return (
    <>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="carrot">Carrot</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
      </SelectGroup>
    </>
  );
}

const SHEET_TITLE = "Edit profile";
const SHEET_DESCRIPTION =
  "Make changes to your profile here. Click save when you are done.";
const SHEET_BODY = "This is the sheet body.";
const SHEET_SAVE = "Save changes";

function sheetSideFor(
  state: SheetCaptureParams["state"],
): "right" | "left" | "top" | "bottom" | undefined {
  if (state === "default") return undefined;
  return state;
}

function SheetHarness({ kit, state, theme }: SheetCaptureParams) {
  const isDark = theme === "dark";
  const side = sheetSideFor(state);
  usePortalDocumentTheme(isDark);

  const sheet =
    kit === "shadcn" ? (
      <OfficialSheet open onOpenChange={() => {}}>
        <OfficialSheetContent side={side}>
          <OfficialSheetHeader>
            <OfficialSheetTitle>{SHEET_TITLE}</OfficialSheetTitle>
            <OfficialSheetDescription>
              {SHEET_DESCRIPTION}
            </OfficialSheetDescription>
          </OfficialSheetHeader>
          <p>{SHEET_BODY}</p>
          <OfficialSheetFooter>
            <OfficialButton>{SHEET_SAVE}</OfficialButton>
          </OfficialSheetFooter>
        </OfficialSheetContent>
      </OfficialSheet>
    ) : (
      <Sheet open onOpenChange={() => {}}>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>{SHEET_TITLE}</SheetTitle>
            <SheetDescription>{SHEET_DESCRIPTION}</SheetDescription>
          </SheetHeader>
          <p>{SHEET_BODY}</p>
          <SheetFooter>
            <Button>{SHEET_SAVE}</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="sheet"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {sheet}
    </div>
  );
}

function SelectHarness({ kit, state, theme }: SelectCaptureParams) {
  const isDark = theme === "dark";
  const isOpen = state === "open";
  const disabled = state === "disabled";
  const invalid = state === "invalid";
  const size = state === "sm" ? "sm" : "default";
  const value =
    state === "selected" || state === "open" ? SELECT_VALUE_APPLE : undefined;
  usePortalDocumentTheme(isDark);

  const select =
    kit === "shadcn" ? (
      <OfficialSelect
        open={isOpen ? true : undefined}
        onOpenChange={() => {}}
        value={value}
        disabled={disabled}
      >
        <OfficialSelectTrigger
          size={size}
          aria-invalid={invalid || undefined}
        >
          <OfficialSelectValue placeholder={SELECT_PLACEHOLDER} />
        </OfficialSelectTrigger>
        <OfficialSelectContent position="popper" side="bottom" align="center">
          <SelectOptions kit={kit} />
        </OfficialSelectContent>
      </OfficialSelect>
    ) : (
      <Select
        open={isOpen ? true : undefined}
        onOpenChange={() => {}}
        value={value}
        disabled={disabled}
      >
        <SelectTrigger size={size} aria-invalid={invalid || undefined}>
          <SelectValue placeholder={SELECT_PLACEHOLDER} />
        </SelectTrigger>
        <SelectContent position="popper" side="bottom" align="center">
          <SelectOptions kit={kit} />
        </SelectContent>
      </Select>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="select"
      data-state={state}
      {...stylex.props(
        isDark && darkTheme,
        isOpen ? styles.selectOpenFrame : styles.frame,
      )}
    >
      {select}
    </div>
  );
}

const DROPDOWN_TRIGGER = "Open";

function DropdownMenuBody({ kit }: { kit: CaptureKit }) {
  if (kit === "shadcn") {
    return (
      <>
        <OfficialDropdownMenuLabel>My Account</OfficialDropdownMenuLabel>
        <OfficialDropdownMenuSeparator />
        <OfficialDropdownMenuGroup>
          <OfficialDropdownMenuItem>
            Profile
            <OfficialDropdownMenuShortcut>⇧⌘P</OfficialDropdownMenuShortcut>
          </OfficialDropdownMenuItem>
        </OfficialDropdownMenuGroup>
        <OfficialDropdownMenuSeparator />
        <OfficialDropdownMenuCheckboxItem checked>
          Status Bar
        </OfficialDropdownMenuCheckboxItem>
        <OfficialDropdownMenuRadioGroup value="bottom">
          <OfficialDropdownMenuRadioItem value="bottom">
            Bottom
          </OfficialDropdownMenuRadioItem>
        </OfficialDropdownMenuRadioGroup>
      </>
    );
  }
  return (
    <>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem checked>Status Bar</DropdownMenuCheckboxItem>
      <DropdownMenuRadioGroup value="bottom">
        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </>
  );
}

function DropdownMenuHarness({
  kit,
  state,
  theme,
}: DropdownMenuCaptureParams) {
  const isDark = theme === "dark";
  const isOpen = state === "open";
  usePortalDocumentTheme(isDark);

  const menu =
    kit === "shadcn" ? (
      <OfficialDropdownMenu
        open={isOpen ? true : undefined}
        onOpenChange={() => {}}
      >
        <OfficialDropdownMenuTrigger asChild>
          <OfficialButton variant="outline">{DROPDOWN_TRIGGER}</OfficialButton>
        </OfficialDropdownMenuTrigger>
        <OfficialDropdownMenuContent side="bottom" align="start">
          <DropdownMenuBody kit={kit} />
        </OfficialDropdownMenuContent>
      </OfficialDropdownMenu>
    ) : (
      <DropdownMenu open={isOpen ? true : undefined} onOpenChange={() => {}}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{DROPDOWN_TRIGGER}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start">
          <DropdownMenuBody kit={kit} />
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="dropdown-menu"
      data-state={state}
      {...stylex.props(
        isDark && darkTheme,
        isOpen ? styles.selectOpenFrame : styles.frame,
      )}
    >
      {menu}
    </div>
  );
}

const CONTEXT_MENU_TRIGGER = "Right click here";
const CONTEXT_MENU_TRIGGER_CLASS =
  "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm";

function ContextMenuBody({ kit }: { kit: CaptureKit }) {
  if (kit === "shadcn") {
    return (
      <>
        <OfficialContextMenuItem>Back</OfficialContextMenuItem>
        <OfficialContextMenuItem>Forward</OfficialContextMenuItem>
        <OfficialContextMenuItem>
          Reload
          <OfficialContextMenuShortcut>⌘R</OfficialContextMenuShortcut>
        </OfficialContextMenuItem>
        <OfficialContextMenuSeparator />
        <OfficialContextMenuItem>Save Page As…</OfficialContextMenuItem>
        <OfficialContextMenuItem>Print</OfficialContextMenuItem>
      </>
    );
  }
  return (
    <>
      <ContextMenuItem>Back</ContextMenuItem>
      <ContextMenuItem>Forward</ContextMenuItem>
      <ContextMenuItem>
        Reload
        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Save Page As…</ContextMenuItem>
      <ContextMenuItem>Print</ContextMenuItem>
    </>
  );
}

function ContextMenuHarness({
  kit,
  state,
  theme,
}: ContextMenuCaptureParams) {
  const isDark = theme === "dark";
  const isOpen = state === "open";
  usePortalDocumentTheme(isDark);

  const menu =
    kit === "shadcn" ? (
      <OfficialContextMenu
        open={isOpen ? true : undefined}
        onOpenChange={() => {}}
      >
        <OfficialContextMenuTrigger className={CONTEXT_MENU_TRIGGER_CLASS}>
          {CONTEXT_MENU_TRIGGER}
        </OfficialContextMenuTrigger>
        <OfficialContextMenuContent>
          <ContextMenuBody kit={kit} />
        </OfficialContextMenuContent>
      </OfficialContextMenu>
    ) : (
      <ContextMenu open={isOpen ? true : undefined} onOpenChange={() => {}}>
        <ContextMenuTrigger className={CONTEXT_MENU_TRIGGER_CLASS}>
          {CONTEXT_MENU_TRIGGER}
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuBody kit={kit} />
        </ContextMenuContent>
      </ContextMenu>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="context-menu"
      data-state={state}
      {...stylex.props(
        isDark && darkTheme,
        isOpen ? styles.selectOpenFrame : styles.frame,
      )}
    >
      {menu}
    </div>
  );
}

const TABS_ACCOUNT = "Account";
const TABS_PASSWORD = "Password";
const TABS_ACCOUNT_BODY = "Make changes to your account here.";
const TABS_PASSWORD_BODY = "Change your password here.";

function TabsHarness({ kit, state, theme }: TabsCaptureParams) {
  const isDark = theme === "dark";
  const value = state === "second" ? "password" : "account";
  const passwordDisabled = state === "disabled";

  const tabs =
    kit === "shadcn" ? (
      <OfficialTabs defaultValue={value}>
        <OfficialTabsList>
          <OfficialTabsTrigger value="account">{TABS_ACCOUNT}</OfficialTabsTrigger>
          <OfficialTabsTrigger value="password" disabled={passwordDisabled}>
            {TABS_PASSWORD}
          </OfficialTabsTrigger>
        </OfficialTabsList>
        <OfficialTabsContent value="account">
          {TABS_ACCOUNT_BODY}
        </OfficialTabsContent>
        <OfficialTabsContent value="password">
          {TABS_PASSWORD_BODY}
        </OfficialTabsContent>
      </OfficialTabs>
    ) : (
      <Tabs defaultValue={value}>
        <TabsList>
          <TabsTrigger value="account">{TABS_ACCOUNT}</TabsTrigger>
          <TabsTrigger value="password" disabled={passwordDisabled}>
            {TABS_PASSWORD}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">{TABS_ACCOUNT_BODY}</TabsContent>
        <TabsContent value="password">{TABS_PASSWORD_BODY}</TabsContent>
      </Tabs>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="tabs"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {tabs}
    </div>
  );
}

function PopoverHarness({ kit, theme }: PopoverCaptureParams) {
  const isDark = theme === "dark";
  usePortalDocumentTheme(isDark);

  const popover =
    kit === "shadcn" ? (
      <OfficialPopover open onOpenChange={() => {}}>
        <OfficialPopoverTrigger asChild>
          <OfficialButton variant="outline">{POPOVER_TRIGGER}</OfficialButton>
        </OfficialPopoverTrigger>
        <OfficialPopoverContent side="bottom" align="center">
          <OfficialPopoverHeader>
            <OfficialPopoverTitle>{POPOVER_TITLE}</OfficialPopoverTitle>
            <OfficialPopoverDescription>
              {POPOVER_DESCRIPTION}
            </OfficialPopoverDescription>
          </OfficialPopoverHeader>
        </OfficialPopoverContent>
      </OfficialPopover>
    ) : (
      <Popover open onOpenChange={() => {}}>
        <PopoverTrigger asChild>
          <Button variant="outline">{POPOVER_TRIGGER}</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="center">
          <PopoverHeader>
            <PopoverTitle>{POPOVER_TITLE}</PopoverTitle>
            <PopoverDescription>{POPOVER_DESCRIPTION}</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="popover"
      data-state="default"
      {...stylex.props(isDark && darkTheme, styles.popoverOpenFrame)}
    >
      {popover}
    </div>
  );
}

const HOVER_CARD_TRIGGER = "@ada";
const HOVER_CARD_TITLE = "Ada Lovelace";
const HOVER_CARD_HANDLE = "@ada";

function HoverCardHarness({ kit, theme }: HoverCardCaptureParams) {
  const isDark = theme === "dark";
  usePortalDocumentTheme(isDark);

  const hoverCard =
    kit === "shadcn" ? (
      <OfficialHoverCard open onOpenChange={() => {}}>
        <OfficialHoverCardTrigger asChild>
          <OfficialButton variant="outline">{HOVER_CARD_TRIGGER}</OfficialButton>
        </OfficialHoverCardTrigger>
        <OfficialHoverCardContent side="bottom" align="center">
          <div>{HOVER_CARD_TITLE}</div>
          <div>{HOVER_CARD_HANDLE}</div>
        </OfficialHoverCardContent>
      </OfficialHoverCard>
    ) : (
      <HoverCard open onOpenChange={() => {}}>
        <HoverCardTrigger asChild>
          <Button variant="outline">{HOVER_CARD_TRIGGER}</Button>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" align="center">
          <div>{HOVER_CARD_TITLE}</div>
          <div>{HOVER_CARD_HANDLE}</div>
        </HoverCardContent>
      </HoverCard>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="hover-card"
      data-state="default"
      {...stylex.props(isDark && darkTheme, styles.popoverOpenFrame)}
    >
      {hoverCard}
    </div>
  );
}

const TOOLTIP_TRIGGER = "Hover";
const TOOLTIP_CONTENT = "Add to library";

function TooltipHarness({ kit, theme }: TooltipCaptureParams) {
  const isDark = theme === "dark";
  usePortalDocumentTheme(isDark);

  const tooltip =
    kit === "shadcn" ? (
      <OfficialTooltipProvider delayDuration={0}>
        <OfficialTooltip open onOpenChange={() => {}}>
          <OfficialTooltipTrigger asChild>
            <OfficialButton variant="outline">{TOOLTIP_TRIGGER}</OfficialButton>
          </OfficialTooltipTrigger>
          <OfficialTooltipContent side="top">
            {TOOLTIP_CONTENT}
          </OfficialTooltipContent>
        </OfficialTooltip>
      </OfficialTooltipProvider>
    ) : (
      <TooltipProvider delayDuration={0}>
        <Tooltip open onOpenChange={() => {}}>
          <TooltipTrigger asChild>
            <Button variant="outline">{TOOLTIP_TRIGGER}</Button>
          </TooltipTrigger>
          <TooltipContent side="top">{TOOLTIP_CONTENT}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="tooltip"
      data-state="default"
      {...stylex.props(isDark && darkTheme, styles.tooltipFrame)}
    >
      {tooltip}
    </div>
  );
}


const BADGE_LABEL = "Badge";

function BadgeHarness({ kit, variant, state, theme }: BadgeCaptureParams) {
  const isDark = theme === "dark";
  const tabIndex = state === "focus-visible" ? 0 : undefined;

  const badge =
    kit === "shadcn" ? (
      <OfficialBadge variant={variant} tabIndex={tabIndex}>
        {BADGE_LABEL}
      </OfficialBadge>
    ) : (
      <Badge variant={variant} tabIndex={tabIndex}>
        {BADGE_LABEL}
      </Badge>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="badge"
      data-variant={variant}
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {badge}
    </div>
  );
}

function SeparatorHarness({ kit, state, theme }: SeparatorCaptureParams) {
  const isDark = theme === "dark";
  const orientation = state;
  const wellStyle =
    orientation === "vertical"
      ? styles.separatorVerticalWell
      : styles.separatorHorizontalWell;

  const separator =
    kit === "shadcn" ? (
      <OfficialSeparator orientation={orientation} />
    ) : (
      <Separator orientation={orientation} />
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="separator"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div data-separator-well="" {...stylex.props(wellStyle)}>
        {separator}
      </div>
    </div>
  );
}

function SkeletonHarness({ kit, state, theme }: SkeletonCaptureParams) {
  const isDark = theme === "dark";
  const isCircle = state === "circle";
  const radius: SkeletonRadius = isCircle ? "full" : "md";
  const box = isCircle ? styles.skeletonCircle : styles.skeletonBar;
  const officialClassName = isCircle ? "size-full rounded-full" : "size-full";

  const skeleton =
    kit === "shadcn" ? (
      <OfficialSkeleton className={officialClassName} />
    ) : (
      <Skeleton radius={radius} />
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="skeleton"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(box)}>{skeleton}</div>
    </div>
  );
}

const AVATAR_INITIALS = "CN";
const AVATAR_INITIALS_B = "LR";
const AVATAR_GROUP_COUNT = "2";

function avatarSizeFor(
  state: AvatarCaptureParams["state"],
): "default" | "sm" | "lg" {
  if (state === "sm" || state === "lg") return state;
  return "default";
}

function AvatarHarness({ kit, state, theme }: AvatarCaptureParams) {
  const isDark = theme === "dark";
  const size = avatarSizeFor(state);
  const showBadge = state === "badge";
  const showGroup = state === "group";

  let body;
  if (showGroup) {
    body =
      kit === "shadcn" ? (
        <OfficialAvatarGroup>
          <OfficialAvatar>
            <OfficialAvatarFallback>{AVATAR_INITIALS}</OfficialAvatarFallback>
          </OfficialAvatar>
          <OfficialAvatar>
            <OfficialAvatarFallback>{AVATAR_INITIALS_B}</OfficialAvatarFallback>
          </OfficialAvatar>
          <OfficialAvatarGroupCount>{AVATAR_GROUP_COUNT}</OfficialAvatarGroupCount>
        </OfficialAvatarGroup>
      ) : (
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>{AVATAR_INITIALS}</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>{AVATAR_INITIALS_B}</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>{AVATAR_GROUP_COUNT}</AvatarGroupCount>
        </AvatarGroup>
      );
  } else {
    body =
      kit === "shadcn" ? (
        <OfficialAvatar size={size}>
          <OfficialAvatarFallback>{AVATAR_INITIALS}</OfficialAvatarFallback>
          {showBadge ? <OfficialAvatarBadge /> : null}
        </OfficialAvatar>
      ) : (
        <Avatar size={size}>
          <AvatarFallback>{AVATAR_INITIALS}</AvatarFallback>
          {showBadge ? <AvatarBadge /> : null}
        </Avatar>
      );
  }

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="avatar"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {body}
    </div>
  );
}

function progressValueFor(state: ProgressCaptureParams["state"]): number {
  if (state === "halfway") return 60;
  if (state === "full") return 100;
  return 0;
}

function ProgressHarness({ kit, state, theme }: ProgressCaptureParams) {
  const isDark = theme === "dark";
  const value = progressValueFor(state);

  const progress =
    kit === "shadcn" ? (
      <OfficialProgress value={value} />
    ) : (
      <Progress value={value} />
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="progress"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.progressWell)}>{progress}</div>
    </div>
  );
}

const ACCORDION_ITEM_1 = "item-1";
const ACCORDION_ITEM_2 = "item-2";
const ACCORDION_TITLE_1 = "Is it accessible?";
const ACCORDION_TITLE_2 = "Is it styled?";
const ACCORDION_BODY_1 = "Yes. It adheres to the WAI-ARIA design pattern.";
const ACCORDION_BODY_2 =
  "Yes. It comes with default styles that match the other components.";

function accordionValueFor(
  state: AccordionCaptureParams["state"],
): string {
  if (state === "open") return ACCORDION_ITEM_1;
  if (state === "second") return ACCORDION_ITEM_2;
  return "";
}

function AccordionHarness({ kit, state, theme }: AccordionCaptureParams) {
  const isDark = theme === "dark";
  const value = accordionValueFor(state);

  const accordion =
    kit === "shadcn" ? (
      <OfficialAccordion
        type="single"
        collapsible
        value={value}
        onValueChange={() => {}}
      >
        <OfficialAccordionItem value={ACCORDION_ITEM_1}>
          <OfficialAccordionTrigger>{ACCORDION_TITLE_1}</OfficialAccordionTrigger>
          <OfficialAccordionContent>{ACCORDION_BODY_1}</OfficialAccordionContent>
        </OfficialAccordionItem>
        <OfficialAccordionItem value={ACCORDION_ITEM_2}>
          <OfficialAccordionTrigger>{ACCORDION_TITLE_2}</OfficialAccordionTrigger>
          <OfficialAccordionContent>{ACCORDION_BODY_2}</OfficialAccordionContent>
        </OfficialAccordionItem>
      </OfficialAccordion>
    ) : (
      <Accordion
        type="single"
        collapsible
        value={value}
        onValueChange={() => {}}
      >
        <AccordionItem value={ACCORDION_ITEM_1}>
          <AccordionTrigger>{ACCORDION_TITLE_1}</AccordionTrigger>
          <AccordionContent>{ACCORDION_BODY_1}</AccordionContent>
        </AccordionItem>
        <AccordionItem value={ACCORDION_ITEM_2}>
          <AccordionTrigger>{ACCORDION_TITLE_2}</AccordionTrigger>
          <AccordionContent>{ACCORDION_BODY_2}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="accordion"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.accordionWell)}>{accordion}</div>
    </div>
  );
}

const TOGGLE_LABEL = "Italic";

function toggleVariantFor(
  state: ToggleCaptureParams["state"],
): ToggleVariant {
  return state === "outline" ? "outline" : "default";
}

function toggleSizeFor(state: ToggleCaptureParams["state"]): ToggleSize {
  if (state === "sm" || state === "lg") return state;
  return "default";
}

function ToggleHarness({ kit, state, theme }: ToggleCaptureParams) {
  const isDark = theme === "dark";
  const disabled = state === "disabled";
  const pressed = state === "on";
  const variant = toggleVariantFor(state);
  const size = toggleSizeFor(state);

  const toggle =
    kit === "shadcn" ? (
      <OfficialToggle
        variant={variant}
        size={size}
        pressed={pressed}
        disabled={disabled}
        onPressedChange={() => {}}
      >
        {TOGGLE_LABEL}
      </OfficialToggle>
    ) : (
      <Toggle
        variant={variant}
        size={size}
        pressed={pressed}
        disabled={disabled}
        onPressedChange={() => {}}
      >
        {TOGGLE_LABEL}
      </Toggle>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="toggle"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {toggle}
    </div>
  );
}

function SliderHarness({ kit, state, theme }: SliderCaptureParams) {
  const isDark = theme === "dark";
  const disabled = state === "disabled";
  const value = state === "range" ? ([25, 75] as const) : ([50] as const);

  const slider =
    kit === "shadcn" ? (
      <OfficialSlider
        value={[...value]}
        disabled={disabled}
        onValueChange={() => {}}
      />
    ) : (
      <Slider
        value={[...value]}
        disabled={disabled}
        onValueChange={() => {}}
      />
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="slider"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.sliderWell)}>{slider}</div>
    </div>
  );
}

const BREADCRUMB_HOME = "Home";
const BREADCRUMB_COMPONENTS = "Components";
const BREADCRUMB_PAGE = "Breadcrumb";

function BreadcrumbTrail({
  kit,
  ellipsis,
}: {
  kit: CaptureKit;
  ellipsis: boolean;
}) {
  if (kit === "shadcn") {
    return (
      <OfficialBreadcrumb>
        <OfficialBreadcrumbList>
          <OfficialBreadcrumbItem>
            <OfficialBreadcrumbLink href="#">{BREADCRUMB_HOME}</OfficialBreadcrumbLink>
          </OfficialBreadcrumbItem>
          <OfficialBreadcrumbSeparator />
          {ellipsis ? (
            <>
              <OfficialBreadcrumbItem>
                <OfficialBreadcrumbEllipsis />
              </OfficialBreadcrumbItem>
              <OfficialBreadcrumbSeparator />
            </>
          ) : null}
          <OfficialBreadcrumbItem>
            <OfficialBreadcrumbLink href="#">
              {BREADCRUMB_COMPONENTS}
            </OfficialBreadcrumbLink>
          </OfficialBreadcrumbItem>
          <OfficialBreadcrumbSeparator />
          <OfficialBreadcrumbItem>
            <OfficialBreadcrumbPage>{BREADCRUMB_PAGE}</OfficialBreadcrumbPage>
          </OfficialBreadcrumbItem>
        </OfficialBreadcrumbList>
      </OfficialBreadcrumb>
    );
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{BREADCRUMB_HOME}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {ellipsis ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{BREADCRUMB_COMPONENTS}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{BREADCRUMB_PAGE}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

const SCROLL_AREA_TAGS = [
  "Tag 01",
  "Tag 02",
  "Tag 03",
  "Tag 04",
  "Tag 05",
  "Tag 06",
  "Tag 07",
  "Tag 08",
  "Tag 09",
  "Tag 10",
  "Tag 11",
  "Tag 12",
  "Tag 13",
  "Tag 14",
  "Tag 15",
  "Tag 16",
  "Tag 17",
  "Tag 18",
  "Tag 19",
  "Tag 20",
] as const;

function ScrollAreaVerticalContent() {
  return (
    <div {...stylex.props(styles.scrollAreaList)}>
      {SCROLL_AREA_TAGS.map((tag) => (
        <div key={tag} {...stylex.props(styles.scrollAreaListItem)}>
          {tag}
        </div>
      ))}
    </div>
  );
}

function ScrollAreaHorizontalContent() {
  return (
    <div {...stylex.props(styles.scrollAreaStrip)}>
      {SCROLL_AREA_TAGS.map((tag) => (
        <div key={tag} {...stylex.props(styles.scrollAreaBlock)} />
      ))}
    </div>
  );
}

function ScrollAreaDemo({
  kit,
  orientation,
}: {
  kit: CaptureKit;
  orientation: "vertical" | "horizontal";
}) {
  const content =
    orientation === "vertical" ? (
      <ScrollAreaVerticalContent />
    ) : (
      <ScrollAreaHorizontalContent />
    );

  if (kit === "shadcn") {
    return (
      <OfficialScrollArea type="always" className="size-full">
        {content}
        {orientation === "horizontal" ? (
          <OfficialScrollBar orientation="horizontal" />
        ) : null}
      </OfficialScrollArea>
    );
  }

  return (
    <ScrollArea type="always">
      {content}
      {orientation === "horizontal" ? (
        <ScrollBar orientation="horizontal" />
      ) : null}
    </ScrollArea>
  );
}

function ScrollAreaHarness({ kit, state, theme }: ScrollAreaCaptureParams) {
  const isDark = theme === "dark";
  const well =
    state === "horizontal"
      ? styles.scrollAreaHorizontalWell
      : styles.scrollAreaVerticalWell;

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="scroll-area"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(well)}>
        <ScrollAreaDemo kit={kit} orientation={state} />
      </div>
    </div>
  );
}

function BreadcrumbHarness({ kit, state, theme }: BreadcrumbCaptureParams) {
  const isDark = theme === "dark";

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="breadcrumb"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.breadcrumbWell)}>
        <BreadcrumbTrail kit={kit} ellipsis={state === "ellipsis"} />
      </div>
    </div>
  );
}

const COLLAPSIBLE_TRIGGER = "Can I use this?";
const COLLAPSIBLE_BODY =
  "Yes. Free to use for personal and commercial projects. No attribution required.";

function CollapsibleHarness({ kit, state, theme }: CollapsibleCaptureParams) {
  const isDark = theme === "dark";
  const open = state === "open";

  const collapsible =
    kit === "shadcn" ? (
      <OfficialCollapsible open={open} onOpenChange={() => {}}>
        <OfficialCollapsibleTrigger asChild>
          <OfficialButton variant="outline">{COLLAPSIBLE_TRIGGER}</OfficialButton>
        </OfficialCollapsibleTrigger>
        <OfficialCollapsibleContent>
          {COLLAPSIBLE_BODY}
        </OfficialCollapsibleContent>
      </OfficialCollapsible>
    ) : (
      <Collapsible open={open} onOpenChange={() => {}}>
        <CollapsibleTrigger asChild>
          <Button variant="outline">{COLLAPSIBLE_TRIGGER}</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>{COLLAPSIBLE_BODY}</CollapsibleContent>
      </Collapsible>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="collapsible"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.collapsibleWell)}>{collapsible}</div>
    </div>
  );
}

function PaginationTrail({
  kit,
  ellipsis,
}: {
  kit: CaptureKit;
  ellipsis: boolean;
}) {
  if (kit === "shadcn") {
    return (
      <OfficialPagination>
        <OfficialPaginationContent>
          <OfficialPaginationItem>
            <OfficialPaginationPrevious href="#" />
          </OfficialPaginationItem>
          {ellipsis ? (
            <>
              <OfficialPaginationItem>
                <OfficialPaginationLink href="#">1</OfficialPaginationLink>
              </OfficialPaginationItem>
              <OfficialPaginationItem>
                <OfficialPaginationEllipsis />
              </OfficialPaginationItem>
              <OfficialPaginationItem>
                <OfficialPaginationLink href="#">8</OfficialPaginationLink>
              </OfficialPaginationItem>
              <OfficialPaginationItem>
                <OfficialPaginationLink href="#" isActive>
                  9
                </OfficialPaginationLink>
              </OfficialPaginationItem>
              <OfficialPaginationItem>
                <OfficialPaginationLink href="#">10</OfficialPaginationLink>
              </OfficialPaginationItem>
            </>
          ) : (
            <>
              <OfficialPaginationItem>
                <OfficialPaginationLink href="#">1</OfficialPaginationLink>
              </OfficialPaginationItem>
              <OfficialPaginationItem>
                <OfficialPaginationLink href="#" isActive>
                  2
                </OfficialPaginationLink>
              </OfficialPaginationItem>
              <OfficialPaginationItem>
                <OfficialPaginationLink href="#">3</OfficialPaginationLink>
              </OfficialPaginationItem>
            </>
          )}
          <OfficialPaginationItem>
            <OfficialPaginationNext href="#" />
          </OfficialPaginationItem>
        </OfficialPaginationContent>
      </OfficialPagination>
    );
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {ellipsis ? (
          <>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">8</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                9
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
          </>
        ) : (
          <>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function PaginationHarness({ kit, state, theme }: PaginationCaptureParams) {
  const isDark = theme === "dark";

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="pagination"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <PaginationTrail kit={kit} ellipsis={state === "ellipsis"} />
    </div>
  );
}

const ALERT_TITLE_DEFAULT = "Heads up";
const ALERT_DESC_DEFAULT = "You can add components to your app.";
const ALERT_TITLE_ERROR = "Error";
const ALERT_DESC_ERROR = "Your session has expired.";

function AlertBody({
  kit,
  state,
}: {
  kit: CaptureKit;
  state: AlertCaptureParams["state"];
}) {
  const withIcon = state === "with-icon" || state === "destructive";
  const variant = state === "destructive" ? "destructive" : "default";
  const title = state === "destructive" ? ALERT_TITLE_ERROR : ALERT_TITLE_DEFAULT;
  const description =
    state === "destructive" ? ALERT_DESC_ERROR : ALERT_DESC_DEFAULT;

  if (kit === "shadcn") {
    return (
      <OfficialAlert variant={variant}>
        {withIcon ? <CircleAlert /> : null}
        <OfficialAlertTitle>{title}</OfficialAlertTitle>
        <OfficialAlertDescription>{description}</OfficialAlertDescription>
      </OfficialAlert>
    );
  }

  return (
    <Alert variant={variant}>
      {withIcon ? <CircleAlert /> : null}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}

function AlertHarness({ kit, state, theme }: AlertCaptureParams) {
  const isDark = theme === "dark";

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="alert"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.alertWell)}>
        <AlertBody kit={kit} state={state} />
      </div>
    </div>
  );
}

const TOGGLE_GROUP_BOLD = "Bold";
const TOGGLE_GROUP_ITALIC = "Italic";
const TOGGLE_GROUP_UNDERLINE = "Underline";

function toggleGroupVariantFor(
  state: ToggleGroupCaptureParams["state"],
): ToggleVariant {
  return state === "outline" ? "outline" : "default";
}

function toggleGroupSizeFor(
  state: ToggleGroupCaptureParams["state"],
): ToggleSize {
  if (state === "sm" || state === "lg") return state;
  return "default";
}

const TABLE_INVOICES = [
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit Card",
    amount: "$250.00",
  },
  {
    invoice: "INV002",
    status: "Pending",
    method: "PayPal",
    amount: "$150.00",
  },
  {
    invoice: "INV003",
    status: "Unpaid",
    method: "Bank Transfer",
    amount: "$350.00",
  },
] as const;
const TABLE_CAPTION = "A list of your recent invoices.";
const TABLE_TOTAL = "$750.00";

function InvoiceTable({
  kit,
  withFooter,
}: {
  kit: CaptureKit;
  withFooter: boolean;
}) {
  if (kit === "shadcn") {
    return (
      <OfficialTable>
        {withFooter ? (
          <OfficialTableCaption>{TABLE_CAPTION}</OfficialTableCaption>
        ) : null}
        <OfficialTableHeader>
          <OfficialTableRow>
            <OfficialTableHead>Invoice</OfficialTableHead>
            <OfficialTableHead>Status</OfficialTableHead>
            <OfficialTableHead>Method</OfficialTableHead>
            <OfficialTableHead className="text-right">Amount</OfficialTableHead>
          </OfficialTableRow>
        </OfficialTableHeader>
        <OfficialTableBody>
          {TABLE_INVOICES.map((row) => (
            <OfficialTableRow key={row.invoice}>
              <OfficialTableCell className="font-medium">
                {row.invoice}
              </OfficialTableCell>
              <OfficialTableCell>{row.status}</OfficialTableCell>
              <OfficialTableCell>{row.method}</OfficialTableCell>
              <OfficialTableCell className="text-right">
                {row.amount}
              </OfficialTableCell>
            </OfficialTableRow>
          ))}
        </OfficialTableBody>
        {withFooter ? (
          <OfficialTableFooter>
            <OfficialTableRow>
              <OfficialTableCell colSpan={3}>Total</OfficialTableCell>
              <OfficialTableCell className="text-right">
                {TABLE_TOTAL}
              </OfficialTableCell>
            </OfficialTableRow>
          </OfficialTableFooter>
        ) : null}
      </OfficialTable>
    );
  }

  return (
    <Table>
      {withFooter ? <TableCaption>{TABLE_CAPTION}</TableCaption> : null}
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TABLE_INVOICES.map((row) => (
          <TableRow key={row.invoice}>
            <TableCell className="font-medium">{row.invoice}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {withFooter ? (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{TABLE_TOTAL}</TableCell>
          </TableRow>
        </TableFooter>
      ) : null}
    </Table>
  );
}

function TableHarness({ kit, state, theme }: TableCaptureParams) {
  const isDark = theme === "dark";

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="table"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.tableWell)}>
        <InvoiceTable kit={kit} withFooter={state === "with-footer"} />
      </div>
    </div>
  );
}

function ToggleGroupHarness({ kit, state, theme }: ToggleGroupCaptureParams) {
  const isDark = theme === "dark";
  const variant = toggleGroupVariantFor(state);
  const size = toggleGroupSizeFor(state);

  const group =
    kit === "shadcn" ? (
      <OfficialToggleGroup
        type="single"
        value="bold"
        onValueChange={() => {}}
        variant={variant}
        size={size}
        spacing={0}
      >
        <OfficialToggleGroupItem value="bold">
          {TOGGLE_GROUP_BOLD}
        </OfficialToggleGroupItem>
        <OfficialToggleGroupItem value="italic">
          {TOGGLE_GROUP_ITALIC}
        </OfficialToggleGroupItem>
        <OfficialToggleGroupItem value="underline">
          {TOGGLE_GROUP_UNDERLINE}
        </OfficialToggleGroupItem>
      </OfficialToggleGroup>
    ) : (
      <ToggleGroup
        type="single"
        value="bold"
        onValueChange={() => {}}
        variant={variant}
        size={size}
        spacing={0}
      >
        <ToggleGroupItem value="bold">{TOGGLE_GROUP_BOLD}</ToggleGroupItem>
        <ToggleGroupItem value="italic">{TOGGLE_GROUP_ITALIC}</ToggleGroupItem>
        <ToggleGroupItem value="underline">
          {TOGGLE_GROUP_UNDERLINE}
        </ToggleGroupItem>
      </ToggleGroup>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="toggle-group"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {group}
    </div>
  );
}

const MENUBAR_FILE = "File";
const MENUBAR_EDIT = "Edit";
const MENUBAR_VIEW = "View";
const MENUBAR_PROFILES = "Profiles";
const MENUBAR_FILE_VALUE = "file";
const MENUBAR_NEW_TAB = "New Tab";
const MENUBAR_NEW_WINDOW = "New Window";
const MENUBAR_SHARE = "Share";
const MENUBAR_PRINT = "Print";

function MenubarFileItems({ kit }: { kit: CaptureKit }) {
  if (kit === "shadcn") {
    return (
      <>
        <OfficialMenubarItem>{MENUBAR_NEW_TAB}</OfficialMenubarItem>
        <OfficialMenubarItem>{MENUBAR_NEW_WINDOW}</OfficialMenubarItem>
        <OfficialMenubarSeparator />
        <OfficialMenubarItem>{MENUBAR_SHARE}</OfficialMenubarItem>
        <OfficialMenubarSeparator />
        <OfficialMenubarItem>{MENUBAR_PRINT}</OfficialMenubarItem>
      </>
    );
  }
  return (
    <>
      <MenubarItem>{MENUBAR_NEW_TAB}</MenubarItem>
      <MenubarItem>{MENUBAR_NEW_WINDOW}</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>{MENUBAR_SHARE}</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>{MENUBAR_PRINT}</MenubarItem>
    </>
  );
}

function MenubarHarness({ kit, state, theme }: MenubarCaptureParams) {
  const isDark = theme === "dark";
  const isOpen = state === "open";
  const value = isOpen ? MENUBAR_FILE_VALUE : "";
  usePortalDocumentTheme(isDark);

  const menubar =
    kit === "shadcn" ? (
      <OfficialMenubar value={value} onValueChange={() => {}}>
        <OfficialMenubarMenu value={MENUBAR_FILE_VALUE}>
          <OfficialMenubarTrigger>{MENUBAR_FILE}</OfficialMenubarTrigger>
          <OfficialMenubarContent>
            <MenubarFileItems kit={kit} />
          </OfficialMenubarContent>
        </OfficialMenubarMenu>
        <OfficialMenubarMenu value="edit">
          <OfficialMenubarTrigger>{MENUBAR_EDIT}</OfficialMenubarTrigger>
        </OfficialMenubarMenu>
        <OfficialMenubarMenu value="view">
          <OfficialMenubarTrigger>{MENUBAR_VIEW}</OfficialMenubarTrigger>
        </OfficialMenubarMenu>
        <OfficialMenubarMenu value="profiles">
          <OfficialMenubarTrigger>{MENUBAR_PROFILES}</OfficialMenubarTrigger>
        </OfficialMenubarMenu>
      </OfficialMenubar>
    ) : (
      <Menubar value={value} onValueChange={() => {}}>
        <MenubarMenu value={MENUBAR_FILE_VALUE}>
          <MenubarTrigger>{MENUBAR_FILE}</MenubarTrigger>
          <MenubarContent>
            <MenubarFileItems kit={kit} />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu value="edit">
          <MenubarTrigger>{MENUBAR_EDIT}</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu value="view">
          <MenubarTrigger>{MENUBAR_VIEW}</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu value="profiles">
          <MenubarTrigger>{MENUBAR_PROFILES}</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="menubar"
      data-state={state}
      {...stylex.props(
        isDark && darkTheme,
        isOpen ? styles.menubarOpenFrame : styles.frame,
      )}
    >
      {menubar}
    </div>
  );
}

function AspectRatioFill() {
  return <div {...stylex.props(styles.aspectRatioFill)} />;
}

function AspectRatioHarness({ kit, theme }: AspectRatioCaptureParams) {
  const isDark = theme === "dark";

  const box =
    kit === "shadcn" ? (
      <OfficialAspectRatio ratio={16 / 9}>
        <AspectRatioFill />
      </OfficialAspectRatio>
    ) : (
      <AspectRatio ratio={16 / 9}>
        <AspectRatioFill />
      </AspectRatio>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="aspect-ratio"
      data-state="default"
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(styles.aspectRatioWell)}>{box}</div>
    </div>
  );
}

const RESIZABLE_ONE = "One";
const RESIZABLE_TWO = "Two";

function ResizableDemo({
  kit,
  orientation,
}: {
  kit: CaptureKit;
  orientation: "horizontal" | "vertical";
}) {
  if (kit === "shadcn") {
    return (
      <OfficialResizablePanelGroup orientation={orientation}>
        <OfficialResizablePanel defaultSize={50}>
          <div {...stylex.props(styles.resizablePanelFill)}>{RESIZABLE_ONE}</div>
        </OfficialResizablePanel>
        <OfficialResizableHandle withHandle />
        <OfficialResizablePanel defaultSize={50}>
          <div {...stylex.props(styles.resizablePanelFill)}>{RESIZABLE_TWO}</div>
        </OfficialResizablePanel>
      </OfficialResizablePanelGroup>
    );
  }

  return (
    <ResizablePanelGroup orientation={orientation}>
      <ResizablePanel defaultSize={50}>
        <div {...stylex.props(styles.resizablePanelFill)}>{RESIZABLE_ONE}</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div {...stylex.props(styles.resizablePanelFill)}>{RESIZABLE_TWO}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

function ResizableHarness({ kit, state, theme }: ResizableCaptureParams) {
  const isDark = theme === "dark";
  const well =
    state === "vertical"
      ? styles.resizableVerticalWell
      : styles.resizableHorizontalWell;

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="resizable"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div {...stylex.props(well)}>
        <ResizableDemo kit={kit} orientation={state} />
      </div>
    </div>
  );
}

function LabelHarness({ kit, state, theme }: LabelCaptureParams) {
  const isDark = theme === "dark";
  const groupDisabled = state === "disabled";

  const label =
    kit === "shadcn" ? (
      <OfficialLabel>Email</OfficialLabel>
    ) : (
      <Label>Email</Label>
    );

  return (
    <div
      className={isDark ? "dark" : undefined}
      data-theme={theme}
      data-kit={kit}
      data-component="label"
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      <div
        className="group"
        data-disabled={groupDisabled ? "true" : undefined}
      >
        {label}
      </div>
    </div>
  );
}

export function Harness(params: CaptureParams) {
  if (params.component === "input") {
    return <InputHarness {...params} />;
  }
  if (params.component === "label") {
    return <LabelHarness {...params} />;
  }
  if (params.component === "textarea") {
    return <TextareaHarness {...params} />;
  }
  if (params.component === "checkbox") {
    return <CheckboxHarness {...params} />;
  }
  if (params.component === "switch") {
    return <SwitchHarness {...params} />;
  }
  if (params.component === "radio-group") {
    return <RadioGroupHarness {...params} />;
  }
  if (params.component === "card") {
    return <CardHarness {...params} />;
  }
  if (params.component === "dialog") {
    return <DialogHarness {...params} />;
  }
  if (params.component === "alert-dialog") {
    return <AlertDialogHarness {...params} />;
  }
  if (params.component === "select") {
    return <SelectHarness {...params} />;
  }
  if (params.component === "dropdown-menu") {
    return <DropdownMenuHarness {...params} />;
  }
  if (params.component === "context-menu") {
    return <ContextMenuHarness {...params} />;
  }
  if (params.component === "sheet") {
    return <SheetHarness {...params} />;
  }
  if (params.component === "tabs") {
    return <TabsHarness {...params} />;
  }
  if (params.component === "popover") {
    return <PopoverHarness {...params} />;
  }
  if (params.component === "hover-card") {
    return <HoverCardHarness {...params} />;
  }
  if (params.component === "tooltip") {
    return <TooltipHarness {...params} />;
  }
  if (params.component === "badge") {
    return <BadgeHarness {...params} />;
  }
  if (params.component === "separator") {
    return <SeparatorHarness {...params} />;
  }
  if (params.component === "skeleton") {
    return <SkeletonHarness {...params} />;
  }
  if (params.component === "avatar") {
    return <AvatarHarness {...params} />;
  }
  if (params.component === "progress") {
    return <ProgressHarness {...params} />;
  }
  if (params.component === "accordion") {
    return <AccordionHarness {...params} />;
  }
  if (params.component === "slider") {
    return <SliderHarness {...params} />;
  }
  if (params.component === "toggle") {
    return <ToggleHarness {...params} />;
  }
  if (params.component === "breadcrumb") {
    return <BreadcrumbHarness {...params} />;
  }
  if (params.component === "collapsible") {
    return <CollapsibleHarness {...params} />;
  }
  if (params.component === "scroll-area") {
    return <ScrollAreaHarness {...params} />;
  }
  if (params.component === "pagination") {
    return <PaginationHarness {...params} />;
  }
  if (params.component === "alert") {
    return <AlertHarness {...params} />;
  }
  if (params.component === "toggle-group") {
    return <ToggleGroupHarness {...params} />;
  }
  if (params.component === "menubar") {
    return <MenubarHarness {...params} />;
  }
  if (params.component === "aspect-ratio") {
    return <AspectRatioHarness {...params} />;
  }
  if (params.component === "table") {
    return <TableHarness {...params} />;
  }
  if (params.component === "resizable") {
    return <ResizableHarness {...params} />;
  }
  return <ButtonHarness {...params} />;
}

export function parseCaptureParams(search: string): CaptureParams | null {
  const q = new URLSearchParams(search);
  const kit = q.get("kit");
  const component = q.get("component") ?? "button";
  const state = q.get("state");
  const theme = q.get("theme");
  if (kit !== "shadcn" && kit !== "stylex") return null;
  if (theme !== "light" && theme !== "dark") return null;

  if (component === "input") {
    if (
      state !== "default" &&
      state !== "focus-visible" &&
      state !== "disabled" &&
      state !== "invalid"
    ) {
      return null;
    }
    return { component: "input", kit, state, theme };
  }

  if (component === "label") {
    if (state !== "default" && state !== "disabled") {
      return null;
    }
    return { component: "label", kit, state, theme };
  }

  if (component === "textarea") {
    if (
      state !== "default" &&
      state !== "focus-visible" &&
      state !== "disabled" &&
      state !== "invalid"
    ) {
      return null;
    }
    return { component: "textarea", kit, state, theme };
  }

  if (component === "checkbox") {
    if (
      state !== "default" &&
      state !== "checked" &&
      state !== "focus-visible" &&
      state !== "disabled" &&
      state !== "invalid"
    ) {
      return null;
    }
    return { component: "checkbox", kit, state, theme };
  }

  if (component === "switch") {
    if (
      state !== "default" &&
      state !== "checked" &&
      state !== "focus-visible" &&
      state !== "disabled"
    ) {
      return null;
    }
    return { component: "switch", kit, state, theme };
  }

  if (component === "radio-group") {
    if (
      state !== "default" &&
      state !== "checked" &&
      state !== "focus-visible" &&
      state !== "disabled" &&
      state !== "invalid"
    ) {
      return null;
    }
    return { component: "radio-group", kit, state, theme };
  }

  if (component === "card") {
    if (state !== "default" && state !== "with-action") {
      return null;
    }
    return { component: "card", kit, state, theme };
  }

  if (component === "dialog") {
    if (state !== "default" && state !== "no-close") {
      return null;
    }
    return { component: "dialog", kit, state, theme };
  }

  if (component === "alert-dialog") {
    if (state !== "default") {
      return null;
    }
    return { component: "alert-dialog", kit, state, theme };
  }

  if (component === "select") {
    if (
      state !== "default" &&
      state !== "selected" &&
      state !== "focus-visible" &&
      state !== "disabled" &&
      state !== "invalid" &&
      state !== "sm" &&
      state !== "open"
    ) {
      return null;
    }
    return { component: "select", kit, state, theme };
  }

  if (component === "dropdown-menu") {
    if (state !== "closed" && state !== "open") {
      return null;
    }
    return { component: "dropdown-menu", kit, state, theme };
  }

  if (component === "context-menu") {
    if (state !== "closed" && state !== "open") {
      return null;
    }
    return { component: "context-menu", kit, state, theme };
  }

  if (component === "sheet") {
    if (
      state !== "default" &&
      state !== "left" &&
      state !== "top" &&
      state !== "bottom"
    ) {
      return null;
    }
    return { component: "sheet", kit, state, theme };
  }

  if (component === "tabs") {
    if (state !== "default" && state !== "second" && state !== "disabled") {
      return null;
    }
    return { component: "tabs", kit, state, theme };
  }

  if (component === "popover") {
    if (state !== "default") {
      return null;
    }
    return { component: "popover", kit, state, theme };
  }

  if (component === "hover-card") {
    if (state !== "default") {
      return null;
    }
    return { component: "hover-card", kit, state, theme };
  }

  if (component === "tooltip") {
    if (state !== "default") {
      return null;
    }
    return { component: "tooltip", kit, state, theme };
  }

  if (component === "badge") {
    const variant = q.get("variant") ?? "default";
    if (!BADGE_VARIANTS.includes(variant as BadgeVariant)) return null;
    if (state !== "default" && state !== "focus-visible") {
      return null;
    }
    return {
      component: "badge",
      kit,
      variant: variant as BadgeVariant,
      state,
      theme,
    };
  }

  if (component === "separator") {
    if (state !== "horizontal" && state !== "vertical") {
      return null;
    }
    return { component: "separator", kit, state, theme };
  }

  if (component === "skeleton") {
    if (state !== "bar" && state !== "circle") {
      return null;
    }
    return { component: "skeleton", kit, state, theme };
  }

  if (component === "avatar") {
    if (
      state !== "default" &&
      state !== "sm" &&
      state !== "lg" &&
      state !== "badge" &&
      state !== "group"
    ) {
      return null;
    }
    return { component: "avatar", kit, state, theme };
  }

  if (component === "progress") {
    if (state !== "empty" && state !== "halfway" && state !== "full") {
      return null;
    }
    return { component: "progress", kit, state, theme };
  }

  if (component === "accordion") {
    if (state !== "open" && state !== "second" && state !== "closed") {
      return null;
    }
    return { component: "accordion", kit, state, theme };
  }

  if (component === "slider") {
    if (
      state !== "default" &&
      state !== "disabled" &&
      state !== "focus-visible" &&
      state !== "range"
    ) {
      return null;
    }
    return { component: "slider", kit, state, theme };
  }

  if (component === "toggle") {
    if (
      state !== "default" &&
      state !== "on" &&
      state !== "outline" &&
      state !== "sm" &&
      state !== "lg" &&
      state !== "disabled" &&
      state !== "focus-visible"
    ) {
      return null;
    }
    return { component: "toggle", kit, state, theme };
  }

  if (component === "breadcrumb") {
    if (state !== "default" && state !== "ellipsis") {
      return null;
    }
    return { component: "breadcrumb", kit, state, theme };
  }

  if (component === "collapsible") {
    if (state !== "open" && state !== "closed") {
      return null;
    }
    return { component: "collapsible", kit, state, theme };
  }

  if (component === "scroll-area") {
    if (state !== "vertical" && state !== "horizontal") {
      return null;
    }
    return { component: "scroll-area", kit, state, theme };
  }

  if (component === "pagination") {
    if (state !== "default" && state !== "ellipsis") {
      return null;
    }
    return { component: "pagination", kit, state, theme };
  }

  if (component === "alert") {
    if (
      state !== "default" &&
      state !== "with-icon" &&
      state !== "destructive"
    ) {
      return null;
    }
    return { component: "alert", kit, state, theme };
  }

  if (component === "toggle-group") {
    if (
      state !== "default" &&
      state !== "outline" &&
      state !== "sm" &&
      state !== "lg"
    ) {
      return null;
    }
    return { component: "toggle-group", kit, state, theme };
  }

  if (component === "menubar") {
    if (state !== "closed" && state !== "open") {
      return null;
    }
    return { component: "menubar", kit, state, theme };
  }

  if (component === "aspect-ratio") {
    if (state !== "default") {
      return null;
    }
    return { component: "aspect-ratio", kit, state, theme };
  }

  if (component === "table") {
    if (state !== "default" && state !== "with-footer") {
      return null;
    }
    return { component: "table", kit, state, theme };
  }

  if (component === "resizable") {
    if (state !== "horizontal" && state !== "vertical") {
      return null;
    }
    return { component: "resizable", kit, state, theme };
  }

  if (component !== "button") return null;
  const variant = q.get("variant");
  const size = q.get("size");
  if (!VARIANTS.includes(variant as ButtonVariant)) return null;
  if (!SIZES.includes(size as ButtonSize)) return null;
  if (
    state !== "default" &&
    state !== "hover" &&
    state !== "focus-visible" &&
    state !== "disabled"
  ) {
    return null;
  }
  return {
    component: "button",
    kit,
    variant: variant as ButtonVariant,
    size: size as ButtonSize,
    state,
    theme,
  };
}
