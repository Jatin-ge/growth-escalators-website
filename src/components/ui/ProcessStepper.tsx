"use client";
import { FadeInOnScroll } from "./FadeInOnScroll";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface ProcessStepperProps {
  steps: Step[];
}

export function ProcessStepper({ steps }: ProcessStepperProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
      {steps.map((step, index) => (
        <FadeInOnScroll key={step.step} delay={index * 0.1}>
          <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-5 left-[60%] w-full h-[2px] bg-gradient-to-r from-accent/50 to-border-dark" />
            )}
            <div className="w-10 h-10 rounded-full bg-accent text-black font-mono font-bold text-sm flex items-center justify-center mb-4 shrink-0 z-10">
              {step.step}
            </div>
            <h4 className="font-syne font-bold text-lg mb-2">{step.title}</h4>
            <p className="text-sm text-text-secondary-dark leading-relaxed">{step.description}</p>
          </div>
        </FadeInOnScroll>
      ))}
    </div>
  );
}
