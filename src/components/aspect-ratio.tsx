import { AspectRatio as AspectRatioPrimitive } from "radix-ui";
import type { ComponentProps } from "react";

/**
 * Aspect Ratio. Official New York is an unstyled radix-ui wrapper
 * (data-slot only); keep StyleX equivalently unstyled. Visual fill lives
 * in the shared demo, not on this primitive.
 */
export type AspectRatioProps = ComponentProps<typeof AspectRatioPrimitive.Root>;

export function AspectRatio(props: AspectRatioProps) {
  return (
    <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
  );
}
