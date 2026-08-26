import * as stylex from "@stylexjs/stylex";
import { createContext, useContext, type ComponentProps } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { tokens } from "../tokens.stylex";

const SM = "@media (min-width: 40rem)";
const MD = "@media (min-width: 48rem)";

export type DrawerDirection = "top" | "right" | "bottom" | "left";

const DrawerDirectionContext = createContext<DrawerDirection>("bottom");

function useDrawerDirection() {
  return useContext(DrawerDirectionContext);
}

/**
 * Drawer family as StyleX tables.
 * Official overlay dim is bg-black/50, not a token.
 * Bottom handle is the muted 100px pill; other sides keep it `display: none`.
 * Header `text-center` on top/bottom, `md:text-left` from 48rem.
 * sm breakpoint is Tailwind v4 40rem; visual capture viewport is 800px
 * so sm:max-w-sm applies on left/right.
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
    height: "auto",
    boxSizing: "border-box",
    backgroundColor: tokens["--background"],
    fontFamily: "inherit",
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: tokens["--border"],
  },
  top: {
    left: 0,
    right: 0,
    top: 0,
    marginBottom: "6rem",
    maxHeight: "80vh",
    borderBottomLeftRadius: tokens["--radius-lg"],
    borderBottomRightRadius: tokens["--radius-lg"],
    borderBottomWidth: "1px",
  },
  bottom: {
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: "6rem",
    maxHeight: "80vh",
    borderTopLeftRadius: tokens["--radius-lg"],
    borderTopRightRadius: tokens["--radius-lg"],
    borderTopWidth: "1px",
  },
  right: {
    top: 0,
    bottom: 0,
    right: 0,
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
    width: "75%",
    maxWidth: {
      default: null,
      [SM]: "24rem",
    },
    borderRightWidth: "1px",
  },
});

const handle = stylex.create({
  root: {
    marginInline: "auto",
    marginTop: "1rem",
    display: "none",
    height: "0.5rem",
    width: "100px",
    flexShrink: 0,
    borderRadius: "9999px",
    backgroundColor: tokens["--muted"],
  },
  bottom: {
    display: "block",
  },
});

const header = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: {
      default: "0.125rem",
      [MD]: "0.375rem",
    },
    padding: "1rem",
    fontFamily: "inherit",
  },
  /* Official `md:text-left` loses to group-data text-center (higher specificity). */
  vertical: {
    textAlign: "center",
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

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>;
export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;
export type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>;
export type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>;
export type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>;
export type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>;
export type DrawerHeaderProps = ComponentProps<"div">;
export type DrawerFooterProps = ComponentProps<"div">;
export type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;
export type DrawerDescriptionProps = ComponentProps<
  typeof DrawerPrimitive.Description
>;

export function Drawer({
  direction = "bottom",
  ...props
}: DrawerProps) {
  return (
    <DrawerDirectionContext.Provider value={direction}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        direction={direction}
        {...props}
      />
    </DrawerDirectionContext.Provider>
  );
}

export function DrawerTrigger({ ...props }: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

export function DrawerPortal({ ...props }: DrawerPortalProps) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

export function DrawerClose({ ...props }: DrawerCloseProps) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

export function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
  const sx = stylex.props(overlay.root);
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DrawerContent({
  className,
  children,
  ...props
}: DrawerContentProps) {
  const direction = useDrawerDirection();
  const sx = stylex.props(content.root, content[direction]);
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        {...props}
        className={[sx.className, className].filter(Boolean).join(" ")}
        style={sx.style}
      >
        <div
          {...stylex.props(handle.root, direction === "bottom" && handle.bottom)}
        />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  const direction = useDrawerDirection();
  const vertical = direction === "top" || direction === "bottom";
  const sx = stylex.props(header.root, vertical && header.vertical);
  return (
    <div
      data-slot="drawer-header"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  const sx = stylex.props(footer.root);
  return (
    <div
      data-slot="drawer-footer"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  const sx = stylex.props(title.root);
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps) {
  const sx = stylex.props(description.root);
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      {...props}
      className={[sx.className, className].filter(Boolean).join(" ")}
      style={sx.style}
    />
  );
}

export const drawerOverlay = overlay;
export const drawerContent = content;
export const drawerHandle = handle;
export const drawerHeader = header;
export const drawerFooter = footer;
export const drawerTitle = title;
export const drawerDescription = description;
