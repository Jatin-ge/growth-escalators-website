import { Metadata } from "next";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { CalEmbed } from "@/components/ui/CalEmbed";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call | Growth Escalators",
  description: "Book your free 45-minute D2C growth strategy call with the Growth Escalators team. No pitch, no obligation — just actionable insights.",
};

export default function BookStrategyCallPage() {
  return (
    <>
      <section className="bg-bg-dark min-h-[40vh] flex items-center pt-20">
        <div className="max-w-[1280px] mx-auto px-6 py-16 text-center">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Free Strategy Call</span>
            <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              Let&apos;s Talk About Your Growth
            </h1>
            <p className="text-text-secondary-dark text-xl max-w-2xl mx-auto">
              Book a free 45-minute call with our team. We&apos;ll audit your current marketing, identify the biggest opportunities, and map out a custom growth plan — no pitch, no obligation.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="bg-bg-light py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "45 Minutes", sub: "Focused on your brand" },
              { title: "Free Audit", sub: "Of your current campaigns" },
              { title: "Growth Roadmap", sub: "Custom to your goals" },
            ].map((item, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-border-light bg-white">
                  <div className="font-syne font-bold text-2xl text-text-primary-light mb-1">{item.title}</div>
                  <div className="text-text-secondary-light text-sm">{item.sub}</div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
          <CalEmbed />
        </div>
      </section>
    </>
  );
}
