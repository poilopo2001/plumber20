'use client';

import React from 'react';

interface SkeletonLoaderProps {
  type?: 'text' | 'title' | 'image' | 'card' | 'service';
  count?: number;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type = 'text',
  count = 1 
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'title':
        return (
          <div className="animate-pulse h-8 bg-gray-200 rounded-md w-3/4 mb-4" />
        );
      case 'text':
        return (
          <div className="animate-pulse h-4 bg-gray-200 rounded-md w-full mb-2" />
        );
      case 'image':
        return (
          <div className="animate-pulse bg-gray-200 rounded-lg w-full aspect-video" />
        );
      case 'card':
        return (
          <div className="animate-pulse bg-white rounded-lg shadow-sm p-4">
            <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-4" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded-md w-full" />
              <div className="h-4 bg-gray-200 rounded-md w-5/6" />
              <div className="h-4 bg-gray-200 rounded-md w-4/6" />
            </div>
          </div>
        );
      case 'service':
        return (
          <div className="animate-pulse bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-200 rounded-lg" />
              </div>
              <div className="flex-1">
                <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-3" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded-md w-full" />
                  <div className="h-4 bg-gray-200 rounded-md w-5/6" />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="mb-4">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};
