import { motion, AnimatePresence } from 'motion/react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import { FiShield } from 'react-icons/fi';
import './CookieConsentBanner.css';

export default function CookieConsentBanner() {
  const { hasChosen, acceptAll, rejectOptional, openPreferencesModal } = useCookieConsent();

  if (hasChosen) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="cookie-consent-banner-wrapper"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.98 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="cookie-banner-content">
          <div className="cookie-banner-text-group">
            <div className="cookie-banner-header">
              <div className="cookie-shield-icon"><FiShield /></div>
              <h3 id="cookie-banner-title">Privacy &amp; Cookie Settings</h3>
            </div>
            <p id="cookie-banner-desc" className="cookie-banner-desc">
              We value your privacy. We use essential cookies to keep VYUHA_TECH working and, with your permission, analytics cookies to understand how visitors use our website and improve their experience.
            </p>
          </div>

          <div className="cookie-banner-actions">
            <button 
              type="button" 
              className="btn-cookie-primary"
              onClick={acceptAll}
            >
              Accept All
            </button>

            <button 
              type="button" 
              className="btn-cookie-secondary"
              onClick={rejectOptional}
            >
              Reject Optional
            </button>

            <button 
              type="button" 
              className="btn-cookie-outline"
              onClick={openPreferencesModal}
            >
              Customize
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
