import * as stylex from "@stylexjs/stylex";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

/** Official `text-destructive/90` — color-mix in oklab of --destructive at 90%. */
const MIX_DESTRUCTIVE_90 =
  "color-mix(in oklab, var(--destructive) 90%, transparent)";

/**
 * Alert family as StyleX tables. Official New York: default is bg-card /
 * text-card-foreground; destructive is bg-card / text-destructive with
 * description text-destructive/90. Grid columns switch when an svg child
 * is present (`has-[>svg]`).
 */
const variants = stylex.create({
  default: {
    backgroundColor: tokens["--card"],
    color: {
      default: tokens["--card-foreground"],
      ":has(> svg) > svg": "currentColor",
    },
  },
  destructive: {
    backgroundColor: tokens["--card"],
    color: {
      default: tokens["--destructive"],
      ":has(> svg) > svg": "currentColor",
      ':has([data-slot="alert-description"]) [data-slot="alert-description"]':
        MIX_DESTRUCTIVE_90,
    },
  },
});

const root = stylex.create({
  base: {
    position: "relative",
    display: "grid",
    width: {
      default: "100%",
      ":has(> svg) > svg": "1rem",
    },
    height: {
      default: null,
      ":has(> svg) > svg": "1rem",
    },
    gridTemplateColumns: {
      default: "0 1fr",
      ":has(> svg)": "calc(var(--spacing)*4) 1fr",
    },
    alignItems: "flex-start",
    rowGap: "0.125rem",
    columnGap: {
      default: "0",
      ":has(> svg)": "0.75rem",
    },
    boxSizing: "border-box",
    borderRadius: tokens["--radius-lg"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    paddingInline: "1rem",
    paddingBlock: "0.75rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontFamily: "inherit",
    transform: {
      default: null,
      ":has(> svg) > svg": "translateY(0.125rem)",
    },
  },
});

const title = stylex.create({
  on: {
    gridColumnStart: 2,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    minHeight: "1rem",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    fontFamily: "inherit",
  },
});

const description = stylex.create({
  on: {
    gridColumnStart: 2,
    display: "grid",
    justifyItems: "start",
    gap: "0.25rem",
    fontSize: "0.875rem",
    lineHeight: {
      default: "1.25rem",
      ":has(p) p": 1.625,
    },
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

export type AlertVariant = keyof typeof variants;

export type AlertProps = ComponentProps<"div"> & {
  variant?: AlertVariant;
};

export function Alert({ variant = "default", ...props }: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      {...props}
      {...stylex.props(root.base, variants[variant])}
    />
  );
}

export type AlertTitleProps = ComponentProps<"div">;

export function AlertTitle(props: AlertTitleProps) {
  return (
    <div data-slot="alert-title" {...props} {...stylex.props(title.on)} />
  );
}

export type AlertDescriptionProps = ComponentProps<"div">;

export function AlertDescription(props: AlertDescriptionProps) {
  return (
    <div
      data-slot="alert-description"
      {...props}
      {...stylex.props(description.on)}
    />
  );
}

export const alertVariants = variants;
export const alertRoot = root;
