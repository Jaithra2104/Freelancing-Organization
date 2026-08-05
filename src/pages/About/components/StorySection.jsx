import { motion } from 'motion/react';

export default function StorySection() {
  return (
    <section className="section-container">
      <div className="story-grid">
        <motion.div 
          className="story-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero-badge">✨ Our Story</span>
          <h2 className="text-gradient">Embracing digital transformation without complexity.</h2>
          <p>
            SoftNexus Solutions was founded with one vision: To help local businesses embrace digital transformation without complexity.
          </p>
          <p>
            As a team of passionate developers, designers, and innovators, we recognized that many businesses still struggled with outdated systems, manual workflows, and limited online presence.
          </p>
          <p>
            Instead of simply building websites, we decided to build complete digital solutions that improve business operations, increase customer engagement, and create long-term value.
          </p>
          <p>
            Today, we specialize in developing modern websites, SaaS applications, business automation systems, and AI-powered solutions tailored for every client.
          </p>
        </motion.div>

        <motion.div 
          className="story-visual-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <img src="/images/story_visual.png" alt="Our Story Visual" />
          <div className="story-visual-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
}
