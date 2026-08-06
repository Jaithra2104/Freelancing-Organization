import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import "./TiltMockup.css";

export default function TiltMockup({ image, title, url }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalize coordinates to -0.5 to 0.5
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="tilt-mockup-wrapper" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div 
        className="tilt-mockup-container"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Glow behind the mockup */}
        <div className="tilt-mockup-glow" />

        <div className="tilt-browser-mockup">
          <div className="tilt-browser-header">
            <div className="browser-dots">
              <span className="dot red" style={{ background: '#FF5F56' }}></span>
              <span className="dot yellow" style={{ background: '#FFBD2E' }}></span>
              <span className="dot green" style={{ background: '#27C93F' }}></span>
            </div>
            <div className="browser-address-bar" style={{ 
              flex: 1, 
              background: '#111', 
              padding: '0.5rem 1rem', 
              borderRadius: '8px', 
              color: '#888', 
              fontSize: '0.9rem', 
              fontFamily: 'monospace', 
              textAlign: 'center', 
              letterSpacing: '0.5px' 
            }}>{url}</div>
          </div>
          <div className="tilt-browser-viewport">
            <img src={image} alt={title} loading="lazy" className="tilt-mockup-img" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
