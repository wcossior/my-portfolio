import React, { JSX } from 'react'

type TechnologyItemProps = {
    icon: JSX.Element,
    title: string
}

export const TechnologyItem = ({ icon, title }: TechnologyItemProps) => {
    return (
        <div className="card bg-neutral text-neutral-content hover:shadow-[0_4px_40px_rgba(34,211,238,0.5)] transition-shadow duration-300 rounded-2xl p-6">
            <div className="card-body items-center text-center">
                {icon}
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    )
}
