"use client";
import React from "react";
import { motion } from "framer-motion";
import email from "./images/Email (2).png";
import phone from "./images/phonee.png";
import facebook from "./images/facebook (2).png";
import instagram from "./images/instagram (2).png";
import linkedin from "./images/linkdin.png";
import location from "./images/locationn.png";
import github from "./images/image.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div> */}

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
        {/* Left Side - Info */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="md:w-[45%] w-full mb-12 md:mb-0"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Let’s connect! Whether you want to collaborate, discuss a project,
            or just say hi feel free to reach out.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-lg">
              <img src={email.src} className="h-7" alt="email" />
              <span>aw122598@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <img src={phone.src} className="h-7" alt="phone" />
              <span>+92 319 1476707</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <img src={location.src} className="h-7" alt="location" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <a href="https://facebook.com" target="_blank">
              <img
                src={facebook.src}
                className="h-8 hover:scale-110 transition-transform duration-300"
                alt="facebook"
              />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img
                src={instagram.src}
                className="h-8 hover:scale-110 transition-transform duration-300"
                alt="instagram"
              />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img
                src={linkedin.src}
                className="h-8 hover:scale-110 transition-transform duration-300"
                alt="linkedin"
              />
            </a>
            <a href="https://github.com" target="_blank">
              <img
                src={github.src}
                className="h-8 hover:scale-110 transition-transform duration-300"
                alt="github"
              />
            </a>
          </div>

          <button className="mt-10 bg-gradient-to-r from-[#00b7ff] to-[#77effc] text-black font-semibold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            Download CV
          </button>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          // className="md:w-[50%] w-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
        >
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#77effc] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#77effc] outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#77effc] outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00b7ff] to-[#77effc] text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
