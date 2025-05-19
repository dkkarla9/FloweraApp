import React, { Component } from 'react'
import HeroSection from '../component/HeroSection' // Import the Header component
import FeaturedProducts from '../component/FeaturedProducts' // Import the Header component
import WhyChooseUs from '../component/WhyChooseUs' // Import the Header component   
import Footer from '../component/Footer' // Import the Header component
import ContactUs from '../component/ContactUs' // Import the Header component
import AboutUs from '../component/AboutUs' // Import the Header component


export default class Home extends Component {
  render() {
    return (
      <>
    <HeroSection/>
    <FeaturedProducts/>
     <AboutUs/>
    <WhyChooseUs/>
    <ContactUs/>
   
      </>
    )
  }
}
