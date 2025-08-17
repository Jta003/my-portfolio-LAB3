// src/components/Projects/ProjectCard.jsx
function ProjectsCard({ project }) {
  return (
    <div className="project-card">
      <h3>
        <a href={project.liveLink} className="heading-link" target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h3>
      <img src={project.image} alt={project.title} className="project-img" />
    </div>
  );
}

export default ProjectsCard;
