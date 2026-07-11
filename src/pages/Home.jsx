import { Link } from 'react-router-dom';
import { Warning, Clock, BatteryCharging, ArrowRight, ShieldCheck, Wrench, Lightbulb } from '@phosphor-icons/react';
import './Home.css';

const Home = () => {
  return (
    <div className="page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Where Expertise Meets <span style={{color: 'var(--clr-accent)'}}>Efficiency.</span></h1>
          <p className="hero-subtitle">Electrical, Solar & Network Installation Solutions for residential and commercial properties in Midrand & Johannesburg.</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
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
            <h4 className="text-primary">About Imela Projects</h4>
            <h2 className="section-title">Speed, Precision, and Reliability.</h2>
            <p>
              Imela Projects specializes in resolving all electrical and data-related issues with speed and precision. Our team of highly skilled and certified technicians is committed to delivering reliable, efficient solutions for all your electrical, solar, network, and data needs.
            </p>
            <ul className="feature-list">
              <li><ShieldCheck size={24} className="text-primary" /> Certified Professionals</li>
              <li><Wrench size={24} className="text-primary" /> Fast, Reliable Service</li>
              <li><Lightbulb size={24} className="text-primary" /> End-to-end Solutions</li>
            </ul>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Read More</Link>
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
              <Link to="/services" className="card-link">Learn More <ArrowRight /></Link>
            </div>

            <div className="card service-card">
              <h3 className="card-title">Network & Data</h3>
              <p>Structured cabling, network setups, and seamless data installation services.</p>
              <Link to="/services" className="card-link">Learn More <ArrowRight /></Link>
            </div>

            <div className="card service-card">
              <h3 className="card-title">Access & Cameras</h3>
              <p>Security camera installations and access point configurations for your peace of mind.</p>
              <Link to="/services" className="card-link">Learn More <ArrowRight /></Link>
            </div>

            <div className="card service-card">
              <h3 className="card-title">Earthing & Compliance</h3>
              <p>Professional earthing solutions ensuring strict adherence to compliance standards.</p>
              <Link to="/services" className="card-link">Learn More <ArrowRight /></Link>
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
