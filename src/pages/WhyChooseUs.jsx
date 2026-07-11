import { Link } from 'react-router-dom';
import { ShieldCheck, HardHat, ChartLineUp, ArrowRight } from '@phosphor-icons/react';
import './About.css'; // Reuse About.css for similar structural layouts

const WhyChooseUs = () => {
  return (
    <div className="page animate-fade-in bg-white">
      {/* Page Header */}
      <section className="about-hero bg-navy">
        <div className="container text-center">
          <h1 className="hero-title">Why Choose Imela Projects?</h1>
          <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem'}}>
            We don't just complete projects; we engineer long-term infrastructural stability. Here is why Midrand's top commercial developers trust us.
          </p>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="section bg-offwhite">
        <div className="container">
          <div className="pillars-grid mt-lg">
            <div className="pillar-card card">
              <ShieldCheck size={40} className="text-primary mb-sm" />
              <h4>100% COMPLIANCE GUARANTEE</h4>
              <p>Every wire, conduit, and breaker we install is rigorously tested and certified against NEN 1010 and ISO 9001 standards. We issue official COCs upon completion.</p>
            </div>
            <div className="pillar-card card center-card">
              <HardHat size={40} className="text-primary mb-sm" />
              <h4>VETERAN ENGINEERING TEAM</h4>
              <p>Our teams are led by master electricians and certified network architects with decades of combined experience in high-stress, high-voltage environments.</p>
            </div>
            <div className="pillar-card card">
              <ChartLineUp size={40} className="text-primary mb-sm" />
              <h4 style={{textTransform: 'uppercase'}}>Maximum Uptime Focus</h4>
              <p>We understand that downtime is not an option. Our solutions are built with redundancy and future-proofing in mind to keep your operations running 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-navy text-center">
        <div className="container">
          <h2 className="section-title text-light">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-muted mb-lg" style={{maxWidth: '500px', margin: '0 auto var(--space-lg)'}}>
            Speak directly with our engineering team today to get a comprehensive technical assessment and quote.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="https://wa.me/27836025980" className="btn btn-primary" target="_blank" rel="noreferrer">
              CHAT ON WHATSAPP
            </a>
            <Link to="/contact" className="btn btn-outline">
              EMAIL US <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
