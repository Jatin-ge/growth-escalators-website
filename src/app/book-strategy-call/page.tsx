import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { CalEmbed } from "@/components/ui/CalEmbed";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Growth Escalators",
  description: "Book a free 30-minute strategy call with Growth Escalators. We'll audit your current setup and tell you exactly where the growth opportunities are.",
};

const callItems = [
  "Your current ad performance and what's working (and what isn't)",
  "Quick audit of your funnel and creative strategy",
  "The biggest growth opportunities we can see",
  "Whether we're a good fit to work together",
];

export default function BookStrategyCallPage() {
  return (
    <>
      <section className="dark-section pt-32 pb-16 relative overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full top-0 right-0"
            style={{ background: "radial-gradient(circle, rgba(0,232,123,0.06) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeInOnScroll>
            <span className="text-xs font-semibold uppercase mb-6 block" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Free Strategy Call</span>
            <h1 className="font-display text-white mb-6" style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: "1.05" }}>
              Let&apos;s Talk Growth
            </h1>
            <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "#8A8F98" }}>
              Book a free 30-minute strategy call. We&apos;ll audit your current setup and tell you exactly where the growth opportunities are.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <FadeInOnScroll direction="left">
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>
              What We&apos;ll Cover
            </h2>
            <div className="space-y-4 mb-8">
              {callItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#00E87B" }} />
                  <p className="leading-relaxed" style={{ color: "#5C5F66" }}>{item}</p>
                </div>
              ))}
            </div>
            <div
              className="p-6 rounded-2xl"
              style={{ background: "rgba(0,232,123,0.06)", border: "1px solid rgba(0,232,123,0.2)" }}
            >
              <p className="font-semibold mb-1" style={{ color: "#0A0A0A" }}>This is a real strategy session.</p>
              <p className="text-sm" style={{ color: "#5C5F66" }}>
                Not a sales pitch. We&apos;ll give you genuine insights regardless of whether we end up working together.
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="right" delay={0.15}>
            <CalEmbed />
          </FadeInOnScroll>
        </div>
      </SectionWrapper>
    </>
  );
}
