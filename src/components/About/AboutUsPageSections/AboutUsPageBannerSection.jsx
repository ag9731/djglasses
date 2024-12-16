import React from "react";
import bgImg from "../../../assets/About_Us/djglassaboutusBannerimage.webp";

const AboutUsPageBannerSection = () => {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center p-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          About Us
        </h1>
      </div>
    </section>
  );
};

export default AboutUsPageBannerSection;
