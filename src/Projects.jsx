import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: "E-Commerce App",
    description: "Modern shopping experience",
    preview: "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=E-Commerce+App",
    screens: [
      "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Home",
      "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Products",
      "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Cart"
    ],
    tech: ["React Native", "Node.js", "MongoDB"],
    features: ["Product catalog", "Shopping cart", "Payment integration", "Order tracking"]
  },
  {
    id: 2,
    name: "Fitness Tracker",
    description: "Track your health goals",
    preview: "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Fitness+Tracker",
    screens: [
      "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Dashboard",
      "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Workouts",
      "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Stats"
    ],
    tech: ["Flutter", "Firebase", "HealthKit"],
    features: ["Workout tracking", "Calorie counter", "Progress charts", "Social sharing"]
  },
  {
    id: 3,
    name: "Food Delivery",
    description: "Order food in minutes",
    preview: "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Food+Delivery",
    screens: [
      "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Restaurants",
      "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Menu",
      "https://via.placeholder.com/300x600/3A5A78/F1F5F9?text=Checkout"
    ],
    tech: ["React Native", "Express", "PostgreSQL"],
    features: ["Restaurant search", "Real-time tracking", "Multiple payments", "Reviews & ratings"]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Projects</h2>
          <p>Mobile apps we've built for our clients</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <img src={project.preview} alt={project.name} />
                </div>
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            
            <h2>{selectedProject.name}</h2>
            <p className="modal-description">{selectedProject.description}</p>
            
            <div className="modal-screens">
              {selectedProject.screens.map((screen, index) => (
                <div key={index} className="modal-phone">
                  <div className="phone-frame">
                    <div className="phone-notch"></div>
                    <img src={screen} alt={`Screen ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="modal-details">
              <div className="detail-section">
                <h3>Tech Stack</h3>
                <div className="tech-tags">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="detail-section">
                <h3>Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
