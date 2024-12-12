import React from "react";
import {
  FaDiamond,
  FaToolbox,
  FaRupeeSign,
  FaClockRotateLeft,
} from "react-icons/fa6";

const AboutUsWhyChooseUsSection = () => {
  const array = [
    {
      icon: <FaToolbox />,
      title: "Exceptional Craftsmanship",
      desc: "Our team is skilled in delivering precise and high-quality glass installations, ensuring a flawless finish every time.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Affordable Pricing",
      desc: "We offer competitive rates without compromising on quality, making our services accessible to a wide range of clients.",
    },
    {
      icon: <FaClockRotateLeft />,
      title: "Timely Execution",
      desc: "We value your time and ensure that every project is completed within the agreed-upon timeframe.",
    },
    {
      icon: <FaDiamond />,
      title: "Premium Materials",
      desc: "We use only top-quality materials to guarantee durability and a sleek, modern aesthetic.",
    },
  ];

  return (
    <section className="bg-[#f3f3f3] py-16">
      {/* Upper Section */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover what sets us apart and why we're the best choice for your
            glass interior needs.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
            CONTACT US
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {array.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition flex flex-col items-center"
            >
              <div className="text-blue-600 text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsWhyChooseUsSection;