import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  industry: string;
  metric: string;
  metricLabel: string;
  description: string;
  href: string;
}

export function CaseStudyCard({ title, industry, metric, metricLabel, description, href }: CaseStudyCardProps) {
  return (
    <Link href={href} className="group block bg-bg-dark-2 border border-border-dark rounded-2xl p-8 hover:border-accent/30 hover:scale-[1.02] transition-all duration-300">
      <span className="text-accent text-xs font-semibold uppercase tracking-wider">{industry}</span>
      <h3 className="font-syne font-bold text-2xl text-white mt-2 mb-4">{title}</h3>
      <div className="mb-4">
        <div className="font-mono font-bold text-5xl text-accent">{metric}</div>
        <div className="text-text-secondary-dark text-sm uppercase tracking-wider mt-1">{metricLabel}</div>
      </div>
      <p className="text-text-secondary-dark text-sm leading-relaxed mb-6">{description}</p>
      <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
        Read Case Study <ArrowRight size={16} />
      </span>
    </Link>
  );
}
