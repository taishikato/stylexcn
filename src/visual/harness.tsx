import * as stylex from "@stylexjs/stylex";
import { Button, type ButtonSize, type ButtonVariant } from "../components/button";
import { Checkbox } from "../components/checkbox";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { Switch } from "../components/switch";
import { Textarea } from "../components/textarea";
import { darkTheme } from "../theme";
import { OfficialButton } from "./official-button";
import { OfficialCheckbox } from "./official-checkbox";
import { OfficialInput } from "./official-input";
import { OfficialLabel } from "./official-label";
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
  | "switch";
export type CaptureKit = "shadcn" | "stylex";
export type CaptureState =
  | "default"
  | "hover"
  | "focus-visible"
  | "disabled"
  | "invalid"
  | "checked";
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

export type CaptureParams =
  | ButtonCaptureParams
  | InputCaptureParams
  | LabelCaptureParams
  | TextareaCaptureParams
  | CheckboxCaptureParams
  | SwitchCaptureParams;

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
