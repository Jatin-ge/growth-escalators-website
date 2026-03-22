import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  href: string;
}

export function IndustryCard({ title, description, href }: IndustryCardProps) {
  return (
    <Link href={href} className="group block bg-white border border-border-light rounded-2xl p-8 hover:border-accent/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
      <h3 className="font-syne font-bold text-xl text-text-primary-light mb-2">{title}</h3>
      <p className="text-text-secondary-light text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
        Explore <ArrowRight size={16} />
      </span>
    </Link>
  );
}
