"use client";

const brands = [
  "Odra Organics", "Paraizo", "Swarnsootra", "Atatika Studios",
  "Exzept", "Yellow Diaries", "Flight Ticket Fare", "Elixzor"
];

export function ClientLogoCarousel() {
  const doubled = [...brands, ...brands];

  return (
    <div className="overflow-hidden py-8">
      <div className="flex animate-logo-scroll hover:[animation-play-state:paused] gap-8 w-max">
        {doubled.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/40 text-sm font-dm-sans whitespace-nowrap shrink-0 hover:text-white/70 hover:border-white/20 transition-colors"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}
