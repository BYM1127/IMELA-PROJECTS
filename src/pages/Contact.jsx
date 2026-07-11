import { Envelope, Phone, WhatsappLogo, MapPin } from '@phosphor-icons/react';
import { useState } from 'react';
import Modals from '../components/Modals';
import './Contact.css';

const Contact = () => {
  const [modalState, setModalState] = useState('IDLE');

  const handleInitiate = (e) => {
    e.preventDefault();
    setModalState('REVIEW');
  };

  const handleConfirm = () => {
    // 10% chance to show error, otherwise success
    if (Math.random() > 0.9) {
      setModalState('ERROR');
    } else {
      setModalState('SUCCESS');
    }
  };

  return (
    <div className="page animate-fade-in">
      <Modals 
        state={modalState} 
        onClose={() => setModalState('IDLE')} 
        onConfirm={handleConfirm}
        onRetry={() => setModalState('REVIEW')}
      />

      {/* Hero */}
      <section className="contact-hero bg-grid-navy text-center">
        <div className="container">
          <h1 className="hero-title">LET'S WORK TOGETHER</h1>
        </div>
      </section>

      {/* Split Section */}
      <section className="section bg-offwhite">
        <div className="container contact-split">
          
          {/* Left: Contact Info */}
          <div className="contact-info-panel">
            <h2 className="section-title">GET IN TOUCH</h2>
            <p className="text-muted mb-lg">
              For emergency power failures, high-voltage faults, or immediate network degradation, contact our 24/7 operations room immediately.
            </p>

            <div className="info-item">
              <Envelope size={24} className="text-primary" />
              <div>
                <h4 className="text-dark">EMAIL</h4>
                <p>engineering@imelaprojects.co.za</p>
              </div>
            </div>

            <div className="info-item mt-md">
              <Phone size={24} className="text-primary" />
              <div>
                <h4 className="text-dark">EMERGENCY (24/7)</h4>
                <p>Operations Room: +27 83 602 5980</p>
              </div>
            </div>

            <div className="info-item mt-md">
              <WhatsappLogo size={24} className="text-primary" />
              <div>
                <h4 className="text-dark">WHATSAPP DIRECT</h4>
                <a href="https://wa.me/27836025980" target="_blank" rel="noreferrer" className="text-dark font-bold hover-primary">
                  Chat with Engineering Team
                </a>
              </div>
            </div>

            <div className="info-item mt-md">
              <MapPin size={24} className="text-primary" />
              <div>
                <h4 className="text-dark">HEADQUARTERS</h4>
                <p>Midrand, Gauteng</p>
              </div>
            </div>
            
            <div className="mt-lg">
              <img src="/portfolio/proj-4.jpeg" alt="Location Map Placeholder" className="img-industrial grayscale" style={{maxWidth: '300px'}} />
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-panel">
            <div className="form-card card">
              <h3 className="mb-lg">REQUEST SPECIFICATION</h3>
              
              <form className="contact-form" onSubmit={handleInitiate}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Engineering Director, John Doe" required />
                </div>
                
                <div className="form-group">
                  <label>Corporate Email</label>
                  <input type="email" placeholder="john@company.com" required />
                </div>

                <div className="form-group">
                  <label>Contact Number</label>
                  <input type="tel" placeholder="+27 00 000 0000" required />
                </div>

                <div className="form-group">
                  <label>Service Required</label>
                  <select required>
                    <option value="">Select Engineering Service</option>
                    <option value="electrical">Electrical Installation</option>
                    <option value="solar">Renewable Energy & Backup</option>
                    <option value="network">Network Cabling</option>
                    <option value="cctv">CCTV & Access Control</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Project Scope & Timeline</label>
                  <textarea rows="4" placeholder="Briefly describe the technical requirements..." required></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}}>
                  INITIATE TECHNICAL REVIEW
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
