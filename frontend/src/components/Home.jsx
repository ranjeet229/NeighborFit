
import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './Footer'
import HeroSection from './HeroSection'
import HowItWorks from './HowItWorks'
import TopNeighborhoods from './TopNeighborhoods'
import CallToAction from './CallToAction'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <HowItWorks/>
        <TopNeighborhoods/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Home
