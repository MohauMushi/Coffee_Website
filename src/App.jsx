import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import WhyUs from "./Components/WhyUs/WhyUs";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HomePage />
        <About />
        <Services />
        <WhyUs />
      </div>
    </>
  );
}

export default App;
