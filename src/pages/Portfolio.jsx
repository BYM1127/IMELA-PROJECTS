import { useState } from 'react';
import { 
  ArrowsOut, 
  MagnifyingGlass, 
  SquaresFour, 
  ListBullets 
} from '@phosphor-icons/react';
import Lightbox from '../components/Lightbox';
import { DEFAULT_CATEGORIES, INITIAL_PORTFOLIO_IMAGES } from '../data/portfolioData';
import './Portfolio.css';

const Portfolio = () => {
  const categories = DEFAULT_CATEGORIES;
  const images = INITIAL_PORTFOLIO_IMAGES;

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'grouped'
  const [activeImage, setActiveImage] = useState(null);

  // Filter images based on search query and active tab
  const filteredImages = images.filter(img => {
    const matchesCategory = activeCategory === 'all' || img.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      img.filename.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate item counts for tabs
  const getCategoryCount = (catId) => {
    if (catId === 'all') return images.length;
    return images.filter(img => img.category === catId).length;
  };

  // Render Image Card
  const renderImageCard = (img) => {
    const catObj = categories.find(c => c.id === img.category) || { name: 'Uncategorized', icon: '📁' };
    return (
      <div key={img.id} className="portfolio-item">
        <div 
          className="portfolio-img-container" 
          onClick={() => setActiveImage(`/portfolio/${img.filename}`)} 
          style={{ cursor: 'pointer' }}
        >
          <img src={`/portfolio/${img.filename}`} alt={img.title} className="portfolio-img" loading="lazy" />
          
          <div className="portfolio-badge">
            <span>{catObj.icon}</span>
            <span>{catObj.name}</span>
          </div>

          <div className="image-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', opacity: 0, transition: 'opacity 0.3s ease' }}>
            <ArrowsOut size={48} color="white" />
          </div>
        </div>

        <div className="portfolio-info">
          <div className="portfolio-title" title={img.title}>{img.title}</div>
          <div className="portfolio-meta">
            <span>{img.filename}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1 className="hero-title">Our Project Portfolio</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>
            Explore our electrical installations, network infrastructure, security setups, and power solutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Control Bar */}
          <div className="portfolio-controls">
            {/* Search Input */}
            <div className="portfolio-search-box">
              <MagnifyingGlass size={18} className="portfolio-search-icon" />
              <input 
                type="text" 
                placeholder="Search projects or filenames..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="portfolio-search-input"
              />
            </div>

            {/* Actions & View Toggles */}
            <div className="portfolio-actions">
              <button 
                className={`btn-toggle ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <SquaresFour size={18} /> Grid
              </button>
              <button 
                className={`btn-toggle ${viewMode === 'grouped' ? 'active' : ''}`}
                onClick={() => setViewMode('grouped')}
                title="Grouped View"
              >
                <ListBullets size={18} /> Grouped
              </button>
            </div>
          </div>

          {/* Category Filter Tabs */}
          {viewMode === 'grid' && (
            <div className="category-tabs">
              <button 
                className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span>🌐 All Projects</span>
                <span className="category-count">{getCategoryCount('all')}</span>
              </button>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.icon} {cat.name}</span>
                  <span className="category-count">{getCategoryCount(cat.id)}</span>
                </button>
              ))}
            </div>
          )}

          {/* Main Gallery Display */}
          {viewMode === 'grid' ? (
            filteredImages.length > 0 ? (
              <div className="portfolio-gallery">
                {filteredImages.map(img => renderImageCard(img))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No projects found</h3>
                <p>Try adjusting your search query or category filter.</p>
              </div>
            )
          ) : (
            /* Grouped View (Sectioned by Category) */
            <div className="portfolio-grouped-view">
              {categories.map(cat => {
                const catImages = images.filter(img => {
                  const matchesCategory = img.category === cat.id;
                  const matchesSearch = searchQuery === '' || 
                    img.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    img.filename.toLowerCase().includes(searchQuery.toLowerCase());
                  return matchesCategory && matchesSearch;
                });

                if (catImages.length === 0 && searchQuery !== '') return null;

                return (
                  <div key={cat.id} className="portfolio-group-section">
                    <div className="group-header">
                      <h2 className="group-header-title">
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </h2>
                      <span className="group-header-count">{catImages.length} {catImages.length === 1 ? 'item' : 'items'}</span>
                    </div>
                    {catImages.length > 0 ? (
                      <div className="portfolio-gallery">
                        {catImages.map(img => renderImageCard(img))}
                      </div>
                    ) : (
                      <div style={{ fontStyle: 'italic', color: '#94a3b8', padding: '1rem 0' }}>
                        No images in this category.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Component */}
      {activeImage && <Lightbox imageUrl={activeImage} onClose={() => setActiveImage(null)} />}
    </div>
  );
};

export default Portfolio;
