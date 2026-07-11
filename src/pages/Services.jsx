import { Lightning, WifiHigh, Camera, BatteryCharging, ShieldCheck } from '@phosphor-icons/react';
import './Services.css';

const Services = () => {
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
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>Comprehensive electrical solutions tailored to your specific needs.</p>
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
    </div>
  );
};

export default Services;
