import React, { useState } from "react";
import aboutUs from "../../../assets/Home_Page_About_Us/djglasss_bengaluru.webp";
import { FaStar } from "react-icons/fa";

const HomePageAboutUsSection = () => {
    const [count,setCount] =useState(5);
    
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl uppercase">
              Dj Glass Interiors Solutions
            </h1>
            <div className="flex items-center justify-start gap-5">
              <p className="text-[#656868] text-lg uppercase">
                Glass industry in Bengaluru, Karnataka
              </p>
              <div className="flex gap-2">
                {Array(count)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className="fill-[#FEA116]" />
                  ))}
              </div>
            </div>
            <span className="w-full h-[2px] bg-[#080F3B]"></span>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <p className="text-justify">
              DJ Glass Interiors, led by the dedicated Mr. Umesh, has
              consistently delivered exceptional service for office partitions
              and glass replacement projects. Their commitment to quality,
              reasonable pricing, and timely execution ensures a seamless
              experience. From design to execution, their professionalism and
              attention to detail make them a trusted partner for all your glass
              interior needs.
            </p>
            <p className="text-justify">
              Customers are highly impressed with DJ Glass Interiors for their
              excellent craftsmanship, prompt responses, and reliable
              post-installation support. With premium quality materials and a
              client-focused approach, they provide tailored solutions within
              your budget. Their dedication to delivering on promises makes them
              the ideal choice for residential and office projects alike.
            </p>
            <button className="mt-5 md:block md:w-auto text-white font-medium bg-[#080F3B] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
              Contact
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <img src={aboutUs} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomePageAboutUsSection;
