interface SectionWrapperProps {
  variant?: "dark" | "light";
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export function SectionWrapper({ variant = "dark", className = "", children, id }: SectionWrapperProps) {
  const bg = variant === "dark"
    ? "bg-bg-dark text-white noise-texture"
    : "bg-bg-light text-text-primary-light";

  return (
    <section id={id} className={`${bg} py-24 md:py-16 ${className}`}>
      <div className="max-w-[1280px] mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
