import { motion } from 'motion/react';
import { launchConfig } from '../PricingData';

export default function LaunchOfferBanner() {
  if (!launchConfig.enabled) return null;

  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('pricing-cards');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      className="launch-offer-banner"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="banner-glow-effect"></div>
      
      <div className="banner-top-badge">
        <span className="badge-pulse"></span>
        LIMITED AVAILABILITY
      </div>

      <h2 className="banner-heading">
        🎉 EARLY CLIENT LAUNCH OFFER
      </h2>
      
      <div className="banner-discount-value">
        GET {launchConfig.discountPercent}% OFF
      </div>

      <p className="banner-description">
        Start your digital journey with VYUHA TECH and get {launchConfig.discountPercent}% OFF on any website package.
      </p>

      <div className="banner-urgency-row">
        <span>🟢 Available for our first {launchConfig.maxClients} clients</span>
        <span className="urgency-divider">•</span>
        <strong className="urgency-spots">{launchConfig.spotsAvailable} Launch Spots Available</strong>
      </div>

      <a href="#pricing-cards" onClick={handleScroll} className="banner-cta-btn">
        Claim Launch Offer →
      </a>
    </motion.div>
  );
}
