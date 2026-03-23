import React from "react";

interface SectionWrapperProps {
  variant?: "dark" | "light";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
}

export function SectionWrapper({ variant = "dark", className = "", style, children, id }: SectionWrapperProps) {
  if (variant === "dark") {
    return (
      <section id={id} className={`dark-section py-24 lg:py-32 ${className}`} style={{ background: "#050505", color: "white", ...style }}>
        <div className="max-w-[1280px] mx-auto px-6">{children}</div>
      </section>
    );
  }
  return (
    <section id={id} className={`py-24 lg:py-32 ${className}`} style={{ background: "#F8F8F6", color: "#0A0A0A", ...style }}>
      <div className="max-w-[1280px] mx-auto px-6">{children}</div>
    </section>
  );
}
