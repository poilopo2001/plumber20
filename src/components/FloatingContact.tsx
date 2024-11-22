'use client';

import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const buttonVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 }
  };

  const menuVariants = {
    closed: { scale: 0, opacity: 0 },
    open: { scale: 1, opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={buttonVariants}
        >
          {/* Contact Options Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col gap-2 mb-2"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                {/* Phone Call Button */}
                <a
                  href="tel:+352661297770"
                  className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <FaPhone className="h-5 w-5" />
                  <span className="text-sm font-medium">+352 661 297 770</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/352661297770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-4 rounded-full shadow-lg transition-colors flex items-center gap-2 ${
              isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-white" />
            ) : (
              <>
                <FaPhone className="h-6 w-6 text-white" />
                <span className="text-white font-medium">Contactez-nous</span>
              </>
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;
