const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Imela Projects Expands to Limpopo",
      date: "May 12, 2026",
      summary: "We are thrilled to announce that our top-tier electrical and networking services are now fully available in Limpopo, completing our coverage of four major provinces."
    },
    {
      id: 2,
      title: "New Solar and Backup Power Division Launched",
      date: "March 28, 2026",
      summary: "In response to the growing energy needs, we've launched a specialized division focusing entirely on residential and commercial backup power solutions."
    },
    {
      id: 3,
      title: "Achieved Master Electrician Certification",
      date: "January 15, 2026",
      summary: "Our lead technical team has successfully achieved the Master Electrician Certification, further guaranteeing the highest standard of safety and quality."
    }
  ];

  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">Latest News</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>Stay updated with Imela Projects.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-list"> {/* Reusing grid layout */}
            {newsItems.map(item => (
              <div key={item.id} className="card" style={{ padding: '2rem' }}>
                <h4 className="text-primary" style={{ marginBottom: '0.5rem' }}>{item.date}</h4>
                <h2 style={{ marginBottom: '1rem' }}>{item.title}</h2>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default News;
