import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type IconsType = string | Metadata['icons'];

export function createMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = siteConfig.icons as IconsType,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: IconsType;
} = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: image ?? siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ?? siteConfig.ogImage],
    },
    icons: icons as Metadata['icons'],
  };
}
