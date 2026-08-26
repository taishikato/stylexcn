import * as stylex from "@stylexjs/stylex";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import type { CSSProperties, ComponentProps } from "react";
import { Toaster as Sonner } from "sonner";

/**
 * Tailwind `animate-spin`: 1s linear infinite, rotate to 360deg.
 * Visual-diff disables CSS animations on both kits.
 */
const spin = stylex.keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

/**
 * Official icons use `size-4`. Loading also uses `animate-spin`.
 */
const icon = stylex.create({
  size: {
    width: "1rem",
    height: "1rem",
  },
  loading: {
    width: "1rem",
    height: "1rem",
    animationName: spin,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});

/**
 * Sonner toaster as a StyleX wrapper around the `sonner` package.
 * Official item (new-york-v4/sonner.json) is still the sonner Toaster,
 * not the deprecated Toast primitive. Do not switch the primitive.
 */
export type ToasterProps = ComponentProps<typeof Sonner>;

export function Toaster({ ...props }: ToasterProps) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      icons={{
        success: <CircleCheckIcon {...stylex.props(icon.size)} />,
        info: <InfoIcon {...stylex.props(icon.size)} />,
        warning: <TriangleAlertIcon {...stylex.props(icon.size)} />,
        error: <OctagonXIcon {...stylex.props(icon.size)} />,
        loading: <Loader2Icon {...stylex.props(icon.loading)} />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as CSSProperties
      }
      {...props}
    />
  );
}

export const sonnerIcon = icon;
