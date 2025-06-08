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