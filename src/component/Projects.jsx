import React, { useState, useEffect } from 'react'
import mermoryCard from '../assets/project-memory.png'
import password from '../assets/project-password.png'
import quizapp from '../assets/quiz-app.png'
import expense from '../assets/expeness.png'
import ecommerce from '../assets/e-commerce.png'
import calculator from '../assets/calculator.png'
import blogging from '../assets/blogging-app.png'
import { Element } from 'react-scroll'

export default function Projects() {
  const projects = [
    { id: 1, title: 'Memory Card Game', img: mermoryCard },
    { id: 2, title: 'Password Generate', img: password },
    { id: 3, title: 'Quiz App', img: quizapp },
    { id: 4, title: 'Expence Tracker', img: expense },
    { id: 5, title: 'E-commerce App', img: ecommerce },
    { id: 6, title: 'Calculator App', img: calculator },
    { id: 7, title: 'Blogging App', img: blogging },
  ]

  const getCardsPerView = () => {
    const width = window.innerWidth
    if (width >= 1105) return 3 
    if (width >= 765) return 2 
    return 1
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = () => {
    if (startIndex + cardsPerView < projects.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  const visibleProjects = projects.slice(startIndex, startIndex + cardsPerView)

  return (
    <Element name='projects'>

    <div className="mt-20">
      <div className="w-full h-[1px] bg-gray-300 mb-20"></div>
      <h1 className="text-4xl sm:text-6xl font-[PlayfairDisplay] border-l-8  border-blue-500 pl-3 mb-16">
        My Latest Projects
      </h1>

      <div className="flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="text-black text-2xl px-3 py-1 border shadow-sm hover:shadow-md transition"
        >
          &#8592;
        </button>

        {/* Projects */}
        <div className="flex gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center flex-wrap"
            >
              <div className="h-80 2xl:w-115 2xl:h-120 xl:w-90 xl:h-90 md:w-70 md:h-80">
                <img
                  src={project.img}
                  className="w-full h-full object-cover"
                  alt={project.title}
                />
              </div>
              <h2 className="text-center text-xl sm:text-2xl text-gray-600 font-light mt-4">
                {project.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="text-black text-2xl px-3 py-1 border shadow-sm hover:shadow-md transition"
        >
          &#8594;
        </button>
      </div>
    </div>
     </Element>
  )
}
