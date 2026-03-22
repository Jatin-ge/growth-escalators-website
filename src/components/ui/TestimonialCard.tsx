import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  rating: number;
}

export function TestimonialCard({ quote, name, company, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-border-light rounded-2xl p-8 shrink-0 w-[340px] md:w-[380px]">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>
      <p className="text-text-secondary-light leading-relaxed mb-6 text-sm">&quot;{quote}&quot;</p>
      <div>
        <p className="font-syne font-bold text-text-primary-light">{name}</p>
        <p className="text-text-secondary-light text-sm">{company}</p>
      </div>
    </div>
  );
}
