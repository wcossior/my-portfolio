import { useState } from 'react'

type ProjectItemProps = {
    title: string,
    shortDescription: string,
    projectLink: string,
    img: string,
    technologies: string[]
}

export const ProjectItem = ({ title, shortDescription, projectLink, img, technologies }: ProjectItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="card bg-neutral text-neutral-content">
            <div className={`card-body p-0 items-center text-center transition-all duration-500 ${isHovered ? 'scale-103' : 'scale-100'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={`absolute w-full text-gray-200 rounded-sm h-full bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-500 p-3 md:p-8 text-start transition-all duration-500 ${isHovered ? 'opacity-92' : 'opacity-0'}`}>
                    <div className='flex justify-between'>
                        <h2 className="text-sm md:card-title mb-4 xl:mb-0">{title}</h2>
                        <a href={projectLink} target="_blank" className="text-emerald-500 hover:underline">
                            See more →
                        </a>
                    </div>
                    <p className='hidden md:flex text-xs my-4'>{shortDescription}</p>
                    <div className="text-xs md:text-sm flex flex-wrap gap-2 text-gray-400">
                        {
                            technologies.map((tech, index) => (<span className="md:badge md:badge-outline">{tech}</span>))
                        }
                    </div>
                </div>
                <img src={img} className='w-full h-full object-cover rounded-sm' alt="MinitwitterImg" />
            </div>
        </div>
    )
}
