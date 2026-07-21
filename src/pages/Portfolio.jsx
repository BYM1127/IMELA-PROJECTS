import './Portfolio.css';

const Portfolio = () => {
  const imageFiles = ["FB_IMG_1784634372375.jpg","FB_IMG_1784634375713.jpg","FB_IMG_1784634378346.jpg","FB_IMG_1784634381529.jpg","FB_IMG_1784634383946.jpg","FB_IMG_1784634386798.jpg","FB_IMG_1784634390182.jpg","FB_IMG_1784634397853.jpg","FB_IMG_1784634400829.jpg","FB_IMG_1784634405254.jpg","FB_IMG_1784634411257.jpg","FB_IMG_1784634421041.jpg","FB_IMG_1784634436351.jpg","FB_IMG_1784634439953.jpg","FB_IMG_1784634442266.jpg","FB_IMG_1784634449098.jpg","FB_IMG_1784634452052.jpg","FB_IMG_1784634460842.jpg","FB_IMG_1784634514040.jpg","FB_IMG_1784634526909.jpg","FB_IMG_1784634529037.jpg","FB_IMG_1784634538875.jpg","FB_IMG_1784634560559.jpg","FB_IMG_1784634564216.jpg","FB_IMG_1784634571342.jpg","FB_IMG_1784634573649.jpg","FB_IMG_1784634576236.jpg","FB_IMG_1784634611747.jpg","FB_IMG_1784634624738.jpg","FB_IMG_1784634627612.jpg","FB_IMG_1784634629857.jpg","FB_IMG_1784634632446.jpg","FB_IMG_1784634635752.jpg","FB_IMG_1784634637351.jpg","FB_IMG_1784634641993.jpg","FB_IMG_1784634642231.jpg","FB_IMG_1784634666645.jpg","FB_IMG_1784634669554.jpg","FB_IMG_1784634671072.jpg","FB_IMG_1784634673490.jpg","FB_IMG_1784634677326.jpg","FB_IMG_1784634679294.jpg","proj-1.jpeg","proj-2.jpeg","proj-3.jpeg","proj-4.jpeg","proj-5.jpeg","proj-6.jpeg","proj-7.jpeg","proj-8.jpeg","proj-9.jpeg"];

  const projects = imageFiles.map((filename, i) => ({
    id: i + 1,
    image: `/portfolio/${filename}`,
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
