import { CaseStudy } from "@/content/caseStudies";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { CTASection } from "@/components/ui/CTASection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Star, CheckCircle } from "lucide-react";

export function CaseStudyPageTemplate({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <section className="dark-section pt-32 pb-24 relative overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full -top-32 -right-32"
            style={{ background: "radial-gradient(circle, rgba(0,232,123,0.05) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeInOnScroll>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ background: "rgba(0,232,123,0.1)", color: "#00E87B" }}
            >
              {caseStudy.industry}
            </span>
            <h1 className="font-display text-white mb-4" style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: "1.05" }}>
              {caseStudy.brandName}
            </h1>
            {caseStudy.heroMetric !== "---" ? (
              <>
                <div className="font-mono font-bold mb-2" style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: "1.0", color: "#00E87B" }}>
                  {caseStudy.heroMetric}
                </div>
                <p className="text-sm uppercase tracking-widest" style={{ color: "#8A8F98" }}>{caseStudy.heroMetricLabel}</p>
              </>
            ) : (
              <div className="font-mono font-bold text-3xl" style={{ color: "#8A8F98" }}>Case Study Coming Soon</div>
            )}
          </FadeInOnScroll>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-3xl">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Overview</p>
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>The Brand</h2>
            <p className="text-lg leading-relaxed" style={{ color: "#5C5F66" }}>{caseStudy.summary}</p>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>The Problem</p>
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>The Challenge</h2>
            <p className="text-lg leading-relaxed" style={{ color: "#5C5F66" }}>{caseStudy.challenge}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.15}>
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>What We Did</p>
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Our Strategy</h2>
            <div className="space-y-4">
              {caseStudy.strategy.map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#00E87B" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "#5C5F66" }}>{step}</p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Results</p>
          <h2 className="font-display text-white mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1" }}>The Numbers</h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudy.results.map((r, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 text-center">
                {r.numeric > 0 ? (
                  <div className="font-mono font-bold text-4xl mb-2" style={{ color: "#00E87B" }}>
                    {r.prefix && <span className="font-sans">{r.prefix}</span>}
                    <AnimatedCounter target={r.numeric} suffix={r.suffix} />
                  </div>
                ) : (
                  <div className="font-mono font-bold text-2xl mb-2" style={{ color: r.value === "---" ? "#8A8F98" : "#00E87B" }}>
                    {r.value === "---" ? "—" : r.value}
                  </div>
                )}
                <div className="text-xs uppercase tracking-widest" style={{ color: "#8A8F98" }}>{r.label}</div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {caseStudy.testimonial && (
        <SectionWrapper variant="light">
          <FadeInOnScroll className="max-w-2xl mx-auto text-center">
            <div className="font-display leading-none mb-2 opacity-20" style={{ fontSize: "100px", color: "#00E87B" }}>&ldquo;</div>
            <p className="font-display italic text-2xl leading-relaxed mb-8 -mt-6" style={{ color: "#0A0A0A" }}>
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </p>
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} style={{ color: "#00E87B", fill: "#00E87B" }} />
              ))}
            </div>
            <p className="font-semibold" style={{ color: "#0A0A0A" }}>{caseStudy.testimonial.name}</p>
            <p className="text-sm" style={{ color: "#5C5F66" }}>{caseStudy.testimonial.role}</p>
          </FadeInOnScroll>
        </SectionWrapper>
      )}

      <CTASection />
    </>
  );
}
