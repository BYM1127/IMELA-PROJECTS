import { Link } from 'react-router-dom';
import { CheckSquareOffset, ArrowRight } from '@phosphor-icons/react';
import './Services.css';

const Services = () => {
  return (
    <div className="page animate-fade-in">
      {/* Header Banner */}
      <section className="services-header bg-navy">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title">OUR ENGINEERING CAPABILITIES</h1>
          <div className="capabilities-line"></div>
        </div>
      </section>
      <div className="capabilities-sub-bar bg-navy-light">
        <div className="container sub-bar-flex">
          <div className="system-status"><div className="pulse-dot"></div> ISO 9001 CERTIFIED</div>
          <div className="system-status"><div className="pulse-dot"></div> 99.9% UPTIME GUARANTEE</div>
          <div className="system-status"><div className="pulse-dot"></div> NEN 1010 COMPLIANT</div>
        </div>
      </div>

      {/* Service 1: Electrical Installation & Maintenance */}
      <section className="service-row bg-white">
        <div className="container row-grid">
          <div className="row-content">
            <h2 className="section-title">ELECTRICAL INSTALLATION & MAINTENANCE</h2>
            <p className="mt-sm mb-md">
              Precision-engineered electrical infrastructure designed for high-demand environments. We handle complete reticulation, DB board upgrades, and ongoing preventative maintenance.
            </p>
            <ul className="check-list mb-lg">
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>HIGH VOLTAGE SYSTEMS</h4>
                  <p>Design and installation of robust distribution networks.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>PREVENTATIVE MAINTENANCE</h4>
                  <p>Scheduled diagnostics to prevent catastrophic failure.</p>
                </div>
              </li>
            </ul>
            <div className="btn-group">
              <Link to="/services/detail" className="btn btn-outline-dark" style={{backgroundColor: 'var(--clr-bg-navy)', color: 'white'}}>
                VIEW SPECIFICATIONS
              </Link>
              <a href="https://wa.me/27836025980" className="btn btn-primary" target="_blank" rel="noreferrer">
                REQUEST QUOTE
              </a>
            </div>
          </div>
          <div className="row-image">
            <img src="/portfolio/proj-8.jpeg" alt="Electrical DB Board" className="img-industrial grayscale" />
          </div>
        </div>
      </section>

      <div className="connector-block"></div>

      {/* Service 2: Network/Data Installation */}
      <section className="service-row bg-offwhite">
        <div className="container row-grid">
          <div className="row-image">
            <img src="/portfolio/proj-3.jpeg" alt="Network Server Rack" className="img-industrial grayscale" style={{boxShadow: '12px 12px 0px var(--clr-bg-navy)'}} />
          </div>
          <div className="row-content">
            <h2 className="section-title">NETWORK/DATA INSTALLATION</h2>
            <p className="mt-sm mb-md">
              Establishing the vital nervous system for modern facilities through structured fiber optic and copper cabling, ensuring high-bandwidth and low-latency data flow.
            </p>
            <ul className="check-list mb-lg">
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>STRUCTURED CABLING</h4>
                  <p>Enterprise-grade CAT6 and Fiber installations.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>SERVER ROOM ARCHITECTURE</h4>
                  <p>Climate-controlled, meticulously organized racks.</p>
                </div>
              </li>
            </ul>
            <div className="btn-group">
              <Link to="/services/detail" className="btn btn-outline-dark" style={{backgroundColor: 'var(--clr-bg-navy)', color: 'white'}}>
                VIEW SPECIFICATIONS
              </Link>
              <a href="https://wa.me/27836025980" className="btn btn-primary" target="_blank" rel="noreferrer">
                REQUEST QUOTE
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="connector-block"></div>

      {/* Service 3: Access Point & Camera Installation */}
      <section className="service-row bg-white">
        <div className="container row-grid">
          <div className="row-content">
            <h2 className="section-title">ACCESS POINT & CAMERA INSTALLATION</h2>
            <p className="mt-sm mb-md">
              Integrated security ecosystems featuring high-resolution IP CCTV, biometric access control, and comprehensive wireless network expansion.
            </p>
            <ul className="check-list mb-lg">
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>IP CCTV NETWORKS</h4>
                  <p>High-definition surveillance with centralized monitoring.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>BIOMETRIC ACCESS</h4>
                  <p>Secure physical entry points with automated logs.</p>
                </div>
              </li>
            </ul>
            <div className="btn-group">
              <Link to="/services/detail" className="btn btn-outline-dark" style={{backgroundColor: 'var(--clr-bg-navy)', color: 'white'}}>
                VIEW SPECIFICATIONS
              </Link>
              <a href="https://wa.me/27836025980" className="btn btn-primary" target="_blank" rel="noreferrer">
                REQUEST QUOTE
              </a>
            </div>
          </div>
          <div className="row-image">
            <img src="/portfolio/proj-4.jpeg" alt="Security Cameras" className="img-industrial grayscale" />
          </div>
        </div>
      </section>

      <div className="connector-block"></div>

      {/* Service 4: Backup Power Solutions */}
      <section className="service-row bg-offwhite">
        <div className="container row-grid">
          <div className="row-image">
            <img src="/portfolio/proj-1.jpeg" alt="Solar and Inverters" className="img-industrial grayscale" style={{boxShadow: '12px 12px 0px var(--clr-bg-navy)'}} />
          </div>
          <div className="row-content">
            <h2 className="section-title">BACKUP POWER SOLUTIONS</h2>
            <p className="mt-sm mb-md">
              Future-proofing infrastructure with high-capacity solar integration, UPS systems, and redundant generators to guarantee zero downtime.
            </p>
            <ul className="check-list mb-lg">
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>COMMERCIAL SOLAR</h4>
                  <p>Large-scale photovoltaic deployments engineered for yield.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>UPS & INVERTERS</h4>
                  <p>Seamless transition during grid failure.</p>
                </div>
              </li>
            </ul>
            <div className="btn-group">
              <Link to="/services/detail" className="btn btn-outline-dark" style={{backgroundColor: 'var(--clr-bg-navy)', color: 'white'}}>
                VIEW SPECIFICATIONS
              </Link>
              <a href="https://wa.me/27836025980" className="btn btn-primary" target="_blank" rel="noreferrer">
                REQUEST QUOTE
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="connector-block"></div>

      {/* Service 5: Earthing & Compliance */}
      <section className="service-row bg-white">
        <div className="container row-grid">
          <div className="row-content">
            <h2 className="section-title">EARTHING & COMPLIANCE</h2>
            <p className="mt-sm mb-md">
              Protecting your infrastructure from power surges and lightning strikes while ensuring every installation meets mandatory safety and compliance regulations.
            </p>
            <ul className="check-list mb-lg">
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>EARTHING SYSTEMS</h4>
                  <p>Deep earth spiking and lightning protection networks.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>COC ISSUANCE</h4>
                  <p>Rigorous inspection and official Certificates of Compliance.</p>
                </div>
              </li>
            </ul>
            <div className="btn-group">
              <Link to="/services/detail" className="btn btn-outline-dark" style={{backgroundColor: 'var(--clr-bg-navy)', color: 'white'}}>
                VIEW SPECIFICATIONS
              </Link>
              <a href="https://wa.me/27836025980" className="btn btn-primary" target="_blank" rel="noreferrer">
                REQUEST QUOTE
              </a>
            </div>
          </div>
          <div className="row-image">
            <img src="/portfolio/proj-5.jpeg" alt="Earthing systems" className="img-industrial grayscale" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
