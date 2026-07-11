import { WarningCircle, CheckCircle, ChatCircle, X } from '@phosphor-icons/react';
import './Modals.css';

const Modals = ({ state, onClose, onConfirm, onRetry }) => {
  if (state === 'IDLE') return null;

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop" onClick={onClose}></div>
      
      {state === 'REVIEW' && (
        <div className="modal-card modal-dark">
          <div className="modal-header-dark">
            <div className="system-status text-primary"><div className="pulse-dot"></div> SYSTEM STATUS: READY</div>
          </div>
          <div className="modal-content-dark">
            <h2 className="text-light" style={{fontSize: '2.5rem'}}>Review Inquiry</h2>
            <p className="text-muted mb-lg">Please confirm the technical parameters before transmission.</p>

            <div className="review-grid">
              <div className="review-item">
                <span className="spec-label">Project Classification</span>
                <span className="spec-value text-light" style={{fontSize: '1rem'}}>Structural Integrity Analysis</span>
              </div>
              <div className="review-item">
                <span className="spec-label">Target Facility</span>
                <span className="spec-value text-light" style={{fontSize: '1rem'}}>Sector 4 Manufacturing Plant</span>
              </div>
              <div className="review-item border-top">
                <span className="spec-label">Priority Level</span>
                <span className="spec-value" style={{color: '#ef4444', fontSize: '1rem'}}><WarningCircle /> High Priority</span>
              </div>
              <div className="review-item border-top">
                <span className="spec-label">Estimated Scope</span>
                <span className="spec-value text-light" style={{fontSize: '1rem'}}>Phase 1 & 2 Diagnostics</span>
              </div>
            </div>

            <div className="review-directives mt-md">
              <span className="spec-label text-primary">Appended Directives</span>
              <p className="mt-sm text-muted" style={{fontStyle: 'italic', fontSize: '0.875rem'}}>
                "Requesting immediate review of the load-bearing columns in the main assembly hall. Recent seismic activity requires recertification against ISO-9001 standards before resumption of heavy machinery operations."
              </p>
            </div>

            <div className="modal-actions-dark mt-lg">
              <button className="btn btn-outline" onClick={onClose}>&lt; ABORT & MODIFY</button>
              <button className="btn btn-primary" onClick={onConfirm}>CONFIRM & TRANSMIT</button>
            </div>
          </div>
        </div>
      )}

      {state === 'SUCCESS' && (
        <div className="modal-card modal-dark" style={{textAlign: 'center', maxWidth: '600px'}}>
          <div className="modal-header-dark" style={{justifyContent: 'space-between'}}>
            <div className="system-status text-primary"><div className="pulse-dot"></div> SYSTEM STATUS: SECURE</div>
            <div className="text-muted" style={{fontSize: '0.75rem'}}>TX-SUCC-001</div>
          </div>
          <div className="modal-content-dark" style={{padding: 'var(--space-xl) var(--space-lg)'}}>
            <CheckCircle size={64} className="text-primary mb-md" weight="fill" />
            <h2 className="text-light" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Specification Request Received</h2>
            <p className="text-muted mb-lg" style={{maxWidth: '400px', margin: '0 auto var(--space-lg)'}}>
              Our engineering team has been notified. You will receive a preliminary technical assessment and contact within 24 business hours.
            </p>

            <div className="reference-box mb-lg">
              <span className="spec-label text-muted">REFERENCE ID</span>
              <span className="spec-value text-primary" style={{fontSize: '1.25rem'}}>IM-7742</span>
            </div>

            <div className="modal-actions-dark" style={{justifyContent: 'center'}}>
              <button className="btn btn-primary" onClick={onClose}>RETURN TO DASHBOARD</button>
              <button className="btn btn-outline" onClick={onClose}>VIEW PORTFOLIO</button>
            </div>
          </div>
        </div>
      )}

      {state === 'ERROR' && (
        <div className="modal-card modal-error">
          <div className="error-accent-bar"></div>
          <div className="modal-content-error">
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
              <WarningCircle size={40} color="#ef4444" weight="bold" />
              <h2 style={{fontSize: '2.5rem', margin: 0, lineHeight: 1.1, color: '#0f172a'}}>System Connection<br/>Interrupted</h2>
            </div>
            
            <p className="text-dark-muted mt-md mb-lg" style={{fontSize: '1.05rem', maxWidth: '450px'}}>
              We were unable to process your request at this time. Please check your network connection or contact our technical support directly at +27 (0) 11 123 4567.
            </p>

            <div className="diagnostics-box mb-lg">
              <span className="spec-label text-dark">DIAGNOSTICS</span>
              <span className="spec-value" style={{color: '#ef4444', fontSize: '0.875rem', fontWeight: 700}}>Error Code: 0x884_TIMEOUT</span>
            </div>

            <div className="modal-actions-error">
              <button className="btn btn-primary" style={{backgroundColor: '#007A4D'}} onClick={onRetry}>RETRY SUBMISSION</button>
              <button className="btn btn-outline-dark" onClick={onClose}><ChatCircle size={18}/> WHATSAPP SUPPORT</button>
            </div>
          </div>
          <div className="error-accent-bar right"></div>
        </div>
      )}
    </div>
  );
};

export default Modals;
