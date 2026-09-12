import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

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
          <div className="service-card-top-row">
            <div className="service-icon-wrapper">
              <span className="service-icon-emoji">{s.icon}</span>
            </div>
            <span className="service-card-tag">{s.tag}</span>
          </div>

          <h3 className="service-card-title">{s.title}</h3>
          <p className="service-card-desc">{s.desc}</p>

          {s.highlights && (
            <ul className="service-card-highlights">
              {s.highlights.map((item, idx) => (
                <li key={idx} className="service-highlight-item">
                  <span className="highlight-bullet">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="service-card-bottom">
            <Link to="/contact" className="service-card-link" style={{ textDecoration: 'none' }}>
              Explore Capabilities &rarr;
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

