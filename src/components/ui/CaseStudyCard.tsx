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
    <Link
      href={href}
      className="group glass-card rounded-2xl p-8 block hover:-translate-y-1 transition-all duration-300"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
        style={{ background: "rgba(0,232,123,0.1)", color: "#00E87B" }}
      >
        {industry}
      </span>
      <h3 className="font-display text-3xl text-white mb-4">{title}</h3>
      <div className="mb-4">
        <div className="font-mono font-bold text-5xl" style={{ color: "#00E87B" }}>{metric}</div>
        <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "#8A8F98" }}>{metricLabel}</div>
      </div>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "#8A8F98" }}>{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: "#00E87B" }}>
        Read Case Study <ArrowRight size={14} />
      </span>
    </Link>
  );
}
