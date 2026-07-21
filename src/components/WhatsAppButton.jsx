import { useState } from 'react';
import { WhatsappLogo, X } from '@phosphor-icons/react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="whatsapp-container">
      {isOpen && (
        <div className="whatsapp-menu">
          <p className="whatsapp-menu-title">Chat with:</p>
          <a href="https://wa.me/27836025980" target="_blank" rel="noopener noreferrer" className="whatsapp-menu-item">
            Mohau
          </a>
          <a href="https://wa.me/27711729075" target="_blank" rel="noopener noreferrer" className="whatsapp-menu-item">
            Teboho
          </a>
        </div>
      )}
      <button 
        onClick={toggleMenu}
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? <X size={32} weight="bold" /> : <WhatsappLogo size={32} weight="fill" />}
      </button>
    </div>
  );
};

export default WhatsAppButton;
