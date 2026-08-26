import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Official shadcn/ui New York v4 Kbd + KbdGroup, copied from
 * https://ui.shadcn.com/r/styles/new-york-v4/kbd.json
 * (same source as apps/v4/registry/new-york-v4/ui/kbd.tsx).
 *
 * Used only as the visual-regression baseline. Do not restyle this file to
 * make diffs pass.
 */
function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, Kbd as OfficialKbd, KbdGroup, KbdGroup as OfficialKbdGroup }
