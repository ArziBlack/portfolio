import React from "react";
import { FaEye } from "react-icons/fa";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

interface HeroContentProps {
  // Add any props if needed
}

const HeroContent: React.FC<HeroContentProps> = () => {
  const words = [
    {
      text: "Desktop",
      className: "text-white",
    },
    {
      text: "and",
      className: "text-white",
    },
    {
      text: "Mobile",
      className: "text-white",
    },
  ];
  return (
    <div className="flex flex-wrap lg:ml-20 justify-start md:max-w-4xl max-w-xl mt-0 md:my-36">
      <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left leading-[90px]">
        Building <br /> Beautiful Web, <TypewriterEffectSmooth words={words} />{" "}
        <TypewriterEffectSmooth
          words={[
            {
              text: "Experiences.",
              className: "text-blue-500 dark:text-blue-500",
            },
          ]}
        />
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
