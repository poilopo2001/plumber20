import { Metadata } from 'next';
import Link from 'next/link';
import { FaWrench, FaShower, FaTools, FaSearch, FaBroom } from 'react-icons/fa';
import { GiWaterDrop, GiHeatHaze } from 'react-icons/gi';
import connectDB from '@/lib/mongodb';
import { Content } from '@/models/Content';
import HeroSection from '@/components/HeroSection';
import ServiceHighlights from '@/components/ServiceHighlights';

interface PageProps {
  params: {
    quartier: string;
  };
}

interface ServiceMetadata {
  description: string;
  category: string;
}

interface Service {
  slug: string;
  title: string;
  metadata: ServiceMetadata;
}

interface ServicesByCategory {
  [key: string]: Service[];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { quartier } = params;
  
  return {
    title: `Services de Plomberie à ${quartier} | Plombier Pro Luxembourg`,
    description: `Découvrez nos services de plomberie professionnels à ${quartier}, Luxembourg. Intervention rapide 24/7, devis gratuit.`,
    keywords: ['plombier', quartier, 'Luxembourg', 'services plomberie'],
    openGraph: {
      title: `Services de Plomberie à ${quartier}`,
      description: `Services de plomberie professionnels à ${quartier}, Luxembourg`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${quartier}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      locale: 'fr_LU',
      type: 'website',
    },
  };
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Urgences':
      return <GiWaterDrop className="w-6 h-6 text-red-500" />;
    case 'Installation':
      return <FaWrench className="w-6 h-6 text-blue-500" />;
    case 'Réparation':
      return <FaTools className="w-6 h-6 text-green-500" />;
    case 'Débouchage':
      return <FaShower className="w-6 h-6 text-purple-500" />;
    case 'Détection':
      return <FaSearch className="w-6 h-6 text-yellow-500" />;
    case 'Entretien':
      return <FaBroom className="w-6 h-6 text-orange-500" />;
    default:
      return <GiHeatHaze className="w-6 h-6 text-gray-500" />;
  }
};

async function getQuartierServices(quartier: string): Promise<Service[]> {
  try {
    await connectDB();
    
    const services = await Content.find({
      slug: { $regex: new RegExp(`^${quartier}-`) },
      type: 'service'
    }).sort({ title: 1 });

    if (!services || services.length === 0) {
      // Return default services if none found in DB
      const defaultServices: Service[] = [
        // Urgences
        { 
          slug: `${quartier}-fuite-eau`,
          title: "Fuite d&apos;eau",
          metadata: { 
            description: "Service d&apos;urgence pour fuite d&apos;eau disponible 24/7",
            category: 'Urgences'
          }
        },
        // ... (rest of the default services would go here)
      ];

      return defaultServices;
    }

    return services as Service[];
  } catch (error) {
    console.error('Error fetching quartier services:', error);
    throw error;
  }
}

export default async function QuartierPage({ params }: { params: { quartier: string } }) {
  // Redirect old quartier URLs to the new format
  return {
    redirect: {
      destination: `/quartiers/${params.quartier}`,
      permanent: true,
    },
  };
}
