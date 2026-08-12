import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view. Reads live positions on scroll
 * rather than indexing headings by document order, so sections can be added or
 * reordered without breaking the side navigation.
 */
export function useScrollSpy(ids: readonly string[], offset = 0) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const key = ids.join("|");

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      const line = window.scrollY + window.innerHeight * 0.35 + offset;
      let current = ids[0] ?? "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = id;
      }

      // Anything within a viewport-height of the bottom counts as the last section.
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 120
      ) {
        current = ids[ids.length - 1] ?? current;
      }

      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, offset]);

  return active;
}
