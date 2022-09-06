import React from 'react';
import { FaEye } from 'react-icons/fa'

const Hero = () => {

    function updateList() {
        const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
          return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().bottom)
        });

        document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove('selected-circle'));
        document.querySelectorAll('.nav-dot')[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
      }
      updateList();
      window.addEventListener('scroll', () => {
        updateList();
      })
    return (
        <div className='container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
            <div className="flex flex-wrap md:flex-nowrap">
                <nav className='inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block'>
                    <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                        <a href='#' className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className='bg-body px-2 py-1 rounded-md ml-10 opacity-0'>Home</span>
                        </a>
                        <a href='#work' className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Work</span>
                        </a>
                        <a href='#clients' className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Client</span>
                        </a>
                        <a href='#hire' className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Hire</span>
                        </a>
                    </div>
                </nav>
                <div className="flex flex-wrap lg:ml-20 justify-start max-w-xl mt-0 md:my-36">
                    <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left'>Building <br /> Beautiful Web Experiences.</h1>
                    <div className='w-full flex justify-center md:justify-start'>
                        <button className='px-8 py-4 bg-theme text-white font-bold flex mt-12 items-center space-x-3'>
                            <div>
                                <FaEye height='22px' width='22px'/>
                            </div>
                            <span>My Work</span>
                        </button>
                    </div>
                </div>
                <img src="/Img/usher.jpeg" alt="usher" className='w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1' />
            </div>
        </div>
    )
}

export default Hero