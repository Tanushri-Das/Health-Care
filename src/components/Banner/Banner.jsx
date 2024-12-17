import React from "react";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";

const Banner = () => {
  return (
    <div style={{ position: "relative" }}>
      <Hero />
      <Search />
    </div>
  );
};

export default Banner;
