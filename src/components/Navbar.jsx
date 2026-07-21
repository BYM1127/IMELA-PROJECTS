import { Link } from 'react-router-dom';
import { List, X, Moon, Sun, InstagramLogo, FacebookLogo, WhatsappLogo } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/logo/logo-1.jpeg" alt="Imela Projects Logo" className="logo-img" />
        </Link>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? <Sun size={24} weight="fill" color="var(--clr-text-dark)" /> : <Moon size={24} weight="fill" color="var(--clr-text-dark)" />}
          </button>
          <div className="social-nav-icons" style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginLeft: '1rem' }}>
            <a href="https://www.instagram.com/imelaprojects" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ color: 'var(--clr-text-dark)', transition: 'color 0.3s' }} className="nav-social-icon">
              <InstagramLogo size={28} weight="regular" />
            </a>
            <a href="https://www.facebook.com/imelaconstruction" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ color: 'var(--clr-text-dark)', transition: 'color 0.3s' }} className="nav-social-icon">
              <FacebookLogo size={28} weight="regular" />
            </a>
            <a href="https://wa.me/27836025980" target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{ color: 'var(--clr-text-dark)', transition: 'color 0.3s' }} className="nav-social-icon">
              <WhatsappLogo size={28} weight="regular" />
            </a>
          </div>
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
