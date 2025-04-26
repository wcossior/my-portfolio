import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contacts = () => {
  return (
    <div className='flex flex-col flex-1'>
      <div className='flex-1 flex justify-center my-6'>
        <div className='w-[3px] h-full bg-emerald-400 rounded-sm'></div>
      </div>
      <div className='flex flex-2 flex-col items-center justify-start gap-4'>
        <a className='hover:text-emerald-400 transition-transform hover:scale-110' href="https://wa.me/59169549348" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className='text-[34px]' />
        </a>
        <a className='hover:text-emerald-400 transition-transform hover:scale-110' href="https://www.linkedin.com/in/wilder-cossio" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='text-[30px]' />
        </a>
        <a className='hover:text-emerald-400 transition-transform hover:scale-110' href="mailto:w.cossio.r@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail className='text-[30px]' />
        </a>
      </div>
    </div>
  )
}
