"use client";

import { useCallback, useEffect, useRef } from "react";

function verticalScrollParent(el: HTMLElement | null): HTMLElement | null {
  let node: HTMLElement | null = el;
  while (node && node !== document.body) {
    const { overflowY } = window.getComputedStyle(node);
    if (
      (overflowY === "auto" || overflowY === "scroll") &&
      node.scrollHeight > node.clientHeight + 2
    ) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

function sectionElements(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-snap-page]"));
}

function currentSectionIndex(): number {
  const sections = sectionElements();
  if (!sections.length) return 0;
  const probe = window.scrollY + window.innerHeight * 0.32;
  let best = 0;
  for (let i = 0; i < sections.length; i++) {
    const top = sections[i].offsetTop;
    if (top <= probe + 8) best = i;
  }
  return best;
}

/**
 * Rimac-style paging: strong wheel steps between full-viewport sections.
 * Yields to nested scroll areas until they hit an edge.
 */
export function useSectionWheelSnap(enabled: boolean) {
  const lock = useRef(false);
  const accum = useRef(0);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const releaseLock = useCallback(() => {
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      lock.current = false;
      lockTimer.current = null;
    }, 720);
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (lock.current) return;
      const sections = sectionElements();
      if (sections.length < 2) return;
      const i = currentSectionIndex();
      const next = Math.max(0, Math.min(sections.length - 1, i + dir));
      if (next === i) return;
      lock.current = true;
      sections[next].scrollIntoView({ behavior: "smooth", block: "start" });
      releaseLock();
    },
    [releaseLock],
  );

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const horizontal = target.closest<HTMLElement>("[data-horizontal-wheel]");
      if (horizontal) {
        const canScrollX = horizontal.scrollWidth > horizontal.clientWidth + 1;
        if (canScrollX) {
          const delta =
            Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
          const atStart = horizontal.scrollLeft <= 1;
          const atEnd =
            horizontal.scrollLeft + horizontal.clientWidth >=
            horizontal.scrollWidth - 1;

          // While within the carousel bounds, consume wheel and scroll horizontally.
          if ((delta < 0 && !atStart) || (delta > 0 && !atEnd)) {
            e.preventDefault();
            horizontal.scrollBy({ left: delta, behavior: "auto" });
            return;
          }
          // When the carousel is at an edge and user continues in that direction,
          // fall through so the section snap can move vertically.
        }
      }

      if (target.closest("textarea, input, select, [data-no-wheel-snap]")) {
        return;
      }

      const inner = verticalScrollParent(target);
      if (inner) {
        const atTop = inner.scrollTop <= 1;
        const atBottom =
          inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 2;
        if (e.deltaY < 0 && !atTop) return;
        if (e.deltaY > 0 && !atBottom) return;
      }

      accum.current += e.deltaY;
      const threshold = 38;
      if (Math.abs(accum.current) < threshold) return;
      const dir = accum.current > 0 ? 1 : -1;
      accum.current = 0;

      const y = window.scrollY;
      const maxY =
        document.documentElement.scrollHeight - window.innerHeight - 1;
      if (dir < 0 && y <= 2) return;
      if (dir > 0 && y >= maxY) return;

      e.preventDefault();
      go(dir);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "PageDown" && e.key !== "PageUp")
        return;
      const t = e.target as HTMLElement;
      if (t.closest("textarea, input, select")) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      if (lockTimer.current) clearTimeout(lockTimer.current);
    };
  }, [enabled, go]);
}
