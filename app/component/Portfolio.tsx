"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import externallink from "./images/visit22.png";

// ✅ Centralized project data with categories
const projects = [
  {
    title: "EasyForms - Full Stack",
    desc: "A MERN-stack form generator with React, ShadCN UI, Express, and MongoDB for creating and managing dynamic forms.",
    img: require("./images/easyform.png"),
    link: "https://easyforms-ten.vercel.app/",
    category: ["MERN", "Full Stack", "React"],
  },
  {
    title: "Grocery App - E-commerce",
    desc: "A grocery e-commerce mobile app integrated with the Shopify API. It features product browsing, cart management, and secure checkout, providing a smooth and user-friendly shopping experience.",
    img: require("./images/G-Mart Grocery App.png"),
    link: "https://drive.google.com/file/d/1r7OfgFQAg82d9xz9wgElvlN7jJtPqZ2W/view?usp=sharing",
    category: ["Ecommerce", "Shopify API", "Frontend", "Ionic", "Angular", "Mobile App"],
  },
  {
    title: "Calculator - Ionic Angular",
    desc: "A lightweight and responsive calculator mobile app built with Ionic and Angular. It provides a clean UI, smooth performance, and essential arithmetic operations, making everyday calculations fast and simple on any device.",
    img: require("./images/Calcutor.png"),
    link: "https://drive.google.com/file/d/1IEqukbFtH92315S_CSA7QLIRRphimBZd/view?usp=sharing",
    category: ["Ionic", "Angular", "Mobile App"],
  },
  {
    title: "Nike - Full Stack",
    desc: "Next.js e-commerce platform with Sanity CMS, JWT auth, Stripe payments, dynamic products, cart, and email verification.",
    img: require("./images/Untitled design (1).png"),
    link: "https://hackathon-03-one.vercel.app/",
    category: ["Next.js", "Full Stack", "Ecommerce"],
  },
  {
    title: "Techverse - Blog Website",
    desc: "Blog website built with Next.js, Sanity, and Tailwind CSS.",
    img: require("./images/screencapture-blog-website-rouge-three-vercel-app-2025-01-07-13_52_21.png"),
    link: "https://blog-website-rouge-three.vercel.app/",
    category: ["Next.js", "Full Stack"],
  },
  {
    title: "Ecommerce Website",
    desc: "Hackathon project: UX/UI ecommerce site using Next.js + Tailwind CSS within 24 hours.",
    img: require("./images/screencapture-hachathon-02-vercel-app-2024-12-10-11_09_221111111.png"),
    link: "https://hachathon-02.vercel.app/",
    category: ["Next.js", "Frontend"],
  },
  {
    title: "Landing Page",
    desc: "Cloned Realme landing page with Next.js and Tailwind CSS.",
    img: require("./images/realme-clone.png"),
    link: "https://realme-clone-pi.vercel.app/",
    category: ["Next.js", "Frontend"],
  },
  {
    title: "TextUtils",
    desc: "Utility tool to modify and manipulate text with ease.",
    img: require("./images/screencapture-text-utils-steel-ten-vercel-app-2024-10-26-09_21_08.png"),
    link: "https://text-utils-steel-ten.vercel.app/",
    category: ["React"],
  },
  {
    title: "Static Design Responsive",
    desc: "Converted Figma design into a responsive site using Next.js and Tailwind CSS.",
    img: require("./images/ass-3.png"),
    link: "https://ass-06-tailwind-design.vercel.app/",
    category: ["Next.js", "Frontend"],
  },
  {
    title: "Resume Builder",
    desc: "A tool to create professional resumes by entering details and exporting them.",
    img: require("./images/screencapture-resume-builder-122598-vercel-app-2024-10-26-09_21_35.png"),
    link: "https://resume-builder-122598.vercel.app/",
    category: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Password Generator",
    desc: "Generates strong, weak, or custom passwords on demand.",
    img: require("./images/screencapture-abdulwassay122-github-io-Javascript-Password-Generator-2024-10-26-09_22_32.png"),
    link: "https://abdulwassay122.github.io/Javascript-Password-Generator",
    category: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Alarm Clock",
    desc: "A simple alarm clock app with timer functionality.",
    img: require("./images/screencapture-abdulwassay122-github-io-Alarm-Clock-2024-10-26-09_23_03.png"),
    link: "https://abdulwassay122.github.io/Alarm-Clock/",
    category: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio",
    desc: "Multi-page portfolio website built with pure HTML & CSS.",
    img: require("./images/html css portfolio.png"),
    link: "https://portfolio-html-css-inky.vercel.app/",
    category: ["HTML", "CSS", "JavaScript"],
  },
];

// ✅ Extract unique categories
const allCategories = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.category))),
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section
      id="portfolio"
      className="font-roboto py-16 px-5 bg-black bg-[url('/snow.png')] text-white flex flex-col items-center"
    >
      <h1 className="xs:text-6xl text-5xl font-sen font-semibold mb-10">
        My Work
      </h1>

      {/* Navigation Bar */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-[#77effc] text-black"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        <AnimatePresence>
          {filteredProjects.map((proj, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group relative cursor-pointer transform transition-all duration-500 hover:scale-[1.05]"
            >
              {/* Image with zoom effect */}
              <div className="overflow-hidden relative">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-4 relative z-10">
                <h4 className="font-bold text-lg mb-2 group-hover:text-[#77effc] transition-colors">
                  {proj.title}
                </h4>
                <p className="text-sm opacity-80 mb-4">{proj.desc}</p>
                <a
                  target="_blank"
                  href={proj.link}
                  className="inline-flex items-center gap-2 text-[#77effc] font-medium hover:gap-3 transition-all"
                >
                  <Image src={externallink} alt="Visit" className="h-4 w-4" />
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
