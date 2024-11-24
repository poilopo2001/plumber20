import { Metadata } from 'next';

export function generateDefaultMetadata(
  title: string,
  description: string
): Metadata {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    title: `${title} | ${siteName}`,
    description,
    metadataBase: new URL(siteUrl || 'https://depannage-luxembourg.com'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: siteUrl,
      siteName,
      locale: 'fr_LU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
