import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Dépannage Plombier Luxembourg | Intervention en 30min 24/7',
    template: '%s | Dépannage Plombier Luxembourg'
  },
  description: 'Urgence plomberie Luxembourg - Intervention en 30 minutes, 24h/24 et 7j/7. Débouchage, fuite d\'eau, installation sanitaire. Une équipe de plombiers professionnels à votre service.',
  keywords: ['plombier urgence luxembourg', 'dépannage plomberie 24/7', 'plombier 30 minutes', 'débouchage urgence', 'fuite eau luxembourg', 'plombier rapide', 'intervention plomberie urgente'],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://depannage-luxembourg.com'
  },
  openGraph: {
    title: 'Dépannage Plombier Luxembourg | Intervention en 30min 24/7',
    description: 'Urgence plomberie Luxembourg - Intervention en 30 minutes, 24h/24 et 7j/7. Une équipe de plombiers professionnels à votre service.',
    url: 'https://depannage-luxembourg.com',
    siteName: 'Dépannage Plombier Luxembourg',
    locale: 'fr_LU',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
