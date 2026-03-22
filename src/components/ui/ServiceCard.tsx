import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  const IconComponent: LucideIcon = ((Icons as unknown as Record<string, LucideIcon>)[icon]) || Icons.Zap;

  return (
    <Link href={href} className="group block bg-white border border-border-light rounded-2xl p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 hover:scale-[1.02] transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
        <IconComponent size={24} className="text-accent" />
      </div>
      <h3 className="font-syne font-bold text-xl text-text-primary-light mb-2">{title}</h3>
      <p className="text-text-secondary-light text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
        Learn more <ArrowRight size={16} />
      </span>
    </Link>
  );
}
