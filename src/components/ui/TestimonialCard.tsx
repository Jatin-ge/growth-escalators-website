import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  rating: number;
}

export function TestimonialCard({ quote, name, company, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shrink-0 w-[340px] md:w-[400px]" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)" }}>
      <div className="font-display leading-none mb-2 opacity-30" style={{ fontSize: "80px", color: "#00E87B" }}>&quot;</div>
      <p className="font-display italic text-xl leading-relaxed mb-6 -mt-4" style={{ color: "#0A0A0A" }}>&ldquo;{quote}&rdquo;</p>
      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => <Star key={i} size={14} className="fill-accent" style={{ color: "#00E87B" }} />)}
      </div>
      <p className="font-semibold" style={{ color: "#0A0A0A" }}>{name}</p>
      <p className="text-sm" style={{ color: "#5C5F66" }}>{company}</p>
    </div>
  );
}
