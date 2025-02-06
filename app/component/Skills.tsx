import React from 'react'
import nextJs from './images/next-js-seeklogo(1).svg'
import reactJs from './images/react-seeklogo.svg'
import typeScript from './images/typescript-seeklogo.svg'
import javaScript from './images/javascript-seeklogo.svg'
import html from './images/html5-without-wordmark-color-seeklogo.svg'
import css from './images/css-3-seeklogo.svg'
import tailwind from './images/tailwind-css-seeklogo.svg'
import communication from './images/network-svgrepo-com.svg'
import teamwork from './images/team-svgrepo-com.svg'
import research from './images/research-left-svgrepo-com.svg'
import creativity from './images/idea-and-creativity-symbol-of-a-lightbulb-svgrepo-com.svg'
import comunicationProgress from './images/comunication-prgess.svg'
import researchProgress from './images/research-progress.svg'
import creativityhProgress from './images/creativity-progress.svg'
import teamworkProgress from './images/teamwork-progress.svg'

export default function Skills() {
  return (
    <>
      <section id='skills' className=' py-10 bg-black '>
        <h1 className='sm:text-6xl text-5xl font-sen font font-semibold flex justify-center '>My Skills</h1>
        <div className='flex md:flex-row flex-col'>
        <div className='md:w-[50%] w-[100%] lg:px-20 md:px-10 sm:px-20 xs:px-14 px-8' >
            <h2 className='sm:text-4xl text-2xl font-sen font-bold flex justify-center mt-10 '>Technical Skills</h2>

            <div className='flex  justify-center mt-10'>
              <div className='flex font-roboto justify-between w-full items-center'>
                <p className='mx-4 my-2 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-10' src={nextJs.src} alt="" />Next JS</p>
                <p className='mx-2 '>85%</p>
              </div>
            </div>
              <div className=' justify-center flex mb-10' >
                <span className='w-full h-5  bg-gray-400 rounded-full'>
                  <div className='bg-[#77effc]  onViewAnimation animate-widthExpand85  h-5 rounded-full'></div>
                </span>
              </div>
                {/*1 ------------------------------------------------ */}
            <div className='flex  justify-center mt-10'>
              <div className='flex font-roboto justify-between w-full items-center'>
                <p className='mx-2 my-1 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-10' src={reactJs.src} alt="" />React JS</p>
                <p className='mx-2 my-1'>90%</p>
              </div>
            </div>
              <div className=' justify-center flex mb-10' >
                <span className='w-full h-5  bg-gray-400 rounded-full'>
                  <div className='bg-[#77effc] onViewAnimation animate-widthExpand90  h-5 rounded-full'></div>
                </span>
              </div>
                {/*2 ------------------------------------------------ */}
            <div className='flex  justify-center mt-10'>
              <div className='flex font-roboto justify-between w-full items-center'>
              <p className='mx-2 my-2 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-10' src={typeScript.src} alt="" />Typescript</p>
                <p className='mx-2 my-2'>75%</p>
              </div>
            </div>
              <div className=' justify-center flex mb-10' >
                <span className='w-full h-5  bg-gray-400 rounded-full'>
                  <div className='bg-[#77effc] onViewAnimation animate-widthExpand75  h-5 rounded-full'></div>
                </span>
              </div>
                {/*3 ------------------------------------------------ */}
            <div className='flex  justify-center mt-10'>
              <div className='flex font-roboto justify-between w-full items-center'>
                <p className='mx-2  my-2 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-10' src={javaScript.src} alt="" />Javascript</p>
                <p className='mx-2 my-1'>85%</p>
              </div>
            </div>
              <div className=' justify-center flex mb-10' >
                <span className='w-full h-5  bg-gray-400 rounded-full'>
                  <div className='bg-[#77effc] onViewAnimation animate-widthExpand85  h-5 rounded-full'></div>
                </span>
              </div>
                {/*4 ------------------------------------------------ */}
            <div className='flex  justify-center mt-10'>
              <div className='flex font-roboto justify-between w-full items-center'>
                <p className='mx-2  my-2 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-10' src={html.src} alt="" />HTML</p>
                <p className='mx-2 my-1'>75%</p>
              </div>
            </div>
              <div className=' justify-center flex mb-10' >
                <span className='w-full h-5  bg-gray-400 rounded-full'>
                  <div className='bg-[#77effc] onViewAnimation animate-widthExpand75  h-5 rounded-full'></div>
                </span>
              </div>
                {/*5 ------------------------------------------------ */}
            <div className='flex  justify-center mt-10'>
              <div className='flex font-roboto justify-between w-full items-center'>
                <p className='mx-2  my-2 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-10' src={css.src} alt="" />CSS</p>
                <p className='mx-2 my-1'>70%</p>
              </div>
            </div>
              <div className=' justify-center flex mb-10' >
                <span className='w-full h-5  bg-gray-400 rounded-full'>
                  <div className='bg-[#77effc] onViewAnimation animate-widthExpand70  h-5 rounded-full'></div>
                </span>
              </div>
                {/*6 ------------------------------------------------ */}
            <div className='flex  justify-center mt-10'>
              <div className='flex font-roboto justify-between w-full items-center'>
                <p className='mx-2  my-2 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-6' src={tailwind.src} alt="" />Tailwind CSS</p>
                <p className='mx-2 my-1'>60%</p>
              </div>
            </div>
              <div className=' justify-center flex mb-10' >
                <span className='w-full h-5  bg-gray-400 rounded-full'>
                  <div className='bg-[#77effc] onViewAnimation animate-widthExpand60  h-5 rounded-full'></div>
                </span>
              </div>
                {/*7 ------------------------------------------------ */}
        </div> 

        <div className='md:w-[50%] w-[100%] '>
            <h2 className='sm:text-4xl text-2xl  font-sen font-bold flex justify-center mt-10'>Professional Skills</h2>

            <div className='grid grid-cols-2 justify-items-center mt-8'>
              
            <div className='flex flex-col justify-center mt-10 xs:w-[180px] w-[150px] items-center'>
              <img src={comunicationProgress.src} alt="" />
              <p className='mx-2 my-1 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-8' src={communication.src} alt="" /> Comunication</p>
              </div>
            <div className='flex flex-col justify-center mt-10 xs:w-[180px] w-[150px] items-center'>
              <img src={researchProgress.src} alt="" />
              <p className='mx-2 my-1 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-8' src={research.src} alt="" /> Research</p>
              </div>
            <div className='flex flex-col justify-center mt-10 xs:w-[180px] w-[150px] items-center'>
              <img src={creativityhProgress.src} alt="" />
              <p className='mx-2 my-1 flex font-kanit font-bold text-xl items-center gap-2'><img className='h-8' src={creativity.src} alt="" /> Creativity</p>
              </div>
            <div className='flex flex-col justify-center mt-10 xs:w-[180px] w-[150px] items-center'>
              <img src={teamworkProgress.src} alt="" />
              <p className='mx-2 my-1 flex font-kanit font-bold text-xl items-center gap-2 xs:tracking-normal tracking-tighter'><img className='h-8' src={teamwork.src} alt="" /> Team Work</p>
              </div>

              </div>

              
        </div>
    </div>
      </section>
    </>
  )
}
