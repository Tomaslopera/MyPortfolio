import React from 'react';
import '../styles/Projects.css';
import projectsImage from '../assets/projects-background.jpg';
import reactLogo from '../assets/react-logo.svg';
import pythonLogo from '../assets/python-logo.svg';
import sqlLogo from '../assets/sql-logo.png'
import sqlServerLogo from '../assets/sqlServer-logo.png'

function Projects() {
  return (
    <section className="projects-section" style={{ backgroundImage: `url(${projectsImage})` }}>
      <div className="overlay">
        <h1>Projects</h1>
        <div className="projects-container">
          <div className="project">
            <h2>Recircular</h2>
            <p>In the current context, the circular economy has become a priority for many companies and organizations seeking to reduce environmental impact and promote sustainability. In this sense, the idea of ​​developing a Marketplace-type website project with a focus on the circular economy is proposed.</p>
            <p><b>Technologies</b></p>
            <div className="tech-logos">
              <img src={reactLogo} alt="React Logo" />
              <img src={pythonLogo} alt="Python Logo" />
              <img src={sqlLogo} alt="Sql Logo" />
            </div>
            <p><b>Backend Developer</b></p>
            <p>Database, an API was designed through FastAPI using the SQLAlchemy library to connect to the MySQL database.</p>
            <a href="https://github.com/Tomaslopera/Recircular" target='_blank'>Ver repositorio</a>
          </div>
          <div className="project">
            <h2>Parkhub</h2>
            <p>Is a parking reservation project that allows users to register, log in, change password, make a reservation and view reservation history.</p>
            <p><b>Technologies</b></p>
            <div className="tech-logos">
              <img src={reactLogo} alt="React Logo" />
              <img src={pythonLogo} alt="Python Logo" />
              <img src={sqlLogo} alt="Sql Logo" />
            </div>
            <p><b>Backend Developer</b></p>
            <p>Database, an API was designed through FastAPI using the SQLAlchemy library to connect to the MySQL database.</p>
            <a href="https://github.com/Tomaslopera/ParkHub" target='_blank'>Ver repositorio</a>
          </div>
          <div className="project">
            <h2>Hospital DB</h2>
            <p>This project consists of a hospital management system to manage information related to patients, doctors, nurses, appointments, medical records, medical insurance, medical procedures, laboratory results, medications, medical equipment and scheduling.</p>
            <p><b>Technologies</b></p>
            <div className="tech-logos">
              <img src={sqlLogo} alt="Sql Logo" />
              <img src={sqlServerLogo} alt="SqlServer Logo" />
            </div>
            <p><b>SQL Developer</b></p>
            <p>The project was carried out in SQLServer for the most part as a practice for managing relational databases, it should be noted that the Queries and Functions were executed in MySQL.</p>
            <a href="https://github.com/Tomaslopera/Hospital_DB" target='_blank'>Ver repositorio</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
