import * as stylex from "@stylexjs/stylex";
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import { useRef, type ComponentProps, type CSSProperties } from "react";
import { tokens } from "../tokens.stylex";
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
} from "./button";
import {
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  inputGroupButton,
  inputGroupButtonSizes,
  inputGroupRoot,
} from "./input-group";

const MIX_FOREGROUND_10 =
  "color-mix(in oklab, var(--foreground) 10%, transparent)";
const MIX_INPUT_30 = "color-mix(in oklab, var(--input) 30%, transparent)";
const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
const MIX_DESTRUCTIVE_40 =
  "color-mix(in oklab, var(--destructive) 40%, transparent)";
const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
const SHADOW_MD =
  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
const RING_DESTRUCTIVE = `0 0 0 3px ${MIX_DESTRUCTIVE_20}`;
const RING_DESTRUCTIVE_DARK = `0 0 0 3px ${MIX_DESTRUCTIVE_40}`;
const RING_AND_SHADOW = `${RING}, ${SHADOW_XS}`;
const RING_DESTRUCTIVE_AND_SHADOW = `${RING_DESTRUCTIVE}, ${SHADOW_XS}`;
const RING_DESTRUCTIVE_DARK_AND_SHADOW = `${RING_DESTRUCTIVE_DARK}, ${SHADOW_XS}`;
/* Official popup: ring-1 ring-foreground/10 then shadow-md. */
const POPUP_SHADOW = `0 0 0 1px ${MIX_FOREGROUND_10}, ${SHADOW_MD}`;

/**
 * Combobox family as StyleX tables. Official New York v4 Combobox is Base UI
 * plus Input Group / Button. Keep that primitive; do not restyle to Radix.
 */
const trigger = stylex.create({
  root: {
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
    },
  },
  icon: {
    pointerEvents: "none",
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
    color: tokens["--muted-foreground"],
  },
  inGroup: {
    display: {
      default: "flex",
      ":is([data-slot='input-group']:has([data-slot='combobox-clear']) *)":
        "none",
    },
    backgroundColor: {
      default: null,
      "[data-pressed]": "transparent",
      "[data-pressed]:hover": "transparent",
    },
  },
});

const input = stylex.create({
  group: {
    width: "auto",
  },
});

const positioner = stylex.create({
  root: {
    isolation: "isolate",
    zIndex: 50,
  },
});

const content = stylex.create({
  root: {
    position: "relative",
    maxHeight: "24rem",
    width: "var(--anchor-width)",
    maxWidth: "var(--available-width)",
    minWidth: {
      default: "calc(var(--anchor-width) + 1.75rem)",
      '[data-chips="true"]': "var(--anchor-width)",
    },
    transformOrigin: "var(--transform-origin)",
    overflow: "hidden",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    backgroundColor: tokens["--popover"],
    color: tokens["--popover-foreground"],
    boxShadow: POPUP_SHADOW,
    fontFamily: "inherit",
    ":not(#\\0) > [data-slot='input-group']": {
      marginTop: "0.25rem",
      marginRight: "0.25rem",
      marginBottom: 0,
      marginLeft: "0.25rem",
      height: "2rem",
      backgroundColor: MIX_INPUT_30,
      borderColor: {
        default: MIX_INPUT_30,
        ":has([data-slot='input-group-control']:focus-visible)": tokens["--ring"],
      },
      /* Official `shadow-none` zeros --tw-shadow but keeps the focus ring layer. */
      boxShadow: {
        default: "none",
        ":has([data-slot='input-group-control']:focus-visible)": RING,
      },
    },
  },
});

const list = stylex.create({
  root: {
    maxHeight:
      "min(21.75rem, calc(var(--available-height) - 2.25rem))",
    scrollPaddingBlock: "0.25rem",
    overflowY: "auto",
    padding: {
      default: "0.25rem",
      "[data-empty]": 0,
    },
    boxSizing: "border-box",
  },
});

