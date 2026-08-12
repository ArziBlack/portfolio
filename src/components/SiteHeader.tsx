import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { SECTIONS, SECTION_IDS, PROFILE } from "@/lib/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const SiteHeader: React.FC = () => {
  const active = useScrollSpy(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0b0b12]/90 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="shell flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center bg-blue-500 font-display text-sm font-bold text-white">
            M
            <span className="absolute -right-1 -bottom-1 h-2 w-2 bg-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.24em] text-white uppercase">
            {PROFILE.last}
            <span className="text-blue-500">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {SECTIONS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className="relative py-2 text-[11px] font-semibold tracking-[0.26em] text-white/60 uppercase transition-colors hover:text-white"
              >
                <span className={cn(isActive && "text-white")}>{label}</span>
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 block h-[3px] bg-blue-500 transition-all duration-300",
                    isActive ? "w-full" : "w-0"
                  )}
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-white md:hidden"
        >
          {open ? <IconX size={18} /> : <IconMenu2 size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#0b0b12] md:hidden"
          >
            <ul className="shell divide-y divide-white/10 py-2">
              {SECTIONS.map(({ id, label, index }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 text-xs font-semibold tracking-[0.26em] text-white/80 uppercase"
                  >
                    {label}
                    <span className="text-blue-500">{index}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
