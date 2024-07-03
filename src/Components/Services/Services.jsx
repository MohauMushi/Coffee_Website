import React from "react";
import "./Services.css";
import ServicesImage1 from "../../assets/service-image-1.png";
import ServicesImage2 from "../../assets/service-image-2.png";
import ServicesImage3 from "../../assets/service-image-3.png";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-content">
        <h1 className="services-heading">OUR SERVICES</h1>
        <p className="services-line"></p>
        <div className="services-image-container">
          <div className="image-container-1">
            <img src={ServicesImage1} alt="" className="services-image" />
            <h2 className="image-text">Hot Beverages</h2>
            <p className="image-p">
              Wide range of Steaming hot coffees to make you fresh and light
            </p>
          </div>
          <div className="image-container-2">
            <img src={ServicesImage2} alt="" className="services-image" />
            <h2 className="image-text">Cold Beverages</h2>
            <p className="image-p">
              Creamy and frothy cold coffee to make you feel cool from inside
            </p>
          </div>
          <div className="image-container-3">
            <img src={ServicesImage3} alt="" className="services-image" />
            <h2 className="image-text">Refreshments</h2>
            <p className="image-p">
              Fruit and icy refreshing drink to make you feel good
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
