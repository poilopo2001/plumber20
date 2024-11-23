'use client';

import React from 'react';
import { SkeletonLoader } from '@/components/SkeletonLoader';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <SkeletonLoader type="title" />
          <div className="mt-6">
            <SkeletonLoader type="text" count={2} />
          </div>
          <div className="mt-8">
            <div className="h-12 w-40 bg-gray-200 rounded-md animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        {/* Services Grid */}
        <div className="mb-16">
          <SkeletonLoader type="title" />
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <SkeletonLoader type="card" count={6} />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <SkeletonLoader type="title" />
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkeletonLoader type="service" count={4} />
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <SkeletonLoader type="title" />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <SkeletonLoader type="card" count={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
