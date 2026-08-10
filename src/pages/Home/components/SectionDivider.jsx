import { motion } from 'motion/react';

export default function SectionDivider() {
  return (
    <div className="premium-divider-container">
      <motion.div 
        className="premium-divider-line"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div 
        className="premium-divider-badge"
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <img src="/logo.jpeg" alt="VYUHA TECH Logo" className="divider-logo" />
        <span className="divider-brand-text">VYUHA <span className="highlight">TECH</span></span>
      </motion.div>
      <motion.div 
        className="premium-divider-line"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
