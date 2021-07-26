import React from "react";
import "./App.css";
import Footer from "./features/footer/Footer";
import Navbar from "./features/header/Navbar";
import Home from "./features/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
