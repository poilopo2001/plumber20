import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only import valid quartiers as that's what we need to validate
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

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const path = url.pathname;

  // Function to check if a string contains URL-encoded characters
  const hasUrlEncodedChars = (str: string) => {
    return /%[0-9A-Fa-f]{2}/.test(str);
  };

  // Function to check if a string contains invalid patterns
  const hasInvalidPatterns = (str: string) => {
    const invalidPatterns = [
      'environs',
      'ville',
      'centre',
      'luxembourg',
      'et',
      'est',
      'ouest',
      ','
    ];
    return invalidPatterns.some(pattern => str.toLowerCase().includes(pattern));
  };

  // Handle quartier routes
  if (path.startsWith('/quartiers/')) {
    const segments = path.split('/').filter(Boolean);
    
    // Handle /quartiers/$
    if (segments.length === 1) {
      return NextResponse.redirect(new URL('/quartiers', request.url));
    }

    // Handle invalid quartier URLs
    if (segments.length >= 2) {
      const quartier = segments[1];
      
      if (
        hasUrlEncodedChars(quartier) ||
        hasInvalidPatterns(quartier) ||
        !VALID_QUARTIERS.includes(quartier)
      ) {
        return new NextResponse('Not Found', {
          status: 404,
          headers: {
            'X-Robots-Tag': 'noindex, nofollow',
            'Content-Type': 'text/html'
          }
        });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/quartiers/:path*']
};
