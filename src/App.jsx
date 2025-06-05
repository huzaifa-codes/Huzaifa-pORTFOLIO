import React from 'react'
import Navbar from './component/Navbar'
import Herosec from './component/Hero-sec'
import Herosectwo from './component/Hero-sec-two'
import Myadvantage from './component/MyADVANTAGE.JSX'
import Education from './component/Education'
import Projects from './component/Projects'
import Aboutme from './component/Aboutme'
import Seclast from './component/Seclast'
import Footer from './component/Footer'

export default function App() {
  return (
    <div className="max-w-[1500px] mx-auto">
        <Navbar/>
        <Herosec/>
        <Herosectwo/>
           <Aboutme/>
        <Myadvantage/>
        <Education/>
        <Projects/>
        <Seclast/>
        <Footer/>

    </div>
  )
}
 