import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features'
import WorkFlow from './Components/WorkFlow'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonial'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
      <Features/>
      <WorkFlow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
      </div>
    </div>
  )
}
export default App
