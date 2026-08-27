import { motion } from 'motion/react';
import { FaCheckCircle } from 'react-icons/fa';

const projects = [
  { title: 'Restaurant Website', status: 'COMPLETED', x: '12%', y: '30%', delay: 0 },
  { title: 'Function Hall Website', status: 'PREMIUM DEMO', x: '75%', y: '25%', delay: 2 },
  { title: 'Medical Shop Website', status: 'LIVE', x: '8%', y: '70%', delay: 1 },
  { title: 'Nursery Website', status: 'IN DEVELOPMENT', x: '82%', y: '65%', delay: 3 },
];

export default function FloatingProjectCards() {
  return (
    <div className="floating-elements-container floating-project-cards-container" style={{ zIndex: 3 }}>
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          className="floating-project-card"
          style={{ left: proj.x, top: proj.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: proj.delay
            },
            opacity: { duration: 1, delay: 1.2 + i * 0.2 },
            scale: { duration: 1, delay: 1.2 + i * 0.2 }
          }}
        >
          <div className="project-card-title">
            <FaCheckCircle style={{ color: '#4ADE80' }} />
            {proj.title}
          </div>
          <div className="project-card-status">{proj.status}</div>
        </motion.div>
      ))}
    </div>
  );
}
