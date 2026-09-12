import { motion } from 'motion/react';
import './FooterBusinessSpeedAnimation.css';

export default function FooterBusinessSpeedAnimation() {
  return (
    <div 
      className="footer-speed-animation-container" 
      aria-label="A visual showing traditional and manual business approaches moving slowly while a business powered by VYUHA_TECH moves ahead."
    >
      <div className="speed-anim-header">
        <span className="speed-anim-tag">BUSINESS VELOCITY</span>
        <h4 className="speed-anim-heading">DON&apos;T JUST KEEP UP. MOVE AHEAD.</h4>
      </div>

      <div className="speed-track-wrapper">
        {/* Realistic Highway Track Background with Perspective Lines */}
        <div className="speed-track-bg">
          <div className="track-asphalt"></div>
          <div className="track-glow-top"></div>
          <div className="track-line dash-line"></div>
          <div className="track-glow-bottom"></div>
        </div>

        {/* 1. TRADITIONAL WAY — REALISTIC BUSINESS PEDESTRIAN */}
        <div className="speed-entity entity-walker">
          <div className="entity-label-pill">TRADITIONAL WAY</div>
          <div className="entity-graphic walker-graphic">
            <svg width="56" height="52" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="walkerShadow" cx="28" cy="48" r="20" rx="20" ry="4" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Floor Shadow */}
              <ellipse cx="28" cy="48" rx="16" ry="3" fill="url(#walkerShadow)" />

              {/* Detailed Walking Business Person */}
              {/* Head */}
              <circle cx="28" cy="11" r="5" fill="#E2E8F0" />
              <path d="M26 10 C 27 8, 30 8, 31 10" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
              
              {/* Torso & Suit Jacket */}
              <path d="M22 17 C 24 16, 32 16, 34 17 L 32 30 H 24 Z" fill="#64748B" />
              <path d="M28 17 V 30" stroke="#334155" strokeWidth="1" />
              <path d="M26 17 L 28 22 L 30 17" fill="#F8FAFC" />

              {/* Legs in Stride */}
              <path d="M25 30 L 19 46 M 29 30 L 37 46" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
              {/* Shoes */}
              <path d="M19 46 H 14 M 37 46 H 42" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />

              {/* Arms & Briefcase */}
              <path d="M23 18 L 18 27 L 16 33" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
              <rect x="12" y="31" width="7" height="6" rx="1" fill="#334155" stroke="#1E293B" strokeWidth="1" />
              <path d="M29 18 L 34 26" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* 2. DOING IT MANUALLY — REALISTIC ROAD CYCLIST */}
        <div className="speed-entity entity-bicycle">
          <div className="entity-label-pill">DOING IT MANUALLY</div>
          <div className="entity-graphic bicycle-graphic">
            <svg width="76" height="52" viewBox="0 0 76 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bikeFrameGrad" x1="0" y1="0" x2="76" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>
                <radialGradient id="bikeShadow" cx="38" cy="48" r="30" rx="30" ry="4" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Floor Shadow */}
              <ellipse cx="38" cy="48" rx="30" ry="3.5" fill="url(#bikeShadow)" />

              {/* Front & Rear Wheels with Spokes */}
              <g>
                <circle cx="16" cy="36" r="12" stroke="#94A3B8" strokeWidth="2.5" fill="none" />
                <circle cx="16" cy="36" r="10" stroke="#475569" strokeWidth="0.8" fill="none" />
                <line x1="16" y1="24" x2="16" y2="48" stroke="#64748B" strokeWidth="0.8" />
                <line x1="4" y1="36" x2="28" y2="36" stroke="#64748B" strokeWidth="0.8" />
                <circle cx="16" cy="36" r="2.5" fill="#E2E8F0" />
              </g>
              <g>
                <circle cx="60" cy="36" r="12" stroke="#94A3B8" strokeWidth="2.5" fill="none" />
                <circle cx="60" cy="36" r="10" stroke="#475569" strokeWidth="0.8" fill="none" />
                <line x1="60" y1="24" x2="60" y2="48" stroke="#64748B" strokeWidth="0.8" />
                <line x1="48" y1="36" x2="72" y2="36" stroke="#64748B" strokeWidth="0.8" />
                <circle cx="60" cy="36" r="2.5" fill="#E2E8F0" />
              </g>

              {/* Realistic Frame */}
              <path d="M16 36 L 32 36 L 46 22 L 28 22 Z" fill="none" stroke="url(#bikeFrameGrad)" strokeWidth="3" strokeLinejoin="round" />
              <path d="M32 36 L 44 18 M 46 22 L 60 36" stroke="url(#bikeFrameGrad)" strokeWidth="3" strokeLinecap="round" />
              {/* Handlebars & Seat */}
              <path d="M44 18 H 50 L 52 20" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M26 22 H 32" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />

              {/* Cyclist Figure */}
              <circle cx="34" cy="9" r="4" fill="#38BDF8" /> {/* Helmet */}
              <path d="M34 13 L 26 22 L 35 25" fill="#0284C7" /> {/* Jersey */}
              <path d="M34 13 L 47 18" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" /> {/* Arms */}
              <path d="M35 25 L 28 33 L 32 36 M 35 25 L 42 32 L 37 36" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" /> {/* Legs */}
            </svg>
          </div>
        </div>

        {/* 3. POWERED BY VYUHA_TECH — HYPER-REALISTIC CYBER SUPERCAR */}
        <div className="speed-entity entity-car">
          <div className="entity-label-pill car-pill">POWERED BY VYUHA_TECH</div>
          <div className="car-wrapper">
            {/* Multi-layered Realistic Speed Blur Trails */}
            <div className="car-speed-trail outer-glow"></div>
            <div className="car-speed-trail core-beam"></div>
            <div className="car-particles"></div>

            <div className="entity-graphic car-graphic">
              <svg width="150" height="54" viewBox="0 0 150 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Metallic Body Gradient */}
                  <linearGradient id="cyberBody" x1="0" y1="0" x2="150" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#4C1D95" />
                    <stop offset="35%" stopColor="#7C3AED" />
                    <stop offset="70%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>

                  {/* Chrome Highlight Gradient */}
                  <linearGradient id="chromeHighlight" x1="0" y1="0" x2="150" y2="25" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Tinted Windshield Glass */}
                  <linearGradient id="glassTint" x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0369A1" stopOpacity="0.4" />
                  </linearGradient>

                  {/* Alloy Rim Gradient */}
                  <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="60%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </radialGradient>

                  {/* Underglow Radial Shadow */}
                  <radialGradient id="carFloorGlow" cx="75" cy="46" rx="65" ry="6" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#7C3AED" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ground Shadow & Neon Underglow */}
                <ellipse cx="75" cy="46" rx="68" ry="5.5" fill="url(#carFloorGlow)" />

                {/* Laser Headlight Projection Cone */}
                <polygon points="135,32 150,26 150,42 135,38" fill="url(#glassTint)" opacity="0.35" />

                {/* Sleek Aerodynamic Body Chassis */}
                <path 
                  d="M12 36 C 18 36, 26 34, 38 26 C 50 18, 72 13, 98 17 C 112 19, 128 26, 138 31 C 146 34, 148 37, 144 41 C 140 43, 126 44, 110 44 H 25 C 16 44, 10 40, 12 36 Z" 
                  fill="url(#cyberBody)" 
                  stroke="url(#chromeHighlight)" 
                  strokeWidth="1.2"
                />

                {/* Roofline & Window Glass Silhouette */}
                <path 
                  d="M44 25 C 54 18, 76 15, 92 18 C 98 20, 106 24, 109 27 H 42 Z" 
                  fill="url(#glassTint)" 
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="0.8"
                />

                {/* Carbon Fiber Side Skirt Trim */}
                <path d="M30 42 H 122 L 126 44 H 26 Z" fill="#0F172A" />

                {/* Illuminated Side Door Badge — EXACT TEXT: VYUHA_TECH */}
                <rect x="52" y="28" width="46" height="11" rx="3" fill="#090514" stroke="#F472B6" strokeWidth="1" />
                <text x="75" y="36" fill="#FFFFFF" fontSize="7.5" fontWeight="900" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" letterSpacing="0.5">
                  VYUHA_TECH
                </text>

                {/* Front LED Laser Light */}
                <path d="M138 32 L147 34 L138 36 Z" fill="#F8FAFC" />
                <circle cx="140" cy="34" r="2" fill="#38BDF8" />

                {/* Rear Neon Taillight Bar */}
                <path d="M12 34 V40 H8 C 6 40, 6 34, 8 34 Z" fill="#EC4899" />
                <line x1="8" y1="37" x2="16" y2="37" stroke="#F472B6" strokeWidth="2" />

                {/* Alloy Wheels & Brake Calipers */}
                {/* Rear Wheel */}
                <g className="car-wheel">
                  <circle cx="34" cy="42" r="8" fill="#090514" stroke="#E2E8F0" strokeWidth="2" />
                  <circle cx="34" cy="42" r="5.5" fill="url(#rimGrad)" />
                  <line x1="34" y1="34" x2="34" y2="50" stroke="#FFFFFF" strokeWidth="1" />
                  <line x1="26" y1="42" x2="42" y2="42" stroke="#FFFFFF" strokeWidth="1" />
                  <circle cx="34" cy="42" r="2.5" fill="#EC4899" />
                </g>

                {/* Front Wheel */}
                <g className="car-wheel">
                  <circle cx="112" cy="42" r="8" fill="#090514" stroke="#E2E8F0" strokeWidth="2" />
                  <circle cx="112" cy="42" r="5.5" fill="url(#rimGrad)" />
                  <line x1="112" y1="34" x2="112" y2="50" stroke="#FFFFFF" strokeWidth="1" />
                  <line x1="104" y1="42" x2="120" y2="42" stroke="#FFFFFF" strokeWidth="1" />
                  <circle cx="112" cy="42" r="2.5" fill="#EC4899" />
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
