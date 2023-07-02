import React from 'react';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className=' py-6'>
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="text-lg font-bold">MiltonBlack</div>
            <div className='hidden md:flex space-x-12 items-center'>
                <a href="#" className=' text-selected-text'>Home</a>
                <a href="#work">My work</a>
                <a href="#flow">Work Flow</a>
                <a href="#clients">Clients</a>
                <a href="#hire"><button className='px-6 py-2 bg-theme font-bold'>Hire me</button></a>
            </div>
            <div className="md:hidden">
                <FaBars/>
            </div>
        </div>
    </header>
  )
}

export default Navbar