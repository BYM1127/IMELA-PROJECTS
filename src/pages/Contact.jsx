const Contact = () => {
  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>Efficient. Professional. Dependable.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth: '800px'}}>
          <div className="card" style={{display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center', padding: '4rem 2rem'}}>
            
            <div>
              <h3 style={{color: 'var(--clr-accent)', marginBottom: '0.5rem'}}>Mohau</h3>
              <p style={{fontSize: '1.2rem', marginBottom: '0.2rem'}}><a href="tel:+27836025980">+27 83 602 5980</a></p>
              <p style={{color: 'var(--clr-text-muted)'}}><a href="mailto:sefadip@gmail.com">sefadip@gmail.com</a></p>
            </div>

            <hr style={{borderColor: 'rgba(255,255,255,0.1)', width: '50%', margin: '0 auto'}} />

            <div>
              <h3 style={{color: 'var(--clr-accent)', marginBottom: '0.5rem'}}>Teboho</h3>
              <p style={{fontSize: '1.2rem', marginBottom: '0.2rem'}}><a href="tel:+27694407060">+27 69 440 7060</a></p>
              <p style={{color: 'var(--clr-text-muted)'}}><a href="mailto:letselateboho@gmail.com">letselateboho@gmail.com</a></p>
            </div>

            <hr style={{borderColor: 'rgba(255,255,255,0.1)', width: '50%', margin: '0 auto'}} />

            <div>
              <p style={{color: 'var(--clr-text-muted)'}}>Serving Midrand, Johannesburg and surrounding areas.</p>
              <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                <a href="https://www.instagram.com/imelaprojects" className="btn btn-outline">Instagram</a>
                <a href="https://www.facebook.com/imelaprojects" className="btn btn-outline">Facebook</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
