import * as stylex from "@stylexjs/stylex";
import { XIcon } from "lucide-react";
import { Dialog as SheetPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "@/lib/tokens.stylex";

/* Tailwind v4 --shadow-lg (theme.css). Official SheetContent uses shadow-lg. */
const SHADOW_LG =
  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
/* Tailwind v4 paints ring before inset offset: offset fill, then ring. */
const FOCUS_RING =
  "0 0 0 2px var(--background), 0 0 0 4px var(--ring)";
const SM = "@media (min-width: 40rem)";

export type SheetSide = "top" | "right" | "bottom" | "left";

/**
 * Sheet family as StyleX tables.
 * Official New York overlay dim is bg-black/50, not a token.
 * Content padding lives on Header/Footer (p-4), not on the panel.
 * sm breakpoint is Tailwind v4 40rem; visual capture viewport is 800px
 * so sm:max-w-sm applies on left/right sides.
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
    zIndex: 50,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxSizing: "border-box",
    backgroundColor: tokens["--background"],
    boxShadow: SHADOW_LG,
    fontFamily: "inherit",
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: tokens["--border"],
  },
  right: {
    top: 0,
    bottom: 0,
    right: 0,
    height: "100%",
    width: "75%",
    maxWidth: {
      default: null,
      [SM]: "24rem",
    },
    borderLeftWidth: "1px",
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0,
    height: "100%",
    width: "75%",
    maxWidth: {
      default: null,
      [SM]: "24rem",
    },
    borderRightWidth: "1px",
  },
  top: {
    left: 0,
    right: 0,
    top: 0,
    height: "auto",
    borderBottomWidth: "1px",
  },
  bottom: {
    left: 0,
    right: 0,
    bottom: 0,
    height: "auto",
    borderTopWidth: "1px",
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
      '[data-state="open"]': tokens["--secondary"],
    },
    color: "inherit",
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
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
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
    gap: "0.375rem",
    padding: "1rem",
    fontFamily: "inherit",
  },
});

const footer = stylex.create({
  root: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1rem",
    fontFamily: "inherit",
  },
});

const title = stylex.create({
  root: {
    fontWeight: 600,
    color: tokens["--foreground"],
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

export type SheetProps = ComponentProps<typeof SheetPrimitive.Root>;
export type SheetTriggerProps = ComponentProps<typeof SheetPrimitive.Trigger>;
export type SheetCloseProps = ComponentProps<typeof SheetPrimitive.Close>;
export type SheetPortalProps = ComponentProps<typeof SheetPrimitive.Portal>;
export type SheetOverlayProps = ComponentProps<typeof SheetPrimitive.Overlay>;
export type SheetContentProps = ComponentProps<
  typeof SheetPrimitive.Content
> & {
  side?: SheetSide;
  showCloseButton?: boolean;
};
export type SheetHeaderProps = ComponentProps<"div">;
export type SheetFooterProps = ComponentProps<"div">;
export type SheetTitleProps = ComponentProps<typeof SheetPrimitive.Title>;
export type SheetDescriptionProps = ComponentProps<
  typeof SheetPrimitive.Description
>;

export function Sheet({ ...props }: SheetProps) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

export function SheetTrigger({ ...props }: SheetTriggerProps) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

export function SheetClose({ ...props }: SheetCloseProps) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

export function SheetPortal({ ...props }: SheetPortalProps) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

export function SheetOverlay({ className, ...props }: SheetOverlayProps) {
  const sx = stylex.props(overlay.root);
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function SheetContent({
  className,
  style,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetContentProps) {
  const sx = stylex.props(content.root, content[side]);
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={{ ...sx.style, ...style }}
      >
        {children}
        {showCloseButton ? (
          <SheetPrimitive.Close {...stylex.props(close.root)}>
            <XIcon {...stylex.props(close.icon)} />
            <span {...stylex.props(close.srOnly)}>Close</span>
          </SheetPrimitive.Close>
        ) : null}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

export function SheetHeader({ className, ...props }: SheetHeaderProps) {
  const sx = stylex.props(header.root);
  return (
    <div
      data-slot="sheet-header"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function SheetFooter({ className, ...props }: SheetFooterProps) {
  const sx = stylex.props(footer.root);
  return (
    <div
      data-slot="sheet-footer"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function SheetTitle({ className, ...props }: SheetTitleProps) {
  const sx = stylex.props(title.root);
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function SheetDescription({
  className,
  ...props
}: SheetDescriptionProps) {
  const sx = stylex.props(description.root);
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const sheetOverlay = overlay;
export const sheetContent = content;
export const sheetClose = close;
export const sheetHeader = header;
export const sheetFooter = footer;
export const sheetTitle = title;
export const sheetDescription = description;
