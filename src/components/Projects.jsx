import React from 'react';
import '../styles/Projects.css'; 
import projectsImage from '../assets/projects-background.jpg';

function Projects() {
  return (
    <section className="projects-section" style={{ backgroundImage: `url(${projectsImage})` }}>
      <div className="overlay">
        <h1>Projects</h1>
        <div className="projects-container">
          <div className="project">
            <h2>Project Title</h2>
            <p>Brief description of the project.</p>
            <img src="path/to/project-image.jpg" alt="Project Image" />
            <button>View Project</button>
          </div>
          <div className="project">
            <h2>Proyecto 2</h2>
            <p>Descripción breve...</p>
            <p>Tecnologías usadas: ...</p>
            <p>Mi rol y contribuciones: ...</p>
            <img src="path/to/project-image.jpg" alt="Project Image" />
            <button>View Project</button>
          </div>
          <div className="project">
            <h2>Proyecto 3</h2>
            <p>Descripción breve...</p>
            <p>Tecnologías usadas: ...</p>
            <p>Mi rol y contribuciones: ...</p>
            <a href="link-a-repositorio">Ver repositorio</a>
            <img src="ruta/a/screenshot3.jpg" alt="Screenshot del proyecto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
