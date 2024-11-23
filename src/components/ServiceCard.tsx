'use client';

import React, { useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <div 
      onClick={handleClick}
      className={`
        relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all 
        cursor-pointer border border-gray-100
        ${isPending ? 'opacity-70 pointer-events-none' : ''}
      `}
    >
      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-lg">
          <div className="w-6 h-6 border-2 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
        </div>
      )}
      <div className="flex items-start space-x-4">
        {icon && <div className="text-blue-600 text-2xl">{icon}</div>}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
