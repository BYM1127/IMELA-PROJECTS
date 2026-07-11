import { WhatsappLogo } from '@phosphor-icons/react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/27836025980" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" />
    </a>
  );
};

export default WhatsAppButton;
