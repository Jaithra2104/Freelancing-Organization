import { useEffect } from 'react';
import LegalHero from './components/LegalHero';
import SummaryCard from './components/SummaryCard';
import PolicyAccordion from './components/PolicyAccordion';
import ContactCard from './components/ContactCard';
import CTASection from './components/CTASection';
import { FiRefreshCcw, FiCheckSquare, FiShield, FiShoppingCart, FiCode, FiLifeBuoy } from 'react-icons/fi';
import './Legal.css';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const summaryItems = [
    { title: 'Transparent Refund Policy', icon: <FiRefreshCcw /> },
    { title: 'Fair Project Evaluation', icon: <FiCheckSquare /> },
    { title: 'Secure Payments', icon: <FiShield /> },
    { title: 'Third-Party Purchases', icon: <FiShoppingCart /> },
    { title: 'Custom Development', icon: <FiCode /> },
    { title: 'Client Support', icon: <FiLifeBuoy /> }
  ];

  return (
    <div className="legal-page-container">
      <div className="legal-bg-glow"></div>
      <div className="legal-bg-grid"></div>

      <div className="legal-content-wrapper">
        <LegalHero 
          title="Refund & Cancellation Policy"
          description="We believe in fair and transparent business practices. This policy explains how cancellations and refunds are handled."
          effectiveDate="January 1, 2026"
        />

        <div className="legal-summary-grid">
          {summaryItems.map((item, index) => (
            <SummaryCard key={index} title={item.title} icon={item.icon} index={index} />
          ))}
        </div>

        <div className="legal-content-container">
          <PolicyAccordion title="1. Project Cancellation Before Work Begins" index={0}>
            <p>If you choose to cancel your project after signing the agreement but before any design or development work has commenced, you are eligible for a full refund of your initial deposit, minus any transaction fees.</p>
          </PolicyAccordion>

          <PolicyAccordion title="2. Cancellation After Development Begins" index={1}>
            <p>Once design or development work has officially started, refunds will be calculated based on the amount of work completed. We will evaluate the hours spent and deliverables created up to the point of cancellation to determine if a partial refund is applicable.</p>
          </PolicyAccordion>

          <PolicyAccordion title="3. Completed Projects" index={2}>
            <p>Due to the custom nature of software and web development, we do not offer refunds for projects that have been completed and delivered according to the agreed-upon specifications.</p>
          </PolicyAccordion>

          <PolicyAccordion title="4. Domain & Hosting Purchases" index={3}>
            <p>Payments made for third-party services such as domain name registrations, web hosting, or premium plugins are strictly non-refundable, as these are registered directly in your name.</p>
          </PolicyAccordion>

          <PolicyAccordion title="5. Custom Development" index={4}>
            <p>For large-scale custom applications billed in milestones, payments for completed and approved milestones are non-refundable. You may cancel future unstarted milestones without penalty.</p>
          </PolicyAccordion>

          <PolicyAccordion title="6. Client Delays" index={5}>
            <p>If a project is delayed for more than 60 days due to a lack of feedback or missing assets from the client, VYUHA TECH reserves the right to pause or cancel the project. Deposits in such abandoned projects are non-refundable.</p>
          </PolicyAccordion>

          <PolicyAccordion title="7. Exceptional Cases" index={6}>
            <p>We handle exceptional circumstances on a case-by-case basis. If you are unsatisfied with our service at any point, please reach out to management immediately so we can find a fair resolution.</p>
          </PolicyAccordion>

          <PolicyAccordion title="8. Contact" index={7}>
            <p>To request a cancellation or discuss a refund, please contact your project manager or email our billing department directly.</p>
          </PolicyAccordion>
        </div>

        <ContactCard />
        <CTASection />
      </div>
    </div>
  );
}
