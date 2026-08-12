import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/two.jpg";
import { DotField, Zigzag } from "./Decor";
import { PROFILE } from "@/lib/site";

const STACK = [
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Redux",
  "TailwindCSS",
  "Firebase",
  "Agora SDK",
];

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white/[0.02]">
      <div className="shell">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Stacked, offset image blocks */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <span
              aria-hidden="true"
              className="absolute -top-6 -left-6 hidden h-[85%] w-[85%] border border-white/10 bg-[#08080c] sm:block"
            />
            <span
              aria-hidden="true"
              className="absolute top-2 right-6 z-20 flex items-center gap-2"
            >
              <span className="h-2.5 w-2.5 bg-blue-500" />
              <span className="h-4 w-4 border-2 border-blue-500" />
            </span>

            <div className="group relative z-10 overflow-hidden border border-white/10">
              <img
                src={aboutImg}
                alt={`${PROFILE.name} at work`}
                className="duotone h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <DotField className="absolute -bottom-10 left-10 h-20 w-40" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-end gap-6">
              <div>
                <p className="eyebrow-muted mb-2">Who am i</p>
                <h2 className="font-display text-4xl leading-none font-bold uppercase md:text-6xl">
                  <span className="title-mark">Hello</span>
                </h2>
              </div>
              <Zigzag className="mb-2 hidden h-10 w-32 md:block" />
            </div>

            <p className="mt-8 max-w-xl leading-relaxed text-white/60">
              I'm {PROFILE.name}, a fullstack developer working across the whole
              product surface — translating Figma files into interfaces that hold
              up under real use, and wiring them to APIs that don't fall over.
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-white/60">
              I've shipped admin dashboards, crypto exchange interfaces, voice and
              video calling, OTP verification flows and SDKs used across apps and
              dashboards — mostly with remote teams, mostly under real deadlines.
            </p>

            <div className="mt-10">
              <p className="eyebrow mb-4">Stack</p>
              <div className="flex flex-wrap gap-2">
                {STACK.map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 px-3 py-2 text-[10px] font-semibold tracking-[0.18em] text-white/70 uppercase transition-colors duration-200 hover:border-blue-500 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="btn-block">
                See the work
              </a>
              <a href="#hire" className="btn-ghost">
                Let's talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
