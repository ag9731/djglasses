import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from React Router

const Footer = () => {
  return (
    <footer className="bg-[#080F3B] text-white py-10 mt-20">
      {/* Boxed Container */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1st Column - About */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">About</h3>
          <p className="mb-2">
            DJ Glass Interiors, led by Mr. Umesh, specializes in quality office
            partitions and glass replacement.
          </p>
          <p className="mb-2">Mobile Number: +91 93801 28840</p>
          <p>Email: djglass@gmail.com</p>
        </div>

        {/* 2nd Column - Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="list-disc">
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="list-disc">
              <Link to="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            {/* <li className="list-disc">
              <Link to="/services" className="text-white hover:text-gray-400">
                Services
              </Link>
            </li> */}
            <li className="list-disc">
              <Link to="/gallery" className="text-white hover:text-gray-400">
                Gallery
              </Link>
            </li>
            <li className="list-disc">
              <Link to="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd Column - Services */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="list-disc">
              <Link
                to="/services/led-touch-sensor-mirror"
                className="text-white hover:text-gray-400"
              >
                LED Touch Sensor Mirror
              </Link>
            </li>
            <li className="list-disc">
              <Link
                to="/services/ss-glass-railing-work"
                className="text-white hover:text-gray-400"
              >
                SS Glass Railing Work
              </Link>
            </li>
            <li className="list-disc">
              <Link
                to="/services/spider-glazing-work"
                className="text-white hover:text-gray-400"
              >
                Spider Glazing Work
              </Link>
            </li>
            
            
          </ul>
        </div>

        {/* 4th Column - Location */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Location</h3>
          <div className="rounded-md overflow-hidden shadow-lg">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12293.072665448249!2d77.6410911640136!3d12.976573573247906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15af6ef2b6b7%3A0x4e0e59974a3d0984!2sChinmaya%20Mission%20Hospital%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1648983421007!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        <p>&copy; 2024 DJ Glass Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
