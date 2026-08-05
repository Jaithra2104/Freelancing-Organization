import { motion } from 'motion/react';

export default function DeliverablesList({ list }) {
  return (
    <section className="pricing-section deliverables-section">
      <div className="section-header">
        <h2 className="section-title">What You'll Receive</h2>
      </div>
      
      <div className="deliverables-grid">
        {list.map((item, i) => (
          <motion.div
            key={item}
            className="deliverable-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <span className="check-icon">✔</span>
            <span className="deliverable-text">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
