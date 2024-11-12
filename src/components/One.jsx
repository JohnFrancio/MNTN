import React from 'react'
import { arroRight, one, rectangle } from '../assets'
import 'aos/dist/aos.css'

function One() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-[60%_40%] gap-10 md:gap-20 items-center'>
        <div className='relative md:ml-20' data-aos="fade-right">
            <h1 className='font-[Poppins] absolute top-0 left-0 md:-translate-x-20 -translate-y-24 text-[150px] opacity-15 font-bold'>01</h1>
            <div className='flex gap-8'>
                <img src={rectangle} alt="rectangle"/>
                <h3 className='text-[#FBD784] font-semibold text-sm'>GET STARTED</h3>
            </div>
            <h1 className='text-5xl font-[Poppins] my-5'>What level of hiker <br /> are you?</h1>
            <p className='font-semibold text-md mb-5'>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert or expert backpacker?</p>
            <div className=' transition delay-150 duration-500 hover:-translate-y-1 flex gap-5 items-center'>
                <h3 className='cursor-pointer text-[#FBD784] font-semibold text-md'>read more</h3>
                <img className='cursor-pointer' src={arroRight} alt="arrow right" />
            </div>
        </div>
        <div data-aos="fade-left">
            <img src={one} alt="one" className='w-full h-auto object-cover'/>
        </div>
    </div>
  )
}

export default One