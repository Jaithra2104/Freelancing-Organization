import { motion } from 'motion/react';

const values = [
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We embrace the latest technologies.'
  },
  {
    icon: '✨',
    title: 'Quality',
    description: 'Every pixel matters.'
  },
  {
    icon: '🗣️',
    title: 'Transparency',
    description: 'Clear communication.'
  },
  {
    icon: '🤝',
    title: 'Reliability',
    description: 'Long-term partnerships.'
  },
  {
    icon: '📈',
    title: 'Customer Success',
    description: 'Our clients grow with us.'
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    description: 'Always improving.'
  }
];

export default function CoreValues() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center text-gradient" style={{ textAlign: 'center' }}>Core Values</h2>
      <div className="values-grid">
        {values.map((v, i) => (
          <motion.div 
            key={v.title}
            className="value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="value-icon">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
