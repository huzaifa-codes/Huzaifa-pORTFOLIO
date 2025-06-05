import React from "react";
import { motion } from "framer-motion";
import photo from '../assets/huzaifa-dp.png';

const Herosectwo = () => {
  return (
    <div>
      {/* Mobile Photo - Only animates when scrolled to */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="block p-4 mt-20 border 2xl:hidden border-gray-300 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-500 w-fit mx-auto"
      >
        <img src={photo} className="rounded-full w-150 md:w-180" alt="Huzaifa" />
      </motion.div>

      <div className="mt-33 flex flex-col md:flex-row md:justify-around xl:flex-row justify-between gap-20">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-[120px]"
        >
          <div>
            <p className="font-light">BIOGRAPHY</p>
            <h1 className="text-2xl font-[sans-serif]">
              Code for growth and <br /> design with passion! I'm Huzaifa, <br />
              a Web Developer & Learner
            </h1>
          </div>

          <div>
            <p className="font-light">CONTACT</p>
            <h1 className="text-2xl font-[sans-serif]">
              Pakistan, Karachi <br/> huzaifabusiess60@gmail.com <br/>0370 2536632
            </h1>
          </div>

          <div>
            <p className="font-light">SERVICES</p>
            <h1 className="text-2xl font-[sans-serif]">
              Web Design <br />
              Frontend Development <br />
              Responsive Layouts
            </h1>
          </div>
        </motion.div>

        {/* Desktop Photo - Center - Only animates when scrolled to */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, }}
          transition={{ duration: 0.6 }}
          className="hidden border-4  border-gray-300 p-3 2xl:block rounded-full relative right-3 shadow-2xl shadow-gray-200"
        >
          <img 
            src={photo} 
            alt="Huzaifa" 
            className="border-x-blue-300 rounded-full" 
          />
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-[120px]"
        >
          <div>
            <p className="font-light">CURRENTLY LEARNING AT</p>
            <h1 className="text-2xl font-[sans-serif]">
              Learning at SMIT, Karachi <br />
              Aiming to build innovative <br />
              web and mobile applications <br/>
            </h1>
          </div>

          <div>
            <p className="font-light">LEARNING CURRENTLY WORKING ON</p>
            <h1 className="text-2xl font-[sans-serif]">
              Learning Node.js <br />
              Exploring MongoDB <br />
              Practicing Full-Stack Dev
            </h1>
          </div>

          <div>
            <p className="font-light">GOALS / MISSION</p>
            <h1 className="text-2xl font-[sans-serif]">
              Learn Full-Stack Dev <br />
              Build Real Projects <br />
              Join a Tech Company
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosectwo;