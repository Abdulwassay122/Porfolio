"use client";
import React, { useState } from "react";
import textUtils from "./images/screencapture-text-utils-steel-ten-vercel-app-2024-10-26-09_21_08.png";
import alarmClock from "./images/screencapture-abdulwassay122-github-io-Alarm-Clock-2024-10-26-09_23_03.png";
import resumeBuilder from "./images/screencapture-resume-builder-122598-vercel-app-2024-10-26-09_21_35.png";
import passGenerator from "./images/screencapture-abdulwassay122-github-io-Javascript-Password-Generator-2024-10-26-09_22_32.png";
import assignment06 from "./images/ass-3.png";
import realmeClone from "./images/realme-clone.png";
import Hackathon from "./images/screencapture-hachathon-02-vercel-app-2024-12-10-11_09_221111111.png";
import upArrow from "./images/upArrow.png";
import htmlCSSPortfolio from "./images/html css portfolio.png";
import externallink from "./images/visit22.png";

;

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<boolean>(false);

  return (
    <>
      <section id="portfolio" className=" font-roboto py-14 bg-[#0e1010] flex flex-col items-center">
        <h1 className="xs:text-6xl text-5xl font-sen font-semibold flex justify-center">
          My Work
        </h1>

        <div className="w-[95%] my-[70px] grid row-auto 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center   gap-10">
            {/* tabs */}
            <div className="w-[300px] h-[400px] relative rounded-lg group overflow-hidden">
              <img className="w-full h-full " src={Hackathon.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Ecommerce Website</h4>
                  <p className="text-center">UX/UI Hackathon Ecommerce website using Nextjs and Taiwind CSS</p>
                  <a target="_blank" href="https://hachathon-02.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs */}
            <div className="w-[300px] h-[400px] relative rounded-lg group overflow-hidden">
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
            {/* tabs */}
            <div className="w-[300px] h-[400px] relative rounded-lg group overflow-hidden">
              <img className="w-full h-full " src={assignment06.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Static Design Responsive</h4>
                  <p className="text-center">Convert Figma design using taiwind and nextjs.</p>
                  <a target="_blank" href="https://ass-06-tailwind-design.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs */}
            <div className="w-[300px] h-[400px] relative rounded-lg group overflow-hidden">
              <img className="w-full h-full " src={textUtils.src} alt="" />
              <div className=" w-full h-0   absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">TextUtils</h4>
                  <p className="text-center">TextUtis is text utility tool you can use to modify your text.</p>
                  <a target="_blank" href="https://text-utils-steel-ten.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs */}
            <div className={`w-[300px] h-[400px] relative  rounded-lg group overflow-hidden ${activeSection===true?'block':'hidden'}  `}>
              <img className="w-full h-full " src={resumeBuilder.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden  h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Resume Builder</h4>
                  <p className="text-center">Resume Builder here you can enter your details and create your resume.</p>
                  <a target="_blank" href="https://resume-builder-122598.vercel.app/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs */}
            <div className={`w-[300px] h-[400px] relative  rounded-lg group overflow-hidden ${activeSection===true?'block':'hidden'} `}>
              <img className="w-full h-full " src={passGenerator.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Password Generator</h4>
                  <p className="text-center">Generates normal, strong, weak Password as you need. </p>
                  <a target="_blank" href="https://abdulwassay122.github.io/Javascript-Password-Generator"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
           
            {/* tabs */}
            <div className={`w-[300px] h-[400px] relative  rounded-lg group overflow-hidden ${activeSection===true?'block':'hidden'}`}>
              <img className="w-full h-full " src={alarmClock.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Alarm Clock</h4>
                  <p className="text-center">Alarm Clock you can set timmer.</p>
                  <a target="_blank" href="https://abdulwassay122.github.io/Alarm-Clock/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>
            {/* tabs */}
            <div className={`w-[300px] h-[400px] relative  rounded-lg group overflow-hidden ${activeSection===true?'block':'hidden'}`}>
              <img className="w-full h-full " src={htmlCSSPortfolio.src} alt="" />
              <div className=" w-full h-0  absolute bottom-0 flex justify-center group-hover:h-[100%] transition-height duration-500  rounded-lg bg-gradient-to-t from-30  from-[#77effc] bg-black bg-opacity-50   text-opacity-100 ">
                <div className="w-[80%] inset-0 overflow-hidden h-full flex flex-col items-center justify-center gap-3">
                  <h4 className="font-bold text-xl">Portfolio</h4>
                  <p className="text-center">Multipage Potfolio using custom CSS.</p>
                  <a target="_blank" href="https://abdulwassay122.github.io/Alarm-Clock/"><img className="h-5 mt-[3px] ml-2" src={externallink.src} alt="" /></a>
                </div>
              </div>
            </div>

        </div>
            <button onClick={()=>setActiveSection(true)}  className={`bg-[#77effc] py-2 px-6 rounded-md mt-5 sm:ml-7 ml-0 font-roboto font-semibold flex ${activeSection===false?'block':'hidden'}`}>View All<img className="h-3 mt-[5px] ml-[5px]" src={upArrow.src} alt="" /></button>
            <button onClick={()=>setActiveSection(false)}  className={`bg-[#77effc] py-2 px-6 rounded-md mt-5 sm:ml-7 ml-0 font-roboto flex  font-semibold ${activeSection===true?'block':'hidden'}`}>Hide<img className="rotate-180 h-3 mt-[6px] ml-[5px]" src={upArrow.src} alt="" /></button>

      </section>
    </>
  );
}
