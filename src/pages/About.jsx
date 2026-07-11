import { Link } from 'react-router-dom';
import { ShieldPlus, Crosshair, ShieldCheck } from '@phosphor-icons/react';
import './About.css';

const About = () => {
  return (
    <div className="page animate-fade-in">
      {/* Page Header */}
      <section className="about-hero bg-navy">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; <span>About</span>
          </div>
          <h1 className="hero-title">About Imela Projects</h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container story-section">
          <div className="story-content">
            <h4 className="text-primary" style={{display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--clr-border-dark)', paddingBottom: '0.5rem', display: 'inline-flex'}}>
              OUR STORY
            </h4>
            <h2 className="section-title mt-sm">
              Building Midrand's Industrial Future, One Precision Project at a Time.
            </h2>
            <p className="mt-md" style={{fontSize: '1.05rem', color: 'var(--clr-text-dark-muted)'}}>
              Founded on the principles of absolute stability and technical excellence, Imela Projects has grown from a specialized local contractor into a cornerstone of commercial infrastructure in Gauteng.
            </p>
            <p style={{fontSize: '1.05rem', color: 'var(--clr-text-dark-muted)'}}>
              Our journey is defined by a rigid adherence to compliance and a commitment to engineered solutions over temporary fixes. We partner with commercial developers and government entities who demand flawless execution and unyielding reliability in every structural blueprint we bring to life.
            </p>
          </div>
          <div className="story-image-wrapper">
            <img src="/portfolio/proj-5.jpeg" alt="Industrial Construction" className="img-industrial grayscale" />
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="section bg-offwhite">
        <div className="container">
          <div className="pillars-header">
            <div className="vertical-line"></div>
            <div>
              <h2 className="section-title" style={{margin: 0}}>Pillars of Excellence</h2>
              <p className="mt-sm" style={{color: 'var(--clr-text-dark-muted)', maxWidth: '600px'}}>
                Our operational framework is supported by three non-negotiable standards, ensuring every project meets strict engineering tolerances.
              </p>
            </div>
          </div>

          <div className="pillars-grid mt-lg">
            <div className="pillar-card card">
              <ShieldPlus size={40} className="text-primary mb-sm" />
              <h4>SAFETY FIRST</h4>
              <p>Uncompromising adherence to OHSA standards. We implement rigid safety protocols on every site, safeguarding human life and project integrity above all else.</p>
            </div>
            <div className="pillar-card card center-card">
              <Crosshair size={40} className="text-primary mb-sm" />
              <h4>PRECISION ENGINEERING</h4>
              <p>Executing complex schematics with zero margin for error. Our technical teams utilize utility-first methodologies to ensure absolute structural stability.</p>
            </div>
            <div className="pillar-card card">
              <ShieldCheck size={40} className="text-primary mb-sm" />
              <h4>LOCAL RELIABILITY</h4>
              <p>Deeply rooted in Midrand. We provide rapid response times and localized expertise, establishing ourselves as the dependable anchor for regional infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
