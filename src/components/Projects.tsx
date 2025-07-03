import { ProjectItem } from './ProjectItem'
import MiniTwitterImg from '../assets/img/MiniTwitter.png';
import JourneyImg from '../assets/img/Journey.png';
import MoviesImg from '../assets/img/Movies.png';
import TimeTrackerImg from '../assets/img/TimeTracker.png';
import TodosImg from '../assets/img/Todos.png';
import CafeImg from '../assets/img/Cafe.png';

export const Projects = () => {

    return (
        <div className='mx-14 md:mx-25 text-center pb-18'>
            <div className='flex flex-row items-center mb-12'>
                <div className='flex-2 h-[3px] w-full bg-emerald-400 rounded-sm'></div>
                <p className='flex-none ml-6 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed'>Projects</p>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                <ProjectItem technologies={["React", "JavaScript", "Tailwind", "DaisyUI", "Zustand", "API Integration", "HTML5", "CSS3"]} title='MiniSocialNetwork' shortDescription='MiniSocialNetwork is a simple and modern platform where users can register, log in, and share posts. It supports creating, editing, and deleting posts with an intuitive interface.' projectLink='https://mini-social-network-olive.vercel.app/' img={MiniTwitterImg}></ProjectItem>
                <ProjectItem technologies={["JavaScript", "HTML5", "CSS3", "TMDb API Integration"]} title='MoviesPage' shortDescription='MoviePage is a web app that lets users search for movies and view details using the TMDb API, with a responsive and user-friendly design.' projectLink='https://wcossior.github.io/10.MoviePage/' img={MoviesImg}></ProjectItem>
                <ProjectItem technologies={["TypeScript", "HTML5", "CSS3"]} title='TimeTrack' shortDescription='TimeTrack is a lightweight app for tracking employee attendance through simple check-in and check-out actions, offering a smooth and responsive user experience.' projectLink='https://timetrack-sand.vercel.app/' img={TimeTrackerImg}>
                </ProjectItem>
                <ProjectItem technologies={["React", "TypeScript", "HTML5", "CSS3", "SCSS"]} title='Journey Website' shortDescription='Journey Website is a responsive single-page travel platform built with React and SCSS, serving as a clean and scalable foundation for future backend integration.' projectLink='https://journey-omega.vercel.app/' img={JourneyImg}></ProjectItem>
                <ProjectItem technologies={["React", "TypeScript", "HTML5", "CSS3", "Redux", "Firebase"]} title='My-to-dos' shortDescription='My-to-dos is a task management app that lets users organize tasks into custom groups, with real-time data storage powered by Firebase Firestore and state handled via Redux.' projectLink='https://my-to-dos-wil.vercel.app/' img={TodosImg}></ProjectItem>
                <ProjectItem technologies={["React", "TypeScript", "HTML5", "CSS3", "Tailwind"]} title='Cafe' shortDescription='Cafe is a responsive landing page for an artisan coffee shop, built with React, TypeScript, Tailwind CSS, and DaisyUI. It highlights products and testimonials with a clean, modern UI.' projectLink='https://cafe-one-rosy.vercel.app/' img={CafeImg}></ProjectItem>
            </div>
        </div>
    )
}
