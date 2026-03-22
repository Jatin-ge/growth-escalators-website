import { Service } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { ProcessStepper } from "@/components/ui/ProcessStepper";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const relatedCS = caseStudies.filter(cs => service.relatedCaseStudySlugs.includes(cs.slug));

  return (
    <>
      {/* 1. Hero (Dark) */}
      <section className="bg-bg-dark min-h-[60vh] flex items-center pt-20">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Service</span>
            <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mt-4 mb-6 max-w-3xl">
              {service.heroHeadline}
            </h1>
            <p className="text-text-secondary-dark text-xl max-w-2xl mb-10 leading-relaxed">
              {service.subheadline}
            </p>
            <Button href="/book-strategy-call" size="lg" variant="primary">
              Book a Free Strategy Call
            </Button>
          </FadeInOnScroll>
        </div>
      </section>

      {/* 2. Problem (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">The Problem</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-4">
              Sound Familiar?
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.problemPoints.map((point, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-border-light bg-white hover:border-accent/30 transition-colors">
                <h3 className="font-syne font-bold text-text-primary-light mb-2">{point.title}</h3>
                <p className="text-text-secondary-light text-sm leading-relaxed">{point.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. Approach (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Our Approach</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-4">
              How We Do It
            </h2>
          </div>
        </FadeInOnScroll>
        <ProcessStepper steps={service.approach} />
      </SectionWrapper>

      {/* 4. Deliverables (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">What You Get</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-4">
              Deliverables
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {service.deliverables.map((item, i) => (
            <FadeInOnScroll key={i} delay={i * 0.05}>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border-light bg-white">
                <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-text-secondary-light text-sm">{item}</span>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. Related Case Studies (Dark) */}
      {relatedCS.length > 0 && (
        <SectionWrapper variant="dark">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-mono uppercase tracking-widest">Results</span>
              <h2 className="font-syne font-bold text-4xl text-white mt-3 mb-4">
                See It In Action
              </h2>
            </div>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedCS.map((cs, i) => (
              <FadeInOnScroll key={cs.slug} delay={i * 0.1}>
                <CaseStudyCard
                  title={cs.brandName}
                  industry={cs.industry}
                  metric={cs.heroMetric}
                  metricLabel={cs.heroMetricLabel}
                  description={cs.description}
                  href={`/results/${cs.slug}`}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* 6. FAQ (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">FAQ</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={service.faq} />
        </div>
      </SectionWrapper>

      {/* 7. CTA */}
      <CTASection />
    </>
  );
}
