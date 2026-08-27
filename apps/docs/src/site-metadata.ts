import type { Metadata } from "next";

export const SITE_NAME = "stylexcn";
export const SITE_URL = "https://stylexcn.vercel.app";
export const SITE_TITLE = "stylexcn - StyleX components with the shadcn look";
export const SITE_DESCRIPTION =
  "Shadcn UI, but with StyleX instead of Tailwind CSS.";
export const OGP_IMAGE = "/opengraph-image-v2.png";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title: `${title} · ${SITE_NAME}`,
      description,
      images: [
        {
          url: OGP_IMAGE,
          width: 1200,
          height: 630,
          alt: "stylexcn - StyleX components with the shadcn look",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description,
      images: [OGP_IMAGE],
    },
  };
}
