import * as stylex from "@stylexjs/stylex";
import { GripVerticalIcon } from "lucide-react";
import type { ComponentProps } from "react";
import * as ResizablePrimitive from "react-resizable-panels";
import { tokens } from "../tokens.stylex";

/**
 * Tailwind v4 `ring-1` + `ring-offset-1` + `ring-ring` (default offset is white).
 * First slice does not capture focus-visible; keep the official stack anyway.
 */
const FOCUS_RING =
  "0 0 0 1px #fff, 0 0 0 2px var(--ring)";

/**
 * Resizable family as StyleX tables. Official New York: react-resizable-panels
 * Group / Panel / Separator. Handle `after` is the hit area (w-1 / h-1), not a fill.
 */
const group = stylex.create({
  on: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: {
      default: "row",
      '[aria-orientation="vertical"]': "column",
    },
  },
});

const handle = stylex.create({
  on: {
    position: "relative",
    display: "flex",
    width: {
      default: "1px",
      '[aria-orientation="horizontal"]': "100%",
    },
    height: {
      default: null,
      '[aria-orientation="horizontal"]': "1px",
    },
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens["--border"],
    outline: "none",
    boxShadow: {
      default: "none",
      ":focus-visible": FOCUS_RING,
    },
    /* Official after: inset-y-0 left-1/2 w-1 -translate-x-1/2; horizontal
       after:left-0 after:h-1 after:w-full after:translate-x-0 after:-translate-y-1/2 */
    "::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: {
        default: "50%",
        '[aria-orientation="horizontal"]': 0,
      },
      width: {
        default: "0.25rem",
        '[aria-orientation="horizontal"]': "100%",
      },
      height: {
        default: null,
        '[aria-orientation="horizontal"]': "0.25rem",
      },
      transform: {
        default: "translateX(-50%)",
        '[aria-orientation="horizontal"]': "translateY(-50%)",
      },
    },
  },
});

const grip = stylex.create({
  on: {
    zIndex: 10,
    display: "flex",
    height: "1rem",
    width: "0.75rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.125rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: tokens["--border"],
    backgroundColor: tokens["--border"],
    boxSizing: "border-box",
    transform: {
      default: null,
      ':is([data-slot="resizable-handle"][aria-orientation="horizontal"] > *)':
        "rotate(90deg)",
    },
  },
});

const gripIcon = stylex.create({
  on: {
    width: "0.625rem",
    height: "0.625rem",
    flexShrink: 0,
  },
});

export type ResizablePanelGroupProps = ComponentProps<
  typeof ResizablePrimitive.Group
>;

export function ResizablePanelGroup(props: ResizablePanelGroupProps) {
  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      {...props}
      {...stylex.props(group.on)}
    />
  );
}

export type ResizablePanelProps = ComponentProps<typeof ResizablePrimitive.Panel>;

export function ResizablePanel(props: ResizablePanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

export type ResizableHandleProps = ComponentProps<
  typeof ResizablePrimitive.Separator
> & {
  withHandle?: boolean;
};

export function ResizableHandle({
  withHandle,
  ...props
}: ResizableHandleProps) {
  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      {...props}
      {...stylex.props(handle.on)}
    >
      {withHandle ? (
        <div {...stylex.props(grip.on)}>
          <GripVerticalIcon {...stylex.props(gripIcon.on)} />
        </div>
      ) : null}
    </ResizablePrimitive.Separator>
  );
}

export const resizableGroup = group;
export const resizableHandle = handle;
export const resizableGrip = grip;
