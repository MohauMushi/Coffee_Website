import React from "react";
import AboutImage from "../../assets/About-Image.png";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1>About Us</h1>
        <div className="about-container">
          <div className="image-container">
            <img src={AboutImage} alt="About Me" className="about-image" />
          </div>
          <div className="text-container">
            <p>
              We at Coffee House, located in Rustenburg, Phokeng, are one of the
              favorite hangouts for coffee and conversations. Our goal is to
              offer the best experience to our guest, ensuring an authentic
              coffee drinking experience in a warm, friendly, and relaxed
              environment. We aim to bring a sense of relaxation to the city
              with our cozy space, complete with comfortable couches to lounge
              in while you enjoy your coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
