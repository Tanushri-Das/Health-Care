import React from "react";
import doc1 from "@/images/doctors/doc1.png";
import doc2 from "@/images/doctors/doc2.png";
import doc3 from "@/images/doctors/doc3.png";
import Image from "next/image";
import logo from "@/images/logo.png";
import "./Doctors.css";
import DoctorCard from "../DoctorCard/DoctorCard";
import Explore from "../shared/Explore/Explore";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Dredor Smith",
      image: doc1,
      designation: "Medicine specialist",
      people: 3.9,
      likes: 252,
      patients: "4895 Patients",
      location: "Infermedica Hospital, NYC",
    },
    {
      id: 2,
      name: "Dr. Amrita sen gupta",
      image: doc2,
      designation: "General Surgeon",
      people: 4.8,
      likes: 599,
      patients: "1698 Patients",
      location: "Mediplus Hospital, NYC",
    },
    {
      id: 3,
      name: "Dr. Christinne Jones",
      image: doc3,
      designation: "Pediatrist",
      people: 4.8,
      likes: 321,
      patients: "9375 Patients",
      location: "Advocate Hospital, NYC",
    },
  ];
  return (
    <div id="doctors" className="doctors">
      <div className="service-logo">
        <Image src={logo} alt="Health Logo" width={16.4} height={16.39} />
        <h2 className="service-text">Our doctor's</h2>
      </div>
      <h3 className="doctors-text">our special doctors</h3>
      <p className="doctors-desc">
        Our team of specialists is at the forefront of medical innovation. Each
        specialist brings a unique blend of expertise, empathy, and experience
        to ensure that your health is in the best hands:
      </p>
      <div className="doctor-cards-container">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <Explore
        title={"You Get Our 100+ More Doctor"}
        text={"EXPLORE ALL DOCTORS"}
      />
    </div>
  );
};

export default Doctors;
