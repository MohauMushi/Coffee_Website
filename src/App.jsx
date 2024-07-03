import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    </>
  );
}

export default App;
