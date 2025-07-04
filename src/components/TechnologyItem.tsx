import { JSX } from 'react'

type TechnologyItemProps = {
    icon: JSX.Element,
    title: string
}

export const TechnologyItem = ({ icon, title }: TechnologyItemProps) => {
    return (
        <div className="card min-w-[120px] md:w-auto bg-neutral text-neutral-content hover:shadow-[0_4px_40px_rgba(34,211,238,0.5)] transition-shadow duration-300 rounded-2xl p-3 md:p-6">
            <div className="card-body items-center text-center">
                {icon}
                <h2 className="md:card-title text-sm">{title}</h2>
            </div>
        </div>
    )
}
