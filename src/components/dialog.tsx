import * as stylex from "@stylexjs/stylex";
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";
import { Button } from "./button";

/* Tailwind v4 --shadow-lg (theme.css). Official DialogContent uses shadow-lg. */
const SHADOW_LG =
  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
/* Tailwind v4 paints ring before inset offset: offset fill, then ring. */
const FOCUS_RING =
  "0 0 0 2px var(--background), 0 0 0 4px var(--ring)";
const SM = "@media (min-width: 40rem)";

/**
 * Dialog family as StyleX tables.
 * Official New York overlay dim is bg-black/50, not a token.
 * sm breakpoint is Tailwind v4 40rem; viewport for visual capture is 800px
 * (sm:max-w-lg / sm:text-left / sm:flex-row).
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
      [SM]: "32rem",
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
    outline: "none",
    fontFamily: "inherit",
  },
});

const close = stylex.create({
  root: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    borderRadius: "0.125rem",
    opacity: {
      default: 0.7,
      ":hover": 1,
    },
    backgroundColor: {
      default: "transparent",
      '[data-state="open"]': tokens["--accent"],
    },
    color: {
      default: "inherit",
      '[data-state="open"]': tokens["--muted-foreground"],
    },
    borderWidth: 0,
    borderStyle: "solid",
    padding: 0,
    margin: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "default",
    fontFamily: "inherit",
    appearance: "none",
    backgroundImage: "none",
    transitionProperty: "opacity",
    transitionDuration: "150ms",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    outline: "none",
    boxShadow: {
      default: "none",
      ":focus": FOCUS_RING,
    },
    pointerEvents: {
      default: null,
      ":disabled": "none",
    },
  },
  icon: {
    pointerEvents: "none",
    flexShrink: 0,
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

const header = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    textAlign: {
      default: "center",
      [SM]: "left",
    },
    fontFamily: "inherit",
  },
});

const footer = stylex.create({
  root: {
    display: "flex",
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
    lineHeight: 1,
    fontWeight: 600,
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

export type DialogProps = ComponentProps<typeof DialogPrimitive.Root>;
export type DialogTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>;
export type DialogPortalProps = ComponentProps<typeof DialogPrimitive.Portal>;
export type DialogCloseProps = ComponentProps<typeof DialogPrimitive.Close>;
export type DialogOverlayProps = ComponentProps<typeof DialogPrimitive.Overlay>;
export type DialogContentProps = ComponentProps<
  typeof DialogPrimitive.Content
> & {
  showCloseButton?: boolean;
};
export type DialogHeaderProps = ComponentProps<"div">;
export type DialogFooterProps = ComponentProps<"div"> & {
  showCloseButton?: boolean;
};
export type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>;
export type DialogDescriptionProps = ComponentProps<
  typeof DialogPrimitive.Description
>;

export function Dialog({ ...props }: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

export function DialogPortal({ ...props }: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

export function DialogClose({ ...props }: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  const sx = stylex.props(overlay.root);
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DialogContent({
  className,
  children,
  showCloseButton = true,
  style,
  ...props
}: DialogContentProps) {
  const sx = stylex.props(content.root);
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={{ ...sx.style, ...style }}
      >
        {children}
        {showCloseButton ? (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            {...stylex.props(close.root)}
          >
            <XIcon {...stylex.props(close.icon)} />
            <span {...stylex.props(close.srOnly)}>Close</span>
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export function DialogHeader({ className, style, ...props }: DialogHeaderProps) {
  const sx = stylex.props(header.root);
  return (
    <div
      data-slot="dialog-header"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={{ ...sx.style, ...style }}
    />
  );
}

export function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: DialogFooterProps) {
  const sx = stylex.props(footer.root);
  return (
    <div
      data-slot="dialog-footer"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    >
      {children}
      {showCloseButton ? (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      ) : null}
    </div>
  );
}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  const sx = stylex.props(title.root);
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  const sx = stylex.props(description.root);
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const dialogOverlay = overlay;
export const dialogContent = content;
export const dialogClose = close;
export const dialogHeader = header;
export const dialogFooter = footer;
export const dialogTitle = title;
export const dialogDescription = description;
