import { useState } from 'react';
import './BeforeWeBegin.css';

const BeforeWeBegin = () => {
  const [agreed, setAgreed] = useState(false);

  const terms = [
    {
      icon: "📄",
      title: "Clear Requirements",
      description: "Clients must clearly define all project requirements before the project starts. This ensures we deliver exactly what you envision."
    },
    {
      icon: "ℹ️",
      title: "Additional Requests",
      description: "Any additional requests after signing the agreement will require a new quote or project phase to maintain quality and timeline."
    },
    {
      icon: "✓",
      title: "Maintenance Terms",
      description: "Maintenance or future updates should be pre-decided in the agreement to ensure smooth ongoing support."
    },
    {
      icon: "✓",
      title: "Communication",
      description: "Clear communication and timeline commitments from both sides are mandatory for successful project completion."
    }
  ];

  return (
    <section id="before-we-begin" className="before-we-begin-section">
      <div className="before-we-begin-container">
        <h2 className="before-we-begin-title">
          Before We <span className="highlight">Begin</span>
        </h2>
        
        <p className="before-we-begin-intro">
          To ensure a smooth and successful collaboration, I believe in transparency and clear 
          expectations from the start. Here are the key terms that guide our working relationship:
        </p>

        <div className="terms-box">
          <div className="terms-grid">
            {terms.map((term, index) => (
              <div key={index} className="term-card">
                <div className={`term-icon ${term.icon === '✓' ? 'tick-icon' : ''}`}>{term.icon}</div>
                <h3 className="term-title">{term.title}</h3>
                <p className="term-description">{term.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="agreement-section">
          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className="checkbox-label">I have read and agree to the terms and conditions</span>
          </label>


        </div>
      </div>
    </section>
  );
};

export default BeforeWeBegin;
