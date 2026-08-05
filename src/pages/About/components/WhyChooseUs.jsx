import { motion } from 'motion/react';
import { 
  SiReact, SiGooglecloud 
} from 'react-icons/si';
import { 
  FaRocket, FaShieldAlt, FaMobileAlt, 
  FaChartLine, FaCogs, FaHandsHelping, FaRobot
} from 'react-icons/fa';

const features = [
  { icon: <SiReact />, title: 'Modern UI/UX' },
  { icon: <FaCogs />, title: 'Business Automation' },
  { icon: <FaMobileAlt />, title: 'Responsive Development' },
  { icon: <FaChartLine />, title: 'SEO Optimized' },
  { icon: <FaRobot />, title: 'AI Integration' },
  { icon: <FaHandsHelping />, title: 'Long-Term Support' },
  { icon: <FaRocket />, title: 'Fast Delivery' },
  { icon: <FaShieldAlt />, title: 'Secure Architecture' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center text-gradient" style={{ textAlign: 'center' }}>Why Choose Us</h2>
      <div className="features-grid">
        {features.map((feature, i) => (
          <motion.div 
            key={feature.title}
            className="feature-pill"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {feature.icon}
            <span>{feature.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
