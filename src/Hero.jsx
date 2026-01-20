import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  const fullText = "“FEAR Builds Apps That Bring Ideas To Life.”";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsAnimationComplete(true);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderAnimatedTitle = () => {
    const words = displayedText.split(' ');
    return words.map((word, index) => {
      // Remove quotes and check for accent words
      const cleanWord = word.replace(/[""]/g, '');
      const isAccentWord = cleanWord === 'FEAR' || cleanWord === 'ideas' || cleanWord === 'life.' || cleanWord === 'life';
      return (
        <span key={index} className={`word ${isAccentWord ? 'text-accent' : ''}`}>
          {word}{index < words.length - 1 ? ' ' : ''}
        </span>
      );
    });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title typewriter">
          {renderAnimatedTitle()}
          <span className={`cursor ${isAnimationComplete ? 'fade-out' : ''}`}>|</span>
        </h1>
        
        <div className={`hero-subtitle fade-in-up ${isAnimationComplete ? 'animate' : ''}`} style={{animationDelay: '0.5s'}}>
          <span className="subtitle-brand">FEAR</span> — Face Everything And Rise
        </div>
        
        <p className={`hero-description fade-in-up ${isAnimationComplete ? 'animate' : ''}`} style={{animationDelay: '0.8s'}}>
          A professional <span className="text-accent">Mobile App Development Agency</span> specializing in 
          custom mobile apps, UI/UX design, backend development, and comprehensive app solutions.
        </p>
        
        <div className={`hero-badges fade-in-up ${isAnimationComplete ? 'animate' : ''}`} style={{animationDelay: '1.1s'}}>
          <div className="badge badge-yellow" style={{animationDelay: '1.2s'}}>
            <span className="badge-icon">📱</span>
            <span>Simple Apps: 7-10 Days</span>
          </div>
          <div className="badge badge-purple" style={{animationDelay: '1.4s'}}>
            <span className="badge-icon">✨</span>
            <span>Professional Apps: 10-20 Days</span>
          </div>
          <div className="badge badge-cyan" style={{animationDelay: '1.6s'}}>
            <span className="badge-icon">🚀</span>
            <span>Complex Apps: 15-30 Days</span>
          </div>
        </div>
        
        <button className={`hero-cta fade-in-up ${isAnimationComplete ? 'animate' : ''}`} style={{animationDelay: '1.8s'}} onClick={scrollToContact}>
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
