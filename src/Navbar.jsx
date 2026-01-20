import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    // Trigger navbar animation on load
    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation and focus trap for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isMobileMenuOpen) return;

      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }

      if (e.key === 'Tab') {
        const focusableElements = mobileMenuRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      
      // Focus first menu item when opened
      setTimeout(() => {
        const firstMenuItem = mobileMenuRef.current?.querySelector('a');
        firstMenuItem?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  const handleMobileMenuClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isLoaded ? 'navbar-loaded' : ''}`}>
      <div className="navbar-container">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="navbar-logo">
          <img 
            src="/FEAR-LOGO.png" 
            alt="FEAR" 
            className="navbar-logo-img" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="navbar-logo-text" style={{display: 'none'}}>FEAR</span>
        </a>
        <ul className="navbar-menu">
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          ref={toggleButtonRef}
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu} 
          aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={handleMobileMenuClick}
          style={{
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
          }}
        >
          <ul className="mobile-menu-list">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} tabIndex={isMobileMenuOpen ? 0 : -1}>Home</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} tabIndex={isMobileMenuOpen ? 0 : -1}>Services</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} tabIndex={isMobileMenuOpen ? 0 : -1}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} tabIndex={isMobileMenuOpen ? 0 : -1}>Contact</a></li>
            <li>
              <button className="mobile-cta" onClick={() => scrollToSection('home')} tabIndex={isMobileMenuOpen ? 0 : -1}>
                Back to Home
              </button>
            </li>
          </ul>
        </div>
        <button className="navbar-cta" onClick={() => scrollToSection('home')}>
          <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Back to Home</span>
          <span className="circle"></span>
          <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
