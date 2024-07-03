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
        <Link to="/" className="logo">
          <img src={LogoImage} alt="coffee Logo" className="logo-image" />
          <span className="logo-text">Coffee</span>
        </Link>

        <div className={`nav-links ${isNavOpen ? "show" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="/why-us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Why Us
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
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
