import { useEffect } from 'react';
import { motion } from 'motion/react';
import StrokeText from '../../components/StrokeText';

import { industryDemos } from './ProductsData';
import IndustryShowcaseCards from './components/IndustryShowcaseCards';

import './ProductsPage.css';

export default function ProductsPage() {
  // Sync scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="products-page-container">
      {/* Background Enhancements */}
      <div className="products-bg-glow"></div>
      <div className="products-bg-grid"></div>

      <div className="products-content-wrapper">
        {/* Header Section */}
        <header className="products-header">
          <motion.div 
            className="products-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ✨ Live Demo Showcase
          </motion.div>
          
          <StrokeText
            text="Explore Website Solutions Built for Your Business"
            strokeColor="#A78BFA"
            fillColor="#F8FAFC"
            strokeWidth={1.4}
            drawDuration={1.6}
            fillDelay={0.2}
            stagger={0.05}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={72}
            fontWeight={800}
            letterSpacing={-2}
            className="products-stroke-heading"
          />
          
          <motion.p 
            className="products-desc-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Check our work for easy understanding. Every business category includes four website plans—Basic, Pro, Premium, and Ultra. Click on a folder below to explore the live demos.
          </motion.p>
        </header>

        {/* Showcase Grid */}
        <IndustryShowcaseCards industries={industryDemos} />
      </div>
    </div>
  );
}
