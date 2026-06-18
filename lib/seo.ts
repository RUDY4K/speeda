import type { Metadata } from "next";

export const SITE = {
  name: "Speeda",
  url: "https://speeda.sa",
  locale: "ar_SA",
  twitter: "@speeda_sa",
} as const;

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  ogImage = "/og/default.png",
}: PageSeoInput): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
      languages: {
        "ar-SA": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      url,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitter,
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
  };
}
