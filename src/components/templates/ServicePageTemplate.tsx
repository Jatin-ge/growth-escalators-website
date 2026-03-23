import { Service } from "@/content/services";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/content/caseStudies";
import { CheckCircle, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number; style?: React.CSSProperties }>>)[service.icon] || Icons.Zap;
  const relatedCS = caseStudies.filter(cs => service.relatedCaseStudySlugs.includes(cs.slug));

  return (
    <>
      {/* Hero */}
      <section className="dark-section pt-32 pb-24 relative overflow-hidden" style={{ background: "#050505" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full top-0 right-0"
            style={{ background: "radial-gradient(circle, rgba(0,232,123,0.06) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <FadeInOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{ background: "rgba(0,232,123,0.1)", color: "#00E87B" }}
              >
                Service
              </span>
            </div>
            <IconComponent size={48} strokeWidth={1} style={{ color: "#00E87B" }} className="mb-6" />
            <h1 className="font-display text-white mb-6 max-w-3xl" style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: "1.05" }}>
              {service.heroHeadline}
            </h1>
            <p className="text-xl leading-relaxed max-w-2xl mb-10" style={{ color: "#8A8F98" }}>
              {service.subheadline}
            </p>
            <Link
              href="/book-strategy-call"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold transition-all duration-200 glow-pulse"
              style={{ background: "#00E87B" }}
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Problem */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>The Problem</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Challenges We Solve</h2>
        </FadeInOnScroll>
        <div className="space-y-6">
          {service.problemPoints.map((point, i) => (
            <FadeInOnScroll key={i} delay={i * 0.08}>
              <div
                className="flex items-start gap-6 p-6 bg-white rounded-2xl border-l-4"
                style={{ borderLeftColor: "#00E87B", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)" }}
              >
                <span className="font-mono font-bold text-2xl shrink-0" style={{ color: "#00E87B" }}>0{i + 1}</span>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg mb-1" style={{ color: "#0A0A0A" }}>{point.title}</h3>
                  <p className="leading-relaxed" style={{ color: "#5C5F66" }}>{point.description}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* Approach */}
      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>How We Work</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Our Process</h2>
        </FadeInOnScroll>
        <div className="space-y-8">
          {service.approach.map((step, i) => (
            <FadeInOnScroll key={step.step} delay={i * 0.08}>
              <div className="grid grid-cols-[80px_1fr] gap-6 items-start">
                <span className="font-mono font-bold text-4xl" style={{ color: "#00E87B" }}>{step.step}</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2" style={{ color: "#0A0A0A" }}>{step.title}</h3>
                  <p className="leading-relaxed" style={{ color: "#5C5F66" }}>{step.description}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* Deliverables */}
      <SectionWrapper variant="light" className="border-t" style={{ borderColor: "rgba(0,0,0,0.04)" }}>
        <FadeInOnScroll>
          <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>What You Get</p>
          <h2 className="font-display mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Deliverables</h2>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.deliverables.map((d, i) => (
            <FadeInOnScroll key={i} delay={i * 0.05}>
              <div
                className="flex items-start gap-3 p-4 bg-white rounded-xl"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: "#00E87B" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#0A0A0A" }}>{d}</span>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* Related Case Studies */}
      {relatedCS.length > 0 && (
        <SectionWrapper variant="dark">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Proof</p>
            <h2 className="font-display text-white mb-12" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1" }}>Related Results</h2>
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

      {/* FAQ */}
      <SectionWrapper variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase mb-4" style={{ color: "#00E87B", letterSpacing: "0.2em" }}>Questions</p>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.1", color: "#0A0A0A" }}>Frequently Asked</h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.15}>
            <FAQAccordion items={service.faq} />
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
