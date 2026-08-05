import { motion } from 'motion/react';
import { 
  FaUtensils, FaHospital, FaClinicMedical, FaHotel, 
  FaSeedling, FaGraduationCap, FaStore, FaDumbbell 
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const icons = [
  { icon: <FaUtensils />, x: '10%', y: '20%' },
  { icon: <FaHospital />, x: '85%', y: '15%' },
  { icon: <FaClinicMedical />, x: '5%', y: '60%' },
  { icon: <FaHotel />, x: '90%', y: '55%' },
  { icon: <FaSeedling />, x: '20%', y: '80%' },
  { icon: <FaGraduationCap />, x: '75%', y: '75%' },
  { icon: <FaStore />, x: '15%', y: '40%' },
  { icon: <FaDumbbell />, x: '80%', y: '35%' },
];

export default function FloatingIcons() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="floating-elements-container">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="floating-icon-wrapper"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
}
