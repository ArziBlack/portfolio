import React from 'react';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className=' py-6'>
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="text-lg font-bold transition hover:scale-125">MiltonBlack</div>
            <div className='hidden md:flex space-x-12 items-center'>
                <a href="#" className=' text-selected-text hover:scale-110 transition'>Home</a>
                <a href="#work" className='hover:scale-110 transition'>My work</a>
                <a href="#flow" className='hover:scale-110 transition'>Work Flow</a>
                <a href="#clients" className='hover:scale-110 transition'>Clients</a>
                <a href="#hire" className='hover:scale-110 transition'><button className='px-6 py-2 bg-theme font-bold'>Hire me</button></a>
            </div>
            <div className="md:hidden hover:rotate-90 transition">
                <FaBars/>
            </div>
        </div>
    </header>
  )
}

export default Navbar