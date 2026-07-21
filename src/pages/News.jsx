const News = () => {
  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">Latest Updates</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>Stay connected with our latest projects and news.</p>
        </div>
      </section>

      <section className="section">
        <div className="container text-center" style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.1rem', color: 'var(--clr-text-muted)', maxWidth: '800px', margin: '0 auto'}}>
            We are constantly taking on new and exciting challenges. Follow our official Facebook page below to see live updates from our active project sites, community announcements, and helpful tips for maintaining your electrical and network systems.
          </p>
        </div>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="facebook-embed-container" style={{ width: '100%', maxWidth: '500px', backgroundColor: 'var(--clr-bg-card)', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fimelaconstruction&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
              width="100%" 
              height="800" 
              style={{border: 'none', overflow: 'hidden'}} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
export default News;
