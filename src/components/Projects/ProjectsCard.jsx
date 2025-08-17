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

// ProjectsCard.jsx
import { motion } from "framer-motion";

function ProjectsCard({ project }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
    </motion.div>
  );
}
