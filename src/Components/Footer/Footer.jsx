import React from "react";
import LogoImage from "/coffee.png";
import FacebookIcon from "../../assets/icon-facebook.png"
import InstagramIcon from "../../assets/icon-instagram.png"
import TwitterIcon from "../../assets/icon-twitter.png"
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src={LogoImage}
            alt="coffee Logo"
            className="footer-logo-image"
          />
          <span className="footer-logo-text">Coffee</span>
        </div>

        <div className="footer-copy-right">
          <span className="footer-copy-right-text">
            Copyright © 2024 Coffee
          </span>
        </div>

        <div className="footer-follow">
          <span className="footer-follow-text">Follow us on</span>
          <div className="footer-follow-icons">
            <a href="https://www.facebook.com/">
              <img src={FacebookIcon} />
            </a>
            <a href="https://www.instagram.com/">
              <img src={InstagramIcon} />
            </a>
            <a href="https://www.twitter.com/">
              <img src={TwitterIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
