import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="navbar bg-navy">
      <div className="container nav-container">
        <Link to="/" className="logo-text">
          <strong>IMELA</strong> Projects
        </Link>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/services" className={isActive('/services')} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" className={isActive('/portfolio')} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
          <Link to="/about" className={isActive('/about')} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/compliance" className={isActive('/compliance')} onClick={() => setIsMobileMenuOpen(false)}>Compliance</Link>
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
  );
};

export default Navbar;
