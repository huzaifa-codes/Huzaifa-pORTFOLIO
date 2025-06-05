import React from 'react'
import { Element } from 'react-scroll'
export default function Education() {
    const educationData = [
    {
      institute: "The Citizens Foundation (TCF)",
      level: "Matriculation • Completed",
      duration: "2024 - past",
      description: "Completed matriculation with a strong academic record. Learned foundational subjects in science, mathematics, and computer studies. Developed discipline, communication skills, and interest in technology."
    },
    {
      institute: "Intermediate College (Nabi Bagh ZM Govt. Sci College)",
      level: "Intermediate • Pre-Engineering",
      duration: "2025 - Present",
      description: "Currently pursuing college education with a focus on Pre-Engineering. Balancing academics with skill development in programming, problem-solving, and personal growth."
    },
    {
      institute: "Saylani Mass IT Training Program",
      level: "Web & Mobile App Development • Ongoing",
      duration: "2025 - Present",
      description: "Enrolled in Saylani's professional IT course. Learning modern technologies including HTML, CSS, JavaScript, React, Node.js, MongoDB, Firebase and Git. Working on real-world projects to build a strong development portfolio."
    }
  ];


  return (
  <Element>
   <div className='mt-30'>
      <div className="w-full h-[1px] bg-gray-300"></div>
         <div className="w-full h-[1px] mb-20" />
         <h1 className="text-4xl sm:text-6xl font-[PlayfairDisplay] mb-12 border-l-8 border-blue-500 pl-4">
  Education & Skills
</h1>
<section>
  <div>
    <div className="relative">

      {/* Vertical timeline line */}
      <div className="absolute top-4 bottom-0 w-1  bg-gradient-to-b from-black to-black rounded-full"></div>
      {educationData.map((edu, index) => (
        <div key={index} className="relative pl-10 sm:pl-10 mb-14">
                <div className='border-2 bg-black rounded-full w-4 h-4 relative right-[45px] top-35'></div>
  <div className="bg-white border border-gray-200  shadow-md p-13 pr-8 sm:pr-12 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
      <h3 className="text-xl font-bold text-gray-900">{edu.institute}</h3>
      <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full mt-2 sm:mt-0">{edu.duration}</span>
    </div>
    <p className="text-blue-500 font-medium mt-1">{edu.level}</p>
    <p className="text-black mt-3 text-[20px] leading-relaxed">{edu.description}</p>
  </div>
</div>

      ))}
    </div>
  </div>
</section>

 </div>
 </Element>
  )
}


