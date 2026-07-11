import { Link } from 'react-router-dom';
import { ShieldCheck, Lightning, Certificate, Wrench } from '@phosphor-icons/react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-navy">
      {/* Top Banner: Certifications */}
      <div className="footer-certifications">
        <div className="container cert-container">
          <div className="cert-logos">
            <div className="cert-logo"><ShieldCheck size={20} className="text-primary"/> ISO 9001 Certified</div>
            <div className="cert-logo"><Certificate size={20} className="text-primary"/> CIDB Registered</div>
            <div className="cert-logo"><Wrench size={20} className="text-primary"/> ECSA Engineers</div>
          </div>
          <div className="system-status">
            <div className="pulse-dot"></div> SECURE INFRASTRUCTURE
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-logo-link" style={{marginBottom: '1rem', display: 'inline-block'}}>
              <Logo style={{ transform: 'scale(0.9)', transformOrigin: 'left center' }} />
            </Link>
            <p className="footer-desc">
              Precision Engineering & Infrastructure.
            </p>
          </div>

          <div className="footer-col">
            <h4>COMPLIANCE LINKS</h4>
            <ul>
              <li><Link to="/compliance">ISO 9001 Certified</Link></li>
              <li><Link to="/compliance">Safety Standards</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>LEGAL & CONTACT</h4>
            <ul>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Imela Projects. All rights reserved. Precision Engineering & Infrastructure.</p>
          <div className="system-online">
            <div className="pulse-dot"></div> SYSTEM ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
