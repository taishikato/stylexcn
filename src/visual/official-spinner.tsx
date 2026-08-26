import * as React from "react"
import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Official shadcn/ui New York v4 Spinner, copied from
 * https://ui.shadcn.com/r/styles/new-york-v4/spinner.json
 * (same source as apps/v4/registry/new-york-v4/ui/spinner.tsx).
 *
 * Used only as the visual-regression baseline. Do not restyle this file to
 * make diffs pass. Keep `animate-spin`; the visual-diff script disables
 * CSS animations for both kits.
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner, Spinner as OfficialSpinner }
