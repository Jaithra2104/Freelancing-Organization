import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { referralConfig } from '../PricingData';

export default function ReferAndEarn() {
  const [isOpen, setIsOpen] = useState(false);

  if (!referralConfig.enabled) return null;

  const steps = [
    { num: '1', title: 'YOU REFER A BUSINESS', desc: 'Introduce us to a business owner' },
    { num: '2', title: 'THEY PURCHASE A WEBSITE', desc: 'We deliver their website' },
    { num: '3', title: 'YOU EARN 10% CREDIT', desc: `Get ${referralConfig.rewardPercent}% of their project value` },
    { num: '4', title: 'USE IT ON YOUR NEXT PROJECT', desc: `Save up to ${referralConfig.maxCreditPercent}% on your next build` }
  ];

  return (
    <motion.div 
      className="refer-earn-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="refer-glow"></div>
      
      <div className="refer-header">
        <span className="refer-emoji">🤝</span>
        <h2 className="refer-title">REFER & EARN</h2>
      </div>

      <h3 className="refer-subtitle">
        Refer a business. Earn {referralConfig.rewardPercent}% credit.
      </h3>

      <p className="refer-desc">
        Refer a new customer to VYUHA TECH and receive {referralConfig.rewardPercent}% of their successfully completed project value as credit toward your next project with us.
      </p>

      {/* Example Box */}
      <div className="refer-example-box">
        <span className="example-badge">EXAMPLE</span>
        <div className="example-text">
          Refer a <strong>₹30,000</strong> project <span className="example-arrow">→</span> Earn <strong>₹3,000</strong> referral credit.
        </div>
      </div>

      {/* Visual Step Flow */}
      <div className="refer-flow-container">
        {steps.map((step, idx) => (
          <div key={idx} className="refer-flow-step-wrapper">
            <div className="refer-flow-step">
              <div className="step-number">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
            {idx < steps.length - 1 && (
              <div className="step-connector">
                <span className="connector-arrow">→</span>
                <span className="connector-arrow-down">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Accordion Terms */}
      <div className="refer-terms-container">
        <button 
          className="refer-terms-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          Referral Program Terms {isOpen ? '▲' : '▼'}
        </button>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="refer-terms-content-wrapper"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="refer-terms-list">
                <li>The referral must be a <strong>new VYUHA TECH customer</strong>.</li>
                <li>The referred customer must successfully purchase a website/service.</li>
                <li>Referral credit is applied <strong>only after the referred customer's payment is received</strong>.</li>
                <li>Referral reward is <strong>{referralConfig.rewardPercent}% of the successfully completed referred project value</strong>.</li>
                <li>Referral credit can be used toward the referrer's <strong>next project/service</strong>.</li>
                <li>Referral credit <strong>cannot be exchanged for cash</strong>.</li>
                <li>Multiple successful referrals are allowed.</li>
                <li>Total referral credit can be capped at <strong>{referralConfig.maxCreditPercent}% of the next project's value</strong>.</li>
                <li>Self-referrals or duplicate/fake referrals are not eligible.</li>
                <li>Referral rewards cannot be combined with other discounts unless approved by VYUHA TECH.</li>
                <li>VYUHA TECH reserves the right to modify or discontinue the referral program.</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
