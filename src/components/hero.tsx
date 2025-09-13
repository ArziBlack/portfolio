import { useEffect } from "react";
import NavigationDots from "./NavigationDots";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  function updateList() {
    const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
      return (
        Math.abs(a.getBoundingClientRect().top) -
        Math.abs(b.getBoundingClientRect().bottom)
      );
    });

    document
      .querySelectorAll(".selected-circle")
      .forEach((c) => c.classList.remove("selected-circle"));
    document
      .querySelectorAll(".nav-dot")
      [
        [...document.querySelectorAll("h1, h2")].indexOf(titles[0])
      ].classList.add("selected-circle");
  }
  //   updateList();
  useEffect(() => {
    window.addEventListener("scroll", updateList);
    updateList(); // Call once on mount to set initial state
    return () => window.removeEventListener("scroll", updateList);
  }, []);
  return (
    <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full overflow-hidden">
      <div className="flex flex-wrap md:flex-nowrap">
        <NavigationDots updateList={updateList} />
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
