"use client"
import React from 'react'
import { useState } from 'react';
import pic from './images/laptop-8236497_1280.jpg'


type Section = 'skills' | 'education' | 'experience';

export default function About() {
  const [activeSection, setActiveSection] = useState<Section>('skills');

  return (
    <>
      <section id='about' className='flex pt-24 lg:pl-36  sm:pl-16 pl-8 pb-24 bg-[#0e1010]'>
        {/* image */}
        <div>
          <img className='lg:h-[600px] md:h-[450px] rounded-md md:block hidden' src={pic.src} alt="" />
        </div>
        {/* About */}
        <div className='sm:w-[700px] w-full mt-5 lg:ml-28 ml-  md:ml-10 mr-5'>
          {/* head */}
          <div className='sm:w-[450px]   '>
        <h1 className='text-6xl font-semibold font-sen mb-6 '>About Me</h1>
        <p className='text-xl font-roboto '>Knows ReactJS, NextJS, HTML, CSS, Javascript, Typescript and Tailwind CSS and currently learning AI at Governer Initiative of genAI, Web3 and Mataverse.</p>
        </div>
        {/* skill exp edu */}
        <div>
          <ul id="nav-links" className='font-roboto flex text-xl'>
            <li><button onClick={()=>setActiveSection('skills')} className='mt-10 mr-4 hover:text-[#77effc]' ><span id="skills"  className={` ${activeSection === 'skills' ? 'border-b-[3px] border-[#77effc] border-solid pb-1' : ''}`}>Ski</span>lls </button></li>
            <li><button onClick={()=>setActiveSection('education')} className='mt-10 mx-4 hover:text-[#77effc]' ><span id="education" className={` ${activeSection === 'education' ? 'border-b-[3px] border-[#77effc] border-solid pb-1' : ''}`}>Edu</span>caton </button></li>
            <li><button onClick={()=>setActiveSection('experience')} className='mt-10 mx-4 hover:text-[#77effc]' ><span id="experience" className={` ${activeSection === 'experience' ? 'border-b-[3px] border-[#77effc] border-solid pb-1' : ''}`}>Exp</span>erience </button></li>
          </ul>
        </div>

        <div className={`mt-12 font-roboto ${activeSection==='skills'?'block':'hidden'} `}>
          {/* <p className='text-[20px] my-1 '>Frontend Designing and Development</p>
        <p className='text-red-400 text-[16px] my-1 mb-2'>Level - Intermediate</p>
          <p className='text-[20px] my-1 '>UX / UI  Designing</p>
        <p className='text-red-400 text-[16px] my-1 mb-2'>Level - Intermediate</p> */}
          <p className='text-[20px] my-1 '>React JS</p>
        <p className='text-red-400 text-[16px] my-1 mb-2'>Level - Intermediate</p>
          <p className='text-[20px] my-1 '>NEXT JS</p>
        <p className='text-red-400 text-[16px] my-1 mb-2'>Level - Intermediate</p>
        </div>

        <div className={`mt-12 font-roboto ${activeSection==='education'?'block':'hidden'} `}>
          <p className='text-red-400 text-[16px] my-1'>2020 to 2022</p>
          <p className='text-[20px] my-1'>Matric - Science</p>
          <p className='text-red-400 text-[16px] my-1 mt-5'>2022 to 2024</p>
          <p className='text-[20px] my-1'>FSC - Pre Engineering</p>
        </div>

        <div className={`mt-12 font-roboto ${activeSection==='experience'?'block':'hidden'} `}>
          <p className='text-[20px] my-1'>Fresher</p>
          <p className='text-red-400 text-[16px] my-1'>2023 to 2024</p> 
          <p className='text-[20px] my-1'>Self Learing Experience</p>
        </div>

        </div>
      </section>
    </>
  )
}
