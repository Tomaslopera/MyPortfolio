import React from 'react';
import '../styles/Contact.css';  // Asegúrate de tener un archivo Contact.css
import contactImage from '../assets/contact-background.jpg'; // Cambia esta ruta a tu imagen

function Contact() {
  return (
    <section style={{ backgroundImage: `url(${contactImage})` }}>
      <div className="overlay">
        <h1>Contact Me</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

