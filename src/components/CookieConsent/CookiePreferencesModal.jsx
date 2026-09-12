import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import { FiX, FiCheckCircle, FiBarChart2, FiTag, FiLock } from 'react-icons/fi';
import './CookiePreferencesModal.css';

export default function CookiePreferencesModal() {
  const { consent, isModalOpen, closeModal, savePreferences } = useCookieConsent();
  const [analytics, setAnalytics] = useState(false);
  const modalRef = useRef(null);

  // Sync internal modal toggle state when modal opens or consent changes
  useEffect(() => {
    if (consent) {
      setAnalytics(Boolean(consent.analytics));
    }
  }, [consent, isModalOpen]);

  // Accessibility: Handle ESC key & body scroll lock
  useEffect(() => {
    if (!isModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) {
    return null;
  }

  const handleSave = () => {
    savePreferences({ analytics, marketing: false });
  };

  return (
    <AnimatePresence>
      <div 
        className="cookie-modal-backdrop"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <motion.div 
          className="cookie-modal-dialog"
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="cookie-modal-header">
            <div>
              <h2 id="cookie-modal-title">Cookie Preferences</h2>
              <p className="cookie-modal-subtitle">Manage how cookies are used on VYUHA_TECH.</p>
            </div>
            <button 
              type="button" 
              className="cookie-modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FiX />
            </button>
          </div>

          {/* Body Categories */}
          <div className="cookie-modal-body">

            {/* Category 1: Essential */}
            <div className="cookie-category-item">
              <div className="category-header">
                <div className="category-title-wrap">
                  <span className="category-icon essential-icon"><FiLock /></span>
                  <div>
                    <h4>Essential Cookies</h4>
                    <span className="status-badge status-always-active">Always Active</span>
                  </div>
                </div>
                <div className="toggle-switch disabled-toggle">
                  <input type="checkbox" checked disabled readOnly aria-label="Essential Cookies Always Active" />
                  <span className="slider round"></span>
                </div>
              </div>
              <p className="category-desc">
                These cookies are required for the website to function properly and cannot be disabled.
              </p>
            </div>

            {/* Category 2: Analytics */}
            <div className="cookie-category-item">
              <div className="category-header">
                <div className="category-title-wrap">
                  <span className="category-icon analytics-icon"><FiBarChart2 /></span>
                  <div>
                    <h4>Analytics Cookies</h4>
                    <span className="status-badge status-optional">Optional</span>
                  </div>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    aria-label="Toggle Analytics Cookies"
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <p className="category-desc">
                These cookies help us understand how visitors use our website so we can improve the experience.
              </p>
            </div>

            {/* Category 3: Marketing (Not Used) */}
            <div className="cookie-category-item">
              <div className="category-header">
                <div className="category-title-wrap">
                  <span className="category-icon marketing-icon"><FiTag /></span>
                  <div>
                    <h4>Marketing Cookies</h4>
                    <span className="status-badge status-not-used">Not Used</span>
                  </div>
                </div>
                <div className="toggle-switch disabled-toggle">
                  <input type="checkbox" checked={false} disabled readOnly aria-label="Marketing Cookies Not Used" />
                  <span className="slider round"></span>
                </div>
              </div>
              <p className="category-desc">
                No marketing or advertising cookies are currently used by VYUHA_TECH.
              </p>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="cookie-modal-footer">
            <button 
              type="button"
              className="btn-modal-save"
              onClick={handleSave}
            >
              <FiCheckCircle /> Save Preferences
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
