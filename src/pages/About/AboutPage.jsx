import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import './AboutPage.css';
import StrokeText from '../../components/StrokeText';
import StorySection from './components/StorySection';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import JourneyTimeline from './components/JourneyTimeline';
import Statistics from './components/Statistics';
import WhyChooseUs from './components/WhyChooseUs';
import WorkspaceGallery from './components/WorkspaceGallery';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-container">
      {/* 1. Hero Section */}
      <section className="section-container about-hero">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ About VYUHA TECH
        </motion.div>
        
        <StrokeText
          text="About Us"
          strokeColor="#A78BFA"
          fillColor="#F8FAFC"
          strokeWidth={1.4}
          drawDuration={1.6}
          fillDelay={0.2}
          stagger={0.05}
          ease="power2.out"
          trigger="mount"
          fillMode="wipe"
          fontSize={120}
          fontWeight={800}
          letterSpacing={-4}
          className="about-stroke-heading"
        />

        <motion.p 
          className="about-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We are a passionate team of developers, designers, and technology enthusiasts dedicated to helping businesses establish a powerful digital presence through premium websites, SaaS platforms, AI solutions, and business automation.
        </motion.p>
      </section>

      <StorySection />
      <MissionVision />
      <CoreValues />
      <JourneyTimeline />
      <Statistics />
      <WhyChooseUs />
      <WorkspaceGallery />

      {/* 10. Bottom CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <motion.h2 
            className="text-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Whether you're launching a new business, modernizing an existing one, or looking for a complete digital transformation, we're here to help.
          </motion.p>
          
          <motion.div 
            className="cta-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact" className="btn-primary">Start Your Project</Link>
            <Link to="/products" className="btn-secondary">View Our Work</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
