import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/about-background.jpg';
import profileImage from '../assets/about-photo.png';

function About() {
  return (
    <section style={{ backgroundImage: `url(${aboutImage})` }}>
      <div className="overlay">
        <h1>About Me</h1>
        <div className="info-block">
          <h2>Biography</h2>
          <p>I'm a systems engineering student at Universidad EIA, currently in 5th semester. My focus as a programmer is on backend development and data science. I am a person who does not like to close or limit myself to a single idea, I like to venture into topics that are not directly related to my career and contribute from my knowledge.</p>
        </div>
        <div className="info-block">
          <div className="experience-container">
            <div className="experience-section">
              <h3>Skills</h3>
              <p>- Python</p>
              <p>- SQL</p>
              <p>- Java</p>
              <p>- FastAPI</p>
              <p>- Scrum</p>
            </div>
            <div className="divider"></div>
            <div className="experience-section">
              <h3>Experience</h3>
              <p>I do not have professional experience, I am currently starting to work on a project for programming LED lights with movement.</p>
            </div>
          </div>
        </div>
        <img src={profileImage} alt="Your Photo" className="about-photo" />
      </div>
    </section>
  );
}

export default About;

