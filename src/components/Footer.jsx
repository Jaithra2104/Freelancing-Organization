import { Link } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiGithub, FiYoutube } from 'react-icons/fi';
import '../pages/Legal/Legal.css'; // ensure it gets the styles

export default function Footer() {
  return (
    <footer className="global-footer">
      <div className="global-footer-inner">
        <div className="global-footer-logo">
          VYUHA <span>TECH</span>
        </div>
        
        <div className="global-footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/refund-policy">Refund & Cancellation Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>

        <div className="global-footer-bottom">
          <p>© 2026 VYUHA TECH. All Rights Reserved.</p>
          <div className="footer-socials" style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'inherit', fontSize: '1.2rem' }}><FiTwitter /></a>
            <a href="#" style={{ color: 'inherit', fontSize: '1.2rem' }}><FiLinkedin /></a>
            <a href="#" style={{ color: 'inherit', fontSize: '1.2rem' }}><FiGithub /></a>
            <a href="#" style={{ color: 'inherit', fontSize: '1.2rem' }}><FiYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
