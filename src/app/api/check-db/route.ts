import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectDB();
    
    // Get all collections in the database
    const collections = await mongoose.connection.db.listCollections().toArray();
    const results: any = {};
    
    // For each collection, get count and sample documents
    for (const collection of collections) {
      const collectionName = collection.name;
      const count = await mongoose.connection.db.collection(collectionName).countDocuments();
      const samples = await mongoose.connection.db.collection(collectionName).find().limit(2).toArray();
      
      results[collectionName] = {
        count,
        samples
      };
    }
    
    return NextResponse.json({
      status: 'connected',
      collections: results
    });
    
  } catch (error) {
    console.error('Database check error:', error);
    return NextResponse.json({ 
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
