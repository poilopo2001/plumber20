'use client';

// This file is now obsolete since we've moved to /quartiers/[quartierId]/[service]
// The loading UI has been moved to /src/app/quartiers/[quartierId]/[service]/loading.tsx

import React from 'react';
import { SkeletonLoader } from '@/components/SkeletonLoader';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <SkeletonLoader type="title" />
          <div className="mt-4">
            <SkeletonLoader type="text" count={3} />
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="container mx-auto px-4 py-8">
        {/* Service Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <SkeletonLoader type="service" count={4} />
        </div>

        {/* Quick Fix Section */}
        <div className="mb-12">
          <SkeletonLoader type="title" />
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <SkeletonLoader type="card" count={2} />
          </div>
        </div>

        {/* Local Service Section */}
        <div>
          <SkeletonLoader type="title" />
          <div className="mt-6">
            <SkeletonLoader type="text" count={4} />
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <SkeletonLoader type="card" count={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
