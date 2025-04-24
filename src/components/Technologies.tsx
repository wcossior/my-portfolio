import React from 'react'
import { TechnologyItem } from './TechnologyItem'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

export const Technologies = () => {
    return (
        <div className='mx-25 text-center mb-8'>
            <div className='flex flex-row items-center mb-12'>
                <p className='flex-1 text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed'>Technologies</p>
                <div className='flex-2 h-[3px] w-full bg-emerald-400 rounded-sm'></div>
            </div>
            <div className='w-[60%] grid grid-cols-3 gap-6 m-auto'>
                <TechnologyItem icon={<FaHtml5 className="text-[100px] text-orange-600" />} title="HTML5" />
                <TechnologyItem icon={<FaCss3Alt className='text-[100px] text-blue-600' />} title="CSS3" />
                <TechnologyItem icon={<FaNodeJs className='text-[100px] text-yellow-400' />} title="JAVASCRIPT" />
                <TechnologyItem icon={<RiTailwindCssFill className='text-[100px] text-sky-400' />} title="TAILWIND" />
                <TechnologyItem icon={<SiDaisyui className='text-[100px] text-pink-400' />} title="DAISYUI" />
                <TechnologyItem icon={<FaReact className='text-[100px] text-sky-400' />} title="REACT" />
                <TechnologyItem icon={<IoLogoFirebase className='text-[100px] text-yellow-400' />} title="FIREBASE" />
            </div>
        </div>
    )
}
