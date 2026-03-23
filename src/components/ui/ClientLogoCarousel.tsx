"use client";

const brands = ["Odra Organics", "Paraizo", "Swarnsootra", "Atatika Studios", "Exzept", "Yellow Diaries", "Flight Ticket Fare", "Elixzor"];

export function ClientLogoCarousel() {
  const doubled = [...brands, ...brands];
  return (
    <div className="dark-section py-12 overflow-hidden relative" style={{ background: "#050505" }}>
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to right, #050505, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: "linear-gradient(to left, #050505, transparent)" }} />
      <p className="text-center text-xs tracking-widest uppercase mb-6" style={{ color: "#8A8F98" }}>Trusted by 50+ D2C brands</p>
      <div className="overflow-hidden">
        <div className="marquee-track flex gap-12 w-max">
          {doubled.map((brand, i) => (
            <span key={i} className="text-sm font-medium whitespace-nowrap transition-colors cursor-default hover:text-white/60" style={{ color: "rgba(255,255,255,0.3)" }}>
              {brand}
              <span className="mx-6" style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
