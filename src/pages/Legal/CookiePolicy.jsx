import { useEffect } from 'react';
import LegalHero from './components/LegalHero';
import SummaryCard from './components/SummaryCard';
import PolicyAccordion from './components/PolicyAccordion';
import ContactCard from './components/ContactCard';
import CTASection from './components/CTASection';
import { FiCheckCircle, FiTrendingUp, FiSliders, FiBarChart2, FiShield, FiSettings } from 'react-icons/fi';
import './Legal.css';

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const summaryItems = [
    { title: 'Essential Cookies', icon: <FiCheckCircle /> },
    { title: 'Performance Cookies', icon: <FiTrendingUp /> },
    { title: 'Preference Cookies', icon: <FiSliders /> },
    { title: 'Analytics', icon: <FiBarChart2 /> },
    { title: 'Secure Browsing', icon: <FiShield /> },
    { title: 'Cookie Control', icon: <FiSettings /> }
  ];

  return (
    <div className="legal-page-container">
      <div className="legal-bg-glow"></div>
      <div className="legal-bg-grid"></div>

      <div className="legal-content-wrapper">
        <LegalHero 
          title="Cookie Policy"
          description="This page explains how cookies help improve your browsing experience while using our website."
          effectiveDate="January 1, 2026"
        />

        <div className="legal-summary-grid">
          {summaryItems.map((item, index) => (
            <SummaryCard key={index} title={item.title} icon={item.icon} index={index} />
          ))}
        </div>

        <div className="legal-content-container">
          <PolicyAccordion title="1. Introduction" index={0}>
            <p>This Cookie Policy explains what cookies are, how we use them on the VYUHA TECH website, and the choices you have regarding their use.</p>
          </PolicyAccordion>

          <PolicyAccordion title="2. What Are Cookies" index={1}>
            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help the website remember your actions and preferences over a period of time.</p>
          </PolicyAccordion>

          <PolicyAccordion title="3. Why We Use Cookies" index={2}>
            <p>We use cookies to ensure our website functions correctly, to understand how visitors interact with our site, and to provide a secure and personalized browsing experience.</p>
          </PolicyAccordion>

          <PolicyAccordion title="4. Types of Cookies" index={3}>
            <p><strong>Essential Cookies:</strong> Required for the basic operation of our website.<br/><br/>
            <strong>Performance Cookies:</strong> Help us improve our website by tracking how users navigate through it.<br/><br/>
            <strong>Preference Cookies:</strong> Allow our website to remember choices you make, such as language or region.</p>
          </PolicyAccordion>

          <PolicyAccordion title="5. Third-Party Cookies" index={4}>
            <p>In addition to our own cookies, we may also use various third-party cookies (such as Google Analytics) to report usage statistics and deliver secure experiences.</p>
          </PolicyAccordion>

          <PolicyAccordion title="6. Managing Cookies" index={5}>
            <p>You can control and/or delete cookies as you wish. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.</p>
          </PolicyAccordion>

          <PolicyAccordion title="7. Changes to Policy" index={6}>
            <p>We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.</p>
          </PolicyAccordion>

          <PolicyAccordion title="8. Contact" index={7}>
            <p>If you have any questions about our use of cookies, please do not hesitate to contact us.</p>
          </PolicyAccordion>
        </div>

        <ContactCard />
        <CTASection />
      </div>
    </div>
  );
}
