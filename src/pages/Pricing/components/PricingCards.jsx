import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function PricingCards({ plans }) {
  return (
    <div className="pricing-cards-container" id="pricing-cards">
      {plans.map((plan, i) => {
        const planKey = plan.name.toLowerCase();

        return (
          <motion.div
            key={plan.name}
            className={`pricing-card card-${planKey} ${plan.popular ? 'popular' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', stiffness: 100 }}
          >
            {plan.popular && (
              <div className="popular-badge">
                <span className="sparkle">✨</span> MOST POPULAR
              </div>
            )}
            
            <div className="pricing-header-block">
              <div className="pricing-icon">{plan.icon}</div>
              <h3 className="pricing-name">{plan.name}</h3>
            </div>
            
            <div className="pricing-price-wrap">
              <div className="normal-price-container">
                <span className="pricing-price">{plan.price}</span>
                <span className="pricing-unit">{plan.unit}</span>
              </div>
            </div>
          
            <p className="pricing-desc">{plan.desc}</p>
          
            <div className="pricing-features">
              {plan.features.map((feat, idx) => {
                const isHighlight = feat.toLowerCase().startsWith('everything in');
                return (
                  <div key={idx} className={`pricing-feature ${isHighlight ? 'highlight-feat' : ''}`}>
                    <span className="check-icon">✓</span>
                    <span className="feature-text">{feat}</span>
                  </div>
                );
              })}
            </div>

            <Link 
              to="/contact" 
              className={`pricing-btn ${plan.popular ? 'primary' : 'secondary'}`} 
              style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              {plan.buttonText}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

