import * as stylex from "@stylexjs/stylex";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

/**
 * Breadcrumb family as StyleX tables. Official New York: lucide-react
 * ChevronRight / MoreHorizontal plus radix-ui Slot (asChild on the link).
 */
const list = stylex.create({
  on: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: {
      default: "0.375rem",
      "@media (min-width: 640px)": "0.625rem",
    },
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    overflowWrap: "break-word",
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
});

const item = stylex.create({
  on: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    boxSizing: "border-box",
  },
});

const link = stylex.create({
  on: {
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    color: {
      default: null,
      ":hover": tokens["--foreground"],
    },
  },
});

const page = stylex.create({
  on: {
    fontWeight: 400,
    color: tokens["--foreground"],
  },
});

const separator = stylex.create({
  on: {
    ":not(#\\0) > svg": {
      width: "0.875rem",
      height: "0.875rem",
    },
  },
});

const ellipsis = stylex.create({
  root: {
    display: "flex",
    width: "2.25rem",
    height: "2.25rem",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  icon: {
    width: "1rem",
    height: "1rem",
  },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
});

export type BreadcrumbProps = ComponentProps<"nav">;
export type BreadcrumbListProps = ComponentProps<"ol">;
export type BreadcrumbItemProps = ComponentProps<"li">;
export type BreadcrumbLinkProps = ComponentProps<"a"> & {
  asChild?: boolean;
};
export type BreadcrumbPageProps = ComponentProps<"span">;
export type BreadcrumbSeparatorProps = ComponentProps<"li">;
export type BreadcrumbEllipsisProps = ComponentProps<"span">;

export function Breadcrumb(props: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

export function BreadcrumbList(props: BreadcrumbListProps) {
  return (
    <ol
      data-slot="breadcrumb-list"
      {...props}
      {...stylex.props(list.on)}
    />
  );
}

export function BreadcrumbItem(props: BreadcrumbItemProps) {
  return (
    <li
      data-slot="breadcrumb-item"
      {...props}
      {...stylex.props(item.on)}
    />
  );
}

export function BreadcrumbLink({
  asChild,
  ...props
}: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot.Root : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      {...props}
      {...stylex.props(link.on)}
    />
  );
}

export function BreadcrumbPage(props: BreadcrumbPageProps) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      {...props}
      {...stylex.props(page.on)}
    />
  );
}

export function BreadcrumbSeparator({
  children,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      {...props}
      {...stylex.props(separator.on)}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

export function BreadcrumbEllipsis(props: BreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      {...props}
      {...stylex.props(ellipsis.root)}
    >
      <MoreHorizontal {...stylex.props(ellipsis.icon)} />
      <span {...stylex.props(ellipsis.srOnly)}>More</span>
    </span>
  );
}

export const breadcrumbList = list;
export const breadcrumbItem = item;
export const breadcrumbLink = link;
export const breadcrumbPage = page;
export const breadcrumbSeparator = separator;
export const breadcrumbEllipsis = ellipsis;
