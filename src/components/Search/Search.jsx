import React from "react";
import "./Search.css";
import Image from "next/image";
import search from "@/images/search_icon.png";
import location from "@/images/location.png";
import searchIcon from "@/images/search_btn.png";

const Search = () => {
  return (
    <div className="search">
      <div className="search-div">
        <div className="search-container">
          <Image
            src={search}
            alt="search"
            width={22.1}
            height={22.1}
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Ex. Doctor, Hospital"
            className="search-input"
          />
        </div>
        <div className="search-container">
          <Image
            src={search}
            alt="search"
            width={22.1}
            height={22.1}
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Ex. Surgeon,Cardiologist"
            className="search-input"
          />
        </div>
        <div className="search-container">
          <Image
            src={location}
            alt="location"
            width={22.1}
            height={22.1}
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Set your location"
            className="search-input"
          />
        </div>
        <div>
          <button className="search-btn">
            <Image
              src={searchIcon}
              alt="search"
              width={20.8}
              height={20.8}
              className="search-icon"
            />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
