import React from 'react'
import facebool from './images/facebook (2).png'
import instagram from './images/instagram (2).png'
import linkdun from './images/linkdin.png'
import github from './images/image.png'

export default function Footer() {
  return (
    <>
      <footer className='flex flex-row bg-[#0e1010] '>
      <div className='flex flex-row  h-12 w-full items-center mx-10 justify-between'>
        <div className='flex items-center mt-1.5 text-xs sm:text-sm '>
            Copyright © 2024 aw122598@gmail.com —@Abdul Wassay
        </div>
        
      
        
        <div className='flex flex-row  '>
            <a href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-6 mx-2' src={facebool.src} alt="" /></a>
            <a href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-6 mx-2' src={linkdun.src} alt="" /></a>
            <a href="https://www.instagram.com/wassay122/"><img className='h-6 mx-2' src={instagram.src} alt="" /></a>
            <a href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-6 mx-2' src={github.src} alt="" /></a>
        </div>
      </div>
      </footer>
    </>
  )
}
