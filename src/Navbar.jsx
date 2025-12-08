import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">FEAR</div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <button className="navbar-cta">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
