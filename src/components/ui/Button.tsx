"use client";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function Button({ variant = "primary", size = "md", href, children, onClick, className = "", type = "button" }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: "bg-accent text-black hover:bg-accent-hover hover:scale-105",
    secondary: "bg-white/10 text-white hover:bg-white/20 hover:scale-105",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-black hover:scale-105",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
