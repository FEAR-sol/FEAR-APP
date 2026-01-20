import { useState, useEffect, useRef } from 'react';
import ServicesDropdown from './ServicesDropdown';
import './Services.css';

const services = [
  {
    id: 1,
    title: "App Design",
    icon: "🎨",
    subServices: [
      { icon: "📱", title: "UI/UX Frames & Prototypes", desc: "Interactive designs that bring your vision to life" },
      { icon: "🏪", title: "App Store Visual Design", desc: "ASO-optimized visuals for maximum downloads" },
      { icon: "📐", title: "Mobile Responsiveness", desc: "Adaptive design for all screen sizes" }
    ],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer"]
  },
  {
    id: 2,
    title: "App Development",
    icon: "💻",
    subServices: [
      { icon: "📲", title: "Mobile App Development", desc: "Native and cross-platform solutions" },
      { icon: "⚙️", title: "Backend & Server Development", desc: "Scalable server infrastructure" },
      { icon: "🔌", title: "App Feature Integration", desc: "Seamless third-party integrations" },
      { icon: "🔄", title: "App Migration Services", desc: "Smooth transition to new platforms" }
    ],
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Node.js", "Firebase"]
  },
  {
    id: 3,
    title: "Maintenance & Support",
    icon: "🛠️",
    subServices: [
      { icon: "🐛", title: "Bug Fix & Issue Resolution", desc: "Quick fixes for critical issues" },
      { icon: "🔄", title: "Regular App Updates", desc: "Keep your app current and secure" },
      { icon: "📊", title: "Monitoring & Optimization", desc: "Performance tracking and improvements" },
      { icon: "🔒", title: "Backup & Security", desc: "Data protection and recovery" }
    ],
    tools: ["Sentry", "New Relic", "Datadog", "AWS", "Docker"]
  },
  {
    id: 4,
    title: "ASO & Integration",
    icon: "🚀",
    subServices: [
      { icon: "📈", title: "App Store Optimization", desc: "Boost visibility and downloads" },
      { icon: "🎯", title: "Visual Store Asset Optimization", desc: "Eye-catching store presence" },
      { icon: "🔗", title: "API & Backend Integration", desc: "Connect with any service" },
      { icon: "💳", title: "Payment & Notification Services", desc: "Secure payments and push notifications" }
    ],
    tools: ["App Annie", "Sensor Tower", "Stripe", "PayPal", "OneSignal"]
  }
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
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
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className={`services-header fade-in-on-scroll ${isVisible ? 'animate' : ''}`}>
          <h2>Services</h2>
          <p>Comprehensive solutions for your mobile app needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`card service-card-wrapper fade-in-on-scroll hover-lift ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="card-int">
                <div className="top">
                  <div className="camera">
                    <div className="int"></div>
                  </div>
                  <div className="speaker"></div>
                </div>
                <div className="btn1"></div>
                <div className="btn2"></div>
                <div className="btn3"></div>
                
                <div className="hello">
                  <div className="service-title">
                    <span className="service-icon animate-pulse">{service.icon}</span>
                    <span>{service.title}</span>
                  </div>
                  <div className="service-count">{service.subServices.length} Services</div>
                  
                  <div className="service-list">
                    {service.subServices.map((sub, subIndex) => (
                      <div key={subIndex} className="service-item">
                        <div className="service-item-header">
                          <span className="service-item-icon">{sub.icon}</span>
                          <span className="service-item-title">{sub.title}</span>
                        </div>
                        <div className="service-item-desc">{sub.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hoveredService && (
          <div className="service-details-box animate-fade-in-up">
            <div className="details-left">
              <h3>What You Get</h3>
              <div className="benefits-list">
                {hoveredService.subServices.map((benefit, index) => (
                  <div key={index} className="benefit-item animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="benefit-icon">{benefit.icon}</div>
                    <span>{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="details-right">
              <h3>Tools & Technologies</h3>
              <div className="tools-bubbles">
                {hoveredService.tools.map((tool, index) => (
                  <div key={index} className="bubble-tool animate-scale-in hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>{tool}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
