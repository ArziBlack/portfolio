import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa'
import ModernButton from './ModernButton'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'work', 'flow', 'clients', 'hire'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section === 'home' ? '' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#', label: 'Home', id: 'home' },
    { href: '#work', label: 'My work', id: 'work' },
    { href: '#flow', label: 'Work Flow', id: 'flow' },
    { href: '#clients', label: 'Clients', id: 'clients' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            {/* Logo */}
            <motion.div 
              className="text-lg font-bold cursor-pointer gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MiltonBlack
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-8 items-center'>
                {navItems.map((item, index) => (
                  <motion.a 
                    key={item.id}
                    href={item.href} 
                    className={`relative py-2 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-theme bg-theme bg-opacity-10' 
                        : 'text-white hover:text-selected-text'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme"
                        layoutId="navbar-indicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
                
                {/* Hire Me Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <ModernButton
                    variant="primary"
                    size="medium"
                    onClick={() => document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' })}
                    magneticStrength={0.3}
                  >
                    Hire me
                  </ModernButton>
                </motion.div>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.div 
              className="md:hidden cursor-pointer p-2"
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
                <FaBars className="text-xl"/>
            </motion.div>
        </div>
    </motion.header>
  )
}

export default Navbar