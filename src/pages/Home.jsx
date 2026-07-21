import { Link } from 'react-router-dom';
import { Warning, Clock, BatteryCharging, ArrowRight, ShieldCheck, Wrench, Lightbulb, Phone, WhatsappLogo } from '@phosphor-icons/react';
import './Home.css';

const Home = () => {
  return (
    <div className="page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <img src="/logo/logo-1.jpeg" alt="Imela Projects Main Logo" style={{ maxWidth: '300px', marginBottom: '2rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} className="animate-fade-in" />
          <h1 className="hero-title">Reliable Solutions for Your <span style={{color: 'var(--clr-accent)'}}>Home & Business.</span></h1>
          <p className="hero-subtitle">Friendly, professional Electrical, Solar & Network installations across Gauteng and surrounding provinces.</p>
          <div className="hero-cta">
            <a href="tel:0711729075" className="btn btn-primary"><Phone size={24} weight="fill" /> Call Us Now</a>
            <a href="https://wa.me/27836025980" target="_blank" rel="noreferrer" className="btn btn-outline" style={{backgroundColor: '#fff'}}><WhatsappLogo size={24} weight="fill" /> Message on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="highlights">
        <div className="container highlights-grid">
          <div className="highlight-item">
            <Warning size={40} className="text-primary" weight="light" />
            <h3>Electrical Services</h3>
            <p>Reliable electrical installations and maintenance.</p>
          </div>
          <div className="highlight-item">
            <Clock size={40} className="text-primary" weight="light" />
            <h3>Fast & Reliable</h3>
            <p>Resolving issues with speed and precision.</p>
          </div>
          <div className="highlight-item">
            <BatteryCharging size={40} className="text-primary" weight="light" />
            <h3>Backup Power</h3>
            <p>Generators, UPS & Solar installation and maintenance.</p>
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="section about-snippet bg-card">
        <div className="container about-grid">
          <div className="about-content">
            <h4 className="text-primary">Welcome to Imela Projects</h4>
            <h2 className="section-title">We're here to help.</h2>
            <p>
              Let our friendly and highly skilled technicians handle your electrical and data needs. We pride ourselves on delivering safe, clean, and efficient solutions tailored specifically for you.
            </p>
            <ul className="feature-list">
              <li><ShieldCheck size={24} className="text-primary" /> Certified Professionals</li>
              <li><Wrench size={24} className="text-primary" /> Fast, Reliable Service</li>
              <li><Lightbulb size={24} className="text-primary" /> End-to-end Solutions</li>
            </ul>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary">Discover More</Link>
              <Link to="/contact" className="btn btn-outline">Reach Out Today</Link>
            </div>
          </div>
          <div className="about-image">
            <img src="/portfolio/proj-5.jpeg" alt="Electricians at work" />
          </div>
        </div>
      </section>

      {/* Services Section Snippet */}
      <section className="section services-snippet">
        <div className="container text-center">
          <h4 className="text-primary">Our Expertise</h4>
          <h2 className="section-title center">Comprehensive Solutions!</h2>
          <div className="services-grid mt-lg">
            
            <div className="card service-card">
              <h3 className="card-title">Installation & Maintenance</h3>
              <p>Full spectrum electrical installations and routine maintenance for optimal safety.</p>
              <Link to="/about#services" className="card-link">Learn More <ArrowRight /></Link>
            </div>

            <div className="card service-card">
              <h3 className="card-title">Network & Data</h3>
              <p>Structured cabling, network setups, and seamless data installation services.</p>
              <Link to="/about#services" className="card-link">Learn More <ArrowRight /></Link>
            </div>

            <div className="card service-card">
              <h3 className="card-title">Access & Cameras</h3>
              <p>Security camera installations and access point configurations for your peace of mind.</p>
              <Link to="/about#services" className="card-link">Learn More <ArrowRight /></Link>
            </div>

            <div className="card service-card">
              <h3 className="card-title">Earthing & Compliance</h3>
              <p>Professional earthing solutions ensuring strict adherence to compliance standards.</p>
              <Link to="/about#services" className="card-link">Learn More <ArrowRight /></Link>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Snippet */}
      <section className="section bg-card">
        <div className="container text-center">
          <h4 className="text-primary">Our Work</h4>
          <h2 className="section-title center">Featured Projects</h2>
          <div className="projects-grid mt-lg">
            <img src="/portfolio/proj-1.jpeg" alt="Project 1" className="project-img" />
            <img src="/portfolio/proj-2.jpeg" alt="Project 2" className="project-img" />
            <img src="/portfolio/proj-3.jpeg" alt="Project 3" className="project-img" />
            <img src="/portfolio/proj-4.jpeg" alt="Project 4" className="project-img" />
          </div>
          <Link to="/portfolio" className="btn btn-outline" style={{ marginTop: '2rem' }}>View All Projects</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
