"use client"
import React,{useCallback} from 'react'
import pic from './images/hamburger.png'
import Link from 'next/link';

export default function Navbar() {
  const scrollToSection = useCallback((id:any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);  
  const toggleMenu =()=>{
    let menu = document.getElementById('toggleMenu')
    menu?.classList.toggle('hidden')
  }
  return (
    <>
    <header  className="h-[85px] flex py-5 justify-between md:flex-row flex-col sticky top-0 z-20  bg-black ">
      <div className='flex justify-between'>
      <div className="text-[30px] font-semibold font-sen pl-10 cursor-pointer ">
      <span className="text-[#77effc] cursor-pointer ">ABDUL</span> WASSAY
      </div>
      <button className="font-roboto  md:flex-row mt-2.5  text-[20px] block items-center  md:hidden  lg:mr-20 md:mr-6 flex-col z-50 ">
          <div  onClick={()=>toggleMenu()} className="mx-3 cursor-pointer"><img className='h-5' src={pic.src} alt="" /></div>
        </button>
        </div>
      <nav>
       
        <ul id='toggleMenu' className="font-roboto  md:flex-row mt-2.5  text-[20px] hidden bg-black   md:flex  lg:mr-20 md:mr-6 flex-col  ">
          <div><li  onClick={()=> scrollToSection('home')} className="sm:mx-3 mx-10 cursor-pointer  hover:widthExpand100  hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid hover:border-[#77effc] hover:border-b-[3px]'>Home</div> </li></div>
          <div><li  onClick={()=> scrollToSection('about')} className="sm:mx-3 mx-10 cursor-pointer  hover:widthExpand100  hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid hover:border-[#77effc] hover:border-b-[3px]'>About</div> </li></div>
          <div><li  onClick={()=> scrollToSection('skills')} className="sm:mx-3 mx-10 cursor-pointer  hover:widthExpand100  hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid hover:border-[#77effc] hover:border-b-[3px]'>Skill</div> </li></div>
          <div><li  onClick={()=> scrollToSection('portfolio')} className="sm:mx-3 mx-10 cursor-pointer  hover:widthExpand100  hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid hover:border-[#77effc] hover:border-b-[3px]'>Portfolio</div> </li></div>
          <div><li  onClick={()=> scrollToSection('contact')} className="sm:mx-3 mx-10 cursor-pointer  hover:widthExpand100  hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid hover:border-[#77effc] hover:border-b-[3px]'>Contact</div> </li></div>
        </ul>
      </nav>
    </header>
    </>
  )
}
