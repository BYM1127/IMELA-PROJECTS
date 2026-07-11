const Terms = () => {
  return (
    <div className="page animate-fade-in bg-white" style={{padding: 'var(--space-xl) 0'}}>
      <div className="container" style={{maxWidth: '800px'}}>
        <h1 className="hero-title" style={{color: 'var(--clr-text-dark)', marginBottom: 'var(--space-md)'}}>Terms of Service</h1>
        <div className="text-muted">
          <p>Effective Date: 2024</p>
          <p className="mt-md">Welcome to Imela Projects. By accessing our services, you agree to these terms.</p>
          <h3 className="text-dark mt-md">1. Engineering Services</h3>
          <p>All technical specifications and quotations provided are valid for 30 days unless otherwise stated.</p>
          <h3 className="text-dark mt-md">2. Compliance & Liability</h3>
          <p>Imela Projects adheres to strict regulatory compliance. We are not liable for pre-existing infrastructural failures not covered in our immediate scope of work.</p>
        </div>
      </div>
    </div>
  );
};
export default Terms;
