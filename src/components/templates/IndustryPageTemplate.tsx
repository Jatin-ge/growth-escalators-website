import { Industry } from "@/content/industries";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { CTASection } from "@/components/ui/CTASection";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { caseStudies } from "@/content/caseStudies";
import { services } from "@/content/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function IndustryPageTemplate({ industry }: { industry: Industry }) {
  const relatedCS = caseStudies.filter(cs => industry.relatedCaseStudySlugs.includes(cs.slug));
  const relatedServices = services.filter(s => industry.relevantServiceSlugs.includes(s.slug));

  return (
    <>
      <section className="dark-section pt-32 pb-24 relative overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full top-0 right-0"
            style={{ background: "radial-gradient(circle, rgba(0,232,123,0.06) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeInOnScroll>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{ background: "rgba(0,232,123,0.1)", color: "#00E87B" }}
            >
              Industry
            </span>
            <h1 className="font-display text-white mb-6 max-w-3xl" style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: "1.05" }}>
              {industry.heroHeadline}
            </h1>
            <p className="text-xl leading-relaxed max-w-2xl mb-10" style={{ color: "#8A8F98" }}>
              {industry.subheadline}
            </p>
            <Link
              href="/book-strategy-call"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold transition-all duration-200 glow-pulse"
              style={{ background: "#00E87B" }}
            >
              Talk to Us <ArrowRight size={16} />
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Key Challenges</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>What Makes This Industry Different</h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industry.challenges.map((c, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className="bg-white rounded-2xl p-8 border-l-4 hover:-translate-y-1 transition-all duration-300"
                style={{
                  borderLeftColor: "#00E87B",
                  marginTop: i % 2 === 1 ? "24px" : "0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                <h3 className="font-semibold text-xl mb-3" style={{ color: "#0A0A0A" }}>{c.title}</h3>
                <p className="leading-relaxed" style={{ color: "#5C5F66" }}>{c.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Our Approach</p>
            <h2 className="font-display mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>
              How We Grow {industry.title} Brands
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.15}>
            <p className="text-lg leading-relaxed" style={{ color: "#5C5F66" }}>{industry.ourApproach}</p>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Relevant Services</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>
            What We Do for {industry.title}
          </h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedServices.map((s, i) => (
            <FadeInOnScroll key={s.slug} delay={i * 0.08}>
              <ServiceCard
                title={s.title}
                description={s.description}
                href={`/services/${s.slug}`}
                icon={s.icon}
              />
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {relatedCS.length > 0 && (
        <SectionWrapper variant="dark">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Proof</p>
            <h2 className="font-display text-white mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1" }}>Results in This Industry</h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCS.map((cs, i) => (
              <FadeInOnScroll key={cs.slug} delay={i * 0.1}>
                <CaseStudyCard
                  title={cs.brandName}
                  industry={cs.industry}
                  metric={cs.heroMetric}
                  metricLabel={cs.heroMetricLabel}
                  description={cs.summary}
                  href={`/results/${cs.slug}`}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </SectionWrapper>
      )}

      <CTASection />
    </>
  );
}
