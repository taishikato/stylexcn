"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Official shadcn/ui New York v4 Separator, copied from
 * https://ui.shadcn.com/r/styles/new-york-v4/separator.json
 * (same source as apps/v4/registry/new-york-v4/ui/separator.tsx).
 *
 * Used only as the visual-regression baseline. Do not restyle this file to
 * make diffs pass.
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator, Separator as OfficialSeparator }
