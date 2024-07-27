import React from 'react';
import '../styles/Hobbies.css';  // Asegúrate de tener un archivo Hobbies.css
import hobbiesImage from '../assets/hobbies-background.jpg';
import gym from '../assets/hobbie-gym.jpeg';
import friends from '../assets/hobbie-friends.jpeg';
import music from '../assets/hobbie-music.avif';
import travel from '../assets/hobbie-travel.png';
import lego from '../assets/hobbie-lego.jpeg';
import programming from '../assets/hobbie-programming.avif';
import videogames from '../assets/hobbie-videogames.jpeg';
import family from '../assets/hobbie-family.jpeg';
import movies from '../assets/hobbie-movies.jpeg'

function Hobbies() {
  return (
    <section style={{ backgroundImage: `url(${hobbiesImage})` }} className="hobbies-section">
      <div className="overlay">
        <h1>Hobbies</h1>
        <p className="hobby-name">Hobbies are an essential part of every human, it becomes the motivation in life and is the way to get out of the routine. I feel that I'm a persona that enjoys too much working on something but the thing that I appreciate the most is when I have my free time to enjoy all this</p>
        <div className="hobbies-grid">
          <div className="hobby">
            <img src={gym} alt="Hobby 1" className="hobby-photo" />
            <p className="hobby-name">Gym</p>
          </div>
          <div className="hobby">
            <img src={friends} alt="Hobby 2" className="hobby-photo" />
            <p className="hobby-name">Friends</p>
          </div>
          <div className="hobby">
            <img src={music} alt="Hobby 3" className="hobby-photo" />
            <p className="hobby-name">Music</p>
          </div>
          <div className="hobby">
            <img src={travel} alt="Hobby 4" className="hobby-photo" />
            <p className="hobby-name">Travel</p>
          </div>
          <div className="hobby">
            <img src={family} alt="Hobby 5" className="hobby-photo" />
            <p className="hobby-name">Family</p>
          </div>
          <div className="hobby">
            <img src={lego} alt="Hobby 6" className="hobby-photo" />
            <p className="hobby-name">Lego</p>
          </div>
          <div className="hobby">
            <img src={programming} alt="Hobby 7" className="hobby-photo" />
            <p className="hobby-name">Programming</p>
          </div>
          <div className="hobby">
            <img src={videogames} alt="Hobby 8" className="hobby-photo" />
            <p className="hobby-name">Videogames</p>
          </div>
          <div className="hobby">
            <img src={movies} alt="Hobby 9" className="hobby-photo" />
            <p className="hobby-name">Movies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;

