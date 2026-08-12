import React from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  badges: string[];
  category: string;
  year: string;
  index: number;
  href?: string;
}

/**
 * Hard-edged project tile. The whole face is a block: image on top, and on hover
 * an accent panel slides over it carrying the write-up — no rounding anywhere.
 */
const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  badges,
  category,
  year,
  index,
  href,
}) => {
  const Wrapper = (href ? "a" : "div") as React.ElementType;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group relative border border-white/10 bg-[#101018]"
    >
      <Wrapper
        {...(href
          ? { href, target: "_blank", rel: "noreferrer noopener" }
          : {})}
        className="block"
      >
        {/* Image face */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            className="duotone h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Accent panel — slides up over the image */}
          <div className="absolute inset-0 flex translate-y-full flex-col justify-center bg-blue-500 px-6 py-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
            <IconArrowUpRight className="mb-3 h-7 w-7 text-white" />
            <h3 className="font-display text-lg font-bold uppercase text-white">
              {title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-white/85">
              {description}
            </p>
          </div>

          {/* Index chip */}
          <span className="absolute top-0 left-0 bg-[#08080c] px-3 py-2 font-display text-[10px] font-bold tracking-[0.2em] text-blue-400 transition-opacity duration-300 group-hover:opacity-0">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Caption block */}
        <div className="border-t border-white/10 px-5 py-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-sm font-bold tracking-wide text-white uppercase">
              {title}
            </h3>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30">
              {year}
            </span>
          </div>
          <p className="mt-1 text-[10px] font-semibold tracking-[0.24em] text-blue-400 uppercase">
            {category}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>

      {/* Corner ticks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-px -bottom-px h-4 w-4 border-r-2 border-b-2 border-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.article>
  );
};

export default Card;
