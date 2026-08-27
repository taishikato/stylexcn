import * as stylex from "@stylexjs/stylex";
import { Avatar as AvatarPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { tokens } from "../tokens.stylex";

const RING_BACKGROUND = `0 0 0 2px ${tokens["--background"]}`;

/**
 * Avatar family as StyleX tables. Official shadcn Radix UI Avatar;
 * size keys default | sm | lg; illegal keys fail at compile time.
 */
const sizes = stylex.create({
  default: {
    width: "2rem",
    height: "2rem",
  },
  sm: {
    width: "1.5rem",
    height: "1.5rem",
  },
  lg: {
    width: "2.5rem",
    height: "2.5rem",
  },
});

const root = stylex.create({
  on: {
    position: "relative",
    display: "flex",
    flexShrink: 0,
    borderRadius: "9999px",
    userSelect: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    "::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: tokens["--border"],
      borderRadius: "9999px",
      mixBlendMode: {
        default: "darken",
        ":is(.dark *)": "lighten",
      },
      pointerEvents: "none",
    },
    boxShadow: {
      default: "none",
      ':is([data-slot="avatar-group"] > *)': RING_BACKGROUND,
    },
    marginInlineStart: {
      default: null,
      ':is([data-slot="avatar-group"] > :not(:first-child))': "-0.5rem",
    },
  },
});

const image = stylex.create({
  on: {
    aspectRatio: "1 / 1",
    width: "100%",
    height: "100%",
    borderRadius: "9999px",
    objectFit: "cover",
  },
});

const fallback = stylex.create({
  on: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    backgroundColor: tokens["--muted"],
    color: tokens["--muted-foreground"],
    fontSize: {
      default: "0.875rem",
      ':is([data-slot="avatar"][data-size="sm"] *)': "0.75rem",
    },
    lineHeight: {
      default: "1.25rem",
      ':is([data-slot="avatar"][data-size="sm"] *)': "1rem",
    },
    fontFamily: "inherit",
  },
});

const badge = stylex.create({
  on: {
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 10,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    backgroundColor: tokens["--primary"],
    color: tokens["--primary-foreground"],
    boxShadow: RING_BACKGROUND,
    userSelect: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    width: {
      ':is([data-slot="avatar"][data-size="sm"] *)': "0.5rem",
      ':is([data-slot="avatar"][data-size="default"] *)': "0.625rem",
      ':is([data-slot="avatar"][data-size="lg"] *)': "0.75rem",
    },
    height: {
      ':is([data-slot="avatar"][data-size="sm"] *)': "0.5rem",
      ':is([data-slot="avatar"][data-size="default"] *)': "0.625rem",
      ':is([data-slot="avatar"][data-size="lg"] *)': "0.75rem",
    },
    ":not(#\\0) > svg": {
      width: "0.5rem",
      height: "0.5rem",
    },
    ':is([data-slot="avatar"][data-size="sm"] *) > svg': {
      display: "none",
    },
  },
});

const group = stylex.create({
  on: {
    display: "flex",
    fontFamily: "inherit",
  },
});

const groupCount = stylex.create({
  on: {
    position: "relative",
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    backgroundColor: tokens["--muted"],
    color: tokens["--muted-foreground"],
    boxShadow: RING_BACKGROUND,
    boxSizing: "border-box",
    fontFamily: "inherit",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    width: {
      default: "2rem",
      ':is([data-slot="avatar-group"]:has([data-size="lg"]) *)': "2.5rem",
      ':is([data-slot="avatar-group"]:has([data-size="sm"]) *)': "1.5rem",
    },
    height: {
      default: "2rem",
      ':is([data-slot="avatar-group"]:has([data-size="lg"]) *)': "2.5rem",
      ':is([data-slot="avatar-group"]:has([data-size="sm"]) *)': "1.5rem",
    },
    marginInlineStart: {
      default: null,
      ':is([data-slot="avatar-group"] > :not(:first-child))': "-0.5rem",
    },
    ":not(#\\0) > svg": {
      width: {
        default: "1rem",
        ':is([data-slot="avatar-group"]:has([data-size="lg"]) *)': "1.25rem",
        ':is([data-slot="avatar-group"]:has([data-size="sm"]) *)': "0.75rem",
      },
      height: {
        default: "1rem",
        ':is([data-slot="avatar-group"]:has([data-size="lg"]) *)': "1.25rem",
        ':is([data-slot="avatar-group"]:has([data-size="sm"]) *)': "0.75rem",
      },
    },
  },
});

export type AvatarSize = keyof typeof sizes;

export type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: AvatarSize;
};

export function Avatar({ size = "default", ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      {...props}
      {...stylex.props(root.on, sizes[size])}
    />
  );
}

export type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;

export function AvatarImage(props: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      {...props}
      {...stylex.props(image.on)}
    />
  );
}

export type AvatarFallbackProps = ComponentProps<
  typeof AvatarPrimitive.Fallback
>;

export function AvatarFallback(props: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      {...props}
      {...stylex.props(fallback.on)}
    />
  );
}

export type AvatarBadgeProps = ComponentProps<"span">;

export function AvatarBadge(props: AvatarBadgeProps) {
  return (
    <span data-slot="avatar-badge" {...props} {...stylex.props(badge.on)} />
  );
}

export type AvatarGroupProps = ComponentProps<"div">;

export function AvatarGroup(props: AvatarGroupProps) {
  return (
    <div data-slot="avatar-group" {...props} {...stylex.props(group.on)} />
  );
}

export type AvatarGroupCountProps = ComponentProps<"div">;

export function AvatarGroupCount(props: AvatarGroupCountProps) {
  return (
    <div
      data-slot="avatar-group-count"
      {...props}
      {...stylex.props(groupCount.on)}
    />
  );
}

export const avatarSizes = sizes;
export const avatarRoot = root;
export const avatarImage = image;
export const avatarFallback = fallback;
export const avatarBadge = badge;
export const avatarGroup = group;
export const avatarGroupCount = groupCount;
