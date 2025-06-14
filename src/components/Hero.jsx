"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "./style";
import { ComputersCanvas } from "./canvas";
import { useState } from "react";
// import  NameAnimation  from '../components/NameAnimation';

const Hero = () => {
  

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm <span  className='text-[#915eff]'>Askulo</span></h1>
         
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate three.js developer, <br className="sm:block hidden" />{" "}
            with a knack for creating immersive 3D experiences for the web.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full  flex justify-center items-center">
        <a href="#about">
         <div className="w-[35px] h-[64px] rounded-3xl border-4 border-blue-400 flex justify-center items-center p-2">
  <motion.div
    animate={{ y: [0, 24, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
    className="w-3 h-3 bg-blue-400 rounded-full"
  />
</div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
