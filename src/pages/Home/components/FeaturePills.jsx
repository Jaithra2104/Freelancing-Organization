import { motion } from 'motion/react';

const features = [
  'Responsive', 'SEO Ready', 'Fast Delivery', 'AI Ready', 
  'Admin Dashboard', 'Automation', 'Premium UI'
];

export default function FeaturePills() {
  return (
    <div className="hero-features">
      {features.map((feature, i) => (
        <motion.div 
          key={i}
          className="hero-feature-pill"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          {feature}
        </motion.div>
      ))}
    </div>
  );
}
