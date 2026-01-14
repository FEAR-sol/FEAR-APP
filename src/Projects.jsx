import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: "Bangalore Bites",
    description: "Food delivery platform",
    preview: "/bangalorebites.jpeg",
    website: "https://bangalorebites.in",
    screens: [
      "/bangalorebites.jpeg",
      "/bangalorebites.jpeg",
      "/bangalorebites.jpeg"
    ],
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["Restaurant listings", "Real-time order tracking", "Multiple payment options", "User reviews & ratings"]
  },
  {
    id: 2,
    name: "Glamour Beauty",
    description: "Beauty & wellness booking",
    preview: "/glamour.jpeg",
    website: "https://glamourbeauty.in",
    screens: [
      "/glamour.jpeg",
      "/glamour.jpeg",
      "/glamour.jpeg"
    ],
    tech: ["React", "Firebase", "Stripe", "Google Maps API"],
    features: ["Service booking", "Appointment scheduling", "Payment integration", "Location-based search"]
  },
  {
    id: 3,
    name: "Oneness Yoga",
    description: "Yoga & meditation platform",
    preview: "/onenessyoga.jpeg",
    website: "https://onenessyoga.in",
    screens: [
      "/onenessyoga.jpeg",
      "/onenessyoga.jpeg",
      "/onenessyoga.jpeg"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Video Streaming"],
    features: ["Live yoga classes", "On-demand videos", "Progress tracking", "Community features"]
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

            <a 
              href={selectedProject.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="visit-website-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Visit Website</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
