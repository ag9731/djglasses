import React from 'react'
import bgImg from "../../../assets/Contact_Us/contactusBG.webp";

const ContactUsPageBannerSection = () => {
  return (
    <section
          className="bg-center bg-cover relative bg-repeat h-[40vh]"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-45 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold z-50">Contact Us</h1>
          </div>
        </section>
  )
}

export default ContactUsPageBannerSection
