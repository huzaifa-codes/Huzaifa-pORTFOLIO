import React, { useState } from 'react'
import { Element } from 'react-scroll'

export default function Aboutme() {
  const [checkIndex, setCheckindex] = useState(0);
const paragraphs = [
  {
    id: 1,
    text: "Hi, I’m Huzaifa — I started my coding journey with a passion for creating clean and responsive websites. Currently, I’m studying Web & Mobile App Development at Saylani, building my skills day by day. With a strong foundation from TCF where I completed matriculation, and ongoing intermediate studies, my focus is on mastering front-end technologies like React and CSS frameworks, while constantly improving through hands-on projects and challenges."
  },
  {
    id: 2,
    text: "My goal is to become a versatile developer who can handle both the front-end and back-end with confidence. I regularly sharpen my skills through courses and coding exercises on platforms like CodeWithHarry and Chai aur Code. Recently, I worked on a JavaScript animation project which helped me understand timing and interaction — important for making websites not just functional, but engaging."
  },
  {
    id: 3,
    text: "In the long run, I want to be a full-stack developer proficient in Node.js, Express, and MongoDB. I aim to write clean, efficient code that solves real problems and improves user experience. My focus is on building reliable and scalable applications that deliver real value. Ultimately, I want to contribute to meaningful projects that make a positive impact in people’s digital lives."
  },

];


  return (
      <Element name="about">
    <div className='mt-28'>
           <div className="w-full h-[1px] bg-gray-300"></div>
             <h1  className="text-4xl sm:text-6xl font-[PlayfairDisplay] mt-18 pl-4 border-l-8 border-blue-500">
 About me
</h1>
      <div className="max-w-8xl mx-auto mt-20">
        <div className="text-center">
          {checkIndex !== null && (
            <p className="sm:text-3xl leading-relaxed font-light transition-all duration-500 ease-in-out">
              {paragraphs[checkIndex].text}
            </p>
          )}
        </div>

        <div className="flex justify-center gap-4 mt-20">
          {paragraphs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCheckindex(index)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                checkIndex === index
                  ? 'bg-blue-500 border-blue-500 scale-110'
                  : 'border-gray-400 hover:border-blue-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
    </Element>
  );
}
