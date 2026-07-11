import { Link } from 'react-router-dom';
import { Lightning, FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <Lightning size={32} weight="fill" className="text-primary" />
            <span>Detroit<span className="logo-sub">Electrical</span></span>
          </Link>
          <p className="footer-desc">
            Bringing light to your home, one wire at a time. Professional electrical services for residential and commercial properties.
          </p>
          <div className="social-links">
            <a href="#"><FacebookLogo size={24} weight="fill" /></a>
            <a href="#"><TwitterLogo size={24} weight="fill" /></a>
            <a href="#"><InstagramLogo size={24} weight="fill" /></a>
            <a href="#"><LinkedinLogo size={24} weight="fill" /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/services">Electrical Installation</Link></li>
            <li><Link to="/services">Network & Data</Link></li>
            <li><Link to="/services">Camera Installation</Link></li>
            <li><Link to="/services">Backup Power</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>123 Electric Ave, Power City, PC 12345</p>
          <p>Email: info@detroitelectrical.com</p>
          <p>Phone: (800) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Detroit Electrical Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
