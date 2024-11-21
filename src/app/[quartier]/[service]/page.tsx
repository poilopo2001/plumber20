import { Metadata } from 'next';
import connectDB from '@/lib/mongodb';
import { generateContent, generateSEOMetadata } from '@/lib/openrouter';
import { Content } from '@/models/Content';

interface PageProps {
  params: {
    quartier: string;
    service: string;
  };
}

// Get metadata for the page
async function getPageMetadata(quartier: string, service: string): Promise<Metadata> {
  try {
    await connectDB();
    const content = await Content.findOne({
      slug: `${quartier}-${service}`,
      type: 'service'
    });

    if (!content) {
      return {
        title: 'Page non trouvée',
        description: 'La page que vous recherchez n\'existe pas.'
      };
    }

    return {
      title: content.metadata.title,
      description: content.metadata.description,
      keywords: content.metadata.keywords,
      openGraph: {
        title: content.metadata.title,
        description: content.metadata.description,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${quartier}/${service}`,
        siteName: process.env.NEXT_PUBLIC_SITE_NAME,
        locale: 'fr_LU',
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Erreur',
      description: 'Une erreur est survenue'
    };
  }
}

// Next.js metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { quartier, service } = params;
  return getPageMetadata(quartier, service);
}

// Generate or retrieve content for the page
async function getOrGenerateContent(quartier: string, service: string) {
  try {
    await connectDB();
    
    // Try to find existing content
    let content = await Content.findOne({
      slug: `${quartier}-${service}`,
      type: 'service'
    });

    // If content doesn't exist or is older than 30 days, generate new content
    if (!content || Date.now() - content.lastGenerated.getTime() > 30 * 24 * 60 * 60 * 1000) {
      const prompt = `Générer un article SEO optimisé en français sur les services de ${service} dans le quartier de ${quartier} à Luxembourg. 
      Inclure des informations sur la disponibilité 24/7, la qualité du service, et les tarifs compétitifs.`;
      
      const generatedContent = await generateContent(prompt);
      const seoMetadata = await generateSEOMetadata(
        `${service} à ${quartier}, Luxembourg`,
        generatedContent
      );

      const metadata = JSON.parse(seoMetadata);
      
      if (!content) {
        // Create new content
        content = new Content({
          slug: `${quartier}-${service}`,
          type: 'service',
          title: metadata.title || `${service} à ${quartier}, Luxembourg`,
          content: generatedContent,
          metadata: {
            title: metadata.title || `${service} à ${quartier}, Luxembourg`,
            description: metadata.description || `Services de ${service} professionnels à ${quartier}, Luxembourg. Intervention rapide et devis gratuit.`,
            keywords: metadata.keywords || [service, quartier, 'Luxembourg', 'plombier', 'urgence']
          }
        });
      } else {
        // Update existing content
        content.content = generatedContent;
        content.metadata = {
          title: metadata.title || content.metadata.title,
          description: metadata.description || content.metadata.description,
          keywords: metadata.keywords || content.metadata.keywords
        };
        content.lastGenerated = new Date();
      }
      
      await content.save();
    }

    return content;
  } catch (error) {
    console.error('Error getting/generating content:', error);
    throw error;
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { quartier, service } = params;
  
  try {
    const content = await getOrGenerateContent(quartier, service);

    if (!content) {
      return (
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Page non trouvée</h1>
            <p>La page que vous recherchez n'existe pas.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
          <div className="prose prose-lg max-w-none"
               dangerouslySetInnerHTML={{ __html: content.content }} />
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Erreur</h1>
          <p>Une erreur est survenue lors du chargement de la page.</p>
        </div>
      </div>
    );
  }
}
