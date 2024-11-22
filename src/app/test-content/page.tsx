import { generatePageContent } from '@/lib/pageContent';
import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import MainServiceSection from '@/components/MainServiceSection';
import LocalServiceSection from '@/components/LocalServiceSection';
import QuickFixSection from '@/components/QuickFixSection';
import PageMetadata, { generateMetadata as getMetadata } from '@/components/PageMetadata';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  try {
    const content = await generatePageContent('bonnevoie', 'debouchage-canalisation');
    return getMetadata({ metadata: content.metadata });
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'PlombierPro - Service de Plomberie',
      description: 'Service de plomberie professionnel au Luxembourg',
    };
  }
}

export default async function TestContentPage() {
  try {
    const content = await generatePageContent('bonnevoie', 'debouchage-canalisation');

    return (
      <>
        <PageMetadata metadata={content.metadata} />
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <HeroSection hero={content.sections.hero} />

          {/* Main Service Section */}
          <MainServiceSection mainService={content.sections.mainService} />

          {/* Local Service Section */}
          <LocalServiceSection localService={content.sections.localService} />

          {/* QuickFix Section */}
          <QuickFixSection quickFix={content.sections.quickFix} />
        </div>
      </>
    );
  } catch (error) {
    console.error('Error in test page:', error);
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error Generating Content</h1>
        <pre className="bg-red-50 p-4 rounded">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  }
}
