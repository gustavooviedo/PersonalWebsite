import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <div className="projects">
      <h2>Coding Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.tech}</p>
            <a href={project.github}>GitHub</a> | <a href={project.demo}>Live Demo</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;