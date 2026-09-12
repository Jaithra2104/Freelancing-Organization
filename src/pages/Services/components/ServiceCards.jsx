import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function ServiceCards({ services }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <div className="services-grid-wrapper">
        {services.map((s, i) => (
          <motion.div 
            key={s.title}
            className="premium-service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
            onClick={() => setSelectedService(s)}
          >
            <div className="service-card-top-row">
              <div className="service-icon-wrapper">
                <span className="service-icon-emoji">{s.icon}</span>
              </div>
              <span className="service-card-tag">{s.tag}</span>
            </div>

            <h3 className="service-card-title">{s.title}</h3>
            <p className="service-card-desc">{s.desc}</p>

            {s.highlights && (
              <ul className="service-card-highlights">
                {s.highlights.map((item, idx) => (
                  <li key={idx} className="service-highlight-item">
                    <span className="highlight-bullet">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="service-card-bottom">
              <button 
                type="button" 
                className="service-card-link-btn" 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(s);
                }}
              >
                See How It Helps &rarr;
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client-Friendly Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
            <motion.div 
              className="service-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="service-modal-close" 
                onClick={() => setSelectedService(null)}
                aria-label="Close detail view"
              >
                ✕
              </button>

              <div className="service-modal-header">
                <div className="service-icon-wrapper">
                  <span className="service-icon-emoji">{selectedService.icon}</span>
                </div>
                <div className="service-modal-header-text">
                  <span className="service-card-tag">{selectedService.tag}</span>
                  <h2 className="service-modal-title">{selectedService.title}</h2>
                </div>
              </div>

              <div className="service-modal-body">
                <p className="service-modal-detail-text">
                  {selectedService.detailedText || selectedService.desc}
                </p>

                {selectedService.modalIncludes && (
                  <div className="service-modal-includes-block">
                    <h4 className="service-modal-includes-heading">Everything Included For Your Business:</h4>
                    <div className="service-modal-includes-grid">
                      {selectedService.modalIncludes.map((inc, index) => (
                        <div key={index} className="service-modal-include-item">
                          <span className="include-check">✓</span>
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="service-modal-callout">
                  <div className="callout-text">
                    <strong>Want this for your business?</strong>
                    <span>We set up everything for you with simple step-by-step guidance.</span>
                  </div>
                  <Link 
                    to="/contact" 
                    className="service-modal-cta-btn"
                    onClick={() => setSelectedService(null)}
                  >
                    Get Started &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}


