'use client';

import React from 'react';
import { FaTools, FaExclamationTriangle, FaClock, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface QuickFixProps {
  quickFix: {
    title: string;
    safetyWarning: string;
    temporarySolutions: {
      title: string;
      steps: string[];
      materials: string[];
      difficulty: 'Facile' | 'Moyen' | 'Difficile';
      timeEstimate: string;
      cautionNotes: string[];
    }[];
    whenToCallPro: string[];
    preventionTips: string[];
  };
}

const difficultyColors = {
  Facile: 'bg-green-100 text-green-800',
  Moyen: 'bg-yellow-100 text-yellow-800',
  Difficile: 'bg-red-100 text-red-800',
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function QuickFixSection({ quickFix }: QuickFixProps) {
  if (!quickFix) {
    return null;
  }

  return (
    <motion.div
      className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {quickFix.title}
        </h2>
      </div>

      {/* Safety Warning */}
      <div className="mb-12 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg shadow-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <FaExclamationTriangle className="h-5 w-5 text-red-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{quickFix.safetyWarning}</p>
          </div>
        </div>
      </div>

      {/* Temporary Solutions */}
      <div className="space-y-12">
        {quickFix.temporarySolutions.map((solution, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100"
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[solution.difficulty]}`}>
                  {solution.difficulty}
                </span>
              </div>

              {/* Time Estimate */}
              <div className="flex items-center text-gray-600 mb-4 bg-gray-50 p-2 rounded-lg">
                <FaClock className="h-5 w-5 mr-2 text-blue-500" />
                <span>{solution.timeEstimate}</span>
              </div>

              {/* Materials Needed */}
              <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                  <FaTools className="h-5 w-5 mr-2 text-gray-600" />
                  Matériel nécessaire
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {solution.materials.map((material, idx) => (
                    <div key={idx} className="flex items-center bg-white p-2 rounded-md shadow-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">{material}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Étapes à suivre :</h4>
                <ol className="space-y-4">
                  {solution.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start bg-gray-50 p-3 rounded-lg">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Caution Notes */}
              {solution.cautionNotes.length > 0 && (
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-yellow-800 mb-3 flex items-center">
                    <FaExclamationTriangle className="h-5 w-5 mr-2" />
                    Points de vigilance
                  </h4>
                  <ul className="space-y-2">
                    {solution.cautionNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2"></span>
                        <span className="text-yellow-700">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* When to Call a Pro */}
      <motion.div 
        className="mt-12 bg-blue-50 rounded-lg p-6 shadow-sm" 
        variants={itemVariants}
      >
        <div className="flex items-center mb-4">
          <FaPhoneAlt className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-xl font-semibold text-blue-900">Quand appeler un professionnel ?</h3>
        </div>
        <ul className="space-y-3">
          {quickFix.whenToCallPro.map((reason, index) => (
            <li key={index} className="flex items-start bg-white p-3 rounded-md shadow-sm">
              <FaExclamationTriangle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Prevention Tips */}
      <motion.div 
        className="mt-12 bg-green-50 rounded-lg p-6 shadow-sm" 
        variants={itemVariants}
      >
        <div className="flex items-center mb-4">
          <FaCheckCircle className="h-6 w-6 text-green-600 mr-3" />
          <h3 className="text-xl font-semibold text-green-900">Conseils de prévention</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickFix.preventionTips.map((tip, index) => (
            <div key={index} className="flex items-start bg-white p-3 rounded-md shadow-sm">
              <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
