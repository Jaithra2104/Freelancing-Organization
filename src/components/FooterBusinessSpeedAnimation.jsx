import { useState } from 'react';
import { motion } from 'motion/react';
import './FooterBusinessSpeedAnimation.css';

export default function FooterBusinessSpeedAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`footer-speed-animation-container ${isHovered ? 'boost-active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="A visual showing traditional and manual business approaches moving slowly while a business powered by VYUHA_TECH moves ahead."
    >
      {/* Telemetry Dashboard Header */}
      <div className="speed-anim-header">
        <div className="speed-header-left">
          <span className="speed-anim-tag">
            <span className="live-dot"></span> VELOCITY MATRIX
          </span>
          <h4 className="speed-anim-heading">DON&apos;T JUST KEEP UP. MOVE AHEAD.</h4>
        </div>

        {/* Live Speed Telemetry Indicators */}
        <div className="speed-telemetry-hud">
          <div className="telemetry-item walk-hud">
            <span className="hud-label">TRADITIONAL</span>
            <span className="hud-speed">4 KM/H</span>
          </div>
          <div className="telemetry-divider">/</div>
          <div className="telemetry-item bike-hud">
            <span className="hud-label">MANUAL</span>
            <span className="hud-speed">18 KM/H</span>
          </div>
          <div className="telemetry-divider">/</div>
          <div className="telemetry-item car-hud">
            <span className="hud-label">VYUHA_TECH</span>
            <span className="hud-speed highlight-speed">
              {isHovered ? '320 KM/H 🚀' : '260 KM/H'}
            </span>
          </div>
        </div>
      </div>

      {/* 3D Perspective Highway Track Container */}
      <div className="speed-track-wrapper">
        {/* 3D Moving Perspective Highway Lines & Grid */}
        <div className="speed-track-bg">
          <div className="track-perspective-grid"></div>
          <div className="track-asphalt-texture"></div>
          <div className="track-guardrail top-guardrail">
            <div className="guardrail-light glow-cyan"></div>
            <div className="guardrail-light glow-purple"></div>
            <div className="guardrail-light glow-pink"></div>
          </div>
          <div className="track-lane-divider dash-lane"></div>
          <div className="track-guardrail bottom-guardrail">
            <div className="guardrail-light glow-pink"></div>
            <div className="guardrail-light glow-purple"></div>
            <div className="guardrail-light glow-cyan"></div>
          </div>
        </div>

        {/* 1. TRADITIONAL WAY — REALISTIC BUSINESS PEDESTRIAN */}
        <div className="speed-entity entity-walker">
          <div className="entity-label-pill">TRADITIONAL WAY</div>
          <div className="entity-graphic walker-graphic">
            <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="walkerShadowGrad" cx="30" cy="50" r="22" rx="22" ry="4.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Realistic Ground Contact Shadow */}
              <ellipse cx="30" cy="50" rx="20" ry="3.5" fill="url(#walkerShadowGrad)" />

              {/* Pedestrian Body Elements */}
              <g className="walker-stride-group">
                {/* Head & Collar */}
                <circle cx="30" cy="12" r="5" fill="#E2E8F0" />
                <path d="M28 11 C 29 9, 32 9, 33 11" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
                
                {/* Formal Suit Jacket & Tie */}
                <path d="M23 18 C 25 17, 34 17, 36 18 L 34 32 H 25 Z" fill="#475569" stroke="#334155" strokeWidth="0.8" />
                <path d="M30 18 V 32" stroke="#1E293B" strokeWidth="1.2" />
                <path d="M28 18 L 30 23 L 32 18" fill="#F8FAFC" />
                <path d="M30 19 L 30 25" stroke="#DC2626" strokeWidth="1.2" /> {/* Red Tie */}

                {/* Animated Legs */}
                <path className="leg-back" d="M27 32 L 20 48" stroke="#334155" strokeWidth="4.2" strokeLinecap="round" />
                <path className="leg-front" d="M32 32 L 40 48" stroke="#1E293B" strokeWidth="4.2" strokeLinecap="round" />
                
                {/* Leather Shoes */}
                <path d="M19 48 H 13" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
                <path d="M40 48 H 46" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

                {/* Arms & Leather Briefcase */}
                <path className="arm-back" d="M24 19 L 18 28 L 16 34" stroke="#475569" strokeWidth="3.2" strokeLinecap="round" />
                <rect x="11" y="32" width="8" height="7" rx="1.5" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                <path className="arm-front" d="M32 19 L 37 27" stroke="#475569" strokeWidth="3.2" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>

        {/* 2. DOING IT MANUALLY — REALISTIC ROAD CYCLIST */}
        <div className="speed-entity entity-bicycle">
          <div className="entity-label-pill">DOING IT MANUALLY</div>
          <div className="entity-graphic bicycle-graphic">
            <svg width="84" height="56" viewBox="0 0 84 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="proBikeFrame" x1="0" y1="0" x2="84" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0EA5E9" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
                <radialGradient id="bikeShadowGrad" cx="42" cy="51" r="34" rx="34" ry="4.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Realistic Ground Shadow */}
              <ellipse cx="42" cy="51" rx="34" ry="4" fill="url(#bikeShadowGrad)" />

              {/* Wheels with Spinning Spokes & Rim Brake Details */}
              <g className="wheel-spin">
                <circle cx="18" cy="38" r="13" stroke="#CBD5E1" strokeWidth="2.5" fill="none" />
                <circle cx="18" cy="38" r="11" stroke="#334155" strokeWidth="1" fill="none" />
                <line x1="18" y1="25" x2="18" y2="51" stroke="#64748B" strokeWidth="0.8" />
                <line x1="5" y1="38" x2="31" y2="38" stroke="#64748B" strokeWidth="0.8" />
                <circle cx="18" cy="38" r="3" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1" />
              </g>
              <g className="wheel-spin">
                <circle cx="66" cy="38" r="13" stroke="#CBD5E1" strokeWidth="2.5" fill="none" />
                <circle cx="66" cy="38" r="11" stroke="#334155" strokeWidth="1" fill="none" />
                <line x1="66" y1="25" x2="66" y2="51" stroke="#64748B" strokeWidth="0.8" />
                <line x1="53" y1="38" x2="79" y2="38" stroke="#64748B" strokeWidth="0.8" />
                <circle cx="66" cy="38" r="3" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1" />
              </g>

              {/* Hydroformed Bike Frame */}
              <path d="M18 38 L 35 38 L 50 23 L 30 23 Z" fill="none" stroke="url(#proBikeFrame)" strokeWidth="3.2" strokeLinejoin="round" />
              <path d="M35 38 L 48 19 M 50 23 L 66 36" stroke="url(#proBikeFrame)" strokeWidth="3.2" strokeLinecap="round" />
              {/* Handlebars, Stem & Saddle */}
              <path d="M48 19 H 55 L 58 22" stroke="#E2E8F0" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M28 23 H 35" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />

              {/* Cyclist with Animated Legs */}
              <circle cx="36" cy="10" r="4.5" fill="#0EA5E9" /> {/* Helmet */}
              <path d="M36 14.5 L 28 23 L 38 26" fill="#0284C7" /> {/* Racing Jersey */}
              <path d="M36 14.5 L 51 20" stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" /> {/* Arms */}
              <path className="cyclist-leg-1" d="M38 26 L 30 34 L 35 38" stroke="#0369A1" strokeWidth="3.5" strokeLinecap="round" />
              <path className="cyclist-leg-2" d="M38 26 L 46 34 L 41 38" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* 3. POWERED BY VYUHA_TECH — HYPER-REALISTIC CYBER SUPERCAR */}
        <div className="speed-entity entity-car">
          <div className="entity-label-pill car-pill">POWERED BY VYUHA_TECH</div>
          <div className="car-wrapper">
            {/* Realistic Light Trails, Exhaust Sparks & Laser Cone */}
            <div className="car-headlight-cone"></div>
            <div className="car-speed-trail outer-glow"></div>
            <div className="car-speed-trail core-beam"></div>
            <div className="car-nitro-sparks"></div>

            <div className="entity-graphic car-graphic">
              <svg width="160" height="58" viewBox="0 0 160 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Supercar Metallic Body Paint Gradient */}
                  <linearGradient id="hyperBody" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3B0764" />
                    <stop offset="30%" stopColor="#6D28D9" />
                    <stop offset="65%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>

                  {/* Chrome Reflection Streak */}
                  <linearGradient id="hyperChrome" x1="0" y1="0" x2="160" y2="30" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="40%" stopColor="#C4B5FD" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#F472B6" stopOpacity="0.85" />
                  </linearGradient>

                  {/* Windshield & Cabin Glass */}
                  <linearGradient id="hyperGlass" x1="0" y1="0" x2="0" y2="35" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.3" />
                  </linearGradient>

                  {/* Wheel Rim Radial Texture */}
                  <radialGradient id="hyperRim" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#C084FC" />
                    <stop offset="100%" stopColor="#020617" />
                  </radialGradient>

                  {/* Ground Neon Glow */}
                  <radialGradient id="hyperFloorGlow" cx="80" cy="50" rx="70" ry="7" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ground Reflection & Neon Underglow */}
                <ellipse cx="80" cy="50" rx="72" ry="6" fill="url(#hyperFloorGlow)" />

                {/* Laser Headlight Projection Cone */}
                <polygon points="144,34 160,26 160,46 144,40" fill="url(#hyperGlass)" opacity="0.45" />

                {/* Aerodynamic Carbon Chassis Body */}
                <path 
                  d="M14 38 C 20 38, 28 36, 40 28 C 54 20, 78 14, 106 18 C 120 20, 136 28, 147 33 C 155 36, 157 40, 153 44 C 148 46, 134 47, 118 47 H 28 C 18 47, 12 43, 14 38 Z" 
                  fill="url(#hyperBody)" 
                  stroke="url(#hyperChrome)" 
                  strokeWidth="1.4"
                />

                {/* Tinted Cockpit Glass */}
                <path 
                  d="M48 27 C 58 20, 82 16, 99 20 C 105 22, 113 26, 117 30 H 46 Z" 
                  fill="url(#hyperGlass)" 
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1"
                />

                {/* Carbon Fiber Side Skirt Trim */}
                <path d="M32 45 H 132 L 136 47 H 28 Z" fill="#020617" />

                {/* Illuminated Metallic Badge — EXACT BRAND NAME: VYUHA_TECH */}
                <rect x="56" y="30" width="50" height="12" rx="3.5" fill="#05020A" stroke="#F472B6" strokeWidth="1.2" />
                <text x="81" y="38.5" fill="#FFFFFF" fontSize="8" fontWeight="900" fontFamily="Space Grotesk, sans-serif" textAnchor="middle" letterSpacing="0.6">
                  VYUHA_TECH
                </text>

                {/* Front LED Laser Cluster */}
                <path d="M147 34 L156 36 L147 38 Z" fill="#F8FAFC" />
                <circle cx="149" cy="36" r="2.2" fill="#38BDF8" />

                {/* Rear Exhaust & Taillights */}
                <path d="M14 36 V43 H9 C 7 43, 7 36, 9 36 Z" fill="#EC4899" />
                <line x1="9" y1="39.5" x2="18" y2="39.5" stroke="#F472B6" strokeWidth="2.2" />

                {/* Dual Alloy Wheels & Rotors */}
                <g className="wheel-rotate">
                  <circle cx="36" cy="45" r="9" fill="#020617" stroke="#F8FAFC" strokeWidth="2.2" />
                  <circle cx="36" cy="45" r="6" fill="url(#hyperRim)" />
                  <line x1="36" y1="36" x2="36" y2="54" stroke="#FFFFFF" strokeWidth="1.2" />
                  <line x1="27" y1="45" x2="45" y2="45" stroke="#FFFFFF" strokeWidth="1.2" />
                  <circle cx="36" cy="45" r="2.8" fill="#EC4899" />
                </g>
                <g className="wheel-rotate">
                  <circle cx="120" cy="45" r="9" fill="#020617" stroke="#F8FAFC" strokeWidth="2.2" />
                  <circle cx="120" cy="45" r="6" fill="url(#hyperRim)" />
                  <line x1="120" y1="36" x2="120" y2="54" stroke="#FFFFFF" strokeWidth="1.2" />
                  <line x1="111" y1="45" x2="129" y2="45" stroke="#FFFFFF" strokeWidth="1.2" />
                  <circle cx="120" cy="45" r="2.8" fill="#EC4899" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Micro-Message Footer Banner */}
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
