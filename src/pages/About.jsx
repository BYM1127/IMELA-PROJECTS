const About = () => {
  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">About Imela Projects</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>Where Expertise Meets Efficiency</p>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/portfolio/proj-5.jpeg" alt="Imela Projects team at work" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            </div>
            <div className="about-content">
              <h2 className="section-title">Speed and Precision.</h2>
              <p style={{fontSize: '1.1rem', color: 'var(--clr-text-muted)', marginBottom: '1rem'}}>
                Imela Projects specializes in resolving all electrical and data-related issues with speed and precision. 
              </p>
              <p style={{fontSize: '1.1rem', color: 'var(--clr-text-muted)', marginBottom: '2rem'}}>
                Our team of highly skilled and certified technicians is committed to delivering reliable, efficient solutions for all your electrical, solar, network, and data needs.
              </p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%'}}>✓</div>
                  <h4>Fast, reliable service</h4>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%'}}>✓</div>
                  <h4>Certified professionals</h4>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%'}}>✓</div>
                  <h4>End-to-end solutions</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
