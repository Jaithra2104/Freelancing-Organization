import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  FiGlobe, 
  FiShoppingCart, 
  FiSliders, 
  FiCpu, 
  FiMapPin, 
  FiCheck, 
  FiX, 
  FiArrowRight 
} from 'react-icons/fi';

const iconMap = {
  globe: <FiGlobe />,
  cart: <FiShoppingCart />,
  dashboard: <FiSliders />,
  bot: <FiCpu />,
  mappin: <FiMapPin />
};

export default function ServiceCards({ services }) {
  const [selectedService, setSelectedService] = useState(null);

  // Lock body scroll when modal is open & add Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  return (
    <>
      <div className="services-grid-wrapper">
        {services.map((s, i) => {
          const vectorIcon = iconMap[s.iconType] || <FiGlobe />;

          return (
            <motion.div 
              key={s.title}
              className="premium-service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
              onClick={() => setSelectedService(s)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedService(s);
                }
              }}
            >
              <div className="service-card-top-row">
                <div className="service-icon-wrapper">
                  <span className="service-icon-vector">{vectorIcon}</span>
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
                  aria-label={`See how ${s.title} helps your business`}
                >
                  <span>See How It Helps</span>
                  <FiArrowRight className="link-btn-arrow" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Client-Friendly Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div 
            className="service-modal-overlay" 
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-service-title"
          >
            <motion.div 
              className="service-modal-card"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="service-modal-close" 
                onClick={() => setSelectedService(null)}
                aria-label="Close detail view"
              >
                <FiX />
              </button>

              {/* Modal Header */}
              <div className="service-modal-header">
                <div className="service-icon-wrapper modal-icon-wrapper">
                  <span className="service-icon-vector">{iconMap[selectedService.iconType] || <FiGlobe />}</span>
                </div>
                <div className="service-modal-header-text">
                  <span className="service-card-tag">{selectedService.tag}</span>
                  <h2 id="modal-service-title" className="service-modal-title">{selectedService.title}</h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="service-modal-body">
                <p className="service-modal-intro-text">
                  "{selectedService.modalIntro || selectedService.desc}"
                </p>

                {/* Section 1: How This Helps */}
                {selectedService.modalHelps && (
                  <div className="service-modal-section">
                    <h4 className="service-modal-section-heading">HOW THIS HELPS YOUR BUSINESS</h4>
                    <div className="service-modal-checklist">
                      {selectedService.modalHelps.map((item, index) => (
                        <div key={index} className="service-modal-check-item">
                          <span className="check-icon-green"><FiCheck /></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 2: What You Get */}
                {selectedService.modalGets && (
                  <div className="service-modal-section">
                    <h4 className="service-modal-section-heading">WHAT YOU GET</h4>
                    <div className="service-modal-gets-grid">
                      {selectedService.modalGets.map((item, index) => (
                        <div key={index} className="service-modal-get-item">
                          <span className="get-bullet">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 3: Perfect For */}
                {selectedService.perfectFor && (
                  <div className="service-modal-section perfect-for-section">
                    <h4 className="service-modal-section-heading">PERFECT FOR</h4>
                    <p className="perfect-for-text">{selectedService.perfectFor}</p>
                  </div>
                )}

                {/* Modal Footer CTA */}
                <div className="service-modal-footer">
                  <Link 
                    to="/contact" 
                    className="service-modal-cta-btn"
                    onClick={() => setSelectedService(null)}
                  >
                    <span>{selectedService.ctaText || 'Get Started →'}</span>
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



