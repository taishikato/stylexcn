"use client"

import * as React from "react"
import { Collapsible as CollapsiblePrimitive } from "radix-ui"

/**
 * Official shadcn/ui New York v4 Collapsible family, copied from
 * https://ui.shadcn.com/r/styles/new-york-v4/collapsible.json
 * (same source as apps/v4/registry/new-york-v4/ui/collapsible.tsx).
 *
 * Used only as the visual-regression baseline. Do not restyle this file to
 * make diffs pass. Official Collapsible is an unstyled radix-ui wrapper
 * (data-slot only).
 */
function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible as OfficialCollapsible,
  CollapsibleTrigger as OfficialCollapsibleTrigger,
  CollapsibleContent as OfficialCollapsibleContent,
}
