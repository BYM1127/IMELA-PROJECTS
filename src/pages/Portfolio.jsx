import { useState, useEffect } from 'react';
import { 
  ArrowsOut, 
  MagnifyingGlass, 
  SquaresFour, 
  ListBullets, 
  PencilSimple, 
  Plus, 
  ArrowCounterClockwise, 
  Export, 
  Check, 
  X,
  Trash
} from '@phosphor-icons/react';
import Lightbox from '../components/Lightbox';
import { DEFAULT_CATEGORIES, INITIAL_PORTFOLIO_IMAGES } from '../data/portfolioData';
import './Portfolio.css';

const LOCAL_STORAGE_IMAGES_KEY = 'imela_portfolio_images_v1';
const LOCAL_STORAGE_CATEGORIES_KEY = 'imela_portfolio_categories_v1';

const Portfolio = () => {
  const [categories, setCategories] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CATEGORIES_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_CATEGORIES;
    } catch {
      return DEFAULT_CATEGORIES;
    }
  });

  const [images, setImages] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_IMAGES_KEY);
      return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO_IMAGES;
    } catch {
      return INITIAL_PORTFOLIO_IMAGES;
    }
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'grouped'
  const [isGroupingMode, setIsGroupingMode] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  
  // Custom category modal states
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [newCatIcon, setNewCatIcon] = useState('📁');
  
  // Export modal state
  const [showExportModal, setShowExportModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Save changes to local storage when state updates
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_CATEGORIES_KEY, JSON.stringify(categories));
    } catch (e) {
      console.error('Failed to save categories', e);
    }
  }, [categories]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_IMAGES_KEY, JSON.stringify(images));
    } catch (e) {
      console.error('Failed to save images', e);
    }
  }, [images]);

  // Handle re-assigning image category
  const handleCategoryChange = (imageId, newCategory) => {
    setImages(prev => prev.map(img => img.id === imageId ? { ...img, category: newCategory } : img));
  };

  // Add new custom category
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    const catId = newCatName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    if (categories.some(c => c.id === catId)) {
      alert('Category already exists');
      return;
    }
    const newCat = { id: catId, name: newCatName.trim(), icon: newCatIcon || '📁' };
    setCategories(prev => [...prev, newCat]);
    setNewCatName('');
    setShowAddCategoryModal(false);
  };

  // Delete custom category
  const handleDeleteCategory = (catId) => {
    if (categories.length <= 1) {
      alert('You must keep at least one category.');
      return;
    }
    if (window.confirm(`Delete this category? Images in it will be moved to Electrical.`)) {
      const fallbackCat = categories.find(c => c.id !== catId)?.id || 'electrical';
      setCategories(prev => prev.filter(c => c.id !== catId));
      setImages(prev => prev.map(img => img.category === catId ? { ...img, category: fallbackCat } : img));
      if (activeCategory === catId) setActiveCategory('all');
    }
  };

  // Reset categories to default
  const handleResetDefaults = () => {
    if (window.confirm('Reset all image categories and groups back to default?')) {
      setCategories(DEFAULT_CATEGORIES);
      setImages(INITIAL_PORTFOLIO_IMAGES);
      localStorage.removeItem(LOCAL_STORAGE_CATEGORIES_KEY);
      localStorage.removeItem(LOCAL_STORAGE_IMAGES_KEY);
    }
  };

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
        <div className="portfolio-img-container" onClick={() => !isGroupingMode && setActiveImage(`/portfolio/${img.filename}`)} style={{ cursor: isGroupingMode ? 'default' : 'pointer' }}>
          <img src={`/portfolio/${img.filename}`} alt={img.title} className="portfolio-img" loading="lazy" />
          
          <div className="portfolio-badge">
            <span>{catObj.icon}</span>
            <span>{catObj.name}</span>
          </div>

          {!isGroupingMode && (
            <div className="image-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', opacity: 0, transition: 'opacity 0.3s ease' }}>
              <ArrowsOut size={48} color="white" />
            </div>
          )}
        </div>

        <div className="portfolio-info">
          <div className="portfolio-title" title={img.title}>{img.title}</div>
          <div className="portfolio-meta">
            <span>{img.filename}</span>
          </div>

          {isGroupingMode && (
            <div style={{ marginTop: '0.6rem', borderTop: '1px solid #e2e8f0', paddingTop: '0.5rem' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#475569', display: 'block' }}>Change Group:</label>
              <select 
                value={img.category} 
                onChange={(e) => handleCategoryChange(img.id, e.target.value)}
                className="edit-category-select"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.icon} {cat.name}
                  </option>
                ))}
              </select>
            </div>
          )}
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
          
          {/* Custom Grouping Mode Notification Bar */}
          {isGroupingMode && (
            <div className="grouping-bar animate-fade-in">
              <div className="grouping-bar-header">
                <div className="grouping-bar-title">
                  <PencilSimple size={24} color="#f59e0b" />
                  <span>Custom Image Grouping Mode Enabled</span>
                </div>
                <div className="grouping-actions">
                  <button className="btn-toggle" onClick={() => setShowAddCategoryModal(true)}>
                    <Plus size={16} /> Add Category
                  </button>
                  <button className="btn-toggle" onClick={() => setShowExportModal(true)}>
                    <Export size={16} /> Export Config
                  </button>
                  <button className="btn-toggle" onClick={handleResetDefaults}>
                    <ArrowCounterClockwise size={16} /> Reset
                  </button>
                  <button className="btn-toggle active" onClick={() => setIsGroupingMode(false)}>
                    <Check size={16} /> Done Editing
                  </button>
                </div>
              </div>
              <p style={{ margin: '0.6rem 0 0 0', fontSize: '0.88rem', color: '#94a3b8' }}>
                Use the dropdown menu on each image card to reassign its category. Your custom groupings are automatically saved to your browser!
              </p>
            </div>
          )}

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
              <button 
                className={`btn-toggle ${isGroupingMode ? 'active' : ''}`}
                onClick={() => setIsGroupingMode(!isGroupingMode)}
                title="Group or categorize images"
              >
                <PencilSimple size={18} /> {isGroupingMode ? 'Editing Groups' : 'Group Images'}
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
                        No images in this category yet. {isGroupingMode && 'Use Group Images mode to assign images here.'}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Add Custom Category Modal */}
      {showAddCategoryModal && (
        <div className="category-manager-modal" onClick={() => setShowAddCategoryModal(false)}>
          <div className="category-manager-card" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Manage & Add Categories</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setShowAddCategoryModal(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddCategory} style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input 
                type="text" 
                placeholder="Category Icon (e.g. ⚡, 🔌, 💡)" 
                value={newCatIcon}
                onChange={e => setNewCatIcon(e.target.value)}
                style={{ width: '80px', padding: '0.5rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
              />
              <input 
                type="text" 
                placeholder="New Category Name..." 
                value={newCatName}
                onChange={e => setNewCatName(e.target.value)}
                style={{ flex: 1, padding: '0.5rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                Add
              </button>
            </form>

            <h4 style={{ fontSize: '0.95rem', margin: '0 0 0.75rem 0', color: '#475569' }}>Existing Categories:</h4>
            {categories.map(cat => (
              <div key={cat.id} className="category-item-row">
                <span>{cat.icon} <strong>{cat.name}</strong> ({getCategoryCount(cat.id)})</span>
                <button 
                  onClick={() => handleDeleteCategory(cat.id)}
                  style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                  title="Delete category"
                >
                  <Trash size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Export Configuration Modal */}
      {showExportModal && (
        <div className="category-manager-modal" onClick={() => setShowExportModal(false)}>
          <div className="category-manager-card" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Export Portfolio Category Config</h3>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setShowExportModal(false)}>
                <X size={20} />
              </button>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1rem' }}>
              Copy your current custom categories and image assignments below if you wish to paste them directly into code:
            </p>
            <textarea 
              readOnly 
              rows={10} 
              value={JSON.stringify({ categories, images }, null, 2)}
              style={{ width: '100%', fontFamily: 'monospace', fontSize: '0.8rem', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '1rem' }}
            />
            <button 
              className="btn btn-primary" 
              style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
              onClick={() => {
                navigator.clipboard.writeText(JSON.stringify({ categories, images }, null, 2));
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? <Check size={18} /> : <Export size={18} />}
              {copied ? 'Copied to Clipboard!' : 'Copy Config JSON'}
            </button>
          </div>
        </div>
      )}

      {/* Lightbox Component */}
      {activeImage && <Lightbox imageUrl={activeImage} onClose={() => setActiveImage(null)} />}
    </div>
  );
};

export default Portfolio;
