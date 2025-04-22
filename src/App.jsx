import React from "react";
import "./App.css";
import About from "./pages/landing/About";
import Contact from "./pages/landing/Contact";
import LandingPage from "./pages/landing/LandingPage";
import Navbar from "./components/layout/Navbar";
import { Route, Routes } from "react-router";
import Login from "./pages/landing/Login";
import Register from "./pages/landing/Register";
import Services from "./pages/landing/Services";
import ApplyPage from "./pages/landing/ApplyPage";

const App = () => {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/ApplyPage"   element={<ApplyPage/>}/>
      </Routes>
      
      
    </div>
  );
};

export default App;
