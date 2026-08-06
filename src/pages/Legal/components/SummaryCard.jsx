import { motion } from 'motion/react';
import { FiCheckCircle } from 'react-icons/fi';

export default function SummaryCard({ title, icon, index }) {
  return (
    <motion.div 
      className="legal-summary-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="legal-summary-icon">
        {icon || <FiCheckCircle />}
      </div>
      <div className="legal-summary-text">
        {title}
      </div>
    </motion.div>
  );
}
