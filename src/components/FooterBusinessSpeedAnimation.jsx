import { motion } from 'motion/react';
import './FooterBusinessSpeedAnimation.css';

export default function FooterBusinessSpeedAnimation() {
  return (
    <div 
      className="footer-speed-animation-container" 
      aria-label="A visual showing traditional and manual business approaches moving slowly while a business powered by VYUHA_TECH moves ahead."
    >
      <div className="speed-anim-header">
        <span className="speed-anim-tag">BUSINESS SPEED</span>
        <h4 className="speed-anim-heading">DON&apos;T JUST KEEP UP. MOVE AHEAD.</h4>
      </div>

      <div className="speed-track-wrapper">
        {/* Track Grid Lines & Road Effect */}
        <div className="speed-track-bg">
          <div className="track-line top-line"></div>
          <div className="track-line dash-line"></div>
          <div className="track-line bottom-line"></div>
        </div>

        {/* 1. TRADITIONAL WAY — WALKING PERSON */}
        <div className="speed-entity entity-walker">
          <div className="entity-label-pill">TRADITIONAL WAY</div>
          <div className="entity-graphic walker-graphic">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="9" r="4" fill="#94A3B8" />
              <path d="M19 15L15 23L11 35M19 15L23 22L29 34M19 15V22M15 19L23 18" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* 2. DOING IT MANUALLY — BICYCLE RIDER */}
        <div className="speed-entity entity-bicycle">
          <div className="entity-label-pill">DOING IT MANUALLY</div>
          <div className="entity-graphic bicycle-graphic">
            <svg width="52" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wheels */}
              <circle cx="12" cy="27" r="8" stroke="#CBD5E1" strokeWidth="2" fill="none" />
              <circle cx="40" cy="27" r="8" stroke="#CBD5E1" strokeWidth="2" fill="none" />
              {/* Bike Frame */}
              <path d="M12 27L22 17L32 27M12 27H26M22 17H34M32 27L40 27" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              {/* Handlebar & Seat */}
              <path d="M34 17L36 11H41M22 17V13H18" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
              {/* Cyclist Figure */}
              <circle cx="22" cy="6" r="3.5" fill="#CBD5E1" />
              <path d="M22 10L27 15L36 13M22 10L24 19L30 23" stroke="#CBD5E1" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* 3. POWERED BY VYUHA_TECH — PREMIUM CAR */}
        <div className="speed-entity entity-car">
          <div className="entity-label-pill car-pill">POWERED BY VYUHA_TECH</div>
          <div className="car-wrapper">
            {/* Speed Light Trail & Glow */}
            <div className="car-speed-trail"></div>
            
            <div className="entity-graphic car-graphic">
              <svg width="110" height="42" viewBox="0 0 110 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="carBodyGrad" x1="0" y1="0" x2="110" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="neonGlow" x="-10" y="-10" width="130" height="60" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#EC4899" floodOpacity="0.5" />
                  </filter>
                </defs>

                {/* Underglow Glow */}
                <ellipse cx="55" cy="36" rx="45" ry="4" fill="#EC4899" opacity="0.4" filter="blur(3px)" />

                {/* Sleek Aerodynamic Car Silhouette */}
                <path 
                  d="M10 28 C 15 28, 22 26, 32 20 C 42 14, 58 11, 74 15 C 84 17, 95 22, 102 26 C 106 28, 108 30, 106 33 C 104 35, 96 36, 85 36 H 20 C 12 36, 8 33, 10 28 Z" 
                  fill="url(#carBodyGrad)" 
                  stroke="rgba(255,255,255,0.4)" 
                  strokeWidth="1"
                />

                {/* Windshield & Cabin Glass */}
                <path 
                  d="M38 19 C 45 14, 58 12, 70 15 C 75 16, 79 19, 81 21 H 36 Z" 
                  fill="url(#glassGrad)" 
                />

                {/* Side Door Panel — EXACT BRAND TEXT: VYUHA_TECH */}
                <rect x="42" y="23" width="38" height="9" rx="2" fill="rgba(10, 8, 24, 0.6)" stroke="rgba(167, 139, 250, 0.5)" strokeWidth="0.8" />
                <text x="61" y="29.5" fill="#FFFFFF" fontSize="6" fontWeight="900" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" letterSpacing="0.4">
                  VYUHA_TECH
                </text>

                {/* Headlight Beam */}
                <path d="M102 27 L109 28 L102 30 Z" fill="#F8FAFC" />
                <polygon points="104,25 110,23 110,32 104,30" fill="url(#glassGrad)" opacity="0.6" />

                {/* Rear Light */}
                <path d="M10 29 V33 H7 V29 Z" fill="#EC4899" />

                {/* Wheels */}
                <g className="car-wheel">
                  <circle cx="28" cy="33" r="6" fill="#0F0D22" stroke="#A78BFA" strokeWidth="1.5" />
                  <circle cx="28" cy="33" r="2.5" fill="#F8FAFC" />
                </g>
                <g className="car-wheel">
                  <circle cx="82" cy="33" r="6" fill="#0F0D22" stroke="#A78BFA" strokeWidth="1.5" />
                  <circle cx="82" cy="33" r="2.5" fill="#F8FAFC" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Micro-Message Banner */}
      <div className="speed-anim-footer-msg">
        <motion.span 
          className="msg-highlight"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          MOVE FASTER. GROW SMARTER.
        </motion.span>
        <span className="msg-sub">Your business. Our technology. A faster way forward.</span>
      </div>
    </div>
  );
}
