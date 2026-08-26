import * as stylex from "@stylexjs/stylex";
import { Separator as SeparatorPrimitive, Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";
import { separatorRoot, type SeparatorProps } from "@/components/ui/separator";

const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";

/**
 * Root extras as StyleX tables. Adjacent-child radius / collapsed borders
 * live on the group (`> :not(:first-child)` / `> :not(:last-child)`), matching
 * official `[&>*:not(:first-child)]:rounded-l-none` etc. Nested groups get
 * `gap-2` via `:has(> [data-slot=button-group])`.
 *
 * ButtonGroupSeparator composes `separatorRoot` (same table as Separator)
 * plus group extras — wrapping `<Separator>` cannot merge StyleX tables.
 */
const root = stylex.create({
  base: {
    display: "flex",
    width: "fit-content",
    alignItems: "stretch",
    gap: {
      default: null,
      ":has(> [data-slot=button-group])": "0.5rem",
    },
    ":not(#\\0) > :focus-visible": {
      position: "relative",
      zIndex: 10,
    },
    ":not(#\\0) > input": {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "0%",
    },
    ':not(#\\0) > [data-slot="select-trigger"]': {
      width: "fit-content",
    },
    ':not(#\\0):has(select[aria-hidden="true"]:last-child) > [data-slot="select-trigger"]:last-of-type':
      {
        borderTopRightRadius: tokens["--radius-md"],
        borderBottomRightRadius: tokens["--radius-md"],
      },
  },
  horizontal: {
    ":not(#\\0) > :not(:first-child)": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeftWidth: 0,
    },
    ":not(#\\0) > :not(:last-child)": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  vertical: {
    flexDirection: "column",
    ":not(#\\0) > :not(:first-child)": {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderTopWidth: 0,
    },
    ":not(#\\0) > :not(:last-child)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
});

const text = stylex.create({
  on: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--muted"],
    paddingInline: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    boxShadow: SHADOW_XS,
    boxSizing: "border-box",
    fontFamily: "inherit",
    ":not(#\\0) svg": {
      pointerEvents: "none",
    },
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
      flexShrink: 0,
    },
  },
});

const groupSeparator = stylex.create({
  on: {
    position: "relative",
    margin: "0px !important",
    alignSelf: "stretch",
    backgroundColor: tokens["--input"],
    height: {
      default: null,
      '[data-orientation="horizontal"]': "1px",
      '[data-orientation="vertical"]': "auto",
    },
  },
});

export type ButtonGroupOrientation = "horizontal" | "vertical";

export type ButtonGroupProps = ComponentProps<"div"> & {
  orientation?: ButtonGroupOrientation;
};

export type ButtonGroupTextProps = ComponentProps<"div"> & {
  asChild?: boolean;
};

export type ButtonGroupSeparatorProps = SeparatorProps;

export function ButtonGroup({
  orientation = "horizontal",
  ...props
}: ButtonGroupProps) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      {...props}
      {...stylex.props(root.base, root[orientation])}
    />
  );
}

export function ButtonGroupText({
  asChild = false,
  ...props
}: ButtonGroupTextProps) {
  const Comp = asChild ? Slot.Root : "div";

  return <Comp {...props} {...stylex.props(text.on)} />;
}

export function ButtonGroupSeparator({
  orientation = "vertical",
  decorative = true,
  ...props
}: ButtonGroupSeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="button-group-separator"
      decorative={decorative}
      orientation={orientation}
      {...props}
      {...stylex.props(separatorRoot.base, groupSeparator.on)}
    />
  );
}

export const buttonGroupRoot = root;
export const buttonGroupText = text;
export const buttonGroupSeparator = groupSeparator;
