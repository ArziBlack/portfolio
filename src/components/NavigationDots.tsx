import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SECTIONS, SECTION_IDS } from "@/lib/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";

/**
 * The floating side navigation, kept from the original layout but squared off:
 * each marker is a hard block that stretches into a bar when its section is active.
 */
const NavigationDots: React.FC = () => {
  const active = useScrollSpy(SECTION_IDS);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 xl:block 2xl:left-10"
    >
      <motion.ul
        className="space-y-5"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {SECTIONS.map(({ id, label, index }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className="nav-dot group flex items-center gap-4"
              >
                <span
                  className={cn(
                    "block h-[3px] rounded-none transition-all duration-300",
                    isActive
                      ? "w-10 bg-blue-500"
                      : "w-5 bg-white/25 group-hover:w-8 group-hover:bg-white/60"
                  )}
                />
                <span
                  className={cn(
                    "flex items-baseline gap-2 text-[10px] font-semibold tracking-[0.3em] uppercase transition-all duration-300",
                    isActive
                      ? "translate-x-0 text-white opacity-100"
                      : "-translate-x-2 text-white/50 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  )}
                >
                  <span className="text-blue-400">{index}</span>
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </motion.ul>

      <span
        aria-hidden="true"
        className="mt-8 ml-1 block h-24 w-px bg-gradient-to-b from-white/25 to-transparent"
      />
    </nav>
  );
};

export default NavigationDots;
