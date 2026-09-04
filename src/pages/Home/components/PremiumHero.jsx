import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function MagneticButton({ children, to, className }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className="magnetic-btn-wrapper"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link to={to} className={`${className} magnetic`}>
        {children}
      </Link>
    </motion.div>
  );
}

export default function PremiumHero() {
  return (
    <div className="hero__content" style={{ zIndex: 10, position: 'relative' }}>
      <motion.div 
        className="hero__mini-label"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        WEB • SOFTWARE • AUTOMATION • AI
      </motion.div>
      
      <h1 className="hero__title">
        <motion.span 
          className="line-1 animated-word"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We Build Digital Experiences
        </motion.span>
        <motion.span 
          className="gradient-text gradient-text-animated animated-word"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'block' }}
        >
          That Grow Your Business.
        </motion.span>
      </h1>
      
      <motion.p 
        className="hero__sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        From stunning business websites to powerful automation and AI solutions, VYUHA TECH helps businesses turn ideas into scalable digital products.
      </motion.p>
      
      <motion.div 
        className="hero__actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <MagneticButton to="/contact" className="btn-primary">
          Start Your Project →
        </MagneticButton>
        <MagneticButton to="/products" className="btn-secondary">
          View Our Work
        </MagneticButton>
      </motion.div>

      <motion.p
        className="hero__cta-supporting"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        Free consultation • No commitment
      </motion.p>

      <motion.div 
        className="hero__services"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span>Web Development</span>
        <span className="dot">•</span>
        <span>Automation</span>
        <span className="dot">•</span>
        <span>AI Solutions</span>
        <span className="dot">•</span>
        <span>Custom Software</span>
      </motion.div>

      <motion.div 
        className="premium-badge"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
      >
        <div className="premium-badge-glow"></div>
        Available for New Projects
      </motion.div>

      <motion.div 
        className="scroll-indicator-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span>Scroll to Explore</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </div>
  );
}
