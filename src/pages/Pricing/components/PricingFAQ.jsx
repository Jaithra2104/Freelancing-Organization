import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function PricingFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="pricing-section faq-section">
      <div className="section-header">
        <h2 className="section-title">Frequently Asked Questions</h2>
      </div>
      
      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`faq-item ${openIndex === idx ? 'open' : ''}`}
            onClick={() => toggleFaq(idx)}
          >
            <div className="faq-question">
              <h4>{faq.q}</h4>
              <span className="faq-icon">{openIndex === idx ? '−' : '+'}</span>
            </div>
            
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-answer-wrapper"
                >
                  <p className="faq-answer">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
