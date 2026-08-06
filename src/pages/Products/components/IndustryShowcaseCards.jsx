import { motion } from 'motion/react';
import SpotlightCard from '../../../components/SpotlightCard';
import SplitText from '../../../components/SplitText';

export default function IndustryShowcaseCards({ industries }) {
  const planNames = [
    { key: 'basic', label: '🌱 Basic' },
    { key: 'pro', label: '🚀 Pro' },
    { key: 'premium', label: '💎 Premium' },
    { key: 'ultra', label: '👑 Ultra' }
  ];

  return (
    <div className="showcase-cards-container">
      {industries.map((industry, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={industry.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 80 }}
            className={`showcase-row ${isEven ? 'row-even' : 'row-odd'}`}
          >
            <SpotlightCard className="showcase-spotlight-wrapper" spotlightColor="rgba(167, 139, 250, 0.15)">
              <div className="showcase-card-inner">
                {/* Browser Mockup Area */}
                <div className="browser-mockup-area">
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

                {/* Details Area */}
                <div className="showcase-details-area">
                  <h3 className="showcase-title">
                    <SplitText
                      text={industry.title}
                      delay={30}
                      animationFrom={{ opacity: 0, transform: 'translate3d(0,20px,0)' }}
                      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                      threshold={0.2}
                      rootMargin="-10px"
                    />
                  </h3>
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
                              Coming Soon
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        );
      })}
    </div>
  );
}
