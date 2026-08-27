import { useEffect } from 'react';
import { motion } from 'motion/react';
import Lightfall from '../../components/Lightfall';

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
      <section className="hero">
        
        {/* Background Layer 0: Lightfall */}
        <div className="hero__plasma-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Lightfall
            colors={['#7C3AED', '#A78BFA', '#EC4899', '#1E1B4B']}
            backgroundColor="#07050F"
            speed={0.3}
            streakCount={3}
            streakWidth={0.8}
            streakLength={1.5}
            glow={0.8}
            density={0.45}
            twinkle={0.8}
            zoom={3.5}
            backgroundGlow={0.2}
            opacity={0.85}
            mouseInteraction
            mouseStrength={0.4}
            mouseRadius={0.8}
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

        {/* Content Layer 3: Premium Hero Text & Buttons */}
        <PremiumHero />

        {/* Floating Layer 2: Icons & Project Cards */}
        <FloatingIcons />
        <FloatingProjectCards />
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
