import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import WhyUs from "./Components/WhyUs/WhyUs";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
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
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