const item = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    cursor: "default",
    alignItems: "center",
    gap: "0.5rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-sm"],
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    paddingRight: "2rem",
    paddingLeft: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    outline: "none",
    userSelect: "none",
    fontFamily: "inherit",
    backgroundColor: {
      default: "transparent",
      "[data-highlighted]": tokens["--accent"],
    },
    color: {
      default: "inherit",
      "[data-highlighted]": tokens["--accent-foreground"],
    },
    pointerEvents: {
      default: null,
      "[data-disabled]": "none",
    },
    opacity: {
      default: 1,
      "[data-disabled]": 0.5,
    },
    ":not(#\\0) svg": {
      pointerEvents: "none",
      flexShrink: 0,
    },
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
    },
  },
  indicator: {
    pointerEvents: "none",
    position: "absolute",
    right: "0.5rem",
    display: "flex",
    width: "1rem",
    height: "1rem",
    alignItems: "center",
    justifyContent: "center",
  },
  check: {
    pointerEvents: "none",
    width: {
      default: "1rem",
      "@media (pointer: coarse)": "1.25rem",
    },
    height: {
      default: "1rem",
      "@media (pointer: coarse)": "1.25rem",
    },
    flexShrink: 0,
  },
});

const label = stylex.create({
  root: {
    paddingInline: {
      default: "0.5rem",
      "@media (pointer: coarse)": "0.75rem",
    },
    paddingBlock: {
      default: "0.375rem",
      "@media (pointer: coarse)": "0.5rem",
    },
    fontSize: {
      default: "0.75rem",
      "@media (pointer: coarse)": "0.875rem",
    },
    lineHeight: {
      default: "1rem",
      "@media (pointer: coarse)": "1.25rem",
    },
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

const empty = stylex.create({
  root: {
    display: {
      default: "none",
      ":is([data-slot='combobox-content'][data-empty] *)": "flex",
    },
    width: "100%",
    justifyContent: "center",
    paddingBlock: "0.5rem",
    textAlign: "center",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

const separator = stylex.create({
  root: {
    marginInline: "-0.25rem",
    marginBlock: "0.25rem",
    height: "1px",
    backgroundColor: tokens["--border"],
  },
});

const chips = stylex.create({
  root: {
    display: "flex",
    minHeight: "2.25rem",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.375rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: {
      default: tokens["--input"],
      ":focus-within": tokens["--ring"],
      ":has([aria-invalid='true'])": tokens["--destructive"],
    },
    backgroundColor: {
      default: "transparent",
      ":is(.dark *)": MIX_INPUT_30,
    },
    backgroundClip: "padding-box",
    paddingInline: {
      default: "0.625rem",
      ":has([data-slot='combobox-chip'])": "0.375rem",
    },
    paddingBlock: "0.375rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    boxShadow: {
      default: SHADOW_XS,
      ":focus-within": RING_AND_SHADOW,
      ":has([aria-invalid='true'])": RING_DESTRUCTIVE_AND_SHADOW,
      ":is(.dark *):has([aria-invalid='true'])":
        RING_DESTRUCTIVE_DARK_AND_SHADOW,
    },
    transitionProperty: "color, box-shadow",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    fontFamily: "inherit",
  },
});

const chip = stylex.create({
  root: {
    display: "flex",
    height: "1.375rem",
    width: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-sm"],
    backgroundColor: tokens["--muted"],
    paddingInline: "0.375rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    color: tokens["--foreground"],
    fontFamily: "inherit",
    paddingRight: {
      default: null,
      ":has([data-slot='combobox-chip-remove'])": 0,
    },
    pointerEvents: {
      default: null,
      ":has(:disabled)": "none",
    },
    cursor: {
      default: null,
      ":has(:disabled)": "not-allowed",
    },
    opacity: {
      default: 1,
      ":has(:disabled)": 0.5,
    },
  },
  remove: {
    marginLeft: "-0.25rem",
    opacity: {
      default: 0.5,
      ":hover": 1,
    },
  },
  removeIcon: {
    width: "0.75rem",
    height: "0.75rem",
    pointerEvents: "none",
  },
});

const chipsInput = stylex.create({
  root: {
    minWidth: "4rem",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    outline: "none",
    borderWidth: 0,
    backgroundColor: "transparent",
    margin: 0,
    padding: 0,
    color: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
  },
});

function mergeSx(
  sx: { className?: string; style?: CSSProperties },
  className?: unknown,
  style?: unknown,
) {
  const extra = typeof className === "string" ? className : undefined;
  const extraStyle =
    style && typeof style === "object" && !Array.isArray(style)
      ? (style as CSSProperties)
      : undefined;
  return {
    className: [sx.className, extra].filter(Boolean).join(" ") || undefined,
    style: { ...sx.style, ...extraStyle } as CSSProperties | undefined,
  };
}

const Combobox = ComboboxPrimitive.Root;

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

function ComboboxTrigger({
  className,
  style,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  const sx = mergeSx(stylex.props(trigger.root), className, style);
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      {...props}
      className={sx.className}
      style={sx.style}
    >
      {children}
      <ChevronDownIcon
        data-slot="combobox-trigger-icon"
        className={["size-4", stylex.props(trigger.icon).className]
          .filter(Boolean)
          .join(" ")}
        style={stylex.props(trigger.icon).style}
      />
    </ComboboxPrimitive.Trigger>
  );
}

function ComboboxClear({ className, style, ...props }: ComboboxPrimitive.Clear.Props) {
  const sx = mergeSx(stylex.props(), className, style);
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      {...props}
      className={sx.className}
      style={sx.style}
    >
      <XIcon className="size-4" style={{ pointerEvents: "none" }} />
    </ComboboxPrimitive.Clear>
  );
}

function ComboboxInput({
  className,
  style,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean;
  showClear?: boolean;
}) {
  const sx = mergeSx(
    stylex.props(inputGroupRoot.base, input.group),
    className,
    style,
  );
  return (
    <div
      role="group"
      data-slot="input-group"
      className={sx.className}
      style={sx.style}
    >
      <ComboboxPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            data-slot="input-group-button"
            disabled={disabled}
            render={
              <ComboboxTrigger
                disabled={disabled}
                {...stylex.props(
                  buttonBase.root,
                  buttonVariants.ghost,
                  inputGroupButton.base,
                  inputGroupButton.ghost,
                  inputGroupButtonSizes["icon-xs"],
                  trigger.inGroup,
                )}
              />
            }
          />
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </div>
  );
}

function ComboboxContent({
  className,
  style,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  const pos = stylex.props(positioner.root);
  const sx = mergeSx(stylex.props(content.root), className, style);
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className={pos.className}
        style={pos.style}
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          {...props}
          className={sx.className}
          style={sx.style}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxList({
  className,
  style,
  ...props
}: ComboboxPrimitive.List.Props) {
  const sx = mergeSx(stylex.props(list.root), className, style);
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      {...props}
      className={sx.className}
      style={sx.style}
    />
  );
}

function ComboboxItem({
  className,
  style,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  const sx = mergeSx(stylex.props(item.root), className, style);
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      {...props}
      className={sx.className}
      style={sx.style}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        data-slot="combobox-item-indicator"
        render={<span {...stylex.props(item.indicator)} />}
      >
        <CheckIcon
          className={["size-4", stylex.props(item.check).className]
            .filter(Boolean)
            .join(" ")}
          style={stylex.props(item.check).style}
        />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={className}
      {...props}
    />
  );
}

function ComboboxLabel({
  className,
  style,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  const sx = mergeSx(stylex.props(label.root), className, style);
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      {...props}
      className={sx.className}
      style={sx.style}
    />
  );
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  );
}

function ComboboxEmpty({
  className,
  style,
  ...props
}: ComboboxPrimitive.Empty.Props) {
  const sx = mergeSx(stylex.props(empty.root), className, style);
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      {...props}
      className={sx.className}
      style={sx.style}
    />
  );
}

function ComboboxSeparator({
  className,
  style,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  const sx = mergeSx(stylex.props(separator.root), className, style);
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      {...props}
      className={sx.className}
      style={sx.style}
    />
  );
}

function ComboboxChips({
  className,
  style,
  ...props
}: ComponentProps<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props) {
  const sx = mergeSx(stylex.props(chips.root), className, style);
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      {...props}
      className={sx.className}
      style={sx.style}
    />
  );
}

function ComboboxChip({
  className,
  style,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean;
}) {
  const sx = mergeSx(stylex.props(chip.root), className, style);
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      {...props}
      className={sx.className}
      style={sx.style}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={
            <ButtonPrimitive
              data-slot="combobox-chip-remove"
              data-variant="ghost"
              data-size="icon-xs"
              {...stylex.props(
                buttonBase.root,
                buttonVariants.ghost,
                buttonSizes["icon-xs"],
                chip.remove,
              )}
            />
          }
          data-slot="combobox-chip-remove"
        >
          <XIcon {...stylex.props(chip.removeIcon)} />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  );
}

function ComboboxChipsInput({
  className,
  style,
  ...props
}: ComboboxPrimitive.Input.Props) {
  const sx = mergeSx(stylex.props(chipsInput.root), className, style);
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      {...props}
      className={sx.className}
      style={sx.style}
    />
  );
}

function useComboboxAnchor() {
  return useRef<HTMLDivElement | null>(null);
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
};
