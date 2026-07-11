const Privacy = () => {
  return (
    <div className="page animate-fade-in bg-white" style={{padding: 'var(--space-xl) 0'}}>
      <div className="container" style={{maxWidth: '800px'}}>
        <h1 className="hero-title" style={{color: 'var(--clr-text-dark)', marginBottom: 'var(--space-md)'}}>Privacy Policy</h1>
        <div className="text-muted">
          <p>Effective Date: 2024</p>
          <p className="mt-md">Imela Projects respects your privacy and is committed to protecting your corporate and personal data.</p>
          <h3 className="text-dark mt-md">1. Data Collection</h3>
          <p>We collect information you provide directly to us when requesting specifications or quotes via email, WhatsApp, or our forms.</p>
          <h3 className="text-dark mt-md">2. Data Usage</h3>
          <p>Information is strictly used to conduct technical reviews and communicate project specifications. We do not sell your data to third parties.</p>
        </div>
      </div>
    </div>
  );
};
export default Privacy;
