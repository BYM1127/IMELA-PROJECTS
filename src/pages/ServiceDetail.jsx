import { Link } from 'react-router-dom';
import { House, FolderOpen, FileText, Certificate, Question, ArrowLeft } from '@phosphor-icons/react';
import './ServiceDetail.css';

const ServiceDetail = () => {
  return (
    <div className="service-detail-layout animate-fade-in">
      {/* Sidebar */}
      <aside className="sidebar bg-navy">
        <div className="sidebar-brand">
          <Link to="/" className="brand-logo-link" style={{display: 'inline-block'}}>
            <img src="/logo/logo-1.jpeg" alt="Imela Projects Logo" className="brand-logo" />
          </Link>
          <p className="sidebar-subtitle">Precision Engineering</p>
        </div>

        <nav className="sidebar-nav">
          <Link to="/"><House size={20} /> Home</Link>
          <Link to="/portfolio"><FolderOpen size={20} /> Projects</Link>
          <Link to="/services/detail" className="active"><FileText size={20} /> Specifications</Link>
          <Link to="/compliance"><Certificate size={20} /> Certifications</Link>
          <Link to="/contact"><Question size={20} /> Contact</Link>
        </nav>

        <div className="sidebar-footer">
          <Link to="/contact" className="btn btn-primary" style={{width: '100%'}}>Get a Free Quote</Link>
        </div>
      </aside>

      {/* Main Split Content */}
      <main className="detail-split">
        
        {/* Left White Pane */}
        <div className="detail-pane-light bg-white">
          <div className="pane-header">
            <Link to="/services" className="back-link"><ArrowLeft /> Return to Services</Link>
            <span className="spec-code text-primary">/ SEC-ELEC-09</span>
          </div>

          <div className="pane-content">
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              Electrical Installation & Compliance
            </h1>
            <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '500px'}}>
              Comprehensive technical specifications for industrial electrical frameworks, ensuring absolute adherence to safety protocols and high-load distribution benchmarks.
            </p>

            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Operating Voltage</span>
                <span className="spec-value">400V / 690V AC</span>
              </div>
              <div className="spec-item border-left">
                <span className="spec-label">Compliance Standard</span>
                <span className="spec-value">NEN 1010 : 2020</span>
              </div>
              <div className="spec-item border-top">
                <span className="spec-label">IP Rating Target</span>
                <span className="spec-value">IP65 / IP67</span>
              </div>
              <div className="spec-item border-left border-top">
                <span className="spec-label">Industrial Lighting</span>
                <span className="spec-value">&gt; 500 Lux avg.</span>
              </div>
            </div>

            <div className="certification-card">
              <div className="cert-card-header">
                <span className="text-primary font-bold">Certification Status</span>
                <div className="system-status"><div className="pulse-dot"></div> VERIFIED</div>
              </div>
              <p className="text-muted text-sm mt-sm">
                All schematics undergo rigorous multi-point automated validation against NEN 1010 mandates prior to deployment phase.
              </p>
            </div>
          </div>
        </div>

        {/* Right Dark Pane */}
        <div className="detail-pane-dark bg-grid-navy">
          <div className="dark-pane-header">
            <div className="node-id text-primary"><div className="pulse-dot"></div> DISTRIBUTION_NODE_01</div>
            <div className="node-status text-muted">SYS.OP: NOMINAL</div>
          </div>
          
          <div className="dark-pane-content">
            <div className="technical-image-wrapper">
              <img src="/portfolio/proj-8.jpeg" alt="Electrical Diagram" className="img-industrial grayscale" style={{boxShadow: 'none', border: '1px solid var(--clr-primary)'}} />
              
              <div className="floating-tag tag-left">
                <div className="tag-header">Main Breaker</div>
                <div className="tag-value">3200A 4P ACB</div>
              </div>

              <div className="floating-tag tag-right">
                <div className="tag-header">Load Monitoring</div>
                <div className="tag-value">42.8 kW Active</div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ServiceDetail;
