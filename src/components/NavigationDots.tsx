import React from 'react';
import { motion } from 'framer-motion';

interface NavigationDotsProps {
  updateList: () => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ updateList }) => {
  // The updateList function is passed as a prop, so it's not defined here.
  // It will be called from the parent component (Hero.tsx) via a useEffect or similar.

  return (
    <nav className='inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block'>
      <motion.div
        className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36 z-20"
        initial={{ y: -250, opacity: 0, scale: 0.5 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <a href='#home' className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
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
  );
};

export default NavigationDots;