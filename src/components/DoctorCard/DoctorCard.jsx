import Image from "next/image";
import "./DoctorCard.css";
import React from "react";
import { FaStar } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  const { name, image, designation, people, likes, patients, location } =
    doctor;
  return (
    <div className="doctor-card">
      <Image src={image} alt="doctor-img" className="doctor-img" />
      <h1 className="name">{name}</h1>
      <div className="designation-rating">
        <p className="designation">{designation}</p>
        <div className="doctor-rating">
          <FaStar className="star"/>
          <h3 className="people-text">
            <span className="people">{people}</span>{" "}
            <span className="likes">({likes})</span>
          </h3>
        </div>
      </div>
      <h4 className="patients">{patients}</h4>
      <p className="location">{location}</p>
    </div>
  );
};

export default DoctorCard;
