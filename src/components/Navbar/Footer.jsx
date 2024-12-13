import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#080F3B] text-white py-10 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <ul>
            <li className="mb-2 list-disc">Home</li>
            <li className="mb-2 list-disc">About</li>
            <li className="mb-2 list-disc">Services</li>
            <li className="mb-2 list-disc">Gallery</li>
            <li className="mb-2 list-disc">Contact</li>
          </ul>
        </div>

        {/* 3rd Column - Services */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li className="mb-2 list-disc">LED Touch Sensor Mirror</li>
            <li className="mb-2 list-disc">SS Glass Railing Work</li>
            <li className="mb-2 list-disc">Spider Glazing Work</li>
            <li className="mb-2 list-disc">UPVC Windows and Doors</li>
            <li className="mb-2 list-disc">More</li>
          </ul>
        </div>

        {/* 4th Column - Location (Google Map Embed) */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">Location</h3>
          <div className="mb-4">
            {/* Google Maps iframe (this is a placeholder, you can replace it with the actual embed) */}
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12293.072665448249!2d77.6410911640136!3d12.976573573247906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15af6ef2b6b7%3A0x4e0e59974a3d0984!2sChinmaya%20Mission%20Hospital%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1648983421007!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
