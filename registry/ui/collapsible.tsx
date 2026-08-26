import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import type { ComponentProps } from "react";

/**
 * Collapsible family. Official New York is an unstyled radix-ui wrapper
 * (data-slot only); keep StyleX equivalently unstyled. Visual chrome lives
 * in the shared demo, not on this primitive.
 */
export type CollapsibleProps = ComponentProps<typeof CollapsiblePrimitive.Root>;

export function Collapsible(props: CollapsibleProps) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

export type CollapsibleTriggerProps = ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleTrigger
>;

export function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

export type CollapsibleContentProps = ComponentProps<
  typeof CollapsiblePrimitive.CollapsibleContent
>;

export function CollapsibleContent(props: CollapsibleContentProps) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}
