"use client"
import React from "react"
import { motion } from "framer-motion"

import nextJs from "./images/next-js-seeklogo(1).svg";
import reactJs from "./images/react-seeklogo.svg";
import typeScript from "./images/typescript-seeklogo.svg";
import javaScript from "./images/javascript-seeklogo.svg";
import html from "./images/html5-without-wordmark-color-seeklogo.svg";
import css from "./images/css-3-seeklogo.svg";
import tailwind from "./images/tailwind-css-seeklogo.svg";
import angular from "./images/download.png";
import ionic from "./images/download (1).png";
import express from "./images/express-js.png";
import node from "./images/nodde.png";
import mysql from "./images/mysql-logo.png";
import mongo from "./images/MongoDB.png";
import python from "./images/python-svgrepo-com.svg";

const skills = [
  { name: "Next.js", level: 85, icon: nextJs },
  { name: "React.js", level: 90, icon: reactJs },
  { name: "Angular", level: 60, icon: angular },
  { name: "Ionic", level: 60, icon: ionic },
  { name: "Express.js", level: 70, icon: express },
  { name: "Node.js", level: 70, icon: node },
  { name: "MongoDB", level: 65, icon: mongo },
  { name: "MySQL", level: 60, icon: mysql },
  { name: "TypeScript", level: 75, icon: typeScript },
  { name: "JavaScript", level: 85, icon: javaScript },
  { name: "Python", level: 85, icon: python },
  { name: "HTML", level: 75, icon: html },
  { name: "CSS", level: 70, icon: css },
  { name: "Tailwind CSS", level: 70, icon: tailwind },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <h1 className="h-full sm:text-6xl text-4xl font-sen font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00b7ff] to-[#77effc] ">
          My Skills
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg border border-white/10 hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={skill.icon.src} alt={skill.name} className="h-10 w-10" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-[#00b7ff] to-[#77effc] shadow-xl shadow-[#77effc]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>

              <p className="text-right mt-2 text-sm text-gray-300">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
