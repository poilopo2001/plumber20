import connectDB from '@/lib/mongodb';
import Link from 'next/link';

interface Quartier {
  id: string;
  name: string;
}

async function getQuartiers(): Promise<Quartier[]> {
  try {
    await connectDB();
    const db = (await import('mongoose')).connection.db;
    
    // Add debug logs
    console.log('Fetching quartiers from MongoDB...');
    const quartiers = await db.collection('quartiers').find({}).toArray();
    console.log('Quartiers found:', quartiers);
    
    if (!quartiers || quartiers.length === 0) {
      // If no quartiers found, return a default list
      return [
        { id: 'beggen', name: 'Beggen' },
        { id: 'belair', name: 'Belair' },
        { id: 'bonnevoie-nord', name: 'Bonnevoie Nord' },
        { id: 'bonnevoie-sud', name: 'Bonnevoie Sud' },
        { id: 'cents', name: 'Cents' },
        { id: 'cessange', name: 'Cessange' },
        { id: 'clausen', name: 'Clausen' },
        { id: 'dommeldange', name: 'Dommeldange' },
        { id: 'eich', name: 'Eich' },
        { id: 'gare', name: 'Gare' },
        { id: 'gasperich', name: 'Gasperich' },
        { id: 'grund', name: 'Grund' },
        { id: 'hamm', name: 'Hamm' },
        { id: 'hollerich', name: 'Hollerich' },
        { id: 'kirchberg', name: 'Kirchberg' },
        { id: 'limpertsberg', name: 'Limpertsberg' },
        { id: 'merl', name: 'Merl' },
        { id: 'muhlenbach', name: 'Muhlenbach' },
        { id: 'neudorf', name: 'Neudorf' },
        { id: 'pfaffenthal', name: 'Pfaffenthal' },
        { id: 'pulvermuhl', name: 'Pulvermuhl' },
        { id: 'rollingergrund', name: 'Rollingergrund' },
        { id: 'ville-haute', name: 'Ville Haute' },
        { id: 'weimerskirch', name: 'Weimerskirch' }
      ];
    }

    return quartiers as Quartier[];
  } catch (error) {
    console.error('Error fetching quartiers:', error);
    return [];
  }
}

export default async function QuartiersPage() {
  const quartiers = await getQuartiers();
  
  // Add debug log
  console.log('Rendering quartiers:', quartiers);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Quartiers de Luxembourg</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {quartiers && quartiers.map((quartier) => (
          <Link 
            key={quartier.id}
            href={`/quartiers/${quartier.id}`}
            className="p-4 border rounded hover:bg-gray-50"
          >
            {quartier.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
