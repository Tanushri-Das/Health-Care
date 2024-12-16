import React from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import "./Hero.css";
import Link from "next/link";
import heroImg from "@/images/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <div className="logo">
          <Image src={logo} alt="Health Logo" width={16.4} height={16.39} />
          <h2 className="hero-text">24/7 Emergency Service</h2>
        </div>
        <h2 className="hero-content-text1">
          Caring for <span className="health">Health</span>
        </h2>
        <h2 className="hero-content-text2">Caring for You</h2>
        <p className="hero-description">
          A brief statement outlining the purpose and mission of the clinic.
          This can include the commitment to patient care, community health.
        </p>
        <div className="btn-div">
          <Link href="/discover-more">
            <button className="discover">Discover More</button>
          </Link>
          <Link href="/services">
            <button className="appointment-btn">See All Services</button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={heroImg}
          className="hero-img"
          alt="hero-img"
          width={607}
          height={694.74}
        />
      </div>
    </div>
  );
};

export default Hero;
