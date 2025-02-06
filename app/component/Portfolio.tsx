"use client";
import React, { useState } from "react";
import textUtils from "./images/screencapture-text-utils-steel-ten-vercel-app-2024-10-26-09_21_08.png";
import alarmClock from "./images/screencapture-abdulwassay122-github-io-Alarm-Clock-2024-10-26-09_23_03.png";
import resumeBuilder from "./images/screencapture-resume-builder-122598-vercel-app-2024-10-26-09_21_35.png";
import passGenerator from "./images/screencapture-abdulwassay122-github-io-Javascript-Password-Generator-2024-10-26-09_22_32.png";
import assignment06 from "./images/ass-3.png";
import BlogWebsite from "./images/screencapture-blog-website-rouge-three-vercel-app-2025-01-07-13_52_21.png";
import realmeClone from "./images/realme-clone.png";
import Hackathon from "./images/screencapture-hachathon-02-vercel-app-2024-12-10-11_09_221111111.png";
import arrowleft from "./images/Vector (8).svg";
import arrowright from "./images/Vector (9).svg";
import htmlCSSPortfolio from "./images/html css portfolio.png";
import Nike from "./images/Untitled design (1).png";
import externallink from "./images/visit22.png";
import Image from "next/image";

;

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex < 9*340) {
      setCurrentIndex(currentIndex + 340);
    }else{
      setCurrentIndex(0)
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 340);
    }
  };
  return (
    <>
      <section id="portfolio" className=" font-roboto py-14 px-3 bg-[#0e1010] relative justify-center flex flex-col items-center">
        <h1 className="xs:text-6xl text-5xl font-sen font-semibold flex justify-center">
          My Work
        </h1>

            <div className='flex gap-3 w-full absolute z-10 items-center opacity-50 justify-between'>
                <button onClick={handlePrev} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#e2dfdf]'>
                    <Image className={`${currentIndex < 340 ? 'block': 'hidden'}`} src={arrowleft} alt="" />
                    <Image className={`rotate-180 ${currentIndex >= 340 ? 'block': 'hidden'}`} src={arrowright} alt="" />
                </button>
                <button onClick={handleNext} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#e2dfdf]'>
                    <Image className={`rotate-180 ${currentIndex >= 9*340 ? 'block': 'hidden'}`} src={arrowleft} alt="" />
                    <Image className={`${currentIndex < 9*340 ? 'block': 'hidden'}`} src={arrowright} alt="" />
                </button>
            </div>

        <div className="w-[93vw] my-[70px] xs:p-0 flex overflow-x-hidden items-center scrollbar-hidden gap-10 " >


            {/* tabs ---------------1*/}
            <div className="min-w-[300px] h-[400px] relative rounded-lg group overflow-hidden transition-all duration-200" style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={Nike.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Nike - Full Stack</h4>
                  <p className="text-center">A Next.js e-commerce platform with Sanity CMS, JWT authentication, Stripe payments, dynamic products, cart management and email verification.</p>
                  <a target="_blank" href="https://hackathon-03-one.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs ---------------1*/}
            <div className="min-w-[300px] h-[400px] relative rounded-lg group overflow-hidden transition-all duration-200" style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={BlogWebsite.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Techverse - Full Stack</h4>
                  <p className="text-center">Blog Website Using Sanity, NextJs, Tailwind CSS.</p>
                  <a target="_blank" href="https://blog-website-rouge-three.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs ---------2*/}
            <div className="min-w-[300px] h-[400px] relative rounded-lg group overflow-hidden transition-all duration-200" style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={Hackathon.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Ecommerce Website</h4>
                  <p className="text-center">UX/UI Hackathon Ecommerce website using Nextjs and Taiwind CSS (Deadline:24hours)</p>
                  <a target="_blank" href="https://hachathon-02.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs ------------3*/}
            <div className="min-w-[300px] h-[400px] relative rounded-lg group overflow-hidden transition-all duration-200" style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={realmeClone.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Landing Page</h4>
                  <p className="text-center">Cloned Realme website Landing Page using Taiwind and Nextjs</p>
                  <a target="_blank" href="https://realme-clone-pi.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs */}
            {/* tabs ----------4*/}
            <div className="min-w-[300px] h-[400px] relative rounded-lg group overflow-hidden transition-all duration-200" style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={textUtils.src} alt="" />
              <div className=" w-full h-0   absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">TextUtils</h4>
                  <p className="text-center">TextUtis is text utility tool you can use to modify your text.</p>
                  <a target="_blank" href="https://text-utils-steel-ten.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs -------5*/}
            <div className={`min-w-[300px] h-[400px] relative  rounded-lg group overflow-hidden transition-all duration-200 `} style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={assignment06.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Static Design Responsive</h4>
                  <p className="text-center">Convert Figma design using taiwind and nextjs.</p>
                  <a target="_blank" href="https://ass-06-tailwind-design.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs ---------6*/}
            <div className={`min-w-[300px] h-[400px] relative  rounded-lg group overflow-hidden transition-all duration-200 `} style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={resumeBuilder.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden  h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Resume Builder</h4>
                  <p className="text-center">Resume Builder here you can enter your details and create your resume.</p>
                  <a target="_blank" href="https://resume-builder-122598.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs -----------7*/}
            <div className={`min-w-[300px] h-[400px] relative  rounded-lg group overflow-hidden transition-all duration-200 `} style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={passGenerator.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Password Generator</h4>
                  <p className="text-center">Generates normal, strong, weak Password as you need. </p>
                  <a target="_blank" href="https://abdulwassay122.github.io/Javascript-Password-Generator"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
           
            {/* tabs -------------8*/}
            <div className={`min-w-[300px] h-[400px] relative  rounded-lg group overflow-hidden transition-all duration-200`} style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={alarmClock.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Alarm Clock</h4>
                  <p className="text-center">Alarm Clock you can set timmer.</p>
                  <a target="_blank" href="https://abdulwassay122.github.io/Alarm-Clock/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs ------------9*/}
            <div className={`min-w-[300px] h-[400px] relative  rounded-lg group overflow-hidden transition-all duration-200`} style={{
            transform: `translateX(-${currentIndex}px)`,
          }}>
              <img className="w-full h-full " src={htmlCSSPortfolio.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Portfolio</h4>
                  <p className="text-center">Multipage Potfolio using custom CSS.</p>
                  <a target="_blank" href="https://portfolio-html-css-inky.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>

        </div>

      </section>
    </>
  );
}
