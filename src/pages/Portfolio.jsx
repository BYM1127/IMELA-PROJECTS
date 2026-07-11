import { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('ALL PROJECTS');

  // Since we have 9 images named proj-1 to proj-9, let's just use 6 for the grid to match the mockup
  const projects = [
    { id: 1, image: '/portfolio/proj-1.jpeg', category: 'SOLAR & BACKUP' },
    { id: 2, image: '/portfolio/proj-2.jpeg', category: 'ELECTRICAL RETICULATION' },
    { id: 3, image: '/portfolio/proj-3.jpeg', category: 'NETWORK CABLING' },
    { id: 4, image: '/portfolio/proj-4.jpeg', category: 'ELECTRICAL RETICULATION' },
    { id: 5, image: '/portfolio/proj-5.jpeg', category: 'SOLAR & BACKUP' },
    { id: 6, image: '/portfolio/proj-6.jpeg', category: 'NETWORK CABLING' }
  ];

  const filteredProjects = activeTab === 'ALL PROJECTS' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="page animate-fade-in bg-white" style={{paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)'}}>
      <div className="container text-center">
        <h1 className="hero-title">Our Work in Action</h1>
        
        {/* Tabs */}
        <div className="portfolio-tabs">
          {['ALL PROJECTS', 'SOLAR & BACKUP', 'ELECTRICAL RETICULATION', 'NETWORK CABLING'].map(tab => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-grid-seamless">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item-seamless">
              <img src={project.image} alt={project.category} className="grayscale" />
              <div className="item-overlay">
                <span className="item-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary mt-lg">
          LOAD MORE SPECIFICATIONS <ArrowRight weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
