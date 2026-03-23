"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduce) { setCount(target); return; }
    let startTime: number;
    const animate = (t: number) => {
      if (!startTime) startTime = t;
      const elapsed = t - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration, shouldReduce]);

  return (
    <span ref={ref}>
      <span className="font-sans">{prefix}</span>
      <span className="font-mono">{count}</span>
      <span className="font-sans">{suffix}</span>
    </span>
  );
}
