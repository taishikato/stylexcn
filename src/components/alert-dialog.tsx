import * as stylex from "@stylexjs/stylex";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from "./button";

/* Tailwind v4 --shadow-lg (theme.css). Official AlertDialogContent uses shadow-lg. */
const SHADOW_LG =
  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
const SM = "@media (min-width: 40rem)";
const SIZE_DEFAULT = '[data-slot="alert-dialog-content"][data-size="default"]';
const SIZE_SM = '[data-slot="alert-dialog-content"][data-size="sm"]';
const HAS_MEDIA = ':has([data-slot="alert-dialog-media"])';

/**
 * Alert Dialog family as StyleX tables.
 * Official New York overlay dim is bg-black/50, not a token.
 * Content `size` is default | sm. Viewport for visual capture is 800px so
 * `data-[size=default]:sm:max-w-lg` applies.
 */
const overlay = stylex.create({
  root: {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    backgroundColor: "rgb(0 0 0 / 0.5)",
  },
});

const content = stylex.create({
  root: {
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: 50,
    display: "grid",
    width: "100%",
    maxWidth: {
      default: "calc(100% - 2rem)",
      '[data-size="sm"]': "20rem",
      [SM]: {
        '[data-size="default"]': "32rem",
      },
    },
    transform: "translate(-50%, -50%)",
    gap: "1rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-lg"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--background"],
    padding: "1.5rem",
    boxShadow: SHADOW_LG,
    fontFamily: "inherit",
  },
});

const header = stylex.create({
  root: {
    display: "grid",
    gridTemplateRows: {
      default: "auto 1fr",
      [HAS_MEDIA]: "auto auto 1fr",
      [SM]: {
        [`:is(${SIZE_DEFAULT} *)${HAS_MEDIA}`]: "auto 1fr",
      },
    },
    placeItems: {
      default: "center",
      [SM]: {
        [`:is(${SIZE_DEFAULT} *)`]: "start",
      },
    },
    gap: "0.375rem",
    columnGap: {
      default: "0.375rem",
      [HAS_MEDIA]: "1.5rem",
    },
    textAlign: {
      default: "center",
      [SM]: {
        [`:is(${SIZE_DEFAULT} *)`]: "left",
      },
    },
    fontFamily: "inherit",
  },
});

const footer = stylex.create({
  root: {
    display: {
      default: "flex",
      [`:is(${SIZE_SM} *)`]: "grid",
    },
    gridTemplateColumns: {
      default: null,
      [`:is(${SIZE_SM} *)`]: "repeat(2, minmax(0, 1fr))",
    },
    flexDirection: {
      default: "column-reverse",
      [SM]: "row",
    },
    gap: "0.5rem",
    justifyContent: {
      default: null,
      [SM]: "flex-end",
    },
    fontFamily: "inherit",
  },
});

const title = stylex.create({
  root: {
    fontSize: "1.125rem",
    /* Tailwind v4 text-lg used line-height (no leading-none on official Title). */
    lineHeight: "1.75rem",
    fontWeight: 600,
    gridColumnStart: {
      default: null,
      [SM]: {
        [`:is(${SIZE_DEFAULT}${HAS_MEDIA} *)`]: 2,
      },
    },
    fontFamily: "inherit",
  },
});

const description = stylex.create({
  root: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

const media = stylex.create({
  root: {
    marginBottom: "0.5rem",
    display: "inline-flex",
    width: "4rem",
    height: "4rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens["--radius-md"],
    backgroundColor: tokens["--muted"],
    gridRow: {
      default: null,
      [SM]: {
        [`:is(${SIZE_DEFAULT} *)`]: "span 2",
      },
    },
    fontFamily: "inherit",
  },
});

export type AlertDialogProps = ComponentProps<typeof AlertDialogPrimitive.Root>;
export type AlertDialogTriggerProps = ComponentProps<
  typeof AlertDialogPrimitive.Trigger
>;
export type AlertDialogPortalProps = ComponentProps<
  typeof AlertDialogPrimitive.Portal
>;
export type AlertDialogOverlayProps = ComponentProps<
  typeof AlertDialogPrimitive.Overlay
>;
export type AlertDialogContentProps = ComponentProps<
  typeof AlertDialogPrimitive.Content
> & {
  size?: "default" | "sm";
};
export type AlertDialogHeaderProps = ComponentProps<"div">;
export type AlertDialogFooterProps = ComponentProps<"div">;
export type AlertDialogTitleProps = ComponentProps<
  typeof AlertDialogPrimitive.Title
>;
export type AlertDialogDescriptionProps = ComponentProps<
  typeof AlertDialogPrimitive.Description
>;
export type AlertDialogMediaProps = ComponentProps<"div">;
export type AlertDialogActionProps = ComponentProps<
  typeof AlertDialogPrimitive.Action
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};
export type AlertDialogCancelProps = ComponentProps<
  typeof AlertDialogPrimitive.Cancel
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function AlertDialog({ ...props }: AlertDialogProps) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

export function AlertDialogTrigger({ ...props }: AlertDialogTriggerProps) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

export function AlertDialogPortal({ ...props }: AlertDialogPortalProps) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

export function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogOverlayProps) {
  const sx = stylex.props(overlay.root);
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function AlertDialogContent({
  className,
  children,
  size = "default",
  ...props
}: AlertDialogContentProps) {
  const sx = stylex.props(content.root);
  return (
    <AlertDialogPortal data-slot="alert-dialog-portal">
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={size}
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={sx.style}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  );
}

export function AlertDialogHeader({
  className,
  ...props
}: AlertDialogHeaderProps) {
  const sx = stylex.props(header.root);
  return (
    <div
      data-slot="alert-dialog-header"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function AlertDialogFooter({
  className,
  ...props
}: AlertDialogFooterProps) {
  const sx = stylex.props(footer.root);
  return (
    <div
      data-slot="alert-dialog-footer"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function AlertDialogTitle({
  className,
  ...props
}: AlertDialogTitleProps) {
  const sx = stylex.props(title.root);
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function AlertDialogDescription({
  className,
  ...props
}: AlertDialogDescriptionProps) {
  const sx = stylex.props(description.root);
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function AlertDialogMedia({
  className,
  children,
  ...props
}: AlertDialogMediaProps) {
  const sx = stylex.props(media.root);
  return (
    <div
      data-slot="alert-dialog-media"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      {children}
    </div>
  );
}

export function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}: AlertDialogActionProps) {
  const sx = stylex.props(
    buttonBase.root,
    buttonVariants[variant],
    buttonSizes[size],
  );
  return (
    <AlertDialogPrimitive.Action
      data-slot="alert-dialog-action"
      data-variant={variant}
      data-size={size}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogCancelProps) {
  const sx = stylex.props(
    buttonBase.root,
    buttonVariants[variant],
    buttonSizes[size],
  );
  return (
    <AlertDialogPrimitive.Cancel
      data-slot="alert-dialog-cancel"
      data-variant={variant}
      data-size={size}
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const alertDialogOverlay = overlay;
export const alertDialogContent = content;
export const alertDialogHeader = header;
export const alertDialogFooter = footer;
export const alertDialogTitle = title;
export const alertDialogDescription = description;
export const alertDialogMedia = media;
