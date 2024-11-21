import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function checkDatabase() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // List all databases
    const databases = await client.db().admin().listDatabases();
    console.log("\nAvailable databases:");
    databases.databases.forEach(db => {
      console.log(`- ${db.name}`);
    });

    // Check specific collections in our database
    const db = client.db("plumber20");
    const collections = await db.listCollections().toArray();
    
    console.log("\nCollections in plumber20 database:");
    for (const collection of collections) {
      console.log(`\nCollection: ${collection.name}`);
      const count = await db.collection(collection.name).countDocuments();
      console.log(`Documents count: ${count}`);
      
      // Show sample documents
      if (count > 0) {
        const samples = await db.collection(collection.name).find().limit(2).toArray();
        console.log('Sample documents:');
        console.log(JSON.stringify(samples, null, 2));
      }
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

checkDatabase().catch(console.error);
