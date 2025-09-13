import React from 'react';
import {motion} from 'framer-motion'
import { FaEye } from 'react-icons/fa'
import { TextReveal, FadeInUp, FadeInLeft } from './ScrollAnimations'
import ModernButton from './ModernButton'

const Hero = () => {

    function updateList() {
        const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
          return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().bottom)
        });

        document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove('selected-circle'));
        document.querySelectorAll('.nav-dot')[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
      }
    //   updateList();
      window.addEventListener('scroll', () => {
        updateList();
      })
    return (
        <div className='container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full overflow-hidden'>
            <div className="flex flex-wrap md:flex-nowrap">
                <nav className='inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block'>
                    <motion.div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36 z-20"
                        initial={{y:-250, opacity:0, scale:0.5}}
                        whileInView={{y:0, opacity:1, scale:1}}
                        transition={{duration:1}}
                        viewport={{once: true}}>
                        <a href='#' className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className='bg-body px-2 py-1 rounded-md ml-10 opacity-0'>Home</span>
                        </a>
                        <a href='#work' className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Work</span>
                        </a>
                        <a href='#flow' className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Flow</span>
                        </a>
                        <a href='#clients' className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Client</span>
                        </a>
                        <a href='#hire' className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Hire</span>
                        </a>
                    </motion.div>
                </nav>
                <div className="flex flex-wrap lg:ml-20 justify-start max-w-xl mt-0 md:my-36">
                    <TextReveal className='font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left gradient-text'>
                        <span>Building</span><br /> 
                        <span>Beautiful Web and Mobile</span><br />
                        <span className="text-theme">Experiences.</span>
                    </TextReveal>
                    <FadeInUp delay={0.3} className='w-full flex justify-center md:justify-start'>
                        <ModernButton 
                            variant="primary" 
                            size="large"
                            icon={<FaEye />}
                            className='mt-12 hover-lift'
                            magneticStrength={0.5}
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            My Work
                        </ModernButton>
                    </FadeInUp>
                </div>
                <FadeInLeft delay={0.5} className="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1">
                    <motion.img 
                        src="/Img/usher.jpg" 
                        alt="usher" 
                        className='w-full floating hover-lift cursor-image' 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </FadeInLeft>
            </div>
        </div>
    )
}

export default Hero