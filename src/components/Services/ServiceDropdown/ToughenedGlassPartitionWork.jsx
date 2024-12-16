import React from "react";
import bgImg from "../../../assets/About_Us/djglassaboutusBannerimage.webp";
import profileGlass1 from "../../../assets/Toughned-Glass-Partition/toughned_glass_partition1.webp";
import profileGlass2 from "../../../assets/Toughned-Glass-Partition/toughned_glass_partition2.webp";
import profileGlass3 from "../../../assets/Toughned-Glass-Partition/toughned_glass_partition3.webp";
import { FaAnglesRight } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ToughenedGlassPartitionWork = () => {
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
      appName: "Offices",
      appDesc: "Office cabins and conference rooms",
    },
    {
      appName: "Retail stores",
      appDesc: "Retail stores and display areas",
    },
    {
      appName: "Residential",
      appDesc: "Residential interiors like bathrooms or kitchen dividers",
    },
    {
      appName: "Hospitality Spaces",
      appDesc: "Hospitality spaces such as hotels and restaurants",
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
            Toughened Glass Partition Work
          </h1>
        </div>
      </section>

      {/* Lower Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-base sm:text-lg">
              Toughened glass partitions are the perfect blend of elegance,
              functionality, and durability, making them a popular choice for
              modern interiors in both residential and commercial spaces. At, we
              specialize in crafting high-quality toughened glass partitions
              tailored to suit your specific needs and preferences.
            </p>
            <div>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-bold">What We Offer</h2>
                <span className="w-20 bg-black h-0.5"></span>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Strength and Durability</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Aesthetic Appeal</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaAnglesRight className="fill-[#080F3B] mt-1 flex-shrink-0" />
                  <span>Customizable Solutions</span>
                </li>
              </ul>
            </div>
            <div>
              <button className="mt-6 w-full sm:w-auto text-white font-medium bg-[#080F3B] px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#e99015] transition-colors">
                Book Now
              </button>
            </div>
          </div>
          <div className=" flex justify-center lg:justify-end h-[300px] sm:h-[400px] lg:h-full">
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

export default ToughenedGlassPartitionWork;