import Link from "next/link";

export function CTASection() {
  return (
    <section className="dark-section py-32 text-center relative overflow-hidden" style={{ background: "#050505" }}>
      {/* Glow behind headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,232,123,0.08) 0%, transparent 70%)" }}
      />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <p className="text-xs font-semibold uppercase mb-6" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Get Started</p>
        <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1" }}>Ready to Scale?</h2>
        <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "#8A8F98" }}>
          We work with a limited number of brands each month. If your brand is doing ₹5L+/month and you want profitable growth — let&apos;s talk.
        </p>
        <Link
          href="/book-strategy-call"
          className="inline-flex items-center justify-center px-10 py-5 rounded-full text-black font-semibold text-base transition-all duration-200 glow-pulse"
          style={{ background: "#00E87B" }}
        >
          Book Your Free Strategy Call
        </Link>
        <p className="text-sm mt-4" style={{ color: "#8A8F98" }}>Free strategy call · No commitment · 30 minutes</p>
      </div>
    </section>
  );
}
