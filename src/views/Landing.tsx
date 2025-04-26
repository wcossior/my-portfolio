import React, { useEffect } from 'react'
import Nav from '../components/Nav';
import { AboutDescription } from '../components/AboutDescription';
import { Contacts } from '../components/Contacts';
import { Technologies } from '../components/Technologies';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = () => {

    useEffect(() => {
        AOS.init({
          duration: 1100, 
          once: true
        });
      }, []);

    return (
        <div className=''>
            <Nav></Nav>
            <div id='about' className='flex flex-row text-center mx-25 my-10'>
                <AboutDescription></AboutDescription>
                <Contacts></Contacts>
            </div>
            <div id="technologies" data-aos="fade-right">
                <Technologies></Technologies>
            </div>
            <div id="projects" data-aos="fade-left">
                <Projects></Projects>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Landing