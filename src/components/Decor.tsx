import React from "react";
import { cn } from "@/lib/utils";

/** Repeating chevron rule used beside section headings. */
export const Zigzag: React.FC<{ className?: string; rows?: number }> = ({
  className,
  rows = 4,
}) => (
  <svg
    viewBox="0 0 120 40"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={cn("h-10 w-32 text-white/20", className)}
  >
    {Array.from({ length: rows }).map((_, r) => (
      <polyline
        key={r}
        points={Array.from({ length: 13 })
          .map((_, i) => `${i * 10},${r * 10 + (i % 2 === 0 ? 0 : 6)}`)
          .join(" ")}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    ))}
  </svg>
);

/** Square dot field — the punched-card texture from the reference layout. */
export const DotField: React.FC<{ className?: string }> = ({ className }) => (
  <div
    aria-hidden="true"
    className={cn("dot-grid pointer-events-none text-white/20", className)}
  />
);

/** Four hard corner ticks that frame a block. */
export const CornerTicks: React.FC<{ className?: string }> = ({ className }) => (
  <>
    <span
      aria-hidden="true"
      className={cn(
        "absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-blue-500",
        className
      )}
    />
    <span
      aria-hidden="true"
      className={cn(
        "absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-blue-500",
        className
      )}
    />
    <span
      aria-hidden="true"
      className={cn(
        "absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-blue-500",
        className
      )}
    />
    <span
      aria-hidden="true"
      className={cn(
        "absolute -right-px -bottom-px h-4 w-4 border-r-2 border-b-2 border-blue-500",
        className
      )}
    />
  </>
);

/** Small eyebrow + heavy uppercase title, with an optional accent slab word. */
export const SectionHeading: React.FC<{
  eyebrow: string;
  title: string;
  markedWord?: string;
  className?: string;
  zigzag?: boolean;
}> = ({ eyebrow, title, markedWord, className, zigzag = true }) => (
  <div className={cn("relative", className)}>
    <p className="eyebrow mb-3">{eyebrow}</p>
    <div className="flex items-end gap-6">
      <h2 className="font-display text-3xl leading-none font-bold uppercase md:text-5xl">
        {title}{" "}
        {markedWord && <span className="title-mark">{markedWord}</span>}
      </h2>
      {zigzag && <Zigzag className="hidden h-8 w-28 shrink-0 md:block" />}
    </div>
    <span aria-hidden="true" className="mt-5 block h-[10px] w-24 bg-blue-500" />
  </div>
);
