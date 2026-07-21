import './About.css';

const About = () => {
  // Removed servicesData

  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>Where Expertise Meets Efficiency</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-card">
        <div className="container">
          <div className="text-center" style={{marginBottom: '3rem'}}>
            <h4 className="text-primary">Our Story</h4>
            <h2 className="section-title center">A Legacy of Excellence</h2>
            <p style={{maxWidth: '800px', margin: '0 auto', marginTop: '1rem', fontSize: '1.1rem'}}>
              Imela Projects was founded on the belief that safety and reliability should never be compromised. What started as a small local initiative has rapidly grown into one of the most trusted names in electrical and network installations across the region. We pride ourselves on a deep understanding of modern infrastructure, delivering tailored solutions that empower homes and businesses alike.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div className="card text-center" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--clr-primary)', marginBottom: '1rem' }}>Our Mission</h3>
              <p>To provide cutting-edge, safe, and efficient electrical and data solutions that exceed our clients' expectations, while maintaining the highest standards of industry compliance.</p>
            </div>
            <div className="card text-center" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--clr-accent)', marginBottom: '1rem' }}>Our Vision</h3>
              <p>To be the premier provider of integrated infrastructure services in South Africa, recognized for our relentless commitment to quality, innovation, and customer satisfaction.</p>
            </div>
          </div>

          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div className="about-image">
              <img src="/portfolio/proj-5.jpeg" alt="Imela Projects team at work" style={{width: '100%', borderRadius: 'var(--border-radius)'}} />
            </div>
            <div className="about-content">
              <h2 className="section-title">Speed, Precision, and Reliability.</h2>
              <p style={{fontSize: '1.1rem', color: 'var(--clr-text-muted)', marginBottom: '1rem'}}>
                Our team of highly skilled and certified technicians is committed to delivering reliable, efficient solutions for all your electrical, solar, network, and data needs. We don't just fix problems; we engineer lasting solutions. 
              </p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem'}}>
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


      {/* CTA Banner */}
      <section className="section bg-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div className="container">
          <h2 className="section-title center" style={{marginBottom: '1rem'}}>Ready to start your project?</h2>
          <p style={{fontSize: '1.2rem', color: 'var(--clr-text-muted)', marginBottom: '2rem'}}>
            Reach out to our friendly team today. We're here to answer any questions and provide a free quote.
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
            <a href="tel:0711729075" className="btn btn-primary">Call Us Today</a>
            <a href="https://wa.me/27836025980" target="_blank" rel="noreferrer" className="btn btn-outline">Message on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
