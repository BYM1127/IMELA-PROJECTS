import { Link } from 'react-router-dom';
import { PhoneCall, List, X, Moon, Sun } from '@phosphor-icons/react';
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
          <a href="tel:+27836025980" className="btn btn-primary">
            <PhoneCall size={20} weight="fill" />
            <span>+27 83 602 5980</span>
          </a>
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
