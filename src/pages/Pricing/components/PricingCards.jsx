import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { launchConfig } from '../PricingData';

export default function PricingCards({ plans }) {
  return (
    <div className="pricing-cards-container" id="pricing-cards">
      {plans.map((plan, i) => {
        const originalPrice = parseInt(plan.price.replace(/[^\d]/g, ''), 10);
        const hasDiscount = launchConfig.enabled && !isNaN(originalPrice);
        const discountedPrice = hasDiscount
          ? Math.round(originalPrice * (1 - launchConfig.discountPercent / 100))
          : originalPrice;

        return (
          <motion.div
            key={plan.name}
            className={`pricing-card ${plan.popular ? 'popular' : ''} ${hasDiscount ? 'has-discount' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', stiffness: 100 }}
          >
            {plan.popular && (
              <div className="popular-badge">
                Most Popular
              </div>
            )}
            {hasDiscount && (
              <div className="discount-badge">
                {launchConfig.discountPercent}% OFF
              </div>
            )}
            <div className="pricing-icon">{plan.icon}</div>
            <h3 className="pricing-name">{plan.name}</h3>
            
            <div className="pricing-price-wrap">
              {hasDiscount ? (
                <>
                  <span className="pricing-price-original">₹{originalPrice}</span>
                  <span className="pricing-price discounted">₹{discountedPrice}</span>
                </>
              ) : (
                <span className="pricing-price">{plan.price}</span>
              )}
              <span className="pricing-unit">{plan.unit}</span>
            </div>
          
          <p className="pricing-desc">{plan.desc}</p>
          
          <div className="pricing-features">
            {plan.features.map((feat, idx) => (
              <div key={idx} className={`pricing-feature ${feat.includes('Everything in') ? 'highlight-feat' : ''}`}>
                <span className="check-icon">✔</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <Link to="/contact" className={`pricing-btn ${plan.popular ? 'primary' : 'secondary'}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {plan.buttonText}
          </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
