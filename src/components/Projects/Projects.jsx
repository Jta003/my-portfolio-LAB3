// src/components/Projects/Projects.jsx - Template
import './Projects.css';
import Mini from "../../assets/images/Mini.png";
import Weather from "../../assets/images/Weather.png";
function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>
        
        {/* TODO: นักศึกษาเพิ่ม project list ที่นี่ */}
        <div className="projects-grid">
          <div className="project-placeholder">
            <h3>
            <a href="https://jta003.github.io/mini-ecommerce-collaboration/"  className='heading-link'>
            Mini-ecommerce-collaboration
            </a></h3>
            <img src={Mini} alt="Mini logo" className="project-img" />
            <h3>
            <a href="https://jta003.github.io/my-weather-app/"  className='heading-link'>
            My-Weather-app
            </a></h3>
            <img src={Weather} alt="My-Weather-app" className="project-img" />
        </div>
        </div>
        </div>
        
    </section>
  );
}

export default Projects;