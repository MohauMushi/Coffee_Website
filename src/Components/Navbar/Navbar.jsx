import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoImage from "/coffee.png";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="logo">
          <img src={LogoImage} alt="coffee Logo" className="logo-image" />
          <span className="logo-text">Coffee</span>
        </div>

        <div className={`nav-links ${isNavOpen ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="menu-icon-container">
          <div
            onClick={toggleNav}
            className="menu-icon"
            aria-label="Toggle navigation"
          >
            <span className={`hamburger ${isNavOpen ? "open" : ""}`}></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
