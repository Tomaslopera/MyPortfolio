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
          <p>Write a brief biography here. Highlight your education, professional experiences, and skills.</p>
        </div>
        <div className="info-block">
          <h2>Professional Experience</h2>
          <div className="experience-container">
            <div className="experience-section">
              <h3>Skills</h3>
              <p>Detail your skills here. Mention relevant technologies and tools you are proficient in.</p>
            </div>
            <div className="divider"></div>
            <div className="experience-section">
              <h3>Experience</h3>
              <p>Detail your professional experience here. Mention roles, achievements, and relevant skills.</p>
            </div>
          </div>
        </div>
        <img src={profileImage} alt="Your Photo" className="about-photo" />
      </div>
    </section>
  );
}

export default About;

