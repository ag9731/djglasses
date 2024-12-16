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
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [display,setDisplay] = useState(false);

  

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
                className="navbar1"
              >
                <div className="flex items-center gap-2 group relative">
                  <li className="group-hover:transition cursor-pointer">
                    Services
                  </li>

                  {/* <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180"/> */}
                  <FaAngleDown
                    className={`${
                      toggle ? "iconUp" : "iconDown"
                    } cursor-pointer `}
                    onMouseOver={() => handlMouseEnter(!toggle)}
                  />
                </div>

                {/* Dropdown Items */}

                {toggle ? (
                  <div
                    className="dropdown absolute bg-white shadow-2xl w-[300px] px-2 py-3 rounded-lg"
                    onMouseEnter={handlMouseEnter}
                  >
                    <ul className="text-black flex flex-col gap-1 navul">
                      <li
                        className="cursor-pointer border-b-2 hover:bg-slate-100"
                        
                      >
                        <Link to="/services/profile-toughened-glass-partition-work">
                          Profile Toughened Glass Partition
                        </Link>
                        Work
                      </li>
                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/toughened-glass-partition-work">
                          Toughened Glass Partition Work
                        </Link>
                      </li>
                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/led-touch-sensor-mirror">
                          LED Touch sensor Mirror
                        </Link>
                      </li>
                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/upvc-windows-and-doors">
                          UPVC Windows and Doors
                        </Link>
                      </li>
                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/ss-glass-railing-work">
                          SS Glass Railing Work
                        </Link>
                      </li>
                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/skylight-glass-paragola-work">
                          Skylight Glass / Paragola Work
                        </Link>
                      </li>
                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/ms-gate-and-fabrication-work">
                          MS Gate and Fabrication Work
                        </Link>
                      </li>
                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/spider-glazing-work">
                          Spider Glazing Work
                        </Link>
                      </li>
                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/shower-glass-partition-sliding">
                          Shower Glass Partition - Sliding
                        </Link>
                        Partition
                      </li>

                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/shower-glass-partition-openable">
                          Shower Glass Partition - Openable
                        </Link>
                      </li>
                      <li className="cursor-pointer border-b-2 hover:bg-slate-100">
                        <Link to="/services/walk-in-shower-glass-partition">
                          Walk-In Shower Glass Partition
                        </Link>
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
