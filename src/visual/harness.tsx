import * as stylex from "@stylexjs/stylex";
import { Button, type ButtonSize, type ButtonVariant } from "../components/button";
import { darkTheme } from "../theme";
import { OfficialButton } from "./official-button";

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

export type CaptureKit = "shadcn" | "stylex";
export type CaptureState = "default" | "hover" | "focus-visible" | "disabled";
export type CaptureTheme = "light" | "dark";

export type CaptureParams = {
  kit: CaptureKit;
  variant: ButtonVariant;
  size: ButtonSize;
  state: CaptureState;
  theme: CaptureTheme;
};

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
});

function labelFor(size: ButtonSize) {
  return size === "icon" ? "→" : "Button";
}

export function Harness({ kit, variant, size, state, theme }: CaptureParams) {
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
      data-variant={variant}
      data-size={size}
      data-state={state}
      {...stylex.props(isDark && darkTheme, styles.frame)}
    >
      {button}
    </div>
  );
}

export function parseCaptureParams(search: string): CaptureParams | null {
  const q = new URLSearchParams(search);
  const kit = q.get("kit");
  const variant = q.get("variant");
  const size = q.get("size");
  const state = q.get("state");
  const theme = q.get("theme");
  if (kit !== "shadcn" && kit !== "stylex") return null;
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
  if (theme !== "light" && theme !== "dark") return null;
  return { kit, variant: variant as ButtonVariant, size: size as ButtonSize, state, theme };
}
