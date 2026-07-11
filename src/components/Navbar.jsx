import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { List, X, CaretDown, Phone, Envelope } from '@phosphor-icons/react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Top Contact Strip */}
      <div className="top-contact-strip bg-navy-light">
        <div className="container contact-strip-container">
          <div className="contact-strip-left">
            <span className="contact-item"><Phone size={14} /> +27 83 602 5980</span>
            <span className="contact-item"><Envelope size={14} /> engineering@imelaprojects.co.za</span>
          </div>
          <div className="contact-strip-right text-primary font-bold">
            24/7 EMERGENCY RESPONSE AVAILABLE
          </div>
        </div>
      </div>

      <header className="navbar bg-navy">
        <div className="container nav-container">
          <Link to="/" className="logo-text" onClick={closeMenu}>
            <strong>IMELA</strong> Projects
          </Link>
          
          <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={isActive('/about')} onClick={closeMenu}>About Us</Link>
            <Link to="/services" className={isActive('/services')} onClick={closeMenu}>Services</Link>
            <Link to="/portfolio" className={isActive('/portfolio')} onClick={closeMenu}>Portfolio</Link>
            <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link>
            
            {/* Dropdown Menu */}
            <div 
              className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                More <CaretDown size={14} />
              </button>
              
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <Link to="/why-choose-us" className={isActive('/why-choose-us')} onClick={closeMenu}>Why Choose Us</Link>
                <Link to="/certifications" className={isActive('/certifications')} onClick={closeMenu}>Certifications</Link>
                <Link to="/blog" className={isActive('/blog')} onClick={closeMenu}>Blog</Link>
              </div>
            </div>
          </nav>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary" style={{padding: '0.5rem 1.5rem', fontSize: '0.75rem'}}>
              Get a Free Quote
            </Link>
            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
