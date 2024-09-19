import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Drawer from "./components/Drawer/Drawer";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
// import Contatti from "./pages/Contatti";
import OurWorks from "../src/components/OurWorks/OurWorks";
import ServicesOffered from "./components/ServicesOffered/ServicesOffered";
import WhoWeAre from "./components/ChiSiamo/ChiSiamo2.0";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={(value) => setIsOpen(value)} />
      {isOpen && <Drawer />}
      <Homepage />
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes> */}
      <WhoWeAre />
      <OurWorks />
      <ServicesOffered />
      <Footer />
    </>
  );
};

export default App;
