import React from 'react'
import { arroRight, rectangle, two } from '../assets'
import 'aos/dist/aos.css'

function Two() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-[40%_60%] gap-10 md:gap-20 items-center'>
        <div className='hidden xl:block' data-aos="fade-right">
            <img src={two} alt="one" className='w-full h-auto object-cover'/>
        </div>
        <div className='hidden xl:block relative md:ml-24' data-aos="fade-left">
            <h1 className='font-[Poppins] absolute top-0 left-0 md:-translate-x-20 -translate-y-24 text-[150px] opacity-15 font-bold'>02</h1>
            <div className='flex gap-8'>
                <img src={rectangle} alt="rectangle"/>
                <h3 className='text-[#FBD784] font-semibold text-sm'>HIKING ESSENTIALS</h3>
            </div>
            <h1 className='text-5xl font-[Poppins] my-5'>Piking the right <br />Hiking gear!</h1>
            <p className='font-semibold text-md mb-5'>The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
            <div className=' transition delay-150 duration-500 hover:-translate-y-1 flex gap-5 items-center'>
                <h3 className='cursor-pointer text-[#FBD784] font-semibold text-md'>read more</h3>
                <img className='cursor-pointer' src={arroRight} alt="arrow right" />
            </div>
        </div>
        <div className='xl:hidden relative md:ml-24' data-aos="fade-right">
            <h1 className='font-[Poppins] absolute top-0 left-0 md:-translate-x-20 -translate-y-24 text-[150px] opacity-15 font-bold'>02</h1>
            <div className='flex gap-8'>
                <img src={rectangle} alt="rectangle"/>
                <h3 className='text-[#FBD784] font-semibold text-sm'>HIKING ESSENTIALS</h3>
            </div>
            <h1 className='text-5xl font-[Poppins] my-5'>Piking the right <br />Hiking gear!</h1>
            <p className='font-semibold text-md mb-5'>The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
            <div className=' transition delay-150 duration-500 hover:-translate-y-1 flex gap-5 items-center'>
                <h3 className='cursor-pointer text-[#FBD784] font-semibold text-md'>read more</h3>
                <img className='cursor-pointer' src={arroRight} alt="arrow right" />
            </div>
        </div>
        <div className='xl:hidden' data-aos="fade-left">
            <img src={two} alt="one" className='w-full h-auto object-cover'/>
        </div>
    </div>
  )
}

export default Two