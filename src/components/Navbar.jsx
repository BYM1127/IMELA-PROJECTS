import { Link } from 'react-router-dom';
import { Lightning, PhoneCall, List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Lightning size={32} weight="fill" className="text-primary" />
          <span>Detroit<span className="logo-sub">Electrical</span></span>
        </Link>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="nav-actions">
          <a href="tel:+1234567890" className="btn btn-primary">
            <PhoneCall size={20} weight="fill" />
            <span>(800) 123-4567</span>
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
