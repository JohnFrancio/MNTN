import React from 'react'
import { logo } from '../assets'
import 'aos/dist/aos.css'

function Footer() {
  return (
    <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 xl:gap-20 items-center mb-10'>
        <div className='hidden xl:flex flex-col'>
            <div>
                <img src={logo} alt="logo" className='w-20 mb-5'/>
                <p className='font-bold mb-14'>Get out there & discover your next <br /> slape, mountain & destination!</p>
            </div>
            <p className='text-white opacity-20 text-sm'>Copyright &copy; John Francio 2024</p>
        </div>
        <div className='grid grid-cols-[60%_40%] gap-9'>
            <div>
                <h3 className='text-[#FBD784] font-semibold text-md'>More on The Blog</h3>
                <ul className='flex flex-col gap-2 text-sm mt-3'>
                    <li>About MNTN</li>
                    <li>Contributors & Writers</li>
                    <li>Write For Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h3 className='text-[#FBD784] font-semibold text-md'>More on MNTN</h3>
                <ul className='flex flex-col gap-2 text-sm mt-3'>
                    <li>The Team</li>
                    <li>Jobs</li>
                    <li>Press</li>
                </ul>
            </div>
        </div>
        <div className='xl:hidden flex flex-col'>
            <div>
                <img src={logo} alt="logo" className='w-20 mb-5'/>
                <p className='font-bold mb-5'>Get out there & discover your next <br /> slape, mountain & destination!</p>
            </div>
            <p className='text-white opacity-20 text-sm'>Copyright &copy; John Francio 2024</p>
        </div>
    </div>
  )
}

export default Footer