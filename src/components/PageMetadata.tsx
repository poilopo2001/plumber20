import { Metadata } from 'next';

interface PageMetadataProps {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    schema: {
      '@context': string;
      '@type': string;
      name: string;
      description: string;
      areaServed: string;
      priceRange: string;
    };
  };
}

export function generateMetadata({ metadata }: PageMetadataProps): Metadata {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
    other: {
      'application-name': 'PlombierPro',
      'og:site_name': 'PlombierPro',
      'og:locale': 'fr_FR',
      'og:type': 'website',
    },
    alternates: {
      canonical: `https://depannage-luxembourg.com/${metadata.schema.areaServed.toLowerCase()}`,
    },
  };
}

export default function PageMetadata({ metadata }: PageMetadataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          ...metadata.schema,
          address: {
            '@type': 'PostalAddress',
            addressLocality: metadata.schema.areaServed,
            addressCountry: 'LU',
          },
        }),
      }}
    />
  );
}
