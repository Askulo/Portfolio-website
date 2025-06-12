"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Image from 'next/image'

import { styles } from "./style";
import { services } from "../constants";
import { fadeIn, textVariant } from "./utils/motion";
import {SectionWrapper} from './hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="w-full max-w-[280px] mx-auto">
      <Tilt className="w-full h-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image
                src={icon}
                width={64}
                height={64}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-white text-[18px] font-bold text-center leading-tight">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

const About = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Aashish-Resume.pdf'; // Change to your actual name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] sm:text-[16px] md:text-[17px] leading-[26px] sm:leading-[28px] md:leading-[30px] max-w-3xl"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, Vite,
        Nextjs and Three.js. I'm a quick learner and collaborate closely with
        clients to create efficient, scalable, and user-friendly solutions that
        solve real-world problems. Let's work together to bring your ideas to
        life!
      </motion.p>

      {/* Resume Download Button */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="mt-8"
      >
        <button
          onClick={handleResumeDownload}
     className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3 group"
        >
          <svg 
            className="w-5 h-5 transition-transform group-hover:translate-y-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          Download Resume
        </button>
      </motion.div>

      {/* Responsive grid container with proper gaps */}
      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 w-full">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")