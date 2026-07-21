const Contact = () => {
  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">Let's Connect</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>We're here to help with your next project.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth: '800px'}}>
          <div className="card" style={{display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center', padding: '4rem 2rem'}}>
            
            <div>
              <p style={{fontSize: '1.1rem', color: 'var(--clr-text)', marginBottom: '1.5rem', fontWeight: '500'}}>
                For the fastest response, please call or WhatsApp us directly!
              </p>
              
              <h3 style={{color: 'var(--clr-accent)', marginBottom: '0.5rem'}}>Mohau</h3>
              <p style={{fontSize: '1.2rem', marginBottom: '0.2rem'}}>
                <a href="tel:+27836025980" style={{marginRight: '10px'}}>📞 +27 83 602 5980</a>
                <a href="https://wa.me/27836025980" target="_blank" rel="noreferrer" style={{color: '#25D366'}}>💬 WhatsApp</a>
              </p>
              <p style={{color: 'var(--clr-text-muted)'}}><a href="mailto:sefadip@gmail.com">sefadip@gmail.com</a></p>
            </div>

            <hr style={{borderColor: 'rgba(255,255,255,0.1)', width: '50%', margin: '0 auto'}} />

            <div>
              <h3 style={{color: 'var(--clr-accent)', marginBottom: '0.5rem'}}>Teboho</h3>
              <p style={{fontSize: '1.2rem', marginBottom: '0.2rem'}}>
                <a href="tel:0711729075" style={{marginRight: '10px'}}>📞 071 172 9075</a>
                <a href="https://wa.me/27711729075" target="_blank" rel="noreferrer" style={{color: '#25D366'}}>💬 WhatsApp</a>
              </p>
              <p style={{color: 'var(--clr-text-muted)'}}><a href="mailto:letselateboho@gmail.com">letselateboho@gmail.com</a></p>
            </div>

            <hr style={{borderColor: 'rgba(255,255,255,0.1)', width: '50%', margin: '0 auto'}} />

            <div>
              <h3 style={{color: 'var(--clr-accent)', marginBottom: '0.5rem'}}>Company Info</h3>
              <p style={{color: 'var(--clr-text-muted)'}}>Address: Mamello Street, Centurion, South Africa, 0187</p>
              <p style={{color: 'var(--clr-text-muted)'}}>CIPC Number: Pending</p>
            </div>

            <hr style={{borderColor: 'rgba(255,255,255,0.1)', width: '50%', margin: '0 auto'}} />

            <div>
              <p style={{color: 'var(--clr-text-muted)'}}>Service Area: Gauteng, Free State, North West, Limpopo.</p>
              <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                <a href="https://www.instagram.com/imelaprojects?igsh=MjVjOG80dXQ2cmNw" target="_blank" rel="noreferrer" className="btn btn-outline">Instagram</a>
                <a href="https://www.facebook.com/share/1BVnDBsdUM/" target="_blank" rel="noreferrer" className="btn btn-outline">Facebook</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
