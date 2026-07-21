import { Lightning, WifiHigh, Camera, BatteryCharging, ShieldCheck } from '@phosphor-icons/react';
import './About.css';

const About = () => {
  const servicesData = [
    {
      id: 1,
      title: "Electrical Installation & Maintenance",
      description: "From new building wiring to routine maintenance of existing systems, our certified electricians ensure your property is safe and up to code.",
      icon: <Lightning size={48} className="text-primary" weight="light" />
    },
    {
      id: 2,
      title: "Network/Data Installation",
      description: "Structured cabling and robust network setups for seamless connectivity in commercial spaces and modern homes.",
      icon: <WifiHigh size={48} className="text-primary" weight="light" />
    },
    {
      id: 3,
      title: "Access Point & Camera Installation",
      description: "Enhance your security with professional installation of CCTV cameras and access control systems.",
      icon: <Camera size={48} className="text-primary" weight="light" />
    },
    {
      id: 4,
      title: "Backup Power Solutions",
      description: "Uninterruptible power supplies (UPS), generators, and solar integrations to keep your operations running during outages.",
      icon: <BatteryCharging size={48} className="text-primary" weight="light" />
    },
    {
      id: 5,
      title: "Earthing & Compliance",
      description: "Ensuring all electrical systems meet regulatory safety standards through proper earthing and compliance checks.",
      icon: <ShieldCheck size={48} className="text-primary" weight="light" />
    }
  ];

  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">About & Services</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>Where Expertise Meets Efficiency</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-card">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/portfolio/proj-5.jpeg" alt="Imela Projects team at work" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            </div>
            <div className="about-content">
              <h2 className="section-title">Speed and Precision.</h2>
              <p style={{fontSize: '1.1rem', color: 'var(--clr-text-muted)', marginBottom: '1rem'}}>
                Imela Projects specializes in resolving all electrical and data-related issues with speed and precision. 
              </p>
              <p style={{fontSize: '1.1rem', color: 'var(--clr-text-muted)', marginBottom: '2rem'}}>
                Our team of highly skilled and certified technicians is committed to delivering reliable, efficient solutions for all your electrical, solar, network, and data needs.
              </p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%'}}>✓</div>
                  <h4>Fast, reliable service</h4>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%'}}>✓</div>
                  <h4>Certified professionals</h4>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%'}}>✓</div>
                  <h4>End-to-end solutions</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="text-center" style={{marginBottom: 'var(--space-lg)'}}>
            <h4 className="text-primary">Our Expertise</h4>
            <h2 className="section-title center">Comprehensive Solutions!</h2>
          </div>
          <div className="services-list">
            {servicesData.map(service => (
              <div key={service.id} className="service-detail-card card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section bg-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div className="container">
          <h2 className="section-title center" style={{marginBottom: '1rem'}}>Ready to start your project?</h2>
          <p style={{fontSize: '1.2rem', color: 'var(--clr-text-muted)', marginBottom: '2rem'}}>
            Reach out to our friendly team today. We're here to answer any questions and provide a free quote.
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
            <a href="tel:0711729075" className="btn btn-primary">Call Us Today</a>
            <a href="https://wa.me/27836025980" target="_blank" rel="noreferrer" className="btn btn-outline">Message on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
