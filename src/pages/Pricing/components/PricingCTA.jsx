import { motion } from 'motion/react';

export default function PricingCTA() {
  return (
    <section className="pricing-section cta-section">
      <motion.div 
        className="cta-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="cta-title">Ready to Take Your Business Online?</h2>
        <p className="cta-desc">
          Let's build a modern website that helps your business attract more customers, build trust, and grow faster.
        </p>
        <div className="cta-buttons">
          <button className="pricing-btn primary">Get Free Consultation</button>
          <button className="pricing-btn secondary">Request a Quote</button>
        </div>
      </motion.div>
    </section>
  );
}
