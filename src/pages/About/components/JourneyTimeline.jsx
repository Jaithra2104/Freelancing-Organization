import { motion } from 'motion/react';

const timelineEvents = [
  { year: '2026', title: 'SoftNexus was founded.', desc: 'A vision to simplify digital transformation.' },
  { year: 'Phase 1', title: 'Built internal reusable templates.', desc: 'Establishing our robust foundation.' },
  { year: 'Phase 2', title: 'Started serving local businesses.', desc: 'Delivering tailored digital experiences.' },
  { year: 'Phase 3', title: 'Expanded into SaaS platforms.', desc: 'Scaling operations globally.' },
  { year: 'Phase 4', title: 'Integrated AI and automation.', desc: 'Empowering smart enterprises.' },
  { year: 'Today', title: 'Growing into a trusted software partner.', desc: 'Redefining the digital landscape.' },
];

export default function JourneyTimeline() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center text-gradient" style={{ textAlign: 'center' }}>Our Journey</h2>
      <div className="timeline-container">
        {timelineEvents.map((event, i) => (
          <motion.div 
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
