import React from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { PROFILE } from "@/lib/site";
import { DotField } from "./Decor";
import RoleTicker from "./RoleTicker";

const HeroContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-20 border border-white/10 bg-[#08080c] px-8 py-12 md:px-12 md:py-16 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:-mb-14"
    >
      <DotField className="absolute top-8 left-8 h-28 w-40" />

      <p className="eyebrow-muted relative mb-4">My name is</p>

      <h1 className="font-display relative text-4xl leading-[1.05] font-bold uppercase sm:text-5xl lg:text-6xl">
        {PROFILE.first}
        <br />
        <span className="text-blue-500">{PROFILE.last}</span>
      </h1>

      <div className="mt-8 inline-flex max-w-full items-center bg-blue-500 px-5 py-3">
        <span className="font-display text-[11px] font-bold tracking-[0.2em] text-white uppercase sm:text-sm">
          I'm a{" "}
          <RoleTicker
            roles={[
              "Fullstack Developer",
              "React Engineer",
              "Node.js Developer",
              "UI Developer",
            ]}
          />
        </span>
      </div>

      <p className="mt-8 max-w-md text-sm leading-relaxed text-white/55">
        I build beautiful web, desktop and mobile experiences — from pixel-tight
        interfaces to the APIs behind them.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#work" className="btn-block">
          <FaEye />
          <span>My Work</span>
        </a>
        <a href="#hire" className="btn-ghost">
          Hire Me
        </a>
      </div>

      <span
        aria-hidden="true"
        className="absolute -top-3 -left-3 h-6 w-6 border-t-2 border-l-2 border-blue-500"
      />
      <span
        aria-hidden="true"
        className="absolute -right-3 -bottom-3 h-6 w-6 border-r-2 border-b-2 border-blue-500"
      />
    </motion.div>
  );
};

export default HeroContent;
