import React from "react";
import {
  FaUsers,
  FaHandBackFist,
  FaHandHoldingHand,
  FaAward,
} from "react-icons/fa6";
import CountUp from "react-countup";
import bgImg from "../../../assets/Home_Page_Countup/dj_glasses_acheivements_banner_image.webp";

const HomePageCountSection = () => {
  const countArray = [
    {
      number: 100,
      title: "Happy Customers",
      icon: <FaUsers size={50} className="text-white" />, // Custom styling for icons
    },
    {
      number: 500,
      title: "Projects Completed",
      icon: <FaHandBackFist size={50} className="text-white" />,
    },
    {
      number: 200,
      title: "Projects Ongoing",
      icon: <FaHandHoldingHand size={50} className="text-white" />,
    },
    {
      number: 50,
      title: "Awards Won",
      icon: <FaAward size={50} className="text-white" />,
    },
  ];

  return (
    <section className=" ">
      {/* Upper Section */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold uppercase">achievements </h1>
        <span className="bg-[#080F3B] w-1/12 h-[2px]"></span>
      </div>

      <div
        className="bg-black bg-opacity-50 py-10 bg-cover bg-center bg-no-repeat mt-10"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countArray.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#080F3B] bg-opacity-50 border border-white p-6 shadow-md rounded-md"
              >
                <div className="mb-4">{item.icon}</div>
                <CountUp
                  start={0}
                  end={item.number}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyDelay={500} // Add delay before animation starts
                  className="text-4xl font-bold text-white"
                />
                <p className="text-lg mt-2 font-medium text-white uppercase">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageCountSection;
