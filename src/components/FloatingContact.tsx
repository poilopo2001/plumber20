'use client';

import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { scale: 0, opacity: 0 },
    open: { scale: 1, opacity: 1 }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 w-full md:w-auto md:bottom-4 md:right-4">
      <div className="flex flex-col items-stretch md:items-end gap-1 p-1 md:p-0">
        {/* Contact Options Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex flex-row md:flex-col gap-1 mb-1"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {/* Phone Button */}
              <motion.a
                href="tel:+352621235261"
                className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg md:rounded-full shadow-lg flex items-center justify-center md:justify-start transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPhone className="text-lg md:mr-2" />
                <span className="ml-2 text-sm md:hidden">Appeler</span>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/352621235261"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg md:rounded-full shadow-lg flex items-center justify-center md:justify-start transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="text-lg md:mr-2" />
                <span className="ml-2 text-sm md:hidden">WhatsApp</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white py-2 px-3 rounded-lg md:rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 w-full md:w-auto`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isOpen ? (
            <div className="flex items-center">
              <FaTimes className="text-lg" />
              <span className="ml-2 text-sm md:hidden">Fermer</span>
            </div>
          ) : (
            <div className="flex items-center">
              <FaPhone className="text-lg md:hidden" />
              <span className="ml-2 md:ml-0 text-sm font-semibold">
                Contacter Nous
              </span>
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingContact;
