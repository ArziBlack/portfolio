import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/usher.jpg";

const HeroImage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      className="group relative lg:col-span-8 lg:col-start-5 lg:row-start-1"
    >
      <div className="relative overflow-hidden border border-white/10">
        <img
          src={heroImg}
          alt="Portrait of Milton Black"
          decoding="async"
          className="duotone h-[340px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] sm:h-[440px] lg:h-[560px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#08080c]/80 lg:via-transparent lg:to-transparent"
        />
      </div>

      {/* Hard accent slab, offset behind the frame. */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -right-4 -z-10 hidden h-32 w-32 bg-blue-500 lg:block"
      />
      <span
        aria-hidden="true"
        className="absolute right-6 -bottom-6 hidden h-3 w-40 bg-blue-500 lg:block"
      />
    </motion.div>
  );
};

export default HeroImage;
