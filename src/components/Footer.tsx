import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='h-[24rem] md:h-[20rem] w-full bg-base-300 px-14 md:px-25 py-6'>
            <div className='h-full flex flex-col justify-between'>
                <div className='flex flex-row items-center'>
                    <div className='flex-1 h-[1px] w-full bg-emerald-400 rounded-sm'></div>
                    <p className='flex-none mx-6 text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed'>Contacts</p>
                    <div className='flex-1 h-[1px] w-full bg-emerald-400 rounded-sm'></div>
                </div>
                <div className='grid md:grid-cols-2 gap-4 my-4'>
                    <a className='flex items-center hover:text-emerald-400 transition-transform hover:scale-102' href="https://wa.me/59169549348" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className='text-[24px]' /> <span className="ml-4">+59169549348</span>
                    </a>
                    <a className='flex w-70 md:w-auto items-center hover:text-emerald-400 transition-transform hover:scale-102' href="https://www.linkedin.com/in/wilder-cossio" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='text-[24px]' /><span className="ml-4 truncate lg:overflow-visible">https://www.linkedin.com/in/wilder-cossio</span>
                    </a>
                    <a className='flex items-center hover:text-emerald-400 transition-transform hover:scale-102' href="mailto:w.cossio.r@gmail.com" target="_blank" rel="noopener noreferrer">
                        <SiGmail className='text-[20px]' /><span className="ml-4">w.cossio.r@gmail.com</span>
                    </a>
                    <a className='flex items-center hover:text-emerald-400 transition-transform hover:scale-102' href="https://github.com/wcossior" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='text-[20px]' /><span className="ml-4">https://github.com/wcossior</span>
                    </a>
                    <a className='flex items-center hover:text-emerald-400 transition-transform hover:scale-102' href='#' onClick={(e) => e.preventDefault()}>
                        <FaMapMarkerAlt className='text-[20px]' /> <span className="ml-4">Cochabamba - Bolivia</span>
                    </a>
                </div>
                <small className="text-sm opacity-50 text-center">
                    © 2025 Wilder. Todos los derechos reservados.
                </small>
            </div>
        </div>
    )
}
