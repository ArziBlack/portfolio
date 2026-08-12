import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./card";
import { myWorkData, WORK_CATEGORIES } from "./myWorkData";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./Decor";

const PAGE_SIZE = 6;

const MyWork = () => {
  const [filter, setFilter] = useState<(typeof WORK_CATEGORIES)[number]>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? myWorkData
        : myWorkData.filter((w) => w.category === filter),
    [filter]
  );

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <section id="work" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Awesome projects"
          title="My"
          markedWord="Work"
        />
        <p className="section-paragraph">
          A selection of products I've built and shipped — dashboards, apps and
          the services behind them.
        </p>

        {/* Blocked filter tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-white/10 pb-4">
          {WORK_CATEGORIES.map((category) => {
            const isActive = filter === category;
            const count =
              category === "All"
                ? myWorkData.length
                : myWorkData.filter((w) => w.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setFilter(category);
                  setVisible(PAGE_SIZE);
                }}
                aria-pressed={isActive}
                className="group relative pb-4 text-[11px] font-semibold tracking-[0.24em] uppercase transition-colors duration-200"
              >
                <span className={cn(isActive ? "text-white" : "text-white/40 group-hover:text-white/80")}>
                  {category}
                </span>
                <sup className="ml-1 text-[9px] text-blue-400">{count}</sup>
                <span
                  className={cn(
                    "absolute -bottom-[17px] left-0 block h-[3px] bg-blue-500 transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((work, i) => (
              <Card
                key={work.id}
                index={i}
                imageSrc={work.imageSrc}
                title={work.title}
                description={work.description}
                badges={work.badges}
                category={work.category}
                year={work.year}
                href={work.href}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 border border-white/10 px-6 py-10 text-center text-xs tracking-[0.24em] text-white/40 uppercase">
            Nothing here yet
          </p>
        )}

        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="btn-ghost"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWork;
