import { Link } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiGithub, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="global-footer-grid">
        {/* Column 1: Brand & Description */}
        <div className="footer-col brand-col">
          <div className="global-footer-logo">
            VYUHA <span>TECH</span>
          </div>
          <p className="footer-description">
            We build high-performance software, modern websites, and custom AI integrations to help businesses scale in the digital era.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="#" aria-label="GitHub"><FiGithub /></a>
            <a href="#" aria-label="YouTube"><FiYoutube /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Demo Websites</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/team">Our Team</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="footer-col">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col contact-col">
          <h3>Contact Us</h3>
          <ul className="footer-contact-info">
            <li>
              <FiMail className="contact-icon"/>
              <a href="mailto:vyuhatech2026@gmail.com">vyuhatech2026@gmail.com</a>
            </li>
            <li>
              <FiPhone className="contact-icon"/>
              <a href="tel:+917702239591">+91 77022 39591</a>
            </li>
            <li>
              <FiMapPin className="contact-icon"/>
              <span>Hyderabad, India (Remote Workspace)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="global-footer-bottom">
        <p>© {new Date().getFullYear()} VYUHA TECH. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
