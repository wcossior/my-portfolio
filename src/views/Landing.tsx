import React from 'react'
import Nav from '../components/Nav';
import { AboutDescription } from '../components/AboutDescription';
import { Contacts } from '../components/Contacts';
import { Technologies } from '../components/Technologies';

const Landing = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <div className='flex flex-row text-center mx-25 my-10'>
                <AboutDescription></AboutDescription>
                <Contacts></Contacts>
            </div>
            <Technologies></Technologies>
        </div>
    )
}

export default Landing