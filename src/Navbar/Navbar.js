import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/Logo.webp';
import './Navbar.css'; // Import the custom CSS
import { Menu, X } from 'lucide-react'; // Import Lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${isHomePage ? 'navbar-home' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="80" className="d-inline-block align-text-top" />
        </Link>
        <button
          className={`navbar-toggler ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className={`nav-link fw-bold fs-4 ${isHomePage ? 'text-white' : ''}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link fw-bold fs-4 ${isHomePage ? 'text-white' : ''}`} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link fw-bold fs-4 ${isHomePage ? 'text-white' : ''}`} to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link fw-bold fs-4 ${isHomePage ? 'text-white' : ''}`} to="/testimonial">
                Testimonial
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link fw-bold fs-4 ${isHomePage ? 'text-white' : ''}`} to="/price">
                Price
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link fw-bold fs-4 ${isHomePage ? 'text-white' : ''}`} to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
