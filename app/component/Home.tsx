"use client"
import React, { useEffect, useState } from 'react'
import Pic from './images/Untitled design (10) (1).png'
import Pic2 from './images/Untitled design (11) (1).png'
import Pic3 from './images/Untitled_design__12_-removebg-preview-removebg-preview (1)final.png'
import facebool from './images/facebook (2).png'
import instagram from './images/instagram (2).png'
import linkdun from './images/linkdin.png'
import github from './images/image.png'
import Image from 'next/image'
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  function scrollToSection(id:string){
    const section:any = document.getElementById(id)
    section.scrollIntoView({ behavior: 'smooth' })
  }
  // const words = ["Frontend Developer", "React.js Expert", "Next.js Enthusiast"];
  // const [text, setText] = useState("");
  // const [index, setIndex] = useState(0);
  // const [charIndex, setCharIndex] = useState(0);
  // const [deleting, setDeleting] = useState(false);
  // const speed = deleting ? 50 : 100;
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!deleting && charIndex < words[index].length) {
  //       setText((prev) => prev + words[index][charIndex]);
  //       setCharIndex((prev) => prev + 1);
  //     } else if (deleting && charIndex > 0) {
  //       setText((prev) => prev.slice(0, -1));
  //       setCharIndex((prev) => prev - 1);
  //     } else if (!deleting && charIndex === words[index].length) {
  //       setTimeout(() => setDeleting(true), 1000);
  //     } else if (deleting && charIndex === 0) {
  //       setDeleting(false);
  //       setIndex((prev) => (prev + 1) % words.length);
  //     }
  //   }, speed);

  //   return () => clearTimeout(timeout);
  // }, [charIndex, deleting, index]);
  return (
    <>
      <section id='home' className='flex sm:flex-row  pt-10 pb-10 justify-between bg-black  '>
        <div className=' lg:mt-32  sm:mt-16  sm:ml-10 ml-5  md: mt-16 md:ml-20 animate-slideInLeft z-10 w-fit'>
          <div className='text-2xl md:text-3xl  font-sen font-semibold w-fit '>Hello It's me</div>
          <div className='text-6xl md:text-8xl w-fit  font-sen font-semibold'>ABDUL <div className='text-[#77effc]'>WASSAY</div></div>
          <div className='text-2xl md:text-3xl mt-5 w-fit font-sen font-semibold'>And I'm a <span className='text-red-400 border-solid border-r-4 pr-2 border-white'> <Typewriter
          words={["Frontend Developer", "React.js Expert", "Next.js Enthusiast"]}
          loop={true}
          cursor
          cursorStyle=""
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        /></span></div>
          
          <div className='flex mt-6'>
          <a target='_blank' href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-8 m-2 mx-3' src={facebool.src} alt="" /></a>
          <a target='_blank' href="https://www.instagram.com/wassay122/"><img className='h-8 m-2 mx-3' src={instagram.src} alt="" /></a>
          <a target='_blank' href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-8 m-2 mx-3' src={linkdun.src} alt="" /></a>
          <a target='_blank' href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-8 m-2 mx-3' src={github.src} alt="" /></a>
          </div>
          <div className='flex flex-row w-fit'>
            <button  className='bg-[#77effc] py-2 px-6 rounded-md mt-5 font-roboto font-semibold'><a target='_blank' href="https://www.canva.com/design/DAGXZCin1sA/fRCX8gDpUaCc-ladkssLUg/view?utm_content=DAGXZCin1sA&utm_campaign=designshare&utm_medium=link&utm_source=editor">Download CV</a></button>
            <button onClick={()=> scrollToSection('contact')}  className='bg-[#77effc] py-2 px-6 rounded-md mt-5 ml-7 font-roboto font-semibold'>Contact</button>
          </div>
        </div>
        {/* image */}
        <div className='flex flex-col xl:mr-28 lg:mr-8 animate-slideInRight sm:relative absolute right-0'>
        <div ><Image height={900} width={900} className='hidden xl:block h-[600px] w-auto lg:block md:hidden   ' src={Pic} alt="Abdul Wassay Photo" /></div>
        <div ><Image height={900} width={900}  className=' md:h-[500px] sm:h-[400px] xs:hidden hidden items-center sm:block  w-[auto] md:block lg:hidden     ' src={Pic2} alt="Abdul Wassay Photo" /></div>
        <div ><Image height={900} width={900} className="sm:hidden  xs:block items-center h-[400px]   w-[auto]  " src={Pic3} alt="Abdul Wassay Photo" /></div>
        {/* <div className=' bg[url("/imge3.png")] h-[400px] w-[200px] bg-cover bg-left'>q</div> */}
        {/* <div className=' ml-[850px] mt-[660px] w-[618px] absolute inset-0 bg-gradient-to-t from-black from-50%'></div> */}
        </div>
      </section>
    </>
  )
}
