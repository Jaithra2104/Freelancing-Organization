import { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'vyuha_tech_cookie_consent';
const CONSENT_VERSION = '1.0';
const GA_MEASUREMENT_ID = 'G-4DHJYQFHJ4';

const CookieConsentContext = createContext();

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(null);
  const [hasChosen, setHasChosen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Synchronize Google Analytics GTAG consent state
  const syncAnalyticsConsent = (analyticsGranted) => {
    if (typeof window !== 'undefined') {
      window[`ga-disable-${GA_MEASUREMENT_ID}`] = !analyticsGranted;
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          analytics_storage: analyticsGranted ? 'granted' : 'denied',
          ad_storage: 'denied',
        });
      }
    }
  };

  // Initialize consent state from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.version === CONSENT_VERSION) {
          setConsent(parsed);
          setHasChosen(true);
          syncAnalyticsConsent(Boolean(parsed.analytics));
          return;
        }
      }
    } catch (err) {
      console.warn('Could not read cookie consent from localStorage', err);
    }

    // Default unconsented state
    const defaultState = {
      essential: true,
      analytics: false,
      marketing: false,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString()
    };
    setConsent(defaultState);
    setHasChosen(false);
    syncAnalyticsConsent(false);
  }, []);

  const saveConsentState = (newConsent) => {
    const updated = {
      essential: true,
      analytics: Boolean(newConsent.analytics),
      marketing: Boolean(newConsent.marketing),
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString()
    };

    setConsent(updated);
    setHasChosen(true);
    syncAnalyticsConsent(updated.analytics);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('Could not save cookie consent to localStorage', err);
    }
  };

  const acceptAll = () => {
    saveConsentState({ analytics: true, marketing: false });
    setIsModalOpen(false);
  };

  const rejectOptional = () => {
    saveConsentState({ analytics: false, marketing: false });
    setIsModalOpen(false);
  };

  const savePreferences = (preferences) => {
    saveConsentState(preferences);
    setIsModalOpen(false);
  };

  const openPreferencesModal = () => {
    setIsModalOpen(true);
  };

  const closePreferencesModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasChosen,
        isModalOpen,
        acceptAll,
        rejectOptional,
        savePreferences,
        openPreferencesModal,
        closePreferencesModal
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
