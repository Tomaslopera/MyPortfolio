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
            <p>Brief description of the project.</p>
            <div className="tech-logos">
              <img src={reactLogo} alt="React Logo" />
              <img src={pythonLogo} alt="Python Logo" />
              <img src={sqlLogo} alt="Sql Logo" />
            </div>
            <a href="https://github.com/Tomaslopera/Recircular" target='_blank'>Ver repositorio</a>
          </div>
          <div className="project">
            <h2>Parkhub</h2>
            <p>Descripción breve...</p>
            <p>Tecnologías usadas: ...</p>
            <div className="tech-logos">
              <img src={reactLogo} alt="React Logo" />
              <img src={pythonLogo} alt="Python Logo" />
              <img src={sqlLogo} alt="Sql Logo" />
            </div>
            <p>Mi rol y contribuciones: ...</p>
            <a href="https://github.com/Tomaslopera/ParkHub" target='_blank'>Ver repositorio</a>
          </div>
          <div className="project">
            <h2>Hospital DB</h2>
            <p>Descripción breve...</p>
            <p>Tecnologías usadas: ...</p>
            <div className="tech-logos">
              <img src={sqlLogo} alt="Sql Logo" />
              <img src={sqlServerLogo} alt="SqlServer Logo" />
            </div>
            <p>Mi rol y contribuciones: ...</p>
            <a href="https://github.com/Tomaslopera/Hospital_DB" target='_blank'>Ver repositorio</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
