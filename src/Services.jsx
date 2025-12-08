import './Services.css';

const services = [
  {
    id: 1,
    title: "App Design",
    icon: "🎨",
    badge: "Design",
    subServices: [
      { icon: "📱", title: "UI/UX Frames & Prototypes", desc: "Interactive designs that bring your vision to life" },
      { icon: "🏪", title: "App Store Visual Design", desc: "ASO-optimized visuals for maximum downloads" },
      { icon: "📐", title: "Mobile Responsiveness", desc: "Adaptive design for all screen sizes" }
    ]
  },
  {
    id: 2,
    title: "App Development",
    icon: "💻",
    badge: "Development",
    subServices: [
      { icon: "📲", title: "Mobile App Development", desc: "Native and cross-platform solutions" },
      { icon: "⚙️", title: "Backend & Server Development", desc: "Scalable server infrastructure" },
      { icon: "🔌", title: "App Feature Integration", desc: "Seamless third-party integrations" },
      { icon: "🔄", title: "App Migration Services", desc: "Smooth transition to new platforms" }
    ]
  },
  {
    id: 3,
    title: "Maintenance & Support",
    icon: "🛠️",
    badge: "Support",
    subServices: [
      { icon: "🐛", title: "Bug Fix & Issue Resolution", desc: "Quick fixes for critical issues" },
      { icon: "🔄", title: "Regular App Updates", desc: "Keep your app current and secure" },
      { icon: "📊", title: "Monitoring & Optimization", desc: "Performance tracking and improvements" },
      { icon: "🔒", title: "Backup & Security", desc: "Data protection and recovery" }
    ]
  },
  {
    id: 4,
    title: "ASO & Integration",
    icon: "🚀",
    badge: "Marketing",
    subServices: [
      { icon: "📈", title: "App Store Optimization", desc: "Boost visibility and downloads" },
      { icon: "🎯", title: "Visual Store Asset Optimization", desc: "Eye-catching store presence" },
      { icon: "🔗", title: "API & Backend Integration", desc: "Connect with any service" },
      { icon: "💳", title: "Payment & Notification Services", desc: "Secure payments and push notifications" }
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Services</h2>
          <p>Comprehensive solutions for your mobile app needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-phone">
              <div className="service-badge">{service.badge}</div>
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="service-app-header">
                    <div className="service-app-icon">{service.icon}</div>
                    <div className="service-app-title">
                      <h3>{service.title}</h3>
                      <p>{service.subServices.length} Services</p>
                    </div>
                  </div>
                  
                  <div className="service-features">
                    {service.subServices.map((sub, index) => (
                      <div key={index} className="feature-item">
                        <div className="feature-header">
                          <span className="feature-icon">{sub.icon}</span>
                          <h4>{sub.title}</h4>
                        </div>
                        <p>{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
