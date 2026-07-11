import './Home.css';
const Home = () => {
  return (
    <div className="page animate-fade-in">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Power Up Your Life With Our Electrical Expertise.</h1>
          <p className="hero-subtitle">Professional electrical services for residential and commercial properties. We deliver safe, reliable, and efficient solutions.</p>
          <div className="hero-cta">
            <a href="/contact" className="btn btn-primary">Get a Quote</a>
            <a href="/services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
