import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Official shadcn/ui New York v4 Textarea, copied from
 * https://github.com/shadcn-ui/ui/blob/main/apps/v4/registry/new-york-v4/ui/textarea.tsx
 * (registry: https://ui.shadcn.com/r/styles/new-york-v4/textarea.json)
 *
 * Used only as the visual-regression baseline. Do not restyle this file to
 * make diffs pass.
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea, Textarea as OfficialTextarea };
