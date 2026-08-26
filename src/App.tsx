import * as stylex from "@stylexjs/stylex";
import { useLayoutEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./components/alert";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./components/empty";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./components/item";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "./components/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/alert-dialog";
import { Badge, type BadgeVariant } from "./components/badge";
import { Kbd, KbdGroup } from "./components/kbd";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/collapsible";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/pagination";
import { Separator } from "./components/separator";
import { Button, type ButtonSize, type ButtonVariant } from "./components/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "./components/button-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";
import { Checkbox } from "./components/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/dialog";
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
} from "./components/dropdown-menu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "./components/context-menu";
import { Input } from "./components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./components/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./components/input-otp";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "./components/field";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "./components/native-select";
import { Label } from "./components/label";
import { Progress } from "./components/progress";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./components/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./components/popover";
import { RadioGroup, RadioGroupItem } from "./components/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./components/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/sheet";
import { Skeleton } from "./components/skeleton";
import { Spinner } from "./components/spinner";
import { ScrollArea, ScrollBar } from "./components/scroll-area";
import { Slider } from "./components/slider";
import { Switch } from "./components/switch";
import { Toggle } from "./components/toggle";
import { AspectRatio } from "./components/aspect-ratio";
import { ToggleGroup, ToggleGroupItem } from "./components/toggle-group";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./components/menubar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/table";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/resizable";
import { CircleAlert, Command, Inbox, Search } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/tabs";
import { Textarea } from "./components/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/tooltip";
import { darkTheme } from "./theme";
import { Harness, parseCaptureParams, BADGE_VARIANTS, SIZES, VARIANTS } from "./visual/harness";
import {
  OfficialAccordion,
  OfficialAccordionContent,
  OfficialAccordionItem,
  OfficialAccordionTrigger,
} from "./visual/official-accordion";
import {
  OfficialAlert,
  OfficialAlertDescription,
  OfficialAlertTitle,
} from "./visual/official-alert";
import {
  OfficialEmpty,
  OfficialEmptyContent,
  OfficialEmptyDescription,
  OfficialEmptyHeader,
  OfficialEmptyMedia,
  OfficialEmptyTitle,
} from "./visual/official-empty";
import {
  OfficialItem,
  OfficialItemActions,
  OfficialItemContent,
  OfficialItemDescription,
  OfficialItemMedia,
  OfficialItemTitle,
} from "./visual/official-item";
import {
  OfficialAvatar,
  OfficialAvatarBadge,
  OfficialAvatarFallback,
  OfficialAvatarGroup,
  OfficialAvatarGroupCount,
} from "./visual/official-avatar";
import {
  OfficialAlertDialog,
  OfficialAlertDialogAction,
  OfficialAlertDialogCancel,
  OfficialAlertDialogContent,
  OfficialAlertDialogDescription,
  OfficialAlertDialogFooter,
  OfficialAlertDialogHeader,
  OfficialAlertDialogTitle,
  OfficialAlertDialogTrigger,
} from "./visual/official-alert-dialog";
import { OfficialBadge } from "./visual/official-badge";
import { OfficialKbd, OfficialKbdGroup } from "./visual/official-kbd";
import {
  OfficialBreadcrumb,
  OfficialBreadcrumbEllipsis,
  OfficialBreadcrumbItem,
  OfficialBreadcrumbLink,
  OfficialBreadcrumbList,
  OfficialBreadcrumbPage,
  OfficialBreadcrumbSeparator,
} from "./visual/official-breadcrumb";
import {
  OfficialCollapsible,
  OfficialCollapsibleContent,
  OfficialCollapsibleTrigger,
} from "./visual/official-collapsible";
import {
  OfficialPagination,
  OfficialPaginationContent,
  OfficialPaginationEllipsis,
  OfficialPaginationItem,
  OfficialPaginationLink,
  OfficialPaginationNext,
  OfficialPaginationPrevious,
} from "./visual/official-pagination";
import { OfficialSeparator } from "./visual/official-separator";
import { OfficialSkeleton } from "./visual/official-skeleton";
import { OfficialSpinner } from "./visual/official-spinner";
import {
  OfficialScrollArea,
  OfficialScrollBar,
} from "./visual/official-scroll-area";
import { OfficialSlider } from "./visual/official-slider";
import { OfficialToggle } from "./visual/official-toggle";
import { OfficialAspectRatio } from "./visual/official-aspect-ratio";
import {
  OfficialToggleGroup,
  OfficialToggleGroupItem,
} from "./visual/official-toggle-group";
import {
  OfficialMenubar,
  OfficialMenubarContent,
  OfficialMenubarItem,
  OfficialMenubarMenu,
  OfficialMenubarSeparator,
  OfficialMenubarTrigger,
} from "./visual/official-menubar";
import {
  OfficialTable,
  OfficialTableBody,
  OfficialTableCaption,
  OfficialTableCell,
  OfficialTableFooter,
  OfficialTableHead,
  OfficialTableHeader,
  OfficialTableRow,
} from "./visual/official-table";
import {
  OfficialResizableHandle,
  OfficialResizablePanel,
  OfficialResizablePanelGroup,
} from "./visual/official-resizable";
import { OfficialButton } from "./visual/official-button";
import {
  OfficialButtonGroup,
  OfficialButtonGroupSeparator,
  OfficialButtonGroupText,
} from "./visual/official-button-group";
import {
  OfficialCard,
  OfficialCardAction,
  OfficialCardContent,
  OfficialCardDescription,
  OfficialCardFooter,
  OfficialCardHeader,
  OfficialCardTitle,
} from "./visual/official-card";
import { OfficialCheckbox } from "./visual/official-checkbox";
import {
  OfficialDialog,
  OfficialDialogContent,
  OfficialDialogDescription,
  OfficialDialogFooter,
  OfficialDialogHeader,
  OfficialDialogTitle,
  OfficialDialogTrigger,
} from "./visual/official-dialog";
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
} from "./visual/official-dropdown-menu";
import {
  OfficialContextMenu,
  OfficialContextMenuContent,
  OfficialContextMenuItem,
  OfficialContextMenuSeparator,
  OfficialContextMenuShortcut,
  OfficialContextMenuTrigger,
} from "./visual/official-context-menu";
import { OfficialInput } from "./visual/official-input";
import {
  OfficialInputGroup,
  OfficialInputGroupAddon,
  OfficialInputGroupButton,
  OfficialInputGroupInput,
  OfficialInputGroupText,
  OfficialInputGroupTextarea,
} from "./visual/official-input-group";
import {
  OfficialInputOTP,
  OfficialInputOTPGroup,
  OfficialInputOTPSeparator,
  OfficialInputOTPSlot,
} from "./visual/official-input-otp";
import {
  OfficialField,
  OfficialFieldContent,
  OfficialFieldDescription,
  OfficialFieldError,
  OfficialFieldGroup,
  OfficialFieldLabel,
  OfficialFieldTitle,
} from "./visual/official-field";
import {
  OfficialNativeSelect,
  OfficialNativeSelectOptGroup,
  OfficialNativeSelectOption,
} from "./visual/official-native-select";
import { OfficialLabel } from "./visual/official-label";
import { OfficialProgress } from "./visual/official-progress";
import {
  OfficialHoverCard,
  OfficialHoverCardContent,
  OfficialHoverCardTrigger,
} from "./visual/official-hover-card";
import {
  OfficialPopover,
  OfficialPopoverContent,
  OfficialPopoverDescription,
  OfficialPopoverHeader,
  OfficialPopoverTitle,
  OfficialPopoverTrigger,
} from "./visual/official-popover";
import {
  OfficialRadioGroup,
  OfficialRadioGroupItem,
} from "./visual/official-radio-group";
import {
  OfficialSelect,
  OfficialSelectContent,
  OfficialSelectGroup,
  OfficialSelectItem,
  OfficialSelectLabel,
  OfficialSelectSeparator,
  OfficialSelectTrigger,
  OfficialSelectValue,
} from "./visual/official-select";
import {
  OfficialSheet,
  OfficialSheetContent,
  OfficialSheetDescription,
  OfficialSheetFooter,
  OfficialSheetHeader,
  OfficialSheetTitle,
  OfficialSheetTrigger,
} from "./visual/official-sheet";
import { OfficialSwitch } from "./visual/official-switch";
import {
  OfficialTabs,
  OfficialTabsContent,
  OfficialTabsList,
  OfficialTabsTrigger,
} from "./visual/official-tabs";
import { OfficialTextarea } from "./visual/official-textarea";
import {
  OfficialTooltip,
  OfficialTooltipContent,
  OfficialTooltipProvider,
  OfficialTooltipTrigger,
} from "./visual/official-tooltip";

