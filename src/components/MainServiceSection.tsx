'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaAward, FaCertificate, FaTools } from 'react-icons/fa';

interface MainServiceProps {
  mainService: {
    description: string;
    benefits: string[];
    guarantees: string[];
    expertise: {
      years: number;
      certifications: string[];
      specializations: string[];
    };
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function MainServiceSection({ mainService }: MainServiceProps) {
  if (!mainService) return null;

  return (
    <motion.div
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Description */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {mainService.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Benefits and Guarantees */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCheck className="h-6 w-6 text-green-500 mr-3" />
                Avantages
              </h3>
              <ul className="space-y-4">
                {mainService.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <FaCheck className="h-3 w-3 text-green-600" />
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-blue-50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaAward className="h-6 w-6 text-blue-500 mr-3" />
                Garanties
              </h3>
              <ul className="space-y-4">
                {mainService.guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <FaAward className="h-3 w-3 text-blue-600" />
                    </span>
                    <span className="text-gray-700">{guarantee}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Years of Experience */}
            <div className="text-center">
              <div className="inline-block bg-white rounded-full p-6 shadow-lg mb-4">
                <span className="text-4xl font-bold text-blue-600">{mainService.expertise.years}</span>
                <span className="block text-sm text-gray-600 mt-1">années d'expérience</span>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
                <FaCertificate className="h-5 w-5 text-yellow-500 mr-2" />
                Certifications
              </h4>
              <ul className="space-y-2">
                {mainService.expertise.certifications.map((cert, index) => (
                  <li key={index} className="bg-white rounded-lg p-3 shadow-sm flex items-center">
                    <FaCertificate className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
                <FaTools className="h-5 w-5 text-gray-600 mr-2" />
                Spécialisations
              </h4>
              <ul className="space-y-2">
                {mainService.expertise.specializations.map((spec, index) => (
                  <li key={index} className="bg-white rounded-lg p-3 shadow-sm flex items-center">
                    <FaTools className="h-4 w-4 text-gray-600 mr-2" />
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
