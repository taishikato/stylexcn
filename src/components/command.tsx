import * as stylex from "@stylexjs/stylex";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import {
  createContext,
  useContext,
  type ComponentProps,
  type CSSProperties,
} from "react";
import { tokens } from "../tokens.stylex";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

const CommandDialogScope = createContext(false);

/**
 * Command family as StyleX tables. Official New York v4 Command is cmdk plus
 * Dialog; keep that primitive. Do not restyle to Base UI.
 */
const command = stylex.create({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    overflow: "hidden",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    backgroundColor: tokens["--popover"],
    color: tokens["--popover-foreground"],
    fontFamily: "inherit",
  },
  /* Official CommandDialog: subsequent visible groups drop extra top padding. */
  inDialog: {
    ":not(#\\0) [cmdk-group]:not([hidden]) ~ [cmdk-group]": {
      paddingTop: 0,
    },
  },
});

const dialogContent = stylex.create({
  root: {
    overflow: "hidden",
    padding: 0,
  },
});

const srOnly = stylex.create({
  root: {
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

const input = stylex.create({
  wrapper: {
    display: "flex",
    height: "2.25rem",
    alignItems: "center",
    gap: "0.5rem",
    boxSizing: "border-box",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: tokens["--border"],
    paddingInline: "0.75rem",
  },
  wrapperDialog: {
    height: "3rem",
  },
  icon: {
    pointerEvents: "none",
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
    opacity: 0.5,
  },
  field: {
    display: "flex",
    height: "2.5rem",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-md"],
    borderWidth: 0,
    margin: 0,
    backgroundColor: "transparent",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    paddingInline: 0,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    outline: "none",
    boxShadow: "none",
    appearance: "none",
    fontFamily: "inherit",
    color: "inherit",
    "::placeholder": {
      color: tokens["--muted-foreground"],
    },
    cursor: {
      default: "text",
      ":disabled": "not-allowed",
    },
    opacity: {
      default: 1,
      ":disabled": 0.5,
    },
  },
  fieldDialog: {
    height: "3rem",
  },
});

const list = stylex.create({
  root: {
    maxHeight: "300px",
    scrollPaddingBlock: "0.25rem",
    overflowX: "hidden",
    overflowY: "auto",
  },
});

const empty = stylex.create({
  root: {
    paddingBlock: "1.5rem",
    textAlign: "center",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontFamily: "inherit",
  },
});

const group = stylex.create({
  root: {
    overflow: "hidden",
    padding: "0.25rem",
    color: tokens["--foreground"],
    fontFamily: "inherit",
    ":not(#\\0) [cmdk-group-heading]": {
      paddingInline: "0.5rem",
      paddingBlock: "0.375rem",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      fontWeight: 500,
      color: tokens["--muted-foreground"],
    },
  },
  dialog: {
    paddingInline: "0.5rem",
  },
});

const separator = stylex.create({
  root: {
    marginInline: "-0.25rem",
    height: "1px",
    backgroundColor: tokens["--border"],
    borderWidth: 0,
  },
});

const item = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    cursor: "default",
    alignItems: "center",
    gap: "0.5rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius-sm"],
    paddingInline: "0.5rem",
    paddingBlock: "0.375rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    outline: "none",
    userSelect: "none",
    fontFamily: "inherit",
    backgroundColor: {
      default: "transparent",
      '[data-selected="true"]': tokens["--accent"],
    },
    color: {
      default: "inherit",
      '[data-selected="true"]': tokens["--accent-foreground"],
    },
    pointerEvents: {
      default: null,
      '[data-disabled="true"]': "none",
    },
    opacity: {
      default: 1,
      '[data-disabled="true"]': 0.5,
    },
    ":not(#\\0) svg": {
      pointerEvents: "none",
      flexShrink: 0,
    },
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
    },
    ":not(#\\0) svg:not([class*='text-'])": {
      color: tokens["--muted-foreground"],
    },
  },
  dialog: {
    paddingInline: "0.5rem",
    paddingBlock: "0.75rem",
  },
});

