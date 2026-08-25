import * as stylex from "@stylexjs/stylex";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { tokens } from "../tokens.stylex";

const MIX_PRIMARY_90 = "color-mix(in oklab, var(--primary) 90%, transparent)";
const MIX_DESTRUCTIVE_90 =
  "color-mix(in oklab, var(--destructive) 90%, transparent)";
const MIX_DESTRUCTIVE_60 =
  "color-mix(in oklab, var(--destructive) 60%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
const MIX_DESTRUCTIVE_40 =
  "color-mix(in oklab, var(--destructive) 40%, transparent)";
const MIX_SECONDARY_80 =
  "color-mix(in oklab, var(--secondary) 80%, transparent)";
const MIX_ACCENT_50 = "color-mix(in oklab, var(--accent) 50%, transparent)";
const MIX_INPUT_30 = "color-mix(in oklab, var(--input) 30%, transparent)";
const MIX_INPUT_50 = "color-mix(in oklab, var(--input) 50%, transparent)";
const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
const RING_DESTRUCTIVE = `0 0 0 3px ${MIX_DESTRUCTIVE_20}`;
const RING_DESTRUCTIVE_DARK = `0 0 0 3px ${MIX_DESTRUCTIVE_40}`;
/* Tailwind v4 paints ring before --tw-shadow (first layer is on top). */
const RING_AND_SHADOW = `${RING}, ${SHADOW_XS}`;

/**
 * Variant × size styles as StyleX tables. Keys are the only legal values;
 * a mistyped variant/size fails at typecheck and StyleX compile time.
 */
const variants = stylex.create({
  default: {
    backgroundColor: {
      default: tokens["--primary"],
      ":hover": MIX_PRIMARY_90,
    },
    color: tokens["--primary-foreground"],
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
    },
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
    },
  },
  destructive: {
    backgroundColor: {
      default: tokens["--destructive"],
      ":hover": MIX_DESTRUCTIVE_90,
      ":is(.dark *)": MIX_DESTRUCTIVE_60,
      ":is(.dark *):hover": MIX_DESTRUCTIVE_90,
    },
    color: "white",
    boxShadow: {
      default: "none",
      ":focus-visible": RING_DESTRUCTIVE,
      ":is(.dark *):focus-visible": RING_DESTRUCTIVE_DARK,
    },
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
    },
  },
  outline: {
    backgroundColor: {
      default: tokens["--background"],
      ":hover": tokens["--accent"],
      ":is(.dark *)": MIX_INPUT_30,
      ":is(.dark *):hover": MIX_INPUT_50,
    },
    color: {
      default: tokens["--foreground"],
      ":hover": tokens["--accent-foreground"],
    },
    borderWidth: "1px",
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
      ":is(.dark *)": tokens["--input"],
    },
    boxShadow: {
      default: SHADOW_XS,
      ":focus-visible": RING_AND_SHADOW,
    },
  },
  secondary: {
    backgroundColor: {
      default: tokens["--secondary"],
      ":hover": MIX_SECONDARY_80,
    },
    color: tokens["--secondary-foreground"],
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
    },
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
    },
  },
  ghost: {
    backgroundColor: {
      default: "transparent",
      ":hover": tokens["--accent"],
      ":is(.dark *):hover": MIX_ACCENT_50,
    },
    color: {
      default: tokens["--foreground"],
      ":hover": tokens["--accent-foreground"],
    },
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
    },
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
    },
  },
  link: {
    backgroundColor: "transparent",
    color: tokens["--primary"],
    textDecorationLine: {
      default: "none",
      ":hover": "underline",
    },
    textUnderlineOffset: "4px",
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
    },
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
    },
  },
});

const sizes = stylex.create({
  default: {
    height: "2.25rem",
    paddingInline: "1rem",
    paddingBlock: "0.5rem",
    gap: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  sm: {
    height: "2rem",
    paddingInline: "0.75rem",
    gap: "0.375rem",
    borderRadius: tokens["--radius-md"],
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  lg: {
    height: "2.5rem",
    paddingInline: "1.5rem",
    gap: "0.5rem",
    borderRadius: tokens["--radius-md"],
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  icon: {
    height: "2.25rem",
    width: "2.25rem",
    padding: 0,
    gap: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
});

const base = stylex.create({
  root: {
    display: "inline-flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens["--radius-md"],
    fontSize: "0.875rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    transitionProperty: "all",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outline: "none",
    borderWidth: 0,
    borderStyle: "solid",
    cursor: "default",
    fontFamily: "inherit",
    pointerEvents: {
      default: null,
      ":disabled": "none",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
    },
  },
});

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export type ButtonProps = ButtonPrimitive.Props & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      {...props}
      {...stylex.props(base.root, variants[variant], sizes[size])}
    />
  );
}

export const buttonBase = base;
export const buttonVariants = variants;
export const buttonSizes = sizes;
