import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Official shadcn/ui New York v4 Skeleton, copied from
 * https://ui.shadcn.com/r/styles/new-york-v4/skeleton.json
 * (same source as apps/v4/registry/new-york-v4/ui/skeleton.tsx).
 *
 * Used only as the visual-regression baseline. Do not restyle this file to
 * make diffs pass. Keep `animate-pulse`; the visual-diff script disables
 * CSS animations for both kits.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-accent", className)}
      {...props}
    />
  )
}

export { Skeleton, Skeleton as OfficialSkeleton }
