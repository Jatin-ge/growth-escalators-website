"use client";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function Button({ variant = "primary", size = "md", href, children, onClick, className = "", type = "button" }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer";
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const getStyle = () => {
    switch (variant) {
      case "primary":
        return { background: "#00E87B", color: "#000" };
      case "secondary":
        return { background: "rgba(255,255,255,0.06)", color: "#fff", border: "1px solid rgba(255,255,255,0.08)" };
      case "outline":
        return { border: "1px solid rgba(255,255,255,0.2)", color: "#fff" };
      case "ghost":
        return { color: "#00E87B" };
    }
  };

  const glowClass = variant === "primary" ? "glow-pulse" : "";
  const classes = `${base} ${sizes[size]} ${glowClass} ${className}`;

  if (href) return <Link href={href} className={classes} style={getStyle()}>{children}</Link>;
  return <button type={type} onClick={onClick} className={classes} style={getStyle()}>{children}</button>;
}
