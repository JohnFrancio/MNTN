import React from 'react'
import { arrowDown, rectangle } from '../assets'
import 'aos/dist/aos.css'

function Hero() {
  return (
    <div className='md:w-[58%] w-full m-auto md:my-24' data-aos="zoom-in-left">
        <div className='flex gap-8 md:ml-0 ml-10'>
            <img src={rectangle} alt="rectangle"/>
            <h3 className='text-[#FBD784] font-semibold text-md'>A HIKING GUIDE</h3>
        </div>
        <div className='font-[Poppins] text-3xl md:text-7xl my-5 md:my-10  ml-10 md:ml-3'>
            <h1>Be Prepared For The</h1>
            <h1>Mountains And Beyond!</h1>
        </div>
        <div className='ml-20 md:ml-0 flex gap-3 items-center'>
            <p>scroll down</p>
            <img className='animate-bounce mt-1' src={arrowDown} alt="arrowdown" />
        </div>
    </div>
  )
}

export default Hero