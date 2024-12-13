import React from "react";
import partition from "../../../assets/Home_Page_Services/partition.webp";
import LED_Touch_sensor_Mirror from "../../../assets/Home_Page_Services/LED.webp";
import MS_Gate_and_Fabrication_Work from "../../../assets/Home_Page_Services/MS.webp";
import Shower_Glass_Partition_Openable from "../../../assets/Home_Page_Services/Shower.webp";
import Shower_Glass_Partition_Sliding_Partition from "../../../assets/Home_Page_Services/ShowerGlassPartition.webp";
import Skylight_Glass_Paragola_Work from "../../../assets/Home_Page_Services/SkylightGlass.webp";
import Spider_Glazing_Work from "../../../assets/Home_Page_Services/SpiderGlazingWork.webp";
import SS_Glass_Railing_Work from "../../../assets/Home_Page_Services/SSGlassRailingWork.webp";
import Toughened_Glass_Partition_Work from "../../../assets/Home_Page_Services/ToughenedGlassPartitionWork.webp";
import UPVC_Windows_and_Doors from "../../../assets/Home_Page_Services/UPVCWindowsAndDoors.webp";
import Walk_In_Shower_Glass_Partition from "../../../assets/Home_Page_Services/WalkInShowerGlassPartition.webp";

const HomePageServices = () => {
  const services = [
    {
      serviceID: 1,
      serviceName: "Walk-In Shower Glass Partition",
      serciceDesc:
        "A sleek and modern walk-in shower glass partition that enhances privacy while maintaining an open, spacious feel in your bathroom.",
      serviceImg: Walk_In_Shower_Glass_Partition,
    },
    {
      serviceID: 1,
      serviceName: "Toughened Glass Partition Work",
      serciceDesc:
        "Toughened Glass Partition Work provides durable, stylish, and safe glass dividers for modern spaces.",
      serviceImg: Toughened_Glass_Partition_Work,
    },
    {
      serviceID: 1,
      serviceName: "LED Touch sensor Mirror",
      serciceDesc:
        "LED Touch Sensor Mirrors offer convenient lighting control and a sleek, modern design for any space.",
      serviceImg: LED_Touch_sensor_Mirror,
    },
    {
      serviceID: 1,
      serviceName: "UPVC Windows and Doors",
      serciceDesc:
        "UPVC Windows and Doors provide energy efficiency, durability, and low maintenance with a modern aesthetic.",
      serviceImg: UPVC_Windows_and_Doors,
    },
    {
      serviceID: 1,
      serviceName: "SS Glass Railing Work",
      serciceDesc:
        "SS Glass Railing work involves installing stainless steel-framed glass railings for a sleek, modern look and enhanced safety.",
      serviceImg: SS_Glass_Railing_Work,
    },
    {
      serviceID: 1,
      serviceName: "Skylight Glass / Paragola Work",
      serciceDesc:
        "Skylight Glass/Paragola work involves installing glass panels in roofs to enhance light and open space.",
      serviceImg: Skylight_Glass_Paragola_Work,
    },
    {
      serviceID: 1,
      serviceName: "Shower Glass Partition - Openable",
      serciceDesc:
        "An openable shower glass partition that combines convenience and style, allowing easy access while maintaining a sleek, modern look.",
      serviceImg: Shower_Glass_Partition_Openable,
    },
    {
      serviceID: 1,
      serviceName: "Profile Toughened Glass Partition Work",
      serciceDesc:
        "Profile Toughened Glass Partition Work offers sleek, durable glass partitions with a robust framing system for stylish and secure spaces.",
      serviceImg: partition,
    },
    {
      serviceID: 1,
      serviceName: "Shower Glass Partition - Sliding Partition",
      serciceDesc:
        "A sliding shower glass partition that offers space-saving functionality and a modern aesthetic, providing smooth access while keeping the shower area enclosed.",
      serviceImg: Shower_Glass_Partition_Sliding_Partition,
    },
    {
      serviceID: 1,
      serviceName: "MS Gate and Fabrication Work",
      serciceDesc:
        "MS Gate and Fabrication work involves designing and constructing custom gates and metal structures using mild steel, ensuring durability, security, and aesthetic appeal.",
      serviceImg: MS_Gate_and_Fabrication_Work,
    },
    {
      serviceID: 1,
      serviceName: "Spider Glazing Work",
      serciceDesc:
        "Spider glazing work involves using minimal, discreet fittings to secure large glass panels, creating a sleek, modern, and unobstructed look for facades or partitions.",
      serviceImg: Spider_Glazing_Work,
    },
  ];

  return (
    <section>
      {/* Upper Section */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold uppercase">Our services</h1>
        <span className="bg-[#080F3B] w-1/12 h-[2px]"></span>
      </div>

      {/* Lower Section */}
      <div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-start mt-10">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group flex flex-col justify-start h-full border border-solid rounded-xl overflow-hidden shadow-lg transform transition duration-300  hover:shadow-2xl"
              >
                <div className="relative">
                  {/* Image with Hover Animation */}
                  <img
                    className="rounded-t-xl transform transition duration-300  group-hover:-translate-y-2"
                    src={service.serviceImg}
                    alt={service.serviceName}
                  />
                  {/* Title Background */}
                  <div className="flex w-full h-16 items-center justify-center bg-[#080F3B]">
                    <h1 className="font-bold text-lg uppercase text-center text-white">
                      {service.serviceName}
                    </h1>
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-4 items-center mt-5 justify-center p-4">
                  <span className="bg-[#080F3B] w-1/2 h-[2px]"></span>
                  <div className="flex w-full">
                    <p className="text-center">{service.serciceDesc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePageServices;
