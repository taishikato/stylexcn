import * as stylex from "@stylexjs/stylex";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

/** Official `bg-muted/50` — color-mix in oklab of --muted at 50%. */
const MIX_MUTED_50 = "color-mix(in oklab, var(--muted) 50%, transparent)";

/**
 * Table family as StyleX tables. Official New York: container is
 * relative w-full overflow-x-auto; table is w-full caption-bottom
 * text-sm. Row hover is hover:bg-muted/50 (do not hover in visual
 * captures). Illegal keys fail at compile time.
 */
const container = stylex.create({
  root: {
    position: "relative",
    width: "100%",
    overflowX: "auto",
  },
});

const table = stylex.create({
  root: {
    width: "100%",
    captionSide: "bottom",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontFamily: "inherit",
  },
});

const header = stylex.create({
  root: {
    // Inherit to th/td so Tailwind `text-right` on Amount still wins.
    textAlign: "left",
    borderBottomWidth: {
      default: null,
      ":has(tr) tr": "1px",
    },
    borderBottomStyle: {
      default: null,
      ":has(tr) tr": "solid",
    },
  },
});

const body = stylex.create({
  root: {
    borderWidth: {
      default: null,
      ":has(tr:last-child) tr:last-child": 0,
    },
  },
});

const footer = stylex.create({
  root: {
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    backgroundColor: MIX_MUTED_50,
    fontWeight: 500,
    borderBottomWidth: {
      default: null,
      ":has(> tr:last-child) > tr:last-child": 0,
    },
    fontFamily: "inherit",
  },
});

const row = stylex.create({
  root: {
    // Parent `tbody [&_tr:last-child]:border-0` loses to this element's
    // own border-bottom in StyleX layers; keep the last-child override here.
    borderBottomWidth: {
      default: "1px",
      ":is(tbody > *:last-child)": 0,
    },
    borderBottomStyle: "solid",
    transitionProperty:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundColor: {
      default: null,
      ":hover": MIX_MUTED_50,
      ":has([aria-expanded])": MIX_MUTED_50,
      '[data-state="selected"]': tokens["--muted"],
    },
  },
});

const head = stylex.create({
  root: {
    height: "2.5rem",
    paddingLeft: "0.5rem",
    paddingRight: {
      default: "0.5rem",
      ':has([role="checkbox"])': 0,
    },
    verticalAlign: "middle",
    fontWeight: 500,
    whiteSpace: "nowrap",
    color: tokens["--foreground"],
    fontFamily: "inherit",
    transform: {
      default: null,
      ':has([role="checkbox"]) > [role="checkbox"]': "translateY(2px)",
    },
  },
});

const cell = stylex.create({
  root: {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.5rem",
    paddingRight: {
      default: "0.5rem",
      ':has([role="checkbox"])': 0,
    },
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    transform: {
      default: null,
      ':has([role="checkbox"]) > [role="checkbox"]': "translateY(2px)",
    },
  },
});

const caption = stylex.create({
  root: {
    marginTop: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

function mergeSx(
  sx: ReturnType<typeof stylex.props>,
  className?: string,
  style?: ComponentProps<"div">["style"],
) {
  return {
    className: [sx.className, className].filter(Boolean).join(" ") || undefined,
    style: style ? { ...sx.style, ...style } : sx.style,
  };
}

export type TableProps = ComponentProps<"table">;
export type TableHeaderProps = ComponentProps<"thead">;
export type TableBodyProps = ComponentProps<"tbody">;
export type TableFooterProps = ComponentProps<"tfoot">;
export type TableRowProps = ComponentProps<"tr">;
export type TableHeadProps = ComponentProps<"th">;
export type TableCellProps = ComponentProps<"td">;
export type TableCaptionProps = ComponentProps<"caption">;

export function Table({ className, style, ...props }: TableProps) {
  const sxContainer = stylex.props(container.root);
  const sxTable = mergeSx(stylex.props(table.root), className, style);
  return (
    <div data-slot="table-container" {...sxContainer}>
      <table data-slot="table" {...props} {...sxTable} />
    </div>
  );
}

export function TableHeader({ className, style, ...props }: TableHeaderProps) {
  const sx = mergeSx(stylex.props(header.root), className, style);
  return <thead data-slot="table-header" {...props} {...sx} />;
}

export function TableBody({ className, style, ...props }: TableBodyProps) {
  const sx = mergeSx(stylex.props(body.root), className, style);
  return <tbody data-slot="table-body" {...props} {...sx} />;
}

export function TableFooter({ className, style, ...props }: TableFooterProps) {
  const sx = mergeSx(stylex.props(footer.root), className, style);
  return <tfoot data-slot="table-footer" {...props} {...sx} />;
}

export function TableRow({ className, style, ...props }: TableRowProps) {
  const sx = mergeSx(stylex.props(row.root), className, style);
  return <tr data-slot="table-row" {...props} {...sx} />;
}

export function TableHead({ className, style, ...props }: TableHeadProps) {
  const sx = mergeSx(stylex.props(head.root), className, style);
  return <th data-slot="table-head" {...props} {...sx} />;
}

export function TableCell({ className, style, ...props }: TableCellProps) {
  const sx = mergeSx(stylex.props(cell.root), className, style);
  return <td data-slot="table-cell" {...props} {...sx} />;
}

export function TableCaption({
  className,
  style,
  ...props
}: TableCaptionProps) {
  const sx = mergeSx(stylex.props(caption.root), className, style);
  return <caption data-slot="table-caption" {...props} {...sx} />;
}

export const tableContainer = container;
export const tableRoot = table;
export const tableHeader = header;
export const tableBody = body;
export const tableFooter = footer;
export const tableRow = row;
export const tableHead = head;
export const tableCell = cell;
export const tableCaption = caption;
