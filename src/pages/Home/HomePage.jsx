import { useEffect } from 'react';
import { motion } from 'motion/react';
import Plasma from '../../components/Plasma';

import './HomePage.css';
import CursorSpotlight from './components/CursorSpotlight';
import FloatingIcons from './components/FloatingIcons';
import FloatingProjectCards from './components/FloatingProjectCards';
import PremiumHero from './components/PremiumHero';
import HeroStatistics from './components/HeroStatistics';
import FeaturePills from './components/FeaturePills';
import TechnologyMarquee from './components/TechnologyMarquee';
import BusinessSelector from './components/BusinessSelector';
import SectionDivider from './components/SectionDivider';

export default function HomePage() {
  // Sync scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="home-page-container">
      {/* ── CURSOR SPOTLIGHT ── */}
      <CursorSpotlight />

      {/* ── HERO SECTION ── */}
      <section className="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Background Layer 0: Plasma */}
        <div className="hero__plasma-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Plasma
            color="#B497CF"
            speed={1}
            direction="forward"
            scale={1}
            opacity={1}
            mouseInteractive={true}
            renderScale={0.55}
            maxDpr={1.5}
            targetFps={60}
            iterations={60}
          />
        </div>

        {/* Background Layer 1: Premium Effects */}
        <div className="premium-bg-effects">
          <div className="premium-grid"></div>
          <div className="premium-noise"></div>
          <div className="blurred-shapes">
            <div className="blur-shape-1"></div>
            <div className="blur-shape-2"></div>
          </div>
        </div>

        <div className="hero__overlay" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, transparent, #0B0C10)' }} />

        {/* Floating Layer 2: Icons & Project Cards */}
        <FloatingIcons />
        <FloatingProjectCards />

        {/* Content Layer 3: Premium Hero Text & Buttons */}
        <PremiumHero />

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span>Scroll to Explore</span>
          <div className="scroll-line">
            <div className="scroll-line-fill"></div>
          </div>
        </motion.div>
      </section>

      {/* ── LOWER HERO ADDITIONS ── */}
      <div className="lower-hero-container">
        <HeroStatistics />
        <FeaturePills />
        <SectionDivider />
        <BusinessSelector />
        <SectionDivider />
      </div>
      
      {/* ── TECHNOLOGY MARQUEE ── */}
      <TechnologyMarquee />
    </div>
  );
}
