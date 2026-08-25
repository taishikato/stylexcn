import * as stylex from "@stylexjs/stylex";
import { useLayoutEffect, useState } from "react";
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
import { Separator } from "./components/separator";
import { Button, type ButtonSize, type ButtonVariant } from "./components/button";
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
import { Input } from "./components/input";
import { Label } from "./components/label";
import { Progress } from "./components/progress";
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
import { Switch } from "./components/switch";
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
import { OfficialSeparator } from "./visual/official-separator";
import { OfficialSkeleton } from "./visual/official-skeleton";
import { OfficialButton } from "./visual/official-button";
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
import { OfficialInput } from "./visual/official-input";
import { OfficialLabel } from "./visual/official-label";
import { OfficialProgress } from "./visual/official-progress";
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
});

function Playground() {
  return (
    <div {...stylex.props(styles.page)}>
      <h1 {...stylex.props(styles.heading)}>stylexcn playground</h1>
      <p {...stylex.props(styles.sub)}>
        StyleX Button, Input, Label, Textarea, Checkbox, Switch, Radio Group,
        Card, Dialog, Alert Dialog, Select, Dropdown Menu, Sheet, Tabs,
        Popover, Tooltip, Badge, Separator, Skeleton, Avatar, and Progress vs
        official shadcn New York baseline. Visual capture lives at query-param
        harness URLs (see README).
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