const shortcut = stylex.create({
  root: {
    marginLeft: "auto",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    letterSpacing: "0.1em",
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

function mergeSx(
  sx: { className?: string; style?: CSSProperties },
  className?: string,
  style?: CSSProperties,
) {
  return {
    className: [sx.className, className].filter(Boolean).join(" "),
    style: { ...sx.style, ...style },
  };
}

export type CommandProps = ComponentProps<typeof CommandPrimitive>;
export type CommandDialogProps = ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
};
export type CommandInputProps = ComponentProps<typeof CommandPrimitive.Input>;
export type CommandListProps = ComponentProps<typeof CommandPrimitive.List>;
export type CommandEmptyProps = ComponentProps<typeof CommandPrimitive.Empty>;
export type CommandGroupProps = ComponentProps<typeof CommandPrimitive.Group>;
export type CommandSeparatorProps = ComponentProps<
  typeof CommandPrimitive.Separator
>;
export type CommandItemProps = ComponentProps<typeof CommandPrimitive.Item>;
export type CommandShortcutProps = ComponentProps<"span">;

export function Command({ className, style, ...props }: CommandProps) {
  const inDialog = useContext(CommandDialogScope);
  const sx = stylex.props(command.root, inDialog && command.inDialog);
  const merged = mergeSx(sx, className, style);
  return (
    <CommandPrimitive
      data-slot="command"
      {...props}
      className={merged.className}
      style={merged.style}
    />
  );
}

export function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: CommandDialogProps) {
  const hidden = stylex.props(srOnly.root);
  return (
    <Dialog {...props}>
      <DialogHeader className={hidden.className} style={hidden.style}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={[stylex.props(dialogContent.root).className, className]
          .filter(Boolean)
          .join(" ")}
        style={{
          ...stylex.props(dialogContent.root).style,
          padding: 0,
          overflow: "hidden",
        }}
        showCloseButton={showCloseButton}
      >
        <CommandDialogScope.Provider value={true}>
          <Command>{children}</Command>
        </CommandDialogScope.Provider>
      </DialogContent>
    </Dialog>
  );
}

export function CommandInput({ className, style, ...props }: CommandInputProps) {
  const inDialog = useContext(CommandDialogScope);
  const wrap = stylex.props(input.wrapper, inDialog && input.wrapperDialog);
  const field = mergeSx(
    stylex.props(input.field, inDialog && input.fieldDialog),
    className,
    style,
  );
  return (
    <div data-slot="command-input-wrapper" {...wrap}>
      <SearchIcon {...stylex.props(input.icon)} />
      <CommandPrimitive.Input
        data-slot="command-input"
        {...props}
        className={field.className}
        style={field.style}
      />
    </div>
  );
}

export function CommandList({ className, style, ...props }: CommandListProps) {
  const merged = mergeSx(stylex.props(list.root), className, style);
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      {...props}
      className={merged.className}
      style={merged.style}
    />
  );
}

export function CommandEmpty({ className, style, ...props }: CommandEmptyProps) {
  const merged = mergeSx(stylex.props(empty.root), className, style);
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      {...props}
      className={merged.className}
      style={merged.style}
    />
  );
}

export function CommandGroup({ className, style, ...props }: CommandGroupProps) {
  const inDialog = useContext(CommandDialogScope);
  const merged = mergeSx(
    stylex.props(group.root, inDialog && group.dialog),
    className,
    style,
  );
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      {...props}
      className={merged.className}
      style={merged.style}
    />
  );
}

export function CommandSeparator({
  className,
  style,
  ...props
}: CommandSeparatorProps) {
  const merged = mergeSx(stylex.props(separator.root), className, style);
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      {...props}
      className={merged.className}
      style={merged.style}
    />
  );
}

export function CommandItem({ className, style, ...props }: CommandItemProps) {
  const inDialog = useContext(CommandDialogScope);
  const merged = mergeSx(
    stylex.props(item.root, inDialog && item.dialog),
    className,
    style,
  );
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      {...props}
      className={merged.className}
      style={merged.style}
    />
  );
}

export function CommandShortcut({
  className,
  style,
  ...props
}: CommandShortcutProps) {
  const merged = mergeSx(stylex.props(shortcut.root), className, style);
  return (
    <span
      data-slot="command-shortcut"
      {...props}
      className={merged.className}
      style={merged.style}
    />
  );
}

export const commandRoot = command;
export const commandInput = input;
export const commandList = list;
export const commandEmpty = empty;
export const commandGroup = group;
export const commandSeparator = separator;
export const commandItem = item;
export const commandShortcut = shortcut;
