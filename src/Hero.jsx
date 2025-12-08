import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          <span className="text-accent">FEAR</span> Nothing Build <span className="text-accent">Everything</span>
          <br />with <span className="text-accent">AI</span>
        </h1>
        
        <div className="hero-subtitle">
          <span className="subtitle-brand">FEAR</span> — Face Everything And Rise
        </div>
        
        <p className="hero-description">
          A professional <span className="text-accent">AI Development Agency</span> specializing in custom AI
          models, automation, chatbots, and intelligent business solutions.
        </p>
        
        <div className="hero-badges">
          <div className="badge badge-yellow">
            <span className="badge-icon">⚡</span>
            <span>Basic Sites: 7-10 Days</span>
          </div>
          <div className="badge badge-purple">
            <span className="badge-icon">✨</span>
            <span>Professional: 10-20 Days</span>
          </div>
          <div className="badge badge-cyan">
            <span className="badge-icon">💻</span>
            <span>E-commerce & Apps: 15-30 Days</span>
          </div>
        </div>
        
        <button className="hero-cta">
          Let's Build Together →
        </button>
      </div>
    </section>
  );
};

export default Hero;
