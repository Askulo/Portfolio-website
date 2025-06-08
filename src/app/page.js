"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Tech from '@/components/Tech'
import Works from '@/components/Works'
import Feedbacks from '@/components/Feedbacks'
import Contact from '@/components/Contact'
import StarsCanvas from '@/components/Stars'
const page = () => {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience />
        <Tech />
        <Works/>
        <Feedbacks/>
         <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>

 
    </div>
  )
}

export default page
