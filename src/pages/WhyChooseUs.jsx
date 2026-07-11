const WhyChooseUs = () => {
  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">Why Choose Us</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>Where Expertise Meets Efficiency</p>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--clr-text-muted)'}}>
              Imela Projects is committed to delivering reliable, efficient solutions for all your electrical, solar, network, and data needs. Here is why our clients trust us:
            </p>

            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left'}}>
              
              <div className="card">
                <h2 style={{color: 'var(--clr-primary)', marginBottom: '0.5rem'}}>Fast, reliable service</h2>
                <p>We understand that electrical and network issues can halt your productivity. Our response team ensures that downtime is minimized with quick and precise interventions.</p>
              </div>

              <div className="card">
                <h2 style={{color: 'var(--clr-primary)', marginBottom: '0.5rem'}}>Certified professionals</h2>
                <p>Our team consists of highly skilled and certified technicians who bring years of hands-on experience. We never compromise on safety or quality standards.</p>
              </div>

              <div className="card">
                <h2 style={{color: 'var(--clr-primary)', marginBottom: '0.5rem'}}>End-to-end solutions</h2>
                <p>From the initial routing of rooftop solar cables to the final certificate of compliance, we handle every aspect of the project so you don't have to juggle multiple contractors.</p>
              </div>

            </div>
        </div>
      </section>
    </div>
  );
};
export default WhyChooseUs;
