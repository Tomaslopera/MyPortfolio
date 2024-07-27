import React from 'react';
import '../styles/Hobbies.css';  // Asegúrate de tener un archivo Hobbies.css
import hobbiesImage from '../assets/hobbies-background.jpg';
import gym from '../assets/hobbie-gym.jpeg';

function Hobbies() {
  return (
    <section style={{ backgroundImage: `url(${hobbiesImage})` }} className="hobbies-section">
      <div className="overlay">
        <h1>Hobbies</h1>
        <div className="hobbies-grid">
          <div className="hobby">
            <img src={gym} alt="Hobby 1" className="hobby-photo" />
            <p className="hobby-name">Gym</p>
          </div>
          <div className="hobby">
            <img src="path/to/hobby2-image.jpg" alt="Hobby 2" className="hobby-photo" />
            <p className="hobby-name">Hobby 2</p>
          </div>
          <div className="hobby">
            <img src="path/to/hobby3-image.jpg" alt="Hobby 3" className="hobby-photo" />
            <p className="hobby-name">Hobby 3</p>
          </div>
          <div className="hobby">
            <img src="path/to/hobby4-image.jpg" alt="Hobby 4" className="hobby-photo" />
            <p className="hobby-name">Hobby 4</p>
          </div>
          <div className="hobby">
            <img src="path/to/hobby5-image.jpg" alt="Hobby 5" className="hobby-photo" />
            <p className="hobby-name">Hobby 5</p>
          </div>
          <div className="hobby">
            <img src="path/to/hobby6-image.jpg" alt="Hobby 6" className="hobby-photo" />
            <p className="hobby-name">Hobby 6</p>
          </div>
          <div className="hobby">
            <img src="path/to/hobby7-image.jpg" alt="Hobby 7" className="hobby-photo" />
            <p className="hobby-name">Hobby 7</p>
          </div>
          <div className="hobby">
            <img src="path/to/hobby8-image.jpg" alt="Hobby 8" className="hobby-photo" />
            <p className="hobby-name">Hobby 8</p>
          </div>
          <div className="hobby">
            <img src="path/to/hobby9-image.jpg" alt="Hobby 9" className="hobby-photo" />
            <p className="hobby-name">Hobby 9</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;

