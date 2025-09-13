import React from 'react';
import { motion } from 'framer-motion';
import heroImg from "../assets/usher.jpg";

interface HeroImageProps {
  // Add any props if needed
}

const HeroImage: React.FC<HeroImageProps> = () => {
  return (
    <div className="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1">
      <motion.img
        src={heroImg}
        alt="usher"
        className='w-full floating hover-lift cursor-image'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default HeroImage;