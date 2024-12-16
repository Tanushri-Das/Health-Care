import React from "react";
import Image from "next/image";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { title, doctors, image } = service;
  return (
    <div className="service-card">
      <Image src={image} alt={title} width={72.48} height={72.48} />
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-doctors">{doctors}</p>
      <button className="read-more">Read More</button>
    </div>
  );
};

export default ServiceCard;
