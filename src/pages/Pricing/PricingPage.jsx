import { useEffect } from 'react';
import { motion } from 'motion/react';
import StrokeText from '../../components/StrokeText';

import { pricingPlans, includedFeatures, carePlans, deliverablesList, pricingFAQs } from './PricingData';
import PricingCards from './components/PricingCards';
import LaunchOfferBanner from './components/LaunchOfferBanner';
import ReferAndEarn from './components/ReferAndEarn';
import IncludedFeatures from './components/IncludedFeatures';
import CarePlans from './components/CarePlans';
import DeliverablesList from './components/DeliverablesList';
import PricingFAQ from './components/PricingFAQ';
import PricingCTA from './components/PricingCTA';

import './PricingPage.css';

export default function PricingPage() {
  // Sync scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pricing-page-container">
      {/* Background Enhancements */}
      <div className="pricing-bg-glow"></div>
      <div className="pricing-bg-grid"></div>

      <div className="pricing-content-wrapper">
        {/* Header Section */}
        <header className="pricing-header">
          <motion.div 
            className="pricing-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ✨ Simple & Transparent Pricing
          </motion.div>
          
          <StrokeText
            text="Choose the Perfect Plan for Your Business"
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
            className="pricing-stroke-heading"
          />
          
          <motion.p 
            className="pricing-desc-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Every business is different.
            <br/><br/>
            Whether you need a simple website to showcase your business or a complete digital solution to manage your customers and daily operations, we have a plan that fits your goals.
          </motion.p>
        </header>

        {/* Components */}
        <LaunchOfferBanner />
        <PricingCards plans={pricingPlans} />
        <ReferAndEarn />
        <IncludedFeatures features={includedFeatures} />
        <CarePlans plans={carePlans} />
        <DeliverablesList list={deliverablesList} />
        <PricingFAQ faqs={pricingFAQs} />
        <PricingCTA />
      </div>
    </div>
  );
}
