import { motion } from 'motion/react';
import CountUp from '../../../components/CountUp';

const stats = [
  { label: 'Demo Websites', value: 12, suffix: '+' },
  { label: 'Business Domains', value: 4, suffix: '+' },
  { label: 'Team Members', value: 4, suffix: '' },
  { label: 'Commitment to Quality', value: 100, suffix: '%' }
];

export default function Statistics() {
  return (
    <section className="section-container">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="stat-number text-gradient">
              <CountUp to={stat.value} duration={1.5} />
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
