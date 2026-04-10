"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger when multiple siblings reveal (ms). */
  delayMs?: number;
  variant?: "fade-up" | "fade" | "scale";
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "fade-up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const motion =
    "transition-[opacity,transform,filter] duration-[780ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-200 motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:blur-0";

  const hidden =
    variant === "fade-up"
      ? "opacity-0 translate-y-10 blur-[3px]"
      : variant === "scale"
        ? "opacity-0 scale-[0.96]"
        : "opacity-0";

  const visible =
    variant === "fade-up"
      ? "opacity-100 translate-y-0 blur-0"
      : variant === "scale"
        ? "opacity-100 scale-100"
        : "opacity-100";

  const style: CSSProperties = active
    ? { transitionDelay: `${delayMs}ms` }
    : { transitionDelay: "0ms" };

  return (
    <div
      ref={ref}
      className={`${motion} ${active ? visible : hidden} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