const styles = stylex.create({
  page: {
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
  },
  heading: {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  sub: {
    color: "var(--muted-foreground)",
    marginBottom: "2rem",
    fontSize: "0.875rem",
  },
  section: {
    marginBottom: "2rem",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.75rem",
    marginTop: "0.75rem",
  },
  label: {
    fontSize: "0.75rem",
    width: "6rem",
    color: "var(--muted-foreground)",
  },
  inputWell: {
    width: "12rem",
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
  checkRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  cardWell: {
    width: "20rem",
  },
  skeletonBar: {
    width: 250,
    height: 16,
  },
  skeletonCircle: {
    width: 40,
    height: 40,
  },
  progressWell: {
    width: "16rem",
  },
  accordionWell: {
    width: "20rem",
  },
  sliderWell: {
    width: "16rem",
  },
  breadcrumbWell: {
    width: "24rem",
  },
  collapsibleWell: {
    width: "20rem",
  },
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
  alertWell: {
    width: "24rem",
  },
  aspectRatioWell: {
    width: "20rem",
  },
  aspectRatioFill: {
    width: "100%",
    height: "100%",
    backgroundColor: "var(--muted)",
  },
  tableWell: {
    width: "32rem",
  },
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
  emptyWell: {
    width: "24rem",
  },
  inputGroupWell: {
    width: "16rem",
  },
  itemWell: {
    width: "20rem",
  },
  fieldWell: {
    width: "16rem",
  },
});

function PlaygroundInputOtp({ kit }: { kit: "stylex" | "shadcn" }) {
  const Root = kit === "shadcn" ? OfficialInputOTP : InputOTP;
  const Group = kit === "shadcn" ? OfficialInputOTPGroup : InputOTPGroup;
  const Slot = kit === "shadcn" ? OfficialInputOTPSlot : InputOTPSlot;
  const Sep = kit === "shadcn" ? OfficialInputOTPSeparator : InputOTPSeparator;
  return (
    <>
      <Root maxLength={6} value="123456" onChange={() => {}}>
        <Group>
          <Slot index={0} />
          <Slot index={1} />
          <Slot index={2} />
          <Slot index={3} />
          <Slot index={4} />
          <Slot index={5} />
        </Group>
      </Root>
      <Root maxLength={6} value="123456" onChange={() => {}}>
        <Group>
          <Slot index={0} />
          <Slot index={1} />
          <Slot index={2} />
        </Group>
        <Sep />
        <Group>
          <Slot index={3} />
          <Slot index={4} />
          <Slot index={5} />
        </Group>
      </Root>
    </>
  );
}

function Playground() {
  return (
    <div {...stylex.props(styles.page)}>
      <h1 {...stylex.props(styles.heading)}>stylexcn playground</h1>
      <p {...stylex.props(styles.sub)}>
        StyleX Button, Input, Label, Textarea, Checkbox, Switch, Radio Group,
        Card, Dialog, Alert Dialog, Select, Native Select, Dropdown Menu, Context Menu,
        Sheet, Tabs, Popover, Hover Card, Tooltip, Badge, Separator, Skeleton,
        Spinner, Avatar, Progress, Accordion, Slider, Toggle, Breadcrumb,
        Collapsible, Scroll Area, Pagination, Alert, Toggle Group, Button Group,
        Menubar, Aspect Ratio, Table, Resizable, Kbd, Empty, Input Group, Item, Input OTP, and Field vs
        official shadcn/ui. Visual capture lives at query-param harness URLs
        (see README).
      </p>
      {([false, true] as const).map((isDark) => (
        <ThemeBlock key={String(isDark)} dark={isDark} />
      ))}
    </div>
  );
}

function ThemeBlock({ dark }: { dark: boolean }) {
  return (
    <div
      className={dark ? "dark" : undefined}
      {...stylex.props(dark && darkTheme, styles.section)}
    >
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX
      </h2>
      {VARIANTS.map((variant) => (
        <div key={variant} {...stylex.props(styles.row)}>
          <span {...stylex.props(styles.label)}>{variant}</span>
          {SIZES.map((size) => (
            <Button key={size} variant={variant} size={size}>
              {buttonLabel(variant, size)}
            </Button>
          ))}
          <Button variant={variant} size="default" disabled>
            Disabled
          </Button>
        </div>
      ))}
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn baseline
      </h2>
      {VARIANTS.map((variant) => (
        <div key={variant} {...stylex.props(styles.row)}>
          <span {...stylex.props(styles.label)}>{variant}</span>
          {SIZES.map((size) => (
            <OfficialButton key={size} variant={variant} size={size}>
              {buttonLabel(variant, size)}
            </OfficialButton>
          ))}
          <OfficialButton variant={variant} size="default" disabled>
            Disabled
          </OfficialButton>
        </div>
      ))}
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Input
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <Input defaultValue="Email" />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <Input defaultValue="Email" disabled />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <Input defaultValue="Email" aria-invalid />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Input
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialInput defaultValue="Email" />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialInput defaultValue="Email" disabled />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialInput defaultValue="Email" aria-invalid />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Label
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <Label htmlFor={`${dark ? "d" : "l"}-stylex-email`}>Email</Label>
          <Input id={`${dark ? "d" : "l"}-stylex-email`} defaultValue="Email" />
        </div>
        <div className="group" data-disabled="true">
          <div {...stylex.props(styles.inputWell)}>
            <Label>Disabled group</Label>
            <Input defaultValue="Email" disabled />
          </div>
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <input className="peer" defaultValue="Email" disabled />
          <Label>Peer disabled</Label>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Label
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-email`}>
            Email
          </OfficialLabel>
          <OfficialInput
            id={`${dark ? "d" : "l"}-shadcn-email`}
            defaultValue="Email"
          />
        </div>
        <div className="group" data-disabled="true">
          <div {...stylex.props(styles.inputWell)}>
            <OfficialLabel>Disabled group</OfficialLabel>
            <OfficialInput defaultValue="Email" disabled />
          </div>
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialInput className="peer" defaultValue="Email" disabled />
          <OfficialLabel>Peer disabled</OfficialLabel>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Textarea
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <Textarea defaultValue="Email" />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <Textarea defaultValue="Email" disabled />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <Textarea defaultValue="Email" aria-invalid />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Textarea
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialTextarea defaultValue="Email" />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialTextarea defaultValue="Email" disabled />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialTextarea defaultValue="Email" aria-invalid />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Checkbox
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.checkRow)}>
          <Checkbox id={`${dark ? "d" : "l"}-stylex-cb`} />
          <Label htmlFor={`${dark ? "d" : "l"}-stylex-cb`}>Accept terms</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Checkbox defaultChecked />
          <Label>Checked</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Checkbox disabled />
          <Label>Disabled</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Checkbox aria-invalid />
          <Label>Invalid</Label>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Checkbox
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialCheckbox id={`${dark ? "d" : "l"}-shadcn-cb`} />
          <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-cb`}>
            Accept terms
          </OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialCheckbox defaultChecked />
          <OfficialLabel>Checked</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialCheckbox disabled />
          <OfficialLabel>Disabled</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialCheckbox aria-invalid />
          <OfficialLabel>Invalid</OfficialLabel>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Switch
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.checkRow)}>
          <Switch id={`${dark ? "d" : "l"}-stylex-sw`} />
          <Label htmlFor={`${dark ? "d" : "l"}-stylex-sw`}>Airplane mode</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Switch defaultChecked />
          <Label>Checked</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Switch disabled />
          <Label>Disabled</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Switch defaultChecked disabled />
          <Label>Checked disabled</Label>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Switch
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialSwitch id={`${dark ? "d" : "l"}-shadcn-sw`} />
          <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-sw`}>
            Airplane mode
          </OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialSwitch defaultChecked />
          <OfficialLabel>Checked</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialSwitch disabled />
          <OfficialLabel>Disabled</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialSwitch defaultChecked disabled />
          <OfficialLabel>Checked disabled</OfficialLabel>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Radio Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <RadioGroup defaultValue="one">
          <div {...stylex.props(styles.checkRow)}>
            <RadioGroupItem value="one" id={`${dark ? "d" : "l"}-stylex-rg-1`} />
            <Label htmlFor={`${dark ? "d" : "l"}-stylex-rg-1`}>One</Label>
          </div>
          <div {...stylex.props(styles.checkRow)}>
            <RadioGroupItem value="two" id={`${dark ? "d" : "l"}-stylex-rg-2`} />
            <Label htmlFor={`${dark ? "d" : "l"}-stylex-rg-2`}>Two</Label>
          </div>
        </RadioGroup>
        <div {...stylex.props(styles.checkRow)}>
          <RadioGroup>
            <RadioGroupItem value="off" disabled />
          </RadioGroup>
          <Label>Disabled</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <RadioGroup>
            <RadioGroupItem value="bad" aria-invalid />
          </RadioGroup>
          <Label>Invalid</Label>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Radio Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <OfficialRadioGroup defaultValue="one">
          <div {...stylex.props(styles.checkRow)}>
            <OfficialRadioGroupItem
              value="one"
              id={`${dark ? "d" : "l"}-shadcn-rg-1`}
            />
            <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-rg-1`}>
              One
            </OfficialLabel>
          </div>
          <div {...stylex.props(styles.checkRow)}>
            <OfficialRadioGroupItem
              value="two"
              id={`${dark ? "d" : "l"}-shadcn-rg-2`}
            />
            <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-rg-2`}>
              Two
            </OfficialLabel>
          </div>
        </OfficialRadioGroup>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialRadioGroup>
            <OfficialRadioGroupItem value="off" disabled />
          </OfficialRadioGroup>
          <OfficialLabel>Disabled</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialRadioGroup>
            <OfficialRadioGroupItem value="bad" aria-invalid />
          </OfficialRadioGroup>
          <OfficialLabel>Invalid</OfficialLabel>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Card
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.cardWell)}>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              A short body of copy that wraps at this width.
            </CardContent>
            <CardFooter>Need help?</CardFooter>
          </Card>
        </div>
        <div {...stylex.props(styles.cardWell)}>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>Action</CardAction>
            </CardHeader>
            <CardContent>
              A short body of copy that wraps at this width.
            </CardContent>
            <CardFooter>Need help?</CardFooter>
          </Card>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Card
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.cardWell)}>
          <OfficialCard>
            <OfficialCardHeader>
              <OfficialCardTitle>Login to your account</OfficialCardTitle>
              <OfficialCardDescription>
                Enter your email below to login to your account
              </OfficialCardDescription>
            </OfficialCardHeader>
            <OfficialCardContent>
              A short body of copy that wraps at this width.
            </OfficialCardContent>
            <OfficialCardFooter>Need help?</OfficialCardFooter>
          </OfficialCard>
        </div>
        <div {...stylex.props(styles.cardWell)}>
          <OfficialCard>
            <OfficialCardHeader>
              <OfficialCardTitle>Login to your account</OfficialCardTitle>
              <OfficialCardDescription>
                Enter your email below to login to your account
              </OfficialCardDescription>
              <OfficialCardAction>Action</OfficialCardAction>
            </OfficialCardHeader>
            <OfficialCardContent>
              A short body of copy that wraps at this width.
            </OfficialCardContent>
            <OfficialCardFooter>Need help?</OfficialCardFooter>
          </OfficialCard>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Dialog
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundDialog kit="stylex" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Dialog
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundDialog kit="shadcn" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Alert Dialog
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundAlertDialog kit="stylex" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Alert Dialog
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundAlertDialog kit="shadcn" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Select
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundSelect kit="stylex" dark={dark} />
        <PlaygroundSelect kit="stylex" dark={dark} size="sm" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Select
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundSelect kit="shadcn" dark={dark} />
        <PlaygroundSelect kit="shadcn" dark={dark} size="sm" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Native Select
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundNativeSelect kit="stylex" />
        <PlaygroundNativeSelect kit="stylex" size="sm" />
        <PlaygroundNativeSelect kit="stylex" disabled />
        <PlaygroundNativeSelect kit="stylex" invalid />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Native Select
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundNativeSelect kit="shadcn" />
        <PlaygroundNativeSelect kit="shadcn" size="sm" />
        <PlaygroundNativeSelect kit="shadcn" disabled />
        <PlaygroundNativeSelect kit="shadcn" invalid />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Dropdown Menu
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundDropdownMenu kit="stylex" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Dropdown Menu
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundDropdownMenu kit="shadcn" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Context Menu
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundContextMenu kit="stylex" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Context Menu
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundContextMenu kit="shadcn" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Sheet
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundSheet kit="stylex" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Sheet
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundSheet kit="shadcn" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Tabs
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundTabs kit="stylex" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Tabs
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundTabs kit="shadcn" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Popover
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundPopover kit="stylex" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Popover
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundPopover kit="shadcn" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Hover Card
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundHoverCard kit="stylex" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Hover Card
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundHoverCard kit="shadcn" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Tooltip
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundTooltip kit="stylex" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Tooltip
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundTooltip kit="shadcn" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Badge
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        {BADGE_VARIANTS.map((variant) => (
          <Badge key={variant} variant={variant as BadgeVariant}>
            {variant}
          </Badge>
        ))}
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Badge
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        {BADGE_VARIANTS.map((variant) => (
          <OfficialBadge key={variant} variant={variant}>
            {variant}
          </OfficialBadge>
        ))}
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Separator
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>horizontal</span>
        <div {...stylex.props(styles.separatorHorizontalWell)}>
          <Separator />
        </div>
        <span {...stylex.props(styles.label)}>vertical</span>
        <div {...stylex.props(styles.separatorVerticalWell)}>
          <Separator orientation="vertical" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Separator
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>horizontal</span>
        <div {...stylex.props(styles.separatorHorizontalWell)}>
          <OfficialSeparator />
        </div>
        <span {...stylex.props(styles.label)}>vertical</span>
        <div {...stylex.props(styles.separatorVerticalWell)}>
          <OfficialSeparator orientation="vertical" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Skeleton
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.skeletonBar)}>
          <Skeleton />
        </div>
        <div {...stylex.props(styles.skeletonCircle)}>
          <Skeleton radius="full" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Skeleton
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.skeletonBar)}>
          <OfficialSkeleton className="size-full" />
        </div>
        <div {...stylex.props(styles.skeletonCircle)}>
          <OfficialSkeleton className="size-full rounded-full" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Spinner
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <Spinner size="3" />
        <Spinner />
        <Spinner size="6" />
        <Spinner size="8" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Spinner
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <OfficialSpinner className="size-3" />
        <OfficialSpinner />
        <OfficialSpinner className="size-6" />
        <OfficialSpinner className="size-8" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Avatar
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>2</AvatarGroupCount>
        </AvatarGroup>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Avatar
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <OfficialAvatar>
          <OfficialAvatarFallback>CN</OfficialAvatarFallback>
        </OfficialAvatar>
        <OfficialAvatar size="sm">
          <OfficialAvatarFallback>CN</OfficialAvatarFallback>
        </OfficialAvatar>
        <OfficialAvatar size="lg">
          <OfficialAvatarFallback>CN</OfficialAvatarFallback>
        </OfficialAvatar>
        <OfficialAvatar>
          <OfficialAvatarFallback>CN</OfficialAvatarFallback>
          <OfficialAvatarBadge />
        </OfficialAvatar>
        <OfficialAvatarGroup>
          <OfficialAvatar>
            <OfficialAvatarFallback>CN</OfficialAvatarFallback>
          </OfficialAvatar>
          <OfficialAvatar>
            <OfficialAvatarFallback>LR</OfficialAvatarFallback>
          </OfficialAvatar>
          <OfficialAvatarGroupCount>2</OfficialAvatarGroupCount>
        </OfficialAvatarGroup>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Progress
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>empty</span>
        <div {...stylex.props(styles.progressWell)}>
          <Progress value={0} />
        </div>
        <span {...stylex.props(styles.label)}>halfway</span>
        <div {...stylex.props(styles.progressWell)}>
          <Progress value={60} />
        </div>
        <span {...stylex.props(styles.label)}>full</span>
        <div {...stylex.props(styles.progressWell)}>
          <Progress value={100} />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Progress
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>empty</span>
        <div {...stylex.props(styles.progressWell)}>
          <OfficialProgress value={0} />
        </div>
        <span {...stylex.props(styles.label)}>halfway</span>
        <div {...stylex.props(styles.progressWell)}>
          <OfficialProgress value={60} />
        </div>
        <span {...stylex.props(styles.label)}>full</span>
        <div {...stylex.props(styles.progressWell)}>
          <OfficialProgress value={100} />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Accordion
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.accordionWell)}>
          <PlaygroundAccordion kit="stylex" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Accordion
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.accordionWell)}>
          <PlaygroundAccordion kit="shadcn" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Slider
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.sliderWell)}>
          <Slider value={[50]} onValueChange={() => {}} />
        </div>
        <div {...stylex.props(styles.sliderWell)}>
          <Slider value={[50]} disabled onValueChange={() => {}} />
        </div>
        <div {...stylex.props(styles.sliderWell)}>
          <Slider value={[25, 75]} onValueChange={() => {}} />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Slider
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.sliderWell)}>
          <OfficialSlider value={[50]} onValueChange={() => {}} />
        </div>
        <div {...stylex.props(styles.sliderWell)}>
          <OfficialSlider value={[50]} disabled onValueChange={() => {}} />
        </div>
        <div {...stylex.props(styles.sliderWell)}>
          <OfficialSlider value={[25, 75]} onValueChange={() => {}} />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Toggle
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <Toggle onPressedChange={() => {}}>Italic</Toggle>
        <Toggle pressed onPressedChange={() => {}}>
          Italic
        </Toggle>
        <Toggle variant="outline" onPressedChange={() => {}}>
          Italic
        </Toggle>
        <Toggle size="sm" onPressedChange={() => {}}>
          Italic
        </Toggle>
        <Toggle size="lg" onPressedChange={() => {}}>
          Italic
        </Toggle>
        <Toggle disabled onPressedChange={() => {}}>
          Italic
        </Toggle>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Toggle
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <OfficialToggle onPressedChange={() => {}}>Italic</OfficialToggle>
        <OfficialToggle pressed onPressedChange={() => {}}>
          Italic
        </OfficialToggle>
        <OfficialToggle variant="outline" onPressedChange={() => {}}>
          Italic
        </OfficialToggle>
        <OfficialToggle size="sm" onPressedChange={() => {}}>
          Italic
        </OfficialToggle>
        <OfficialToggle size="lg" onPressedChange={() => {}}>
          Italic
        </OfficialToggle>
        <OfficialToggle disabled onPressedChange={() => {}}>
          Italic
        </OfficialToggle>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Breadcrumb
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.breadcrumbWell)}>
          <PlaygroundBreadcrumb kit="stylex" ellipsis={false} />
        </div>
        <span {...stylex.props(styles.label)}>ellipsis</span>
        <div {...stylex.props(styles.breadcrumbWell)}>
          <PlaygroundBreadcrumb kit="stylex" ellipsis />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Breadcrumb
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.breadcrumbWell)}>
          <PlaygroundBreadcrumb kit="shadcn" ellipsis={false} />
        </div>
        <span {...stylex.props(styles.label)}>ellipsis</span>
        <div {...stylex.props(styles.breadcrumbWell)}>
          <PlaygroundBreadcrumb kit="shadcn" ellipsis />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Collapsible
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.collapsibleWell)}>
          <PlaygroundCollapsible kit="stylex" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Collapsible
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.collapsibleWell)}>
          <PlaygroundCollapsible kit="shadcn" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Scroll Area
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>vertical</span>
        <div {...stylex.props(styles.scrollAreaVerticalWell)}>
          <PlaygroundScrollArea kit="stylex" orientation="vertical" />
        </div>
        <span {...stylex.props(styles.label)}>horizontal</span>
        <div {...stylex.props(styles.scrollAreaHorizontalWell)}>
          <PlaygroundScrollArea kit="stylex" orientation="horizontal" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Scroll Area
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>vertical</span>
        <div {...stylex.props(styles.scrollAreaVerticalWell)}>
          <PlaygroundScrollArea kit="shadcn" orientation="vertical" />
        </div>
        <span {...stylex.props(styles.label)}>horizontal</span>
        <div {...stylex.props(styles.scrollAreaHorizontalWell)}>
          <PlaygroundScrollArea kit="shadcn" orientation="horizontal" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Pagination
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundPagination kit="stylex" ellipsis={false} />
        <span {...stylex.props(styles.label)}>ellipsis</span>
        <PlaygroundPagination kit="stylex" ellipsis />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Pagination
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundPagination kit="shadcn" ellipsis={false} />
        <span {...stylex.props(styles.label)}>ellipsis</span>
        <PlaygroundPagination kit="shadcn" ellipsis />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Alert
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.alertWell)}>
          <PlaygroundAlert kit="stylex" state="default" />
        </div>
        <span {...stylex.props(styles.label)}>with-icon</span>
        <div {...stylex.props(styles.alertWell)}>
          <PlaygroundAlert kit="stylex" state="with-icon" />
        </div>
        <span {...stylex.props(styles.label)}>destructive</span>
        <div {...stylex.props(styles.alertWell)}>
          <PlaygroundAlert kit="stylex" state="destructive" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Alert
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.alertWell)}>
          <PlaygroundAlert kit="shadcn" state="default" />
        </div>
        <span {...stylex.props(styles.label)}>with-icon</span>
        <div {...stylex.props(styles.alertWell)}>
          <PlaygroundAlert kit="shadcn" state="with-icon" />
        </div>
        <span {...stylex.props(styles.label)}>destructive</span>
        <div {...stylex.props(styles.alertWell)}>
          <PlaygroundAlert kit="shadcn" state="destructive" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Toggle Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundToggleGroup kit="stylex" variant="default" size="default" />
        <PlaygroundToggleGroup kit="stylex" variant="outline" size="default" />
        <PlaygroundToggleGroup kit="stylex" variant="default" size="sm" />
        <PlaygroundToggleGroup kit="stylex" variant="default" size="lg" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Toggle Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundToggleGroup kit="shadcn" variant="default" size="default" />
        <PlaygroundToggleGroup kit="shadcn" variant="outline" size="default" />
        <PlaygroundToggleGroup kit="shadcn" variant="default" size="sm" />
        <PlaygroundToggleGroup kit="shadcn" variant="default" size="lg" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Button Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundButtonGroup kit="stylex" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Button Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundButtonGroup kit="shadcn" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Menubar
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundMenubar kit="stylex" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Menubar
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundMenubar kit="shadcn" dark={dark} />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Aspect Ratio
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>16/9</span>
        <div {...stylex.props(styles.aspectRatioWell)}>
          <PlaygroundAspectRatio kit="stylex" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Aspect Ratio
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>16/9</span>
        <div {...stylex.props(styles.aspectRatioWell)}>
          <PlaygroundAspectRatio kit="shadcn" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Table
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.tableWell)}>
          <PlaygroundTable kit="stylex" withFooter={false} />
        </div>
        <span {...stylex.props(styles.label)}>with-footer</span>
        <div {...stylex.props(styles.tableWell)}>
          <PlaygroundTable kit="stylex" withFooter />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Table
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.tableWell)}>
          <PlaygroundTable kit="shadcn" withFooter={false} />
        </div>
        <span {...stylex.props(styles.label)}>with-footer</span>
        <div {...stylex.props(styles.tableWell)}>
          <PlaygroundTable kit="shadcn" withFooter />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Empty
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.emptyWell)}>
          <PlaygroundEmpty kit="stylex" state="default" />
        </div>
        <span {...stylex.props(styles.label)}>with-icon</span>
        <div {...stylex.props(styles.emptyWell)}>
          <PlaygroundEmpty kit="stylex" state="with-icon" />
        </div>
        <span {...stylex.props(styles.label)}>with-content</span>
        <div {...stylex.props(styles.emptyWell)}>
          <PlaygroundEmpty kit="stylex" state="with-content" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Empty
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.emptyWell)}>
          <PlaygroundEmpty kit="shadcn" state="default" />
        </div>
        <span {...stylex.props(styles.label)}>with-icon</span>
        <div {...stylex.props(styles.emptyWell)}>
          <PlaygroundEmpty kit="shadcn" state="with-icon" />
        </div>
        <span {...stylex.props(styles.label)}>with-content</span>
        <div {...stylex.props(styles.emptyWell)}>
          <PlaygroundEmpty kit="shadcn" state="with-content" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Resizable
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>horizontal</span>
        <div {...stylex.props(styles.resizableHorizontalWell)}>
          <PlaygroundResizable kit="stylex" orientation="horizontal" />
        </div>
        <span {...stylex.props(styles.label)}>vertical</span>
        <div {...stylex.props(styles.resizableVerticalWell)}>
          <PlaygroundResizable kit="stylex" orientation="vertical" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Resizable
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>horizontal</span>
        <div {...stylex.props(styles.resizableHorizontalWell)}>
          <PlaygroundResizable kit="shadcn" orientation="horizontal" />
        </div>
        <span {...stylex.props(styles.label)}>vertical</span>
        <div {...stylex.props(styles.resizableVerticalWell)}>
          <PlaygroundResizable kit="shadcn" orientation="vertical" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Kbd
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <Kbd>Ctrl</Kbd>
        <Kbd>
          <Command />
        </Kbd>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>B</Kbd>
        </KbdGroup>
        <div data-slot="tooltip-content">
          <Kbd>⌘S</Kbd>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Kbd
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <OfficialKbd>Ctrl</OfficialKbd>
        <OfficialKbd>
          <Command />
        </OfficialKbd>
        <OfficialKbdGroup>
          <OfficialKbd>Ctrl</OfficialKbd>
          <OfficialKbd>B</OfficialKbd>
        </OfficialKbdGroup>
        <div data-slot="tooltip-content">
          <OfficialKbd>⌘S</OfficialKbd>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Input Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>icon</span>
        <div {...stylex.props(styles.inputGroupWell)}>
          <PlaygroundInputGroup kit="stylex" state="inline-start" />
        </div>
        <span {...stylex.props(styles.label)}>text</span>
        <div {...stylex.props(styles.inputGroupWell)}>
          <PlaygroundInputGroup kit="stylex" state="text" />
        </div>
        <span {...stylex.props(styles.label)}>button</span>
        <div {...stylex.props(styles.inputGroupWell)}>
          <PlaygroundInputGroup kit="stylex" state="button" />
        </div>
        <span {...stylex.props(styles.label)}>textarea</span>
        <div {...stylex.props(styles.inputGroupWell)}>
          <PlaygroundInputGroup kit="stylex" state="textarea" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Input Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>icon</span>
        <div {...stylex.props(styles.inputGroupWell)}>
          <PlaygroundInputGroup kit="shadcn" state="inline-start" />
        </div>
        <span {...stylex.props(styles.label)}>text</span>
        <div {...stylex.props(styles.inputGroupWell)}>
          <PlaygroundInputGroup kit="shadcn" state="text" />
        </div>
        <span {...stylex.props(styles.label)}>button</span>
        <div {...stylex.props(styles.inputGroupWell)}>
          <PlaygroundInputGroup kit="shadcn" state="button" />
        </div>
        <span {...stylex.props(styles.label)}>textarea</span>
        <div {...stylex.props(styles.inputGroupWell)}>
          <PlaygroundInputGroup kit="shadcn" state="textarea" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Item
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.itemWell)}>
          <PlaygroundItem kit="stylex" state="default" />
        </div>
        <span {...stylex.props(styles.label)}>outline</span>
        <div {...stylex.props(styles.itemWell)}>
          <PlaygroundItem kit="stylex" state="outline" />
        </div>
        <span {...stylex.props(styles.label)}>media</span>
        <div {...stylex.props(styles.itemWell)}>
          <PlaygroundItem kit="stylex" state="media" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Item
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.itemWell)}>
          <PlaygroundItem kit="shadcn" state="default" />
        </div>
        <span {...stylex.props(styles.label)}>outline</span>
        <div {...stylex.props(styles.itemWell)}>
          <PlaygroundItem kit="shadcn" state="outline" />
        </div>
        <span {...stylex.props(styles.label)}>media</span>
        <div {...stylex.props(styles.itemWell)}>
          <PlaygroundItem kit="shadcn" state="media" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Input OTP
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundInputOtp kit="stylex" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Input OTP
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <PlaygroundInputOtp kit="shadcn" />
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Field
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>vertical</span>
        <div {...stylex.props(styles.fieldWell)}>
          <PlaygroundField kit="stylex" state="vertical" />
        </div>
        <span {...stylex.props(styles.label)}>error</span>
        <div {...stylex.props(styles.fieldWell)}>
          <PlaygroundField kit="stylex" state="error" />
        </div>
        <span {...stylex.props(styles.label)}>choice</span>
        <div {...stylex.props(styles.fieldWell)}>
          <PlaygroundField kit="stylex" state="choice-card" />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Field
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>vertical</span>
        <div {...stylex.props(styles.fieldWell)}>
          <PlaygroundField kit="shadcn" state="vertical" />
        </div>
        <span {...stylex.props(styles.label)}>error</span>
        <div {...stylex.props(styles.fieldWell)}>
          <PlaygroundField kit="shadcn" state="error" />
        </div>
        <span {...stylex.props(styles.label)}>choice</span>
        <div {...stylex.props(styles.fieldWell)}>
          <PlaygroundField kit="shadcn" state="choice-card" />
        </div>
      </div>
    </div>
  );
}

function PlaygroundSheet({
  kit,
  dark,
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!open || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [open, dark]);

  if (kit === "shadcn") {
    return (
      <OfficialSheet open={open} onOpenChange={setOpen}>
        <OfficialSheetTrigger asChild>
          <OfficialButton variant="outline">Open sheet</OfficialButton>
        </OfficialSheetTrigger>
        <OfficialSheetContent>
          <OfficialSheetHeader>
            <OfficialSheetTitle>Edit profile</OfficialSheetTitle>
            <OfficialSheetDescription>
              Make changes to your profile here. Click save when you are done.
            </OfficialSheetDescription>
          </OfficialSheetHeader>
          <p>This is the sheet body.</p>
          <OfficialSheetFooter>
            <OfficialButton onClick={() => setOpen(false)}>
              Save changes
            </OfficialButton>
          </OfficialSheetFooter>
        </OfficialSheetContent>
      </OfficialSheet>
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <p>This is the sheet body.</p>
        <SheetFooter>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function PlaygroundPopover({
  kit,
  dark,
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!open || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [open, dark]);

  if (kit === "shadcn") {
    return (
      <OfficialPopover open={open} onOpenChange={setOpen}>
        <OfficialPopoverTrigger asChild>
          <OfficialButton variant="outline">Open popover</OfficialButton>
        </OfficialPopoverTrigger>
        <OfficialPopoverContent>
          <OfficialPopoverHeader>
            <OfficialPopoverTitle>Dimensions</OfficialPopoverTitle>
            <OfficialPopoverDescription>
              Set the dimensions for the layer.
            </OfficialPopoverDescription>
          </OfficialPopoverHeader>
        </OfficialPopoverContent>
      </OfficialPopover>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

function PlaygroundHoverCard({
  kit,
  dark,
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!open || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [open, dark]);

  if (kit === "shadcn") {
    return (
      <OfficialHoverCard open={open} onOpenChange={setOpen}>
        <OfficialHoverCardTrigger asChild>
          <OfficialButton variant="outline">@ada</OfficialButton>
        </OfficialHoverCardTrigger>
        <OfficialHoverCardContent>
          <div>Ada Lovelace</div>
          <div>@ada</div>
        </OfficialHoverCardContent>
      </OfficialHoverCard>
    );
  }

  return (
    <HoverCard open={open} onOpenChange={setOpen}>
      <HoverCardTrigger asChild>
        <Button variant="outline">@ada</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div>Ada Lovelace</div>
        <div>@ada</div>
      </HoverCardContent>
    </HoverCard>
  );
}

function PlaygroundSelect({
  kit,
  dark,
  size = "default",
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
  size?: "sm" | "default";
}) {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!open || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [open, dark]);

  const fruits = (
    <>
      {kit === "shadcn" ? (
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
      ) : (
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
      )}
    </>
  );

  if (kit === "shadcn") {
    return (
      <OfficialSelect open={open} onOpenChange={setOpen}>
        <OfficialSelectTrigger size={size}>
          <OfficialSelectValue placeholder="Select a fruit" />
        </OfficialSelectTrigger>
        <OfficialSelectContent position="popper">{fruits}</OfficialSelectContent>
      </OfficialSelect>
    );
  }

  return (
    <Select open={open} onOpenChange={setOpen}>
      <SelectTrigger size={size}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent position="popper">{fruits}</SelectContent>
    </Select>
  );
}

function PlaygroundNativeSelect({
  kit,
  size = "default",
  disabled = false,
  invalid = false,
}: {
  kit: "stylex" | "shadcn";
  size?: "sm" | "default";
  disabled?: boolean;
  invalid?: boolean;
}) {
  const options =
    kit === "shadcn" ? (
      <>
        <OfficialNativeSelectOptGroup label="Fruits">
          <OfficialNativeSelectOption value="apple">
            Apple
          </OfficialNativeSelectOption>
          <OfficialNativeSelectOption value="banana">
            Banana
          </OfficialNativeSelectOption>
        </OfficialNativeSelectOptGroup>
        <OfficialNativeSelectOptGroup label="Vegetables">
          <OfficialNativeSelectOption value="carrot">
            Carrot
          </OfficialNativeSelectOption>
        </OfficialNativeSelectOptGroup>
      </>
    ) : (
      <>
        <NativeSelectOptGroup label="Fruits">
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Vegetables">
          <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        </NativeSelectOptGroup>
      </>
    );

  if (kit === "shadcn") {
    return (
      <OfficialNativeSelect
        defaultValue="apple"
        size={size}
        disabled={disabled}
        aria-invalid={invalid || undefined}
      >
        {options}
      </OfficialNativeSelect>
    );
  }

  return (
    <NativeSelect
      defaultValue="apple"
      size={size}
      disabled={disabled}
      aria-invalid={invalid || undefined}
    >
      {options}
    </NativeSelect>
  );
}

function PlaygroundDropdownMenu({
  kit,
  dark,
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!open || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [open, dark]);

  if (kit === "shadcn") {
    return (
      <OfficialDropdownMenu open={open} onOpenChange={setOpen}>
        <OfficialDropdownMenuTrigger asChild>
          <OfficialButton variant="outline">Open</OfficialButton>
        </OfficialDropdownMenuTrigger>
        <OfficialDropdownMenuContent>
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
        </OfficialDropdownMenuContent>
      </OfficialDropdownMenu>
    );
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function PlaygroundContextMenu({
  kit,
  dark,
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);
  const triggerClass =
    "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm";

  useLayoutEffect(() => {
    if (!open || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [open, dark]);

  if (kit === "shadcn") {
    return (
      <OfficialContextMenu open={open} onOpenChange={setOpen}>
        <OfficialContextMenuTrigger className={triggerClass}>
          Right click here
        </OfficialContextMenuTrigger>
        <OfficialContextMenuContent>
          <OfficialContextMenuItem>Back</OfficialContextMenuItem>
          <OfficialContextMenuItem>Forward</OfficialContextMenuItem>
          <OfficialContextMenuItem>
            Reload
            <OfficialContextMenuShortcut>⌘R</OfficialContextMenuShortcut>
          </OfficialContextMenuItem>
          <OfficialContextMenuSeparator />
          <OfficialContextMenuItem>Save Page As…</OfficialContextMenuItem>
          <OfficialContextMenuItem>Print</OfficialContextMenuItem>
        </OfficialContextMenuContent>
      </OfficialContextMenu>
    );
  }

  return (
    <ContextMenu open={open} onOpenChange={setOpen}>
      <ContextMenuTrigger className={triggerClass}>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Save Page As…</ContextMenuItem>
        <ContextMenuItem>Print</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function PlaygroundPagination({
  kit,
  ellipsis,
}: {
  kit: "stylex" | "shadcn";
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

function PlaygroundAspectRatio({ kit }: { kit: "stylex" | "shadcn" }) {
  const fill = <div {...stylex.props(styles.aspectRatioFill)} />;
  if (kit === "shadcn") {
    return (
      <OfficialAspectRatio ratio={16 / 9}>{fill}</OfficialAspectRatio>
    );
  }
  return <AspectRatio ratio={16 / 9}>{fill}</AspectRatio>;
}

function PlaygroundToggleGroup({
  kit,
  variant,
  size,
}: {
  kit: "stylex" | "shadcn";
  variant: "default" | "outline";
  size: "default" | "sm" | "lg";
}) {
  if (kit === "shadcn") {
    return (
      <OfficialToggleGroup
        type="single"
        defaultValue="bold"
        variant={variant}
        size={size}
        spacing={0}
      >
        <OfficialToggleGroupItem value="bold">Bold</OfficialToggleGroupItem>
        <OfficialToggleGroupItem value="italic">Italic</OfficialToggleGroupItem>
        <OfficialToggleGroupItem value="underline">
          Underline
        </OfficialToggleGroupItem>
      </OfficialToggleGroup>
    );
  }

  return (
    <ToggleGroup
      type="single"
      defaultValue="bold"
      variant={variant}
      size={size}
      spacing={0}
    >
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  );
}

function PlaygroundInputGroup({
  kit,
  state,
}: {
  kit: "stylex" | "shadcn";
  state: "inline-start" | "text" | "button" | "textarea";
}) {
  if (kit === "shadcn") {
    if (state === "text") {
      return (
        <OfficialInputGroup>
          <OfficialInputGroupAddon>
            <OfficialInputGroupText>$</OfficialInputGroupText>
          </OfficialInputGroupAddon>
          <OfficialInputGroupInput defaultValue="Email" />
          <OfficialInputGroupAddon align="inline-end">
            <OfficialInputGroupText>.com</OfficialInputGroupText>
          </OfficialInputGroupAddon>
        </OfficialInputGroup>
      );
    }
    if (state === "button") {
      return (
        <OfficialInputGroup>
          <OfficialInputGroupInput defaultValue="Email" />
          <OfficialInputGroupAddon align="inline-end">
            <OfficialInputGroupButton>Search</OfficialInputGroupButton>
          </OfficialInputGroupAddon>
        </OfficialInputGroup>
      );
    }
    if (state === "textarea") {
      return (
        <OfficialInputGroup>
          <OfficialInputGroupTextarea defaultValue="Email" />
          <OfficialInputGroupAddon align="block-end">
            <OfficialInputGroupText>0/280</OfficialInputGroupText>
          </OfficialInputGroupAddon>
        </OfficialInputGroup>
      );
    }
    return (
      <OfficialInputGroup>
        <OfficialInputGroupAddon>
          <Search />
        </OfficialInputGroupAddon>
        <OfficialInputGroupInput defaultValue="Email" />
      </OfficialInputGroup>
    );
  }

  if (state === "text") {
    return (
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput defaultValue="Email" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
  }
  if (state === "button") {
    return (
      <InputGroup>
        <InputGroupInput defaultValue="Email" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    );
  }
  if (state === "textarea") {
    return (
      <InputGroup>
        <InputGroupTextarea defaultValue="Email" />
        <InputGroupAddon align="block-end">
          <InputGroupText>0/280</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    );
  }
  return (
    <InputGroup>
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput defaultValue="Email" />
    </InputGroup>
  );
}

function PlaygroundItem({
  kit,
  state,
}: {
  kit: "stylex" | "shadcn";
  state: "default" | "outline" | "media";
}) {
  if (kit === "shadcn") {
    if (state === "media") {
      return (
        <OfficialItem variant="outline">
          <OfficialItemMedia variant="icon">
            <Inbox />
          </OfficialItemMedia>
          <OfficialItemContent>
            <OfficialItemTitle>Basic Item</OfficialItemTitle>
            <OfficialItemDescription>
              A simple item with title and description.
            </OfficialItemDescription>
          </OfficialItemContent>
          <OfficialItemActions>
            <OfficialButton size="sm">Action</OfficialButton>
          </OfficialItemActions>
        </OfficialItem>
      );
    }
    return (
      <OfficialItem variant={state === "outline" ? "outline" : "default"}>
        <OfficialItemContent>
          <OfficialItemTitle>Basic Item</OfficialItemTitle>
          <OfficialItemDescription>
            A simple item with title and description.
          </OfficialItemDescription>
        </OfficialItemContent>
      </OfficialItem>
    );
  }

  if (state === "media") {
    return (
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Inbox />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Action</Button>
        </ItemActions>
      </Item>
    );
  }

  return (
    <Item variant={state === "outline" ? "outline" : "default"}>
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>
          A simple item with title and description.
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}

function PlaygroundField({
  kit,
  state,
}: {
  kit: "stylex" | "shadcn";
  state: "vertical" | "error" | "choice-card";
}) {
  if (kit === "shadcn") {
    if (state === "error") {
      return (
        <OfficialFieldGroup>
          <OfficialField data-invalid="true">
            <OfficialFieldLabel htmlFor="pg-shad-error">Email</OfficialFieldLabel>
            <OfficialInput id="pg-shad-error" defaultValue="evil@rabbit.com" aria-invalid />
            <OfficialFieldError errors={[{ message: "Enter a valid email." }]} />
          </OfficialField>
        </OfficialFieldGroup>
      );
    }
    if (state === "choice-card") {
      return (
        <OfficialFieldGroup>
          <OfficialRadioGroup defaultValue="kubernetes">
            <OfficialFieldLabel htmlFor="pg-shad-card">
              <OfficialField orientation="horizontal">
                <OfficialFieldContent>
                  <OfficialFieldTitle>Kubernetes</OfficialFieldTitle>
                  <OfficialFieldDescription>
                    Run GPU workloads.
                  </OfficialFieldDescription>
                </OfficialFieldContent>
                <OfficialRadioGroupItem value="kubernetes" id="pg-shad-card" />
              </OfficialField>
            </OfficialFieldLabel>
          </OfficialRadioGroup>
        </OfficialFieldGroup>
      );
    }
    return (
      <OfficialFieldGroup>
        <OfficialField>
          <OfficialFieldLabel htmlFor="pg-shad-email">Email</OfficialFieldLabel>
          <OfficialInput id="pg-shad-email" defaultValue="evil@rabbit.com" />
        </OfficialField>
      </OfficialFieldGroup>
    );
  }

  if (state === "error") {
    return (
      <FieldGroup>
        <Field data-invalid="true">
          <FieldLabel htmlFor="pg-sx-error">Email</FieldLabel>
          <Input id="pg-sx-error" defaultValue="evil@rabbit.com" aria-invalid />
          <FieldError errors={[{ message: "Enter a valid email." }]} />
        </Field>
      </FieldGroup>
    );
  }
  if (state === "choice-card") {
    return (
      <FieldGroup>
        <RadioGroup defaultValue="kubernetes">
          <FieldLabel htmlFor="pg-sx-card">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Kubernetes</FieldTitle>
                <FieldDescription>Run GPU workloads.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="kubernetes" id="pg-sx-card" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldGroup>
    );
  }
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="pg-sx-email">Email</FieldLabel>
        <Input id="pg-sx-email" defaultValue="evil@rabbit.com" />
      </Field>
    </FieldGroup>
  );
}

function PlaygroundButtonGroup({ kit }: { kit: "stylex" | "shadcn" }) {
  if (kit === "shadcn") {
    return (
      <>
        <OfficialButtonGroup aria-label="Button group">
          <OfficialButton variant="outline">Archive</OfficialButton>
          <OfficialButton variant="outline">Report</OfficialButton>
          <OfficialButton variant="outline">Snooze</OfficialButton>
        </OfficialButtonGroup>
        <OfficialButtonGroup orientation="vertical" aria-label="Button group">
          <OfficialButton variant="outline">Archive</OfficialButton>
          <OfficialButton variant="outline">Report</OfficialButton>
        </OfficialButtonGroup>
        <OfficialButtonGroup aria-label="Button group">
          <OfficialButton>Copy</OfficialButton>
          <OfficialButtonGroupSeparator />
          <OfficialButton>Paste</OfficialButton>
        </OfficialButtonGroup>
        <OfficialButtonGroup aria-label="Button group">
          <OfficialButtonGroupText>https://</OfficialButtonGroupText>
          <OfficialButton variant="outline">Copy</OfficialButton>
        </OfficialButtonGroup>
      </>
    );
  }

  return (
    <>
      <ButtonGroup aria-label="Button group">
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
        <Button variant="outline">Snooze</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="Button group">
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Button group">
        <Button>Copy</Button>
        <ButtonGroupSeparator />
        <Button>Paste</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Button group">
        <ButtonGroupText>https://</ButtonGroupText>
        <Button variant="outline">Copy</Button>
      </ButtonGroup>
    </>
  );
}

function PlaygroundMenubar({
  kit,
  dark,
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
}) {
  const [value, setValue] = useState("");

  useLayoutEffect(() => {
    if (!value || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [value, dark]);

  if (kit === "shadcn") {
    return (
      <OfficialMenubar value={value} onValueChange={setValue}>
        <OfficialMenubarMenu value="file">
          <OfficialMenubarTrigger>File</OfficialMenubarTrigger>
          <OfficialMenubarContent>
            <OfficialMenubarItem>New Tab</OfficialMenubarItem>
            <OfficialMenubarItem>New Window</OfficialMenubarItem>
            <OfficialMenubarSeparator />
            <OfficialMenubarItem>Share</OfficialMenubarItem>
            <OfficialMenubarSeparator />
            <OfficialMenubarItem>Print</OfficialMenubarItem>
          </OfficialMenubarContent>
        </OfficialMenubarMenu>
        <OfficialMenubarMenu value="edit">
          <OfficialMenubarTrigger>Edit</OfficialMenubarTrigger>
        </OfficialMenubarMenu>
        <OfficialMenubarMenu value="view">
          <OfficialMenubarTrigger>View</OfficialMenubarTrigger>
        </OfficialMenubarMenu>
        <OfficialMenubarMenu value="profiles">
          <OfficialMenubarTrigger>Profiles</OfficialMenubarTrigger>
        </OfficialMenubarMenu>
      </OfficialMenubar>
    );
  }

  return (
    <Menubar value={value} onValueChange={setValue}>
      <MenubarMenu value="file">
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="edit">
        <MenubarTrigger>Edit</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="view">
        <MenubarTrigger>View</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu value="profiles">
        <MenubarTrigger>Profiles</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

const PLAYGROUND_INVOICES = [
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

function PlaygroundTable({
  kit,
  withFooter,
}: {
  kit: "stylex" | "shadcn";
  withFooter: boolean;
}) {
  if (kit === "shadcn") {
    return (
      <OfficialTable>
        {withFooter ? (
          <OfficialTableCaption>
            A list of your recent invoices.
          </OfficialTableCaption>
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
          {PLAYGROUND_INVOICES.map((row) => (
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
                $750.00
              </OfficialTableCell>
            </OfficialTableRow>
          </OfficialTableFooter>
        ) : null}
      </OfficialTable>
    );
  }

  return (
    <Table>
      {withFooter ? (
        <TableCaption>A list of your recent invoices.</TableCaption>
      ) : null}
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PLAYGROUND_INVOICES.map((row) => (
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
            <TableCell className="text-right">$750.00</TableCell>
          </TableRow>
        </TableFooter>
      ) : null}
    </Table>
  );
}

function PlaygroundResizable({
  kit,
  orientation,
}: {
  kit: "stylex" | "shadcn";
  orientation: "horizontal" | "vertical";
}) {
  if (kit === "shadcn") {
    return (
      <OfficialResizablePanelGroup orientation={orientation}>
        <OfficialResizablePanel defaultSize={50}>
          <div {...stylex.props(styles.resizablePanelFill)}>One</div>
        </OfficialResizablePanel>
        <OfficialResizableHandle withHandle />
        <OfficialResizablePanel defaultSize={50}>
          <div {...stylex.props(styles.resizablePanelFill)}>Two</div>
        </OfficialResizablePanel>
      </OfficialResizablePanelGroup>
    );
  }

  return (
    <ResizablePanelGroup orientation={orientation}>
      <ResizablePanel defaultSize={50}>
        <div {...stylex.props(styles.resizablePanelFill)}>One</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div {...stylex.props(styles.resizablePanelFill)}>Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

function PlaygroundBreadcrumb({
  kit,
  ellipsis,
}: {
  kit: "stylex" | "shadcn";
  ellipsis: boolean;
}) {
  if (kit === "shadcn") {
    return (
      <OfficialBreadcrumb>
        <OfficialBreadcrumbList>
          <OfficialBreadcrumbItem>
            <OfficialBreadcrumbLink href="#">Home</OfficialBreadcrumbLink>
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
            <OfficialBreadcrumbLink href="#">Components</OfficialBreadcrumbLink>
          </OfficialBreadcrumbItem>
          <OfficialBreadcrumbSeparator />
          <OfficialBreadcrumbItem>
            <OfficialBreadcrumbPage>Breadcrumb</OfficialBreadcrumbPage>
          </OfficialBreadcrumbItem>
        </OfficialBreadcrumbList>
      </OfficialBreadcrumb>
    );
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
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
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function PlaygroundCollapsible({ kit }: { kit: "stylex" | "shadcn" }) {
  const [open, setOpen] = useState(false);

  if (kit === "shadcn") {
    return (
      <OfficialCollapsible open={open} onOpenChange={setOpen}>
        <OfficialCollapsibleTrigger asChild>
          <OfficialButton variant="outline">Can I use this?</OfficialButton>
        </OfficialCollapsibleTrigger>
        <OfficialCollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </OfficialCollapsibleContent>
      </OfficialCollapsible>
    );
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Can I use this?</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  );
}

const PLAYGROUND_SCROLL_TAGS = [
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

function PlaygroundScrollArea({
  kit,
  orientation,
}: {
  kit: "stylex" | "shadcn";
  orientation: "vertical" | "horizontal";
}) {
  const content =
    orientation === "vertical" ? (
      <div {...stylex.props(styles.scrollAreaList)}>
        {PLAYGROUND_SCROLL_TAGS.map((tag) => (
          <div key={tag} {...stylex.props(styles.scrollAreaListItem)}>
            {tag}
          </div>
        ))}
      </div>
    ) : (
      <div {...stylex.props(styles.scrollAreaStrip)}>
        {PLAYGROUND_SCROLL_TAGS.map((tag) => (
          <div key={tag} {...stylex.props(styles.scrollAreaBlock)} />
        ))}
      </div>
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

function PlaygroundEmpty({
  kit,
  state,
}: {
  kit: "stylex" | "shadcn";
  state: "default" | "with-icon" | "with-content";
}) {
  const mediaVariant = state === "default" ? "default" : "icon";
  const showContent = state === "with-content";

  if (kit === "shadcn") {
    return (
      <OfficialEmpty>
        <OfficialEmptyHeader>
          <OfficialEmptyMedia variant={mediaVariant}>
            <Inbox />
          </OfficialEmptyMedia>
          <OfficialEmptyTitle>No messages</OfficialEmptyTitle>
          <OfficialEmptyDescription>
            You don&apos;t have any messages yet.
          </OfficialEmptyDescription>
        </OfficialEmptyHeader>
        {showContent ? (
          <OfficialEmptyContent>
            <OfficialButton>Send a message</OfficialButton>
          </OfficialEmptyContent>
        ) : null}
      </OfficialEmpty>
    );
  }

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant={mediaVariant}>
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>
          You don&apos;t have any messages yet.
        </EmptyDescription>
      </EmptyHeader>
      {showContent ? (
        <EmptyContent>
          <Button>Send a message</Button>
        </EmptyContent>
      ) : null}
    </Empty>
  );
}

function PlaygroundAlert({
  kit,
  state,
}: {
  kit: "stylex" | "shadcn";
  state: "default" | "with-icon" | "destructive";
}) {
  const withIcon = state === "with-icon" || state === "destructive";
  const variant = state === "destructive" ? "destructive" : "default";
  const title = state === "destructive" ? "Error" : "Heads up";
  const description =
    state === "destructive"
      ? "Your session has expired."
      : "You can add components to your app.";

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

function PlaygroundAccordion({ kit }: { kit: "stylex" | "shadcn" }) {
  if (kit === "shadcn") {
    return (
      <OfficialAccordion type="single" collapsible defaultValue="item-1">
        <OfficialAccordionItem value="item-1">
          <OfficialAccordionTrigger>Is it accessible?</OfficialAccordionTrigger>
          <OfficialAccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </OfficialAccordionContent>
        </OfficialAccordionItem>
        <OfficialAccordionItem value="item-2">
          <OfficialAccordionTrigger>Is it styled?</OfficialAccordionTrigger>
          <OfficialAccordionContent>
            Yes. It comes with default styles that match the other components.
          </OfficialAccordionContent>
        </OfficialAccordionItem>
      </OfficialAccordion>
    );
  }

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function PlaygroundTabs({ kit }: { kit: "stylex" | "shadcn" }) {
  if (kit === "shadcn") {
    return (
      <OfficialTabs defaultValue="account">
        <OfficialTabsList>
          <OfficialTabsTrigger value="account">Account</OfficialTabsTrigger>
          <OfficialTabsTrigger value="password">Password</OfficialTabsTrigger>
        </OfficialTabsList>
        <OfficialTabsContent value="account">
          Make changes to your account here.
        </OfficialTabsContent>
        <OfficialTabsContent value="password">
          Change your password here.
        </OfficialTabsContent>
      </OfficialTabs>
    );
  }

  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

function PlaygroundTooltip({
  kit,
  dark,
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!open || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [open, dark]);

  if (kit === "shadcn") {
    return (
      <OfficialTooltipProvider delayDuration={0}>
        <OfficialTooltip open={open} onOpenChange={setOpen}>
          <OfficialTooltipTrigger asChild>
            <OfficialButton variant="outline">Hover</OfficialButton>
          </OfficialTooltipTrigger>
          <OfficialTooltipContent>Add to library</OfficialTooltipContent>
        </OfficialTooltip>
      </OfficialTooltipProvider>
    );
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function PlaygroundDialog({
  kit,
  dark,
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!open || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [open, dark]);

  if (kit === "shadcn") {
    return (
      <OfficialDialog open={open} onOpenChange={setOpen}>
        <OfficialDialogTrigger asChild>
          <OfficialButton variant="outline">Open dialog</OfficialButton>
        </OfficialDialogTrigger>
        <OfficialDialogContent>
          <OfficialDialogHeader>
            <OfficialDialogTitle>Edit profile</OfficialDialogTitle>
            <OfficialDialogDescription>
              Make changes to your profile here. Click save when you are done.
            </OfficialDialogDescription>
          </OfficialDialogHeader>
          <p>This is the dialog body.</p>
          <OfficialDialogFooter>
            <OfficialButton onClick={() => setOpen(false)}>
              Save changes
            </OfficialButton>
          </OfficialDialogFooter>
        </OfficialDialogContent>
      </OfficialDialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <p>This is the dialog body.</p>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function PlaygroundAlertDialog({
  kit,
  dark,
}: {
  kit: "stylex" | "shadcn";
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (!open || !dark) return;
    const html = document.documentElement;
    const applied: string[] = ["dark"];
    html.classList.add("dark");
    const sx = stylex.props(darkTheme);
    for (const cls of sx.className?.split(/\s+/).filter(Boolean) ?? []) {
      html.classList.add(cls);
      applied.push(cls);
    }
    return () => {
      for (const cls of applied) html.classList.remove(cls);
    };
  }, [open, dark]);

  if (kit === "shadcn") {
    return (
      <OfficialAlertDialog open={open} onOpenChange={setOpen}>
        <OfficialAlertDialogTrigger asChild>
          <OfficialButton variant="outline">Open alert dialog</OfficialButton>
        </OfficialAlertDialogTrigger>
        <OfficialAlertDialogContent>
          <OfficialAlertDialogHeader>
            <OfficialAlertDialogTitle>
              Are you absolutely sure?
            </OfficialAlertDialogTitle>
            <OfficialAlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </OfficialAlertDialogDescription>
          </OfficialAlertDialogHeader>
          <OfficialAlertDialogFooter>
            <OfficialAlertDialogCancel>Cancel</OfficialAlertDialogCancel>
            <OfficialAlertDialogAction>Continue</OfficialAlertDialogAction>
          </OfficialAlertDialogFooter>
        </OfficialAlertDialogContent>
      </OfficialAlertDialog>
    );
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open alert dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function buttonLabel(variant: ButtonVariant, size: ButtonSize) {
  if (size === "icon") return "→";
  return variant;
}

export function App() {
  const params = parseCaptureParams(window.location.search);
  if (params) {
    return <Harness {...params} />;
  }
  return <Playground />;
}
