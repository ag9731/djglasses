import React from "react";
import AboutUsImage from "../../../assets/About_Us/djglass_about_us.webp";
import { FaSquareXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

const AboutUsPageSection2 = () => {
  return (
    <section className="bg-[#f3f3f3] py-16">
      {/* upper section */}
      <section>
        <div className="flex flex-col items-center justify-center gap-4">
          {/* <h1 className="text-4xl font-bold uppercase">About Us</h1> */}
          {/* <span className="bg-[#080F3B] w-1/12 h-[2px]"></span> */}
        </div>
      </section>

      {/* Lower Section */}
      <section className="grid grid-cols-2 mt-16 container mx-auto gap-20">
        {/* 1st column */}
        <div className="flex flex-col gap-3 justify-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">OUR STORY</h1>
            <span className="bg-[#080F3B] w-full h-[2px]"></span>
          </div>
          <div className="flex flex-col gap-5 ">
            <p className="text-justify">
              Under the leadership of Mr. Umesh, DJ Glass Interiors has earned a
              reputation for delivering top-notch services in office partitions
              and glass replacement. Their unwavering focus on quality,
              competitive pricing, and timely completion guarantees a smooth and
              hassle-free process. With a keen eye for detail and
              professionalism from start to finish, they have become a trusted
              name for all glass interior solutions.
            </p>
            <p className="text-justify">
              DJ Glass Interiors has won the trust of clients with its
              exceptional craftsmanship, swift responses, and dependable
              after-installation service. Using high-quality materials and a
              customer-centric approach, they offer customized solutions that
              fit within your budget. Their commitment to fulfilling every
              promise has established them as the preferred choice for both
              residential and commercial projects.
            </p>
          </div>

          <div>
            <button className="mt-5 md:block md:w-auto text-white font-medium bg-[#080F3B] px-8 md:px-14 py-3 md:py-4 hover:bg-[#e99015] transition-colors">
              BOOK US
            </button>
          </div>
          <div className="flex gap-5 mt-2">
            <FaFacebookF />
            <FaInstagram />
            <FaSquareXTwitter />
          </div>
        </div>
        {/* 2nd column */}
        <div className="flex justify-end">
          <img
            src={AboutUsImage}
            alt=""
            className="rounded-md border border-solid border-[#080F3B] p-4"
          />
        </div>
      </section>
    </section>
  );
};

export default AboutUsPageSection2;
