'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaBolt, FaCompass, FaLightbulb, FaMapMarked } from 'react-icons/fa';

interface LocalServiceProps {
  localService: {
    areaDescription: string;
    availableTimes: string;
    responseTime: string;
    coverage: string[];
    localKnowledge: string;
    nearbyAreas: string[];
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function LocalServiceSection({ localService }: LocalServiceProps) {
  if (!localService) return null;

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Area Description */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <FaMapMarkerAlt className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {localService.areaDescription}
          </p>
        </motion.div>

        {/* Service Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Available Times */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaClock className="h-6 w-6 text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Horaires</h3>
            </div>
            <p className="text-gray-600">{localService.availableTimes}</p>
          </motion.div>

          {/* Response Time */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaBolt className="h-6 w-6 text-yellow-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Temps de réponse</h3>
            </div>
            <p className="text-gray-600">{localService.responseTime}</p>
          </motion.div>

          {/* Local Knowledge */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaLightbulb className="h-6 w-6 text-green-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Expertise locale</h3>
            </div>
            <p className="text-gray-600">{localService.localKnowledge}</p>
          </motion.div>
        </div>

        {/* Coverage Areas */}
        <motion.div 
          className="bg-blue-50 rounded-xl p-8 mb-12"
          variants={itemVariants}
        >
          <div className="flex items-center mb-6">
            <FaCompass className="h-7 w-7 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Zones couvertes</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {localService.coverage.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-3 shadow-sm flex items-center"
              >
                <FaMapMarkerAlt className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nearby Areas */}
        <motion.div 
          className="bg-gray-50 rounded-xl p-8"
          variants={itemVariants}
        >
          <div className="flex items-center mb-6">
            <FaMapMarked className="h-7 w-7 text-gray-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Zones à proximité</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {localService.nearbyAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-3 shadow-sm flex items-center"
              >
                <FaMapMarkerAlt className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
