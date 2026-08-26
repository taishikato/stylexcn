import * as stylex from "@stylexjs/stylex";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import {
  createContext,
  useContext,
  type ComponentProps,
  type CSSProperties,
} from "react";
import { tokens } from "@/lib/tokens.stylex";
import {
  toggleBase,
  toggleSizes,
  toggleVariants,
  type ToggleSize,
  type ToggleVariant,
} from "@/components/ui/toggle";

const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const MIX_DESTRUCTIVE_20 =
  "color-mix(in oklab, var(--destructive) 20%, transparent)";
const MIX_DESTRUCTIVE_40 =
  "color-mix(in oklab, var(--destructive) 40%, transparent)";
const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
const RING_DESTRUCTIVE = `0 0 0 3px ${MIX_DESTRUCTIVE_20}`;
const RING_DESTRUCTIVE_DARK = `0 0 0 3px ${MIX_DESTRUCTIVE_40}`;

type ToggleGroupContextValue = {
  variant?: ToggleVariant;
  size?: ToggleSize;
  spacing: number;
};

const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  spacing: 0,
});

/**
 * Root + item extras as StyleX tables. Item chrome reuses Toggle
 * `toggleBase` / `toggleVariants` / `toggleSizes`. Official spacing=0
 * joins corners (`first:rounded-l-md last:rounded-r-md`) and drops the
 * shared outline left border except on the first item.
 */
const root = stylex.create({
  on: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    /* Tailwind v4 `gap-[--spacing(var(--gap))]` with `--spacing: 0.25rem`. */
    gap: "calc(0.25rem * var(--gap))",
    borderRadius: tokens["--radius-md"],
    boxShadow: {
      default: "none",
      '[data-spacing="default"][data-variant="outline"]': SHADOW_XS,
    },
  },
});

const itemExtras = stylex.create({
  on: {
    width: "auto",
    minWidth: 0,
    flexShrink: 0,
    paddingInline: "0.75rem",
    zIndex: {
      default: "auto",
      ":focus": 10,
      ":focus-visible": 10,
    },
    /* Official `rounded-none` + `first:rounded-l-md` + `last:rounded-r-md`
       (longhands compose on a lone first+last child). */
    borderRadius: {
      default: null,
      '[data-spacing="0"]': 0,
    },
    borderTopLeftRadius: {
      default: null,
      '[data-spacing="0"]': 0,
      '[data-spacing="0"]:first-child': tokens["--radius-md"],
    },
    borderBottomLeftRadius: {
      default: null,
      '[data-spacing="0"]': 0,
      '[data-spacing="0"]:first-child': tokens["--radius-md"],
    },
    borderTopRightRadius: {
      default: null,
      '[data-spacing="0"]': 0,
      '[data-spacing="0"]:last-child': tokens["--radius-md"],
    },
    borderBottomRightRadius: {
      default: null,
      '[data-spacing="0"]': 0,
      '[data-spacing="0"]:last-child': tokens["--radius-md"],
    },
    boxShadow: {
      default: null,
      '[data-spacing="0"]': "none",
      '[data-spacing="0"]:focus-visible': RING,
      '[data-spacing="0"][aria-invalid="true"]:focus-visible': RING_DESTRUCTIVE,
      '[data-spacing="0"]:is(.dark *)[aria-invalid="true"]:focus-visible':
        RING_DESTRUCTIVE_DARK,
    },
    borderLeftWidth: {
      default: null,
      '[data-spacing="0"][data-variant="outline"]': 0,
      '[data-spacing="0"][data-variant="outline"]:first-child': "1px",
    },
  },
});

export type ToggleGroupProps = ComponentProps<typeof ToggleGroupPrimitive.Root> & {
  variant?: ToggleVariant;
  size?: ToggleSize;
  spacing?: number;
};

export type ToggleGroupItemProps = ComponentProps<
  typeof ToggleGroupPrimitive.Item
> & {
  variant?: ToggleVariant;
  size?: ToggleSize;
};

export function ToggleGroup({
  variant,
  size,
  spacing = 0,
  children,
  style,
  ...props
}: ToggleGroupProps) {
  const sx = stylex.props(root.on);
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      {...props}
      className={sx.className}
      style={
        {
          ...sx.style,
          ...style,
          "--gap": spacing,
        } as CSSProperties
      }
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

export function ToggleGroupItem({
  variant,
  size,
  ...props
}: ToggleGroupItemProps) {
  const context = useContext(ToggleGroupContext);
  const resolvedVariant = context.variant || variant || "default";
  const resolvedSize = context.size || size || "default";

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={resolvedVariant}
      data-size={resolvedSize}
      data-spacing={context.spacing}
      {...props}
      {...stylex.props(
        toggleBase.root,
        toggleVariants[resolvedVariant],
        toggleSizes[resolvedSize],
        itemExtras.on,
      )}
    />
  );
}
