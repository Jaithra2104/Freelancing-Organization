import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FiMail, FiMessageCircle } from 'react-icons/fi';

export default function ContactCard() {
  return (
    <motion.div 
      className="legal-contact-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="legal-contact-card-inner">
        <h3>Have Questions?</h3>
        <p>If you have any questions regarding these policies, our team is happy to help.</p>
        <div className="legal-contact-actions">
          <Link to="/contact" className="btn-legal-primary">
            <FiMessageCircle /> Contact Us
          </Link>
          <a href="mailto:vyuhatech2026@gmail.com" className="btn-legal-secondary">
            <FiMail /> Email Us
          </a>
        </div>
      </div>
    </motion.div>
  );
}
