import { motion } from 'motion/react';

export default function MissionVision() {
  return (
    <section className="section-container">
      <div className="mv-grid">
        <motion.div 
          className="glass-card mv-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mv-icon">🎯</div>
          <h3>Mission</h3>
          <p>
            To empower businesses with innovative, scalable, and reliable software solutions that simplify operations, enhance customer experiences, and accelerate digital growth.
          </p>
        </motion.div>

        <motion.div 
          className="glass-card mv-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mv-icon">👁️</div>
          <h3>Vision</h3>
          <p>
            To become one of the most trusted software development organizations by delivering world-class digital experiences that transform businesses across every industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
