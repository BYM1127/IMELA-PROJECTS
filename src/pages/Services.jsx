import { Lightning, WifiHigh, Camera, BatteryCharging, ShieldCheck } from '@phosphor-icons/react';
import './About.css'; // Reusing about CSS for layout

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Electrical Installation & Maintenance",
      description: "From new building wiring to routine maintenance of existing systems, our certified electricians ensure your property is safe and up to code. We handle everything from minor repairs to large-scale commercial fit-outs, ensuring 100% compliance with South African safety standards.",
      icon: <Lightning size={48} className="text-primary" weight="light" />
    },
    {
      id: 2,
      title: "Network/Data Installation",
      description: "Structured cabling and robust network setups for seamless connectivity in commercial spaces and modern homes. We design, install, and certify CAT6 and fiber optic networks to ensure your business operations run at lightning speed without interruptions.",
      icon: <WifiHigh size={48} className="text-primary" weight="light" />
    },
    {
      id: 3,
      title: "Access Point & Camera Installation",
      description: "Enhance your security with professional installation of CCTV cameras and access control systems. We strategically place wireless access points and high-definition cameras to eliminate dead zones and secure your premises 24/7.",
      icon: <Camera size={48} className="text-primary" weight="light" />
    },
    {
      id: 4,
      title: "Backup Power Solutions",
      description: "Uninterruptible power supplies (UPS), generators, and solar integrations to keep your operations running during outages. We design bespoke backup solutions that guarantee peace of mind during load shedding or unexpected grid failures.",
      icon: <BatteryCharging size={48} className="text-primary" weight="light" />
    },
    {
      id: 5,
      title: "Earthing & Compliance",
      description: "Ensuring all electrical systems meet regulatory safety standards through proper earthing and compliance checks. We issue Certificates of Compliance (CoC) required for property sales and insurance purposes.",
      icon: <ShieldCheck size={48} className="text-primary" weight="light" />
    }
  ];

  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>Comprehensive solutions for all your electrical and data needs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
export default Services;
