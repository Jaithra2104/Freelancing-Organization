import { motion } from 'motion/react';

export default function PricingCards({ plans }) {
  return (
    <div className="pricing-cards-container">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          className={`pricing-card ${plan.popular ? 'popular' : ''}`}
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
          <div className="pricing-icon">{plan.icon}</div>
          <h3 className="pricing-name">{plan.name}</h3>
          
          <div className="pricing-price-wrap">
            <span className="pricing-price">{plan.price}</span>
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

          <button className={`pricing-btn ${plan.popular ? 'primary' : 'secondary'}`}>
            {plan.buttonText}
          </button>
        </motion.div>
      ))}
    </div>
  );
}
