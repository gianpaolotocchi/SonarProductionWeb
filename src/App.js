import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Drawer from "./components/Drawer/Drawer";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
import Contatti from "./pages/Contatti";
import OurWorks from "../src/components/OurWorks/OurWorks";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={(value) => setIsOpen(value)} />
      {isOpen && <Drawer />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <OurWorks />
      <Footer />
    </>
  );
};

export default App;
