import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdEmail, MdAccessTimeFilled  } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-container">
        <h1 className="contact-heading">CONTACT US</h1>
        <p className="contact-line"></p>
        <div className="contact-container">
          <div className="contact-info-container">
            <div className="contact-info">
              <h2>Full Name</h2>
              <input placeholder="Your Name"></input>
              <h2>Your Email</h2>
              <input placeholder="Your Email"></input>
              <h2>Your Number</h2>
              <input placeholder="Your Number"></input>
              <h2>Message</h2>
              <textarea placeholder="Your Message"></textarea>
              <button className="contact-button">Submit</button>
            </div>
            <div className="contact-info-side">
              <div className="location-container">
                <FaLocationCrosshairs className="location-logo"/>
                <div className="location">
                  <h3>Our Location</h3>
                  <p className="location-name">Rustenburg, Phokeng</p>
                </div>
              </div>
              <div className="general-container">
                <MdEmail className="general-logo" />
                <div className="general">
                  <h3>General Enquires</h3>
                  <a
                    className="general-email"
                    href="mailto:coffeeshop@coff.com"
                  >
                    coffeeshop@coff.com
                  </a>
                </div>
              </div>
              <div className="call-us-container">
                <BiSolidPhoneCall  className="call-us-logo" />
                <div className="call-us">
                  <h3>Call Us</h3>
                  <a href="tel:014 547 2548">+27 14 547 2548</a>
                </div>
              </div>
              <div className="timing-container">
                <MdAccessTimeFilled  className="timing-logo" />
                <div className="timing">
                  <h3>Our Timing</h3>
                  <p className="time-frame">Mon - Sun : 9AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
