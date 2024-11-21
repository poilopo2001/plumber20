import connectDB from '@/lib/mongodb';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Quartier {
  id: string;
  name: string;
}

interface Service {
  id: string;
  name: string;
  category: string;
}

async function getQuartier(quartierId: string): Promise<Quartier | null> {
  try {
    await connectDB();
    const db = (await import('mongoose')).connection.db;
    const quartier = await db.collection('quartiers').findOne({ id: quartierId });
    
    if (!quartier) {
      // Return default quartier if not found in DB
      const defaultQuartiers = {
        'beggen': 'Beggen',
        'belair': 'Belair',
        'bonnevoie-nord': 'Bonnevoie Nord',
        'bonnevoie-sud': 'Bonnevoie Sud',
        'cents': 'Cents',
        'cessange': 'Cessange',
        'clausen': 'Clausen',
        'dommeldange': 'Dommeldange',
        'eich': 'Eich',
        'gare': 'Gare',
        'gasperich': 'Gasperich',
        'grund': 'Grund',
        'hamm': 'Hamm',
        'hollerich': 'Hollerich',
        'kirchberg': 'Kirchberg',
        'limpertsberg': 'Limpertsberg',
        'merl': 'Merl',
        'muhlenbach': 'Muhlenbach',
        'neudorf': 'Neudorf',
        'pfaffenthal': 'Pfaffenthal',
        'pulvermuhl': 'Pulvermuhl',
        'rollingergrund': 'Rollingergrund',
        'ville-haute': 'Ville Haute',
        'weimerskirch': 'Weimerskirch'
      };

      const name = defaultQuartiers[quartierId];
      if (name) {
        return { id: quartierId, name };
      }
    }

    return quartier as Quartier;
  } catch (error) {
    console.error('Error fetching quartier:', error);
    return null;
  }
}

async function getAllServices(): Promise<Service[]> {
  try {
    await connectDB();
    const db = (await import('mongoose')).connection.db;
    const services = await db.collection('services').find({}).toArray();

    if (!services || services.length === 0) {
      // Return default services if none found in DB
      return [
        // Urgences
        { id: 'fuite-eau', name: 'Fuite d\'eau', category: 'Urgences' },
        { id: 'debouchage-urgent', name: 'Débouchage urgent', category: 'Urgences' },
        { id: 'reparation-urgente', name: 'Réparation urgente', category: 'Urgences' },
        
        // Installation
        { id: 'installation-chauffe-eau', name: 'Installation chauffe-eau', category: 'Installation' },
        { id: 'installation-wc', name: 'Installation WC', category: 'Installation' },
        { id: 'installation-douche', name: 'Installation douche', category: 'Installation' },
        { id: 'installation-baignoire', name: 'Installation baignoire', category: 'Installation' },
        { id: 'installation-lavabo', name: 'Installation lavabo', category: 'Installation' },
        { id: 'installation-robinet', name: 'Installation robinet', category: 'Installation' },
        { id: 'installation-evier', name: 'Installation évier', category: 'Installation' },
        { id: 'installation-lave-vaisselle', name: 'Installation lave-vaisselle', category: 'Installation' },
        { id: 'installation-lave-linge', name: 'Installation lave-linge', category: 'Installation' },
        { id: 'installation-cumulus', name: 'Installation cumulus', category: 'Installation' },
        
        // Réparation
        { id: 'reparation-fuite', name: 'Réparation fuite', category: 'Réparation' },
        { id: 'reparation-chauffe-eau', name: 'Réparation chauffe-eau', category: 'Réparation' },
        { id: 'reparation-wc', name: 'Réparation WC', category: 'Réparation' },
        { id: 'reparation-douche', name: 'Réparation douche', category: 'Réparation' },
        { id: 'reparation-robinet', name: 'Réparation robinet', category: 'Réparation' },
        { id: 'reparation-cumulus', name: 'Réparation cumulus', category: 'Réparation' },
        
        // Débouchage
        { id: 'debouchage-wc', name: 'Débouchage WC', category: 'Débouchage' },
        { id: 'debouchage-evier', name: 'Débouchage évier', category: 'Débouchage' },
        { id: 'debouchage-douche', name: 'Débouchage douche', category: 'Débouchage' },
        { id: 'debouchage-baignoire', name: 'Débouchage baignoire', category: 'Débouchage' },
        { id: 'debouchage-lavabo', name: 'Débouchage lavabo', category: 'Débouchage' },
        { id: 'debouchage-canalisation', name: 'Débouchage canalisation', category: 'Débouchage' },
        
        // Détection
        { id: 'detection-fuite', name: 'Détection fuite', category: 'Détection' },
        { id: 'detection-canalisation', name: 'Détection canalisation', category: 'Détection' },
        { id: 'camera-inspection', name: 'Caméra inspection', category: 'Détection' },
        
        // Entretien
        { id: 'entretien-plomberie', name: 'Entretien plomberie', category: 'Entretien' },
        { id: 'entretien-chauffe-eau', name: 'Entretien chauffe-eau', category: 'Entretien' },
        { id: 'detartrage', name: 'Détartrage', category: 'Entretien' }
      ];
    }

    return services as Service[];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export default async function QuartierPage({ params }: { params: { quartierId: string } }) {
  const quartier = await getQuartier(params.quartierId);
  const services = await getAllServices();

  if (!quartier) {
    notFound();
  }

  const servicesByCategory = services.reduce((acc, service) => {
    const category = service.category || 'Autres';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Services à {quartier.name}</h1>
      {Object.entries(servicesByCategory).map(([category, services]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={`/${params.quartierId}/${service.id}`}
                className="p-4 border rounded hover:bg-gray-50 transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
