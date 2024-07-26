import React from 'react';
import '../styles/Hobbies.css';  // Asegúrate de tener un archivo Hobbies.css
import hobbiesImage from '../assets/hobbies-background.jpg'; // Cambia esta ruta a tu imagen

function Hobbies() {
  return (
    <section style={{ backgroundImage: `url(${hobbiesImage})` }}>
      <div className="overlay">
        <h1>Hobbies</h1>
        <p>Share your hobbies and interests here. Explain why they are important to you.</p>
        <img src="path/to/hobby-image.jpg" alt="Hobby Image" />
      </div>
    </section>
  );
}

export default Hobbies;

