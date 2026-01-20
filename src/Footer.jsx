import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">© FEAR 2026 </p>
          <a 
            href="/TERMS AND POLICIES (2).pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-terms-link"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
