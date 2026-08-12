import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import { PROFILE } from "@/lib/site";

const STATS = [
  { value: "5+", label: "Years building" },
  { value: "20+", label: "Shipped projects" },
  { value: "6", label: "Product teams" },
  { value: "100%", label: "Remote ready" },
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="shell">
        <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-0">
          <HeroImage />
          <HeroContent />
        </div>

        {/* Blocked stat strip — hard dividers, no rounding. */}
        <div className="mt-16 grid grid-cols-2 border border-white/10 lg:mt-28 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative px-6 py-8 transition-colors duration-300 hover:bg-blue-500/10 ${
                i % 2 === 0 ? "border-r border-white/10" : ""
              } ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""} ${
                i === 2 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <p className="font-display text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-semibold tracking-[0.24em] text-white/40 uppercase">
                {stat.label}
              </p>
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        <p className="mt-6 text-[10px] font-semibold tracking-[0.3em] text-white/25 uppercase">
          {PROFILE.location} — Available for freelance & contract work
        </p>
      </div>
    </section>
  );
};

export default Hero;
