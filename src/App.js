import './App.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Clients from './components/Clients';
import Form from './components/Form';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import WorkFlow from './components/WorkFlow';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <PageLoader onComplete={handleLoadingComplete} />
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <CustomCursor />
      <Navbar/>
      <Hero/>
      <MyWork/>
      <WorkFlow/>
      <Clients/>
      <Form/>
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-theme bg-opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-selected-text bg-opacity-5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
        </motion.div>
      )}
    </>
  );
}

export default App;
