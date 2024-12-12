import React from "react";
import logo from "../../assets/logo/logo.png";
import {
  FaTwitterSquare,
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="bg-[#292929]">
      <section className="py-4 container mx-auto flex items-center justify-between">
        <div className="text-white flex gap-5">
          <div className="flex items-center gap-5">
            <FaEnvelope />
            <h1>djglass@gmail.com</h1>
          </div>
          <span className="w-[1px] h-6 bg-yellow-400"></span>
          <div className="flex items-center gap-5">
            <FaMobileAlt />
            <h1>Call Us: +91 93801 28840</h1>
          </div>
        </div>
        <div className="flex gap-5">
          <FaFacebook className="fill-white" />
          <FaInstagramSquare className="fill-white" />
          <FaWhatsappSquare className="fill-white" />
          <FaTwitterSquare className="fill-white" />
        </div>
      </section>

      <header className="bg-[#080F3B] flex">
        <section className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <figure>
            <img src={logo} alt="DJ Glasses Logo" />
          </figure>

          {/* Navigation menu */}
          <nav>
            <ul className="flex gap-16 uppercase text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </nav>
        </section>
      </header>
    </main>
  );
};

export default Header;
