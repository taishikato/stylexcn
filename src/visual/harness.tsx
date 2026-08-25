import * as stylex from "@stylexjs/stylex";
import { useLayoutEffect } from "react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/dialog";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { RadioGroup, RadioGroupItem } from "../components/radio-group";
import { Switch } from "../components/switch";
import { Textarea } from "../components/textarea";
import { darkTheme } from "../theme";
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
import { OfficialCheckbox } from "./official-checkbox";
import { OfficialInput } from "./official-input";
import { OfficialLabel } from "./official-label";
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
import { OfficialSwitch } from "./official-switch";
import { OfficialTextarea } from "./official-textarea";

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

export type CaptureComponent =
  | "button"
  | "input"
  | "label"
  | "textarea"
  | "checkbox"
  | "switch"
  | "radio-group"
  | "card"
  | "dialog";
export type CaptureKit = "shadcn" | "stylex";
export type CaptureState =
  | "default"
  | "hover"
  | "focus-visible"
  | "disabled"
  | "invalid"
  | "checked"
  | "with-action"
  | "no-close";
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

export type CaptureParams =
  | ButtonCaptureParams
  | InputCaptureParams
  | LabelCaptureParams
  | TextareaCaptureParams
  | CheckboxCaptureParams
  | SwitchCaptureParams
  | RadioGroupCaptureParams
  | CardCaptureParams
  | DialogCaptureParams;

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
