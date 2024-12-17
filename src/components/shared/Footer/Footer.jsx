import React from "react";
import "./Footer.css";
import Image from "next/image";
import logo from "@/images/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaAngleRight,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer-bg">
      <div className="footer-content">
        <div>
          <div className="footer-logo">
            <Image src={logo} alt="Health Logo" width={46.12} height={47.11} />
            <h2 className="footer-logo-text">Health</h2>
          </div>
          <p className="footer-text">
            Sahibabad, Ghaziabad, Uttar Pradesh 201005
          </p>
          <h3 className="footer-text">+1-887*****78787</h3>
          <h4>info@demohelp.com</h4>
          <div className="social-links">
            <div className="social-btn">
              <FaFacebook className="social-icon" />
            </div>
            <div className="social-btn">
              <FaTwitter className="social-icon" />
            </div>
            <div className="social-btn">
              <FaYoutube className="social-icon" />
            </div>
            <div className="social-btn">
              <FaPinterestP className="social-icon" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="footer-title">Quick Links</h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">About Us</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Our Pricing</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Our Gallery</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text"> Appointment</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Privacy Policy</span>
          </h2>
        </div>
        <div>
          <h2 className="footer-title">Department</h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Orthology</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Neurology</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Dental Care</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Opthalmology</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Cardiology</span>
          </h2>
        </div>
        <div>
          <h2 className="footer-title">Useful Links</h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">About Us</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Our Blog</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Our Gallery</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Appointment</span>
          </h2>
          <h2 className="footer-link-tag">
            <FaAngleRight className="footer-link-icon" />
            <span className="footer-link-text">Privacy Policy</span>
          </h2>
        </div>
      </div>
      <div className="footer-border"></div>
      <p className="copyright-text">
        Copyright ©{date.getFullYear()} Health.com. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
