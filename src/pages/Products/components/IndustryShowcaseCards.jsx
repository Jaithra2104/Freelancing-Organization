import { motion } from 'motion/react';
import TiltMockup from '../../../components/TiltMockup';
import SplitText from '../../../components/SplitText';
import { FaCheckCircle } from 'react-icons/fa';

export default function IndustryShowcaseCards({ industries }) {
  const planNames = [
    { key: 'basic', label: 'Basic Plan' },
    { key: 'pro', label: 'Pro Plan' },
    { key: 'premium', label: 'Premium Plan' },
    { key: 'ultra', label: 'Ultra Plan' }
  ];

  return (
    <div className="showcase-cards-container">
      {industries.map((industry, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={industry.id}
            className={`showcase-fullscreen-section ${isEven ? 'section-even' : 'section-odd'}`}
          >
            {/* Background Watermark Text */}
            <motion.div 
              className="showcase-watermark"
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {industry.title.split(' ')[1].toUpperCase()}
            </motion.div>

            <div className="showcase-content-grid">
              
              {/* 3D Mockup Side */}
              <motion.div 
                className="showcase-mockup-side"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
              >
                <TiltMockup 
                  image={industry.image} 
                  title={industry.title} 
                  url={`${industry.title.replace(/[^a-zA-Z]/g, '').toLowerCase()}.demo.softnexus.com`} 
                />
              </motion.div>

              {/* Details Side */}
              <motion.div 
                className="showcase-details-side"
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="showcase-section-title">
                  <SplitText
                    text={industry.title}
                    delay={40}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.1}
                    rootMargin="-10%"
                  />
                </h3>
                <p className="showcase-section-desc">{industry.description}</p>
                
                <div className="showcase-plans-grid">
                  {planNames.map((plan, i) => {
                    const url = industry.plans[plan.key];
                    return (
                      <motion.div 
                        key={plan.key} 
                        className="plan-item"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                      >
                        <span className="plan-label">
                          <FaCheckCircle style={{ color: '#A78BFA' }} /> 
                          {plan.label}
                        </span>
                        {url ? (
                          <a href={url} target="_blank" rel="noreferrer" className="showcase-btn active">
                            View Live Demo →
                          </a>
                        ) : (
                          <button className="showcase-btn disabled" disabled>
                            Coming Soon
                          </button>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
