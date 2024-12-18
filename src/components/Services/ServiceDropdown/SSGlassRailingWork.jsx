import React from "react";
import bgImg from "../../../assets/SS_Glass_Railings/ss_glass_railing_work.webp";
import profileGlass1 from "../../../assets/SS_Glass_Railings/1.webp";
import profileGlass2 from "../../../assets/SS_Glass_Railings/2.webp";
import profileGlass3 from "../../../assets/SS_Glass_Railings/3.webp";
import { FaAnglesRight } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const SSGlassRailingWork = () => {
  const imageArray = [
    {
      imageID: 1,
      imageURL: profileGlass1,
      altText: "Profile Toughened Glass Partition 1",
    },
    {
      imageID: 2,
      imageURL: profileGlass2,
      altText: "Profile Toughened Glass Partition 2",
    },
    {
      imageID: 3,
      imageURL: profileGlass3,
      altText: "Profile Toughened Glass Partition 3",
    },
  ];

  const application = [
    {
      appName: "Balconies",
      appDesc:
        "Enhance the appearance of balconies with a sleek, minimalist look that provides clear views and open space.",
    },
    {
      appName: "Terraces",
      appDesc:
        "Provide safety while preserving the openness of your terrace or rooftop area with elegant SS glass railings.",
    },
    {
      appName: "Dressing Rooms",
      appDesc: "",
    },
    {
      appName: "Commercial Spaces",
      appDesc:
        "Perfect for offices, malls, hotels, and other commercial buildings where aesthetics and safety are key priorities.",
    },
  ];

  return (
    <main>
      <section
        className="bg-center bg-cover bg-no-repeat relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center p-4">
          <h1 className="uppercase text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
            SS Glass Railing Work
          </h1>
        </div>
      </section>

      {/* Lower Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Mobile Carousal */}
        <div className="lg:hidden flex justify-center lg:justify-end h-[300px] sm:h-[400px] lg:h-full border-b-4">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            className="w-full h-full"
          >
            {imageArray.map((image) => (
              <div key={image.imageID} className="h-full">
                <img
                  src={image.imageURL}
                  alt={image.altText}
                  className="object-cover h-full w-full"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-base sm:text-lg">
              At DJ Glass Interiors Solutions, we specialize in high-quality
              Stainless Steel (SS) Glass Railings that combine elegance, safety,
              and durability. Our SS glass railings are designed to add a sleek,
              contemporary look to any residential or commercial space while
              providing an unobstructed view, making them ideal for staircases,
              balconies, terraces, and more.
            </p>
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-bold">
                  Why Choose SS Glass Railings?
                </h2>
                <span className="w-20 bg-black h-0.5"></span>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Durability and Strength</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Safety and Security</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Low Maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Adjustable Brightness and Color Temperature</span>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/contact">
                <button className="mt-6 w-full sm:w-auto text-white font-medium bg-[#080F3B] px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#e99015] transition-colors">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center lg:justify-end h-[300px] sm:h-[400px] lg:h-full border-b-4">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              className="w-full h-full"
            >
              {imageArray.map((image) => (
                <div key={image.imageID} className="h-full">
                  <img
                    src={image.imageURL}
                    alt={image.altText}
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Applications of Toughened Glass Partitions */}
      <section className="container mt-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-lg sm:text-xl font-bold">
            Applications of Profile Toughened Glass Partition Work
          </h2>
          <span className="w-20 bg-black h-0.5"></span>
          <p className="text-base sm:text-lg">Our partitions are ideal for:</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {application.map((app, index) => (
            <div key={index} className="group">
              <div className="transition duration-200 flex flex-col items-center justify-center gap-4 border border-[#080F3B] p-6 sm:p-8 group-hover:bg-[#080F3B] h-full">
                <h3 className="text-center font-bold uppercase text-lg sm:text-xl group-hover:text-white">
                  {app.appName}
                </h3>
                <p className="text-center group-hover:text-white">
                  {app.appDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SSGlassRailingWork;
