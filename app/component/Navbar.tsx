"use client"
import React,{useCallback} from 'react'
import pic from './images/hamburger.png'

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
    <header  className="h-[85px] flex py-5 justify-between md:flex-row flex-col  bg-black sticky top-0 z-10">
      <div className='flex justify-between'>
      <div className="text-[30px] font-semibold font-sen pl-10 cursor-pointer ">
      <span className="text-[#77effc] cursor-pointer ">ABDUL</span> WASSAY
      </div>
      <button className="font-roboto  md:flex-row mt-2.5  text-[20px] block items-center  md:hidden  lg:mr-20 md:mr-6 flex-col  ">
          <div  onClick={()=>toggleMenu()} className="mx-3 cursor-pointer"><img className='h-5' src={pic.src} alt="" /></div>
        </button>
        </div>
      <nav>
       
        <ul id='toggleMenu' className="font-roboto  md:flex-row mt-2.5  text-[20px] hidden bg-black   md:flex  lg:mr-20 md:mr-6 flex-col  ">
          <li  onClick={()=> scrollToSection('home')} className="sm:mx-3 mx-10 cursor-pointer hover:border-solid hover:border-[#77effc] w-fit  hover:border-b-[3px] hover:text-[#77effc] transition-all duration-75   "> Home</li>
          <li  onClick={()=> scrollToSection('about')} className="sm:mx-3 mx-10 cursor-pointer hover:border-solid hover:border-[#77effc] w-fit  hover:border-b-[3px] hover:text-[#77effc] transition-all duration-75   "> About</li>
          <li  onClick={()=> scrollToSection('skills')} className="sm:mx-3 mx-10 cursor-pointer hover:border-solid hover:border-[#77effc]  w-fit hover:border-b-[3px] hover:text-[#77effc] transition-all duration-75   "> Skills</li>
          <li  onClick={()=> scrollToSection('portfolio')} className="sm:mx-3 mx-10 cursor-pointer hover:border-solid hover:border-[#77effc] w-fit  hover:border-b-[3px] hover:text-[#77effc] transition-all duration-75   "> Portfolio</li>
          <li  onClick={()=> scrollToSection('contact')} className="sm:mx-3 mx-10 cursor-pointer hover:border-solid hover:border-[#77effc]  w-fit hover:border-b-[3px] hover:text-[#77effc] transition-all duration-75   "> Contact</li>
        </ul>
      </nav>
    </header>
    </>
  )
}
