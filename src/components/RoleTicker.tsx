import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Compact typing loop for the accent slab in the hero — the original site's
 * typewriter idea, sized to sit inside a hard-edged block.
 */
const RoleTicker: React.FC<{ roles: string[]; className?: string }> = ({
  roles,
  className,
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[index % roles.length];
    const done = !deleting && text === full;
    const cleared = deleting && text === "";

    const delay = done ? 1600 : cleared ? 200 : deleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (done) {
        setDeleting(true);
        return;
      }
      if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
        return;
      }
      setText((t) => (deleting ? t.slice(0, -1) : full.slice(0, t.length + 1)));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, roles]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span aria-live="polite">{text}</span>
      <span className="ml-1 inline-block h-[1em] w-[3px] animate-pulse bg-current align-middle" />
    </span>
  );
};

export default RoleTicker;
