import React from "react";
import "./Explore.css";
import Link from "next/link";

const Explore = ({ title, text }) => {
  return (
    <div className="container">
      <div className="line"></div>
      <div className="content">
        <span className="text">{title}...</span>
        <Link href="#" className="link">
          {text}
        </Link>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Explore;
