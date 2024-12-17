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
import { Link } from "react-router-dom";

const HomePageServices = () => {
  const services = [
    {
      serviceID: 1,
      serviceName: "Walk-In Shower Glass Partition",
      serciceDesc:
        "A sleek and modern walk-in shower glass partition that enhances privacy while maintaining an open, spacious feel in your bathroom.",
      serviceImg: Walk_In_Shower_Glass_Partition,
      path: "/services/walk-in-shower-glass-partition",
    },
    {
      serviceID: 2,
      serviceName: "Toughened Glass Partition Work",
      serciceDesc:
        "Toughened Glass Partition Work provides durable, stylish, and safe glass dividers for modern spaces.",
      serviceImg: Toughened_Glass_Partition_Work,
      path: "/services/toughened-glass-partition-work",
    },
    {
      serviceID: 3,
      serviceName: "LED Touch sensor Mirror",
      serciceDesc:
        "LED Touch Sensor Mirrors offer convenient lighting control and a sleek, modern design for any space.",
      serviceImg: LED_Touch_sensor_Mirror,
      path: "/services/led-touch-sensor-mirror",
    },
    {
      serviceID: 4,
      serviceName: "UPVC Windows and Doors",
      serciceDesc:
        "UPVC Windows and Doors provide energy efficiency, durability, and low maintenance with a modern aesthetic.",
      serviceImg: UPVC_Windows_and_Doors,
      path: "/services/upvc-windows-and-doors",
    },
    {
      serviceID: 5,
      serviceName: "SS Glass Railing Work",
      serciceDesc:
        "SS Glass Railing work involves installing stainless steel-framed glass railings for a sleek, modern look and enhanced safety.",
      serviceImg: SS_Glass_Railing_Work,
    },
    {
      serviceID: 6,
      serviceName: "Skylight Glass / Paragola Work",
      serciceDesc:
        "Skylight Glass/Paragola work involves installing glass panels in roofs to enhance light and open space.",
      serviceImg: Skylight_Glass_Paragola_Work,
      path: "/services/skylight-glass-paragola-work",
    },
    {
      serviceID: 7,
      serviceName: "Shower Glass Partition - Openable",
      serciceDesc:
        "An openable shower glass partition that combines convenience and style, allowing easy access while maintaining a sleek, modern look.",
      serviceImg: Shower_Glass_Partition_Openable,
      path: "/services/shower-glass-partition-openable",
    },
    {
      serviceID: 8,
      serviceName: "Profile Toughened Glass Partition Work",
      serciceDesc:
        "Profile Toughened Glass Partition Work offers sleek, durable glass partitions with a robust framing system for stylish and secure spaces.",
      serviceImg: partition,
      path: "/services/profile-toughened-glass-partition-work",
    },
    {
      serviceID: 9,
      serviceName: "Shower Glass Partition - Sliding Partition",
      serciceDesc:
        "A sliding shower glass partition that offers space-saving functionality and a modern aesthetic, providing smooth access while keeping the shower area enclosed.",
      serviceImg: Shower_Glass_Partition_Sliding_Partition,
      path: "/services/shower-glass-partition-sliding",
    },
    {
      serviceID: 10,
      serviceName: "MS Gate and Fabrication Work",
      serciceDesc:
        "MS Gate and Fabrication work involves designing and constructing custom gates and metal structures using mild steel, ensuring durability, security, and aesthetic appeal.",
      serviceImg: MS_Gate_and_Fabrication_Work,
      path: "/services/ms-gate-and-fabrication-work",
    },
    {
      serviceID: 11,
      serviceName: "Spider Glazing Work",
      serciceDesc:
        "Spider glazing work involves using minimal, discreet fittings to secure large glass panels, creating a sleek, modern, and unobstructed look for facades or partitions.",
      serviceImg: Spider_Glazing_Work,
      path: "/services/spider-glazing-work",
    },
  ];

  return (
    <section className="px-4">
      {/* Upper Section */}
      <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center">
          Our services
        </h1>
        <span className="bg-[#080F3B] w-1/4 sm:w-1/6 md:w-1/12 h-[2px]"></span>
      </div>

      {/* Lower Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.serviceID}
              className="group flex flex-col justify-start h-full border border-solid rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:shadow-2xl"
            >
              <Link to={service.path}>
                <div className="relative">
                  {/* Image with Hover Animation */}
                  <img
                    className="w-full h-48 object-cover rounded-t-xl transform transition duration-300 group-hover:-translate-y-2"
                    src={service.serviceImg}
                    alt={service.serviceName}
                  />
                  {/* Title Background */}
                  <div className="flex w-full h-16 items-center justify-center bg-[#080F3B] px-2">
                    <h2 className="font-bold text-sm sm:text-base md:text-lg uppercase text-center text-white">
                      {service.serviceName}
                    </h2>
                  </div>
                </div>
              </Link>
              {/* Description */}
              <div className="flex flex-col gap-4 items-center mt-4 justify-center p-4">
                <span className="bg-[#080F3B] w-1/2 h-[2px]"></span>
                <div className="flex w-full">
                  <p className="text-center text-sm sm:text-base">
                    {service.serciceDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageServices;
