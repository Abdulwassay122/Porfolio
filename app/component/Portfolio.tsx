"use client"
import React,{useState} from 'react'
import textUtils from './images/screencapture-text-utils-steel-ten-vercel-app-2024-10-26-09_21_08.png'
import alarmClock from './images/screencapture-abdulwassay122-github-io-Alarm-Clock-2024-10-26-09_23_03.png'
import resumeBuilder from './images/screencapture-resume-builder-122598-vercel-app-2024-10-26-09_21_35.png'
import passGenerator from './images/screencapture-abdulwassay122-github-io-Javascript-Password-Generator-2024-10-26-09_22_32.png'
import assignment07 from './images/screencapture-localhost-3000-2024-10-19-14_57_48.png'
import externallink from './images/externalLink.png'


type Section = 'all' | 'nextjs' | 'reactjs';

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState<Section>('all');

  return (
    <>
      <section id='portfolio' className=' py-14 bg-[#0e1010]'>
        <h1 className='text-6xl font-sen font-semibold flex justify-center'>My Work</h1>
        {/* // nav links */}
        <div className=''>
          <ul id="nav-links" className='font-roboto flex text-xl justify-center'>
            {/* nav link */}
            <li><button onClick={()=>setActiveSection('all')} className='mt-10 mr-4 hover:text-[#77effc]' ><span id="All"  className={` ${activeSection === 'all' ? 'border-b-[3px] border-[#77effc] border-solid pb-1' : ''}`}>Al</span>l </button></li>
            {/* nav link */}
            <li><button onClick={()=>setActiveSection('nextjs')} className='mt-10 mx-4 hover:text-[#77effc]' ><span id="Next JS" className={` ${activeSection === 'nextjs' ? 'border-b-[3px] border-[#77effc] border-solid pb-1' : ''}`}>Next</span>JS </button></li>
            {/* nav link */}
            <li><button onClick={()=>setActiveSection('reactjs')} className='mt-10 mx-4 hover:text-[#77effc]' ><span id="React JS" className={` ${activeSection === 'reactjs' ? 'border-b-[3px] border-[#77effc] border-solid pb-1' : ''}`}>React</span>JS </button></li>
          </ul>
        </div>
        {/* // work tabs ***all*** */}
        <div className={`flex justify-center ${activeSection==='all'?'block':'hidden'}`}>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-evenly xl:w-[60%] lg:w-[80%] sm:w-[95%] '>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1`}><a target='_blank' href="https://text-utils-steel-ten.vercel.app/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50 ' src={textUtils.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://resume-builder-122598.vercel.app/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={resumeBuilder.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://abdulwassay122.github.io/Alarm-Clock/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={alarmClock.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://abdulwassay122.github.io/Javascript-Password-Generator/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={passGenerator.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://github.com/Abdulwassay122/Aggignment-03.git"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={assignment07.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
        </div>
        </div>

        {/* // work tabs ***nextjs*** */}
        <div className={`flex justify-center ${activeSection==='nextjs'?'block':'hidden'}`}>
        <div className='grid md:grid-cols-3 grid-cols-2 xl:w-[60%] lg:w-[80%] sm:w-[95%] '>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://resume-builder-122598.vercel.app/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={resumeBuilder.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://text-utils-steel-ten.vercel.app/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50 ' src={textUtils.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://abdulwassay122.github.io/Alarm-Clock/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={alarmClock.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://github.com/Abdulwassay122/Aggignment-03.git"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={assignment07.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://abdulwassay122.github.io/Javascript-Password-Generator/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={passGenerator.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
        </div>
        </div>

        {/* // work tabs ***reactjs*** */}
        <div className={`flex justify-center ${activeSection==='reactjs'?'block':'hidden'}`}>
        <div className='grid md:grid-cols-3 grid-cols-2 xl:w-[60%] lg:w-[80%] sm:w-[95%]'>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://abdulwassay122.github.io/Javascript-Password-Generator/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={passGenerator.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://resume-builder-122598.vercel.app/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={resumeBuilder.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://abdulwassay122.github.io/Alarm-Clock/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={alarmClock.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://github.com/Abdulwassay122/Aggignment-03.git"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50' src={assignment07.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
          {/* worktab */}
          <div className={`relative my-5 mt-10 sm:w-60 sm:h-48 group h-36 w-48 mx-1 `}><a target='_blank' href="https://text-utils-steel-ten.vercel.app/"><img className='h-full w-full rounded-2xl transition-opacity duration-300 group-hover:opacity-50 ' src={textUtils.src} alt="" /><span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto'>Visit <img className='h-4 ml-1' src={externallink.src} alt="" /></span></a></div>
        </div>
        </div>



      </section>
    </>
  )
}
