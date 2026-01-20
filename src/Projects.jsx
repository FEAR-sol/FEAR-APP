import { useEffect, useRef, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <div className={`projects-header fade-in-on-scroll ${isVisible ? 'animate' : ''}`}>
          <h2>Projects</h2>
          <p>Websites we've built for our clients</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card scale-in-on-scroll hover-lift ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="phone-mockup">
                <div className="phone-frame animate-float">
                  <div className="phone-notch"></div>
                  <img src={project.preview} alt={project.name} className="hover-scale" />
                </div>
              </div>
              <div className="project-info">
                <h3 className="animate-text-glow">{project.name}</h3>
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
