import React from 'react'

const Hero = () => {
  return (
    <div className='container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
        <div className="flex flex-wrap md:flex-nowrap">
            <nav className='inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block'>
                <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-37">
                    <a href='#' className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span className='bg-black px-2 py-1 rounded-md ml-10'></span>
                    </a>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Hero