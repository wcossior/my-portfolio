import React from 'react'

const Nav = () => {
    return (
        <div className="navbar bg-base-300 shadow-sm justify-center">
            <div className="mr-8">
                <span className='text-3xl pacifico-regular'>Wilder</span><span className='text-4xl font-bold text-emerald-400'> ;</span>
            </div>

            <ul className="menu menu-horizontal px-1">
                <li className='hover:text-emerald-400'><a className='font-semibold'>About</a></li>
                <li className='hover:text-emerald-400'><a className='font-semibold'>Technologies</a></li>
                <li className='hover:text-emerald-400'><a className='font-semibold'>Projects</a></li>
            </ul>
        </div>
    )
}

export default Nav