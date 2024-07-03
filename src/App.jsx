import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/Home";
import About from "./Components/About/About";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HomePage />
        <About />
      </div>
    </>
  );
}

export default App;
