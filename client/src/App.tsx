import React from "react";
import "./App.css";
import Footer from "./features/footer/Footer";
import Navbar from "./features/header/Navbar";
import Home from "./features/home/Home";

function App() {
  return (
    <>
      <Navbar />
      {/* implement routing here */}
      <Footer />
    </>
  );
}

export default App;
