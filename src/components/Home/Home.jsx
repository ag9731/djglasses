import React from 'react'
import HomeBannerSection from './HomePageSections/HomeBannerSection'
import HomePageAboutUsSection from './HomePageSections/HomePageAboutUsSection'
import HomePageServices from './HomePageSections/HomePageServices'
import HomeTestimonialSection from './HomePageSections/HomeTestimonialSection'
import HomePageGallerySection from './HomePageSections/HomePageGallerySection'
import HomePageCountSection from './HomePageSections/HomePageCountSection'

const Home = () => {
  return (
    <section className='flex flex-col gap-20'>
      <HomeBannerSection/>
      <HomePageAboutUsSection/>
      <HomePageServices/>
      <HomePageCountSection/>
      <HomePageGallerySection/>
      <HomeTestimonialSection/>
    </section>
  )
}

export default Home
