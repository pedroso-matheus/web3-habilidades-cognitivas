import React from 'react';

import { whatsapp } from '../../config/siteInfo';

const WhatsAppLink = ({ label, message }) => {

  const link = message 
  ? `https://api.whatsapp.com/send?phone=55${whatsapp}&text=${encodeURIComponent(message)}`
  : `https://api.whatsapp.com/send?phone=55${whatsapp}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none custom-color-light-blue">
      <i className="bi bi-whatsapp me-2"></i>
      <span>{label || 'WhatsApp'}</span>
    </a>
  );
};

export default WhatsAppLink;
