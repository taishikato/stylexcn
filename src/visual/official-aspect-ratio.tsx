"use client"

import * as React from "react"
import { AspectRatio as AspectRatioPrimitive } from "radix-ui"

/**
 * Official shadcn/ui New York v4 Aspect Ratio, copied from
 * https://ui.shadcn.com/r/styles/new-york-v4/aspect-ratio.json
 * (same source as apps/v4/registry/new-york-v4/ui/aspect-ratio.tsx).
 *
 * Used only as the visual-regression baseline. Do not restyle this file to
 * make diffs pass. Official Aspect Ratio is an unstyled radix-ui wrapper
 * (data-slot only).
 */
function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio, AspectRatio as OfficialAspectRatio }
