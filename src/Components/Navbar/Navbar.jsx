import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Akash_logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">

      {/* Logo */}
      <img className="logo" src={logo} alt="Logo" />

      {/* Desktop Menu */}
      <ul className={`nav_menu ${menuOpen ? "nav_active" : ""}`}>
        <AnchorLink href="#home" onClick={closeMenu}><li className="{Menu_Link">Home</li></AnchorLink>
        <AnchorLink href="#about" onClick={closeMenu}><li className="{Menu_Link">About Me</li></AnchorLink>
        <AnchorLink href="#services" onClick={closeMenu}><li className="{Menu_Link">Services</li></AnchorLink>
        <AnchorLink href="#mywork" onClick={closeMenu}><li className="{Menu_Link">My Work</li></AnchorLink>
        <AnchorLink href="#contact" onClick={closeMenu}><li className="{Menu_Link">Contact</li></AnchorLink>
      </ul>

      {/* Hamburger / Close Icons */}
      <img
        src={menuOpen ? menu_close : menu_open}
        alt="menu"
        className="nav_mobile_icon"
        onClick={toggleMenu}
      />

      <AnchorLink href="#contact">
        <button className="nav_connect">Connect with me</button>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
