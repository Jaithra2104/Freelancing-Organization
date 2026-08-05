import { motion } from 'motion/react';

export default function ServiceCards({ services }) {
  return (
    <div className="services-grid-wrapper">
      {services.map((s, i) => (
        <motion.div 
          key={s.title}
          className="premium-service-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
        >
          <div className="service-icon-wrapper">
            <span className="service-icon-emoji">{s.icon}</span>
          </div>
          <h3 className="service-card-title">{s.title}</h3>
          <p className="service-card-desc">{s.desc}</p>
          <div className="service-card-bottom">
            <span className="service-card-tag">{s.tag}</span>
            <span className="service-card-link">Learn More &rarr;</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
