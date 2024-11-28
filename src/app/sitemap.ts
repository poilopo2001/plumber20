import { MetadataRoute } from 'next';

// List of valid quartiers
const VALID_QUARTIERS = [
  'muhlenbach',
  'bonnevoie-nord',
  'bonnevoie-sud',
  'beggen',
  'belair',
  'cents',
  'cessange',
  'clausen',
  'dommeldange',
  'eich',
  'gare',
  'gasperich',
  'grund',
  'hamm',
  'hollerich',
  'kirchberg',
  'limpertsberg',
  'merl',
  'neudorf',
  'pfaffenthal'
];

// List of valid services
const VALID_SERVICES = [
  'entretien-adoucisseur',
  'entretien-plomberie',
  'entretien-chauffe-eau',
  'entretien-chauffage',
  'entretien-climatisation',
  'entretien-canalisation',
  'entretien-pompe-chaleur',
  'debouchage-wc',
  'debouchage-evier',
  'debouchage-douche',
  'debouchage-baignoire',
  'debouchage-lavabo',
  'debouchage-canalisation',
  'debouchage-urgent',
  'debouchage-toilette',
  'debouchage-egout',
  'debouchage-colonne',
  'debouchage-siphon',
  'fuite-eau',
  'detection-fuite',
  'detection-canalisation',
  'camera-inspection',
  'detection-fuite-eau',
  'detection-fuite-gaz',
  'installation-chauffe-eau',
  'installation-wc',
  'installation-douche',
  'installation-baignoire',
  'installation-lavabo',
  'installation-robinet',
  'installation-evier',
  'installation-lave-vaisselle',
  'installation-lave-linge',
  'installation-cumulus',
  'installation-ballon-eau-chaude',
  'installation-pompe-chaleur',
  'installation-chauffage',
  'installation-climatisation',
  'installation-adoucisseur',
  'installation-compteur-eau',
  'reparation-fuite',
  'reparation-chauffe-eau',
  'reparation-wc',
  'reparation-douche',
  'reparation-robinet',
  'reparation-cumulus',
  'reparation-ballon-eau-chaude',
  'reparation-pompe-chaleur',
  'reparation-chauffage',
  'reparation-climatisation',
  'reparation-urgente'
];

// Service categories
const SERVICE_CATEGORIES = [
  'urgences',
  'installation',
  'reparation',
  'debouchage',
  'detection',
  'entretien'
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://depannage-luxembourg.com';

  // Add static pages
  sitemapEntries.push(
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quartiers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }
  );

  // Add quartier pages
  for (const quartier of VALID_QUARTIERS) {
    sitemapEntries.push({
      url: `${baseUrl}/quartiers/${quartier}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // Add quartier-service combination pages
    for (const service of VALID_SERVICES) {
      sitemapEntries.push({
        url: `${baseUrl}/quartiers/${quartier}/${service}`,
        lastModified: new Date(),
        changeFrequency: service.startsWith('urgence') ? 'daily' : 'weekly',
        priority: service.startsWith('urgence') ? 0.9 : 0.8,
      });
    }
  }

  // Add service category pages
  for (const category of SERVICE_CATEGORIES) {
    sitemapEntries.push({
      url: `${baseUrl}/services/${category}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  return sitemapEntries;
}
