"use client";
import Link from "next/link";

interface IndustryCardProps {
  title: string;
  description: string;
  href: string;
}

export function IndustryCard({ title, description: _description, href }: IndustryCardProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 px-6 py-4 rounded-full font-medium text-sm transition-all duration-200 hover:scale-105"
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        background: "#FFFFFF",
        color: "#0A0A0A",
      }}
    >
      <span className="group-hover:text-black transition-colors">{title}</span>
    </Link>
  );
}
