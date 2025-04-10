import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Contact from "./Pages/Contact";
import AboutPage from "./Pages/AboutPage";
import Header from "./compontents/Header";

import "./App.css";
import Footer from "./compontents/Footer";
import Items from "./Pages/Items";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/items" element={<Items />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
