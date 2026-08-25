import * as stylex from "@stylexjs/stylex";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

/* Tailwind v4 --shadow-sm (theme.css). Official Card uses shadow-sm. */
const SHADOW_SM =
  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";

/**
 * Card family as StyleX tables.
 * Official New York Card has no variants; illegal keys fail at compile time.
 * `[.border-b]:pb-6` / `[.border-t]:pt-6` apply only when those classes are
 * on the node — they are not always-on borders.
 */
const card = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-xl"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--card"],
    paddingBlock: "1.5rem",
    color: tokens["--card-foreground"],
    boxShadow: SHADOW_SM,
    fontFamily: "inherit",
  },
});

const header = stylex.create({
  root: {
    containerName: "card-header",
    containerType: "inline-size",
    display: "grid",
    gridAutoRows: "min-content",
    gridTemplateRows: "auto auto",
    alignItems: "flex-start",
    gap: "0.5rem",
    paddingInline: "1.5rem",
    gridTemplateColumns: {
      default: null,
      ':has([data-slot="card-action"])': "1fr auto",
    },
    paddingBottom: {
      default: null,
      ":is(.border-b)": "1.5rem",
    },
  },
});

const title = stylex.create({
  root: {
    lineHeight: 1,
    fontWeight: 600,
    fontFamily: "inherit",
  },
});

const description = stylex.create({
  root: {
    fontSize: "0.875rem",
    lineHeight: "calc(1.25 / 0.875)",
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

const action = stylex.create({
  root: {
    gridColumnStart: 2,
    gridRow: "1 / span 2",
    alignSelf: "flex-start",
    justifySelf: "flex-end",
    fontFamily: "inherit",
  },
});

const content = stylex.create({
  root: {
    paddingInline: "1.5rem",
    fontFamily: "inherit",
  },
});

const footer = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
    paddingInline: "1.5rem",
    paddingTop: {
      default: null,
      ":is(.border-t)": "1.5rem",
    },
    fontFamily: "inherit",
  },
});

export type CardProps = ComponentProps<"div">;
export type CardHeaderProps = ComponentProps<"div">;
export type CardTitleProps = ComponentProps<"div">;
export type CardDescriptionProps = ComponentProps<"div">;
export type CardActionProps = ComponentProps<"div">;
export type CardContentProps = ComponentProps<"div">;
export type CardFooterProps = ComponentProps<"div">;

export function Card({ className, ...props }: CardProps) {
  const sx = stylex.props(card.root);
  return (
    <div
      data-slot="card"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  const sx = stylex.props(header.root);
  return (
    <div
      data-slot="card-header"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function CardTitle({ className, ...props }: CardTitleProps) {
  const sx = stylex.props(title.root);
  return (
    <div
      data-slot="card-title"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  const sx = stylex.props(description.root);
  return (
    <div
      data-slot="card-description"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function CardAction({ className, ...props }: CardActionProps) {
  const sx = stylex.props(action.root);
  return (
    <div
      data-slot="card-action"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function CardContent({ className, ...props }: CardContentProps) {
  const sx = stylex.props(content.root);
  return (
    <div
      data-slot="card-content"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function CardFooter({ className, ...props }: CardFooterProps) {
  const sx = stylex.props(footer.root);
  return (
    <div
      data-slot="card-footer"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const cardRoot = card;
export const cardHeader = header;
export const cardTitle = title;
export const cardDescription = description;
export const cardAction = action;
export const cardContent = content;
export const cardFooter = footer;
