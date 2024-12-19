import React from "react";
import "./ChooseUs.css";
import Image from "next/image";
import logo from "@/images/logo.png";
import chooseImg from "@/images/choose.png";

const ChooseUs = () => {
  return (
    <div className="choose">
      <div className="choose-first">
        <div className="choose-logo">
          <Image src={logo} alt="Health Logo" width={26.87} height={27.45} />
          <h2 className="service-text">Why Choose Us</h2>
        </div>
        <p className="choose-text">
          We Remain Continuously <br /> Available for Your Health <br />{" "}
          Services
        </p>
        <div className="choose-content-div">
          <button className="choose-content">01</button>
          <div>
            <h2 className="choose-content-text">Compassionate & Expert Care</h2>
            <p className="choose-content-desc">
              Our team of dedicated healthcare professionals combines <br />
              years of experience with a genuine commitment to providing.
            </p>
            <div className="border-line"></div>
          </div>
        </div>
        <div className="choose-content-div">
          <button className="choose-content">02</button>
          <div>
            <h2 className="choose-content-text">Patient-Centered Approach</h2>
            <p className="choose-content-desc">
              Your health and well-being are our top priorities. We take the
              <br />
              time to listen to your concerns, answer your questions.
            </p>
            <div className="border-line"></div>
          </div>
        </div>
        <div className="choose-content-div">
          <button className="choose-content">03</button>
          <div>
            <h2 className="choose-content-text">Compassionate & Expert Care</h2>
            <p className="choose-content-desc">
              We understand that every patient is unique, and their <br /> healthcare needs may vary. That's why we create individualized treatment.
            </p>
          </div>
        </div>
      </div>
      <div className="choose-sec">
        <Image
          src={chooseImg}
          className="choose-img"
          alt="choose-img"
          width={643.25}
          height={658.02}
        />
      </div>
    </div>
  );
};

export default ChooseUs;
