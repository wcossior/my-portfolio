import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
    return (
        <div className='h-64 w-full bg-base-300 px-25 py-6'>
            <div className='h-full flex flex-col justify-between'>
                <div className='flex flex-row items-center'>
                    <div className='flex-1 h-[3px] w-full bg-emerald-400 rounded-sm'></div>
                    <p className='flex-none mx-6 text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed'>Contacts</p>
                    <div className='flex-1 h-[3px] w-full bg-emerald-400 rounded-sm'></div>
                </div>
                <div className='flex gap-8 justify-center'>
                    <a className='hover:text-emerald-400 transition-transform hover:scale-110' href="https://wa.me/69549348" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className='text-[54px]' />
                    </a>
                    <a className='hover:text-emerald-400 transition-transform hover:scale-110' href="https://www.linkedin.com/in/wilder-cossio" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-[50px]' />
                    </a>
                    <a className='hover:text-emerald-400 transition-transform hover:scale-110' href="mailto:w.cossio.r@gmail.com" target="_blank" rel="noopener noreferrer">
                        <SiGmail className='text-[50px]' />
                    </a>
                </div>
                <small className="text-sm">
                    © 2025 Wilder. Todos los derechos reservados.
                </small>
            </div>
        </div>
    )
}
