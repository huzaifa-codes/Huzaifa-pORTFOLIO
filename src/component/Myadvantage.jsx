import React from 'react';
import {
  SiHtml5, SiFirebase, SiTailwindcss, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiGithub, SiJavascript
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

export default function Myadvantage() {
  const techStats = [
    { name: "HTML5", logo: <SiHtml5 />},
    { name: "CSS3", logo: <IoLogoCss3 />},
    { name: "Bootstrap", logo: <FaBootstrap />},
    { name: "JavaScript", logo: <SiJavascript />},
    { name: "Firebase", logo: <SiFirebase />},
    { name: "ReactJS", logo: <SiReact />},
    { name: "TailwindCSS", logo: <SiTailwindcss />},
    { name: "React Native", logo: <TbBrandReactNative />},
    { name: "Node.js", logo: <SiNodedotjs />},
    { name: "Express.js", logo: <SiExpress />},
    { name: "MongoDB", logo: <SiMongodb />},
    { name: "Git & GitHub", logo: <SiGithub />}
  ];

  return (
    <section className="mt-28 ">

              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className='mt-10 mb-20'>
        <h2  className="text-4xl sm:text-5xl  font-[PlayfairDisplay] text-black border-l-10 mt-18 border-blue-400 pl-4">
          My Skills
        </h2>
        <p className="text-gray-600 mt-3 text-balance sm:text-lg pl-4">
          Technologies I work with to build fast, responsive, and scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  sm:gap-10">
        {techStats.map((item, index) => (
     <div
  key={index}
  className="group flex flex-col items-center  text-center transition-all duration-300 hover:-translate-y-1"
>
  <div className="w-24 h-24 sm:w-40  backdrop-blur-md bg-white/100 border border-gray-300  flex items-center justify-center relative overflow-hidden">

  
    
    <span className="text-3xl sm:text-6xl text-black">{item.logo}</span>
  </div>
  
  <p className="mt-4 text-base sm:text-lg font-semibold text-gray-800">
    {item.name}
  </p>
</div>

        ))}
      </div>
    </section>
  );
}
