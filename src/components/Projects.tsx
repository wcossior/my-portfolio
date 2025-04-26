import React from 'react'
import { ProjectItem } from './ProjectItem'
import MiniTwitterImg from '../assets/img/MiniTwitter.png';
import JourneyImg from '../assets/img/Journey.png';
import MoviesImg from '../assets/img/Movies.png';
import TimeTrackerImg from '../assets/img/TimeTracker.png';
import TodosImg from '../assets/img/Todos.png';

export const Projects = () => {

    return (
        <div className='mx-25 text-center pb-18'>
            <div className='flex flex-row items-center mb-12'>
                <div className='flex-2 h-[3px] w-full bg-emerald-400 rounded-sm'></div>
                <p className='flex-none ml-6 text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed'>Projects</p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <ProjectItem title='Mini Twitter' shortDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta unde consectetur quisquam deleniti quam perspiciatis doloribus. Et, aliquid asperiores!' projectLink='https://mini-social-network-olive.vercel.app/' img={MiniTwitterImg}></ProjectItem>
                <ProjectItem title='Movies Page' shortDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta unde consectetur quisquam deleniti quam perspiciatis doloribus. Et, aliquid asperiores!' projectLink='https://wcossior.github.io/10.MoviePage/' img={MoviesImg}></ProjectItem>
                <ProjectItem title='Time Tracker' shortDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta unde consectetur quisquam deleniti quam perspiciatis doloribus. Et, aliquid asperiores!' projectLink='https://timetrack-sand.vercel.app/' img={TimeTrackerImg}>
                </ProjectItem>
                <ProjectItem title='Journey Page' shortDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta unde consectetur quisquam deleniti quam perspiciatis doloribus. Et, aliquid asperiores!' projectLink='https://journey-omega.vercel.app/' img={JourneyImg}></ProjectItem>
                <ProjectItem title='Tasks Manager' shortDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta unde consectetur quisquam deleniti quam perspiciatis doloribus. Et, aliquid asperiores!' projectLink='https://my-to-dos-wil.vercel.app/' img={TodosImg}></ProjectItem>
            </div>
        </div>
    )
}
