import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  featured?: boolean;
}

export function ServiceCard({ title, description, href, icon, featured = false }: ServiceCardProps) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number; style?: React.CSSProperties }>>)[icon] || Icons.Zap;

  if (featured) {
    return (
      <Link
        href={href}
        className="group block rounded-2xl p-8 col-span-2 relative overflow-hidden hover:-translate-y-1 transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #0C0C0E 0%, #111114 100%)",
          border: "1px solid rgba(0,232,123,0.15)",
          boxShadow: "0 0 40px rgba(0,232,123,0.05)",
        }}
      >
        <IconComponent size={40} strokeWidth={1.5} style={{ color: "#00E87B" }} className="mb-6" />
        <h3 className="font-display text-3xl text-white mb-3">{title}</h3>
        <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: "#8A8F98" }}>{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: "#00E87B" }}>
          Learn more <ArrowRight size={16} />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.04)" }}
    >
      <IconComponent size={28} strokeWidth={1.5} style={{ color: "#00E87B" }} className="mb-4" />
      <h3 className="font-semibold text-xl mb-2" style={{ color: "#0A0A0A" }}>{title}</h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "#5C5F66" }}>{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: "#00E87B" }}>
        Learn more <ArrowRight size={14} />
      </span>
    </Link>
  );
}
