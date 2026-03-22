"use client";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export function FadeInOnScroll({ children, delay = 0, direction = "up", className = "" }: FadeInOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" && !shouldReduceMotion ? 40 : 0,
      x: direction === "left" && !shouldReduceMotion ? -40 : direction === "right" && !shouldReduceMotion ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
