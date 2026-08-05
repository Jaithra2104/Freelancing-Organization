import { motion } from 'motion/react';

export default function IndustryShowcaseCards({ industries }) {
  const planNames = [
    { key: 'basic', label: '🌱 Basic' },
    { key: 'pro', label: '🚀 Pro' },
    { key: 'premium', label: '💎 Premium' },
    { key: 'ultra', label: '👑 Ultra' }
  ];

  return (
    <div className="showcase-cards-container">
      {industries.map((industry, index) => (
        <motion.div
          key={industry.id}
          className="showcase-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
        >
          {/* Browser Mockup */}
          <div className="browser-mockup">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-address-bar">
                {industry.title.replace(/[^a-zA-Z]/g, '').toLowerCase()}.demo.softnexus.com
              </div>
            </div>
            <div className="browser-viewport">
              <img src={industry.image} alt={industry.title} loading="lazy" className="mockup-img" />
              <div className="glass-reflection"></div>
            </div>
          </div>

          {/* Details */}
          <div className="showcase-details">
            <h3 className="showcase-title">{industry.title}</h3>
            <p className="showcase-desc">{industry.description}</p>
            
            <div className="showcase-plans-grid">
              {planNames.map((plan) => {
                const url = industry.plans[plan.key];
                return (
                  <div key={plan.key} className="plan-item">
                    <span className="plan-label">{plan.label}</span>
                    {url ? (
                      <a href={url} target="_blank" rel="noreferrer" className="showcase-btn active">
                        View Live Demo →
                      </a>
                    ) : (
                      <button className="showcase-btn disabled" disabled>
                        Demo Coming Soon
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
