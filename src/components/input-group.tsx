import * as stylex from "@stylexjs/stylex";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";
import {
  buttonBase,
  buttonVariants,
  type ButtonProps,
  type ButtonVariant,
} from "./button";
import {
  inputBase,
  inputDisabled,
  inputFile,
  inputInvalid,
  inputSizes,
  type InputProps,
} from "./input";
import {
  textareaBase,
  textareaDisabled,
  textareaInvalid,
  textareaSizes,
  type TextareaProps,
} from "./textarea";

const MIX_INPUT_30 = "color-mix(in oklab, var(--input) 30%, transparent)";
const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
const MIX_DESTRUCTIVE_40 =
  "color-mix(in oklab, var(--destructive) 40%, transparent)";
const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
const RING_DESTRUCTIVE = `0 0 0 3px ${MIX_DESTRUCTIVE_20}`;
const RING_DESTRUCTIVE_DARK = `0 0 0 3px ${MIX_DESTRUCTIVE_40}`;
/* Tailwind v4 paints ring before --tw-shadow (first layer is on top). */
const RING_AND_SHADOW = `${RING}, ${SHADOW_XS}`;
const RING_DESTRUCTIVE_AND_SHADOW = `${RING_DESTRUCTIVE}, ${SHADOW_XS}`;
const RING_DESTRUCTIVE_DARK_AND_SHADOW = `${RING_DESTRUCTIVE_DARK}, ${SHADOW_XS}`;
const RADIUS_TWEAK = "calc(var(--radius) - 5px)";

/**
 * Input Group as StyleX tables. Control chrome (border-0, no ring, flex-1)
 * is applied from the group onto `[data-slot=input-group-control]` so the
 * existing StyleX Input / Textarea keep their own tables.
 *
 * InputGroupButton composes Button's exported tables plus group sizes —
 * wrapping `<Button>` cannot merge StyleX size overrides (same pattern as
 * ButtonGroupSeparator).
 */
const root = stylex.create({
  base: {
    position: "relative",
    display: "flex",
    width: "100%",
    minWidth: 0,
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    outline: "none",
    fontFamily: "inherit",
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    height: {
      default: "2.25rem",
      ":has(> textarea)": "auto",
      ":has(> [data-align='block-start'])": "auto",
      ":has(> [data-align='block-end'])": "auto",
    },
    flexDirection: {
      default: "row",
      ":has(> [data-align='block-start'])": "column",
      ":has(> [data-align='block-end'])": "column",
    },
    backgroundColor: {
      default: "transparent",
      ":is(.dark *)": MIX_INPUT_30,
    },
    borderColor: {
      default: tokens["--input"],
      ":has([data-slot=input-group-control]:focus-visible)": tokens["--ring"],
      ":has([data-slot][aria-invalid='true'])": tokens["--destructive"],
      ":has([data-slot][aria-invalid='true']):has([data-slot=input-group-control]:focus-visible)":
        tokens["--destructive"],
    },
    boxShadow: {
      default: SHADOW_XS,
      ":has([data-slot=input-group-control]:focus-visible)": RING_AND_SHADOW,
      /* Official invalid `ring-*` only sets color; width is focus-visible. */
      ":has([data-slot][aria-invalid='true'])": SHADOW_XS,
      ":has([data-slot][aria-invalid='true']):has([data-slot=input-group-control]:focus-visible)":
        RING_DESTRUCTIVE_AND_SHADOW,
      ":is(.dark *):has([data-slot][aria-invalid='true']):has([data-slot=input-group-control]:focus-visible)":
        RING_DESTRUCTIVE_DARK_AND_SHADOW,
    },
    ":not(#\\0):has(> [data-align='inline-start']) > input": {
      paddingLeft: "0.5rem",
    },
    ":not(#\\0):has(> [data-align='inline-end']) > input": {
      paddingRight: "0.5rem",
    },
    ":not(#\\0):has(> [data-align='block-start']) > input": {
      paddingBottom: "0.75rem",
    },
    ":not(#\\0):has(> [data-align='block-end']) > input": {
      paddingTop: "0.75rem",
    },
    ":not(#\\0)[data-disabled='true'] > [data-slot='input-group-addon']": {
      opacity: 0.5,
    },
    ":not(#\\0):has(> input) > [data-align='block-start']": {
      paddingTop: "0.625rem",
    },
    ":not(#\\0):has(> input) > [data-align='block-end']": {
      paddingBottom: "0.625rem",
    },
  },
});

const addon = stylex.create({
  base: {
    display: "flex",
    height: "auto",
    cursor: "text",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    paddingBlock: "0.375rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    color: tokens["--muted-foreground"],
    userSelect: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    ":not(#\\0) > kbd": {
      borderRadius: RADIUS_TWEAK,
    },
    ":not(#\\0) > svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
      flexShrink: 0,
    },
  },
  "inline-start": {
    order: -9999,
    paddingLeft: "0.75rem",
    marginLeft: {
      default: null,
      ":has(> button)": "-0.45rem",
      ":has(> kbd)": "-0.35rem",
    },
  },
  "inline-end": {
    order: 9999,
    paddingRight: "0.75rem",
    marginRight: {
      default: null,
      ":has(> button)": "-0.45rem",
      ":has(> kbd)": "-0.35rem",
    },
  },
  "block-start": {
    order: -9999,
    width: "100%",
    justifyContent: "flex-start",
    paddingInline: "0.75rem",
    paddingTop: "0.75rem",
  },
  "block-end": {
    order: 9999,
    width: "100%",
    justifyContent: "flex-start",
    paddingInline: "0.75rem",
    paddingBottom: "0.75rem",
  },
});

