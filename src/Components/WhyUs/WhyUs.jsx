import React from "react";
import "./WhyUs.css";
import WhyUsLogo1 from "../../assets/Why-Us-Logo-1.png";
import WhyUsLogo2 from "../../assets/Why-Us-Logo-2.png";
import WhyUsLogo3 from "../../assets/Why-Us-Logo-3.png";

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us-section">
      <div className="why-us-content">
        <h1 className="why-us-heading">WHY US?</h1>
        <p className="why-us-line"></p>
        <div className="why-us-image-container">
          <div className="why-us-image-container-1">
            <img src={WhyUsLogo1} alt="" className="why-us-image" />
            <h2 className="why-us-image-text">Delicious Food</h2>
            <p className="why-us-image-p">
              With a lavish spread of finger licking food, we serve to satisfy
              your palate and take you on a culinary treat.
            </p>
          </div>
          <div className="why-us-image-container-2">
            <img src={WhyUsLogo2} alt="" className="why-us-image" />
            <h2 className="why-us-image-text">Pleasant Ambience</h2>
            <p className="why-us-image-p">
              We seek to serve all our guests with the perfect dining
              experience. We provide perfect ambience to cherish special
              moments.
            </p>
          </div>
          <div className="why-us-image-container-3">
            <img src={WhyUsLogo3} alt="" className="why-us-image" />
            <h2 className="why-us-image-text">Hospitality</h2>
            <p className="why-us-image-p">
              Our staff members are happy to help. We go the extra mile to make
              you happy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
