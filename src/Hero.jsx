import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        
        <button className="hero-cta" onClick={scrollToContact}>
          <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Let's Build Together</span>
          <span className="circle"></span>
          <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
