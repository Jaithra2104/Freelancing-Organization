import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronDown } from 'react-icons/fi';

export default function PolicyAccordion({ title, children, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="legal-accordion"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button 
        className="legal-accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <FiChevronDown className={`legal-accordion-icon ${isOpen ? 'open' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="legal-accordion-content">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
