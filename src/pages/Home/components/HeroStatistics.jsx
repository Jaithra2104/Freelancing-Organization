import { motion } from 'motion/react';
import CountUp from '../../../components/CountUp';

const stats = [
  { label: 'Demo Websites', value: 12, suffix: '+' },
  { label: 'Business Domains', value: 4, suffix: '+' },
  { label: 'Team Members', value: 4, suffix: '' },
  { label: 'Commitment to Quality', value: 100, suffix: '%' }
];

export default function HeroStatistics() {
  return (
    <div className="hero-stats">
      {stats.map((stat, i) => (
        <motion.div 
          key={i}
          className="hero-stat-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <div className="hero-stat-val gradient-text-animated">
            <CountUp to={stat.value} duration={2} />
            {stat.suffix}
          </div>
          <div className="hero-stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
