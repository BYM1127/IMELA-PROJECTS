import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src="/logo/logo-1.jpeg" alt="Imela Projects Logo" className="logo-img" />
          </Link>
          <p className="footer-desc">
            Imela Projects specializes in resolving all electrical and data-related issues with speed and precision. Where Expertise Meets Efficiency.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1BVnDBsdUM/" target="_blank" rel="noreferrer"><FacebookLogo size={24} weight="fill" /></a>
            <a href="https://www.instagram.com/imelaprojects?igsh=MjVjOG80dXQ2cmNw" target="_blank" rel="noreferrer"><InstagramLogo size={24} weight="fill" /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Projects</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/about#services">Electrical Installation</Link></li>
            <li><Link to="/about#services">Network & Data</Link></li>
            <li><Link to="/about#services">Camera Installation</Link></li>
            <li><Link to="/about#services">Backup Power (Solar)</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p><strong>Service Area:</strong> Gauteng, Free State, North West, Limpopo.</p>
          <p><strong>Address:</strong> Mamello Street, Centurion, South Africa, 0187</p>
          <p><strong>CIPC Number:</strong> Pending</p>
          <br/>
          <p><strong>Mohau:</strong> <a href="tel:+27836025980">+27 83 602 5980</a></p>
          <p><a href="mailto:sefadip@gmail.com">sefadip@gmail.com</a></p>
          <br/>
          <p><strong>Teboho:</strong> <a href="tel:0711729075">071 172 9075</a></p>
          <p><a href="mailto:letselateboho@gmail.com">letselateboho@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Imela Projects. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
