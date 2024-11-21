import { MetadataRoute } from 'next';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB();

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://plombierpro.lu';

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
    }
  );

  try {
    // Get all villes/quartiers
    const villesCollection = mongoose.connection.db.collection('villes');
    const villes = await villesCollection.find({}).toArray();

    // Get all services
    const servicesCollection = mongoose.connection.db.collection('services');
    const services = await servicesCollection.find({}).toArray();

    // Get existing pages to check their last modification date
    const pagesCollection = mongoose.connection.db.collection('pages');
    const existingPages = await pagesCollection.find({}).toArray();
    const pageLastMods = new Map(existingPages.map(page => [
      `${page.ville}-${page.service}`,
      new Date(page.updatedAt || page.lastGenerated)
    ]));

    // Generate URLs for each ville and service combination
    for (const ville of villes) {
      // Add ville/quartier page
      sitemapEntries.push({
        url: `${baseUrl}/${ville.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: ville.priority === 'high' ? 0.9 : 0.8,
      });

      // Add ville-service combination pages
      for (const service of services) {
        const pageKey = `${ville.id}-${service.id}`;
        const lastMod = pageLastMods.get(pageKey) || new Date();
        
        sitemapEntries.push({
          url: `${baseUrl}/${ville.id}/${service.id}`,
          lastModified: lastMod,
          changeFrequency: service.emergency ? 'daily' : 'weekly',
          priority: service.priority === 'high' ? 0.9 : 0.8,
        });
      }
    }

    // Add service category pages
    const categories = [...new Set(services.map(service => service.category))];
    for (const category of categories) {
      sitemapEntries.push({
        url: `${baseUrl}/services/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }

  } catch (error) {
    console.error('Error generating sitemap:', error);
  }

  return sitemapEntries;
}
