'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaArrowRight, FaTools } from 'react-icons/fa';
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

const pulseVariants = {
  initial: { scale: 1, opacity: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function HeroSection({ hero }: HeroProps) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  if (!hero) return null;

  // Parse CTAs to separate text and link
  const [primaryText, primaryLink] = hero.primaryCTA.split('|');
  const [secondaryText, secondaryLink] = hero.secondaryCTA.split('|');

  const handleQuickFixClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // First attempt to find the section
    const tryScroll = () => {
      const quickFixSection = document.getElementById('quick-fix');
      if (quickFixSection) {
        const yOffset = -80; // Adjusted offset
        const y = quickFixSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        return true;
      }
      return false;
    };

    // Try immediately
    if (!tryScroll()) {
      // If not found, try again after a short delay to allow lazy loading
      setTimeout(() => {
        if (!tryScroll()) {
          // If still not found, try one last time with a longer delay
          setTimeout(tryScroll, 500);
        }
      }, 100);
    }
  };

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

          {/* Quick Fix Guide Link */}
          <motion.div
            className="mt-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
          >
            <motion.div
              initial="initial"
              animate="pulse"
              variants={pulseVariants}
            >
              <button 
                onClick={handleQuickFixClick}
                className="inline-flex items-center px-6 py-3 bg-yellow-400 bg-opacity-20 rounded-full text-yellow-300 hover:text-yellow-400 hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
              >
                <FaTools className="mr-2 text-xl" />
                <span className="text-lg font-medium">Guide de réparation rapide</span>
              </button>
            </motion.div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isTooltipVisible ? 1 : 0, y: isTooltipVisible ? 0 : 10 }}
              className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap"
            >
              Cliquez ici pour voir les solutions rapides 👇
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-800/50 to-transparent pointer-events-none" />
    </motion.div>
  );
}
