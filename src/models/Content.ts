import mongoose from 'mongoose';

export interface IContent {
  slug: string;
  type: 'quartier' | 'service';
  title: string;
  content: string;
  metadata: {
    description: string;
    keywords: string[];
  };
  lastGenerated: Date;
}

const contentSchema = new mongoose.Schema<IContent>({
  slug: { type: String, required: true, unique: true },
  type: { type: String, required: true, enum: ['quartier', 'service'] },
  title: { type: String, required: true },
  content: { type: String, required: true },
  metadata: {
    description: { type: String, required: true },
    keywords: [{ type: String }],
  },
  lastGenerated: { type: Date, default: Date.now },
});

// Add indexes for better query performance
contentSchema.index({ slug: 1, type: 1 });
contentSchema.index({ type: 1 });

export const Content = mongoose.models.Content || mongoose.model<IContent>('Content', contentSchema);
