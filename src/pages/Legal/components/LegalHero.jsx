import { motion } from 'motion/react';

export default function LegalHero({ title, description, effectiveDate }) {
  return (
    <div className="legal-hero">
      <motion.div 
        className="legal-badge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📄 Legal Information
      </motion.div>
      <motion.h1 
        className="legal-title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className="legal-desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {description}
      </motion.p>
      {effectiveDate && (
        <motion.div 
          className="legal-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span><strong>Effective Date:</strong> {effectiveDate}</span>
          <span><strong>Last Updated:</strong> {effectiveDate}</span>
        </motion.div>
      )}
    </div>
  );
}
