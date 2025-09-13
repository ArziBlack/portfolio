import React from "react";
import { FaEye } from "react-icons/fa";

interface HeroContentProps {
  // Add any props if needed
}

const HeroContent: React.FC<HeroContentProps> = () => {
  return (
    <div className="flex flex-wrap lg:ml-20 justify-start md:max-w-3xl max-w-xl mt-0 md:my-36">
      <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left leading-[90px]">
        Building <br /> Beautiful Web, Desktop and Mobile Experiences.
      </h1>
      <div className="w-full flex justify-center md:justify-start">
        <button className="px-8 py-4 bg-blue-500 text-white font-bold flex mt-12 items-center space-x-3">
          <div>
            <FaEye height="22px" width="22px" />
          </div>
          <span>My Work</span>
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
