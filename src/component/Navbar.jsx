import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/huzaifa-logo.png';
import { Link } from 'react-scroll'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
<div className="flex justify-between items-center gap-40 relative px-4 ">
      <ul className="hidden xl:flex gap-6 text-[17px] font-bold items-center text-gray-800 mt-6">
  <li className="hover:text-blue-500 cursor-pointer">
    <Link to="home" smooth={true} duration={500}>HOME</Link>
  </li>
  <li className="hover:text-blue-500 cursor-pointer">
    <Link to="about" smooth={true} duration={500}>ABOUT</Link>
  </li>
  <li className="hover:text-blue-500 cursor-pointer">
    <Link to="projects" smooth={true} duration={500}>PROJECTS</Link>
  </li>
  <li className="hover:text-blue-500 cursor-pointer">
    <Link to="message" smooth={true} duration={500}>MESSAGE ME</Link>
  </li>
</ul>

  
        <div className='mt-2'>
          <img src={logo} alt="Muhammad Huzaifa Logo" className='h-30 w-35 mt-4 sm:h-37 sm:w-41 sm:mr-40 bg-white' />
        </div>
     <div className="hidden xl:flex gap-5 justify-center items-center text-gray-800 mt-6">
  <a href="https://www.instagram.com/muhammad_huzaifa804/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className='text-3xl' />
  </a>
  <a href="https://www.facebook.com/profile.php?id=100090096429107" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className='text-3xl' />
  </a>
  <a href="https://github.com/huzaifa-codes" target="_blank" rel="noopener noreferrer">
    <FaGithub className='text-3xl' />
  </a>
  <a href="https://www.linkedin.com/in/muhammad-huzaifa-8a9921354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className='text-3xl' />
  </a>
</div>

        <div 
          className="block xl:hidden text-3xl text-gray-800 absolute right-4 top-20 cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <FaBars />
        </div>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-2/3 md:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <button onClick={() => setDrawerOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-[18px] font-semibold items-start text-gray-800 p-6">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="home" smooth={true} duration={500} onClick={() => setDrawerOpen(false)}>HOME</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="about" smooth={true} duration={500} onClick={() => setDrawerOpen(false)}>ABOUT</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="projects" smooth={true} duration={500} onClick={() => setDrawerOpen(false)}>PROJECTS</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="message" smooth={true} duration={500} onClick={() => setDrawerOpen(false)}>MESSAGE ME</Link>
          </li>
        </ul>

        <div className="flex gap-6 justify-start items-center text-gray-800 px-6 mt-6">
          <a href="https://www.instagram.com/muhammad_huzaifa804/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-3xl hover:text-pink-500 transition duration-200' />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100090096429107" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className='text-3xl hover:text-blue-600 transition duration-200' />
          </a>
          <a href="https://github.com/huzaifa-codes" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-3xl hover:text-gray-700 transition duration-200' />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-huzaifa-8a9921354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-3xl hover:text-blue-700 transition duration-200' />
          </a>
        </div>
      </div>

      {/* Overlay behind drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </div>
  );
}
