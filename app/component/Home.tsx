"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// images
import Pic from "./images/main.pic.png"; // Desktop
import Pic3 from "./images/Untitled_design__12_-removebg-preview-removebg-preview (1)final.png"; // Mobile
import facebool from "./images/facebook (2).png";
import instagram from "./images/instagram (2).png";
import linkdun from "./images/linkdin.png";
import github from "./images/image.png";

export default function Home() {
  function scrollToSection(id: string) {
    const section: any = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="home"
      className="bg-black bg-[url('/axiom.png')] relative flex flex-row items-center justify-between 
  pt-[85px] pt-20 pb-10 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-2xl"
      >
        <div className="text-lg sm:text-xl font-sen font-medium text-gray-300">
          Hello, It's me
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sen font-extrabold mt-2 leading-tight">
          <span className="text-[#77effc] drop-shadow-lg">ABDUL</span>{" "}
          <span className="block text-white">WASSAY</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl mt-6 font-sen font-semibold text-gray-200">
          And I'm a{" "}
          <span className="text-red-400 border-solid border-r-4 pr-2 border-white">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "React & Next.js Developer",
                "Learning AI",
              ]}
              loop={true}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        {/* Social Icons */}
        <div className="flex mt-8 space-x-6">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100089985213341"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              className="h-8"
              src={facebool.src}
              alt="Facebook"
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/wassay122/">
            <motion.img
              whileHover={{ scale: 1.2 }}
              className="h-8"
              src={instagram.src}
              alt="Instagram"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              className="h-8"
              src={linkdun.src}
              alt="LinkedIn"
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/Abdulwassay122?tab=repositories"
          >
            <motion.img
              whileHover={{ scale: 1.2 }}
              className="h-8"
              src={github.src}
              alt="Github"
            />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex mt-8 space-x-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://drive.google.com/file/d/14ZoeTY1RfTogXq0EGQ6GQVe7CS_ZlGKn/view?usp=sharing"
            target="_blank"
            className="min-w-[152px] px-6 py-3 rounded-lg bg-gradient-to-r from-[#00b7ff] to-[#77effc] text-white font-bold shadow-lg hover:shadow-cyan-400/50 transition-all"
          >
            Download CV
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection("contact")}
            className="min-w-[107px] px-6 py-3 rounded-lg bg-gradient-to-r from-[#f65d5d] to-red-500 text-white font-bold shadow-lg hover:shadow-red-400/50 transition-all"
          >
            Contact
          </motion.button>
        </div>
      </motion.div>

      {/* Right Image (always absolute, sticks right) */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-12 lg:mt-0 flex justify-end w-full lg:w-auto"
      >
        {/* Desktop (lg and up) */}
        <div className="hidden lg:block">
          <Image
            height={900}
            width={900}
            className="h-[600px] w-auto shadow-xl object-cover animate-bounce-slow"
            src={Pic}
            alt="Abdul Wassay"
          />
        </div>

        <div className="hidden md:block lg:hidden">
          <Image
            height={900}
            width={900}
            className="h-[400px] w-auto shadow-xl object-cover animate-bounce-slow"
            src={Pic}
            alt="Abdul Wassay"
          />
        </div>

        {/* Tablet & Mobile (absolute right) */}
        <div className="block md:hidden">
          <Image
            height={900}
            width={900}
            className="h-[400px] w-auto object-cover animate-bounce-slow absolute right-0 top-[85px]"
            src={Pic3}
            alt="Abdul Wassay"
          />
        </div>
      </motion.div>
    </section>
  );
}
