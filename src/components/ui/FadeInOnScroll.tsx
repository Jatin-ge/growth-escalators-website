"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export function FadeInOnScroll({ children, delay = 0, direction = "up", className = "" }: FadeInOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  const getInitial = (): { opacity: number; y?: number; x?: number } => {
    if (shouldReduce) return { opacity: 0 };
    const map: Record<string, { opacity: number; y?: number; x?: number }> = {
      up: { opacity: 0, y: 30 },
      left: { opacity: 0, x: -30 },
      right: { opacity: 0, x: 30 },
      none: { opacity: 0 },
    };
    return map[direction];
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : getInitial()}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
