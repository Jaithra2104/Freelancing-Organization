import { useEffect } from 'react';
import LegalHero from './components/LegalHero';
import SummaryCard from './components/SummaryCard';
import PolicyAccordion from './components/PolicyAccordion';
import ContactCard from './components/ContactCard';
import CTASection from './components/CTASection';
import { FiLock, FiEyeOff, FiMessageCircle, FiBriefcase, FiHardDrive, FiTarget } from 'react-icons/fi';
import './Legal.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const summaryItems = [
    { title: 'Your Information Is Secure', icon: <FiLock /> },
    { title: 'No Selling of Personal Data', icon: <FiEyeOff /> },
    { title: 'Communication Only', icon: <FiMessageCircle /> },
    { title: 'Confidential Projects', icon: <FiBriefcase /> },
    { title: 'Secure Storage', icon: <FiHardDrive /> },
    { title: 'Transparency', icon: <FiTarget /> }
  ];

  return (
    <div className="legal-page-container">
      <div className="legal-bg-glow"></div>
      <div className="legal-bg-grid"></div>

      <div className="legal-content-wrapper">
        <LegalHero 
          title="Privacy Policy"
          description="At VYUHA TECH, your privacy matters. This page explains how we collect, use, and protect your information whenever you interact with our website or our services."
          effectiveDate="January 1, 2026"
        />

        <div className="legal-summary-grid">
          {summaryItems.map((item, index) => (
            <SummaryCard key={index} title={item.title} icon={item.icon} index={index} />
          ))}
        </div>

        <div className="legal-content-container">
          <PolicyAccordion title="1. Who We Are" index={0}>
            <p>We are VYUHA TECH, a software development agency specializing in custom web platforms, mobile applications, and AI integrations. We are committed to maintaining the trust and confidence of our clients and website visitors.</p>
          </PolicyAccordion>

          <PolicyAccordion title="2. Information We Collect" index={1}>
            <p>We only collect information necessary to provide our services effectively. This may include your name, email address, phone number, and project-specific details provided through our contact forms or during consultations.</p>
          </PolicyAccordion>

          <PolicyAccordion title="3. How We Use Your Information" index={2}>
            <p>Your information is used strictly to understand your project requirements, communicate effectively regarding your project status, and provide the services you have requested.</p>
          </PolicyAccordion>

          <PolicyAccordion title="4. Information Security" index={3}>
            <p>We implement industry-standard security measures to protect your personal and project information from unauthorized access, alteration, disclosure, or destruction.</p>
          </PolicyAccordion>

          <PolicyAccordion title="5. No Selling of Personal Information" index={4}>
            <p>We do not and will never sell, rent, or trade your personal information or project details to any third parties for marketing purposes.</p>
          </PolicyAccordion>

          <PolicyAccordion title="6. Communication" index={5}>
            <p>We will only contact you regarding your project, inquiries, or essential service updates. You will not receive unsolicited promotional emails from us unless you explicitly opt-in.</p>
          </PolicyAccordion>

          <PolicyAccordion title="7. Cookies" index={6}>
            <p>Our website uses essential cookies to ensure proper functionality and performance. For detailed information, please review our comprehensive Cookie Policy.</p>
          </PolicyAccordion>

          <PolicyAccordion title="8. Third-Party Services" index={7}>
            <p>We may use trusted third-party services (like hosting providers or payment processors) to deliver our services. These partners are bound by strict confidentiality agreements and data protection standards.</p>
          </PolicyAccordion>

          <PolicyAccordion title="9. Client Project Confidentiality" index={8}>
            <p>All project discussions, source code, business logic, and proprietary information shared with VYUHA TECH remain strictly confidential. We are happy to sign NDAs for custom projects.</p>
          </PolicyAccordion>

          <PolicyAccordion title="10. Project Ownership" index={9}>
            <p>Upon final payment and project completion, all agreed-upon intellectual property, source code, and assets are transferred entirely to you, the client.</p>
          </PolicyAccordion>

          <PolicyAccordion title="11. Data Retention" index={10}>
            <p>We retain your information only as long as necessary to fulfill the purposes outlined in this privacy policy, or as required by law for tax and accounting purposes.</p>
          </PolicyAccordion>

          <PolicyAccordion title="12. Your Rights" index={11}>
            <p>You have the right to request access to, correction of, or deletion of your personal data stored by us. To exercise these rights, please contact our support team.</p>
          </PolicyAccordion>
        </div>

        <ContactCard />
        <CTASection />
      </div>
    </div>
  );
}
