import { Link } from 'react-router-dom';
import { Certificate, ArrowRight } from '@phosphor-icons/react';

const Certifications = () => {
  return (
    <div className="page animate-fade-in bg-white" style={{paddingBottom: 'var(--space-xl)'}}>
      <section className="about-hero bg-navy" style={{paddingBottom: 'var(--space-md)'}}>
        <div className="container text-center">
          <h1 className="hero-title">Certifications & Credentials</h1>
        </div>
      </section>

      <div className="container mt-lg">
        <div className="story-section">
          <div>
            <h2 className="section-title">Verified Compliance</h2>
            <p className="mt-sm mb-md text-muted" style={{fontSize: '1.1rem'}}>
              At Imela Projects, compliance isn't an afterthought—it is the foundation of our engineering process. We hold ourselves to the strictest national and international regulatory standards.
            </p>
            
            <ul className="check-list mt-md">
              <li style={{alignItems: 'center', marginBottom: '2rem'}}>
                <Certificate size={40} className="text-primary" />
                <div>
                  <h4 style={{fontSize: '1.2rem'}}>ISO 9001 Certified</h4>
                  <p>Quality management systems verified for industrial excellence.</p>
                </div>
              </li>
              <li style={{alignItems: 'center', marginBottom: '2rem'}}>
                <Certificate size={40} className="text-primary" />
                <div>
                  <h4 style={{fontSize: '1.2rem'}}>CIDB Registered</h4>
                  <p>Construction Industry Development Board accredited contractor.</p>
                </div>
              </li>
              <li style={{alignItems: 'center', marginBottom: '2rem'}}>
                <Certificate size={40} className="text-primary" />
                <div>
                  <h4 style={{fontSize: '1.2rem'}}>ECSA Approved Engineers</h4>
                  <p>Engineering Council of South Africa certified professionals.</p>
                </div>
              </li>
            </ul>

            <Link to="/contact" className="btn btn-primary mt-sm">
              REQUEST OUR COMPLIANCE DOSSIER <ArrowRight />
            </Link>
          </div>
          <div className="story-image-wrapper">
            <img src="/portfolio/proj-2.jpeg" alt="Certifications" className="img-industrial grayscale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
