import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Plasma from './components/Plasma';
import CountUp from './components/CountUp';
import ScrollReveal from './components/ScrollReveal';
import SplitText from './components/SplitText';
import LogoLoop from './components/LogoLoop';
import PillNav from './components/PillNav';
import Lanyard from './components/Lanyard';
import ProfileCard from './components/ProfileCard';
import StrokeText from './components/StrokeText';
import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage';
import ServicesPage from './pages/Services/ServicesPage';
import PricingPage from './pages/Pricing/PricingPage';
import ProductsPage from './pages/Products/ProductsPage';
import {
  SiReact, SiNextdotjs, SiTypescript, SiPython, SiRust,
  SiDocker, SiKubernetes, SiTerraform, SiGraphql,
  SiPostgresql, SiRedis, SiGithub, SiGooglecloud, SiMongodb,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import './index.css';

// Services variable extracted to ServicesPage.jsx

// Products array extracted to ProductsPage

// Stats variable extracted to ServicesPage.jsx

const team = [
  {
    initials: 'AK',
    name: 'Arjun Kapoor',
    role: 'CEO & Co-Founder',
    bio: 'Former Google Brain researcher with 12 years in AI systems and enterprise software.',
    avatarUrl: '/avatars/jaithra.jpeg',
    handle: 'arjun_ai',
    status: 'Building',
    behindGlowColor: 'rgba(167, 139, 250, 0.5)'
  },
  {
    initials: 'PR',
    name: 'Priya Rajan',
    role: 'CTO',
    bio: 'Ex-Amazon Principal Engineer. Architect of three unicorn-scale infrastructure systems.',
    avatarUrl: '/avatars/pr.png',
    handle: 'priya_cto',
    status: 'Scaling',
    behindGlowColor: 'rgba(236, 72, 153, 0.5)'
  },
  {
    initials: 'SM',
    name: 'Sophia Müller',
    role: 'Chief Product Officer',
    bio: 'Led product at Stripe and Figma. Passionate about developer experience and design systems.',
    avatarUrl: '/avatars/sm.png',
    handle: 'sophia_cpo',
    status: 'Designing',
    behindGlowColor: 'rgba(245, 158, 11, 0.5)'
  },
  {
    initials: 'DN',
    name: 'Daniel Nwosu',
    role: 'VP of Engineering',
    bio: 'Distributed systems expert. Built real-time platforms processing 50M events/day.',
    avatarUrl: '/avatars/dn.png',
    handle: 'daniel_vp',
    status: 'Optimizing',
    behindGlowColor: 'rgba(59, 130, 246, 0.5)'
  }
];

function App() {
  const location = useLocation();
  const activeSection = location.pathname;

  // Sync scroll to top on route change for smooth user transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'SERVICES', href: '/services' },
    { label: 'DOMAINS', href: '/domains' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'PRICING', href: '/pricing' },
    { label: 'ABOUT', href: '/about' },
    { label: 'TEAM', href: '/team' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <>
      <PillNav
        logo="/favicon.svg"
        logoAlt="NexaraAI"
        items={navItems}
        activeHref={activeSection}
        baseColor="#ffffff"
        pillColor="#120F17"
        hoveredPillTextColor="#120F17"
        pillTextColor="#ffffff"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/domains" element={<DomainsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* ── FOOTER ── */}
      {location.pathname !== '/' && (
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-logo">
              <span className="footer-logo-icon">⬡</span>
              <span className="footer-logo-text">Nexara<span>AI</span></span>
            </div>
            <p className="footer-copy">© 2025 NexaraAI, Inc. All rights reserved.</p>
            <div className="footer-socials">
              {['𝕏', 'in', 'gh', '▶'].map((s, i) => (
                <a key={i} href="#" className="social-btn">{s}</a>
              ))}
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

// ── PAGE WRAPPER ──
function PageWrapper({ children, className = '' }) {
  return (
    <div className={`page-wrapper ${className}`.trim()}>
      {children}
    </div>
  );
}

// ── HOME PAGE is imported from ./pages/Home/HomePage ──

// ── SERVICES PAGE is imported from ./pages/Services/ServicesPage ──

// ── DOMAINS PAGE ──
function DomainsPage() {
  return (
    <PageWrapper className="domains-page">
      <div style={{ padding: '150px 20px', textAlign: 'center', color: '#fff' }}>
        <h2>Domains Page Coming Soon</h2>
      </div>
    </PageWrapper>
  );
}

// ── PRODUCTS PAGE is imported from ./pages/Products/ProductsPage ──

// ── ABOUT PAGE is imported from ./pages/About/AboutPage ──

// ── TEAM PAGE ──
function TeamPage() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <PageWrapper className="team-page">
      <section className="team" id="team">
        <div className="section-inner">
          <span className="section-label">The Team</span>
          <div className="team-heading-wrap">
            <SplitText
              text="Built by World-Class Engineers"
              tag="h2"
              className="section-title team-split-heading"
              delay={30}
              duration={0.9}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50, rotateX: -40 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.2}
              rootMargin="-60px"
              textAlign="left"
            />
          </div>

          <div className="team-desc-wrap">
            <SplitText
              text="Our team brings together talent from Google, Amazon, Stripe, and top research labs around the world."
              tag="p"
              className="section-desc team-split-desc"
              delay={18}
              duration={0.7}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.15}
              rootMargin="-40px"
              textAlign="left"
            />
          </div>

          <div className="team-rows">
            {team.map((m, idx) => {
              const isEven = idx % 2 === 0;
              const infoCard = (
                <div key={`${m.name}-info`} className="team-info-card-wrapper" style={{ width: '100%', maxWidth: '380px', margin: '0 auto' }}>
                  <ProfileCard
                    name={m.name}
                    title={m.role}
                    handle={m.handle}
                    status={m.status}
                    avatarUrl={m.avatarUrl}
                    miniAvatarUrl={m.avatarUrl}
                    contactText="Send Message"
                    behindGlowColor={m.behindGlowColor}
                    enableTilt={!isMobile}
                    enableMobileTilt={false}
                  />
                </div>
              );

              const lanyardCard = isMobile ? null : (
                <div key={`${m.name}-lanyard`} className="team-lanyard-container">
                  <Lanyard
                    position={[0, 0, 12]}
                    gravity={[0, -35, 0]}
                    frontImage={m.avatarUrl}
                    backImage="/favicon.svg"
                    imageFit="cover"
                    lanyardWidth={0.8}
                  />
                </div>
              );

              return (
                <div key={m.name} className={`team-row ${isEven ? 'row-even' : 'row-odd'}`}>
                  {isEven ? (
                    <>
                      {infoCard}
                      {lanyardCard}
                    </>
                  ) : (
                    <>
                      {lanyardCard}
                      {infoCard}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

// ── CONTACT PAGE ──
function ContactPage() {
  return (
    <PageWrapper className="contact-page">
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="contact-wrapper">
            <div className="contact-info">
              <span className="section-label">Get In Touch</span>
              <h2>
                Ready to build<br />something <span>extraordinary?</span>
              </h2>
              <p>
                Whether you&apos;re a startup exploring AI or an enterprise ready to scale,
                our team is ready to help you move fast and build right.
              </p>
              <div className="contact-links">
                <div className="contact-link-item">
                  <div className="icon">📧</div>
                  <span>hello@nexaraai.io</span>
                </div>
                <div className="contact-link-item">
                  <div className="icon">📍</div>
                  <span>San Francisco, CA · London · Bangalore</span>
                </div>
                <div className="contact-link-item">
                  <div className="icon">🗓️</div>
                  <span>Book a demo — 30-minute call, no pressure</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input id="fname" type="text" placeholder="Arjun" />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input id="lname" type="text" placeholder="Kapoor" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input id="email" type="email" placeholder="arjun@company.com" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="Acme Corp" />
              </div>
              <div className="form-group">
                <label htmlFor="interest">What are you interested in?</label>
                <select id="interest">
                  <option value="">Select a service...</option>
                  <option>AI & Machine Learning</option>
                  <option>Cloud Infrastructure</option>
                  <option>NexaBot Platform</option>
                  <option>SynthOS</option>
                  <option>PulseEdge</option>
                  <option>Custom Engagement</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Tell us about your project or challenge..." />
              </div>
              <button type="submit" className="btn-submit">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default App;
