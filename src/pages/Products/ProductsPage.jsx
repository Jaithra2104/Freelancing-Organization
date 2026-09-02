import { useEffect } from 'react';
import { motion } from 'motion/react';
import SEO from '../../components/SEO';
import StrokeText from '../../components/StrokeText';

import { industryDemos } from './ProductsData';
import IndustryShowcaseCards from './components/IndustryShowcaseCards';

import './ProductsPage.css';

export default function ProductsPage() {
  // Sync scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const productsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.vyuhatech.site/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Demo Showcase',
        'item': 'https://www.vyuhatech.site/products'
      }
    ]
  };

  return (
    <div className="products-page-container">
      <SEO
        title="Our Projects & Demo Showcase | VyuhaTech"
        description="Explore VyuhaTech's live demo showcase and custom website solutions across business industries, featuring Basic, Pro, Premium, and Ultra website plans."
        canonicalPath="/products"
        schema={productsSchema}
      />
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
          
          <h1 className="visually-hidden">Our Projects &amp; Live Website Demos</h1>

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
