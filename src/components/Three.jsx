import React from 'react'
import { arroRight, rectangle, three } from '../assets'
import 'aos/dist/aos.css'

function Three() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-[60%_40%] gap-10 md:gap-20 items-center'>
        <div className='relative md:ml-20' data-aos="fade-right">
            <h1 className='font-[Poppins] absolute top-0 left-0 md:-translate-x-20 -translate-y-24 text-[150px] opacity-15 font-bold'>03</h1>
            <div className='flex gap-8'>
                <img src={rectangle} alt="rectangle"/>
                <h3 className='text-[#FBD784] font-semibold text-sm'>WHERE YOU GO IS THE KEY</h3>
            </div>
            <h1 className='text-5xl font-[Poppins] my-5'>Understand Your<br />Map & Timing</h1>
            <p className='font-semibold text-md mb-5'>To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know where my next landmark is as i hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction...</p>
            <div className=' transition delay-150 duration-500 hover:-translate-y-1 flex gap-5 items-center'>
                <h3 className='cursor-pointer text-[#FBD784] font-semibold text-md'>read more</h3>
                <img className='cursor-pointer' src={arroRight} alt="arrow right" />
            </div>
        </div>
        <div data-aos="fade-left">
            <img src={three} alt="one" className='w-full h-auto object-cover'/>
        </div>
    </div>
  )
}

export default Three