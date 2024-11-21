import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { generateContent } from '@/lib/openrouter';
import { Content } from '@/models/Content';

async function cleanupOldTestDocuments() {
  try {
    // Delete test documents older than 1 hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    await Content.deleteMany({
      slug: { $regex: /^test-page-/ },
      lastGenerated: { $lt: oneHourAgo }
    });
    console.log('Cleaned up old test documents');
  } catch (error) {
    console.error('Error cleaning up old test documents:', error);
  }
}

export async function GET() {
  try {
    // Test MongoDB Connection
    console.log('Attempting MongoDB connection...');
    await connectDB();
    console.log('MongoDB Connected Successfully');

    // Test OpenRouter API
    console.log('Testing OpenRouter API...');
    const testPrompt = 'Générer un court paragraphe sur les services de plomberie à Luxembourg.';
    const content = await generateContent(testPrompt);
    
    if (!content) {
      throw new Error('No content generated from OpenRouter');
    }
    console.log('OpenRouter Content Generated:', content);

    // Test MongoDB Model
    console.log('Testing MongoDB Model...');
    const timestamp = Date.now();
    const testContent = new Content({
      slug: `test-page-${timestamp}`,
      type: 'service',
      title: `Test Page ${timestamp}`,
      content: content,
      metadata: {
        description: 'Page de test pour les services de plomberie',
        keywords: ['plombier', 'Luxembourg', 'test'],
      },
    });

    // Save to database
    console.log('Attempting to save to MongoDB...');
    await testContent.save();
    console.log('Content saved to MongoDB');

    // Clean up old test documents
    await cleanupOldTestDocuments();

    return NextResponse.json({
      success: true,
      message: 'All systems operational',
      generatedContent: content,
      savedDocument: testContent,
    });
  } catch (error) {
    console.error('Test failed with error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        errorDetails: error instanceof Error ? {
          name: error.name,
          message: error.message,
          stack: error.stack
        } : 'No error details available'
      },
      { status: 500 }
    );
  }
}
