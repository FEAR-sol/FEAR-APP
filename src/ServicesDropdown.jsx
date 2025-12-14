import './ServicesDropdown.css';

const ServicesDropdown = ({ benefits, tools }) => {
  return (
    <div className="services-dropdown">
      <div className="dropdown-section">
        <h3>What You Get</h3>
        <div className="what-you-get-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">{benefit.icon}</div>
              <span className="benefit-text">{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dropdown-section">
        <h3>Tools & Technologies</h3>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-badge">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;