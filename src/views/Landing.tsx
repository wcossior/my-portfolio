import React from 'react'
import Nav from '../components/Nav';
import { AboutDescription } from '../components/AboutDescription';
import { Contacts } from '../components/Contacts';
import { Technologies } from '../components/Technologies';
import { Projects } from '../components/Projects';

const Landing = () => {
    
    return (
        <div className=''>
            <Nav></Nav>
            <div className='flex flex-row text-center mx-25 my-10'>
                <AboutDescription></AboutDescription>
                <Contacts></Contacts>
            </div>
            <Technologies></Technologies>
            <Projects></Projects>
        </div>
    )
}

export default Landing