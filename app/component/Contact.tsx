import React from 'react'
import email from './images/Email (2).png'
import phone from './images/phonee.png'
import facebool from './images/facebook (2).png'
import instagram from './images/instagram (2).png'
import linkdun from './images/linkdin.png'
import loction from './images/locationn.png'
import github from './images/image.png'    

export default function Contact() {
  return (
    <>
      <section id='contact' className='my-20'>
        <div className="flex justify-between md:flex-row  flex-col">
        <div className='md:w-[40%] sm:w-[80%]   lg:ml-32 sm:ml-16 ml-10    '>
            <div className='mb-9'>
                <h1 className=' text-6xl font-sen font-semibold'>Contact Me</h1>
            </div>
        <div className='flex text-xl font-roboto items-center '><img className='h-7 m-2 my-4 mr-7' src={email.src} alt="" />aw122598@gmail.com</div>
        <div className='flex text-xl font-roboto items-center '><img className='h-7 m-2 my-4 mr-7' src={phone.src} alt="" />+92 319 1476707</div>
        <div className='flex text-xl font-roboto items-center '><img className='h-7 m-2 my-4 mr-7' src={loction.src} alt="" />123 Sector ABC XYZ Town Karachi Pakistan </div>
        <div className='flex mt-5'>
          <a target='_blank' href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-8 m-2 ml-2 mx-3' src={facebool.src} alt="" /></a>
          <a target='_blank' href="https://www.instagram.com/wassay122/"><img className='h-8 m-2 mx-3' src={instagram.src} alt="" /></a>
          <a target='_blank' href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-8 m-2 mx-3' src={linkdun.src} alt="" /></a>
          <a target='_blank' href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-8 m-2 mx-3' src={github.src} alt="" /></a>
          </div>
          <div>
            <button  className='bg-[#77effc] py-2 px-6 mx-2  rounded-md mt-10 font-roboto font-semibold'>Download CV</button>
          </div>
        </div>
        <div className='md:w-[50%] sm:w-[80%]   md:ml-0 sm:ml-16 ml-10 font-roboto text-xl md:mr-0 sm:mr-10 mr-5'>
            <div className='md:w-[80%] my-5  w-[100%] '>
                 <input placeholder='Your Name' className=' w-[100%] bg-[#202020] h-10 rounded-sm px-4' type="text" />
            </div>
            <div className='md:w-[80%]  my-5 w-[100%]  '>
                <input placeholder='Your Email' className=' w-[100%] bg-[#202020]  h-10 rounded-sm px-4' type="email" />
            </div>
            <div className='md:w-[80%]  my-5 w-[100%]  '>
                <textarea placeholder='Your Message' className=' w-[100%] bg-[#202020] h-[250px] py-2 px-4 rounded-sm text-left'  />
            </div>
            <div>
            <button  className='bg-[#77effc] py-2 px-6   rounded-md mt-9 font-roboto font-semibold'>Submit</button>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
