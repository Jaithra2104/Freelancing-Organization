import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CarePlans({ plans }) {
  return (
    <section className="pricing-section care-plans-section">
      <div className="section-header">
        <h2 className="section-title">Website Care Plans</h2>
        <p className="section-subtitle">Keep your website updated, secure and running smoothly.</p>
      </div>
      
      <div className="care-plans-grid">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className="care-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', stiffness: 100 }}
          >
            <div className="care-icon">{plan.icon}</div>
            <h3 className="care-name">{plan.name}</h3>
            
            <div className="care-price-wrap">
              <span className="care-price">{plan.price}</span>
              <span className="care-unit">{plan.unit}</span>
            </div>
            
            <div className="care-features">
              {plan.features.map((feat, idx) => (
                <div key={idx} className={`care-feature ${feat.includes('Everything') ? 'highlight-feat' : ''}`}>
                  <span className="check-icon">✔</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="pricing-btn secondary care-btn" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Choose Plan
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
