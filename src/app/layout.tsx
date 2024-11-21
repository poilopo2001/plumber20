import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'PlombierPro Luxembourg | Service de Plomberie 24/7',
    template: '%s | PlombierPro Luxembourg'
  },
  description: 'Service de plomberie professionnel à Luxembourg. Intervention d\'urgence 24/7, débouchage, détection de fuite, installation et réparation. Devis gratuit.',
  keywords: ['plombier luxembourg', 'plomberie urgence', 'débouchage canalisation', 'dépannage plomberie', 'détection fuite', 'installation sanitaire'],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://plombierpro.lu'
  },
  openGraph: {
    title: 'PlombierPro Luxembourg | Service de Plomberie 24/7',
    description: 'Service de plomberie professionnel à Luxembourg. Intervention d\'urgence 24/7, débouchage, détection de fuite, installation et réparation.',
    url: 'https://plombierpro.lu',
    siteName: 'PlombierPro Luxembourg',
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
