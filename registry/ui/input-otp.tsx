import * as stylex from "@stylexjs/stylex";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { useContext, type ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

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

/**
 * Tailwind `--animate-caret-blink`: 1.25s ease-out infinite.
 * 0%/70%/100% opacity 1; 20%/50% opacity 0.
 * Visual-diff disables CSS animations on both kits; do not remove this from
 * product styles.
 */
const caretBlink = stylex.keyframes({
  "0%": { opacity: 1 },
  "20%": { opacity: 0 },
  "50%": { opacity: 0 },
  "70%": { opacity: 1 },
  "100%": { opacity: 1 },
});

/**
 * Input OTP as StyleX tables. Container / hidden input chrome is passed to
 * `input-otp` as class names (the library owns those DOM nodes).
 */
const container = stylex.create({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    opacity: {
      default: 1,
      /* Official `has-disabled:opacity-50` → `:has(:disabled)`. */
      ":has(:disabled)": 0.5,
    },
  },
});

const input = stylex.create({
  base: {
    cursor: {
      default: null,
      ":disabled": "not-allowed",
    },
  },
});

const group = stylex.create({
  base: {
    display: "flex",
    alignItems: "center",
  },
});

const slot = stylex.create({
  base: {
    position: "relative",
    display: "flex",
    height: "2.25rem",
    width: "2.25rem",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontFamily: "inherit",
    outline: "none",
    borderStyle: "solid",
    borderTopWidth: "1px",
    borderBottomWidth: "1px",
    borderRightWidth: "1px",
    borderLeftWidth: {
      default: 0,
      ":first-child": "1px",
    },
    borderColor: {
      default: tokens["--input"],
      '[aria-invalid="true"]': tokens["--destructive"],
      '[data-active="true"]': tokens["--ring"],
      '[data-active="true"][aria-invalid="true"]': tokens["--destructive"],
    },
    borderTopLeftRadius: {
      default: 0,
      ":first-child": tokens["--radius-md"],
    },
    borderBottomLeftRadius: {
      default: 0,
      ":first-child": tokens["--radius-md"],
    },
    borderTopRightRadius: {
      default: 0,
      ":last-child": tokens["--radius-md"],
    },
    borderBottomRightRadius: {
      default: 0,
      ":last-child": tokens["--radius-md"],
    },
    backgroundColor: {
      default: "transparent",
      ":is(.dark *)": MIX_INPUT_30,
    },
    boxShadow: {
      default: SHADOW_XS,
      '[data-active="true"]': RING_AND_SHADOW,
      '[data-active="true"][aria-invalid="true"]': RING_DESTRUCTIVE_AND_SHADOW,
      ':is(.dark *)[data-active="true"][aria-invalid="true"]':
        RING_DESTRUCTIVE_DARK_AND_SHADOW,
    },
    zIndex: {
      default: "auto",
      '[data-active="true"]': 10,
    },
    transitionProperty: "all",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

const caret = stylex.create({
  wrap: {
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    height: "1rem",
    width: "1px",
    backgroundColor: tokens["--foreground"],
    animationName: caretBlink,
    animationDuration: "1.25s",
    animationTimingFunction: "ease-out",
    animationIterationCount: "infinite",
    /* Official also sets `duration-1000` (transition-duration). */
    transitionDuration: "1000ms",
  },
});

export type InputOTPProps = ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
};

export type InputOTPGroupProps = ComponentProps<"div">;

export type InputOTPSlotProps = ComponentProps<"div"> & {
  index: number;
};

export type InputOTPSeparatorProps = ComponentProps<"div">;

export function InputOTP({
  className,
  containerClassName,
  style,
  ...props
}: InputOTPProps) {
  const containerSx = stylex.props(container.base);
  const inputSx = stylex.props(input.base);
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={[containerSx.className, containerClassName]
        .filter(Boolean)
        .join(" ")}
      className={[inputSx.className, className].filter(Boolean).join(" ")}
      style={{ ...inputSx.style, ...style }}
      {...props}
    />
  );
}

export function InputOTPGroup({ ...props }: InputOTPGroupProps) {
  return (
    <div data-slot="input-otp-group" {...props} {...stylex.props(group.base)} />
  );
}

export function InputOTPSlot({ index, ...props }: InputOTPSlotProps) {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      {...props}
      {...stylex.props(slot.base)}
    >
      {char}
      {hasFakeCaret && (
        <div {...stylex.props(caret.wrap)}>
          <div {...stylex.props(caret.bar)} />
        </div>
      )}
    </div>
  );
}

export function InputOTPSeparator({ ...props }: InputOTPSeparatorProps) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export const inputOtpContainer = container;
export const inputOtpInput = input;
export const inputOtpGroup = group;
export const inputOtpSlot = slot;
export const inputOtpCaret = caret;
