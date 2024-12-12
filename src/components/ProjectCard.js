import React from 'react';
import '../styles/App.css'; // Corrected


const ProjectCard = ({ title, description }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
