import React from 'react';
import '../styles/Contact.css';  
import contactImage from '../assets/contact-background.jpg'; 

import whatsappIcon from '../assets/logo-whatsapp.svg';
import mailIcon from '../assets/mail-logo.svg';
import linkedinIcon from '../assets/logo-linkedin.svg';
import githubIcon from '../assets/logo-github.svg';

function Contact() {
  return (
    <section style={{ backgroundImage: `url(${contactImage})` }}>
      <div className="overlay">
        <h1>Contact Me</h1>
        <div className="contact-icons">
          <a href="https://wa.me/3046576354" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="mailto:loperatomas410@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="Mail" />
          </a>
          <a href="https://www.linkedin.com/in/tomas-lopera-413b4322a/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Tomaslopera" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
