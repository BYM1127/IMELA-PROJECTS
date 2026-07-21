import { X } from '@phosphor-icons/react';
import { useEffect } from 'react';
import './Lightbox.css';

const Lightbox = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!imageUrl) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close image">
        <X size={32} weight="bold" />
      </button>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={imageUrl} alt="Full screen view" className="lightbox-image" />
      </div>
    </div>
  );
};

export default Lightbox;
