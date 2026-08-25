"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Official shadcn/ui New York v4 Label, copied from
 * https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/ui/label.tsx
 *
 * Used only as the visual-regression baseline. Do not restyle this file to
 * make diffs pass.
 */
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label, Label as OfficialLabel }
