import React, { useEffect } from 'react'
import { hg, vg, mg, social, bghero } from "./assets"
import { Navbar, Hero, One, Two, Three, Footer } from "./components"
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration:1500
    })
  }, [])
  return  <>
    <div className='bg-[#0B1D26] text-white overflow-hidden'>
      <img data-aos="fade-up" className='absolute top-0 w-full md:h-[90%] bg-cover bg-center' src={hg} alt="hg" />
      <img data-aos="zoom-out" className='absolute top-[20.3%] md:top-[70%] w-full md:h-full bg-cover bg-center' src={mg} alt="mg" />
      <img data-aos="fade-down" className='absolute top-[37.2%] md:top-[98%] w-full md:min-h-full bg-cover bg-center' src={vg} alt="vg"/>
      <div className='w-[90%] m-auto md:mb-[700px]'>
        <Navbar/>
        <Hero/>
      </div>
      <div className='w-[70%] m-auto flex flex-col gap-32 mt-40 md:mt-96'>
        <One/>
        <Two/>
        <Three/>
        <Footer/>
      </div>
    </div>
  </>
}

export default App