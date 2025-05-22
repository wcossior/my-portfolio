import React from 'react'

export const AboutDescription = () => {
    return (
        <div className='flex-4 text-end my-6 pb-4'>
            <div className='animate__animated animate__fadeInLeft flex flex-row items-center'>
                <div className='flex-1 h-[3px] w-full bg-emerald-400 rounded-sm'></div>
                <p className='bg-primary flex-none ml-6 font-bold text-6xl mb-3 bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-700 bg-clip-text text-transparent'>Wilder Cossio</p>
            </div>
            <p className='animate__animated animate__fadeInLeft font-normal text-xl'>Frontend Developer</p>
            <div className='flex items-center animate__animated animate__fadeInLeft' style={{ animationDelay: '0.9s' }}>
                <span className='flex-none font-light text-emerald-400 text-[20rem]'>{'['}</span>
                <p className='flex-1 text-gray-400 whitespace-pre-wrap leading-7'>
                    👋 Hello! I’m a Frontend developer passionate about creating clean, responsive, and user-centered interfaces.
                    
                    I’ve worked on several projects using React, TypeScript, TailwindCSS, and DaisyUI, including a travel website, a movie site, and a task management app. I also built a facial recognition system for personnel tracking, designed to be fully responsive.

                    As part of my graduation project, I developed a cross-platform mobile app for managing tennis tournaments using Flutter, Firebase, and SCRUM. I also designed apps for the Wilstermann Club and a livestock social network.

                    I value clean code, accessibility, and attention to detail. I'm always improving my skills, currently exploring tools like Zustand and refining my UI design with Tailwind and DaisyUI.

                    I enjoy collaborating in teams, receiving feedback, and continuously growing as a developer.
                </p>

            </div>
        </div>
    )
}
