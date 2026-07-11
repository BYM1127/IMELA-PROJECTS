import './Portfolio.css';

const Portfolio = () => {
  // Since we have 9 images named proj-1 to proj-9
  const projects = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `/portfolio/proj-${i + 1}.jpeg`,
    title: `Project ${i + 1}`
  }));

  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">Our Work</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>A showcase of our recent electrical installations and maintenance projects.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-gallery">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-item">
                <img src={project.image} alt={project.title} className="portfolio-img" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
