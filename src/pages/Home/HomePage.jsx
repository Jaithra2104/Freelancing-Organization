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
            colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
            backgroundColor="#0A29FF"
            speed={0.5}
            streakCount={2}
            streakWidth={1}
            streakLength={1}
            glow={1}
            density={0.6}
            twinkle={1}
            zoom={3}
            backgroundGlow={0.5}
            opacity={1}
            mouseInteraction
            mouseStrength={0.5}
            mouseRadius={1}
            color1="#A6C8FF"
            color2="#5227FF"
            color3="#FF9FFC"
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
