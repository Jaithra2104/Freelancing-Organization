import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
  FiAward, 
  FiTrendingUp, 
  FiStar, 
  FiHeadphones, 
  FiCheck, 
  FiVideo, 
  FiMessageSquare, 
  FiArrowRight, 
  FiShield, 
  FiHeart
} from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

import './ReviewsPage.css';

export default function ReviewsPage() {
  // Sync scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Be One of Our First Clients | VyuhaTech Reviews',
    'description': 'Become one of our first business clients and get the opportunity to build your digital presence, share your experience, and have your business featured with our permission.',
    'publisher': {
      '@type': 'Organization',
      'name': 'VyuhaTech',
      'url': 'https://www.vyuhatech.site'
    }
  };

  const earlyBenefits = [
    'Get your business website or digital solution built by us',
    'Receive dedicated support during your project',
    'Have your business featured on our website, with your permission',
    'Get the opportunity to share a genuine written review',
    'Get the opportunity to record a short video testimonial',
    'Help us create a real case study around your business',
    'Receive promotional visibility through our website and selected social media content',
    'Be recognized as one of our early business partners'
  ];

  const whyJoinEarly = [
    {
      icon: <FiAward />,
      title: 'Early Partner',
      desc: 'Be among the first businesses to work with us and grow alongside our journey.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Business Promotion',
      desc: 'With your permission, your business may be featured on our website and promotional content.'
    },
    {
      icon: <FiStar />,
      title: 'Real Success Story',
      desc: 'Your project can become a genuine example of how digital solutions helped your business.'
    },
    {
      icon: <FiHeadphones />,
      title: 'Direct Support',
      desc: 'Work closely with our team throughout the project and get dedicated attention.'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Tell Us About Your Business',
      desc: 'Share your business, your goals, and what you need help with.'
    },
    {
      step: '02',
      title: 'We Build Your Solution',
      desc: 'We create a digital solution designed around your business.'
    },
    {
      step: '03',
      title: 'You Share Your Experience',
      desc: "If you're happy with the result, you can voluntarily share a review or video testimonial."
    },
    {
      step: '04',
      title: 'We Showcase Your Success',
      desc: 'With your permission, we feature your business and project on our website and selected promotional channels.'
    }
  ];

  const featureElements = [
    'Business name',
    'Business category',
    'Project showcase',
    'Website link',
    'Short business description',
    'Project screenshots',
    'Client review',
    'Video testimonial',
    'Social media links'
  ];

  return (
    <div className="reviews-page-container">
      <SEO
        title="Be One of Our First Clients | VyuhaTech"
        description="Become one of our first business clients and get the opportunity to build your digital presence, share your experience, and have your business featured with our permission."
        canonicalPath="/reviews"
        schema={reviewsSchema}
      />

      {/* Background Enhancements */}
      <div className="reviews-bg-glow"></div>
      <div className="reviews-bg-grid"></div>

      <div className="reviews-content-wrapper">
        
        {/* 1. HERO SECTION */}
        <header className="reviews-header">
          <motion.div 
            className="reviews-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ✨ FIRST CLIENT OPPORTUNITY
          </motion.div>
          
          <h1 className="reviews-main-title">
            Be One of Our First Clients <span className="title-emoji">🚀</span>
          </h1>

          <motion.p 
            className="reviews-desc-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We're looking for a few local businesses to become part of our first success stories. Get your business online, share your experience with us, and we'll help showcase your business to our audience.
          </motion.p>
        </header>

        {/* 2. HONEST STAGE CARD */}
        <section className="honest-stage-section">
          <motion.div 
            className="honest-stage-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="stage-card-icon-wrap">
              <FaRocket className="stage-icon" />
            </div>
            <div className="stage-card-content">
              <h3 className="stage-card-title">We're Just Getting Started</h3>
              <p className="stage-card-text">
                We're a growing digital team building our first collection of real client success stories. Instead of showing you made-up reviews, we'd rather build something valuable with real businesses like yours.
              </p>
              <div className="honest-quote-box">
                <FiShield className="quote-shield-icon" />
                <p>
                  "We could fill this page with generic testimonials. We chose not to. We want every story here to come from a real business."
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 3. MAIN OFFER SECTION */}
        <section className="main-offer-section">
          <div className="section-header">
            <span className="offer-tag-badge">LIMITED EARLY CLIENT OFFER</span>
            <h2 className="section-title">Your Business Could Be Our Next Success Story</h2>
            <p className="section-subtitle">
              Join our first few clients and get the opportunity to have your business featured as one of our early success stories.
            </p>
          </div>

          <div className="offer-hero-card">
            <div className="offer-card-glow"></div>
            <h3 className="offer-heading">Be One of Our First Clients</h3>
            <p className="offer-desc">
              As one of our early clients, you'll not only get a digital solution for your business — you'll also have the opportunity to be featured on our website and promotional content as we grow.
            </p>

            {/* 4. WHAT EARLY CLIENTS RECEIVE */}
            <div className="early-benefits-container">
              <h4 className="benefits-title">What Early Clients Receive:</h4>
              <div className="benefits-grid">
                {earlyBenefits.map((benefit, idx) => (
                  <div key={idx} className="benefit-item">
                    <span className="benefit-check"><FiCheck /></span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="voluntary-disclaimer-note">
                <FiHeart className="disclaimer-icon" />
                <span>Reviews, testimonials, and promotional showcases are completely voluntary and subject to your explicit permission.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FREE PROMOTIONAL BENEFIT */}
        <section className="promo-benefit-section">
          <div className="promo-benefit-card">
            <h3 className="promo-title">We'll Help Promote Your Business — Free</h3>
            <p className="promo-desc">
              As part of our early-client collaboration, we may feature your business and completed project on our website and selected promotional channels at no additional promotional cost, with your permission.
            </p>

            <div className="promo-flow-wrapper">
              <div className="flow-step">
                <span className="flow-num">1</span>
                <span className="flow-text">YOUR BUSINESS</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-step">
                <span className="flow-num">2</span>
                <span className="flow-text">WE BUILD YOUR DIGITAL PRESENCE</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-step">
                <span className="flow-num">3</span>
                <span className="flow-text">YOU SHARE YOUR EXPERIENCE</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-step">
                <span className="flow-num">4</span>
                <span className="flow-text">WE SHOWCASE YOUR SUCCESS</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-step highlighted-step">
                <span className="flow-num">5</span>
                <span className="flow-text">MORE PEOPLE DISCOVER YOUR BUSINESS</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. WHY JOIN US EARLY? */}
        <section className="why-early-section">
          <div className="section-header">
            <h2 className="section-title">Why Join Us Early?</h2>
            <p className="section-subtitle">
              Collaborate directly with our core engineering & design team right from day one.
            </p>
          </div>

          <div className="why-early-grid">
            {whyJoinEarly.map((item, idx) => (
              <motion.div 
                key={item.title}
                className="why-early-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="why-icon-wrap">{item.icon}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. HOW IT WORKS */}
        <section className="how-it-works-section">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple, straightforward step-by-step collaboration.</p>
          </div>

          <div className="how-steps-grid">
            {howItWorks.map((st) => (
              <div key={st.step} className="how-step-card">
                <span className="how-step-badge">STEP {st.step}</span>
                <h3 className="how-step-title">{st.title}</h3>
                <p className="how-step-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. HONEST REVIEWS EMPTY STATE */}
        <section className="honest-reviews-section">
          <div className="section-header">
            <h2 className="section-title">Our Reviews Are Just Getting Started</h2>
            <p className="section-subtitle">
              We don't want to fill this section with made-up testimonials. We want every review here to come from a real business that has actually worked with us.
            </p>
          </div>

          <div className="reviews-empty-state-card">
            <div className="empty-state-icon-wrap">
              <FiMessageSquare />
            </div>
            <h3 className="empty-state-title">Your Story Could Be Here</h3>
            <p className="empty-state-desc">
              Be one of our first clients and become part of our journey.
            </p>
            <Link to="/contact" className="empty-state-cta-btn">
              <span>Become Our First Client</span>
              <FiArrowRight />
            </Link>
          </div>
        </section>

        {/* 9. VIDEO TESTIMONIAL PLACEHOLDER */}
        <section className="video-testimonial-section">
          <div className="section-header">
            <h2 className="section-title">Want to Share Your Story?</h2>
            <p className="section-subtitle">
              If you're happy with your experience, we'd love to hear directly from you. A short video testimonial can help other business owners understand what working with us is really like.
            </p>
          </div>

          <div className="video-placeholder-card">
            <div className="video-icon-circle">
              <FiVideo />
            </div>
            <h3 className="video-placeholder-heading">YOUR VIDEO TESTIMONIAL COULD BE HERE</h3>
            <p className="video-placeholder-sub">
              Short video testimonials from our real clients will be featured here as we complete projects together.
            </p>
          </div>
        </section>

        {/* 10. GET YOUR BUSINESS FEATURED */}
        <section className="business-featured-section">
          <div className="section-header">
            <h2 className="section-title">Get Your Business Featured</h2>
            <p className="section-subtitle">
              With your permission, your completed project may be featured on our website as part of our portfolio and success stories.
            </p>
          </div>

          <div className="featured-elements-card">
            <h4 className="featured-elements-title">Potential Showcase Features Include:</h4>
            <div className="featured-elements-grid">
              {featureElements.map((elem, idx) => (
                <div key={idx} className="featured-element-chip">
                  <span className="chip-sparkle">✦</span>
                  <span>{elem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA SECTION */}
        <section className="reviews-final-cta-section">
          <div className="final-cta-card">
            <h2 className="final-cta-title">Ready to Be One of Our First Clients?</h2>
            <p className="final-cta-desc">
              Give your business a stronger online presence and become part of our journey from the beginning.
            </p>
            <div className="final-cta-buttons">
              <Link to="/contact" className="pricing-btn primary">
                Become Our First Client →
              </Link>
              <Link to="/contact" className="pricing-btn secondary">
                Talk to Us →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
