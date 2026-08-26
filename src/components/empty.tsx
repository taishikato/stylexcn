import * as stylex from "@stylexjs/stylex";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

/**
 * Empty family as StyleX tables. Official New York: dashed well, header,
 * media (default / icon), title, description, content. No new primitive.
 * `md:p-12` is Tailwind md (768px); visual capture pins above that.
 */
const root = stylex.create({
  base: {
    display: "flex",
    minWidth: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-lg"],
    borderStyle: "dashed",
    padding: {
      default: "1.5rem",
      "@media (min-width: 768px)": "3rem",
    },
    textAlign: "center",
    textWrap: "balance",
    fontFamily: "inherit",
  },
});

const header = stylex.create({
  on: {
    display: "flex",
    maxWidth: "24rem",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    textAlign: "center",
    fontFamily: "inherit",
  },
});

const media = stylex.create({
  base: {
    marginBottom: "0.5rem",
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    ":not(#\\0) svg": {
      pointerEvents: "none",
      flexShrink: 0,
    },
  },
});

const mediaVariants = stylex.create({
  default: {
    backgroundColor: "transparent",
  },
  icon: {
    display: "flex",
    width: "2.5rem",
    height: "2.5rem",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens["--radius-lg"],
    backgroundColor: tokens["--muted"],
    color: tokens["--foreground"],
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1.5rem",
      height: "1.5rem",
    },
  },
});

const title = stylex.create({
  on: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    fontWeight: 500,
    letterSpacing: "-0.025em",
    fontFamily: "inherit",
  },
});

const description = stylex.create({
  on: {
    fontSize: "0.875rem",
    lineHeight: 1.625,
    color: {
      default: tokens["--muted-foreground"],
      ":not(#\\0) > a:hover": tokens["--primary"],
    },
    fontFamily: "inherit",
    ":not(#\\0) > a": {
      textDecorationLine: "underline",
      textUnderlineOffset: "4px",
    },
  },
});

const content = stylex.create({
  on: {
    display: "flex",
    width: "100%",
    maxWidth: "24rem",
    minWidth: 0,
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    textWrap: "balance",
    fontFamily: "inherit",
  },
});

export type EmptyMediaVariant = keyof typeof mediaVariants;

export type EmptyProps = ComponentProps<"div">;
export type EmptyHeaderProps = ComponentProps<"div">;
export type EmptyMediaProps = ComponentProps<"div"> & {
  variant?: EmptyMediaVariant;
};
export type EmptyTitleProps = ComponentProps<"div">;
export type EmptyDescriptionProps = ComponentProps<"div">;
export type EmptyContentProps = ComponentProps<"div">;

export function Empty(props: EmptyProps) {
  return <div data-slot="empty" {...props} {...stylex.props(root.base)} />;
}

export function EmptyHeader(props: EmptyHeaderProps) {
  return (
    <div data-slot="empty-header" {...props} {...stylex.props(header.on)} />
  );
}

export function EmptyMedia({
  variant = "default",
  ...props
}: EmptyMediaProps) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      {...props}
      {...stylex.props(media.base, mediaVariants[variant])}
    />
  );
}

export function EmptyTitle(props: EmptyTitleProps) {
  return (
    <div data-slot="empty-title" {...props} {...stylex.props(title.on)} />
  );
}

export function EmptyDescription(props: EmptyDescriptionProps) {
  return (
    <div
      data-slot="empty-description"
      {...props}
      {...stylex.props(description.on)}
    />
  );
}

export function EmptyContent(props: EmptyContentProps) {
  return (
    <div
      data-slot="empty-content"
      {...props}
      {...stylex.props(content.on)}
    />
  );
}

export const emptyRoot = root;
export const emptyHeader = header;
export const emptyMedia = media;
export const emptyMediaVariants = mediaVariants;
export const emptyTitle = title;
export const emptyDescription = description;
export const emptyContent = content;
