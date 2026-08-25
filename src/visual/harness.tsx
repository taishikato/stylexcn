import * as stylex from "@stylexjs/stylex";
import { Button, type ButtonSize, type ButtonVariant } from "../components/button";
import { Input } from "../components/input";
import { darkTheme } from "../theme";
import { OfficialButton } from "./official-button";
import { OfficialInput } from "./official-input";

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

export type CaptureComponent = "button" | "input";
export type CaptureKit = "shadcn" | "stylex";
export type CaptureState =
  | "default"
  | "hover"
  | "focus-visible"
  | "disabled"
  | "invalid";
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
  state: Exclude<CaptureState, "hover">;
  theme: CaptureTheme;
};

export type CaptureParams = ButtonCaptureParams | InputCaptureParams;

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

export function Harness(params: CaptureParams) {
  if (params.component === "input") {
    return <InputHarness {...params} />;
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
