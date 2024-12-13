import { useState } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Navbar/Header";
import Footer from "./components/Navbar/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
