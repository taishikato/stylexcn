import * as stylex from "@stylexjs/stylex";
import { useLayoutEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "../components/avatar";
import { Badge, type BadgeVariant } from "../components/badge";
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
import { Input } from "../components/input";
import { Label } from "../components/label";
import { Progress } from "../components/progress";
import { RadioGroup, RadioGroupItem } from "../components/radio-group";
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
import { Slider } from "../components/slider";
import { Textarea } from "../components/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/tooltip";
import { darkTheme } from "../theme";
import {
  OfficialAccordion,
  OfficialAccordionContent,
  OfficialAccordionItem,
  OfficialAccordionTrigger,
} from "./official-accordion";
import {
  OfficialAvatar,
  OfficialAvatarBadge,
  OfficialAvatarFallback,
  OfficialAvatarGroup,
  OfficialAvatarGroupCount,
} from "./official-avatar";
import { OfficialBadge } from "./official-badge";
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
import { OfficialSlider } from "./official-slider";
import { OfficialSwitch } from "./official-switch";
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
  | "sheet"
  | "tabs"
  | "popover"
  | "tooltip"
  | "badge"
  | "separator"
  | "skeleton"
  | "avatar"
  | "progress"
  | "accordion"
  | "slider";
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
  | "range";
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
  | SheetCaptureParams
  | TabsCaptureParams
  | PopoverCaptureParams
  | TooltipCaptureParams
  | BadgeCaptureParams
  | SeparatorCaptureParams
  | SkeletonCaptureParams
  | AvatarCaptureParams
  | ProgressCaptureParams
  | AccordionCaptureParams
  | SliderCaptureParams;

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
  /* Trigger near the top, horizontally centered so w-72 content (align=center)
     stays on-screen and the popper does not flip to another side. */
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
  if (params.component === "sheet") {
    return <SheetHarness {...params} />;
  }
  if (params.component === "tabs") {
    return <TabsHarness {...params} />;
  }
  if (params.component === "popover") {
    return <PopoverHarness {...params} />;
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
