import React from 'react'
import VisionMission from "../../../assets/About_Us/vision_and_mission.webp";
import { FaEye, FaHandHoldingHand } from "react-icons/fa6";


const AboutUsMissionVission = () => {
  return (
    <section className="py-16">
      <section className="container mx-auto grid grid-cols-3 gap-10">
        <div>
          <img src={VisionMission} alt="" className='h-full'/>
        </div>
        <div className="bg-[#080F3B] rounded-2xl text-white px-10 py-10 flex flex-col gap-3 shadow-2xl">
          <FaEye className="text-[40px]" />
          <h1 className="text-3xl font-bold uppercase">Our Vission</h1>
          <p className="text-lg">
            To redefine spaces with innovative glass solutions, combining
            quality craftsmanship and modern design to create functional and
            aesthetic environments.
          </p>
        </div>
        <div className="bg-[#080F3B] text-white rounded-2xl px-10 py-10 flex flex-col gap-3 shadow-2xl">
          <FaHandHoldingHand className="text-[40px]" />
          <h1 className="text-3xl font-bold uppercase">Our Mission</h1>
          <p className="text-lg">
            To deliver exceptional glass interior solutions with a commitment to
            quality, affordability, and customer satisfaction, transforming
            spaces with precision and innovation.
          </p>
        </div>
      </section>
    </section>
  );
}

export default AboutUsMissionVission
