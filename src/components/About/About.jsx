import React from 'react'
import AboutUsPageBannerSection from './AboutUsPageSections/AboutUsPageBannerSection'
import AboutUsPageSection2 from './AboutUsPageSections/AboutUsPageSection2'
import AboutUsMissionVission from './AboutUsPageSections/AboutUsMissionVission'
import AboutUsWhyChooseUsSection from './AboutUsPageSections/AboutUsWhyChooseUsSection'

const About = () => {
  return (
    <section className='flex flex-col'>
        <AboutUsPageBannerSection/>
        <AboutUsPageSection2/>
        <AboutUsMissionVission/>
        <AboutUsWhyChooseUsSection/>
    </section>
  )
}

export default About
