import React from "react";
import logo from "../../assets/Home_image.png"
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="heading-container">
        <div className="home-heading">
          <h1 className="passion-h1">Fuel Your Passion</h1>
          <p className="discover-p">Discover the Magic in Every Cup</p>
          <p className="welcome-p">
            Welcome to our coffee paradise, where every bean tells a story and
            every cup sparks
          </p>
        </div>
        <div className="home-buttons">
          <button className="order-button">Order Online</button>
          <button className="book-button">Book A Table</button>
        </div>
      </div>

      <img src={logo} className="home-logo-image" />
    </section>
  );
};

export default Home;
