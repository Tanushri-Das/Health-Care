"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import search from "@/images/search.png";
import cart from "@/images/cart.png";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Image src={logo} alt="Health Logo" width={45.04} height={46} />
          <h2 className="logo-text">Health</h2>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FiMenu />}
        </div>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <Link href="#doctors" className="links" onClick={toggleMenu}>
            Find Doctors
          </Link>
          <Link href="#hospitals" className="links" onClick={toggleMenu}>
            Hospitals
          </Link>
          <Link href="#about" className="links" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="#services" className="links" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="#contact" className="links" onClick={toggleMenu}>
            Contact
          </Link>
          <div className="icon-container">
            <div className="icon">
              <Image src={search} alt="search" width={15} height={15} />
            </div>
            <div className="icon cart-icon">
              <Image src={cart} alt="cart" width={16.88} height={15.75} />
              <span className="cart-count">5</span>
            </div>
            <button className="appointment-btn">Appointment Now</button>
          </div>
        </nav>

        <div className="desktop-menu">
          <nav className="nav-desktop">
            <Link href="#doctors" className="links">
              Find Doctors
            </Link>
            <Link href="#hospitals" className="links">
              Hospitals
            </Link>
            <Link href="#about" className="links">
              About Us
            </Link>
            <Link href="#services" className="links">
              Services
            </Link>
            <Link href="#contact" className="links">
              Contact
            </Link>
          </nav>
          <div className="icon-container">
            <div className="icon">
              <Image src={search} alt="search" width={15} height={15} />
            </div>
            <div className="icon cart-icon">
              <Image src={cart} alt="cart" width={16.88} height={15.75} />
              <span className="cart-count">5</span>
            </div>
            <div className="appointment-btn-div">
              <button className="appointment-btn">Appointment Now</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
