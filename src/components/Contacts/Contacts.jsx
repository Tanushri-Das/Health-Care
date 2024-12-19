"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/images/logo.png";
import contactImg from "@/images/contact.png";
import "./Contacts.css";

const Contacts = () => {
  const [selectedDate, setSelectedDate] = useState("2022-12-02");

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(date)
      .toLocaleDateString("en-US", options)
      .replace(",", " -");
  };

  const dateOptions = [
    "2022-12-02",
    "2023-01-15",
    "2023-05-20",
    "2023-08-10",
    "2023-11-25",
  ];
  return (
    <div className="contact">
      <div className="service-logo">
        <Image src={logo} alt="Health Logo" width={16.4} height={16.39} />
        <h2 className="service-text">Contract Us</h2>
      </div>
      <h3 className="contacts-text">Get a Quote Today</h3>
      <p className="contacts-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <div className="contact-div">
        <div>
          <Image src={contactImg} alt="contact Img" className="contact-img" />
        </div>
        <div>
          <form className="form">
            <div className="name-div form-input-div">
              <div>
                <label>First name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="First name"
                  className="input-field"
                />
              </div>
              <div>
                <label>Last name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Last name"
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-input-div">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="input-field"
              />
            </div>
            <div className="form-input-div">
              <label>Phone number</label>
              <div className="phone-input-wrapper">
                <select className="country-code">
                  <option value="US">US</option>
                  <option value="BD">BD</option>
                  <option value="UK">UK</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  className="phone-number"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="form-input-div">
              <label>Select date</label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="input-field"
              >
                {dateOptions.map((date) => (
                  <option key={date} value={date}>
                    {formatDate(date)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Message</label>
              <textarea
                required
                name="message"
                className="input-field"
              ></textarea>
            </div>
            <div className="form-btn">
              <button className="appointment-btn">Appointment Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
