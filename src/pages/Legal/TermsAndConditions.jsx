import { useEffect } from 'react';
import SEO from '../../components/SEO';
import LegalHero from './components/LegalHero';
import SummaryCard from './components/SummaryCard';
import PolicyAccordion from './components/PolicyAccordion';
import ContactCard from './components/ContactCard';
import CTASection from './components/CTASection';
import { FiCheckCircle, FiFileText, FiShield, FiDollarSign, FiZap, FiHelpCircle } from 'react-icons/fi';
import './Legal.css';

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const summaryItems = [
    { title: 'Clear Scope', icon: <FiCheckCircle /> },
    { title: 'Fair Agreements', icon: <FiFileText /> },
    { title: 'Intellectual Property Protection', icon: <FiShield /> },
    { title: 'Transparent Payment Terms', icon: <FiDollarSign /> },
    { title: 'Timely Execution', icon: <FiZap /> },
    { title: 'Support & Assistance', icon: <FiHelpCircle /> }
  ];

  return (
    <div className="legal-page-container">
      <SEO
        title="Terms and Conditions | VyuhaTech"
        description="VyuhaTech Terms and Conditions outlining project scope, intellectual property, transparent payment terms, and service agreements."
        canonicalPath="/terms-and-conditions"
      />
      <div className="legal-bg-glow"></div>
      <div className="legal-bg-grid"></div>

      <div className="legal-content-wrapper">
        <LegalHero 
          title="Terms & Conditions"
          description="These terms explain how we work with our clients to ensure a professional, transparent, and successful project experience."
          effectiveDate="January 1, 2026"
        />

        <div className="legal-summary-grid">
          {summaryItems.map((item, index) => (
            <SummaryCard key={index} title={item.title} icon={item.icon} index={index} />
          ))}
        </div>

        <div className="legal-content-container">
          <PolicyAccordion title="1. Our Services" index={0}>
            <p>VYUHA TECH provides custom software development, website design, mobile application development, and digital consulting services as outlined in individual project proposals.</p>
          </PolicyAccordion>

          <PolicyAccordion title="2. Project Quotations" index={1}>
            <p>All quotes provided by VYUHA TECH are valid for 30 days. Project scopes defined in our quotations represent the complete deliverables. Any additional features requested later will be quoted separately.</p>
          </PolicyAccordion>

          <PolicyAccordion title="3. Payments" index={2}>
            <p>Standard payment terms require a 50% upfront deposit before development begins, and the remaining 50% upon project completion and before final deployment, unless otherwise specified in your proposal.</p>
          </PolicyAccordion>

          <PolicyAccordion title="4. Project Timeline" index={3}>
            <p>Estimated timelines are provided in good faith. However, project completion dates may be adjusted if there are delays in client feedback, content delivery, or changes to the project scope.</p>
          </PolicyAccordion>

          <PolicyAccordion title="5. Client Responsibilities" index={4}>
            <p>Clients are expected to provide necessary materials, branding assets, copy, and timely feedback to ensure the project stays on schedule and meets expectations.</p>
          </PolicyAccordion>

          <PolicyAccordion title="6. Revisions" index={5}>
            <p>Each project includes a set number of revision rounds as defined in the proposal. Revisions beyond the agreed scope will be billed at our standard hourly rate.</p>
          </PolicyAccordion>

          <PolicyAccordion title="7. Ownership" index={6}>
            <p>Upon final payment, full ownership of the final deliverables, including source code and design assets, is transferred to the client. VYUHA TECH reserves the right to showcase the completed work in our portfolio.</p>
          </PolicyAccordion>

          <PolicyAccordion title="8. Website Maintenance" index={7}>
            <p>Ongoing maintenance, updates, and hosting are not included in the initial build cost unless a specific Maintenance & Care Plan is purchased.</p>
          </PolicyAccordion>

          <PolicyAccordion title="9. Third-Party Services" index={8}>
            <p>We may integrate third-party APIs, plugins, or tools. VYUHA TECH is not responsible for the future pricing, functionality changes, or discontinuation of these third-party services.</p>
          </PolicyAccordion>

          <PolicyAccordion title="10. Limitation of Liability" index={9}>
            <p>VYUHA TECH shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the developed software or websites.</p>
          </PolicyAccordion>

          <PolicyAccordion title="11. Changes to Terms" index={10}>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Continued use of our services constitutes acceptance of the updated terms.</p>
          </PolicyAccordion>

          <PolicyAccordion title="12. Contact" index={11}>
            <p>If you have any questions or concerns about these Terms & Conditions, please contact us before commencing your project.</p>
          </PolicyAccordion>
        </div>

        <ContactCard />
        <CTASection />
      </div>
    </div>
  );
}
