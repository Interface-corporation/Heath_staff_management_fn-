import React from "react";
import "./App.css";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import LandingPage from "./pages/landing/LandingPage";
import Navbar from "./components/layout/Navbar";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
};

export default App;
