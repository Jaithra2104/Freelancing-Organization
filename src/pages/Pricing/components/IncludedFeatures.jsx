import { motion } from 'motion/react';

export default function IncludedFeatures({ features }) {
  return (
    <section className="pricing-section included-features-section">
      <div className="section-header">
        <h2 className="section-title">Everything Included</h2>
      </div>
      <div className="features-grid">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            className="feature-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="feature-icon">{feat.icon}</div>
            <h4 className="feature-title">{feat.title}</h4>
            <p className="feature-desc">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
