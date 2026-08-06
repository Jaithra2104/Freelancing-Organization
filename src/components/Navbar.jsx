import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => scrollTo('hero')}>
          <span className="logo-icon">⬡</span>
          <span className="logo-text">VYUHA<span className="logo-accent">TECH</span></span>
        </div>

        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {['Services', 'Products', 'About', 'Team', 'Contact'].map(item => (
            <li key={item}>
              <button onClick={() => scrollTo(item.toLowerCase())} className="nav-link">
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__cta">
          <button className="btn-nav-primary" onClick={() => scrollTo('contact')}>
            Get Started
          </button>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
