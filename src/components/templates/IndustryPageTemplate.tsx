import { Industry } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";
import { services } from "@/content/services";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";

interface IndustryPageTemplateProps {
  industry: Industry;
}

export function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  const relatedCS = caseStudies.filter(cs => industry.relatedCaseStudySlugs.includes(cs.slug));
  const relatedServices = services.filter(s => industry.relevantServiceSlugs.includes(s.slug));

  return (
    <>
      {/* 1. Hero (Dark) */}
      <section className="bg-bg-dark min-h-[60vh] flex items-center pt-20">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Industry</span>
            <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mt-4 mb-6 max-w-3xl">
              {industry.heroHeadline}
            </h1>
            <p className="text-text-secondary-dark text-xl max-w-2xl mb-10 leading-relaxed">
              {industry.subheadline}
            </p>
            <Button href="/book-strategy-call" size="lg" variant="primary">
              Book a Free Strategy Call
            </Button>
          </FadeInOnScroll>
        </div>
      </section>

      {/* 2. Challenges (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Challenges</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-4">
              We Understand Your Market
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industry.challenges.map((challenge, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-border-light bg-white hover:border-accent/30 transition-colors">
                <h3 className="font-syne font-bold text-text-primary-light mb-2">{challenge.title}</h3>
                <p className="text-text-secondary-light text-sm leading-relaxed">{challenge.description}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. Our Approach (Light) */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Our Approach</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-8">
              How We Help {industry.title} Brands Grow
            </h2>
            <p className="text-text-secondary-light leading-relaxed text-lg">{industry.ourApproach}</p>
          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      {/* 4. Relevant Services (Light) */}
      <SectionWrapper variant="light">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-mono uppercase tracking-widest">Services</span>
            <h2 className="font-syne font-bold text-4xl text-text-primary-light mt-3 mb-4">
              What We Do For {industry.title} Brands
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedServices.map((service, i) => (
            <FadeInOnScroll key={service.slug} delay={i * 0.1}>
              <ServiceCard
                title={service.shortTitle}
                description={service.description}
                href={`/services/${service.slug}`}
                icon={service.icon}
              />
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
                {industry.title} Brand Results
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

      {/* 6. CTA */}
      <CTASection />
    </>
  );
}
