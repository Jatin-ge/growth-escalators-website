"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface Step { step: string; title: string; description: string; }

export function ProcessStepper({ steps }: { steps: Step[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <div ref={ref} className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: "rgba(0,0,0,0.1)" }} />
      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={shouldReduce ? false : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-8 items-start"
          >
            <div className="shrink-0 w-16 h-16 flex items-center justify-center relative">
              <span className="font-mono font-bold text-2xl" style={{ color: "#00E87B" }}>{step.step}</span>
            </div>
            <div className="pt-3">
              <h4 className="font-semibold text-xl mb-2" style={{ color: "#0A0A0A" }}>{step.title}</h4>
              <p className="leading-relaxed" style={{ color: "#5C5F66" }}>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