const groupButton = stylex.create({
  base: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
    },
  },
  /* Official ghost does not set text color, so the addon muted color inherits. */
  ghost: {
    color: {
      default: "inherit",
      ":hover": tokens["--accent-foreground"],
    },
  },
});

const control = stylex.create({
  input: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: "transparent",
    boxShadow: {
      default: "none",
      ":focus-visible": "none",
      '[aria-invalid="true"]': "none",
      '[aria-invalid="true"]:focus-visible': "none",
      ':is(.dark *)[aria-invalid="true"]:focus-visible': "none",
    },
    borderColor: {
      default: "transparent",
      ":focus-visible": "transparent",
      '[aria-invalid="true"]': "transparent",
      '[aria-invalid="true"]:focus-visible': "transparent",
    },
  },
  textarea: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    resize: "none",
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: "transparent",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    boxShadow: {
      default: "none",
      ":focus-visible": "none",
      '[aria-invalid="true"]': "none",
      '[aria-invalid="true"]:focus-visible': "none",
      ':is(.dark *)[aria-invalid="true"]:focus-visible': "none",
    },
    borderColor: {
      default: "transparent",
      ":focus-visible": "transparent",
      '[aria-invalid="true"]': "transparent",
      '[aria-invalid="true"]:focus-visible': "transparent",
    },
  },
});

const groupButtonSizes = stylex.create({
  xs: {
    height: "1.5rem",
    gap: "0.25rem",
    borderRadius: RADIUS_TWEAK,
    paddingInline: "0.5rem",
    paddingBlock: "0.5rem",
    ":not(#\\0):has(> svg)": {
      paddingInline: "0.5rem",
    },
    ":not(#\\0) > svg:not([class*='size-'])": {
      width: "0.875rem",
      height: "0.875rem",
      flexShrink: 0,
    },
  },
  sm: {
    height: "2rem",
    gap: "0.375rem",
    borderRadius: tokens["--radius-md"],
    paddingInline: "0.625rem",
    paddingBlock: "0.5rem",
    ":not(#\\0):has(> svg)": {
      paddingInline: "0.625rem",
    },
  },
  "icon-xs": {
    width: "1.5rem",
    height: "1.5rem",
    gap: "0.5rem",
    borderRadius: RADIUS_TWEAK,
    padding: 0,
    ":not(#\\0):has(> svg)": {
      padding: 0,
    },
  },
  "icon-sm": {
    width: "2rem",
    height: "2rem",
    gap: "0.5rem",
    padding: 0,
    ":not(#\\0):has(> svg)": {
      padding: 0,
    },
  },
});

const text = stylex.create({
  on: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: tokens["--muted-foreground"],
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

export type InputGroupAddonAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

export type InputGroupButtonSize = keyof typeof groupButtonSizes;

export type InputGroupProps = ComponentProps<"div">;

export type InputGroupAddonProps = ComponentProps<"div"> & {
  align?: InputGroupAddonAlign;
};

export type InputGroupButtonProps = Omit<ButtonProps, "size"> & {
  size?: InputGroupButtonSize;
};

export type InputGroupTextProps = ComponentProps<"span">;

export type InputGroupInputProps = InputProps;
export type InputGroupTextareaProps = TextareaProps;

export function InputGroup(props: InputGroupProps) {
  return (
    <div
      role="group"
      data-slot="input-group"
      {...props}
      {...stylex.props(root.base)}
    />
  );
}

export function InputGroupAddon({
  align = "inline-start",
  onClick,
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      {...props}
      {...stylex.props(addon.base, addon[align])}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if ((event.target as HTMLElement).closest("button")) {
          return;
        }
        event.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
    />
  );
}

export function InputGroupButton({
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: InputGroupButtonProps) {
  return (
    <ButtonPrimitive
      type={type}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      {...props}
      {...stylex.props(
        buttonBase.root,
        buttonVariants[variant as ButtonVariant],
        groupButton.base,
        variant === "ghost" && groupButton.ghost,
        groupButtonSizes[size],
      )}
    />
  );
}

export function InputGroupText(props: InputGroupTextProps) {
  return <span {...props} {...stylex.props(text.on)} />;
}

export function InputGroupInput({ type, ...props }: InputGroupInputProps) {
  return (
    <input
      type={type}
      data-slot="input-group-control"
      {...props}
      {...stylex.props(
        inputBase.root,
        inputSizes.default,
        inputInvalid.on,
        inputDisabled.on,
        inputFile.on,
        control.input,
      )}
    />
  );
}

export function InputGroupTextarea(props: InputGroupTextareaProps) {
  return (
    <textarea
      data-slot="input-group-control"
      {...props}
      {...stylex.props(
        textareaBase.root,
        textareaSizes.default,
        textareaInvalid.on,
        textareaDisabled.on,
        control.textarea,
      )}
    />
  );
}

export const inputGroupRoot = root;
export const inputGroupAddon = addon;
export const inputGroupButton = groupButton;
export const inputGroupButtonSizes = groupButtonSizes;
export const inputGroupText = text;
