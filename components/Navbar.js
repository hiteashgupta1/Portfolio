import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#experience">Experience</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#certifications">Certifications</Link>
        <Link to="#contact">Contact</Link>
      </div>
      <div>
        <button onClick={toggleDarkMode} className="toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <iframe src="https://drive.google.com/file/d/185Nh0kt_qs1UfYKkOS9W4ePhklfoRbNp/view?usp=sharing" width="100%" height="600px"></iframe>
          <button>Download Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;