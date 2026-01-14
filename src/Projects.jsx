import './Projects.css';

const projects = [
  {
    id: 1,
    name: "Bangalore Bites",
    description: "Food delivery platform",
    preview: "/bangalorebites.jpeg",
    website: "https://yashaswi1423.github.io/banglore-bites/"
  },
  {
    id: 2,
    name: "Glamour Beauty",
    description: "Beauty & wellness booking",
    preview: "/glamour.jpeg",
    website: "https://yashaswi1423.github.io/glamour/"
  },
  {
    id: 3,
    name: "Oneness Yoga",
    description: "Yoga & meditation platform",
    preview: "/onenessyoga.jpeg",
    website: "https://onenessyoga.in"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Projects</h2>
          <p>Websites we've built for our clients</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
