'use client';

import React, { useTransition, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ServiceLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const LOADING_STEPS = [
  "Analyse de votre demande...",
  "Préparation des solutions...",
  "Finalisation de votre page..."
];

export default function ServiceLink({ href, children, className = '' }: ServiceLinkProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!isPending) {
      setCurrentStep(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((current) => (current + 1) % LOADING_STEPS.length);
    }, 800);

    return () => clearInterval(interval);
  }, [isPending]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <div className="relative">
      {isPending && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10 rounded-xl">
          <div className="flex flex-col items-center space-y-3">
            <div className="h-8 w-8 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
            <span className="text-blue-600 font-medium text-center">
              {LOADING_STEPS[currentStep]}
            </span>
          </div>
        </div>
      )}
      <Link
        href={href}
        onClick={handleClick}
        className={`block ${className} ${
          isPending ? 'opacity-50' : ''
        }`}
      >
        {children}
      </Link>
    </div>
  );
}
