import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import {
  FaTwitterSquare,
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handlMouseEnter = () => {
    setToggle(true);
  };

  const handleMouseLeave = () => {
    setToggle(false);
  };

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

              {/* Services Dropdown Menu */}
              <div
                onMouseEnter={handlMouseEnter}
                onMouseLeave={handleMouseLeave}

              >
                <div className="flex items-center gap-2 group relative">
                  <li className="group-hover:transition">Services</li>
                  <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180" />
                </div>

                {/* Dropdown Items */}

                {toggle ? (
                  <div
                    className="dropdown absolute bg-white shadow-2xl w-[300px] px-2 py-3 rounded-lg"
                    onMouseEnter={handlMouseEnter}
                  >
                    <ul className="text-black flex flex-col gap-1">
                      <li className="cursor-pointer border-b-2">
                        Profile Toughened Glass Partition Work
                      </li>
                      <li className="cursor-pointer border-b-2 ">
                        Toughened Glass Partition Work
                      </li>
                      <li className="cursor-pointer border-b-2 ">
                        LED Touch sensor Mirror
                      </li>
                      <li className="cursor-pointer border-b-2 ">
                        UPVC Windows and Doors
                      </li>
                      <li className="cursor-pointer ">SS Glass Railing Work</li>
                      <li className="cursor-pointer border-b-2 ">
                        Skylight Glass / Paragola Work
                      </li>
                      <li className="cursor-pointer border-b-2 ">
                        MS Gate and Fabrication Work
                      </li>
                      <li className="cursor-pointer border-b-2 ">Spider Glazing Work</li>
                      <li className="cursor-pointer border-b-2 ">
                        Shower Glass Partition - Sliding Partition
                      </li>
                      <li className="cursor-pointer border-b-2 ">
                        Shower Glass Partition - Sliding Partition
                      </li>
                      <li className="cursor-pointer border-b-2 ">
                        Shower Glass Partition - Openable
                      </li>
                      <li className="cursor-pointer border-b-2 ">
                        Walk-In Shower Glass Partition
                      </li>
                    </ul>
                  </div>
                ) : (
                  handleMouseLeave
                )}
              </div>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </main>
  );
};

export default Header;
