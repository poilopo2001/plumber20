interface LocalMapProps {
  quartier: string;
}

export default function LocalMap({ quartier }: LocalMapProps) {
  // Note: In a production environment, you would want to use a proper map service
  // like Google Maps, Mapbox, or OpenStreetMap with an API key
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100">
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-4">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-gray-600">
            Zone d'intervention: {quartier.charAt(0).toUpperCase() + quartier.slice(1).replace(/-/g, ' ')}
          </p>
        </div>
      </div>
    </div>
  );
}
