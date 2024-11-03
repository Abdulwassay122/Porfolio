import React from 'react'
import Pic from './images/Untitled design (7)12.png'
import Pic2 from './images/pic-responsive.png'
import facebool from './images/facebook (2).png'
import instagram from './images/instagram (2).png'
import linkdun from './images/linkdin.png'
import github from './images/image.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section id='home' className='flex sm:flex-row  mt-10 mb-10 justify-between '>
        <div className=' lg:mt-32  sm:mt-16  sm:ml-10 ml-5  md: mt-16 md:ml-20  '>
          <div className='text-2xl md:text-3xl  font-sen font-semibold  '>Hello It's me</div>
          <div className='text-6xl md:text-8xl  font-sen font-semibold'>ABDUL <div className='text-[#77effc]'>WASSAY</div></div>
          <div className='text-2xl md:text-3xl mt-5 font-sen font-semibold'>And I'm a <span className='text-red-400 border-solid border-r-4 pr-2 border-white'>Frontend Developer</span></div>
          
          <div className='flex mt-6'>
          <a target='_blank' href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-8 m-2 mx-3' src={facebool.src} alt="" /></a>
          <a target='_blank' href="https://www.instagram.com/wassay122/"><img className='h-8 m-2 mx-3' src={instagram.src} alt="" /></a>
          <a target='_blank' href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-8 m-2 mx-3' src={linkdun.src} alt="" /></a>
          <a target='_blank' href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-8 m-2 mx-3' src={github.src} alt="" /></a>
          </div>
          <div className='flex flex-col sm:flex-row '>
            <button  className='bg-[#77effc] py-2 px-6 rounded-md mt-5 font-roboto font-semibold'>Download CV</button>
            <button  className='bg-[#77effc] py-2 px-6 rounded-md mt-5 sm:ml-7 ml-0 font-roboto font-semibold'>Contact</button>
          </div>
        </div>
        {/* image */}
        <div className='flex flex-col xl:mr-28 lg:mr-8'>
        <div ><Image className='hidden xl:block h-[600px] w-[572px] lg:block md:hidden  ' src={Pic} alt="" /></div>
        <div ><Image className=' md:h-[500px] sm:h-[400px] xs:h-[400px] h-[200px] items-center   w-[auto] md:block lg:hidden block   ' src={Pic2} alt="" /></div>
        <div className=' ml-[850px] mt-[660px] w-[618px] absolute inset-0 bg-gradient-to-t from-black from-50%'></div>
        </div>
      </section>
    </>
  )
}
