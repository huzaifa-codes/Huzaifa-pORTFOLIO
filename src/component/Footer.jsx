import React from 'react'
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Element } from 'react-scroll';
export default function Footer() {
    
  return (
    <Element name='message'>
    <div className='mt-30'>
  <div className="w-full h-[1px] bg-gray-300"></div>
     <div className='flex justify-center flex-col sm:flex-row sm:justify-between items-center mt-25 mb-25'>
        <div>
            <p>© 2025 Muhammad Huzaifa. All Rights Reserved.</p>
        </div>
        <div className='mr-28'>
            huzaifabusiness60@gmail.com
        </div>
        <div>
             <div className='flex flex-row mt-10 sm:flex-row  items-center sm:mt-0 gap-3'>
                      <FaInstagram className='text-3xl' />
                      <FaFacebookF className='text-3xl' />
                      <FaGithub className='text-3xl' />
                      <FaLinkedin className='text-3xl' />
                    </div>
        </div>
     </div>
    </div>
        </Element>

  )
}
