import React from 'react'

const Navbar = () => {
  return (
    <header className=' py-6'>
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="text-lg">MiltonBlack</div>
            <div className='hidden md:flex space-x-12 items-center'>
                <a href="#" className=' text-selected-text'>Home</a>
                <a href="#work">My work</a>
                <a href="#clients">Clients</a>
                <a href="#hire"><button>Hire me</button></a>
            </div>
        </div>
    </header>
  )
}

export default Navbar