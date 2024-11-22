'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

interface HeroProps {
  hero: {
    headline: string;
    subheadline: string;
    urgencyMessage: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function HeroSection({ hero }: HeroProps) {
  if (!hero) return null;

  // Parse CTAs to separate text and link
  const [primaryText, primaryLink] = hero.primaryCTA.split('|');
  const [secondaryText, secondaryLink] = hero.secondaryCTA.split('|');

  return (
    <motion.div
      className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ userSelect: 'text' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center">
          {/* Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ userSelect: 'text' }}
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ userSelect: 'text' }}
          >
            {hero.subheadline}
          </motion.p>

          {/* Urgency Message */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            style={{ userSelect: 'text' }}
          >
            <p className="text-lg text-white font-medium">
              {hero.urgencyMessage}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Primary CTA */}
            <Link 
              href={primaryLink}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              <FaPhoneAlt className="h-5 w-5" />
              {primaryText}
            </Link>

            {/* Secondary CTA */}
            <Link 
              href={secondaryLink}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              {secondaryText}
              <FaArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-800/50 to-transparent pointer-events-none" />
    </motion.div>
  );
}
