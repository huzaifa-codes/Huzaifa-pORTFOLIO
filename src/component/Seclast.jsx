import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Seclast() {
  return (
    <div onClick={() => window.open('https://wa.me/923702536632', '_blank')} className='mt-30'>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full h-[1px] bg-gray-300"
      ></motion.div>

      <div className='flex justify-center'>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          whileHover={{ scale: 1.02 }}
          className='border-3 border-gray-400 border-dotted shadow-2xl flex flex-col mt-29 items-center justify-center px-10 rounded-full 
          w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] 
          h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]'
        >
          <motion.p 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='font-[Poppins] mr-20 sm:mr-28 md:mr-36 lg:mr-40 mt-10 sm:mt-16 md:mt-20 text-gray-700 
            text-xs sm:text-sm md:text-base lg:text-lg text-left'
          >
            DESCRIBE YOUR <br /> PROJECT
          </motion.p>

          <div>
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 
            leading-[45px] sm:leading-[65px] md:leading-[85px] lg:leading-[95px] 
            py-2 sm:py-4 font-serif mr-17 pl-4 sm:pl-8">
              <span>Contact</span><br />Me
            </h1>
          </div>

          <motion.div 
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.2,
              rotate: 45,
              transition: { duration: 0.3 }
            }}
            className='text-black  text-5xl sm:text-6xl md:text-7xl lg:text-9xl mt-2 self-start  sm:ml-12 md:ml-14 lg:ml-15'
          >
            <FiArrowUpRight/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
