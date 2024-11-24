"use client"
import React,{useCallback, useEffect, useState} from 'react'
import pic from './images/hamburger.png'
import cross from './images/cross-svgrepo-com.svg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const scrollToSection = useCallback((id:any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);  
  const toggleMenu =()=>{
    setMenuOpen(!menuOpen)
  }
  
  return (
    <>
    <header  className="h-[85px] flex py-5 justify-between md:flex-row flex-col sticky top-0 z-20  bg-black ">
      <div className='flex justify-between'>
      <div className="text-[30px] font-semibold font-sen xs:pl-10 pl-5 cursor-pointer ">
      <span className="text-[#77effc] cursor-pointer ">ABDUL</span> WASSAY
      </div>
      <button className="font-roboto  md:flex-row mt-[2px]  text-[20px] block items-center  md:hidden  lg:mr-20 md:mr-6 flex-col z-50 ">
          <div id='hamburger' onClick={()=>toggleMenu()} className={`mx-5 cursor-pointer ${menuOpen ? 'hidden':''}`}><img className='h-5' src={pic.src} alt="" /></div>
          <div id='cross' onClick={()=>toggleMenu()} className={`mx-5 cursor-pointer ${menuOpen ? '':'hidden'}`}><img className='h-5' src={cross.src} alt="" /></div>
        </button>
        </div>
      <nav>
       
        <ul id='toggleMenu' className={`font-roboto md:flex-row mt-2.5 overflow-hidden text-[20px] md:bg-black md:h-full bg-[#77effc]   md:flex  lg:mr-20 md:mr-6 flex-col md:w-full w-[150px] h-screen md:relative absolute right-0 z-30 md:animate-none  ${menuOpen ? 'animate-slideInNav':'animate-slideOutNav'}`}>
          <div><li  onClick={()=> scrollToSection('home')} className="md:mx-3 md:my-0 my-3  mx-5 cursor-pointer  hover:widthExpand100  md:hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid md:hover:border-[#77effc] hover:border-[#ffffff] hover:border-b-[3px]'>Home</div> </li></div>
          <div><li  onClick={()=> scrollToSection('about')} className="md:mx-3 md:my-0 my-3  mx-5 cursor-pointer  hover:widthExpand100  md:hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid md:hover:border-[#77effc] hover:border-[#ffffff] hover:border-b-[3px]'>About</div> </li></div>
          <div><li  onClick={()=> scrollToSection('skills')} className="md:mx-3 md:my-0 my-3  mx-5 cursor-pointer  hover:widthExpand100  md:hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid md:hover:border-[#77effc] hover:border-[#ffffff] hover:border-b-[3px]'>Skill</div> </li></div>
          <div><li  onClick={()=> scrollToSection('portfolio')} className="md:mx-3 md:my-0 my-3  mx-5 cursor-pointer  hover:widthExpand100  md:hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid md:hover:border-[#77effc] hover:border-[#ffffff] hover:border-b-[3px]'>Portfolio</div> </li></div>
          <div><li  onClick={()=> scrollToSection('contact')} className="md:mx-3 md:my-0 my-3  mx-5 cursor-pointer  hover:widthExpand100  md:hover:text-[#77effc] w-fit"><div className='hover:animate-widthExpand100 hover:border-solid md:hover:border-[#77effc] hover:border-[#ffffff] hover:border-b-[3px]'>Contact</div> </li></div>
        </ul>
      </nav>
    </header>
    </>
  )
}
