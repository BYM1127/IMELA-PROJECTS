import { Link } from 'react-router-dom';
import { ArrowRight, BatteryCharging, Lightning, WifiHigh, Camera } from '@phosphor-icons/react';
import './Home.css';

const Home = () => {
  return (
    <div className="page animate-fade-in">
      {/* Hero Section */}
      <section className="hero bg-grid-navy">
        <div className="container hero-content">
          <div className="hero-system-status">
            <div className="pulse-dot"></div> SYSTEM ONLINE
          </div>
          <h1 className="hero-title">
            Powering Your Progress with <br/>
            <span className="text-primary">Certified Electrical</span> & <br/>
            Network Engineering.
          </h1>
          <p className="hero-subtitle">
            Top-tier electrical installations, industrial automation, and highly secure network infrastructure scaled across Gauteng. Engineered for absolute reliability.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              View Our Services <ArrowRight weight="bold" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Overlapping Service Cards */}
      <section className="services-overlap">
        <div className="container">
          <div className="services-grid">
            <div className="service-card card">
              <div className="service-icon"><BatteryCharging size={32} className="text-primary" /></div>
              <h3>Backup Power & Solar</h3>
              <p>Industrial-scale inverters and PV systems for uninterrupted operations.</p>
            </div>
            <div className="service-card card">
              <div className="service-icon"><Lightning size={32} /></div>
              <h3>Electrical Maintenance</h3>
              <p>Certified fault finding, DB upgrades, and compliance COC issuance.</p>
            </div>
            <div className="service-card card">
              <div className="service-icon"><WifiHigh size={32} /></div>
              <h3>Network Infrastructure</h3>
              <p>High-speed fiber reticulation and secure server room construction.</p>
            </div>
            <div className="service-card card">
              <div className="service-icon"><Camera size={32} /></div>
              <h3>CCTV & Security</h3>
              <p>IP surveillance networks, biometric access, and perimeter defense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="section bg-offwhite">
        <div className="container trust-section">
          <div className="trust-content">
            <h4 className="text-primary" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <span style={{width: '30px', height: '2px', backgroundColor: 'var(--clr-primary)'}}></span>
              WHO WE ARE
            </h4>
            <h2 className="section-title">
              Reliable Engineering Built on <span className="text-primary">Trust</span> and <span className="text-primary">Compliance</span>.
            </h2>
            <p>
              Imela Projects stands at the intersection of technical excellence and infrastructural stability. We deliver highly regulated, precision-engineered electrical and data solutions for environments where failure is not an option. From vast commercial developments to critical industrial facilities, our mandate is unwavering uptime.
            </p>
            <p>
              Our teams operate strictly within industry compliance standards, ensuring every connection, conduit, and control panel is meticulously installed, thoroughly tested, and officially certified.
            </p>
            <Link to="/about" className="link-arrow">
              READ OUR FULL PROFILE <ArrowRight weight="bold" />
            </Link>
          </div>
          <div className="trust-image-wrapper">
            <img src="/portfolio/proj-8.jpeg" alt="Electrical DB Board" className="img-industrial grayscale" />
            <div className="compliance-tag">
              <div className="pulse-dot"></div> ISO 9001 COMPLIANT
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar bg-navy">
        <div className="container stats-grid">
          <div className="stat-item">
            <h2 className="text-primary">10+</h2>
            <p className="text-light">YEARS EXPERIENCE</p>
          </div>
          <div className="stat-item border-left">
            <h2 className="text-light">250+</h2>
            <p className="text-light">PROJECTS COMPLETED</p>
          </div>
          <div className="stat-item border-left">
            <h2 className="text-light">100%</h2>
            <p className="text-light">COMPLIANCE RATE</p>
          </div>
          <div className="stat-item border-left">
            <h2 className="text-primary">24/7</h2>
            <p className="text-light">SUPPORT & RESPONSE</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
