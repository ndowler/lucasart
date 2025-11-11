import type {
  FAQ,
  ServiceSchemaData,
  OrganizationSchemaData,
} from '@/types';

/**
 * Create Organization JSON-LD schema
 */
export function createOrganizationSchema(
  data: OrganizationSchemaData
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    description: data.description,
    url: data.url,
    logo: data.logo,
    telephone: data.telephone,
    email: data.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      postalCode: data.address.postalCode || '',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Washington',
      },
      {
        '@type': 'State',
        name: 'Oregon',
      },
    ],
  };
}

/**
 * Create LocalBusiness JSON-LD schema
 */
export function createLocalBusinessSchema(
  data: OrganizationSchemaData
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': data.url,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '47.2529',
      longitude: '-122.4443',
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Washington',
      },
      {
        '@type': 'State',
        name: 'Oregon',
      },
    ],
  };
}

/**
 * Create Service JSON-LD schema
 */
export function createServiceSchema(data: ServiceSchemaData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: data.provider,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://foxglove.cpa',
    },
    areaServed: data.areaServed.map((area) => ({
      '@type': 'State',
      name: area,
    })),
    ...(data.priceRange && { priceRange: data.priceRange }),
  };
}

/**
 * Create FAQPage JSON-LD schema
 */
export function createFAQSchema(faqs: FAQ[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Create Article JSON-LD schema
 */
export function createArticleSchema(article: {
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  url: string;
  image: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FoxGlove CPA',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    image: article.image,
    url: article.url,
  };
}

/**
 * Generate page metadata with SEO best practices
 */
export function generateMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://foxglove.cpa'}${path}`;
  const ogImage = image || '/og-image.jpg';

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
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
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

