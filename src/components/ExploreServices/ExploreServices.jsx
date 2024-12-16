import React from "react";
import "./ExploreServices.css";
import Link from "next/link";

const ExploreServices = () => {
  return (
    <div className="container">
      <div className="line"></div>
      <div className="content">
        <span className="text">You Get Our 20+ More services...</span>
        <Link href="#" className="link">
          EXPLORE ALL SERVICES
        </Link>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ExploreServices;
