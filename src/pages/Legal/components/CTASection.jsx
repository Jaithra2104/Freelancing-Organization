import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <motion.div 
      className="legal-cta"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      <h2>Ready to Build Your Business Online?</h2>
      <p>Let's create a modern website that helps your business grow while keeping your information secure and your experience transparent.</p>
      <div className="legal-contact-actions">
        <Link to="/contact" className="btn-legal-primary">
          Start Your Project
        </Link>
        <Link to="/contact" className="btn-legal-secondary">
          Book Free Consultation
        </Link>
      </div>
    </motion.div>
  );
}
