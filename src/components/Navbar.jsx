import React, { useState } from 'react'
import { account, bghero, logo, social } from '../assets'
import { CiMenuFries } from 'react-icons/ci'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import 'aos/dist/aos.css'

function Navbar() {
  const [toggle, setToggle] = useState(true)
  const handleToggle = () => {
    setToggle(!toggle)
  } 
  return (
    <>
    <img className='absolute w-screen h-auto bg-cover bg-center top-0 -translate-x-[18px] md:-translate-x-[68px]' src={bghero} alt="bghero" />
    <div className='w-full h-auto overflow-hidden'>
      <img data-aos="fade-right" className='fixed top-[20%] md:top-[42%] left-1 md:left-16' src={social} alt="social" />
      <img className='fixed top-[20%] md:top-[42%] right-1 md:right-16' src={social} alt="social" />
      <nav className='flex justify-between items-center py-10 overflow-hidden'>
        <a href="#" data-aos="fade-right"><img src={logo} alt="logo" /></a>
        {/* menu for sm */}
        <div className='md:hidden flex' data-aos="fade-left">
          {
            toggle 
            ? <CiMenuFries onClick={handleToggle} className='w-8 h-8 fill-white stroke-white'/>
            : <IoIosCloseCircleOutline onClick={handleToggle} className='w-8 h-8 fill-white stroke-white'/>
          }
        </div>
        {/* for medium and up */}
        <ul className='hidden md:flex gap-8 font-semibold' data-aos="fade-down">
          <li className=' transition delay-150 duration-200 hover:-translate-y-1'><a href="#equipment">Equipment</a></li>
          <li className=' transition delay-150 duration-200 hover:-translate-y-1'><a href="#aboutus">About us</a></li>
          <li className=' transition delay-150 duration-200 hover:-translate-y-1'><a href="#blog">Blog</a></li>
        </ul>
        <div data-aos="fade-left" className='hidden md:flex items-center gap-1 transition delay-150 duration-200 hover:-translate-y-1'>
          <img src={account} alt="account" />
          <button className='mt-1 font-semibold'>Account</button>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar