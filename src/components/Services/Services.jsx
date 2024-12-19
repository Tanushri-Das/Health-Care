import React from "react";
import "./Services.css";
import Image from "next/image";
import logo from "@/images/logo.png";
import img1 from "@/images/services/img1.png";
import img2 from "@/images/services/img2.png";
import img3 from "@/images/services/img3.png";
import img4 from "@/images/services/img4.png";
import img5 from "@/images/services/img5.png";
import img6 from "@/images/services/img6.png";
import img7 from "@/images/services/img7.png";
import img8 from "@/images/services/img8.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import Explore from "../shared/Explore/Explore";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Internal Medicine",
      doctors: "30+ Doctors",
      image: img1,
    },
    {
      id: 2,
      title: "Dental Care",
      doctors: "30+ Doctors",
      image: img2,
    },
    {
      id: 3,
      title: "Urology Care",
      doctors: "30+ Doctors",
      image: img3,
    },
    {
      id: 4,
      title: "Neurology Care",
      doctors: "30+ Doctors",
      image: img4,
    },
    {
      id: 5,
      title: "Gynecologists",
      doctors: "30+ Doctors",
      image: img5,
    },
    {
      id: 6,
      title: "Ophthalmology",
      doctors: "30+ Doctors",
      image: img6,
    },
    {
      id: 7,
      title: "Orthopedics",
      doctors: "30+ Doctors",
      image: img7,
    },
    {
      id: 8,
      title: "Cardiology",
      doctors: "30+ Doctors",
      image: img8,
    },
  ];

  return (
    <div id="services" className="services">
      <div className="service-logo">
        <Image src={logo} alt="Health Logo" width={16.4} height={16.39} />
        <h2 className="service-text">Our Services</h2>
      </div>
      <p className="service-title">
        Our Mediax specialties <br />
        service
      </p>
      <div className="service-cards-container">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <Explore
        title={"You Get Our 20+ More services"}
        text={"EXPLORE ALL SERVICES"}
      />
    </div>
  );
};

export default Services;
