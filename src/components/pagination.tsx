import * as stylex from "@stylexjs/stylex";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import type { ComponentProps } from "react";
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  type ButtonSize,
} from "./button";

/**
 * Pagination family as StyleX tables. Official New York: lucide-react
 * ChevronLeftIcon / ChevronRightIcon / MoreHorizontalIcon; PaginationLink
 * reuses Button variant+size tables (outline when active, else ghost).
 */
const nav = stylex.create({
  on: {
    display: "flex",
    width: "100%",
    marginInline: "auto",
    justifyContent: "center",
  },
});

const content = stylex.create({
  on: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.25rem",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
});

const link = stylex.create({
  on: {
    textDecorationLine: "none",
    boxSizing: "border-box",
    ":not(#\\0) svg": {
      pointerEvents: "none",
      flexShrink: 0,
    },
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
    },
  },
});

const previous = stylex.create({
  on: {
    gap: "0.25rem",
    paddingInline: "0.75rem",
    paddingLeft: {
      default: "0.75rem",
      "@media (min-width: 640px)": "0.625rem",
    },
  },
});

const next = stylex.create({
  on: {
    gap: "0.25rem",
    paddingInline: "0.75rem",
    paddingRight: {
      default: "0.75rem",
      "@media (min-width: 640px)": "0.625rem",
    },
  },
});

const label = stylex.create({
  on: {
    display: {
      default: "none",
      "@media (min-width: 640px)": "block",
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

export type PaginationProps = ComponentProps<"nav">;
export type PaginationContentProps = ComponentProps<"ul">;
export type PaginationItemProps = ComponentProps<"li">;
export type PaginationLinkProps = ComponentProps<"a"> & {
  isActive?: boolean;
  size?: ButtonSize;
};
export type PaginationPreviousProps = ComponentProps<typeof PaginationLink>;
export type PaginationNextProps = ComponentProps<typeof PaginationLink>;
export type PaginationEllipsisProps = ComponentProps<"span">;

export function Pagination(props: PaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      {...props}
      {...stylex.props(nav.on)}
    />
  );
}

export function PaginationContent(props: PaginationContentProps) {
  return (
    <ul
      data-slot="pagination-content"
      {...props}
      {...stylex.props(content.on)}
    />
  );
}

export function PaginationItem(props: PaginationItemProps) {
  return <li data-slot="pagination-item" {...props} />;
}

function paginationLinkProps(
  isActive: boolean | undefined,
  size: ButtonSize,
  extra?: typeof previous.on | typeof next.on,
) {
  const variant = isActive ? "outline" : "ghost";
  return stylex.props(
    buttonBase.root,
    buttonVariants[variant],
    buttonSizes[size],
    link.on,
    extra,
  );
}

export function PaginationLink({
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      {...props}
      {...paginationLinkProps(isActive, size)}
    />
  );
}

export function PaginationPrevious({
  isActive,
  size = "default",
  ...props
}: PaginationPreviousProps) {
  return (
    <a
      aria-label="Go to previous page"
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      {...props}
      {...paginationLinkProps(isActive, size, previous.on)}
    >
      <ChevronLeftIcon />
      <span {...stylex.props(label.on)}>Previous</span>
    </a>
  );
}

export function PaginationNext({
  isActive,
  size = "default",
  ...props
}: PaginationNextProps) {
  return (
    <a
      aria-label="Go to next page"
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      {...props}
      {...paginationLinkProps(isActive, size, next.on)}
    >
      <span {...stylex.props(label.on)}>Next</span>
      <ChevronRightIcon />
    </a>
  );
}

export function PaginationEllipsis(props: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      {...props}
      {...stylex.props(ellipsis.root)}
    >
      <MoreHorizontalIcon {...stylex.props(ellipsis.icon)} />
      <span {...stylex.props(ellipsis.srOnly)}>More pages</span>
    </span>
  );
}

export const paginationNav = nav;
export const paginationContent = content;
export const paginationLink = link;
export const paginationPrevious = previous;
export const paginationNext = next;
export const paginationEllipsis = ellipsis;
