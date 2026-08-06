import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Plasma from './components/Plasma';
import CountUp from './components/CountUp';
import ScrollReveal from './components/ScrollReveal';
import SplitText from './components/SplitText';
import LogoLoop from './components/LogoLoop';
import PillNav from './components/PillNav';
import Lanyard from './components/Lanyard';
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
import {
  FiUser, FiMail, FiPhone, FiBriefcase, FiGlobe, FiCode,
  FiShoppingCart, FiTrendingUp, FiPenTool, FiCpu, FiMoreHorizontal,
  FiDollarSign, FiMessageSquare, FiCheckCircle, FiZap, FiShield, FiXCircle
} from 'react-icons/fi';
import './index.css';

// Services variable extracted to ServicesPage.jsx

// Products array extracted to ProductsPage

// Stats variable extracted to ServicesPage.jsx

const team = [
  {
    initials: 'AJ',
    name: 'Addepalli jaithra srivaatsava',
    role: 'backend architect/resource manager',
    bio: 'a good background in the backend development and building amazing websites',
    avatarUrl: '/avatars/jaithra.jpeg',
    idCardImage: '/avatars/jaithra_id.png',
    handle: 'jaithra_s',
    status: 'Building',
    behindGlowColor: 'rgba(167, 139, 250, 0.5)',
    email: 'jaithraaddepalli17@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jaithra-addepalli-510292334',
    mobile: '7702239591'
  },
  {
    initials: 'SR',
    name: 'Sukka Ruchitha',
    role: 'Marketing & Client Relations',
    bio: 'Passionate about connecting clients with innovative tech solutions. Expert in digital strategy and brand growth.',
    avatarUrl: '/avatars/jaithra.jpeg',
    idCardImage: '/avatars/jaithra_id.png',
    handle: 'ruchitha_s',
    status: 'Marketing',
    behindGlowColor: 'rgba(236, 72, 153, 0.5)',
    email: 'sukkaruchitha3@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sukka-ruchitha3/',
    mobile: '9948996686'
  },
  {
    initials: 'GS',
    name: 'Gunda Sai Teja',
    role: 'QA engineer',
    bio: 'Dedicated to delivering flawless user experiences. Specialized in automated testing and continuous integration.',
    avatarUrl: '/avatars/jaithra.jpeg',
    idCardImage: '/avatars/jaithra_id.png',
    handle: 'sai_teja',
    status: 'Testing',
    behindGlowColor: 'rgba(245, 158, 11, 0.5)',
    email: 'gundasaiteja634@gmail.com',
    linkedin: 'https://in.linkedin.com/in/sai-teja-gunda-42372b372?utm_source=chatgpt.com',
    mobile: '9398148549'
  },
  {
    initials: 'PC',
    name: 'Penda Chandini',
    role: 'Frontend/UI-UX',
    bio: 'Crafting beautiful, intuitive interfaces. Obsessed with pixel-perfect designs and engaging user journeys.',
    avatarUrl: '/avatars/jaithra.jpeg',
    idCardImage: '/avatars/jaithra_id.png',
    handle: 'chandini_p',
    status: 'Designing',
    behindGlowColor: 'rgba(59, 130, 246, 0.5)',
    email: 'chandinipenda21@gmail.com',
    linkedin: 'https://www.linkedin.com/in/penda-chandini-13b58227a?',
    mobile: '8500402096'
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
    { label: 'DEMO WEBSITES', href: '/products' },
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



// ── PRODUCTS PAGE is imported from ./pages/Products/ProductsPage ──

// ── ABOUT PAGE is imported from ./pages/About/AboutPage ──

// ── TEAM PAGE ──
function TeamPage() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

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
                <div key={`${m.name}-info`} className="team-info-card">
                  <div className="team-info-glow" style={{ background: m.behindGlowColor }} />
                  <span className="team-status-pill">
                    <span className="status-dot" /> {m.status}
                  </span>

                  <div className="team-name-split-wrap">
                    <SplitText
                      text={m.name}
                      tag="h3"
                      className="team-info-name"
                      delay={25}
                      duration={0.75}
                      ease="back.out(1.4)"
                      splitType="chars"
                      from={{ opacity: 0, y: 20 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.2}
                      textAlign="left"
                    />
                  </div>

                  <div className="team-role-split-wrap">
                    <SplitText
                      text={m.role}
                      tag="div"
                      className="team-info-role"
                      delay={20}
                      duration={0.6}
                      ease="power2.out"
                      splitType="words"
                      from={{ opacity: 0, y: 10 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.2}
                      textAlign="left"
                    />
                  </div>

                  <p className="team-info-bio">{m.bio}</p>
                  <div className="team-info-handle">@{m.handle}</div>

                  <div className="team-info-actions">
                    {m.email ? (
                      <a href={`mailto:${m.email}`} className="contact-action-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Send Message</a>
                    ) : (
                      <button className="contact-action-btn">Send Message</button>
                    )}
                    <div className="team-info-socials">
                      {m.linkedin ? (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-link">in</a>
                      ) : (
                        <a href="#" className="team-social-link">in</a>
                      )}
                      {m.mobile && (
                        <a href={`tel:${m.mobile}`} className="team-social-link">📞</a>
                      )}
                    </div>
                  </div>
                </div>
              );

              const lanyardCard = isMobile ? null : (
                <div key={`${m.name}-lanyard`} className="team-lanyard-container">
                  <Lanyard
                    position={[0, 0, 12]}
                    gravity={[0, -35, 0]}
                    frontImage={m.idCardImage || m.avatarUrl}
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
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [message, setMessage] = useState('');

  const interestsList = [
    { id: 'web-dev', label: 'Website Development', icon: <FiGlobe /> },
    { id: 'web-app', label: 'Web Application', icon: <FiCode /> },
    { id: 'ecommerce', label: 'E-commerce', icon: <FiShoppingCart /> },
    { id: 'seo', label: 'SEO & Marketing', icon: <FiTrendingUp /> },
    { id: 'uiux', label: 'UI/UX Design', icon: <FiPenTool /> },
    { id: 'automation', label: 'Automation', icon: <FiCpu /> },
    { id: 'other', label: 'Other', icon: <FiMoreHorizontal /> }
  ];

  const toggleInterest = (id) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

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

            <form className="contact-form-advanced" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name <span className="req">*</span></label>
                  <div className="input-with-icon">
                    <FiUser className="input-icon" />
                    <input id="fname" type="text" placeholder="Enter your first name" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name <span className="req">*</span></label>
                  <div className="input-with-icon">
                    <FiUser className="input-icon" />
                    <input id="lname" type="text" placeholder="Enter your last name" required />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email <span className="req">*</span></label>
                <div className="input-with-icon">
                  <FiMail className="input-icon" />
                  <input id="email" type="email" placeholder="example@company.com" required />
                </div>
                <div className="form-hint">We'll never share your email with anyone.</div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <div className="input-with-icon">
                  <FiPhone className="input-icon" />
                  <input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Business Name</label>
                <div className="input-with-icon">
                  <FiBriefcase className="input-icon" />
                  <input id="company" type="text" placeholder="Your company or business name" />
                </div>
              </div>

              <div className="form-group">
                <label>What are you interested in? <span className="req">*</span></label>
                <div className="interest-pills-grid">
                  {interestsList.map(item => {
                    const isActive = selectedInterests.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`interest-pill ${isActive ? 'active' : ''}`}
                        onClick={() => toggleInterest(item.id)}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        {isActive && <FiCheckCircle className="pill-check-icon" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Project Budget (Optional)</label>
                <div className="input-with-icon">
                  <FiDollarSign className="input-icon" />
                  <select id="budget" className="budget-select">
                    <option value="">Select your budget range</option>
                    <option value="under5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Project Details <span className="req">*</span></label>
                <div className="input-with-icon align-top">
                  <FiMessageSquare className="input-icon textarea-icon" />
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us about your project, goals, timeline, or any specific requirements..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={1000}
                  />
                  <span className="char-count">{message.length} / 1000</span>
                </div>
              </div>

              <div className="trust-badges">
                <div className="trust-badge">
                  <div className="trust-icon-wrap"><FiZap /></div>
                  <div className="trust-text">
                    <strong>Quick Response</strong>
                    <span>Within 24 Hours</span>
                  </div>
                </div>
                <div className="trust-badge">
                  <div className="trust-icon-wrap"><FiShield /></div>
                  <div className="trust-text">
                    <strong>100% Confidential</strong>
                    <span>Your data is safe</span>
                  </div>
                </div>
                <div className="trust-badge">
                  <div className="trust-icon-wrap"><FiXCircle /></div>
                  <div className="trust-text">
                    <strong>No Spam</strong>
                    <span>Only relevant replies</span>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-submit btn-submit-advanced">
                Send Message →
              </button>

              <div className="form-footer-disclaimer">
                By submitting this form, you agree to our <a href="#">Privacy Policy</a>.
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default App;
