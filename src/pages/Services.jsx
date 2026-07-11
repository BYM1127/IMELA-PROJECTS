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

      {/* Service 1: Electrical */}
      <section className="service-row bg-white">
        <div className="container row-grid">
          <div className="row-content">
            <h2 className="section-title">ELECTRICAL INSTALLATION & COMPLIANCE</h2>
            <p className="mt-sm mb-md">
              Precision-engineered electrical infrastructure designed for high-demand industrial and commercial environments, ensuring absolute reliability and strict regulatory adherence.
            </p>
            <ul className="check-list mb-lg">
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>HIGH VOLTAGE SYSTEMS</h4>
                  <p>Design, installation, and maintenance of robust high-voltage distribution networks.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>NEN 1010 INSPECTIONS</h4>
                  <p>Rigorous compliance testing and certification for absolute safety guarantees.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>INDUSTRIAL LIGHTING CONTROL</h4>
                  <p>Automated, energy-efficient lighting solutions for vast manufacturing spaces.</p>
                </div>
              </li>
            </ul>
            <Link to="/services/detail" className="btn btn-outline-dark" style={{backgroundColor: 'var(--clr-bg-navy)', color: 'white'}}>
              VIEW SPECIFICATIONS <ArrowRight weight="bold" />
            </Link>
          </div>
          <div className="row-image">
            <img src="/portfolio/proj-8.jpeg" alt="Electrical DB Board" className="img-industrial grayscale" />
          </div>
        </div>
      </section>

      {/* Green Connector Block */}
      <div className="connector-block"></div>

      {/* Service 2: Solar */}
      <section className="service-row bg-offwhite" style={{padding: 0}}>
        <div className="row-grid-full">
          <div className="row-image-left">
            <img src="/portfolio/proj-1.jpeg" alt="Commercial Solar Farm" className="grayscale" />
          </div>
          <div className="row-content-dark bg-navy">
            <h2 className="section-title text-light">RENEWABLE ENERGY & BACKUP SOLUTIONS</h2>
            <p className="mt-sm mb-md text-muted">
              Future-proofing infrastructure with high-capacity solar integration and redundant power systems to guarantee zero downtime in critical operations.
            </p>
            <ul className="check-list-dark mb-lg">
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>COMMERCIAL SOLAR ARRAYS</h4>
                  <p>Large-scale photovoltaic deployments engineered for maximum yield.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>UPS & BATTERY STORAGE</h4>
                  <p>Uninterruptible power supplies designed for seamless transition during grid failure.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>GRID SYNCHRONIZATION</h4>
                  <p>Advanced telemetry for intelligent energy routing and load balancing.</p>
                </div>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              CONSULT ENGINEERING <ArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service 3: Network/CCTV */}
      <section className="service-row bg-white relative-section">
        <div className="container row-grid">
          <div className="row-content">
            <h2 className="section-title">NETWORK CABLING & CCTV AUTOMATION</h2>
            <p className="mt-sm mb-md">
              Establishing the vital nervous system for modern facilities through structured cabling and integrated, intelligent security protocols.
            </p>
            <ul className="check-list mb-lg">
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>STRUCTURED FIBER NETWORKS</h4>
                  <p>High-bandwidth, low-latency fiber optic backbones for enterprise data.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>IP CCTV & ACCESS CONTROL</h4>
                  <p>Unified security ecosystems with automated threat response mechanisms.</p>
                </div>
              </li>
              <li>
                <CheckSquareOffset size={20} className="text-primary" />
                <div>
                  <h4>SERVER ROOM ARCHITECTURE</h4>
                  <p>Climate-controlled, meticulously organized racks engineered for expansion.</p>
                </div>
              </li>
            </ul>
            <Link to="/services/detail" className="btn btn-outline-dark" style={{backgroundColor: 'var(--clr-bg-navy)', color: 'white'}}>
              REVIEW PROTOCOLS <ArrowRight weight="bold" />
            </Link>
          </div>
          <div className="row-image">
            <img src="/portfolio/proj-3.jpeg" alt="Server Rack Infrastructure" className="img-industrial grayscale" />
            {/* Overlay Telemetry Card */}
            <div className="telemetry-card card">
              <h4 className="text-primary" style={{borderBottom: '1px solid var(--clr-border-dark)', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <div className="pulse-dot"></div> SYSTEM TELEMETRY
              </h4>
              <div className="telemetry-row">
                <span>Throughput:</span>
                <strong>100 Gbps</strong>
              </div>
              <div className="telemetry-row">
                <span>Latency:</span>
                <strong>&lt; 1ms</strong>
              </div>
              <div className="telemetry-row">
                <span>Status:</span>
                <strong className="text-primary">Optimal</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
